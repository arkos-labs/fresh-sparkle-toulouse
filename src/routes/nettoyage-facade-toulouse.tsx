import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-facade-toulouse");

export const Route = createFileRoute("/nettoyage-facade-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage fa\u00e7ade Toulouse \u2014 d\u00e9moussage pro | Clean&Fresh" },
      { name: "description", content: "Nettoyage fa\u00e7ade \u00e0 Toulouse et dans le 31. Pierre, cr\u00e9pi, brique : d\u00e9moussage, haute pression, traitement hydrofuge. R\u00e9sultat garanti. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage fa\u00e7ade Toulouse \u2014 d\u00e9moussage pro | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage fa\u00e7ade \u00e0 Toulouse et dans le 31. Pierre, cr\u00e9pi, brique : d\u00e9moussage, haute pression, traitement hydrofuge. R\u00e9sultat garanti. Devis gratuit !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-facade-toulouse" },
      { name: "twitter:title", content: "Nettoyage façade Toulouse — maisons & immeubles | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage façade à Toulouse et dans le 31. Pierre, crépi, brique : démoussage, haute pression, traitement hydrofuge. Résultat soigné. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-facade-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
