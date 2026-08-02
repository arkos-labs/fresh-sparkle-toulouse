import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Clock, Phone, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/site";

const TITLE = "Formules & Tarifs — Clean&Fresh Toulouse";
const DESC =
  "Découvrez toutes nos formules de nettoyage à Toulouse : canapé, tapis, auto, matelas. Tarifs clairs, réservation en ligne en 2 minutes. À partir de 39 €.";

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

type Formule = {
  name: string;
  desc?: string;
  duration: string;
  options: number;
  price: number;
  badge?: string;
};

const CATEGORIES: { id: string; label: string; emoji: string; formules: Formule[] }[] = [
  {
    id: "canape",
    label: "Nettoyage canapé",
    emoji: "🛋️",
    formules: [
      { name: "Canapé 2 places", duration: "1h", options: 4, price: 79 },
      { name: "Canapé 3 places", duration: "1h", options: 4, price: 79 },
      { name: "Fauteuil", duration: "45 min", options: 4, price: 49 },
      { name: "Canapé d'angle", duration: "1h", options: 4, price: 99 },
      { name: "Canapé 4/5 places", duration: "1h", options: 4, price: 99 },
    ],
  },
  {
    id: "tapis",
    label: "Nettoyage tapis",
    emoji: "🪄",
    formules: [
      { name: "1 Tapis", duration: "45 min", options: 4, price: 49 },
      { name: "2 Tapis", duration: "1h", options: 4, price: 79 },
      { name: "3 Tapis", duration: "1h15", options: 4, price: 99 },
    ],
  },
  {
    id: "auto",
    label: "Nettoyage auto",
    emoji: "🚗",
    formules: [
      {
        name: "Pack Bronze",
        desc: "Aspiration complète de l'habitacle et du coffre + nettoyage des plastiques.",
        duration: "1h",
        options: 7,
        price: 69,
      },
      {
        name: "Pack Argent",
        desc: "Pack Bronze inclus + shampouinage des sièges et vitres sans traces.",
        duration: "1h30",
        options: 6,
        price: 99,
        badge: "Populaire",
      },
      {
        name: "Pack Or",
        desc: "Pack Argent inclus + shampouinage des tapis de sol et des moquettes.",
        duration: "1h55",
        options: 5,
        price: 129,
        badge: "Complet",
      },
      {
        name: "Rénovation siège auto",
        duration: "45 min",
        options: 4,
        price: 59,
      },
    ],
  },
  {
    id: "matelas",
    label: "Nettoyage matelas",
    emoji: "🛏️",
    formules: [
      { name: "Matelas 1 place", duration: "1h", options: 3, price: 59 },
      { name: "Matelas 2 places", duration: "1h", options: 3, price: 99 },
      { name: "Matelas enfant", duration: "30 min", options: 3, price: 39 },
    ],
  },
];

function FormuleCard({ f }: { f: Formule }) {
  const isPopular = f.badge === "Populaire";
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
        isPopular ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
      }`}
    >
      {f.badge && (
        <span
          className={`absolute -top-3 left-4 rounded-full px-3 py-0.5 text-xs font-bold ${
            isPopular
              ? "bg-primary-gradient text-primary-foreground"
              : "bg-accent-gradient text-accent-foreground"
          }`}
        >
          {f.badge}
        </span>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="font-bold text-foreground">{f.name}</p>
        {f.desc && (
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
            <Clock className="size-3" /> {f.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
            +{f.options} options
          </span>
        </div>

        <div className="mt-auto pt-4">
          <p className="text-xs text-muted-foreground">À partir de</p>
          <p className="text-3xl font-bold text-primary">
            {f.price}&nbsp;<span className="text-lg font-semibold">€</span>
          </p>
        </div>
      </div>

      <div className="border-t border-border px-5 py-3">
        <Button
          asChild
          className="w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
        >
          <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
            <CalendarCheck className="size-4" /> Réserver en ligne
          </a>
        </Button>
      </div>
    </div>
  );
}

function FormulesPage() {
  const totalFormules = CATEGORIES.reduce((s, c) => s + c.formules.length, 0);

  return (
    <div className="pb-24 lg:pb-0">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full bg-accent/10 blur-2xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Star className="size-3 fill-current" /> 4,9 · 91 avis Google
          </span>
          <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Nos formules & tarifs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
            {totalFormules} formules de nettoyage à Toulouse — canapé, tapis, intérieur auto, matelas.
            Tarifs affichés, sans surprise. Réservation en ligne en 2 minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="xl"
              className="bg-accent-gradient text-accent-foreground font-bold shadow-[var(--shadow-card)] hover:opacity-90"
            >
              <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                <CalendarCheck /> Réserver en ligne
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={COMPANY.phoneHref}>
                <Phone /> {COMPANY.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── NAV ANCRES ── */}
      <nav className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {cat.emoji} {cat.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── CATÉGORIES ── */}
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {cat.emoji} {cat.label}
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  {cat.formules.length} formule{cat.formules.length > 1 ? "s" : ""}
                </h2>
              </div>
              <a
                href={COMPANY.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Voir sur Dispoo <ChevronRight className="size-3.5" />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.formules.map((f) => (
                <FormuleCard key={f.name} f={f} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA FINAL ── */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 text-center text-ink-foreground shadow-[var(--shadow-card)]">
          <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-foreground/60">
              Réservation 100% en ligne
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Choisissez votre créneau maintenant
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-foreground/75">
              Sélectionnez votre prestation, votre date et votre heure en moins de 2 minutes.
              Paiement sur place par carte ou espèces.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="xl"
                className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
              >
                <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Réserver en ligne
                </a>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contactez-nous">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
