import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/site";

const service = getService("/nettoyage-auto-a-domicile-toulouse");

export const Route = createFileRoute("/nettoyage-auto-a-domicile-toulouse")({
  head: () => ({
    meta: [
      { title: "Nettoyage auto \u00e0 domicile Toulouse \u2014 int\u00e9rieur | Clean&Fresh" },
      { name: "description", content: "Nettoyage auto \u00e0 domicile \u00e0 Toulouse et dans le 31. Int\u00e9rieur, ext\u00e9rieur, sellerie, vitres \u2014 un expert se d\u00e9place chez vous. Prix r\u00e9duit. Devis gratuit !" },
      { property: "og:title", content: "Nettoyage auto \u00e0 domicile Toulouse \u2014 int\u00e9rieur | Clean&Fresh" },
      { property: "og:description", content: "Nettoyage auto \u00e0 domicile \u00e0 Toulouse et dans le 31. Int\u00e9rieur, ext\u00e9rieur, sellerie, vitres \u2014 un expert se d\u00e9place chez vous. Prix r\u00e9duit. Devis gratuit !" },
      { property: "og:url", content: "https://cleanetfresh.fr/nettoyage-auto-a-domicile-toulouse" },
      { name: "twitter:title", content: "Nettoyage auto à domicile Toulouse — intérieur | Clean&Fresh" },
      { name: "twitter:description", content: "Nettoyage auto à domicile à Toulouse et dans le 31. Intérieur, extérieur, sellerie, vitres — un expert se déplace chez vous. Prix réduit. Devis gratuit !" },
    ],
    links: [{ rel: "canonical", href: "https://cleanetfresh.fr/nettoyage-auto-a-domicile-toulouse" }],
  }),
  component: () => <ServicePage service={service} />,
});
