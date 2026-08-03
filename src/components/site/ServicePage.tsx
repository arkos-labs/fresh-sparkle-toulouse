import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, Check, MapPin, Phone, Sparkles, ArrowRight, Clock, Shield, PawPrint, Eraser, Wind, RotateCcw, Sofa, Car as CarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMMUNES, COMPANY, SERVICES, type Service } from "@/data/site";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { FadeIn } from "@/components/ui/fade-in";

const PHOTOS_BY_CATEGORY: Record<string, string[]> = {
  canape: ["/realisations/photo-01.jpg", "/realisations/photo-04.jpg", "/realisations/photo-05.jpg", "/realisations/photo-08.jpg"],
  auto: ["/realisations/photo-02.jpg", "/realisations/photo-03.jpg", "/realisations/photo-10.jpg", "/realisations/photo-16.jpg"],
  tapis: ["/realisations/photo-07.jpg", "/realisations/photo-28.jpg", "/realisations/photo-36.jpg", "/realisations/photo-21.jpg"],
  matelas: ["/realisations/photo-09.jpg", "/realisations/photo-15.jpg", "/realisations/photo-31.jpg", "/realisations/photo-22.jpg"],
  batiment: ["/realisations/photo-06.jpg", "/realisations/photo-32.jpg", "/realisations/photo-11.jpg", "/realisations/photo-12.jpg"]
};

function getBookingServiceId(slug: string): string | null {
  if (slug.includes("canape")) return "canape";
  if (slug.includes("matelas")) return "matelas";
  if (slug.includes("tapis")) return "tapis";
  if (slug.includes("auto")) return "auto";
  return null;
}

type ServiceOption = { name: string; price: number; desc: string; popular?: boolean; icon: ReactNode };

const OPTIONS_BY_SERVICE: Record<string, ServiceOption[]> = {
  canape: [
    { icon: <Shield className="size-8" />,    name: "Traitement anti-acariens", price: 19, desc: "Élimine 99,9% des acariens et allergènes. Idéal pour les personnes sensibles.", popular: true },
    { icon: <PawPrint className="size-8" />,  name: "Élimination des poils d'animaux", price: 15, desc: "Brossage mécanique spécifique avant l'injection-extraction.", popular: true },
    { icon: <Eraser className="size-8" />,    name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café)." },
    { icon: <Wind className="size-8" />,      name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
  ],
  tapis: [
    { icon: <Shield className="size-8" />,      name: "Traitement anti-acariens", price: 19, desc: "Élimine les acariens et allergènes présents dans les fibres du tapis.", popular: true },
    { icon: <RotateCcw className="size-8" />,   name: "Nettoyage recto-verso", price: 25, desc: "Nettoyage des deux faces du tapis pour un résultat total." },
    { icon: <Eraser className="size-8" />,      name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café)." },
    { icon: <Wind className="size-8" />,        name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
  ],
  matelas: [
    { icon: <Shield className="size-8" />,  name: "Traitement anti-acariens", price: 19, desc: "Élimine 99,9% des acariens. Indispensable pour les allergiques.", popular: true },
    { icon: <Eraser className="size-8" />,  name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches résistantes (transpiration, sang…)." },
    { icon: <Wind className="size-8" />,    name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
  ],
  auto: [
    { icon: <Shield className="size-8" />,   name: "Traitement anti-acariens", price: 19, desc: "Élimine les allergènes des textiles de l'habitacle.", popular: true },
    { icon: <PawPrint className="size-8" />, name: "Élimination des poils d'animaux", price: 25, desc: "Brossage spécifique avant nettoyage des sièges et moquettes.", popular: true },
    { icon: <Sofa className="size-8" />,     name: "Shampouinage des tapis de sol", price: 15, desc: "Nettoyage injection-extraction des tapis de sol du véhicule." },
    { icon: <CarIcon className="size-8" />,  name: "Nettoyage du ciel de toit", price: 29, desc: "Nettoyage en profondeur du revêtement du plafond de l'habitacle." },
    { icon: <Eraser className="size-8" />,   name: "Détachage intensif — siège", price: 19, desc: "Traitement ciblé pour les tâches résistantes sur sièges." },
    { icon: <Wind className="size-8" />,     name: "Traitement anti-odeur", price: 15, desc: "Neutralisation des mauvaises odeurs incrustées (tabac, animaux…)", popular: true },
  ],
};

export function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const bookingServiceId = getBookingServiceId(service.slug);
  const serviceOptions = bookingServiceId ? (OPTIONS_BY_SERVICE[bookingServiceId] ?? []) : [];
  
  const categoryImages = bookingServiceId ? PHOTOS_BY_CATEGORY[bookingServiceId] : PHOTOS_BY_CATEGORY["batiment"];

  return (
    <div className="pb-24 lg:pb-0">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <MapPin className="size-3" /> Toulouse & Haute-Garonne
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {service.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
            {service.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {service.booking ? (
              <Button
                asChild
                size="xl"
                className="bg-accent-gradient text-accent-foreground font-bold shadow-[var(--shadow-card)] hover:opacity-90"
              >
                {bookingServiceId ? (
                  <Link to="/reserver" search={{ service: bookingServiceId }}>
                    <CalendarCheck /> Réserver en ligne
                  </Link>
                ) : (
                  <Link to="/reserver">
                    <CalendarCheck /> Réserver en ligne
                  </Link>
                )}
              </Button>
            ) : (
              <Button asChild variant="cta" size="xl">
                <Link to="/contactez-nous">Devis gratuit sous 24h</Link>
              </Button>
            )}
            <Button asChild variant="onDark" size="xl">
              <a href={COMPANY.phoneHref}>
                <Phone /> {COMPANY.phone}
              </a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-ink-foreground/60">
            <span className="inline-flex items-center gap-1"><Clock className="size-3" /> Devis sous 24h</span>
            <span className="inline-flex items-center gap-1"><Check className="size-3" /> Séchage rapide</span>
            <span className="inline-flex items-center gap-1"><Check className="size-3" /> Produits Écolabel</span>
          </div>
        </div>
      </section>

      {/* ── DETAIL ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Le service en détail</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Comment ça se passe ?</h2>
            {service.intro.map((p) => (
              <p key={p} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 content-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary mb-3">
                <Check className="size-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-3">Ce que nous traitons</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.treated.map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary mb-3">
                <Sparkles className="size-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-3">Problèmes résolus</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.problems.map((t) => (
                  <li key={t} className="flex gap-2">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparence</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Tarifs clairs, sans surprise</h2>

          {service.prices ? (
            <>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.prices.map((row) => (
                  <div
                    key={row.label}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                  >
                    <p className="text-sm font-semibold text-muted-foreground">{row.label}</p>
                    <p className="mt-1 text-3xl font-bold text-primary">{row.price}</p>

                    {row.items && row.items.length > 0 && (
                      <ul className="mt-4 flex-1 space-y-2">
                        {row.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {row.note && (
                      <p className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground italic">
                        <span className="shrink-0 mt-0.5">ℹ️</span> {row.note}
                      </p>
                    )}

                    <Button
                      asChild
                      className="mt-5 bg-accent-gradient text-accent-foreground font-semibold hover:opacity-90"
                      size="sm"
                    >
                      <Link to="/reserver" search={bookingServiceId ? { service: bookingServiceId } : undefined}>
                        <CalendarCheck className="size-4" /> Je réserve
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              {service.priceNote && (
                <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{service.priceNote}</p>
              )}

              {/* Options disponibles */}
              {serviceOptions.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-1">
                    Personnalisez votre soin{" "}
                    <span className="text-primary">{service.short}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Options à ajouter lors de la réservation en ligne.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {serviceOptions.map((opt) => (
                      <div
                        key={opt.name}
                        className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                      >
                        {/* Icon + badge */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex size-14 items-center justify-center rounded-xl bg-secondary text-primary">
                            {opt.icon}
                          </div>
                          {opt.popular && (
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                              Populaire
                            </span>
                          )}
                        </div>
                        {/* Nom + desc */}
                        <p className="font-bold text-sm leading-snug">{opt.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed flex-1">{opt.desc}</p>
                        {/* Prix */}
                        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Supplément</span>
                          <span className="font-bold text-primary">+{opt.price} €</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inline booking banner */}
              <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-card px-8 py-6 text-center shadow-[var(--shadow-soft)] md:flex-row md:text-left">
                <CalendarCheck className="size-10 shrink-0 text-primary" />
                <div className="flex-1">
                  <p className="font-bold">Réservez votre créneau en 2 minutes</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Choisissez votre prestation, votre date et votre heure directement en ligne.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90 shrink-0"
                >
                  <Link to="/reserver" search={bookingServiceId ? { service: bookingServiceId } : undefined}>
                    Réserver en ligne <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <p className="text-xl font-bold">Prestation sur devis personnalisé</p>
              <p className="mt-2 max-w-2xl text-muted-foreground">{service.priceNote}</p>
              <Button asChild size="lg" className="mt-6 bg-primary-gradient text-primary-foreground font-semibold hover:opacity-90">
                <Link to="/contactez-nous">Demander mon devis gratuit</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── ZONE + SALISSURES ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Déplacement</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Notre zone d'intervention</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Nous nous déplaçons dans toute la métropole toulousaine, chez les particuliers comme chez les professionnels.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {COMMUNES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          {service.soils && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Efficacité</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Salissures traitées</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.soils.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-[var(--shadow-soft)]"
                  >
                    <Check className="size-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      </FadeIn>

      {/* ── AVANT / APRÈS ── */}
      <FadeIn delay={0.2}>
        <section className="bg-secondary/60 py-16">
          <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Nos réalisations</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Avant / après nos interventions</h2>
          <p className="mt-3 text-muted-foreground">
            Photos réelles prises sur nos chantiers à Toulouse et dans l'agglomération.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryImages.map((src, idx) => (
              <figure
                key={idx}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <img
                  src={src}
                  alt={`${service.h1} — Avant / Après ${idx + 1}`}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="p-3 text-[10px] font-bold uppercase tracking-widest text-primary text-center">
                  Avant / Après
                </figcaption>
              </figure>
            ))}
          </div>
            </div>
        </section>
      </FadeIn>

      {/* ── AVIS CLIENTS ── */}
      <ReviewsCarousel />

      {/* ── MÉTHODE ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Notre savoir-faire</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Notre méthode de travail</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {service.method.map((step, i) => (
            <li
              key={step}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-gradient text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)]">
                {i + 1}
              </span>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step}</p>
            </li>
          ))}
          </ol>
        </section>
      </FadeIn>

      {/* ── FAQ ── */}
      {service.faq && service.faq.length > 0 && (
        <FadeIn delay={0.1}>
          <section className="mx-auto max-w-6xl px-4 py-16">
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }),
            }}
          />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Questions fréquentes</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            FAQ — {service.short}
          </h2>
          <div className="mt-8 space-y-3">
            {service.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-xl text-muted-foreground transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </FadeIn>
      )}

      {/* ── CTA RÉSERVATION ── */}
      <FadeIn delay={0.2}>
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 text-center text-ink-foreground shadow-[var(--shadow-card)]">
          <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-4xl">Prêt à réserver ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-foreground/75">
              Choisissez votre créneau en ligne en moins de deux minutes, ou appelez-nous pour un
              devis gratuit sous 24h.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="xl"
                className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
              >
                {bookingServiceId ? (
                  <Link to="/reserver" search={{ service: bookingServiceId }}>
                    <CalendarCheck /> Réserver en ligne
                  </Link>
                ) : (
                  <Link to="/reserver">
                    <CalendarCheck /> Réserver en ligne
                  </Link>
                )}
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contactez-nous">Devis gratuit</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <a href={COMPANY.phoneHref}>
                  <Phone /> {COMPANY.phone}
                </a>
              </Button>
            </div>
          </div>
          </div>
        </section>
      </FadeIn>

      {/* ── AUTRES SERVICES ── */}
      {/* ── AUTRES SERVICES ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Nos autres services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={s.slug}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <div>
                <p className="font-semibold group-hover:text-primary transition-colors">{s.navLabel}</p>
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{s.subtitle}</p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </section>
      </FadeIn>
    </div>
  );
}
