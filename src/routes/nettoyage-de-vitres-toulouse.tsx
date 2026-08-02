import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-de-vitres-toulouse");

export const Route = createFileRoute("/nettoyage-de-vitres-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage de vitres Toulouse \u2014 particuliers & pros | Clean&Fresh" },
      { name: "description", content: "Nettoyage de vitres \u00e0 Toulouse : maisons, appartements, vitrines de commerces et bureaux. R\u00e9sultat sans traces, entretien ponctuel ou r\u00e9gulier. Devis sous 24h." },
      { property: "og:title", content: "Nettoyage de vitres Toulouse \u2014 particuliers & pros | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de vitres \u00e0 Toulouse : maisons, appartements, vitrines de commerces et bureaux. R\u00e9sultat sans traces, entretien ponctuel ou r\u00e9gulier. Devis sous 24h." },
      { property: "og:url", content: "/nettoyage-de-vitres-toulouse" },
    ],
    links: [{ rel: "canonical", href: "/nettoyage-de-vitres-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
