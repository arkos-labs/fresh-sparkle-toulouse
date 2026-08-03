import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  Clock,
  Leaf,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Armchair,
  BedDouble,
  Layers,
  Car,
  Droplets,
  Sun,
  Home,
  Building2,
  Wrench,
  Zap,
  Building,
  Star,
  KeyRound,
  PackageOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { COMMUNES, COMPANY, SERVICES, SITE_URL } from "@/data/site";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { FadeIn } from "@/components/ui/fade-in";
import heroImg from "@/assets/hero-nettoyage.jpg";
import avantCanape from "@/assets/avant-canape.jpg";
import apresCanape from "@/assets/apres-canape.jpg";
import avantAuto from "@/assets/avant-auto.jpg";
import apresAuto from "@/assets/apres-auto.jpg";

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
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "/nettoyage-canape-toulouse": <Armchair className="size-6" />,
  "/nettoyage-matelas-toulouse": <BedDouble className="size-6" />,
  "/nettoyage-tapis-toulouse": <Layers className="size-6" />,
  "/nettoyage-auto-a-domicile-toulouse": <Car className="size-6" />,
  "/nettoyage-de-vitres-toulouse": <Droplets className="size-6" />,
  "/nettoyage-terrasse-toulouse": <Sun className="size-6" />,
  "/nettoyage-toiture-toulouse": <Home className="size-6" />,
  "/nettoyage-facade-toulouse": <Building className="size-6" />,
  "/nettoyage-dappartement-ou-maison": <Building2 className="size-6" />,
  "/nettoyage-de-fin-de-chantier-toulouse": <Wrench className="size-6" />,
  "/nettoyage-fin-de-bail-toulouse": <KeyRound className="size-6" />,
  "/nettoyage-diogene-toulouse": <PackageOpen className="size-6" />,
  "/nettoyage-extreme-toulouse": <Zap className="size-6" />,
};

const QUICK_SERVICES = [
  { slug: "/nettoyage-canape-toulouse",          line1: "Nettoyage",    line2: "Canapé",             icon: <Armchair className="size-7 stroke-[1.4]" /> },
  { slug: "/nettoyage-matelas-toulouse",         line1: "Nettoyage",    line2: "Matelas",            icon: <BedDouble className="size-7 stroke-[1.4]" /> },
  { slug: "/nettoyage-auto-a-domicile-toulouse", line1: "Nettoyage",    line2: "Intérieur Auto",     icon: <Car      className="size-7 stroke-[1.4]" /> },
  { slug: "/nettoyage-tapis-toulouse",           line1: "Shampouinage", line2: "Moquette & Tapis",   icon: <Layers  className="size-7 stroke-[1.4]" /> },
];

const HERO_REVIEWS = [
  { name: "Sophie M.", text: "Canapé comme neuf après le passage !", stars: 5 },
  { name: "Karim B.", text: "Voiture impeccable, équipe très pro.", stars: 5 },
  { name: "Laurence T.", text: "Matelas propre et sans odeur. Merci !", stars: 5 },
  { name: "Thomas D.", text: "Tapis transformé, je recommande.", stars: 5 },
  { name: "Amina R.", text: "Rapide, efficace, tarifs honnêtes.", stars: 5 },
  { name: "Pierre V.", text: "Résultat bluffant sur mon canapé cuir.", stars: 5 },
  { name: "Nadia K.", text: "Super service, ponctuels et soigneux.", stars: 5 },
  { name: "Marc L.", text: "Terrasse nettoyée en 1h, top !", stars: 5 },
];

function HeroReviewTicker() {
  const all = [...HERO_REVIEWS, ...HERO_REVIEWS];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "420px",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col gap-3"
        style={{ animation: "hero-ticker-v 28s linear infinite" }}
      >
        {all.map((r, i) => (
          <div
            key={i}
            className="w-44 h-44 flex-shrink-0 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 flex flex-col justify-between"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} className="size-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-white/90 leading-snug line-clamp-4">{r.text}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "24h", label: "Délai devis" },
  { value: "13", label: "Prestations" },
  { value: "Pro", label: "Matériel certifié" },
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

      {/* ── HERO FULL-WIDTH ── */}
      <section
        className="relative flex flex-col min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay — plus dense en bas pour préparer la fusion */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,15,30,0.60) 0%, rgba(10,15,30,0.65) 60%, rgba(10,15,30,0.85) 100%)" }} />

        {/* Contenu principal — prend tout l'espace disponible */}
        <div className="relative flex-1 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Texte de gauche */}
            <div className="flex-1 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                <MapPin className="size-3" /> Toulouse & Haute-Garonne
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Entreprise de<br />
              <em className="not-italic text-accent">nettoyage</em><br />
              à Toulouse
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
              Textiles d'ameublement, logements et extérieurs — nous intervenons directement chez vous avec du matériel professionnel.{" "}
              <strong className="font-semibold text-white">Particuliers & professionnels.</strong>
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-sm font-bold text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Disponible 24h/24, 7j/7 — Réservation en 2 min
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="xl"
                className="bg-accent-gradient text-accent-foreground font-bold text-lg shadow-[var(--shadow-card)] hover:opacity-90 px-8"
              >
                <Link to="/reserver">
                  <CalendarCheck className="size-5" /> Réserver maintenant
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:border-white/60"
              >
                <a href={COMPANY.phoneHref}><Phone className="size-4" /> {COMPANY.phone}</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-accent" /> Intervention rapide
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-accent" /> Sans déplacer vos meubles
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-accent" /> Séchage express
              </span>
            </div>
            </div>

            {/* Carrousel Avant/Après - Discret (glassmorphism) pour ne pas gâcher la vue */}
            <div className="hidden lg:block w-full max-w-[360px] shrink-0">
              <div className="rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-5 shadow-2xl">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-white/90">
                  Résultats Avant / Après
                </p>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {[
                      { src: avantCanape, label: "Avant", title: "Canapé" },
                      { src: apresCanape, label: "Après", title: "Canapé ravivé" },
                      { src: avantAuto, label: "Avant", title: "Habitacle sale" },
                      { src: apresAuto, label: "Après", title: "Habitacle propre" },
                    ].map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={img.src}
                            alt={img.label}
                            className="aspect-[4/3] w-full object-cover"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                            <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${img.label === 'Après' ? 'bg-primary text-primary-foreground' : 'bg-white/20 text-white backdrop-blur'}`}>
                              {img.label}
                            </span>
                            <p className="mt-1 text-sm font-medium text-white">{img.title}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-3 mt-5">
                    <CarouselPrevious className="static translate-y-0 h-9 w-9 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
                    <CarouselNext className="static translate-y-0 h-9 w-9 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
                  </div>
                </Carousel>
              </div>
            </div>

          </div>
        </div>

        {/* ── BARRE SERVICES — fondue dans le hero ── */}
        <div
          className="relative"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.80) 100%)" }}
        >
          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4">
            {QUICK_SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to={s.slug}
                className={`group flex flex-col items-center gap-2.5 pt-8 pb-7 px-4 text-center transition-colors hover:bg-white/8 ${i < QUICK_SERVICES.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <span className="text-accent transition-transform group-hover:scale-110 duration-200">{s.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 leading-tight">
                  {s.line1}<br />{s.line2}
                </span>
                <span className="block h-0.5 w-6 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <FadeIn delay={0.1}>
        <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-7 px-4">
              <span className="font-display text-3xl font-bold text-primary">{s.value}</span>
              <span className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
        </section>
      </FadeIn>

      {/* ── INTRO TEXTE ── */}
      <FadeIn delay={0.2}>
        <section className="mx-auto max-w-4xl px-4 pt-16 pb-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Entreprise de nettoyage à Toulouse
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Notre entreprise de nettoyage met à disposition des services complets aussi bien pour les particuliers que pour les professionnels à Toulouse et dans les communes voisines. Nos agents de nettoyage interviennent avec sérieux et fiabilité afin de garantir des prestations adaptées à chaque besoin.
        </p>
        </section>
      </FadeIn>

      {/* ── SERVICES GRID ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Nos prestations</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">13 services de nettoyage</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              À domicile ou sur site, pour particuliers et professionnels à Toulouse et sa banlieue.
            </p>
          </div>
          <Link
            to="/contactez-nous"
            className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            Tous les devis <ArrowRight className="inline size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                {SERVICE_ICONS[s.slug] ?? <Sparkles className="size-6" />}
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug">{s.short}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{s.subtitle}</p>
              <Link
                to={s.slug}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary group-hover:text-primary"
              >
                En savoir plus <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
        </section>
      </FadeIn>

      {/* ── COMMENT ÇA MARCHE ── */}
      <FadeIn delay={0.2}>
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
            <Button asChild size="xl" className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
              <Link to="/reserver">
                <CalendarCheck /> Réserver un créneau
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={COMPANY.phoneHref}><Phone /> {COMPANY.phone}</a>
            </Button>
          </div>
        </div>
        </section>
      </FadeIn>

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

      {/* ── CARROUSEL AVIS GOOGLE ── */}
      <ReviewsCarousel />

      {/* ── GALERIE AVANT / APRÈS ── */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Nos réalisations</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">La différence Clean&Fresh</h2>
              <p className="mt-2 text-muted-foreground">Photos réelles prises chez nos clients à Toulouse.</p>
            </div>
            <Link
              to="/reserver"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <CalendarCheck className="size-4" /> Je réserve maintenant
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: avantCanape, label: "Avant", sublabel: "Canapé encrassé" },
              { src: apresCanape, label: "Après", sublabel: "Canapé ravivé" },
              { src: avantAuto, label: "Avant", sublabel: "Habitacle sale" },
              { src: apresAuto, label: "Après", sublabel: "Comme neuf" },
            ].map((img) => {
              const isAfter = img.label === "Après";
              return (
                <figure key={img.sublabel} className="group overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                  <div className="relative">
                    <img
                      src={img.src}
                      alt={`${img.label} — ${img.sublabel}`}
                      loading="lazy"
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      isAfter
                        ? "bg-primary text-primary-foreground"
                        : "bg-black/50 text-white backdrop-blur"
                    }`}>
                      {img.label}
                    </span>
                  </div>
                  <figcaption className="bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground">
                    {img.sublabel}
                  </figcaption>
                </figure>
              );
            })}
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
                <li key={c} className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
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
              <Button asChild size="xl" className="w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
                <Link to="/reserver">
                  <CalendarCheck /> Réserver en ligne
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl" className="w-full">
                <Link to="/contactez-nous">Demander un devis gratuit</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-ink-foreground/50">
              Ou appelez directement :{" "}
              <a href={COMPANY.phoneHref} className="font-semibold text-ink-foreground/80 hover:text-ink-foreground">
                {COMPANY.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
