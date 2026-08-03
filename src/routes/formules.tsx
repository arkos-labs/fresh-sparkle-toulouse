import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck, Phone, Star, ArrowRight, Armchair, Car,
  CheckCircle2, Info, Layers, BedDouble, MapPin, Zap, Shield, Leaf, ChevronDown, ChevronRight,
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

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CANAPE_ITEMS = [
  { id: "fauteuil", label: "Fauteuil", price: "49 €", desc: "Injection-extraction de l'assise et du dossier. Résultat visible en moins d'1h." },
  { id: "canape-2-3", label: "Canapé 2 / 3 places", price: "79 €", popular: true, desc: "Notre prestation la plus demandée. Assise, dossier et coussins amovibles traités en profondeur." },
  { id: "canape-4-5", label: "Canapé 4 / 5 places", price: "99 €", desc: "Grande surface traitée intégralement. Idéal même pour les canapés très encrassés." },
  { id: "canape-u", label: "Canapé U / Angle", price: "99 €", desc: "Tous les modules y compris la partie angle. Aucun recoin oublié." },
  { id: "pouf", label: "Pouf", price: "19 €", desc: "Tissu, velours, toutes matières. Idéal à combiner avec le nettoyage canapé." },
  { id: "chaise", label: "Chaise rembourrée", price: "15 € / pièce", desc: "Propre et désinfectée en quelques minutes. Tarif dégressif à partir de 4 chaises." },
];

const CANAPE_OPTIONS = [
  { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens et allergènes. Recommandé pour les personnes sensibles.", popular: true },
  { name: "Élimination des poils d'animaux", price: 15, desc: "Brossage mécanique spécifique avant l'injection-extraction.", popular: true },
  { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café).", popular: false },
  { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
];

const TAPIS_OPTIONS = [
  { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens et allergènes dans les fibres du tapis.", popular: true },
  { name: "Nettoyage recto-verso", price: 25, desc: "Nettoyage des deux faces du tapis pour un résultat total." },
  { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches anciennes (sang, vin, encre, café)." },
  { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
];

const MATELAS_OPTIONS = [
  { name: "Traitement anti-acariens et bactériens", price: 19, desc: "Élimine 99,9% des acariens. Indispensable pour les allergiques.", popular: true },
  { name: "Détachage intensif", price: 19, desc: "Traitement ciblé pour les tâches résistantes (transpiration, sang…)." },
  { name: "Traitement anti-odeur", price: 15, desc: "Neutralisation moléculaire des mauvaises odeurs incrustées.", popular: true },
];

const AUTO_PACKS = [
  {
    id: "bronze", emoji: "🥉", name: "Pack Bronze", price: "69 €", tagline: "Entretien régulier",
    badge: null as string | null, featured: false,
    included: ["Aspiration complète de l'habitacle", "Nettoyage des plastiques et tableau de bord", "Nettoyage des vitres intérieures", "Nettoyage des tapis de sol", "Satisfait ou on revient gratuitement"],
    options: [
      { name: "Traitement anti-acariens et bactériens", price: 19, popular: true },
      { name: "Élimination des poils d'animaux", price: 25, popular: false },
      { name: "Shampouinage des tapis de sol", price: 15, popular: false },
      { name: "Détachage intensif sur siège", price: 19, popular: false },
      { name: "Traitement anti-odeur (tabac, animaux)", price: 15, popular: true },
      { name: "Nettoyage du ciel de toit", price: 29, popular: false },
    ],
  },
  {
    id: "argent", emoji: "🥈", name: "Pack Argent", price: "99 €", tagline: "Nettoyage complet",
    badge: "⭐ Le + vendu" as string | null, featured: true,
    included: ["Tout le Pack Bronze inclus", "Injection-extraction des sièges tissu", "Vitres sans traces (intérieur + extérieur)", "Joints et recoins traités en détail", "Satisfait ou on revient gratuitement"],
    options: [
      { name: "Traitement anti-acariens et bactériens", price: 19, popular: true },
      { name: "Élimination des poils d'animaux", price: 25, popular: false },
      { name: "Shampouinage des tapis de sol", price: 15, popular: false },
      { name: "Détachage intensif — siège très taché", price: 19, popular: false },
      { name: "Traitement anti-odeur (tabac, animaux)", price: 15, popular: true },
      { name: "Nettoyage du ciel de toit", price: 29, popular: false },
    ],
  },
  {
    id: "or", emoji: "🥇", name: "Pack Or", price: "129 €", tagline: "État showroom",
    badge: "✨ Premium" as string | null, featured: false,
    included: ["Tout le Pack Argent inclus", "Shampouinage injection-extraction moquettes", "Nettoyage complet du coffre", "Nettoyage du ciel de toit inclus", "Idéal avant revente ou reprise"],
    options: [
      { name: "Traitement anti-acariens et bactériens", price: 19, popular: true },
      { name: "Élimination des poils d'animaux", price: 25, popular: false },
      { name: "Détachage intensif — tâche résistante", price: 19, popular: false },
      { name: "Traitement anti-odeur (tabac, animaux)", price: 15, popular: true },
    ],
  },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function MiniPriceCard({ title, price, items, badge, featured, icon }: {
  title: string; price: string; items: string[]; badge?: string; featured?: boolean; icon?: ReactNode;
}) {
  return (
    <div className={[
      "relative flex flex-col rounded-2xl p-5 shadow-sm",
      featured ? "bg-primary text-white ring-2 ring-primary scale-[1.02]" : "border border-border bg-white",
    ].join(" ")}>
      {badge && (
        <span className={[
          "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold shadow",
          featured ? "bg-white text-primary" : "bg-primary text-white",
        ].join(" ")}>{badge}</span>
      )}
      {icon && (
        <div className={`w-16 h-11 mb-3 ${featured ? "text-white/80" : "text-primary/70"}`}>{icon}</div>
      )}
      <h3 className={`text-sm font-bold ${featured ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`mt-1.5 text-3xl font-bold leading-none ${featured ? "text-white" : "text-primary"}`}>{price}</p>
      <ul className="mt-3 flex-1 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs">
            <CheckCircle2 className={`size-3.5 shrink-0 mt-0.5 ${featured ? "text-white/80" : "text-primary"}`} />
            <span className={featured ? "text-white/90" : "text-muted-foreground"}>{item}</span>
          </li>
        ))}
      </ul>
      <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer"
        className={[
          "mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-opacity hover:opacity-90",
          featured ? "bg-white text-primary" : "bg-primary text-white",
        ].join(" ")}>
        <CalendarCheck className="size-3.5" /> Je réserve
      </a>
    </div>
  );
}

function OptionsBlock({ options }: { options: { name: string; price: number; desc: string; popular?: boolean }[] }) {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-border bg-secondary/30 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
        Options disponibles <span className="normal-case font-normal opacity-60">(à ajouter lors de la réservation)</span>
      </p>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => (
          <div key={opt.name} className="flex items-start gap-3 rounded-xl border border-border bg-white p-3">
            <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold">{opt.name}</span>
                {opt.popular && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">Populaire</span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{opt.desc}</p>
            </div>
            <span className="shrink-0 font-bold text-xs text-primary whitespace-nowrap">+{opt.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CANAPÉ DETAIL ────────────────────────────────────────────────────────────

const CANAPE_SVGS: Record<string, ReactNode> = {
  "fauteuil": (
    <svg viewBox="0 0 80 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="14" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="60" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="10" y="32" width="60" height="22" rx="8" fill="currentColor"/>
      <rect x="10" y="8" width="60" height="26" rx="8" fill="currentColor" opacity="0.6"/>
      <rect x="3" y="29" width="13" height="18" rx="6" fill="currentColor" opacity="0.85"/>
      <rect x="64" y="29" width="13" height="18" rx="6" fill="currentColor" opacity="0.85"/>
    </svg>
  ),
  "canape-2-3": (
    <svg viewBox="0 0 100 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="12" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="82" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="8" y="32" width="38" height="22" rx="7" fill="currentColor"/>
      <rect x="54" y="32" width="38" height="22" rx="7" fill="currentColor"/>
      <rect x="8" y="8" width="84" height="26" rx="8" fill="currentColor" opacity="0.6"/>
      <rect x="2" y="29" width="11" height="18" rx="5" fill="currentColor" opacity="0.85"/>
      <rect x="87" y="29" width="11" height="18" rx="5" fill="currentColor" opacity="0.85"/>
    </svg>
  ),
  "canape-4-5": (
    <svg viewBox="0 0 140 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="14" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="120" y="52" width="6" height="9" rx="3" fill="currentColor" opacity="0.35"/>
      <rect x="10" y="32" width="26" height="22" rx="6" fill="currentColor"/>
      <rect x="40" y="32" width="26" height="22" rx="6" fill="currentColor"/>
      <rect x="70" y="32" width="26" height="22" rx="6" fill="currentColor"/>
      <rect x="100" y="32" width="26" height="22" rx="6" fill="currentColor"/>
      <rect x="10" y="8" width="116" height="26" rx="8" fill="currentColor" opacity="0.6"/>
      <rect x="3" y="29" width="10" height="18" rx="5" fill="currentColor" opacity="0.85"/>
      <rect x="127" y="29" width="10" height="18" rx="5" fill="currentColor" opacity="0.85"/>
    </svg>
  ),
  "canape-u": (
    <svg viewBox="0 0 90 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="3" y="6" width="60" height="22" rx="7" fill="currentColor" opacity="0.6"/>
      <rect x="3" y="26" width="60" height="20" rx="7" fill="currentColor"/>
      <rect x="58" y="6" width="26" height="52" rx="7" fill="currentColor" opacity="0.6"/>
      <rect x="58" y="26" width="26" height="30" rx="7" fill="currentColor"/>
      <rect x="1" y="23" width="10" height="17" rx="5" fill="currentColor" opacity="0.85"/>
      <rect x="3" y="57" width="56" height="10" rx="5" fill="currentColor" opacity="0.85"/>
      <rect x="8" y="65" width="5" height="10" rx="2" fill="currentColor" opacity="0.35"/>
      <rect x="44" y="65" width="5" height="10" rx="2" fill="currentColor" opacity="0.35"/>
    </svg>
  ),
  "pouf": (
    <svg viewBox="0 0 80 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="40" cy="44" rx="30" ry="6" fill="currentColor" opacity="0.2"/>
      <rect x="6" y="20" width="68" height="24" rx="12" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="10" width="60" height="26" rx="13" fill="currentColor"/>
      <rect x="18" y="8" width="44" height="14" rx="7" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  "chaise": (
    <svg viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="16" y="10" width="5" height="68" rx="2.5" fill="currentColor" opacity="0.3"/>
      <rect x="39" y="10" width="5" height="68" rx="2.5" fill="currentColor" opacity="0.3"/>
      <rect x="12" y="56" width="6" height="22" rx="3" fill="currentColor" opacity="0.5"/>
      <rect x="42" y="56" width="6" height="22" rx="3" fill="currentColor" opacity="0.5"/>
      <rect x="10" y="8" width="40" height="24" rx="7" fill="currentColor" opacity="0.65"/>
      <rect x="6" y="38" width="48" height="20" rx="8" fill="currentColor"/>
      <rect x="6" y="54" width="48" height="6" rx="3" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
};

function CanapeDetail() {
  const [selected, setSelected] = useState("canape-2-3");
  const item = CANAPE_ITEMS.find((i) => i.id === selected)!;

  return (
    <div>
      {/* Card grid selector */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 mb-5">
        {CANAPE_ITEMS.map((c) => {
          const isSelected = selected === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={[
                "relative flex flex-col items-center rounded-xl border-2 px-2 py-3 text-center transition-all",
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-white hover:border-primary/40 hover:shadow-sm",
              ].join(" ")}
            >
              {"popular" in c && c.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white shadow">
                  Le plus choisi
                </span>
              )}

              <div className={`w-14 h-10 mb-2 mt-0.5 ${isSelected ? "text-primary" : "text-primary/60"}`}>
                {CANAPE_SVGS[c.id]}
              </div>

              <p className="text-[8px] font-semibold uppercase tracking-widest text-muted-foreground leading-none">Dès</p>
              <p className={`text-base font-bold leading-tight mt-0.5 ${isSelected ? "text-primary" : "text-foreground"}`}>
                {c.price}
              </p>
              <p className="text-[10px] font-semibold text-muted-foreground leading-snug mt-1 text-center">
                {c.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detail panel for selected type */}
      <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-14 h-10 text-primary shrink-0">{CANAPE_SVGS[item.id]}</div>
              <h3 className="text-xl font-bold">{item.label}</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            <div className="mt-4 space-y-2">
              {["Injection-extraction professionnelle", "Tâches, auréoles et odeurs éliminées", "Résultat visible immédiatement", "Satisfait ou on revient gratuitement"].map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" /> {pt}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end shrink-0 gap-3">
            <div className="sm:text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">À partir de</p>
              <p className="text-5xl font-bold text-primary leading-none mt-0.5">{item.price}</p>
            </div>
            <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity">
              <CalendarCheck className="size-4" /> Je réserve
            </a>
            <p className="text-xs text-muted-foreground">Déplacement gratuit · Paiement sur place</p>
          </div>
        </div>
      </div>

      <OptionsBlock options={CANAPE_OPTIONS} />
    </div>
  );
}

// ─── TAPIS / AUTO / MATELAS SVGs ──────────────────────────────────────────────

const SVG_1_TAPIS = (
  <svg viewBox="0 0 90 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* fringe left */}
    {[12,20,28,36,44].map((y) => <rect key={y} x="4" y={y} width="6" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    {/* fringe right */}
    {[12,20,28,36,44].map((y) => <rect key={y} x="80" y={y} width="6" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    {/* rug body */}
    <rect x="10" y="6" width="70" height="46" rx="5" fill="currentColor"/>
    {/* inner border */}
    <rect x="16" y="12" width="58" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    {/* pattern lines */}
    <line x1="22" y1="12" x2="22" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <line x1="45" y1="12" x2="45" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <line x1="68" y1="12" x2="68" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <line x1="16" y1="29" x2="74" y2="29" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
  </svg>
);

const SVG_2_TAPIS = (
  <svg viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* back rug */}
    <rect x="14" y="4" width="66" height="40" rx="5" fill="currentColor" opacity="0.45"/>
    <rect x="20" y="10" width="54" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2"/>
    {/* front rug */}
    {[14,22,30,38].map((y) => <rect key={y} x="4" y={y} width="5" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    {[14,22,30,38].map((y) => <rect key={y} x="76" y={y} width="5" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    <rect x="9" y="16" width="68" height="40" rx="5" fill="currentColor"/>
    <rect x="15" y="22" width="56" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2"/>
    <line x1="15" y1="36" x2="71" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
  </svg>
);

const SVG_3_TAPIS = (
  <svg viewBox="0 0 90 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* rug 1 (back) */}
    <rect x="16" y="2" width="62" height="34" rx="4" fill="currentColor" opacity="0.3"/>
    {/* rug 2 (middle) */}
    <rect x="10" y="12" width="64" height="36" rx="4" fill="currentColor" opacity="0.5"/>
    <rect x="16" y="18" width="52" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2"/>
    {/* rug 3 (front) */}
    {[22,30,38,46].map((y) => <rect key={y} x="3" y={y} width="5" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    {[22,30,38,46].map((y) => <rect key={y} x="78" y={y} width="5" height="4" rx="2" fill="currentColor" opacity="0.4"/>)}
    <rect x="8" y="24" width="70" height="36" rx="5" fill="currentColor"/>
    <rect x="14" y="30" width="58" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2"/>
    <line x1="14" y1="42" x2="72" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
  </svg>
);

const SVG_AUTO = (
  <svg viewBox="0 0 110 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* car shadow */}
    <ellipse cx="55" cy="58" rx="44" ry="4" fill="currentColor" opacity="0.12"/>
    {/* car body lower */}
    <rect x="6" y="30" width="98" height="22" rx="6" fill="currentColor"/>
    {/* car roof */}
    <path d="M28 30 Q34 10 46 8 L72 8 Q84 10 86 30Z" fill="currentColor" opacity="0.7"/>
    {/* windshield */}
    <path d="M34 30 Q38 15 48 12 L64 12 Q72 15 74 30Z" fill="currentColor" opacity="0.25"/>
    {/* side window */}
    <rect x="76" y="13" width="10" height="17" rx="3" fill="currentColor" opacity="0.25"/>
    {/* door line */}
    <line x1="76" y1="10" x2="76" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* front details */}
    <rect x="6" y="33" width="8" height="5" rx="2" fill="currentColor" opacity="0.4"/>
    <rect x="96" y="33" width="8" height="5" rx="2" fill="currentColor" opacity="0.4"/>
    {/* wheel arches */}
    <ellipse cx="27" cy="52" rx="14" ry="10" fill="currentColor" opacity="0.8"/>
    <ellipse cx="27" cy="52" rx="8" ry="6" fill="currentColor" opacity="0.3"/>
    <ellipse cx="27" cy="52" rx="3" ry="3" fill="currentColor" opacity="0.6"/>
    <ellipse cx="83" cy="52" rx="14" ry="10" fill="currentColor" opacity="0.8"/>
    <ellipse cx="83" cy="52" rx="8" ry="6" fill="currentColor" opacity="0.3"/>
    <ellipse cx="83" cy="52" rx="3" ry="3" fill="currentColor" opacity="0.6"/>
  </svg>
);

const SVG_MATELAS_ENFANT = (
  <svg viewBox="0 0 70 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* base */}
    <rect x="6" y="44" width="58" height="10" rx="4" fill="currentColor" opacity="0.45"/>
    {/* mattress */}
    <rect x="6" y="20" width="58" height="26" rx="6" fill="currentColor"/>
    {/* tufting */}
    <line x1="25" y1="20" x2="25" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <line x1="45" y1="20" x2="45" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* pillow */}
    <rect x="10" y="10" width="50" height="14" rx="6" fill="currentColor" opacity="0.6"/>
    {/* pillow crease */}
    <line x1="35" y1="10" x2="35" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

const SVG_MATELAS_1PLACE = (
  <svg viewBox="0 0 82 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* base */}
    <rect x="4" y="44" width="74" height="10" rx="4" fill="currentColor" opacity="0.45"/>
    {/* mattress */}
    <rect x="4" y="20" width="74" height="26" rx="6" fill="currentColor"/>
    {/* tufting */}
    <line x1="28" y1="20" x2="28" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <line x1="54" y1="20" x2="54" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* pillow */}
    <rect x="10" y="10" width="62" height="14" rx="6" fill="currentColor" opacity="0.6"/>
    <line x1="41" y1="10" x2="41" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

const SVG_MATELAS_2PLACES = (
  <svg viewBox="0 0 110 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* base */}
    <rect x="4" y="44" width="102" height="10" rx="4" fill="currentColor" opacity="0.45"/>
    {/* mattress */}
    <rect x="4" y="20" width="102" height="26" rx="6" fill="currentColor"/>
    {/* tufting */}
    <line x1="55" y1="20" x2="55" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    <line x1="30" y1="20" x2="30" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <line x1="80" y1="20" x2="80" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    {/* 2 pillows */}
    <rect x="8" y="10" width="44" height="14" rx="6" fill="currentColor" opacity="0.6"/>
    <rect x="58" y="10" width="44" height="14" rx="6" fill="currentColor" opacity="0.6"/>
  </svg>
);

// ─── TAPIS DETAIL ─────────────────────────────────────────────────────────────

function TapisDetail() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <MiniPriceCard title="1 tapis" price="49 €" icon={SVG_1_TAPIS}
          items={["Fibres et couleurs ravivées", "Tâches et odeurs éliminées", "Résultat visible immédiatement", "Satisfait ou on revient"]} />
        <MiniPriceCard title="2 tapis" price="79 €" badge="💰 Meilleur rapport qualité/prix" featured icon={SVG_2_TAPIS}
          items={["Économisez 19 € vs 2 × 1 tapis", "Tâches et odeurs éliminées", "Résultat visible immédiatement", "Satisfait ou on revient"]} />
        <MiniPriceCard title="3 tapis" price="99 €" icon={SVG_3_TAPIS}
          items={["Toute la maison en 1 visite", "Tâches et odeurs éliminées", "Résultat visible immédiatement", "Satisfait ou on revient"]} />
      </div>
      <OptionsBlock options={TAPIS_OPTIONS} />
    </div>
  );
}

// ─── AUTO DETAIL ──────────────────────────────────────────────────────────────

function AutoDetail() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {AUTO_PACKS.map((pack) => (
          <div key={pack.id} className={[
            "relative flex flex-col rounded-2xl shadow-sm",
            pack.featured ? "bg-primary text-white ring-2 ring-primary scale-[1.02]" : "border border-border bg-white",
          ].join(" ")}>
            {pack.badge && (
              <span className={[
                "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold shadow",
                pack.featured ? "bg-white text-primary" : "bg-primary text-white",
              ].join(" ")}>{pack.badge}</span>
            )}
            <div className="flex flex-col flex-1 p-5">
              <div className={`w-20 h-12 mb-3 ${pack.featured ? "text-white/80" : "text-primary/70"}`}>{SVG_AUTO}</div>
              <h3 className={`text-base font-bold ${pack.featured ? "text-white" : "text-foreground"}`}>{pack.name}</h3>
              <p className={`text-xs mt-0.5 ${pack.featured ? "text-white/70" : "text-muted-foreground"}`}>{pack.tagline}</p>
              <p className={`mt-2.5 text-3xl font-bold leading-none ${pack.featured ? "text-white" : "text-primary"}`}>{pack.price}</p>

              <ul className="mt-4 flex-1 space-y-2">
                {pack.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className={`size-3.5 shrink-0 mt-0.5 ${pack.featured ? "text-white/80" : "text-primary"}`} />
                    <span className={pack.featured ? "text-white/90" : "text-muted-foreground"}>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setExpanded(expanded === pack.id ? null : pack.id)}
                className={[
                  "mt-4 flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                  pack.featured ? "bg-white/20 text-white hover:bg-white/30" : "border border-border bg-secondary/50 text-foreground hover:border-primary hover:text-primary",
                ].join(" ")}>
                {expanded === pack.id ? "Masquer les options" : "Voir les options"}
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${expanded === pack.id ? "rotate-180" : ""}`} />
              </button>

              {expanded === pack.id && (
                <div className="mt-2.5 space-y-1.5">
                  {pack.options.map((opt) => (
                    <div key={opt.name} className={[
                      "flex items-center justify-between rounded-lg px-2.5 py-2 text-xs",
                      pack.featured ? "bg-white/15" : "border border-border bg-secondary/40",
                    ].join(" ")}>
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <CheckCircle2 className={`size-3 shrink-0 ${pack.featured ? "text-white/70" : "text-primary"}`} />
                        <span className={`font-medium truncate ${pack.featured ? "text-white/90" : "text-foreground"}`}>{opt.name}</span>
                        {opt.popular && (
                          <span className={["rounded-full px-1 py-px text-[8px] font-bold uppercase shrink-0", pack.featured ? "bg-white/20 text-white" : "bg-primary/10 text-primary"].join(" ")}>Pop.</span>
                        )}
                      </div>
                      <span className={`font-bold ml-2 shrink-0 ${pack.featured ? "text-white" : "text-primary"}`}>+{opt.price} €</span>
                    </div>
                  ))}
                </div>
              )}

              <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer"
                className={["mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-opacity hover:opacity-90", pack.featured ? "bg-white text-primary" : "bg-primary text-white"].join(" ")}>
                <CalendarCheck className="size-3.5" /> Je réserve
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Siège isolé */}
      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-border bg-white p-4">
        <div className="flex-1">
          <p className="text-sm font-bold">Siège auto isolé</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Siège enfant, conducteur ou passager — tâches et odeurs disparues.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <p className="text-2xl font-bold text-primary">59 €</p>
          <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-white hover:opacity-90">
            <CalendarCheck className="size-3.5" /> Je réserve
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── MATELAS DETAIL ───────────────────────────────────────────────────────────

function MatelasDetail() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <MiniPriceCard title="Matelas enfant" price="39 €" icon={SVG_MATELAS_ENFANT}
          items={["Votre enfant dort dans un lit sain", "Anti-acariens inclus", "Tâches et odeurs éliminées, 2 côtés", "Satisfait ou on revient"]} />
        <MiniPriceCard title="Matelas 1 place" price="59 €" badge="🌿 Recommandé" featured icon={SVG_MATELAS_1PLACE}
          items={["Dormez dans un matelas comme neuf", "Anti-acariens inclus", "Tâches et odeurs éliminées, 2 côtés", "Satisfait ou on revient"]} />
        <MiniPriceCard title="Matelas 2 places" price="99 €" icon={SVG_MATELAS_2PLACES}
          items={["Chambre entièrement assainie", "Anti-acariens inclus", "Tâches et odeurs éliminées, 2 côtés", "Satisfait ou on revient"]} />
      </div>
      <OptionsBlock options={MATELAS_OPTIONS} />
    </div>
  );
}

// ─── CATEGORY GRID ────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "canape",
    icon: <Armchair className="size-7" />,
    title: "Nettoyage Canapé & Fauteuil",
    sub: "Injection-extraction · Séchage rapide",
    priceFrom: "15 €",
    bullets: ["Fauteuil, canapé 2/3, 4/5 places", "Canapé U/angle, pouf, chaise", "Options anti-acariens, anti-odeur"],
    recommended: false,
    content: <CanapeDetail />,
  },
  {
    id: "tapis",
    icon: <Layers className="size-7" />,
    title: "Shampouinage Tapis & Moquette",
    sub: "Fibres ravivées · Séchage dans la journée",
    priceFrom: "49 €",
    bullets: ["1 tapis, 2 tapis, 3 tapis", "Toutes tailles et matières", "Options anti-acariens, recto-verso"],
    recommended: false,
    content: <TapisDetail />,
  },
  {
    id: "auto",
    icon: <Car className="size-7" />,
    title: "Nettoyage Intérieur Auto",
    sub: "À domicile ou sur parking · Tous véhicules",
    priceFrom: "69 €",
    bullets: ["Pack Bronze, Argent, Or", "Sièges, plastiques, vitres, coffre", "Options poils, anti-odeur, ciel de toit"],
    recommended: false,
    content: <AutoDetail />,
  },
  {
    id: "matelas",
    icon: <BedDouble className="size-7" />,
    title: "Nettoyage Matelas",
    sub: "Anti-acariens · 2 côtés traités · Allergiques",
    priceFrom: "39 €",
    bullets: ["Matelas enfant, 1 place, 2 places", "Anti-acariens inclus d'office", "Recommandé pour les allergiques"],
    recommended: true,
    content: <MatelasDetail />,
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function FormulesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedCat = CATEGORIES.find((c) => c.id === selected);

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
          Nettoyage à domicile sur Toulouse et agglomération. Matériel professionnel, produits certifiés Écolabel, intervention 7j/7.
        </p>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}
          <span className="font-bold text-foreground ml-1">4,9 / 5</span>
          <span className="text-muted-foreground">· 91 avis Google vérifiés</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="font-bold">
            <Link to="/reserver"><CalendarCheck className="size-4" /> Réserver en ligne</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={COMPANY.phoneHref}><Phone className="size-4" /> {COMPANY.phone}</a>
          </Button>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="border-y border-border bg-white py-4 mb-10">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { icon: <Zap className="size-4 text-primary" />, text: "Disponible dès demain" },
            { icon: <Leaf className="size-4 text-primary" />, text: "Produits Écolabel certifiés" },
            { icon: <Shield className="size-4 text-primary" />, text: "Satisfait ou on revient" },
            { icon: <MapPin className="size-4 text-primary" />, text: "Intervention à domicile" },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-1.5">{t.icon} {t.text}</span>
          ))}
        </div>
      </div>

      {/* ── CATEGORY GRID ── */}
      <div className="mx-auto max-w-5xl px-4 mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">
          Choisissez une prestation pour voir toutes les formules
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selected === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelected(isSelected ? null : cat.id)}
                className={[
                  "relative flex flex-col rounded-2xl p-5 text-left transition-all shadow-sm hover:shadow-md",
                  isSelected
                    ? "bg-primary text-white ring-2 ring-primary shadow-lg"
                    : "border border-border bg-white hover:border-primary/40",
                ].join(" ")}
              >
                {cat.recommended && !isSelected && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white shadow">
                    ★ Recommandé
                  </span>
                )}
                {cat.recommended && isSelected && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white text-primary px-3 py-1 text-[10px] font-bold shadow">
                    ★ Recommandé
                  </span>
                )}

                <div className={[
                  "flex size-12 items-center justify-center rounded-xl mb-3 transition-colors",
                  isSelected ? "bg-white/20 text-white" : "bg-primary/10 text-primary",
                ].join(" ")}>
                  {cat.icon}
                </div>

                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isSelected ? "text-white/70" : "text-muted-foreground"}`}>
                  À partir de
                </p>
                <p className={`text-3xl font-bold leading-none mb-2 ${isSelected ? "text-white" : "text-primary"}`}>
                  {cat.priceFrom}
                </p>

                <h2 className={`text-sm font-bold leading-snug mb-2 ${isSelected ? "text-white" : "text-foreground"}`}>
                  {cat.title}
                </h2>

                <ul className="flex-1 space-y-1">
                  {cat.bullets.map((b) => (
                    <li key={b} className={`flex items-start gap-1.5 text-xs ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                      <CheckCircle2 className={`size-3 shrink-0 mt-0.5 ${isSelected ? "text-white/70" : "text-primary"}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={[
                  "mt-4 flex items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-bold transition-colors",
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-white",
                ].join(" ")}>
                  {isSelected ? (
                    <><ChevronDown className="size-3.5 rotate-180" /> Fermer</>
                  ) : (
                    <><ChevronRight className="size-3.5" /> Voir les formules</>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── DETAIL PANEL ── */}
      {selectedCat && (
        <div className="mx-auto max-w-5xl px-4 mb-10">
          <div className="rounded-2xl border border-primary/20 bg-white shadow-md overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-6 py-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {selectedCat.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold">{selectedCat.title} Toulouse</h2>
                <p className="text-xs text-muted-foreground">{selectedCat.sub}</p>
              </div>
            </div>
            <div className="p-6">
              {selectedCat.content}
            </div>
          </div>
        </div>
      )}

      {/* ── AUTRES SERVICES ── */}
      <section className="mx-auto max-w-5xl px-4 mb-12">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Sur devis</p>
          <h2 className="text-2xl font-bold tracking-tight">Autres prestations de nettoyage à Toulouse</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Nettoyage de toiture, façade, terrasse, vitrages, appartement, fin de bail, fin de chantier
            et logement insalubre (syndrome de Diogène). Devis gratuit sous 24h.
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
      <section className="mx-auto max-w-5xl px-4 mb-12">
        <div className="rounded-2xl bg-secondary/40 border border-border px-8 py-10">
          <div className="flex items-center gap-2 text-primary mb-3">
            <MapPin className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Zone d'intervention</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-3">Nettoyage à domicile Toulouse et agglomération</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Clean&Fresh intervient pour le nettoyage de canapé, matelas, tapis, moquette et intérieur auto à{" "}
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
        <p className="mt-1 text-sm text-muted-foreground">Réservation en ligne en 2 minutes, confirmation immédiate.</p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <Button asChild size="xl" className="font-bold">
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
