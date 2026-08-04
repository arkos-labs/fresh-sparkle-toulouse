import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-matelas-toulouse");

export const Route = createFileRoute("/nettoyage-matelas-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage matelas Toulouse \u2014 anti-acariens | Clean&Fresh" },
      { name: "description", content: "Nettoyage matelas \u00e0 Toulouse et dans le 31. Acariens, taches, odeurs \u2014 traitement vapeur ou extraction. \u00c0 domicile, r\u00e9sultat garanti. Devis gratuit rapide !" },
      { property: "og:title", content: "Nettoyage matelas Toulouse \u2014 anti-acariens | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage matelas \u00e0 Toulouse et dans le 31. Acariens, taches, odeurs \u2014 traitement vapeur ou extraction. \u00c0 domicile, r\u00e9sultat garanti. Devis gratuit rapide !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-matelas-toulouse" },
      { name: "twitter:title", content: "Nettoyage matelas Toulouse — anti-acariens | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage matelas à Toulouse et dans le 31. Acariens, taches, odeurs — traitement vapeur ou extraction. À domicile, Résultat soigné. Devis gratuit rapide !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-matelas-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
