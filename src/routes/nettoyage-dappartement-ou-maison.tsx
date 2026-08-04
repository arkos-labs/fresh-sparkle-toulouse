import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-dappartement-ou-maison");

export const Route = createFileRoute("/nettoyage-dappartement-ou-maison")({
  head: () => ({
    meta: [
      { title: "Nettoyage appartement ou maison Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage appartement et maison \u00e0 Toulouse et dans le 31. Grand m\u00e9nage, remise en \u00e9tat, entretien r\u00e9gulier. \u00c9quipe qualifi\u00e9e, r\u00e9sultat garanti. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage appartement ou maison Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage appartement et maison \u00e0 Toulouse et dans le 31. Grand m\u00e9nage, remise en \u00e9tat, entretien r\u00e9gulier. \u00c9quipe qualifi\u00e9e, r\u00e9sultat garanti. Devis gratuit !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-dappartement-ou-maison" },
      { name: "twitter:title", content: "Nettoyage appartement ou maison Toulouse | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage appartement et maison à Toulouse et dans le 31. Grand ménage, remise en état, entretien régulier. Équipe qualifiée, Résultat soigné. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-dappartement-ou-maison" }],
  }),
  component: () => <ServicePage service={service} />,
});
