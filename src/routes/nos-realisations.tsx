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
  { src: "/realisations/photo-02.jpg", date: "28 juillet 2026", city: "Toulouse", title: "Nettoyage canapé" },
  { src: "/realisations/photo-03.jpg", date: "10 juillet 2026", city: "Colomiers", title: "Nettoyage matelas" },
  { src: "/realisations/photo-04.jpg", date: "22 juin 2026", city: "Tournefeuille", title: "Nettoyage matelas" },
  { src: "/realisations/photo-05.jpg", date: "4 juin 2026", city: "Blagnac", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-06.jpg", date: "17 mai 2026", city: "Balma", title: "Nettoyage hotte" },
  { src: "/realisations/photo-07.jpg", date: "29 avril 2026", city: "L'Union", title: "Nettoyage canapé" },
  { src: "/realisations/photo-08.jpg", date: "11 avril 2026", city: "Ramonville-Saint-Agne", title: "Nettoyage auto" },
  { src: "/realisations/photo-09.jpg", date: "24 mars 2026", city: "Cugnaux", title: "Nettoyage canapé" },
  { src: "/realisations/photo-10.jpg", date: "6 mars 2026", city: "Portet-sur-Garonne", title: "Nettoyage canapé" },
  { src: "/realisations/photo-11.jpg", date: "16 février 2026", city: "Saint-Orens-de-Gameville", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-12.jpg", date: "29 janvier 2026", city: "Castanet-Tolosan", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-13.jpg", date: "11 janvier 2026", city: "Saint-Jean", title: "Nettoyage fauteuil" },
  { src: "/realisations/photo-14.jpg", date: "24 décembre 2025", city: "Aucamville", title: "Nettoyage chaises" },
  { src: "/realisations/photo-15.jpg", date: "6 décembre 2025", city: "Fenouillet", title: "Nettoyage matelas" },
  { src: "/realisations/photo-16.jpg", date: "18 novembre 2025", city: "Quint-Fonsegrives", title: "Nettoyage auto" },
  { src: "/realisations/photo-17.jpg", date: "31 octobre 2025", city: "Launaguet", title: "Nettoyage canapé" },
  { src: "/realisations/photo-18.jpg", date: "13 octobre 2025", city: "Pechbusque", title: "Nettoyage auto" },
  { src: "/realisations/photo-19.jpg", date: "25 septembre 2025", city: "Vieille-Toulouse", title: "Nettoyage auto" },
  { src: "/realisations/photo-20.jpg", date: "7 septembre 2025", city: "Labège", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-21.jpg", date: "20 août 2025", city: "Escalquens", title: "Nettoyage Diogène" },
  { src: "/realisations/photo-22.jpg", date: "2 août 2025", city: "Plaisance-du-Touch", title: "Nettoyage Diogène" },
  { src: "/realisations/photo-23.jpg", date: "15 juillet 2025", city: "Villeneuve-Tolosane", title: "Nettoyage Diogène" },
  { src: "/realisations/photo-24.jpg", date: "27 juin 2025", city: "Frouzins", title: "Nettoyage canapé" },
  { src: "/realisations/photo-25.jpg", date: "9 juin 2025", city: "Roques", title: "Nettoyage auto" },
  { src: "/realisations/photo-26.jpg", date: "22 mai 2025", city: "Pinsaguel", title: "Nettoyage insalubre" },
  { src: "/realisations/photo-27.jpg", date: "4 mai 2025", city: "Lacroix-Falgarde", title: "Nettoyage intérieur auto" },
  { src: "/realisations/photo-28.jpg", date: "16 avril 2025", city: "Auzeville-Tolosane", title: "Nettoyage moquette" },
  { src: "/realisations/photo-29.jpg", date: "29 mars 2025", city: "Auzielle", title: "Nettoyage canapé" },
  { src: "/realisations/photo-30.jpg", date: "11 mars 2025", city: "Lauzerville", title: "Nettoyage intérieur auto" },
  { src: "/realisations/photo-31.jpg", date: "21 février 2025", city: "Flourens", title: "Nettoyage matelas" },
  { src: "/realisations/photo-32.jpg", date: "3 février 2025", city: "Mons", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-33.jpg", date: "16 janvier 2025", city: "Pin-Balma", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-34.jpg", date: "29 décembre 2024", city: "Montrabé", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-35.jpg", date: "11 décembre 2024", city: "Rouffiac-Tolosan", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-36.jpg", date: "23 novembre 2024", city: "Castelmaurou", title: "Nettoyage tapis" },
  { src: "/realisations/photo-37.jpg", date: "5 novembre 2024", city: "Saint-Alban", title: "Nettoyage fin de bail" },
  { src: "/realisations/photo-38.jpg", date: "18 octobre 2024", city: "Castelginest", title: "Nettoyage canapé" },
  { src: "/realisations/photo-39.jpg", date: "30 septembre 2024", city: "Fonbeauzard", title: "Nettoyage insalubre" },
  { src: "/realisations/photo-40.jpg", date: "12 septembre 2024", city: "Cornebarrieu", title: "Nettoyage Diogène" },
  { src: "/realisations/photo-41.jpg", date: "25 août 2024", city: "Beauzelle", title: "Nettoyage Diogène" },
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
                loading="lazy"
                decoding="async"
                alt={`Réalisation Clean&Fresh — avant/après #${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="bg-card px-4 py-3 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold text-foreground">{p.title}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{p.city}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{p.date}</span>
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
            <Link to="/formules">
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
            src={PHOTOS[lightbox]?.src}
            alt={`Réalisation Clean&Fresh — ${PHOTOS[lightbox]?.date ?? ""}`}
            loading="lazy"
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
