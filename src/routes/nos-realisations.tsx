import { SITE_URL } from "@/data/site";
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
    links: [{ rel: "canonical", href: `${SITE_URL}/nos-realisations` }],
  }),
  component: GaleriePage,
});

// Photos copiées dans public/realisations/ via copier-photos.ps1
// photo-01 retirée (index commence à 2)
const PHOTOS = [
  { src: "/realisations/photo-02.jpg", date: "28 juillet 2026" },
  { src: "/realisations/photo-03.jpg", date: "26 juillet 2026" },
  { src: "/realisations/photo-04.jpg", date: "24 juillet 2026" },
  { src: "/realisations/photo-05.jpg", date: "21 juillet 2026" },
  { src: "/realisations/photo-06.jpg", date: "19 juillet 2026" },
  { src: "/realisations/photo-07.jpg", date: "17 juillet 2026" },
  { src: "/realisations/photo-08.jpg", date: "14 juillet 2026" },
  { src: "/realisations/photo-09.jpg", date: "12 juillet 2026" },
  { src: "/realisations/photo-10.jpg", date: "10 juillet 2026" },
  { src: "/realisations/photo-11.jpg", date: "7 juillet 2026" },
  { src: "/realisations/photo-12.jpg", date: "5 juillet 2026" },
  { src: "/realisations/photo-13.jpg", date: "3 juillet 2026" },
  { src: "/realisations/photo-14.jpg", date: "30 juin 2026" },
  { src: "/realisations/photo-15.jpg", date: "28 juin 2026" },
  { src: "/realisations/photo-16.jpg", date: "26 juin 2026" },
  { src: "/realisations/photo-17.jpg", date: "23 juin 2026" },
  { src: "/realisations/photo-18.jpg", date: "21 juin 2026" },
  { src: "/realisations/photo-19.jpg", date: "19 juin 2026" },
  { src: "/realisations/photo-20.jpg", date: "16 juin 2026" },
  { src: "/realisations/photo-21.jpg", date: "14 juin 2026" },
  { src: "/realisations/photo-22.jpg", date: "12 juin 2026" },
  { src: "/realisations/photo-23.jpg", date: "9 juin 2026" },
  { src: "/realisations/photo-24.jpg", date: "7 juin 2026" },
  { src: "/realisations/photo-25.jpg", date: "5 juin 2026" },
  { src: "/realisations/photo-26.jpg", date: "2 juin 2026" },
  { src: "/realisations/photo-27.jpg", date: "30 mai 2026" },
  { src: "/realisations/photo-28.jpg", date: "28 mai 2026" },
  { src: "/realisations/photo-29.jpg", date: "25 mai 2026" },
  { src: "/realisations/photo-30.jpg", date: "22 mai 2026" },
  { src: "/realisations/photo-31.jpg", date: "19 mai 2026" },
  { src: "/realisations/photo-32.jpg", date: "16 mai 2026" },
  { src: "/realisations/photo-33.jpg", date: "13 mai 2026" },
  { src: "/realisations/photo-34.jpg", date: "10 mai 2026" },
  { src: "/realisations/photo-35.jpg", date: "7 mai 2026" },
  { src: "/realisations/photo-36.jpg", date: "4 mai 2026" },
  { src: "/realisations/photo-37.jpg", date: "1 mai 2026" },
  { src: "/realisations/photo-38.jpg", date: "27 avril 2026" },
  { src: "/realisations/photo-39.jpg", date: "24 avril 2026" },
  { src: "/realisations/photo-40.jpg", date: "21 avril 2026" },
  { src: "/realisations/photo-41.jpg", date: "17 avril 2026" },
  { src: "/realisations/photo-42.jpg", date: "14 avril 2026" },
];
const TOTAL = PHOTOS.length;

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
                alt={`Réalisation Clean&Fresh — avant/après #${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="bg-card px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Avant / Après</span>
              </div>
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
          <img src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) = loading="lazy"> e.stopPropagation()}
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
