import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-de-fin-de-chantier-toulouse");

export const Route = createFileRoute("/nettoyage-de-fin-de-chantier-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage fin de chantier Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage de fin de chantier \u00e0 Toulouse : poussi\u00e8re de pl\u00e2tre, r\u00e9sidus de colle, traces de peinture, vitres. Livraison de chantier propre. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage fin de chantier Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de fin de chantier \u00e0 Toulouse : poussi\u00e8re de pl\u00e2tre, r\u00e9sidus de colle, traces de peinture, vitres. Livraison de chantier propre. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-de-fin-de-chantier-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-de-fin-de-chantier-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
