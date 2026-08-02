import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-diogene-toulouse");

export const Route = createFileRoute("/nettoyage-diogene-toulouse")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: service.slug },
    ],
    links: [{ rel: "canonical", href: service.slug }],
  }),
  component: () => <ServicePage service={service} />,
});
