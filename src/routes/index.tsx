import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMMUNES, COMPANY, SERVICES, TESTIMONIALS } from "@/data/site";
import heroImg from "@/assets/hero-nettoyage.jpg";

const TITLE = "Entreprise de nettoyage à Toulouse — Clean&Fresh";
const DESC =
  "Clean&Fresh, entreprise de nettoyage à Toulouse pour particuliers et professionnels : canapé, matelas, tapis, auto, vitres, terrasse, toiture, fin de chantier. Devis gratuit sous 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SERVICE_ICONS: Record<string, string> = {
  "/nettoyage-canape-toulouse": "🛋️",
  "/nettoyage-matelas-toulouse": "🛏️",
  "/nettoyage-tapis-toulouse": "🪴",
  "/nettoyage-auto-a-domicile-toulouse": "🚗",
  "/nettoyage-de-vitres-toulouse": "🪟",
  "/nettoyage-terrasse-toulouse": "🏡",
  "/nettoyage-toiture-toulouse": "🏗️",
  "/nettoyage-facade-toulouse": "🧱",
  "/nettoyage-dappartement-ou-maison": "🏠",
  "/nettoyage-de-fin-de-chantier-toulouse": "🔧",
  "/nettoyage-extreme-toulouse": "⚡",
};

const STATS = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "24h", label: "Délai devis" },
  { value: "10", label: "Prestations" },
  { value: "Écolabel", label: "Produits certifiés" },
];

const WHY_US = [
  {
    icon: <MapPin className="size-6 text-primary" />,
    title: "On vient chez vous",
    desc: "Aucun déplacement de votre part. Nos techniciens arrivent avec tout le matériel nécessaire à domicile ou sur site.",
  },
  {
    icon: <Clock className="size-6 text-primary" />,
    title: "Devis en 24h",
    desc: "Envoyez votre demande, nous vous répondons sous 24h avec un tarif clair et sans surprise.",
  },
  {
    icon: <Leaf className="size-6 text-primary" />,
    title: "Produits Écolabel",
    desc: "Formules certifiées Écolabel européen, sans danger pour vos enfants, vos animaux et l'environnement.",
  },
];

function Index() {
  return (
    <div className="pb-24 lg:pb-0">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-[320px] rounded-full bg-primary-glow/15 blur-2xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <MapPin className="size-3" /> Toulouse & Haute-Garonne
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Entreprise de<br />
              <span className="text-primary-glow">nettoyage</span><br />
              à Toulouse
            </h1>

            <p className="mt-5 max-w-lg text-lg text-ink-foreground/75 leading-relaxed">
              Textiles d'ameublement, logements et extérieurs — nous intervenons directement chez vous avec du matériel professionnel. <strong className="font-semibold text-ink-foreground">Particuliers & professionnels.</strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="xl"
                className="bg-accent-gradient text-accent-foreground font-bold shadow-[var(--shadow-card)] hover:opacity-90 transition-opacity"
              >
                <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="size-5" /> Réserver en ligne
                </a>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contactez-nous">
                  Devis gratuit sous 24h
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-foreground/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary-glow" /> Intervention rapide
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary-glow" /> Sans déplacer vos meubles
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary-glow" /> Séchage express
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Technicien Clean&Fresh nettoyant un canapé par injection-extraction à Toulouse"
              width={1600}
              height={1100}
              className="rounded-3xl shadow-[0_32px_64px_-16px_oklch(0.13_0.04_252/0.5)]"
            />
            {/* Floating rating card */}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border/60 bg-card/95 px-5 py-3 shadow-[var(--shadow-card)] backdrop-blur lg:-left-8">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-foreground">500+ clients satisfaits</p>
              <p className="text-[10px] text-muted-foreground">Toulouse & agglomération</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-6 px-4">
              <span className="font-display text-3xl font-bold text-primary">{s.value}</span>
              <span className="mt-1 text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Nos prestations</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">10 services de nettoyage</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              À domicile ou sur site, pour particuliers et professionnels à Toulouse et sa banlieue.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/contactez-nous">Tous les devis <ArrowRight className="size-4" /></Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              {/* Top accent */}
              <div className="h-1 w-full bg-primary-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col p-6">
                <span className="text-3xl">{SERVICE_ICONS[s.slug] ?? "✨"}</span>
                <h3 className="mt-3 text-lg font-bold">{s.short}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{s.subtitle}</p>
                <Link
                  to={s.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  En savoir plus <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Simple & rapide</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Comment ça marche ?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Vous choisissez votre prestation",
                desc: "Canapé, matelas, tapis, auto, terrasse… Sélectionnez votre service et votre créneau en ligne, ou appelez-nous.",
              },
              {
                step: "02",
                title: "On vient chez vous",
                desc: "Nos techniciens arrivent à l'heure avec tout le matériel professionnel. Aucun déplacement de votre part.",
              },
              {
                step: "03",
                title: "Résultat impeccable",
                desc: "Taches éliminées, odeurs neutralisées, textile ravivé. Séchage rapide et vous pouvez utiliser votre intérieur en quelques heures.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <span className="font-display text-6xl font-bold text-primary/10 select-none">{item.step}</span>
                <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
            >
              <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                <CalendarCheck /> Réserver un créneau
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={COMPANY.phoneHref}>
                <Phone /> {COMPANY.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── POURQUOI CLEAN&FRESH ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Notre engagement</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight">Pourquoi choisir Clean&Fresh ?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_US.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="flex size-12 items-center justify-center rounded-xl bg-secondary">
                {w.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Avis clients</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Ce que disent nos clients</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="mt-4 size-5 text-primary/40" />
                <blockquote className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary">
                    {t.service}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE + CTA ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Zone d'intervention</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Nous intervenons partout dans l'agglomération
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Clean&Fresh se déplace chez vous dans toute la métropole toulousaine, en semaine et le week-end, avec des créneaux flexibles adaptés à votre emploi du temps.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {COMMUNES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-hero-gradient px-8 py-10 text-ink-foreground shadow-[var(--shadow-card)]">
            <Sparkles className="size-8 text-primary-glow" />
            <h2 className="mt-4 text-2xl font-bold leading-snug">
              Prêt à retrouver un intérieur comme neuf ?
            </h2>
            <p className="mt-3 text-sm text-ink-foreground/75 leading-relaxed">
              Choisissez votre créneau en ligne en moins de 2 minutes, ou demandez un devis gratuit. Nous répondons sous 24h.
            </p>
            <div className="mt-6 grid gap-3">
              <Button
                asChild
                size="xl"
                className="w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
              >
                <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck /> Réserver en ligne
                </a>
              </Button>
              <Button asChild variant="onDark" size="xl" className="w-full">
                <Link to="/contactez-nous">Demander un devis gratuit</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-ink-foreground/50">
              Ou appelez directement : <a href={COMPANY.phoneHref} className="font-semibold text-ink-foreground/80 hover:text-ink-foreground">{COMPANY.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
