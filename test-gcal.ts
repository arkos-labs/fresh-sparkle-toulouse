import { createCalendarEvent } from "./src/lib/gcal-server";

async function test() {
  console.log("Testing GCal integration...");
  console.log("Email:", process.env.GCAL_SERVICE_ACCOUNT_EMAIL);
  console.log("CalID:", process.env.GCAL_CALENDAR_ID);
  
  try {
    const eventId = await createCalendarEvent({
      summary: "Test Event",
      description: "This is a test event",
      location: "Toulouse",
      start: {
        dateTime: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
        timeZone: "Europe/Paris"
      },
      end: {
        dateTime: new Date(Date.now() + 25 * 3600 * 1000).toISOString(),
        timeZone: "Europe/Paris"
      }
    });
    console.log("Event created successfully! ID:", eventId);
  } catch (error) {
    console.error("Error creating event:", error);
  }
}

test();
