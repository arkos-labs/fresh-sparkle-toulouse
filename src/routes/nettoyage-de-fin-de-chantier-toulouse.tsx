import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-de-fin-de-chantier-toulouse");

export const Route = createFileRoute("/nettoyage-de-fin-de-chantier-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage fin de chantier Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage fin de chantier \u00e0 Toulouse et dans le 31. Poussi\u00e8res, r\u00e9sidus, vitres, sols \u2014 livraison propre garantie. Particuliers et pros. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage fin de chantier Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage fin de chantier \u00e0 Toulouse et dans le 31. Poussi\u00e8res, r\u00e9sidus, vitres, sols \u2014 livraison propre garantie. Particuliers et pros. Devis gratuit !" },
      { property: "og:url", content: "https://cleanfresh-toulouse.fr/nettoyage-de-fin-de-chantier-toulouse" },
      { name: "twitter:title", content: "Nettoyage fin de chantier Toulouse | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage fin de chantier à Toulouse et dans le 31. Poussières, résidus, vitres, sols — livraison propre garantie. Particuliers et pros. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanfresh-toulouse.fr/nettoyage-de-fin-de-chantier-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
