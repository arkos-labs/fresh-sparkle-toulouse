import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-toiture-toulouse");

export const Route = createFileRoute("/nettoyage-toiture-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage toiture Toulouse \u2014 d\u00e9moussage | Clean&Fresh" },
      { name: "description", content: "Nettoyage et d\u00e9moussage de toiture \u00e0 Toulouse : tuiles, ardoises, goutti\u00e8res. Haute pression et traitement anti-mousse. Devis gratuit sous 24h." },
      { property: "og:title", content: "Nettoyage toiture Toulouse \u2014 d\u00e9moussage | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage et d\u00e9moussage de toiture \u00e0 Toulouse : tuiles, ardoises, goutti\u00e8res. Haute pression et traitement anti-mousse. Devis gratuit sous 24h." },
      { property: "og:url", content: "/nettoyage-toiture-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-toiture-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
