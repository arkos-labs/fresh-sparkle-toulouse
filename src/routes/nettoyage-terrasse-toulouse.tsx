import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-terrasse-toulouse");

export const Route = createFileRoute("/nettoyage-terrasse-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage terrasse Toulouse \u2014 haute pression | Clean&Fresh" },
      { name: "description", content: "Nettoyage de terrasse \u00e0 Toulouse : dalles, b\u00e9ton, carrelage ext\u00e9rieur et bois. D\u00e9moussage et haute pression. Devis gratuit sous 24h." },
      { property: "og:title", content: "Nettoyage terrasse Toulouse \u2014 haute pression | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de terrasse \u00e0 Toulouse : dalles, b\u00e9ton, carrelage ext\u00e9rieur et bois. D\u00e9moussage et haute pression. Devis gratuit sous 24h." },
      { property: "og:url", content: "/nettoyage-terrasse-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-terrasse-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
