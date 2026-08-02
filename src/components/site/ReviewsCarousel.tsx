import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Mélodie D.",
    city: "Toulouse",
    service: "Nettoyage canapé",
    stars: 5,
    text: "J'ai réservé un dimanche pour un rendez-vous dès le lendemain, disponible sans problème. Aucune surprise, prix affiché directement. La personne intervenue était très professionnelle. L'avant/après parle de lui-même : nettoyage impeccable.",
  },
  {
    name: "Marion L.",
    city: "Toulouse",
    service: "Nettoyage canapé",
    stars: 5,
    text: "Canapé en tissu clair récupéré alors que je pensais le jeter. Résultat impeccable, plus une tache ni d'odeur. Je recommande les yeux fermés.",
  },
  {
    name: "Sarah D.",
    city: "Toulouse",
    service: "Nettoyage tapis",
    stars: 5,
    text: "J'ai fait appel à cette entreprise de Nettoyage, résultats magnifiques. Les tapis de toute la maison sont propres et désinfectés. Je n'hésiterai pas à refaire appel à eux.",
  },
  {
    name: "Julien D.",
    city: "Blagnac",
    service: "Nettoyage matelas",
    stars: 5,
    text: "Très professionnel et ponctuel. Le matelas de mon fils a été traité anti-acariens, il dort beaucoup mieux depuis. Prix annoncé respecté.",
  },
  {
    name: "Da Cova M.",
    city: "Toulouse",
    service: "Nettoyage canapé",
    stars: 5,
    text: "Superbe entreprise de nettoyage à Toulouse, ponctuelle, résultat impeccable. Mon canapé est reparti pour un an !",
  },
  {
    name: "Sabrina M.",
    city: "Colomiers",
    service: "Intérieur auto",
    stars: 5,
    text: "Réactivité au top : devis le matin, intervention le lendemain devant chez moi. La voiture est comme neuve à l'intérieur.",
  },
  {
    name: "Jean-Pierre T.",
    city: "Toulouse",
    service: "Nettoyage extrême",
    stars: 5,
    text: "Prestation impeccable pour le nettoyage complet d'un logement insalubre. Récupération et désinfection d'un canapé, d'un tapis, d'un matelas. Un grand merci à l'équipe Clean&Fresh.",
  },
  {
    name: "Claire B.",
    city: "Tournefeuille",
    service: "Nettoyage tapis",
    stars: 5,
    text: "Un grand tapis de salon très encrassé retrouvé comme au premier jour. Travail soigné et conseils utiles pour l'entretien.",
  },
  {
    name: "Jade O.",
    city: "Toulouse",
    service: "Nettoyage appartement",
    stars: 5,
    text: "Nettoyage de fin de bail à Toulouse. Communication très fluide et flexibilité sur les dates. Résultat très complet, sols, vaisselle, placards. Tarif honnête. Je recommande !",
  },
  {
    name: "Antoine R.",
    city: "Toulouse",
    service: "Fin de chantier",
    stars: 5,
    text: "Appartement livré nickel après nos travaux. Équipe sérieuse, rien n'a été oublié, même les rails de fenêtres.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = REVIEWS.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  // Visible indices: show 3 on md+, 1 on mobile
  const getVisible = (count: number) =>
    Array.from({ length: count }, (_, i) => (current + i) % total);

  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Avis vérifiés</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight">Ce que disent nos clients</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4,9</span>
              <span className="text-sm text-muted-foreground">· 91 avis Google</span>
            </div>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => { prev(); setPaused(true); }}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:bg-secondary hover:shadow-[var(--shadow-card)]"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => { next(); setPaused(true); }}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:bg-secondary hover:shadow-[var(--shadow-card)]"
              aria-label="Avis suivant"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <ReviewCard review={REVIEWS[current]} />
          </div>

          {/* Desktop: 3 cards */}
          {getVisible(3).map((idx, pos) => (
            <div
              key={`${idx}-${pos}`}
              className={`hidden md:block transition-opacity duration-300 ${
                pos === 0 ? "opacity-100" : pos === 1 ? "opacity-90" : "opacity-70"
              }`}
            >
              <ReviewCard review={REVIEWS[idx]} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-1.5">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
              aria-label={`Aller à l'avis ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <StarRating count={review.stars} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        "{review.text}"
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.city}</p>
        </div>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
          {review.service}
        </span>
      </figcaption>
    </figure>
  );
}
