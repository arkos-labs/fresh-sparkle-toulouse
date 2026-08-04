/**
 * EmailJS — Envoi d'emails directement depuis le navigateur
 *
 * CONFIGURATION (5 min) :
 * 1. Créer un compte gratuit sur https://www.emailjs.com
 * 2. Email Services → Add Service → Gmail (connecter le compte nettoyagecleanfresh@gmail.com)
 * 3. Email Templates → Create Template (voir les templates ci-dessous)
 * 4. Account → API Keys → copier la Public Key
 * 5. Ajouter dans .env :
 *    VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
 *    VITE_EMAILJS_SERVICE_ID=service_xxxxxx
 *    VITE_EMAILJS_TEMPLATE_CLIENT=template_xxxxxx   ← confirmation client
 *    VITE_EMAILJS_TEMPLATE_OWNER=template_xxxxxx    ← notification propriétaire
 *    VITE_EMAILJS_TEMPLATE_CANCEL=template_xxxxxx   ← annulation
 *    VITE_EMAILJS_TEMPLATE_REMINDER=template_xxxxxx ← rappel 24h (client uniquement)
 *
 * ─── VARIABLES DISPONIBLES DANS LES TEMPLATES EMAILJS ───────────────────────
 *
 *  {{client_name}}      — Nom et prénom du client
 *  {{client_phone}}     — Téléphone du client
 *  {{client_email}}     — Email du client
 *  {{client_address}}   — Adresse complète (rue, CP, ville)
 *  {{formule_name}}     — Nom de la formule choisie
 *  {{formule_price}}    — Tarif de base sans options (ex: "79")
 *  {{options_list}}     — Liste des options sélectionnées avec prix
 *  {{total_price}}      — Montant total avec options (ex: "113")
 *  {{booking_date}}     — Date de l'intervention (ex: "2026-09-15")
 *  {{booking_time}}     — Heure de début (ex: "10:00")
 *  {{service_tip}}      — Conseil spécifique selon le service
 *  {{cancel_url}}       — Lien d'annulation unique
 *  {{owner_phone}}      — Téléphone professionnel du propriétaire
 *  {{owner_email}}      — Email professionnel du propriétaire
 */

const BASE = "https://api.emailjs.com/api/v1.0/email/send";

const CFG = {
  publicKey:   import.meta.env["VITE_EMAILJS_PUBLIC_KEY"]   as string,
  serviceId:   import.meta.env["VITE_EMAILJS_SERVICE_ID"]   as string,
  tplClient:   import.meta.env["VITE_EMAILJS_TEMPLATE_CLIENT"] as string,
  tplOwner:    import.meta.env["VITE_EMAILJS_TEMPLATE_OWNER"]  as string,
  tplCancel:   import.meta.env["VITE_EMAILJS_TEMPLATE_CANCEL"] as string,
  tplReminder: import.meta.env["VITE_EMAILJS_TEMPLATE_REMINDER"] as string,
};

function configured() {
  return !!(
    CFG.publicKey &&
    CFG.serviceId &&
    CFG.tplClient &&
    CFG.tplOwner
  );
}

async function send(templateId: string, params: Record<string, string>) {
  if (!configured()) {
    console.warn(
      "[EmailJS] Variables d'environnement manquantes — email non envoyé.",
    );
    return;
  }
  if (!templateId) {
    console.warn("[EmailJS] Template ID manquant — email non envoyé.");
    return;
  }
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: CFG.serviceId,
      template_id: templateId,
      user_id: CFG.publicKey,
      template_params: params,
    }),
  });
  if (!res.ok) console.error("[EmailJS] Erreur envoi :", await res.text());
}

// ─── Tips par service ────────────────────────────────────────────────────────

const SERVICE_TIP: Record<string, string> = {
  auto: "🚗 Pensez à vider un maximum de vos effets personnels du véhicule avant notre passage. Cela nous permettra de nettoyer chaque recoin efficacement.",
  canape:
    "🛋️ Si votre canapé présente des tâches importantes (vin, sang, encre…), notre technicien pourra vous proposer un traitement détachage intensif sur place (+19 € selon l'intensité).",
  matelas:
    "🛏️ Si votre matelas présente des auréoles ou tâches prononcées, notre technicien pourra vous proposer un traitement intensif sur place (+19 € selon l'intensité).",
  tapis: "",
};

// ─── Types ───────────────────────────────────────────────────────────────────

export type BookingPayload = {
  service_id: string;
  service_name: string;
  formule_name: string;
  formule_price: number;
  options: { name: string; price: number }[];
  total_price: number;
  booking_date: string; // "2026-09-15"
  booking_time: string; // "10:00"
  client_name: string;
  client_phone: string;
  client_email: string;
  client_street: string;
  client_zip: string;
  client_city: string;
  cancel_url: string;
};

// ─── Fonctions publiques ──────────────────────────────────────────────────────

/**
 * Envoi la confirmation au client + notification au propriétaire.
 * Génère aussi l'URL d'annulation encodée en base64.
 * Retourne le cancel token.
 */
export async function sendBookingEmails(b: BookingPayload): Promise<string> {
  const optionsList =
    b.options.length > 0
      ? b.options.map((o) => `• ${o.name} (+${o.price} €)`).join("\n")
      : "Aucune option";

  const tip = SERVICE_TIP[b.service_id] ?? "";
  const cancelToken = btoa(
    JSON.stringify({
      name: b.client_name,
      email: b.client_email,
      phone: b.client_phone,
      formule: b.formule_name,
      date: b.booking_date,
      time: b.booking_time,
    }),
  );

  const siteUrl    = import.meta.env["VITE_SITE_URL"]    ?? "https://cleanfresh-toulouse.fr";
  const cancelUrl  = `${siteUrl}/annuler?token=${cancelToken}`;
  const ownerPhone = import.meta.env["VITE_OWNER_PHONE"] ?? "07 67 12 75 00";
  const ownerEmail = import.meta.env["VITE_OWNER_EMAIL"] ?? "nettoyagecleanfresh@gmail.com";

  const fullAddress = `${b.client_street}, ${b.client_zip} ${b.client_city}`;

  const common = {
    client_name: b.client_name,
    client_phone: b.client_phone,
    client_email: b.client_email,
    client_address: fullAddress,
    formule_name: b.formule_name,
    formule_price: String(b.formule_price), // tarif de base sans options
    options_list: optionsList,
    total_price: String(b.total_price), // tarif total avec options
    booking_date: b.booking_date,
    booking_time: b.booking_time,
    service_tip: tip,
    cancel_url: cancelUrl,
    owner_phone: ownerPhone,
    owner_email: ownerEmail,
  };

  // Email client + propriétaire en parallèle
  await Promise.all([send(CFG.tplClient, common), send(CFG.tplOwner, common)]);

  return cancelToken;
}

/**
 * Envoi un email d'annulation au propriétaire.
 */
export async function sendCancellationEmail(info: {
  client_name: string;
  client_phone: string;
  client_email: string;
  formule: string;
  date: string;
  time: string;
}) {
  if (!CFG.tplCancel) return;
  const ownerPhone = import.meta.env["VITE_OWNER_PHONE"] ?? "07 67 12 75 00";
  await send(CFG.tplCancel, {
    client_name: info.client_name,
    client_phone: info.client_phone,
    client_email: info.client_email,
    formule_name: info.formule,
    booking_date: info.date,
    booking_time: info.time,
    owner_phone: ownerPhone,
  });
}

/**
 * Envoi un rappel 24h avant AU CLIENT UNIQUEMENT.
 * Appeler cette fonction via un cron job ou un service de planification.
 */
export async function sendReminderEmail(params: {
  client_name: string;
  client_phone: string;
  client_email: string;
  formule_name: string;
  booking_date: string;
  booking_time: string;
  client_address: string;
  cancel_url: string;
}) {
  if (!CFG.tplReminder) {
    console.warn("[EmailJS] Template rappel (VITE_EMAILJS_TEMPLATE_REMINDER) non configuré.");
    return;
  }
  const ownerPhone = import.meta.env["VITE_OWNER_PHONE"] ?? "07 67 12 75 00";
  // Envoi UNIQUEMENT au client — pas au propriétaire
  await send(CFG.tplReminder, {
    ...params,
    owner_phone: ownerPhone,
  });
}
