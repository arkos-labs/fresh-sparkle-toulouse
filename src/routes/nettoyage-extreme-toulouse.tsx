import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-extreme-toulouse");

export const Route = createFileRoute("/nettoyage-extreme-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage extr\u00eame Toulouse \u2014 discret & rapide | Clean&Fresh" },
      { name: "description", content: "Nettoyage extr\u00eame et insalubrit\u00e9 \u00e0 Toulouse et dans le 31. Logements d\u00e9grad\u00e9s, remise en \u00e9tat totale, d\u00e9sinfection compl\u00e8te. Intervention rapide. Devis !" },
      { property: "og:title", content: "Nettoyage extr\u00eame Toulouse \u2014 discret & rapide | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage extr\u00eame et insalubrit\u00e9 \u00e0 Toulouse et dans le 31. Logements d\u00e9grad\u00e9s, remise en \u00e9tat totale, d\u00e9sinfection compl\u00e8te. Intervention rapide. Devis !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-extreme-toulouse" },
      { name: "twitter:title", content: "Nettoyage extrême Toulouse — logement insalubre | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage extrême et insalubrité à Toulouse et dans le 31. Logements dégradés, remise en état totale, désinfection complète. Intervention rapide. Devis !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-extreme-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
