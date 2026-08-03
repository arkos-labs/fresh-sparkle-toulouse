import { Star, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    name: "Mélodie Dougnac-m",
    initials: "M",
    color: "#f87171",
    time: "il y a 2 semaines",
    stars: 5,
    text: "J'ai réservé un dimanche pour un rendez-vous dès le lendemain, et il était disponible sans problème. La réservation en ligne est simple. Prestation impeccable, l'avant/après parle de lui-même.",
  },
  {
    name: "Jade Orlini",
    initials: "J",
    color: "#34d399",
    time: "il y a moins d'une semaine",
    stars: 5,
    text: "Nettoyage de fin de bail à Toulouse. Communication très fluide et flexibilité sur les dates. L'appartement était très sale, résultat très complet. Je recommande !",
  },
  {
    name: "Jean-Pierre Thoulouse",
    initials: "J",
    color: "#818cf8",
    time: "il y a une semaine",
    stars: 5,
    text: "Prestation impeccable pour le nettoyage complet d'un logement insalubre. Récupération et désinfection d'un canapé, d'un tapis et d'un matelas. Un grand merci à l'équipe Clean&Fresh.",
  },
  {
    name: "Sarah D.",
    initials: "S",
    color: "#94a3b8",
    time: "il y a 2 semaines",
    stars: 5,
    text: "J'ai fait appel à cette entreprise de Nettoyage, résultats magnifiques. Les tapis de toute la maison sont propres et désinfectés. Je n'hésiterai pas à refaire appel à eux.",
  },
  {
    name: "Marion L.",
    initials: "M",
    color: "#f472b6",
    time: "il y a 3 semaines",
    stars: 5,
    text: "Canapé en tissu clair récupéré alors que je pensais le jeter. Résultat impeccable, plus une tache ni d'odeur. Je recommande les yeux fermés.",
  },
  {
    name: "Sabrina M.",
    initials: "S",
    color: "#a78bfa",
    time: "il y a 1 mois",
    stars: 5,
    text: "Réactivité au top : devis le matin, intervention le lendemain devant chez moi. La voiture est comme neuve à l'intérieur. Très professionnel.",
  },
  {
    name: "Julien D.",
    initials: "J",
    color: "#38bdf8",
    time: "il y a 1 mois",
    stars: 5,
    text: "Très professionnel et ponctuel. Le matelas de mon fils a été traité anti-acariens, il dort beaucoup mieux depuis. Prix annoncé respecté à la lettre.",
  },
  {
    name: "Claire B.",
    initials: "C",
    color: "#2dd4bf",
    time: "il y a 2 mois",
    stars: 5,
    text: "Un grand tapis de salon très encrassé retrouvé comme au premier jour. Travail soigné et conseils utiles pour l'entretien. Merci !",
  },
  {
    name: "Da Cova M.",
    initials: "D",
    color: "#fb923c",
    time: "il y a 2 mois",
    stars: 5,
    text: "Superbe entreprise de nettoyage à Toulouse, ponctuelle, résultat impeccable. Mon canapé est reparti pour un an !",
  },
  {
    name: "Antoine R.",
    initials: "A",
    color: "#84cc16",
    time: "il y a 3 mois",
    stars: 5,
    text: "Appartement livré nickel après nos travaux de rénovation. Équipe sérieuse, rien n'a été oublié, même les rails de fenêtres.",
  },
];

function GoogleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

// Duplicate array for seamless infinite loop
const TRACK = [...REVIEWS, ...REVIEWS];

export function ReviewsCarousel() {
  return (
    <section className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {/* Google brand + rating */}
            <div>
              <div className="flex items-center gap-2">
                <GoogleLogo />
                <span className="text-lg font-bold text-foreground">Avis Google</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-3xl font-bold leading-none text-foreground">4.9</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(i => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}
                  {/* Half star */}
                  <span className="relative inline-block size-4">
                    <Star className="absolute size-4 text-gray-200" />
                    <span className="absolute inset-0 overflow-hidden" style={{ width: "55%" }}>
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                    </span>
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">(91 avis)</span>
              </div>
            </div>
          </div>

          {/* Google badge link */}
          <a
            href="https://www.google.com/search?q=clean+fresh+toulouse+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <GoogleLogo />
            4,9 (91 avis)
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* Scrolling track — full width, overflow hidden */}
      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "reviews-scroll 40s linear infinite",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
          }}
        >
          {TRACK.map((r, idx) => (
            <figure
              key={idx}
              className="w-72 flex-shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              {/* Avatar + name + time */}
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {r.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes reviews-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
