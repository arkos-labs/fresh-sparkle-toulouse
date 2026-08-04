/**
 * Server Function — Création d'une réservation
 *
 * Appelée depuis reserver.tsx lors de la soumission du formulaire.
 * Exécutée côté serveur (Cloudflare Workers / Node.js).
 * Crée l'événement dans Google Calendar + envoie les emails.
 */

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createCalendarEvent, buildEventDescription } from "@/lib/gcal-server";

// ─── Schéma de validation ────────────────────────────────────────────────────

export const BookingInputSchema = z.object({
  service_id: z.string(),
  service_name: z.string(),
  formule_id: z.string(),
  formule_name: z.string(),
  formule_price: z.number(),
  options: z.array(z.object({ name: z.string(), price: z.number() })),
  total_price: z.number(),
  duration_min: z.number(),
  booking_date: z.string(), // "2026-09-15"
  booking_time: z.string(), // "10:00"
  client_name: z.string(),
  client_phone: z.string(),
  client_email: z.string().email(),
  client_street: z.string(),
  client_zip: z.string(),
  client_city: z.string(),
  cancel_token: z.string(), // token base64 déjà généré côté client
});

export type BookingInput = z.infer<typeof BookingInputSchema>;

export type BookingResult = {
  success: boolean;
  gcal_event_id: string | null;
  cancel_token: string;
  error?: string;
};

// ─── Server Function ─────────────────────────────────────────────────────────

export const createBookingServerFn = createServerFn({ method: "POST" })
  .validator((data: BookingInput) => BookingInputSchema.parse(data))
  .handler(async ({ data }): Promise<BookingResult> => {
    try {
      const siteUrl =
        process.env["VITE_SITE_URL"] ?? "https://fresh-sparkle-toulouse-6hqe.vercel.app";
      const ownerPhone =
        process.env["VITE_OWNER_PHONE"] ?? "07 67 12 75 00";
      const cancelUrl = `${siteUrl}/annuler?token=${data.cancel_token}`;

      // ── 1. Construire l'événement Google Calendar ──
      const description = buildEventDescription({
        client_name: data.client_name,
        client_phone: data.client_phone,
        client_email: data.client_email,
        client_street: data.client_street,
        client_zip: data.client_zip,
        client_city: data.client_city,
        service_name: data.service_name,
        formule_name: data.formule_name,
        formule_price: data.formule_price,
        options: data.options,
        total_price: data.total_price,
        cancel_url: cancelUrl,
        owner_phone: ownerPhone,
      });

      // ── 2. Calculer start / end ──
      // On envoie l'heure LOCALE (ex: "2026-08-30T18:30:00") SANS offset
      // + timeZone:"Europe/Paris" → Google Calendar gère lui-même la conversion UTC
      const dateParts = data.booking_date.split("-").map(Number);
      const timeParts = data.booking_time.split(":").map(Number);
      const year   = dateParts[0] ?? 2026;
      const month  = dateParts[1] ?? 1;
      const day    = dateParts[2] ?? 1;
      const hour   = timeParts[0] ?? 8;
      const minute = timeParts[1] ?? 0;

      const pad = (n: number) => String(n).padStart(2, "0");
      const startLocalStr = `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00`;

      // Durée en millisecondes pour calculer l'heure de fin
      const startMs = new Date(startLocalStr).getTime();
      const endMs = startMs + data.duration_min * 60_000;
      const endDate = new Date(endMs);
      const endLocalStr = `${endDate.getFullYear()}-${pad(endDate.getMonth() + 1)}-${pad(endDate.getDate())}T${pad(endDate.getHours())}:${pad(endDate.getMinutes())}:00`;

      const fullAddress = `${data.client_street}, ${data.client_zip} ${data.client_city}`;

      const gcalEvent = {
        summary: `🧹 ${data.formule_name} — ${data.client_name}`,
        description,
        location: fullAddress,
        start: {
          dateTime: startLocalStr,
          timeZone: "Europe/Paris",
        },
        end: {
          dateTime: endLocalStr,
          timeZone: "Europe/Paris",
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // rappel 24h
            { method: "popup", minutes: 60 },       // rappel 1h (propriétaire)
          ],
        },
      };

      // ── 3. Créer l'événement ──
      const gcal_event_id = await createCalendarEvent(gcalEvent);

      return {
        success: true,
        gcal_event_id,
        cancel_token: data.cancel_token,
      };
    } catch (err) {
      console.error("[booking server fn] :", err);
      return {
        success: false,
        gcal_event_id: null,
        cancel_token: data.cancel_token,
        error: String(err),
      };
    }
  });
