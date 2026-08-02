export const COMPANY = {
  name: "Clean&Fresh",
  slogan: "On redonne vie à vos intérieurs et extérieurs",
  phone: "07 67 12 75 00",
  phoneHref: "tel:+33767127500",
  email: "nettoyagecleanfresh@gmail.com",
  city: "Toulouse",
  booking: "https://app.dispoo.fr/website/385-clean-fresh",
};

export const COMMUNES = [
  "Toulouse (centre)",
  "Blagnac",
  "Colomiers",
  "Tournefeuille",
  "Balma",
  "Ramonville-Saint-Agne",
  "Cugnaux",
  "L'Union",
  "Ensemble de la Haute-Garonne (31)",
];

export type PriceRow = { label: string; price: string };

export type Service = {
  slug: string;
  navLabel: string;
  h1: string;
  short: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  group: "textile" | "batiment";
  booking?: boolean;
  intro: string[];
  treated: string[];
  problems: string[];
  prices?: PriceRow[];
  priceNote?: string;
  soils?: string[];
  method: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "/nettoyage-canape-toulouse",
    navLabel: "Nettoyage canapé Toulouse",
    h1: "Nettoyage canapé à Toulouse",
    short: "Nettoyage canapé Toulouse",
    subtitle:
      "Nettoyage en profondeur de vos canapés et fauteuils à domicile, par injection-extraction, à Toulouse et dans toute l'agglomération.",
    metaTitle: "Nettoyage canapé Toulouse — dès 49 € | Clean&Fresh",
    metaDescription:
      "Nettoyage de canapé et fauteuil à domicile à Toulouse : injection-extraction, taches et odeurs éliminées. Fauteuil 49 €, canapé 2/3 places 79 €. Devis sous 24h.",
    group: "textile",
    booking: true,
    intro: [
      "Votre canapé concentre poussière, acariens, transpiration et taches du quotidien. Nous intervenons directement chez vous, sans déplacer vos meubles, avec un matériel professionnel d'injection-extraction et des produits certifiés Écolabel européen.",
      "Chaque prestation comprend le nettoyage en profondeur de l'assise, du dossier et des coussins, l'élimination des taches et auréoles ainsi que la neutralisation des mauvaises odeurs.",
    ],
    treated: [
      "Canapés 2, 3, 4 et 5 places",
      "Canapés d'angle, en U, modulables et convertibles",
      "Fauteuils et banquettes",
      "Chaises rembourrées et poufs",
      "Microfibre, velours, coton, lin et mélanges",
    ],
    problems: [
      "Taches incrustées et auréoles",
      "Acariens et allergènes",
      "Mauvaises odeurs persistantes",
      "Tissu terni par l'usage quotidien",
    ],
    prices: [
      { label: "Fauteuil", price: "49 €" },
      { label: "Canapé 2/3 places", price: "79 €" },
      { label: "Canapé 4/5 places", price: "99 €" },
      { label: "Canapé en U", price: "99 €" },
      { label: "Pouf", price: "19 €" },
      { label: "Chaise rembourrée (à la pièce)", price: "15 €" },
    ],
    priceNote:
      "Inclus dans toutes les prestations : nettoyage en profondeur, assise + dossier + coussin, élimination des taches et auréoles, neutralisation des mauvaises odeurs.",
    soils: [
      "Pipi de chat et de chien",
      "Transpiration",
      "Nourriture et boissons",
      "Odeur de cigarette",
      "Taches incrustées",
    ],
    method: [
      "Diagnostic du tissu et test de compatibilité avant traitement.",
      "Détachage ciblé des zones les plus marquées.",
      "Injection-extraction : la solution nettoyante est injectée dans la fibre puis aspirée avec les salissures.",
      "Neutralisation des odeurs et séchage accéléré : votre canapé est réutilisable en quelques heures.",
    ],
  },
  {
    slug: "/nettoyage-matelas-toulouse",
    navLabel: "Nettoyage matelas Toulouse",
    h1: "Nettoyage matelas à Toulouse",
    short: "Nettoyage matelas Toulouse",
    subtitle:
      "Traitement anti-acariens et désinfection de votre matelas à domicile, par injection-extraction, à Toulouse et alentours.",
    metaTitle: "Nettoyage matelas Toulouse — anti-acariens | Clean&Fresh",
    metaDescription:
      "Nettoyage de matelas à domicile à Toulouse : injection-extraction, traitement anti-acariens, désinfection et neutralisation des odeurs. Devis gratuit sous 24h.",
    group: "textile",
    booking: true,
    intro: [
      "Un matelas absorbe chaque nuit transpiration, cellules mortes et humidité : c'est le terrain idéal pour les acariens. Nous le traitons chez vous, sans le déplacer, avec une machine professionnelle et des produits écologiques certifiés Écolabel.",
      "Le résultat : un couchage assaini, désodorisé et sain pour toute la famille, particulièrement recommandé aux personnes allergiques.",
    ],
    treated: [
      "Matelas 1 place, 2 places, king size",
      "Matelas enfant et lits superposés",
      "Sommiers tapissiers et têtes de lit",
      "Mousse, ressorts, latex et mémoire de forme",
    ],
    problems: [
      "Acariens et allergènes",
      "Auréoles de transpiration et d'urine",
      "Moisissures liées à l'humidité",
      "Odeurs persistantes",
    ],
    priceNote: "Tarifs sur devis selon la taille et l'état du matelas — réponse gratuite sous 24h.",
    soils: ["Urine", "Transpiration", "Sang", "Moisissures", "Odeurs de renfermé"],
    method: [
      "Aspiration haute puissance des poussières et allergènes de surface.",
      "Détachage des auréoles et traitement anti-acariens.",
      "Injection-extraction en profondeur des fibres.",
      "Désinfection, neutralisation des odeurs et séchage accéléré.",
    ],
  },
  {
    slug: "/nettoyage-tapis-toulouse",
    navLabel: "Nettoyage tapis Toulouse",
    h1: "Nettoyage tapis et moquette à Toulouse",
    short: "Nettoyage tapis Toulouse",
    subtitle:
      "Nettoyage professionnel de tapis et moquettes à domicile, à Toulouse et dans toute la Haute-Garonne.",
    metaTitle: "Nettoyage tapis et moquette Toulouse | Clean&Fresh",
    metaDescription:
      "Nettoyage de tapis et moquette à domicile à Toulouse : injection-extraction, taches et odeurs éliminées, fibres ravivées. Devis gratuit sous 24h.",
    group: "textile",
    booking: true,
    intro: [
      "Tapis de salon, descentes de lit, moquettes de bureaux : les fibres retiennent la poussière, les acariens et les taches. Nous intervenons sur place avec du matériel professionnel adapté à chaque type de fibre.",
      "Les couleurs sont ravivées, les odeurs neutralisées et le tapis reste utilisable dans la journée.",
    ],
    treated: [
      "Tapis en laine, synthétique, shaggy, berbère",
      "Grands tapis de salon et descentes de lit",
      "Moquettes d'appartements et de bureaux",
      "Paillassons et tapis d'entrée professionnels",
    ],
    problems: [
      "Taches alimentaires et boissons",
      "Fibres tassées et ternies",
      "Acariens et poussière incrustée",
      "Odeurs d'animaux",
    ],
    priceNote: "Tarifs sur devis selon la surface et la nature de la fibre — réponse sous 24h.",
    soils: ["Pipi d'animaux", "Café et vin", "Nourriture", "Boue et terre", "Tabac"],
    method: [
      "Identification de la fibre et dépoussiérage mécanique.",
      "Prétraitement des taches localisées.",
      "Injection-extraction avec produits Écolabel.",
      "Brossage de finition et séchage accéléré.",
    ],
  },
  {
    slug: "/nettoyage-auto-a-domicile-toulouse",
    navLabel: "Nettoyage auto à domicile Toulouse",
    h1: "Nettoyage intérieur auto à domicile à Toulouse",
    short: "Nettoyage auto Toulouse",
    subtitle:
      "Nettoyage complet de l'habitacle de votre véhicule, chez vous ou sur votre lieu de travail, à Toulouse et son agglomération.",
    metaTitle: "Nettoyage auto à domicile Toulouse — intérieur | Clean&Fresh",
    metaDescription:
      "Nettoyage intérieur de voiture à domicile à Toulouse : sièges, moquettes, coffre, plastiques. Injection-extraction et produits écologiques. Devis sous 24h.",
    group: "textile",
    booking: true,
    intro: [
      "Nous venons nettoyer l'intérieur de votre véhicule là où il est garé : domicile, parking d'entreprise ou copropriété. Aucun déplacement, aucune perte de temps.",
      "Sièges, moquettes, coffre, plastiques et plafonnier : l'habitacle retrouve un état proche du neuf, sans odeur.",
    ],
    treated: [
      "Sièges tissu et moquettes de sol",
      "Coffre et passages de roue intérieurs",
      "Plastiques, tableau de bord et contre-portes",
      "Ciel de toit et vitres intérieures",
      "Véhicules particuliers, utilitaires et flottes d'entreprise",
    ],
    problems: [
      "Taches de nourriture et boissons",
      "Odeurs de tabac et d'animaux",
      "Poils d'animaux incrustés",
      "Poussière et sable dans les moquettes",
    ],
    priceNote: "Tarifs sur devis selon la taille du véhicule et son état — réponse sous 24h.",
    soils: ["Nourriture et boissons", "Tabac", "Poils d'animaux", "Transpiration", "Boue"],
    method: [
      "Aspiration complète de l'habitacle et du coffre.",
      "Détachage des sièges et moquettes.",
      "Injection-extraction des textiles.",
      "Nettoyage des plastiques, vitres intérieures et désodorisation.",
    ],
  },
  {
    slug: "/nettoyage-de-vitres-toulouse",
    navLabel: "Nettoyage de vitres Toulouse",
    h1: "Nettoyage de vitres à Toulouse",
    short: "Nettoyage vitres Toulouse",
    subtitle:
      "Vitres d'habitations, vitrines de commerces et baies de bureaux nettoyées sans traces, à Toulouse et alentours.",
    metaTitle: "Nettoyage de vitres Toulouse — particuliers & pros | Clean&Fresh",
    metaDescription:
      "Nettoyage de vitres à Toulouse : maisons, appartements, vitrines de commerces et bureaux. Résultat sans traces, entretien ponctuel ou régulier. Devis sous 24h.",
    group: "batiment",
    intro: [
      "Une vitrine propre, c'est une image professionnelle. Nous nettoyons vos vitres, encadrements et rebords avec un matériel adapté, en ponctuel ou en contrat d'entretien régulier.",
      "Nous intervenons chez les particuliers comme chez les professionnels, aux horaires qui vous arrangent.",
    ],
    treated: [
      "Fenêtres, baies vitrées et vérandas",
      "Vitrines de commerces et devantures",
      "Cloisons et vitrages de bureaux",
      "Encadrements, rails et rebords",
    ],
    problems: [
      "Traces de pluie et calcaire",
      "Pollution et poussière urbaine",
      "Traces de doigts sur les vitrines",
      "Résidus de travaux",
    ],
    priceNote: "Sur devis — tarif dégressif pour les contrats d'entretien réguliers.",
    method: [
      "Repérage des vitrages et des accès.",
      "Lavage à la raclette professionnelle et eau osmosée si nécessaire.",
      "Nettoyage des encadrements, rails et rebords.",
      "Contrôle final anti-traces.",
    ],
  },
  {
    slug: "/nettoyage-terrasse-toulouse",
    navLabel: "Nettoyage terrasse Toulouse",
    h1: "Nettoyage de terrasse à Toulouse",
    short: "Nettoyage terrasse Toulouse",
    subtitle:
      "Dalles, béton, carrelage extérieur et bois : nettoyage haute pression de votre terrasse à Toulouse.",
    metaTitle: "Nettoyage terrasse Toulouse — haute pression | Clean&Fresh",
    metaDescription:
      "Nettoyage de terrasse à Toulouse : dalles, béton, carrelage extérieur et bois. Démoussage et haute pression. Devis gratuit sous 24h.",
    group: "batiment",
    intro: [
      "Mousses, lichens et noircissement rendent votre terrasse glissante et terne. Nous la nettoyons au nettoyeur haute pression, avec un réglage adapté au support pour ne pas l'abîmer.",
      "Une intervention idéale avant l'été ou après l'hiver, pour retrouver un extérieur net et sécurisé.",
    ],
    treated: [
      "Dalles et pavés",
      "Béton et béton désactivé",
      "Carrelage extérieur et grès cérame",
      "Terrasses bois et composite",
      "Allées, cours et abords de piscine",
    ],
    problems: [
      "Mousses, lichens et algues vertes",
      "Noircissement et sol glissant",
      "Traces de terre et de végétaux",
      "Salissures incrustées dans les joints",
    ],
    priceNote: "Sur devis selon la surface et l'état du support — réponse gratuite sous 24h.",
    method: [
      "Protection des abords et des plantations.",
      "Application d'un traitement anti-mousse si nécessaire.",
      "Nettoyage haute pression à réglage adapté au support.",
      "Rinçage complet et évacuation des résidus.",
    ],
  },
  {
    slug: "/nettoyage-toiture-toulouse",
    navLabel: "Nettoyage toiture Toulouse",
    h1: "Nettoyage de toiture à Toulouse",
    short: "Nettoyage toiture Toulouse",
    subtitle:
      "Démoussage et nettoyage haute pression de votre toiture à Toulouse et en Haute-Garonne.",
    metaTitle: "Nettoyage toiture Toulouse — démoussage | Clean&Fresh",
    metaDescription:
      "Nettoyage et démoussage de toiture à Toulouse : tuiles, ardoises, gouttières. Haute pression et traitement anti-mousse. Devis gratuit sous 24h.",
    group: "batiment",
    intro: [
      "La mousse retient l'humidité, fragilise les tuiles et bouche les gouttières. Un démoussage régulier prolonge la durée de vie de votre toiture et évite des réparations coûteuses.",
      "Nous intervenons en sécurité, avec du matériel professionnel et des produits respectueux de l'environnement.",
    ],
    treated: [
      "Tuiles terre cuite et béton",
      "Ardoises",
      "Toitures de garages et dépendances",
      "Gouttières et descentes d'eau",
    ],
    problems: [
      "Mousses et lichens",
      "Gouttières obstruées",
      "Infiltrations liées à l'humidité",
      "Tuiles noircies",
    ],
    priceNote: "Sur devis après visite ou photos — réponse sous 24h.",
    method: [
      "Inspection de la couverture et repérage des points fragiles.",
      "Nettoyage haute pression maîtrisé, du faîtage vers l'égout.",
      "Application d'un traitement anti-mousse préventif.",
      "Dégagement des gouttières et évacuation des déchets.",
    ],
  },
  {
    slug: "/nettoyage-facade-toulouse",
    navLabel: "Nettoyage façade Toulouse",
    h1: "Nettoyage de façade à Toulouse",
    short: "Nettoyage façade Toulouse",
    subtitle:
      "Façades de maisons et d'immeubles nettoyées en profondeur, à Toulouse et dans l'agglomération.",
    metaTitle: "Nettoyage façade Toulouse — maisons & immeubles | Clean&Fresh",
    metaDescription:
      "Nettoyage de façade à Toulouse : crépi, enduit, brique, béton. Élimination des mousses, pollution et traces noires. Devis gratuit sous 24h.",
    group: "batiment",
    intro: [
      "Pollution, mousses et coulures noircissent les façades toulousaines. Nous leur redonnons leur teinte d'origine sans travaux lourds ni ravalement.",
      "Nous adaptons la pression et les produits à votre support pour préserver l'enduit et les joints.",
    ],
    treated: [
      "Crépi et enduit",
      "Brique foraine et pierre",
      "Béton et bardage",
      "Murs de clôture et piliers",
      "Immeubles et copropriétés",
    ],
    problems: [
      "Traces noires de pollution",
      "Mousses et végétation",
      "Coulures et salissures de pluie",
      "Graffitis (sur devis)",
    ],
    priceNote: "Sur devis selon la surface, la hauteur et le support.",
    method: [
      "Diagnostic du support et test sur une zone témoin.",
      "Protection des menuiseries et plantations.",
      "Nettoyage haute pression ou basse pression selon la fragilité.",
      "Traitement anti-mousse et rinçage final.",
    ],
  },
  {
    slug: "/nettoyage-dappartement-ou-maison",
    navLabel: "Nettoyage d'appartement ou maison Toulouse",
    h1: "Nettoyage d'appartement ou de maison à Toulouse",
    short: "Appartement / maison",
    subtitle:
      "Grand ménage ponctuel ou entretien régulier de votre logement, à Toulouse et dans toute l'agglomération.",
    metaTitle: "Nettoyage appartement ou maison Toulouse | Clean&Fresh",
    metaDescription:
      "Nettoyage complet d'appartement ou de maison à Toulouse : grand ménage, remise en état avant ou après déménagement, entretien régulier. Devis sous 24h.",
    group: "batiment",
    intro: [
      "Grand ménage de printemps, remise en état avant l'entrée d'un locataire, nettoyage après déménagement ou entretien régulier : nous prenons en charge l'ensemble du logement.",
      "Produits certifiés Écolabel, matériel professionnel et une équipe qui traite chaque pièce dans le détail.",
    ],
    treated: [
      "Cuisine : plans de travail, électroménager, hotte, placards",
      "Salle de bain et WC : détartrage complet",
      "Sols, plinthes, portes et interrupteurs",
      "Vitres intérieures et menuiseries",
      "Locaux professionnels et bureaux",
    ],
    problems: [
      "Calcaire et graisses accumulées",
      "Poussière et allergènes",
      "Logement laissé sale par un locataire",
      "Manque de temps pour l'entretien régulier",
    ],
    priceNote: "Sur devis selon la surface et le niveau de prestation — ponctuel ou récurrent.",
    method: [
      "Visite ou échange détaillé pour cadrer le périmètre.",
      "Nettoyage pièce par pièce, du haut vers le bas.",
      "Détartrage et dégraissage des points sensibles.",
      "Contrôle qualité final avec vous.",
    ],
  },
  {
    slug: "/nettoyage-de-fin-de-chantier-toulouse",
    navLabel: "Nettoyage de fin de chantier Toulouse",
    h1: "Nettoyage de fin de chantier à Toulouse",
    short: "Fin de chantier",
    subtitle:
      "Poussières, résidus et traces de peinture éliminés après vos travaux, à Toulouse et en Haute-Garonne.",
    metaTitle: "Nettoyage fin de chantier Toulouse | Clean&Fresh",
    metaDescription:
      "Nettoyage de fin de chantier à Toulouse : poussière de plâtre, résidus de colle, traces de peinture, vitres. Livraison de chantier propre. Devis sous 24h.",
    group: "batiment",
    intro: [
      "Après des travaux, la poussière de plâtre s'infiltre partout. Nous livrons un chantier prêt à l'emménagement : sols décapés, vitres nettoyées, traces de peinture et de colle retirées.",
      "Nous travaillons avec des particuliers, des artisans, des architectes et des promoteurs, avec des délais courts.",
    ],
    treated: [
      "Sols : carrelage, parquet, béton ciré",
      "Vitres, menuiseries et garde-corps",
      "Sanitaires et cuisine neufs",
      "Placards, plinthes et radiateurs",
      "Parties communes et locaux professionnels",
    ],
    problems: [
      "Poussière de plâtre et de ponçage",
      "Traces de peinture et d'enduit",
      "Résidus de colle et d'adhésif",
      "Étiquettes et films de protection",
    ],
    priceNote: "Sur devis selon la surface et l'ampleur du chantier — intervention rapide.",
    method: [
      "Évacuation des derniers déchets légers.",
      "Dépoussiérage complet du haut vers le bas.",
      "Décapage des sols et retrait des traces de peinture et colle.",
      "Nettoyage des vitres et finition avant livraison.",
    ],
  },
  {
    slug: "/nettoyage-fin-de-bail-toulouse",
    navLabel: "Nettoyage fin de bail Toulouse",
    h1: "Nettoyage fin de bail à Toulouse",
    short: "Fin de bail",
    subtitle:
      "Remise en état complète de votre logement pour l'état des lieux de sortie, à Toulouse et en Haute-Garonne.",
    metaTitle: "Nettoyage fin de bail Toulouse — état des lieux | Clean&Fresh",
    metaDescription:
      "Nettoyage fin de bail à Toulouse : remise en état du logement pour l'état des lieux de sortie. Cuisine, salle de bain, sols, vitres. Récupérez votre dépôt de garantie. Devis sous 24h.",
    group: "batiment",
    intro: [
      "Vous quittez votre logement et voulez récupérer votre dépôt de garantie intégralement ? Nous prenons en charge la remise en état complète avant l'état des lieux de sortie : cuisine, salle de bain, sols, vitres et parties communes.",
      "Une prestation rigoureuse, conforme aux exigences des agences immobilières et des propriétaires à Toulouse.",
    ],
    treated: [
      "Cuisine : dégraissage complet, hotte, four, réfrigérateur",
      "Salle de bain et WC : détartrage, joints, carrelage",
      "Sols et plinthes : carrelage, parquet, moquette",
      "Vitres et menuiseries intérieures",
      "Murs et portes : retrait des marques et traces",
    ],
    problems: [
      "Dépôt de garantie en jeu",
      "Cuisine et salle de bain incrustées",
      "Sols tachés ou rayés",
      "Logement encrassé après plusieurs années",
    ],
    priceNote: "Sur devis selon la surface et l'état du logement — intervention disponible sous 48h.",
    method: [
      "Visite ou photos pour évaluation précise.",
      "Nettoyage pièce par pièce, du plafond au sol.",
      "Détartrage, dégraissage et désinfection des zones sensibles.",
      "Contrôle qualité final, prêt pour l'état des lieux.",
    ],
  },
  {
    slug: "/nettoyage-diogene-toulouse",
    navLabel: "Nettoyage Diogène Toulouse",
    h1: "Nettoyage Diogène à Toulouse",
    short: "Syndrome de Diogène",
    subtitle:
      "Désencombrement, débarras et remise en état de logements en syndrome de Diogène, à Toulouse et en Haute-Garonne.",
    metaTitle: "Nettoyage Diogène Toulouse — désencombrement logement | Clean&Fresh",
    metaDescription:
      "Nettoyage Diogène à Toulouse : logement très encombré, accumulation de déchets, désinfection complète. Intervention discrète, sans jugement. Devis confidentiel sous 24h.",
    group: "batiment",
    intro: [
      "Le syndrome de Diogène se caractérise par une accumulation extrême d'objets et de déchets dans un logement. Nous intervenons avec discrétion, sans jugement, pour désencombrer, nettoyer et remettre le logement en état.",
      "Notre équipe équipée en protection individuelle prend en charge le tri, l'évacuation et la désinfection complète, du sol au plafond.",
    ],
    treated: [
      "Logements en accumulation extrême",
      "Appartements et maisons insalubres",
      "Débarras complet et évacuation des encombrants",
      "Désinfection et traitement des odeurs",
      "Remise en état avant vente, location ou succession",
    ],
    problems: [
      "Accumulation massive de déchets et d'objets",
      "Odeurs très fortes et persistantes",
      "Moisissures, humidité et risque sanitaire",
      "Présence de nuisibles",
    ],
    priceNote: "Sur devis confidentiel après évaluation — intervention rapide et discrète.",
    method: [
      "Évaluation confidentielle sur place ou par photos.",
      "Tri, débarras et évacuation en filière adaptée.",
      "Nettoyage complet en profondeur, sols, murs et sanitaires.",
      "Désinfection, traitement des odeurs et assainissement de l'air.",
    ],
  },
  {
    slug: "/nettoyage-extreme-toulouse",
    navLabel: "Nettoyage extrême Toulouse",
    h1: "Nettoyage extrême à Toulouse",
    short: "Nettoyage extrême",
    subtitle:
      "Intervention lourde sur logement très dégradé, insalubre ou encombré, à Toulouse et alentours.",
    metaTitle: "Nettoyage extrême Toulouse — logement insalubre | Clean&Fresh",
    metaDescription:
      "Nettoyage extrême à Toulouse : logement insalubre, syndrome de Diogène, débarras, désinfection complète. Intervention discrète et sans jugement. Devis sous 24h.",
    group: "batiment",
    intro: [
      "Logement très encombré, insalubre ou laissé à l'abandon : nous prenons en charge les situations que personne ne veut traiter, avec discrétion et sans jugement.",
      "Équipe équipée en protection individuelle, débarras, nettoyage en profondeur et désinfection complète du logement.",
    ],
    treated: [
      "Logements en syndrome de Diogène",
      "Appartements insalubres ou squattés",
      "Débarras et évacuation d'encombrants",
      "Désinfection et traitement des odeurs",
      "Remise en état avant vente ou location",
    ],
    problems: [
      "Accumulation extrême de déchets",
      "Moisissures et humidité",
      "Odeurs très fortes et persistantes",
      "Risque sanitaire et nuisibles",
    ],
    priceNote: "Sur devis après évaluation confidentielle — intervention rapide et discrète.",
    method: [
      "Évaluation confidentielle sur place ou par photos.",
      "Tri, débarras et évacuation en filière adaptée.",
      "Nettoyage complet en profondeur, sols, murs et sanitaires.",
      "Désinfection, traitement des odeurs et assainissement de l'air.",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

export const MENU_TEXTILE = SERVICES.filter((s) => s.group === "textile");
export const MENU_BATIMENT = SERVICES.filter((s) => s.group === "batiment");

export const TESTIMONIALS = [
  {
    name: "Marion L.",
    city: "Toulouse",
    service: "Nettoyage canapé",
    text: "Canapé en tissu clair récupéré alors que je pensais le jeter. Résultat impeccable, plus une tache ni d'odeur. Je recommande les yeux fermés.",
  },
  {
    name: "Julien D.",
    city: "Blagnac",
    service: "Nettoyage matelas",
    text: "Très professionnel et ponctuel. Le matelas de mon fils a été traité anti-acariens, il dort beaucoup mieux depuis. Prix annoncé respecté.",
  },
  {
    name: "Sabrina M.",
    city: "Colomiers",
    service: "Intérieur auto",
    text: "Réactivité au top : devis le matin, intervention le lendemain devant chez moi. La voiture est comme neuve à l'intérieur.",
  },
  {
    name: "Antoine R.",
    city: "Toulouse",
    service: "Fin de chantier",
    text: "Appartement livré nickel après nos travaux. Équipe sérieuse, rien n'a été oublié, même les rails de fenêtres.",
  },
  {
    name: "Claire B.",
    city: "Tournefeuille",
    service: "Nettoyage tapis",
    text: "Un grand tapis de salon très encrassé retrouvé comme au premier jour. Travail soigné et conseils utiles pour l'entretien.",
  },
];