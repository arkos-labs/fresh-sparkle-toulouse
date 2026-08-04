import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-terrasse-toulouse");

export const Route = createFileRoute("/nettoyage-terrasse-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage terrasse Toulouse \u2014 haute pression | Clean&Fresh" },
      { name: "description", content: "Nettoyage terrasse haute pression \u00e0 Toulouse et dans le 31. Pierre, b\u00e9ton, carrelage, bois, composite. Anti-mousse, d\u00e9graissage garanti. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage terrasse Toulouse \u2014 haute pression | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage terrasse haute pression \u00e0 Toulouse et dans le 31. Pierre, b\u00e9ton, carrelage, bois, composite. Anti-mousse, d\u00e9graissage garanti. Devis gratuit !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-terrasse-toulouse" },
      { name: "twitter:title", content: "Nettoyage terrasse Toulouse — haute pression | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage terrasse haute pression à Toulouse et dans le 31. Pierre, béton, carrelage, bois, composite. Anti-mousse, dégraissage garanti. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-terrasse-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
