/**
 * Google Calendar — Vérification des créneaux disponibles
 *
 * La lecture freeBusy passe par une server function (src/lib/gcalFreeBusy.functions.ts)
 * afin que la clé API Google (secret GOOGLE_API_KEY) reste côté serveur.
 *
 * NOTE : Pour l'écriture des événements (création/suppression), voir gcal-server.ts
 */

import { fetchBusySlotsServerFn } from "@/lib/gcalFreeBusy.functions";

export type BusySlot = { start: string; end: string };

/**
 * Récupère les créneaux occupés pour une journée donnée via l'API freebusy.
 * Retourne [] si la configuration n'est pas définie (→ tous les créneaux affichés comme dispo).
 */
export async function fetchBusySlots(date: Date): Promise<BusySlot[]> {
  const timeMin = new Date(date);
  timeMin.setHours(0, 0, 0, 0);
  const timeMax = new Date(date);
  timeMax.setHours(23, 59, 59, 999);

  try {
    return await fetchBusySlotsServerFn({
      data: {
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
      },
    });
  } catch {
    return []; // en cas d'erreur réseau → tout libre (fail open)
  }
}

/** Marge de trajet entre deux prestations (20 min) */
export const TRAVEL_BUFFER_MS = 20 * 60_000;

/**
 * Vérifie si un créneau de `durationMin` minutes à `slotStart` est libre,
 * en tenant compte d'une marge de trajet de 1h20 avant et après chaque prestation.
 */
export function isSlotFree(
  slotStart: Date,
  durationMin: number,
  busy: BusySlot[],
): boolean {
  const slotStartMs = slotStart.getTime();
  const slotEndMs = slotStartMs + durationMin * 60_000;
  return !busy.some((b) => {
    const bs = new Date(b.start).getTime();
    const be = new Date(b.end).getTime();
    // Conflit si le nouveau créneau (+ marge trajet) chevauche une période occupée
    // → slotStart doit être ≥ be + 1h20 (arriver après la fin du RDV précédent + trajet)
    // → slotEnd + 1h20 doit être ≤ bs (partir assez tôt pour arriver au RDV suivant)
    return slotStartMs < be + TRAVEL_BUFFER_MS && slotEndMs + TRAVEL_BUFFER_MS > bs;
  });
}

/**
 * Retourne les créneaux d'une journée avec leur statut disponible/indisponible.
 * Plage horaire : 08h00 – 20h00 (7j/7 selon votre configuration)
 */
export function buildSlots(
  date: Date,
  durationMin: number,
  busy: BusySlot[],
): { time: string; available: boolean }[] {
  // Créneaux proposés : 08h – 21h00 tous les 30 min (7j/7)
  const RAW_SLOTS = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00",
  ];

  // Limite : pas de réservation à moins de 24h à l'avance
  const minBookingTime = new Date(Date.now() + 24 * 60 * 60 * 1000);

  return RAW_SLOTS.map((time) => {
    const parts = time.split(":").map(Number);
    const h = parts[0] ?? 8;
    const m = parts[1] ?? 0;
    const slotStart = new Date(date);
    slotStart.setHours(h, m, 0, 0);

    // Trop tôt (moins de 24h) → indispo
    if (slotStart <= minBookingTime) return { time, available: false };

    return { time, available: isSlotFree(slotStart, durationMin, busy) };
  });
}
