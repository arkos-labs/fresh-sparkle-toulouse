import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-toiture-toulouse");

export const Route = createFileRoute("/nettoyage-toiture-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage toiture Toulouse \u2014 d\u00e9moussage | Clean&Fresh" },
      { name: "description", content: "Nettoyage et d\u00e9moussage toiture \u00e0 Toulouse et dans le 31. Traitement hydrofuge, anti-algues, anti-lichens garanti. Prolongez la dur\u00e9e de votre toit. Devis !" },
      { property: "og:title", content: "Nettoyage toiture Toulouse \u2014 d\u00e9moussage | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage et d\u00e9moussage toiture \u00e0 Toulouse et dans le 31. Traitement hydrofuge, anti-algues, anti-lichens garanti. Prolongez la dur\u00e9e de votre toit. Devis !" },
      { property: "og:url", content: "https://cleanfresh-toulouse.fr/nettoyage-toiture-toulouse" },
      { name: "twitter:title", content: "Nettoyage toiture Toulouse — démoussage | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage et démoussage toiture à Toulouse et dans le 31. Traitement hydrofuge, anti-algues, anti-lichens garanti. Prolongez la durée de votre toit. Devis !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanfresh-toulouse.fr/nettoyage-toiture-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
