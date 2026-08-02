import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Phone,
  Star,
  ArrowRight,
  Armchair,
  Car,
  CheckCircle2,
  Info,
  Layers,
  BedDouble,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/site";

const TITLE = "Formules & Tarifs — Clean&Fresh Toulouse";
const DESC =
  "Toutes les formules de nettoyage à Toulouse : canapé, tapis, auto, matelas. Tarifs et options détaillés. Réservation en ligne en 2 minutes. À partir de 39 €.";

export const Route = createFileRoute("/formules")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/formules" },
    ],
    links: [{ rel: "canonical", href: "/formules" }],
  }),
  component: FormulesPage,
});

// ─── DATA ────────────────────────────────────────────────────────────────────

type Option = {
  name: string;
  extra: number;      // prix en plus (€)
  extraTime: string;  // "+Xmin"
  popular?: boolean;
};

type Formule = {
  name: string;
  desc?: string;
  duration: string;
  price: number;
  badge?: string;
  options: Option[];
};

type Category = {
  id: string;
  label: string;
  slug: string;
  icon: React.ReactNode;
  formules: Formule[];
};

const CANAPE_OPTIONS: Option[] = [
  { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
  { name: "Élimination des poils d'animaux", extra: 15, extraTime: "+30 min", popular: true },
  { name: "Détachage intensif", extra: 19, extraTime: "+30 min" },
  { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
];

const TAPIS_OPTIONS: Option[] = [
  { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
  { name: "Nettoyage recto-verso", extra: 25, extraTime: "+30 min" },
  { name: "Détachage intensif", extra: 19, extraTime: "+30 min" },
  { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
];

const MATELAS_OPTIONS: Option[] = [
  { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
  { name: "Détachage intensif", extra: 19, extraTime: "+20 min" },
  { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
];

const CATEGORIES: Category[] = [
  {
    id: "canape",
    label: "Nettoyage canapé",
    slug: "/nettoyage-canape-toulouse",
    icon: <Armchair className="size-5" />,
    formules: [
      { name: "Fauteuil", duration: "45 min", price: 49, options: CANAPE_OPTIONS },
      { name: "Canapé 2 places", duration: "1h", price: 79, options: CANAPE_OPTIONS },
      { name: "Canapé 3 places", duration: "1h", price: 79, options: CANAPE_OPTIONS },
      { name: "Canapé d'angle", duration: "1h", price: 99, options: CANAPE_OPTIONS },
      { name: "Canapé 4/5 places", duration: "1h", price: 99, options: CANAPE_OPTIONS },
    ],
  },
  {
    id: "tapis",
    label: "Nettoyage tapis",
    slug: "/nettoyage-tapis-toulouse",
    icon: <Layers className="size-5" />,
    formules: [
      { name: "1 Tapis", duration: "45 min", price: 49, options: TAPIS_OPTIONS },
      { name: "2 Tapis", duration: "1h", price: 79, options: TAPIS_OPTIONS },
      { name: "3 Tapis", duration: "1h15", price: 99, options: TAPIS_OPTIONS },
    ],
  },
  {
    id: "auto",
    label: "Nettoyage auto",
    slug: "/nettoyage-auto-a-domicile-toulouse",
    icon: <Car className="size-5" />,
    formules: [
      {
        name: "Pack Bronze",
        desc: "Aspiration complète de l'habitacle et du coffre + nettoyage des plastiques.",
        duration: "1h",
        price: 69,
        options: [
          { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
          { name: "Élimination des poils d'animaux", extra: 25, extraTime: "+45 min" },
          { name: "Vitres sans traces", extra: 9, extraTime: "+20 min" },
          { name: "Shampouinage des tapis de sol", extra: 15, extraTime: "+25 min" },
          { name: "Nettoyage du ciel de toit", extra: 29, extraTime: "+30 min" },
          { name: "Shampouinage des sièges auto", extra: 45, extraTime: "+45 min" },
          { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
        ],
      },
      {
        name: "Pack Argent",
        desc: "Pack Bronze inclus + shampouinage des sièges et vitres sans traces.",
        duration: "1h30",
        price: 99,
        badge: "Populaire",
        options: [
          { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
          { name: "Détachage intensif – sièges très tachés", extra: 19, extraTime: "+30 min" },
          { name: "Élimination des poils d'animaux", extra: 25, extraTime: "+45 min" },
          { name: "Shampouinage des tapis de sol", extra: 15, extraTime: "+25 min" },
          { name: "Nettoyage du ciel de toit", extra: 29, extraTime: "+30 min" },
          { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
        ],
      },
      {
        name: "Pack Or",
        desc: "Pack Argent inclus + shampouinage des tapis de sol et des moquettes.",
        duration: "1h55",
        price: 129,
        badge: "Complet",
        options: [
          { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
          { name: "Détachage intensif – sièges très tachés", extra: 19, extraTime: "+30 min" },
          { name: "Élimination des poils d'animaux", extra: 25, extraTime: "+45 min" },
          { name: "Nettoyage du ciel de toit", extra: 29, extraTime: "+30 min" },
          { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
        ],
      },
      {
        name: "Rénovation siège auto",
        desc: "Nettoyage en profondeur d'un siège auto isolé.",
        duration: "45 min",
        price: 59,
        options: [
          { name: "Traitement anti-acariens et bactériens", extra: 19, extraTime: "+20 min", popular: true },
          { name: "Détachage intensif – sièges très tachés", extra: 19, extraTime: "+30 min" },
          { name: "Élimination des poils d'animaux", extra: 25, extraTime: "+45 min" },
          { name: "Traitement anti-odeur", extra: 15, extraTime: "+10 min", popular: true },
        ],
      },
    ],
  },
  {
    id: "matelas",
    label: "Nettoyage matelas",
    slug: "/nettoyage-matelas-toulouse",
    icon: <BedDouble className="size-5" />,
    formules: [
      { name: "Matelas enfant", duration: "30 min", price: 39, options: MATELAS_OPTIONS },
      { name: "Matelas 1 place", duration: "1h", price: 59, options: MATELAS_OPTIONS },
      { name: "Matelas 2 places", duration: "1h", price: 99, options: MATELAS_OPTIONS },
    ],
  },
];


// ─── PAGE ─────────────────────────────────────────────────────────────────────

function FormulesPage() {
  return (
    <div className="pb-24 lg:pb-0">

      {/* ── HERO TITRE ── */}
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-4 text-center">
        <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
          Tarifs &amp; Prestations
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          L'Excellence à Prix Juste
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          15 formules, options personnalisables à la réservation. Intervention à domicile sur Toulouse
          avec du matériel professionnel et des produits certifiés Écolabel.
        </p>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          {[1,2,3,4,5].map(i => <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />)}
          <span className="font-semibold text-foreground">4,9</span>
          <span>· 91 avis Google</span>
        </div>
      </div>

      {/* ── 3 TIERS ── */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-6">
        <div className="grid gap-4 md:grid-cols-3 items-stretch">
          {/* Tier 1 */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
            <Armchair className="size-7 stroke-[1.4] text-accent" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight">Textile Essentiel</h2>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Fauteuils, canapés simples et matelas.
            </p>
            <div className="mt-5">
              <span className="text-sm text-muted-foreground">À partir de</span>
              <p className="font-display text-5xl font-bold leading-none">39 <span className="text-2xl">€</span></p>
            </div>
            <ul className="mt-5 flex-1 space-y-2.5">
              {["Injection-extraction pro", "Détachage standard", "Produits Écolabel", "4 options disponibles"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />{item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="lg" className="mt-6 w-full">
              <a href="/reserver">Choisir ma prestation <ArrowRight className="size-4" /></a>
            </Button>
          </div>

          {/* Tier 2 — featured */}
          <div className="relative flex flex-col rounded-2xl bg-ink p-7 shadow-[var(--shadow-card)] text-ink-foreground">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground shadow">
              Le plus demandé
            </span>
            <Armchair className="size-7 stroke-[1.4] text-accent" />
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight">Canapé &amp; Grand Confort</h2>
            <p className="mt-1.5 text-sm text-ink-foreground/65 leading-relaxed">
              Grands canapés, angles et matelas 2 places.
            </p>
            <div className="mt-5">
              <span className="text-sm text-ink-foreground/60">À partir de</span>
              <p className="font-display text-5xl font-bold leading-none">79 <span className="text-2xl">€</span></p>
            </div>
            <ul className="mt-5 flex-1 space-y-2.5">
              {["Canapés 3 places et + / Angles", "Traitement anti-acariens disponible", "Neutralisation des odeurs", "Séchage express"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />{item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-6 w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
              <a href="/reserver">Choisir ma prestation <ArrowRight className="size-4" /></a>
            </Button>
          </div>

          {/* Tier 3 */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
            <Car className="size-7 stroke-[1.4] text-accent" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight">Auto &amp; Extérieur</h2>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              Habitacle auto complet — du Bronze au Pack Or.
            </p>
            <div className="mt-5">
              <span className="text-sm text-muted-foreground">À partir de</span>
              <p className="font-display text-5xl font-bold leading-none">69 <span className="text-2xl">€</span></p>
            </div>
            <ul className="mt-5 flex-1 space-y-2.5">
              {["Sièges, moquettes, coffre", "Jusqu'à 7 options disponibles", "Intervention à domicile", "Devis sous 24h"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />{item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="lg" className="mt-6 w-full">
              <a href="/reserver">Choisir ma prestation <ArrowRight className="size-4" /></a>
            </Button>
          </div>
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Info className="size-4 shrink-0" />
          Besoin d'un nettoyage d'appartement ou fin de chantier ?{" "}
          <Link to="/contactez-nous" className="font-medium text-foreground underline underline-offset-2 hover:text-primary">
            Contactez-nous pour un devis sur-mesure.
          </Link>
        </p>
      </section>


    </div>
  );
}
