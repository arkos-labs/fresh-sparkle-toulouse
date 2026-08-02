import { Link } from "@tanstack/react-router";
import { CalendarCheck, Check, MapPin, Phone, Sparkles, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMMUNES, COMPANY, SERVICES, type Service } from "@/data/site";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import avantCanape from "@/assets/avant-canape.jpg";
import apresCanape from "@/assets/apres-canape.jpg";
import avantAuto from "@/assets/avant-auto.jpg";
import apresAuto from "@/assets/apres-auto.jpg";

function getBookingServiceId(slug: string): string | null {
  if (slug.includes("canape")) return "canape";
  if (slug.includes("matelas")) return "matelas";
  if (slug.includes("tapis")) return "tapis";
  if (slug.includes("auto")) return "auto";
  return null;
}

export function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);
  const bookingServiceId = getBookingServiceId(service.slug);

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
                  <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                    <CalendarCheck /> Réserver en ligne
                  </a>
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
                    <Button
                      asChild
                      className="mt-5 bg-accent-gradient text-accent-foreground font-semibold hover:opacity-90"
                      size="sm"
                    >
                      <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                        <CalendarCheck className="size-4" /> Je réserve
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
              {service.priceNote && (
                <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{service.priceNote}</p>
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
                  <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                    Réserver en ligne <ArrowRight className="size-4" />
                  </a>
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

      {/* ── AVANT / APRÈS ── */}
      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Nos réalisations</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Avant / après nos interventions</h2>
          <p className="mt-3 text-muted-foreground">
            Photos réelles prises sur nos chantiers à Toulouse et dans l'agglomération.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: avantCanape, label: "Avant — assise tachée" },
              { src: apresCanape, label: "Après — tissu ravivé" },
              { src: avantAuto, label: "Avant — habitacle encrassé" },
              { src: apresAuto, label: "Après — intérieur comme neuf" },
            ].map((img) => (
              <figure
                key={img.label}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <img
                  src={img.src}
                  alt={`${service.h1} — ${img.label}`}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="p-3 text-xs font-medium text-muted-foreground">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVIS CLIENTS ── */}
      <ReviewsCarousel />

      {/* ── MÉTHODE ── */}
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

      {/* ── CTA RÉSERVATION ── */}
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
                  <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                    <CalendarCheck /> Réserver en ligne
                  </a>
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

      {/* ── AUTRES SERVICES ── */}
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
    </div>
  );
}
