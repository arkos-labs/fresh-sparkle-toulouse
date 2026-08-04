/**
 * Server Function — Lecture des créneaux occupés (freeBusy)
 *
 * La clé API Google reste côté serveur (secret GOOGLE_API_KEY).
 */
import { createServerFn } from "@tanstack/react-start";

export type BusySlot = { start: string; end: string };

export const fetchBusySlotsServerFn = createServerFn({ method: "POST" })
  .validator((data: { timeMin: string; timeMax: string }) => data)
  .handler(async ({ data }): Promise<BusySlot[]> => {
    const apiKey = process.env["GOOGLE_API_KEY"];
    const calId = process.env["GCAL_CALENDAR_ID"];
    if (!apiKey || !calId) return [];

    try {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timeMin: data.timeMin,
            timeMax: data.timeMax,
            items: [{ id: calId }],
          }),
        },
      );
      if (!res.ok) {
        console.error("[GCal freeBusy]", res.status, await res.text());
        return [];
      }
      const json = (await res.json()) as {
        calendars?: Record<string, { busy?: BusySlot[] }>;
      };
      return json.calendars?.[calId]?.busy ?? [];
    } catch (err) {
      console.error("[GCal freeBusy]", err);
      return [];
    }
  });