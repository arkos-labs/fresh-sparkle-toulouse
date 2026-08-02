import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-dappartement-ou-maison");

export const Route = createFileRoute("/nettoyage-dappartement-ou-maison")({
  head: () => ({
    meta: [
      { title: "Nettoyage appartement ou maison Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage complet d'appartement ou de maison \u00e0 Toulouse : grand m\u00e9nage, remise en \u00e9tat avant ou apr\u00e8s d\u00e9m\u00e9nagement, entretien r\u00e9gulier. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage appartement ou maison Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage complet d'appartement ou de maison \u00e0 Toulouse : grand m\u00e9nage, remise en \u00e9tat avant ou apr\u00e8s d\u00e9m\u00e9nagement, entretien r\u00e9gulier. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-dappartement-ou-maison" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-dappartement-ou-maison" }],
  }),
  component: () => <ServicePage service={service} />,
});
