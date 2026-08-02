import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-facade-toulouse");

export const Route = createFileRoute("/nettoyage-facade-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage fa\u00e7ade Toulouse \u2014 maisons & immeubles | Clean&Fresh" },
      { name: "description", content: "Nettoyage de fa\u00e7ade \u00e0 Toulouse : cr\u00e9pi, enduit, brique, b\u00e9ton. \u00c9limination des mousses, pollution et traces noires. Devis gratuit sous 24h." },
      { property: "og:title", content: "Nettoyage fa\u00e7ade Toulouse \u2014 maisons & immeubles | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de fa\u00e7ade \u00e0 Toulouse : cr\u00e9pi, enduit, brique, b\u00e9ton. \u00c9limination des mousses, pollution et traces noires. Devis gratuit sous 24h." },
      { property: "og:url", content: "/nettoyage-facade-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-facade-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
