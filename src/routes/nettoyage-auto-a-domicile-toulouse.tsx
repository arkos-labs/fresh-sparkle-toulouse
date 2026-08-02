import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-auto-a-domicile-toulouse");

export const Route = createFileRoute("/nettoyage-auto-a-domicile-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage auto \u00e0 domicile Toulouse \u2014 int\u00e9rieur | Clean&Fresh" },
      { name: "description", content: "Nettoyage int\u00e9rieur de voiture \u00e0 domicile \u00e0 Toulouse : si\u00e8ges, moquettes, coffre, plastiques. Injection-extraction et produits \u00e9cologiques. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage auto \u00e0 domicile Toulouse \u2014 int\u00e9rieur | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage int\u00e9rieur de voiture \u00e0 domicile \u00e0 Toulouse : si\u00e8ges, moquettes, coffre, plastiques. Injection-extraction et produits \u00e9cologiques. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-auto-a-domicile-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-auto-a-domicile-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
