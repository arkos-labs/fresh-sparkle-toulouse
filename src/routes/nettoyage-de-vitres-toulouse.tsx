import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-de-vitres-toulouse");

export const Route = createFileRoute("/nettoyage-de-vitres-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage vitres Toulouse \u2014 sans traces garanti | Clean&Fresh" },
      { name: "description", content: "Nettoyage de vitres \u00e0 Toulouse et dans le 31. Particuliers, copropri\u00e9t\u00e9s, professionnels. Sans traces, r\u00e9sultat impeccable. Intervention rapide. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage vitres Toulouse \u2014 sans traces garanti | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage de vitres \u00e0 Toulouse et dans le 31. Particuliers, copropri\u00e9t\u00e9s, professionnels. Sans traces, r\u00e9sultat impeccable. Intervention rapide. Devis gratuit !" },
      { property: "og:url", content: "https://cleanfresh-toulouse.fr/nettoyage-de-vitres-toulouse" },
      { name: "twitter:title", content: "Nettoyage de vitres Toulouse — particuliers & pros | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage de vitres à Toulouse et dans le 31. Particuliers, copropriétés, professionnels. Sans traces, résultat impeccable. Intervention rapide. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanfresh-toulouse.fr/nettoyage-de-vitres-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
