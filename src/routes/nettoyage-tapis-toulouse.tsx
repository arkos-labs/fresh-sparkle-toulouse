import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-tapis-toulouse");

export const Route = createFileRoute("/nettoyage-tapis-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage tapis et moquette Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage de tapis et moquette \u00e0 domicile \u00e0 Toulouse : injection-extraction, taches et odeurs \u00e9limin\u00e9es, fibres raviv\u00e9es. Devis gratuit sous 24h." },
      { property: "og:title", content: "Nettoyage tapis et moquette Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de tapis et moquette \u00e0 domicile \u00e0 Toulouse : injection-extraction, taches et odeurs \u00e9limin\u00e9es, fibres raviv\u00e9es. Devis gratuit sous 24h." },
      { property: "og:url", content: "/nettoyage-tapis-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-tapis-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
