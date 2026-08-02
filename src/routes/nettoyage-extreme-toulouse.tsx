import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-extreme-toulouse");

export const Route = createFileRoute("/nettoyage-extreme-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage extr\u00eame Toulouse \u2014 logement insalubre | Clean&Fresh" },
      { name: "description", content: "Nettoyage extr\u00eame \u00e0 Toulouse : logement insalubre, syndrome de Diog\u00e8ne, d\u00e9barras, d\u00e9sinfection compl\u00e8te. Intervention discr\u00e8te et sans jugement. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage extr\u00eame Toulouse \u2014 logement insalubre | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage extr\u00eame \u00e0 Toulouse : logement insalubre, syndrome de Diog\u00e8ne, d\u00e9barras, d\u00e9sinfection compl\u00e8te. Intervention discr\u00e8te et sans jugement. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-extreme-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-extreme-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
