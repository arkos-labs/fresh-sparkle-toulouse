import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-matelas-toulouse");

export const Route = createFileRoute("/nettoyage-matelas-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage matelas Toulouse \u2014 anti-acariens | Clean&Fresh" },
      { name: "description", content: "Nettoyage de matelas \u00e0 domicile \u00e0 Toulouse : injection-extraction, traitement anti-acariens, d\u00e9sinfection et neutralisation des odeurs. Devis gratuit sous 24h." },
      { property: "og:title", content: "Nettoyage matelas Toulouse \u2014 anti-acariens | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de matelas \u00e0 domicile \u00e0 Toulouse : injection-extraction, traitement anti-acariens, d\u00e9sinfection et neutralisation des odeurs. Devis gratuit sous 24h." },
      { property: "og:url", content: "/nettoyage-matelas-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-matelas-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
