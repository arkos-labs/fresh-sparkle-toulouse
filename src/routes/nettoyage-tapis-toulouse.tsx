import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-tapis-toulouse");

export const Route = createFileRoute("/nettoyage-tapis-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage tapis et moquette Toulouse | Clean&Fresh" },
      { name: "description", content: "Nettoyage tapis et moquettes \u00e0 Toulouse et dans le 31. Shampouinage pro, taches et odeurs \u00e9limin\u00e9es, s\u00e9chage rapide. \u00c0 domicile. Devis gratuit rapide !" },
      { property: "og:title", content: "Nettoyage tapis et moquette Toulouse | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage tapis et moquettes \u00e0 Toulouse et dans le 31. Shampouinage pro, taches et odeurs \u00e9limin\u00e9es, s\u00e9chage rapide. \u00c0 domicile. Devis gratuit rapide !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-tapis-toulouse" },
      { name: "twitter:title", content: "Nettoyage tapis et moquette Toulouse | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage tapis et moquettes à Toulouse et dans le 31. Shampouinage pro, taches et odeurs éliminées, séchage rapide. À domicile. Devis gratuit rapide !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-tapis-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
