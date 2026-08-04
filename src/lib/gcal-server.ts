/**
 * Google Calendar — Écriture d'événements (côté serveur uniquement)
 *
 * Utilise un Service Account Google avec JWT signé via Web Crypto API.
 * Compatible Node.js 18+ et Cloudflare Workers.
 *
 * Variables d'environnement requises (côté serveur, sans VITE_ prefix) :
 *   GCAL_SERVICE_ACCOUNT_EMAIL   ex: cleanfresh-booking@xxx.iam.gserviceaccount.com
 *   GCAL_SERVICE_ACCOUNT_KEY     La clé privée PEM (-----BEGIN PRIVATE KEY-----)
 *   GCAL_CALENDAR_ID             ex: votreadresse@gmail.com
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type GCalEvent = {
  summary: string;
  description: string;
  start: { dateTime: string; timeZone: string };
  end: { dateTime: string; timeZone: string };
  attendees?: { email: string }[];
  reminders?: {
    useDefault: boolean;
    overrides?: { method: string; minutes: number }[];
  };
};

// ─── Helpers JWT (Web Crypto API — pas de dépendances) ───────────────────────

function base64url(input: ArrayBuffer | string): string {
  let bytes: Uint8Array;
  if (typeof input === "string") {
    bytes = new TextEncoder().encode(input);
  } else {
    bytes = new Uint8Array(input);
  }
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i] ?? 0);
  }
  return btoa(binary)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function importRsaPrivateKey(pem: string): Promise<CryptoKey> {
  const pemBody = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");

  const binary = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

  return crypto.subtle.importKey(
    "pkcs8",
    binary.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function createJwt(
  serviceAccountEmail: string,
  privateKeyPem: string,
  scope: string,
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccountEmail,
    scope,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(payload));
  const signingInput = `${headerB64}.${payloadB64}`;

  const privateKey = await importRsaPrivateKey(privateKeyPem);
  const signatureBuffer = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    privateKey,
    new TextEncoder().encode(signingInput),
  );

  const signatureB64 = base64url(signatureBuffer);
  return `${signingInput}.${signatureB64}`;
}

async function getAccessToken(
  serviceAccountEmail: string,
  privateKeyPem: string,
): Promise<string> {
  const jwt = await createJwt(
    serviceAccountEmail,
    privateKeyPem,
    "https://www.googleapis.com/auth/calendar",
  );

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`[GCal] Erreur token OAuth: ${err}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

// ─── Fonctions publiques ──────────────────────────────────────────────────────

function getConfig() {
  const email = process.env["GCAL_SERVICE_ACCOUNT_EMAIL"];
  const key   = process.env["GCAL_SERVICE_ACCOUNT_KEY"];
  const calId = process.env["GCAL_CALENDAR_ID"];
  // Supporte les clés stockées avec des \n littéraux
  return { email, key: key?.replace(/\\n/g, "\n"), calId };
}

/**
 * Crée un événement dans Google Calendar.
 * Retourne l'ID de l'événement créé, ou null si non configuré.
 */
export async function createCalendarEvent(
  event: GCalEvent,
): Promise<string | null> {
  const { email, key, calId } = getConfig();
  if (!email || !key || !calId) {
    console.warn("[GCal] Variables serveur manquantes — événement non créé.");
    return null;
  }

  try {
    const token = await getAccessToken(email, key);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events?sendUpdates=all`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`[GCal] Erreur création événement: ${err}`);
    }

    const data = (await res.json()) as { id: string };
    console.log("[GCal] Événement créé :", data.id);
    return data.id;
  } catch (err) {
    console.error("[GCal] createCalendarEvent :", err);
    return null;
  }
}

/**
 * Supprime un événement Google Calendar par son ID.
 * Utilisé lors d'une annulation.
 */
export async function deleteCalendarEvent(
  eventId: string,
): Promise<boolean> {
  const { email, key, calId } = getConfig();
  if (!email || !key || !calId || !eventId) {
    console.warn("[GCal] Variables serveur manquantes — événement non supprimé.");
    return false;
  }

  try {
    const token = await getAccessToken(email, key);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events/${eventId}?sendUpdates=all`;

    const res = await fetch(url, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 204 || res.status === 200) {
      console.log("[GCal] Événement supprimé :", eventId);
      return true;
    }
    if (res.status === 404) {
      console.warn("[GCal] Événement introuvable (déjà supprimé ?) :", eventId);
      return true; // Considéré comme succès
    }

    const err = await res.text();
    throw new Error(`[GCal] Erreur suppression: ${err}`);
  } catch (err) {
    console.error("[GCal] deleteCalendarEvent :", err);
    return false;
  }
}

/**
 * Construit la description complète de l'événement Google Calendar.
 */
export function buildEventDescription(params: {
  client_name: string;
  client_phone: string;
  client_email: string;
  client_street: string;
  client_zip: string;
  client_city: string;
  service_name: string;
  formule_name: string;
  formule_price: number;
  options: { name: string; price: number }[];
  total_price: number;
  cancel_url: string;
  owner_phone: string;
}): string {
  const optLines =
    params.options.length > 0
      ? params.options.map((o) => `  • ${o.name} : +${o.price} €`).join("\n")
      : "  Aucune option";

  const address = `${params.client_street}, ${params.client_zip} ${params.client_city}`;

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧹 RÉSERVATION CLEAN&FRESH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CLIENT
  Nom    : ${params.client_name}
  Tél    : ${params.client_phone}
  Email  : ${params.client_email}

📍 LIEU D'INTERVENTION
  ${address}

🛠 PRESTATION
  Service  : ${params.service_name}
  Formule  : ${params.formule_name}

💶 DÉTAIL FINANCIER
  Tarif de base (sans options) : ${params.formule_price} €
  Options sélectionnées :
${optLines}
  ─────────────────────────────
  TOTAL AVEC OPTIONS : ${params.total_price} €

❌ ANNULATION
  Lien d'annulation client :
  ${params.cancel_url}

📞 Contact propriétaire : ${params.owner_phone}
`.trim();
}
