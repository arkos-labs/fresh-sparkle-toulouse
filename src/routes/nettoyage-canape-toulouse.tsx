import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-canape-toulouse");

export const Route = createFileRoute("/nettoyage-canape-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage canap\u00e9 Toulouse \u2014 d\u00e8s 49 \u20ac | Clean&Fresh" },
      { name: "description", content: "Nettoyage de canap\u00e9 et fauteuil \u00e0 domicile \u00e0 Toulouse : injection-extraction, taches et odeurs \u00e9limin\u00e9es. Fauteuil 49 \u20ac, canap\u00e9 2/3 places 79 \u20ac. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage canap\u00e9 Toulouse \u2014 d\u00e8s 49 \u20ac | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de canap\u00e9 et fauteuil \u00e0 domicile \u00e0 Toulouse : injection-extraction, taches et odeurs \u00e9limin\u00e9es. Fauteuil 49 \u20ac, canap\u00e9 2/3 places 79 \u20ac. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-canape-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-canape-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
