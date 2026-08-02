# Prompt — Redesign des pages de prestation Clean&Fresh

## Contexte projet
Site Clean&Fresh Toulouse : entreprise de nettoyage à domicile (canapé, matelas, tapis, auto, vitres, terrasse, toiture, façade, appartement, fin de chantier, nettoyage extrême).

**Stack :**
- React + Vite + TanStack Router (file-based routing dans `src/routes/`)
- Tailwind v4 avec `@theme inline` et tokens oklch
- shadcn/ui (Button, Input, Textarea, Label)
- Tokens design : `--primary` teal `oklch(0.52 0.20 192)`, `--accent` amber `oklch(0.78 0.18 62)`
- Classes utilitaires custom : `bg-primary-gradient`, `bg-accent-gradient`, `bg-hero-gradient`
- URL booking Dispoo : `https://app.dispoo.fr/website/385-clean-fresh`
- Images dispo dans `src/assets/` : `hero-nettoyage.jpg`, `avant-canape.jpg`, `apres-canape.jpg`, `avant-auto.jpg`, `apres-auto.jpg`

---

## Fichier à modifier
`src/components/site/ServicePage.tsx`

Ce composant est partagé par toutes les pages de prestation. Il reçoit un objet `service` de type `Service` (défini dans `src/data/site.ts`).

### Données disponibles par service :
```ts
type Service = {
  slug: string;
  h1: string;              // titre principal ex: "Nettoyage canapé à Toulouse"
  short: string;           // nom court ex: "Canapé & fauteuil"
  subtitle: string;        // accroche courte
  group: "textile" | "batiment";
  booking?: boolean;       // true = a un bouton Dispoo, false = devis seulement
  intro: string[];         // 2 paragraphes d'intro
  treated: string[];       // liste "ce que nous traitons"
  problems: string[];      // liste "problèmes résolus"
  prices?: { label: string; price: string }[];  // tarifs (pas dispo pour tous)
  priceNote?: string;      // note sous les tarifs
  soils?: string[];        // types de salissures traitées
  method: string[];        // 4 étapes de la méthode
};
```

### Formules et options réelles (récupérées sur Dispoo) :
Les pages avec `booking: true` ont des formules réservables en ligne avec des options payantes.

**Canapé** (4 options, toutes les formules) :
- Traitement anti-acariens et bactériens : +19€ / +20min ★ Populaire
- Élimination des poils d'animaux : +15€ / +30min ★ Populaire
- Détachage intensif : +19€ / +30min
- Traitement anti-odeur : +15€ / +10min ★ Populaire

**Tapis** (4 options) :
- Traitement anti-acariens et bactériens : +19€ / +20min ★ Populaire
- Nettoyage recto-verso : +25€ / +30min
- Détachage intensif : +19€ / +30min
- Traitement anti-odeur : +15€ / +10min ★ Populaire

**Matelas** (3 options) :
- Traitement anti-acariens et bactériens : +19€ / +20min ★ Populaire
- Détachage intensif : +19€ / +20min
- Traitement anti-odeur : +15€ / +10min ★ Populaire

**Auto — Pack Bronze** 69€ (7 options) :
- Anti-acariens +19€, Poils animaux +25€, Vitres +9€, Tapis sol +15€, Ciel de toit +29€, Sièges +45€, Anti-odeur +15€

**Auto — Pack Argent** 99€ (6 options) :
- Anti-acariens +19€, Détachage intensif +19€, Poils animaux +25€, Tapis sol +15€, Ciel de toit +29€, Anti-odeur +15€

**Auto — Pack Or** 129€ (5 options) :
- Anti-acariens +19€, Détachage intensif +19€, Poils animaux +25€, Ciel de toit +29€, Anti-odeur +15€

**Auto — Rénovation siège** 59€ (4 options) :
- Anti-acariens +19€, Détachage intensif +19€, Poils animaux +25€, Anti-odeur +15€

---

## Ce qu'il faut faire

### Objectif principal
Redesigner la page de prestation pour qu'elle soit **conversion-first** : l'utilisateur arrive, comprend vite, voit les prix, choisit une formule et réserve sans friction.

### Structure souhaitée de la page

**1. HERO pleine largeur** (fond gradient sombre ou image avec overlay)
- H1 = `service.h1`
- Sous-titre = `service.subtitle`
- Badge localisation "Toulouse & Haute-Garonne"
- CTA principal amber "Réserver en ligne" (si `booking: true`) ou "Devis gratuit 24h"
- 3 trust badges : Intervention à domicile · Produits Écolabel · Devis sous 24h

**2. FORMULES & OPTIONS** (section clé — remplace les anciens price cards)
Si le service a des formules Dispoo (`booking: true`), afficher des cartes par formule avec :
- Nom + description
- Prix en grand
- Durée
- Liste des options dépliables (accordéon) avec prix en plus et badge "Populaire"
- Bouton amber "Réserver" qui ouvre Dispoo
- Si pas de booking : carte "Sur devis" avec bouton vers /contactez-nous

**3. DÉTAIL DU SERVICE**
- Textes `service.intro` en colonne gauche
- 2 mini-cards : "Ce que nous traitons" (`service.treated`) + "Problèmes résolus" (`service.problems`)

**4. AVANT / APRÈS**
- 2 colonnes : avant à gauche (image terne), après à droite (image propre)
- Conserver les images existantes dans `src/assets/`

**5. MÉTHODE**
- 4 étapes numérotées (`service.method`)
- Style cards avec numéro en grand

**6. AVIS CLIENTS**
- `<ReviewsCarousel />` — déjà importé, ne pas supprimer

**7. ZONE D'INTERVENTION + SALISSURES**
- Communes en pills (`COMMUNES`)
- Salissures traitées en grid (`service.soils`)

**8. AUTRES SERVICES**
- 6 cards vers les autres slugs

### Design guidelines
- Cartes : `rounded-2xl border border-border bg-card shadow-sm`
- Bouton principal : `bg-accent-gradient text-accent-foreground font-bold`
- Prix : `text-3xl font-bold text-primary`
- Options populaires : badge `bg-accent/15 text-accent text-[10px] uppercase`
- Fond alternés : `bg-secondary/60` pour les sections grises
- Ne PAS utiliser d'emojis dans le code (sauf si déjà présent)
- `line-clamp-3` pour les textes longs dans les cartes
- Transitions : `hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]`

### Ce qu'il ne faut PAS supprimer
- L'import de `ReviewsCarousel`
- La logique `service.booking ? ... : ...`
- Les meta/head tags (gérés dans chaque route, pas dans ce composant)
- L'export `ServicePage`

---

## Exemple d'utilisation des options en accordéon

```tsx
const [openOptions, setOpenOptions] = useState<string | null>(null);

// Dans la formule card :
<button onClick={() => setOpenOptions(openOptions === f.name ? null : f.name)}>
  {f.options.length} options <ChevronDown className={openOptions === f.name ? "rotate-180" : ""} />
</button>
{openOptions === f.name && (
  <div>
    {f.options.map(opt => (
      <div key={opt.name} className="flex justify-between py-2 text-sm border-t">
        <span>{opt.name} {opt.popular && <span className="badge">Populaire</span>}</span>
        <span className="font-bold text-primary">+{opt.extra} €</span>
      </div>
    ))}
  </div>
)}
```

---

## Contraintes
- Ne pas aller sur internet sans demande explicite
- Ne pas push sur GitHub sans demande explicite
- Un seul composant `ServicePage.tsx` pour toutes les prestations
- Les données des options peuvent être importées depuis `src/data/site.ts` si on les ajoute là-bas, ou définies directement dans `ServicePage.tsx`
