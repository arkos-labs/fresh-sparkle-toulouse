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

// ─── COMPOSANTS ──────────────────────────────────────────────────────────────

function Check({ text, highlight }: { text: string; highlight?: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${highlight ? "text-accent" : "text-primary"}`} />
      <span className={highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>{text}</span>
    </li>
  );
}

function PriceCard({
  title, price, items, badge, featured, bookingHref,
}: {
  title: string;
  price: string;
  items: { text: string; highlight?: boolean }[];
  badge?: string;
  featured?: boolean;
  bookingHref?: string;
}) {
  const href = bookingHref ?? COMPANY.booking;
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-card)] ${
      featured
        ? "bg-ink text-ink-foreground ring-2 ring-primary scale-[1.02]"
        : "border border-border bg-card"
    }`}>
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-gradient px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground shadow">
          {badge}
        </span>
      )}
      <h3 className={`text-base font-bold leading-snug ${featured ? "text-ink-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`mt-2 font-display text-4xl font-bold leading-none ${featured ? "text-ink-foreground" : "text-foreground"}`}>
        {price}
      </p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${featured ? "text-accent" : item.highlight ? "text-accent" : "text-primary"}`} />
            <span className={featured ? (item.highlight ? "font-semibold text-ink-foreground" : "text-ink-foreground/75") : (item.highlight ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90 ${
          featured
            ? "bg-accent-gradient text-accent-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <CalendarCheck className="size-4" /> Je réserve
      </a>
    </div>
  );
}

function SectionHeader({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
      <div>
        <div className="flex items-center gap-2 text-primary mb-1">{icon}<span className="text-xs font-bold uppercase tracking-widest">Tarifs</span></div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      </div>
      <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
        {[1,2,3,4,5].map(i => <Star key={i} className="size-3 fill-amber-400 text-amber-400" />)}
        <span className="ml-1 font-semibold text-foreground">4,9</span> · 91 avis
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
      {[
        { icon: <Zap className="size-4 text-accent" />, text: "Disponible dès demain" },
        { icon: <Leaf className="size-4 text-primary" />, text: "Produits Écolabel certifiés" },
        { icon: <Shield className="size-4 text-primary" />, text: "Satisfait ou on revient" },
        { icon: <MapPin className="size-4 text-primary" />, text: "Intervention à domicile Toulouse" },
      ].map((t) => (
        <span key={t.text} className="inline-flex items-center gap-1.5">
          {t.icon} {t.text}
        </span>
      ))}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function FormulesPage() {
  return (
    <div className="bg-[#f9f9f7] pb-24 lg:pb-0">

      {/* ── HERO ── */}
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center">
        <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
          Tarifs & Prestations — Toulouse
        </span>
        <h1 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Des tarifs clairs,<br />un résultat <span className="text-primary">impeccable</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Nettoyage à domicile sur Toulouse et agglomération. Matériel professionnel, produits certifiés Écolabel, intervention 7j/7.
        </p>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm">
          {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}
          <span className="font-bold text-foreground ml-1">4,9 / 5</span>
          <span className="text-muted-foreground">· 91 avis Google vérifiés</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
            <Link to="/reserver"><CalendarCheck className="size-4" /> Réserver en ligne</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={COMPANY.phoneHref}><Phone className="size-4" /> {COMPANY.phone}</a>
          </Button>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="border-y border-border bg-card py-4 mb-12">
        <TrustBar />
      </div>

      {/* ══════════════════════════════════════════════
          CANAPÉ & FAUTEUIL
      ══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <SectionHeader
          icon={<Armchair className="size-5" />}
          title="Nettoyage Canapé & Fauteuil Toulouse"
          sub="Injection-extraction professionnelle · Assise, dossier et coussins compris · Séchage rapide"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard title="Fauteuil" price="49 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Assise, dossier et coussin compris" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Canapé 2 / 3 places" price="79 €" badge="Le + populaire" featured items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Assise, dossier et coussin compris" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Canapé 4 / 5 places" price="99 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Assise, dossier et coussin compris" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Canapé en U / Angle" price="99 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Assise, dossier et coussin compris" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Pouf" price="19 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Toutes matières (tissu, velours…)" },
            { text: "Enlève tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Chaise rembourrée (/ pièce)" price="15 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Assise et dossier compris" },
            { text: "Enlève tâches et auréoles" },
            { text: "Tarif dégressif à partir de 4 chaises" },
          ]} />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Nos prestations de nettoyage de canapé à domicile sont disponibles dans toute la ville de Toulouse et son agglomération.
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
        <div className="grid gap-4 sm:grid-cols-3">
          <PriceCard title="1 tapis" price="49 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
            { text: "Fibres et couleurs ravivées" },
          ]} />
          <PriceCard title="2 tapis" price="79 €" badge="Économique" featured items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
            { text: "Fibres et couleurs ravivées" },
          ]} />
          <PriceCard title="3 tapis" price="99 €" items={[
            { text: "Nettoyage en profondeur", highlight: true },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
            { text: "Fibres et couleurs ravivées" },
          ]} />
        </div>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PriceCard title="🥉 Pack Bronze" price="69 €" items={[
            { text: "Aspiration complète habitacle + coffre", highlight: true },
            { text: "Nettoyage et rénovation des plastiques" },
            { text: "Remise en état visuel de l'habitacle" },
            { text: "Idéal entretien rapide quotidien" },
          ]} />
          <PriceCard title="🥈 Pack Argent" price="99 €" badge="Populaire" featured items={[
            { text: "Tout le Pack Bronze inclus", highlight: true },
            { text: "Injection/extraction des sièges" },
            { text: "Élimination des tâches incrustées" },
            { text: "Vitres intérieures & extérieures sans traces" },
            { text: "Rafraîchissement complet de l'habitacle" },
          ]} />
          <PriceCard title="🥇 Pack Or" price="129 €" badge="Premium" items={[
            { text: "Tout le Pack Argent inclus", highlight: true },
            { text: "Injection/extraction moquette + coffre" },
            { text: "Injection/extraction des tapis" },
            { text: "Nettoyage contours et bas de porte" },
            { text: "Finition haut de gamme · Idéal revente" },
          ]} />
          <PriceCard title="Rénovation siège auto" price="59 €" items={[
            { text: "Siège isolé traité en profondeur", highlight: true },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Disparition des mauvaises odeurs" },
            { text: "Retrouve son état neuf" },
          ]} />
        </div>
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
        <div className="grid gap-4 sm:grid-cols-3">
          <PriceCard title="Matelas enfant" price="39 €" items={[
            { text: "Nettoyage en profondeur 2 côtés", highlight: true },
            { text: "Traitement anti-acariens inclus" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Matelas 1 place" price="59 €" badge="Recommandé" featured items={[
            { text: "Nettoyage en profondeur 2 côtés", highlight: true },
            { text: "Traitement anti-acariens inclus" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
          <PriceCard title="Matelas 2 places" price="99 €" items={[
            { text: "Nettoyage en profondeur 2 côtés", highlight: true },
            { text: "Traitement anti-acariens inclus" },
            { text: "Enlève toutes les tâches et auréoles" },
            { text: "Neutralise les mauvaises odeurs" },
          ]} />
        </div>
      </section>

      {/* ── AUTRES SERVICES ── */}
      <section className="mx-auto max-w-6xl px-4 mb-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Sur devis</p>
          <h2 className="text-2xl font-bold tracking-tight">Autres prestations de nettoyage à Toulouse</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Nettoyage de toiture, façade, terrasse, vitrages, appartement, fin de bail, fin de chantier et logement insalubre (syndrome de Diogène). Devis gratuit sous 24h.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/contactez-nous">Demander un devis gratuit <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild>
              <a href={COMPANY.phoneHref}><Phone className="size-4" /> {COMPANY.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SEO GÉO ── */}
      <section className="mx-auto max-w-6xl px-4 mb-12">
        <div className="rounded-2xl bg-secondary/60 border border-border px-8 py-10">
          <div className="flex items-center gap-2 text-primary mb-3">
            <MapPin className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Zone d'intervention</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Nettoyage à domicile Toulouse et agglomération
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Clean&Fresh intervient pour le nettoyage de canapé, matelas, tapis, moquette et intérieur auto
            à <strong className="text-foreground">Toulouse</strong>, <strong className="text-foreground">Blagnac</strong>,{" "}
            <strong className="text-foreground">Colomiers</strong>, <strong className="text-foreground">Tournefeuille</strong>,{" "}
            <strong className="text-foreground">Balma</strong>, <strong className="text-foreground">Ramonville-Saint-Agne</strong>,{" "}
            <strong className="text-foreground">Cugnaux</strong>, <strong className="text-foreground">L'Union</strong>,{" "}
            <strong className="text-foreground">Muret</strong>, <strong className="text-foreground">Saint-Orens</strong> et dans toute la{" "}
            <strong className="text-foreground">Haute-Garonne (31)</strong>.
            Nos techniciens se déplacent chez vous avec tout le matériel nécessaire — aucun déplacement de votre part.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            📞 Devis gratuit sous 24h · 7j/7 · Intervention rapide · Produits certifiés Écolabel européen
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="mx-auto max-w-xl px-4 pb-12 text-center">
        <p className="text-lg font-bold">Prêt à retrouver un intérieur comme neuf ?</p>
        <p className="mt-1 text-sm text-muted-foreground">Réservation en ligne en 2 minutes, confirmation immédiate.</p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <Button asChild size="xl" className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
            <Link to="/reserver"><CalendarCheck className="size-5" /> Réserver maintenant</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={COMPANY.phoneHref}><Phone className="size-4" /> {COMPANY.phone}</a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground flex items-center justify-center gap-1">
          <Info className="size-3.5" /> Déplacement gratuit · Paiement sur place
        </p>
      </div>

    </div>
  );
}
