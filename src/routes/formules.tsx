import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck, Phone, Star, ArrowRight, Armchair, Car,
  CheckCircle2, Info, Layers, BedDouble, MapPin, Zap, Shield, Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/site";

const TITLE = "Tarifs nettoyage à domicile Toulouse — Clean&Fresh";
const DESC =
  "Tarifs nettoyage canapé, tapis, auto et matelas à Toulouse. À partir de 15 €. Intervention à domicile 7j/7. 91 avis 5★. Réservation en ligne en 2 min.";

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

// ─── PRICE CARD ───────────────────────────────────────────────────────────────

function PriceCard({
  title,
  price,
  items,
  badge,
  featured,
  bookingHref,
}: {
  title: string;
  price: string;
  items: string[];
  badge?: string;
  featured?: boolean;
  bookingHref?: string;
}) {
  const href = bookingHref ?? COMPANY.booking;

  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-md",
        featured
          ? "bg-primary text-white ring-2 ring-primary scale-[1.02]"
          : "border border-border bg-white",
      ].join(" ")}
    >
      {badge && (
        <span
          className={[
            "absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold shadow",
            featured ? "bg-white text-primary" : "bg-primary text-white",
          ].join(" ")}
        >
          {badge}
        </span>
      )}

      <h3 className={`text-base font-bold leading-snug ${featured ? "text-white" : "text-foreground"}`}>
        {title}
      </h3>

      <p className={`mt-2 text-4xl font-bold leading-none ${featured ? "text-white" : "text-primary"}`}>
        {price}
      </p>

      <ul className="mt-4 flex-1 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2
              className={`size-4 shrink-0 mt-0.5 ${featured ? "text-white/80" : "text-primary"}`}
            />
            <span className={featured ? "text-white/90" : "text-muted-foreground"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90",
          featured ? "bg-white text-primary" : "bg-primary text-white",
        ].join(" ")}
      >
        <CalendarCheck className="size-4" /> Je réserve
      </a>
    </div>
  );
}

// ─── OPTIONS ROW ──────────────────────────────────────────────────────────────

function OptionsRow({
  options,
}: {
  options: { name: string; price: number; desc: string; popular?: boolean }[];
}) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
        Options disponibles <span className="normal-case font-normal text-muted-foreground/70">(à ajouter lors de la réservation)</span>
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => (
          <div key={opt.name} className="flex items-start gap-3 rounded-xl border border-border p-3">
            <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold">{opt.name}</span>
                {opt.popular && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                    Populaire
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{opt.desc}</p>
            </div>
            <span className="shrink-0 font-bold text-sm text-primary">+{opt.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────

function SectionHeader({
  icon,
  title,
  sub,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
      <div>
        <div className="flex items-center gap-2 text-primary mb-1">
          {icon}
          <span className="text-xs font-bold uppercase tracking-widest">Tarifs</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      </div>
      <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-1 font-semibold text-foreground">4,9</span> · 91 avis
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function FormulesPage() {
  return (
    <div className="bg-[#f4f6f9] pb-24 lg:pb-0">

      {/* ── HERO ── */}
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center">
        <span className="inline-block rounded-full border border-border bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
          Tarifs & Prestations — Toulouse
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Des tarifs clairs,<br />un résultat <span className="text-primary">impeccable</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Nettoyage à domicile sur Toulouse et agglomération. Matériel professionnel,
          produits certifiés Écolabel, intervention 7j/7.
        </p>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="font-bold text-foreground ml-1">4,9 / 5</span>
          <span className="text-muted-foreground">· 91 avis Google vérifiés</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="font-bold">
            <Link to="/reserver">
              <CalendarCheck className="size-4" /> Réserver en ligne
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={COMPANY.phoneHref}>
              <Phone className="size-4" /> {COMPANY.phone}
            </a>
          </Button>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="border-y border-border bg-white py-4 mb-12">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { icon: <Zap className="size-4 text-primary" />, text: "Disponible dès demain" },
            { icon: <Leaf className="size-4 text-primary" />, text: "Produits Écolabel certifiés" },
            { icon: <Shield className="size-4 text-primary" />, text: "Satisfait ou on revient" },
            { icon: <MapPin className="size-4 text-primary" />, text: "Intervention à domicile" },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-1.5">
              {t.icon} {t.text}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CANAPÉ
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <SectionHeader
          icon={<Armchair className="size-5" />}
          title="Nettoyage Canapé & Fauteuil Toulouse"
          sub="Injection-extraction professionnelle · Assise, dossier et coussins compris · Séchage rapide"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Fauteuil"
            price="49 €"
            items={[
              "✅ Comme neuf en moins d'1h",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Canapé 2 / 3 places"
            price="79 €"
            badge="⭐ Le + demandé"
            featured
            items={[
              "✅ Transformé comme au 1er jour",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Canapé 4 / 5 places"
            price="99 €"
            items={[
              "✅ Comme neuf, même très encrassé",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Canapé en U / Angle"
            price="99 €"
            items={[
              "✅ Grande surface traitée en profondeur",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Pouf"
            price="19 €"
            items={[
              "✅ Comme neuf pour seulement 19 €",
              "Tissu, velours, toutes matières",
              "Tâches et mauvaises odeurs disparues",
              "Idéal à combiner avec le canapé",
            ]}
          />
          <PriceCard
            title="Chaise rembourrée (/ pièce)"
            price="15 €"
            items={[
              "✅ Propre et désinfectée en quelques min",
              "Idéal salle à manger ou bureau",
              "Tâches et mauvaises odeurs disparues",
              "Tarif dégressif à partir de 4 chaises",
            ]}
          />
        </div>
        <OptionsRow options={[
          { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens et allergènes. Idéal pour les personnes sensibles.", popular: true },
          { name: "Élimination des poils d'animaux", price: 15, desc: "Brossage mécanique spécifique avant l'injection-extraction.", popular: true },
          { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café)." },
          { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
        ]} />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Interventions disponibles à Toulouse, Blagnac, Colomiers, Tournefeuille, Balma et agglomération.
        </p>
      </section>

      {/* ══════════════════════════════════════════════
          TAPIS
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <SectionHeader
          icon={<Layers className="size-5" />}
          title="Shampouinage Moquette & Tapis Toulouse"
          sub="Injection-extraction · Fibres ravivées · Séchage dans la journée"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <PriceCard
            title="1 tapis"
            price="49 €"
            items={[
              "✅ Fibres et couleurs ravivées",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="2 tapis"
            price="79 €"
            badge="💰 Meilleur rapport qualité/prix"
            featured
            items={[
              "✅ Économisez 19 € vs 2 × 1 tapis",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="3 tapis"
            price="99 €"
            items={[
              "✅ Toute la maison nettoyée en 1 visite",
              "Tâches, auréoles et odeurs éliminées",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
        </div>
        <OptionsRow options={[
          { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens et allergènes présents dans les fibres du tapis.", popular: true },
          { name: "Nettoyage recto-verso", price: 25, desc: "Nettoyage des deux faces du tapis pour un résultat total." },
          { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café)." },
          { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
        ]} />
      </section>

      {/* ══════════════════════════════════════════════
          AUTO
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <SectionHeader
          icon={<Car className="size-5" />}
          title="Nettoyage Intérieur Auto Toulouse"
          sub="Intervention à domicile ou sur parking · Tous types de véhicules"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <PriceCard
            title="🥉 Pack Bronze"
            price="69 €"
            items={[
              "✅ Habitacle transformé en 45 min",
              "Aspiration complète + plastiques rénovés",
              "Idéal entretien régulier",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="🥈 Pack Argent"
            price="99 €"
            badge="⭐ Le + vendu"
            featured
            items={[
              "✅ Sièges comme neufs, odeurs disparues",
              "Tout le Pack Bronze inclus",
              "Injection/extraction sièges + vitres sans traces",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="🥇 Pack Or"
            price="129 €"
            badge="✨ Premium"
            items={[
              "✅ État showroom — idéal avant revente",
              "Tout le Pack Argent inclus",
              "Moquette, coffre et tapis traités",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Siège auto isolé"
            price="59 €"
            items={[
              "✅ Taches et odeurs disparues",
              "Siège enfant, conducteur ou passager",
              "Résultat visible immédiatement",
              "Satisfait ou on revient gratuitement",
            ]}
          />
        </div>
        <OptionsRow options={[
          { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine les allergènes des textiles de l'habitacle.", popular: true },
          { name: "Élimination des poils d'animaux (habitacle)", price: 25, desc: "Brossage spécifique avant nettoyage des sièges et moquettes." },
          { name: "Shampouinage des tapis de sol", price: 15, desc: "Nettoyage injection-extraction des tapis de sol du véhicule." },
          { name: "Nettoyage du ciel de toit", price: 29, desc: "Nettoyage en profondeur du revêtement du plafond de l'habitacle." },
          { name: "Détachage intensif — siège très taché", price: 19, desc: "Traitement ciblé pour les tâches résistantes sur sièges." },
          { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation des mauvaises odeurs incrustées (tabac, animaux…)", popular: true },
        ]} />
      </section>

      {/* ══════════════════════════════════════════════
          MATELAS
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <SectionHeader
          icon={<BedDouble className="size-5" />}
          title="Nettoyage Matelas Toulouse"
          sub="Anti-acariens · Désinfection · 2 côtés traités · Recommandé allergiques"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <PriceCard
            title="Matelas enfant"
            price="39 €"
            items={[
              "✅ Votre enfant dort dans un lit sain",
              "Anti-acariens inclus — idéal allergiques",
              "Tâches et odeurs éliminées, 2 côtés",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Matelas 1 place"
            price="59 €"
            badge="🌿 Recommandé"
            featured
            items={[
              "✅ Dormez dans un matelas comme neuf",
              "Anti-acariens inclus — idéal allergiques",
              "Tâches et odeurs éliminées, 2 côtés",
              "Satisfait ou on revient gratuitement",
            ]}
          />
          <PriceCard
            title="Matelas 2 places"
            price="99 €"
            items={[
              "✅ Chambre entièrement assainie",
              "Anti-acariens inclus — idéal allergiques",
              "Tâches et odeurs éliminées, 2 côtés",
              "Satisfait ou on revient gratuitement",
            ]}
          />
        </div>
        <OptionsRow options={[
          { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens. Indispensable pour les allergiques.", popular: true },
          { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches résistantes (transpiration, sang…)." },
          { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
        ]} />
      </section>

      {/* ── AUTRES SERVICES ── */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Sur devis</p>
          <h2 className="text-2xl font-bold tracking-tight">Autres prestations de nettoyage à Toulouse</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Nettoyage de toiture, façade, terrasse, vitrages, appartement, fin de bail, fin de chantier
            et logement insalubre (syndrome de Diogène). Devis gratuit sous 24h.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/contactez-nous">
                Demander un devis gratuit <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild>
              <a href={COMPANY.phoneHref}>
                <Phone className="size-4" /> {COMPANY.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SEO GÉO ── */}
      <section className="mx-auto max-w-6xl px-4 mb-12">
        <div className="rounded-2xl bg-secondary/40 border border-border px-8 py-10">
          <div className="flex items-center gap-2 text-primary mb-3">
            <MapPin className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Zone d'intervention</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Nettoyage à domicile Toulouse et agglomération
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Clean&Fresh intervient pour le nettoyage de canapé, matelas, tapis, moquette et intérieur
            auto à{" "}
            <strong className="text-foreground">Toulouse</strong>,{" "}
            <strong className="text-foreground">Blagnac</strong>,{" "}
            <strong className="text-foreground">Colomiers</strong>,{" "}
            <strong className="text-foreground">Tournefeuille</strong>,{" "}
            <strong className="text-foreground">Balma</strong>,{" "}
            <strong className="text-foreground">Ramonville-Saint-Agne</strong>,{" "}
            <strong className="text-foreground">Cugnaux</strong>,{" "}
            <strong className="text-foreground">L'Union</strong>,{" "}
            <strong className="text-foreground">Muret</strong>,{" "}
            <strong className="text-foreground">Saint-Orens</strong> et dans toute la{" "}
            <strong className="text-foreground">Haute-Garonne (31)</strong>.
            Nos techniciens se déplacent chez vous avec tout le matériel — aucun déplacement de votre part.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            📞 Devis gratuit sous 24h · 7j/7 · Intervention rapide · Produits certifiés Écolabel européen
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="mx-auto max-w-xl px-4 pb-16 text-center">
        <p className="text-lg font-bold">Prêt à retrouver un intérieur comme neuf ?</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Réservation en ligne en 2 minutes, confirmation immédiate.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <Button asChild size="xl" className="font-bold">
            <Link to="/reserver">
              <CalendarCheck className="size-5" /> Réserver maintenant
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={COMPANY.phoneHref}>
              <Phone className="size-4" /> {COMPANY.phone}
            </a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground flex items-center justify-center gap-1">
          <Info className="size-3.5" /> Déplacement gratuit · Paiement sur place
        </p>
      </div>

    </div>
  );
}
