/**
 * Google Calendar — Vérification des créneaux disponibles
 *
 * CONFIGURATION :
 * 1. Dans Google Calendar, partager le calendrier "Tout le monde peut voir quand je suis occupé(e)"
 * 2. Créer une clé API sur https://console.cloud.google.com (activer "Google Calendar API")
 * 3. Ajouter dans .env :
 *    VITE_GCAL_API_KEY=AIzaSy...
 *    VITE_GCAL_CALENDAR_ID=votremail@gmail.com
 */

export type BusySlot = { start: string; end: string };

/**
 * Récupère les créneaux occupés pour une journée donnée via l'API freebusy.
 * Retourne [] si la configuration n'est pas définie (→ tous les créneaux affichés comme dispo).
 */
export async function fetchBusySlots(date: Date): Promise<BusySlot[]> {
  const apiKey   = import.meta.env.VITE_GCAL_API_KEY   as string | undefined;
  const calId    = import.meta.env.VITE_GCAL_CALENDAR_ID as string | undefined;

  if (!apiKey || !calId) return [];   // pas de config → tout libre

  const timeMin = new Date(date);
  timeMin.setHours(0, 0, 0, 0);
  const timeMax = new Date(date);
  timeMax.setHours(23, 59, 59, 999);

  try {
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          items: [{ id: calId }],
        }),
      },
    );
    const data = await res.json();
    return (data?.calendars?.[calId]?.busy ?? []) as BusySlot[];
  } catch {
    return [];   // en cas d'erreur réseau → tout libre (fail open)
  }
}

/**
 * Vérifie si un créneau de `durationMin` minutes à `slotStart` est libre.
 */
export function isSlotFree(
  slotStart: Date,
  durationMin: number,
  busy: BusySlot[],
): boolean {
  const slotEnd = new Date(slotStart.getTime() + durationMin * 60_000);
  return !busy.some((b) => {
    const bs = new Date(b.start);
    const be = new Date(b.end);
    return slotStart < be && slotEnd > bs;
  });
}

/**
 * Retourne les créneaux d'une journée avec leur statut disponible/indisponible.
 */
export function buildSlots(
  date: Date,
  durationMin: number,
  busy: BusySlot[],
): { time: string; available: boolean }[] {
  // Créneaux proposés : 8h – 17h30
  const RAW_SLOTS = ["08:00", "09:30", "11:00", "12:30", "14:00", "15:30", "17:00"];

  return RAW_SLOTS.map((time) => {
    const [h, m] = time.split(":").map(Number);
    const slotStart = new Date(date);
    slotStart.setHours(h, m, 0, 0);

    // Passé → indispo
    if (slotStart <= new Date()) return { time, available: false };

    return { time, available: isSlotFree(slotStart, durationMin, busy) };
  });
}
