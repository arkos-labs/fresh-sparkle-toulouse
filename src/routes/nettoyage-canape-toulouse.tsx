import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-canape-toulouse");

export const Route = createFileRoute("/nettoyage-canape-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage canap\u00e9 Toulouse \u2014 d\u00e8s 49 \u20ac | Clean&Fresh" },
      { name: "description", content: "Nettoyage canap\u00e9 pro \u00e0 Toulouse et dans tout le 31. Cuir, tissu, microfibre \u2014 taches, odeurs, acariens \u00e9limin\u00e9s. \u00c0 domicile. Prix comp\u00e9titifs. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage canap\u00e9 Toulouse \u2014 d\u00e8s 49 \u20ac | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage canap\u00e9 pro \u00e0 Toulouse et dans tout le 31. Cuir, tissu, microfibre \u2014 taches, odeurs, acariens \u00e9limin\u00e9s. \u00c0 domicile. Prix comp\u00e9titifs. Devis gratuit !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-canape-toulouse" },
      { name: "twitter:title", content: "Nettoyage canapé Toulouse — dès 49 € | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage canapé pro à Toulouse et dans tout le 31. Cuir, tissu, microfibre — taches, odeurs, acariens éliminés. À domicile. Prix compétitifs. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-canape-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
