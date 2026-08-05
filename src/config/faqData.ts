export interface FAQNode {
  id: string;
  question: string;
  answer: string;
  options?: FAQNode[];
}

export const welcomeMessage = "Bonjour et bienvenue chez Clean&Fresh Toulouse 👋\n\nJe suis l'assistant virtuel de Clean&Fresh. Je peux vous renseigner sur nos prestations, tarifs, zones d'intervention, etc.\n\nIndiquez simplement ce que vous souhaitez faire nettoyer :";

export const faqData: FAQNode[] = [
  {
    id: "presentation",
    question: "Présentation & Infos Pratiques",
    answer: "Que souhaitez-vous savoir sur Clean&Fresh ?",
    options: [
      {
        id: "qui-sommes-nous",
        question: "Qui êtes-vous et quels services proposez-vous ?",
        answer: "Clean&Fresh est une entreprise de nettoyage professionnel basée à Toulouse. Nous intervenons auprès des particuliers et professionnels (véhicules, canapés, matelas, tapis, fin de chantier, logements insalubres / Diogène). Nous utilisons du matériel professionnel adapté."
      },
      {
        id: "zone",
        question: "Où intervenez-vous ?",
        answer: "Principalement à Toulouse et dans un rayon de 50 km (Balma, Blagnac, Colomiers, etc.). Un déplacement à plus de 100km est possible pour des gros chantiers (ex: Diogène). Des frais de déplacement peuvent s'appliquer selon l'adresse."
      },
      {
        id: "horaires",
        question: "Quels sont vos horaires ?",
        answer: "Nous sommes joignables et disponibles de 6 h à 23 h, du lundi au dimanche (y compris week-end), selon les disponibilités du planning."
      }
    ]
  },
  {
    id: "auto",
    question: "Nettoyage Automobile",
    answer: "Nous sommes spécialisés dans le nettoyage INTÉRIEUR automobile à domicile. Que voulez-vous savoir ?",
    options: [
      {
        id: "packs-auto",
        question: "Tarifs et Packs complets",
        answer: "3 packs disponibles : Bronze (59€), Argent (99€) et Or (129€). Le Pack Or est recommandé pour les voitures très sales. Le détail des prestations est sur la page de réservation."
      },
      {
        id: "sieges-auto",
        question: "Shampouinage des sièges",
        answer: "Le shampouinage des sièges coûte 59€ seul. Si vous l'ajoutez en option à un Pack, il passe à 39€. (Séchage en quelques heures)."
      },
      {
        id: "options-auto",
        question: "Poils d'animaux, Taches et Odeurs",
        answer: "Nous proposons plusieurs options : Poils d'animaux (25€), Détachage intensif (19€), Traitement anti-odeur (15€), Traitement vapeur (19€), etc. L'odeur de cigarette ou de vomi peut être fortement diminuée mais dépend de l'imprégnation."
      },
      {
        id: "logistique-auto",
        question: "Logistique (Électricité, Eau, Parking)",
        answer: "Merci de vider vos effets personnels avant. Prévoyez un accès électrique raisonnable et un point d'eau si besoin. En parking souterrain, cela dépend de la place et de l'éclairage."
      }
    ]
  },
  {
    id: "mobilier",
    question: "Canapés, Matelas et Tapis",
    answer: "Nous nettoyons votre mobilier directement à domicile par injection-extraction. Sur quoi porte votre question ?",
    options: [
      {
        id: "canapes",
        question: "Nettoyage de Canapés",
        answer: "Canapé 3 places : 79€. Canapé d'angle/U : à partir de 99€. Fauteuil : 49€. Options : poils (15€), anti-odeur (15€), détachage (19€). (Ne s'applique pas au cuir)."
      },
      {
        id: "matelas",
        question: "Nettoyage de Matelas",
        answer: "Matelas enfant : 39€. 1 place : 59€. 2 places : 99€. Options : Traitement anti-acariens/bactérien (19€). Nous traitons les taches d'urine/sang, le résultat dépend de l'ancienneté."
      },
      {
        id: "tapis",
        question: "Nettoyage de Tapis",
        answer: "1 tapis : 49€. 2 tapis : 79€. 3 tapis : 99€. Le nettoyage recto-verso est en option à 25€."
      },
      {
        id: "sechage-mobilier",
        question: "Combien de temps pour le séchage ?",
        answer: "Les tissus resteront légèrement humides après notre passage. Le séchage complet prend généralement plusieurs heures selon l'épaisseur, la température et l'aération de la pièce."
      }
    ]
  },
  {
    id: "logement",
    question: "Logement, Fin de bail, Diogène",
    answer: "Nous gérons les remises en état, qu'elles soient simples ou extrêmes. De quoi s'agit-il ?",
    options: [
      {
        id: "fin-bail",
        question: "Fin de bail ou Fin de chantier",
        answer: "Nous faisons le dépoussiérage, lavage des sols, sanitaires, vitres, dégraissage... Le prix dépend de la surface et de l'état. Des photos sont souvent nécessaires pour un devis précis."
      },
      {
        id: "diogene",
        question: "Logement Insalubre / Syndrome de Diogène",
        answer: "Nous intervenons sans jugement, avec discrétion et respect. Nous pouvons trier, débarrasser et désinfecter (EPI utilisés). Envoyez-nous des photos, une vidéo et la superficie pour un devis sur-mesure."
      }
    ]
  },
  {
    id: "reservation",
    question: "Réservation & Devis",
    answer: "Comment procéder ?",
    options: [
      {
        id: "comment-reserver",
        question: "Comment réserver ou avoir un prix ?",
        answer: "Vous pouvez réserver nos packs auto et mobilier directement sur le site. Pour les logements ou les véhicules extrêmement sales, envoyez-nous des photos pour un devis personnalisé sans mauvaise surprise."
      },
      {
        id: "contact",
        question: "Je veux un devis ou parler à un conseiller",
        answer: "Merci de nous envoyer via la page Contact ou par téléphone : une photo générale, des photos rapprochées des taches, votre commune et vos disponibilités. Nous vous répondrons très vite !"
      }
    ]
  }
];
