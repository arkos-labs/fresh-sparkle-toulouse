import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "Nos réalisations avant/après — Clean&Fresh Toulouse";
const DESC =
  "Galerie avant/après des chantiers Clean&Fresh à Toulouse : canapé, matelas, sièges auto, tapis. Photos réelles prises chez nos clients.";

export const Route = createFileRoute("/nos-realisations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/nos-realisations" }],
  }),
  component: GaleriePage,
});

// 42 photos copiées dans public/realisations/ via copier-photos.ps1
const TOTAL = 42;
const PHOTOS = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/realisations/photo-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Réalisation Clean&Fresh Toulouse — avant/après #${i + 1}`,
}));

function GaleriePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + TOTAL) % TOTAL : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % TOTAL : null));

  return (
    <div className="bg-[#f9f9f7] pb-24 lg:pb-0">
      {/* ── HERO TITRE ── */}
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-12 text-center">
        <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
          Photos réelles
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Nos réalisations
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
          Avant / Après — photos prises chez nos clients à Toulouse.
          Canapés, sièges auto, matelas, tapis : le résultat parle de lui-même.
        </p>
      </div>

      {/* ── GRILLE ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              onClick={() => setLightbox(i)}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-bold">Envie du même résultat ?</p>
          <Button
            asChild
            size="xl"
            className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
          >
            <Link to="/reserver">
              <CalendarCheck className="size-5" /> Réserver en ligne
            </Link>
          </Button>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Fermer */}
          <button
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="size-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Image */}
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Compteur */}
          <p className="absolute bottom-4 text-sm text-white/60">
            {lightbox + 1} / {TOTAL}
          </p>
        </div>
      )}
    </div>
  );
}
