# Audit SEO — cleanfresh-toulouse.fr
*Audit réalisé le 03/08/2026 — site en preview sur Lovable*

---

## Résumé exécutif

Le nouveau site **cleanfresh-toulouse.fr** part sur des bases SEO nettement supérieures à l'ancien site WordPress (cleanetfresh.fr) : meta tags complets, balises OG/Twitter, URL canoniques absolues, FAQ schema JSON-LD sur les 13 services, 40 communes en zone d'intervention. C'est le point fort majeur.

**Top 3 priorités à traiter avant le lancement :**

1. **Crédit d'impôt 50% immédiat** — Le concurrent n°1 (In The Clean 31) en fait son argument central. Si Clean&Fresh est éligible aux services à la personne (SAP), ne pas l'afficher est une perte de conversion directe sur chaque page.
2. **Zéro indexation Google** — Le domaine `cleanfresh-toulouse.fr` n'a aucune page indexée. Il faut un sitemap XML, un robots.txt et une soumission immédiate à Google Search Console à l'ouverture.
3. **Zéro backlinks / zéro notoriété de domaine** — Nouveau domaine face à des concurrents établis depuis 3–7 ans. Une stratégie de netlinking locale est indispensable dans les 3 premiers mois.

**Verdict global :** Fondations techniques solides, contenu de qualité — mais le site doit encore être mis en ligne, soumis, et accompagné d'une stratégie de notoriété pour espérer apparaître sur des requêtes très concurrentielles.

---

## 1. Opportunités de mots-clés

| Mot-clé | Difficulté | Opportunité | Position actuelle | Intention | Format recommandé |
|---|---|---|---|---|---|
| nettoyage canapé toulouse | Haute | 🟡 Moyenne | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage matelas toulouse | Moyenne | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage fin de bail toulouse | Moyenne | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage état des lieux toulouse | Moyenne | 🟢 Haute | Non indexé | Transactionnelle | Page de service (même URL) |
| nettoyage auto domicile toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage tapis toulouse | Moyenne | 🟡 Moyenne | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage appartement toulouse | Haute | 🟡 Moyenne | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage fin de chantier toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage vitres toulouse | Moyenne | 🟡 Moyenne | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage terrasse toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| démoussage toiture toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage facade toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage diogène toulouse | Très faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| nettoyage extrême toulouse | Très faible | 🟢 Haute | Non indexé | Transactionnelle | Page de service ✅ |
| crédit impôt nettoyage canapé toulouse | Faible | 🟢 Haute | Non indexé | Commerciale | Section dédiée / FAQ |
| nettoyage matelas anti-acariens toulouse | Faible | 🟢 Haute | Non indexé | Informelle+Transaction | Page service + article |
| nettoyage canapé blagnac | Très faible | 🟢 Haute | Non indexé | Transactionnelle | Long-tail dans texte |
| nettoyage canapé colomiers | Très faible | 🟢 Haute | Non indexé | Transactionnelle | Long-tail dans texte |
| enlever tache urine canapé toulouse | Très faible | 🟢 Haute | Non indexé | Informelle | FAQ ✅ (déjà ajoutée) |
| entreprise nettoyage toulouse | Haute | 🔴 Faible | Non indexé | Commerciale | Homepage |
| société nettoyage toulouse | Haute | 🔴 Faible | Non indexé | Commerciale | Homepage |
| nettoyage moquette toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page tapis (même URL) |
| remise en état logement toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Page fin de bail |
| nettoyage après déménagement toulouse | Faible | 🟢 Haute | Non indexé | Transactionnelle | Alias vers fin de bail |
| acariens matelas traitement toulouse | Très faible | 🟢 Haute | Non indexé | Informelle | Article blog |

**💡 Opportunité manquée majeure :** le mot-clé `crédit d'impôt nettoyage canapé toulouse` est activement capturé par In The Clean 31 — Clean&Fresh n'y répond pas du tout.

---

## 2. Problèmes on-page

| Page | Problème | Sévérité | Correction recommandée |
|---|---|---|---|
| Toutes les pages | Zéro indexation Google (nouveau domaine) | 🔴 Critique | Déployer → Google Search Console → soumettre sitemap |
| Toutes les pages | Pas de sitemap XML | 🔴 Critique | Générer `/sitemap.xml` avec toutes les 15+ URLs |
| Toutes les pages | Pas de robots.txt | 🔴 Critique | Créer `robots.txt` avec `Sitemap:` pointant vers le sitemap |
| Toutes les pages | Pas de schéma LocalBusiness | 🔴 Critique | Ajouter JSON-LD `LocalBusiness` sur `__root.tsx` |
| Page /formules | URL inconnue / possible 404 | 🔴 Critique | Vérifier que la route existe ; sinon créer ou rediriger |
| Homepage | H1 trop générique : "Entreprise de nettoyage à Toulouse" | 🟠 Haute | Enrichir avec slogan + services phares dans le H1 ou sous-titre immédiat |
| Page fin de bail | N'apparaît pas dans le nav principal | 🟠 Haute | Ajouter au menu "Bâtiment" (forte valeur transactionnelle) |
| Page diogène | N'apparaît pas dans le nav principal | 🟡 Moyenne | Ajouter au menu ou au footer |
| Toutes les pages de service | Pas de breadcrumb visible ni de schema Breadcrumb | 🟡 Moyenne | Ajouter composant breadcrumb + JSON-LD BreadcrumbList |
| Page /reserver | Meta title et description non vérifiés | 🟡 Moyenne | S'assurer que head() est défini sur la route |
| Images | Fichiers `avant-canape.jpg`, `apres-canape.jpg` utilisés sur TOUS les services | 🟡 Moyenne | Créer des photos spécifiques par service (ou au moins par catégorie) |
| Homepage | Pas de balise `og:type: website` visible | 🟡 Moyenne | Vérifier la présence dans `__root.tsx` |
| Toutes les pages | Police et ressources chargées depuis CDN externe ? | 🟡 Moyenne | Vérifier Core Web Vitals LCP sur version déployée |
| Toutes les pages | Pas de lien vers Google My Business / avis Google | 🟡 Moyenne | Ajouter CTA "Laissez un avis Google" dans footer ou section avis |

---

## 3. Gaps de contenu

### 🔴 Priorité haute

**Crédit d'impôt 50%**
- Pourquoi : In The Clean 31 et CrasseBusters l'affichent en premier argument. Si Clean&Fresh est agréé SAP ou Unipros, c'est le levier de conversion n°1 pour les particuliers (coût réel divisé par deux).
- Format : section dédiée sur chaque page textile + badge sur la homepage + FAQ "Le nettoyage est-il éligible au crédit d'impôt ?"
- Effort : 2h si agréé, démarche administrative sinon

**Page "nettoyage après déménagement Toulouse"**
- Pourquoi : forte intention transactionnelle, distinct de "fin de bail" dans les recherches
- Format : page dédiée ou alias SEO pointant vers la page fin de bail avec H1 spécifique
- Effort : 1h (page légère)

**Page "nettoyage moquette Toulouse"**
- Pourquoi : requête distincte de "tapis" avec son propre volume
- Format : section ou page courte avec redirect vers nettoyage-tapis (canonical)
- Effort : 30 min

### 🟡 Priorité moyenne

**Premier article de blog : "Comment nettoyer un canapé en tissu à domicile ?"**
- Pourquoi : requête informelle très cherchée, crée de l'autorité de domaine, attire des backlinks naturels
- Format : article 1 200 mots avec étapes, FAQ intégrée, CTA vers réservation
- Effort : demi-journée

**Page / article "Acariens : dangers et traitement professionnel à Toulouse"**
- Pourquoi : capte les recherches santé/allergie en haut de funnel, convertit vers nettoyage matelas
- Format : article de blog 800 mots
- Effort : 2h

**Page "Nettoyage siège auto Toulouse"**
- Pourquoi : requête distincte du "nettoyage auto" générique, forte intention
- Format : section dédiée dans la page auto ou page séparée
- Effort : 1h

### 🟢 Priorité basse (long terme)

**Guide "État des lieux de sortie : checklist nettoyage Toulouse"**
- Pourquoi : contenu linkable, créé des backlinks naturels depuis sites immobiliers
- Format : guide PDF téléchargeable + page web
- Effort : journée

**Pages villes (Colomiers, Blagnac, Tournefeuille…)**
- Pourquoi : long-tail géo-local avec très peu de concurrence
- Format : pages courtes 300 mots avec lien vers toutes les prestations disponibles
- Effort : 1h par page, 20+ pages possibles

---

## 4. Checklist technique SEO

| Vérification | Statut | Détails |
|---|---|---|
| HTTPS | ✅ Pass | Lovable déploie en HTTPS par défaut |
| Balises meta title | ✅ Pass | Optimisées sur les 13 services + homepage |
| Balises meta description | ✅ Pass | ≤160 caractères, avec CTA |
| og:title / og:description | ✅ Pass | Présents sur toutes les pages de service |
| og:image (absolu 1200×630) | ✅ Pass | `photo-01.jpg` global + override par page possible |
| og:url canonique (absolu) | ✅ Pass | `${SITE_URL}${service.slug}` |
| Twitter Card tags | ✅ Pass | Présents sur les 13 services |
| FAQ schema JSON-LD | ✅ Pass | Sur les 13 pages de service, 5 Q/R chacune |
| URL lisibles (slug FR) | ✅ Pass | `/nettoyage-canape-toulouse` etc. |
| Balise canonique | ✅ Pass | Absolues sur tous les services |
| Images alt text | ✅ Pass | `${service.h1} — ${img.label}` |
| Lazy loading images | ✅ Pass | `loading="lazy"` présent |
| Responsive / mobile | ✅ Pass | Tailwind + grid responsive |
| Sitemap XML | ❌ Critique | Absent — à créer avant lancement |
| robots.txt | ❌ Critique | Absent — à créer avant lancement |
| LocalBusiness schema | ❌ Critique | Absent — à ajouter dans `__root.tsx` |
| Google Search Console | ❌ Critique | Pas soumis (nouveau domaine) |
| Breadcrumb schema | ❌ Manquant | Pas de composant ni JSON-LD |
| Google My Business lié | ❌ Manquant | Non lié / non vérifié |
| Indexation Google | ❌ Zéro pages | Nouveau domaine, 0 pages indexées |
| Core Web Vitals | ⚠️ À vérifier | Site Vite + Cloudflare (bonne base) — mesurer après déploiement |
| Page 404 personnalisée | ⚠️ Inconnu | Vérifier la route `*` dans TanStack Router |
| Redirects www → non-www | ⚠️ À configurer | À configurer dans Cloudflare |

---

## 5. Comparaison concurrents

| Dimension | cleanfresh-toulouse.fr | In The Clean 31 | Nova Clean / Toulouse31 | nettoyeurtoulouse.fr |
|---|---|---|---|---|
| Pages de service | 13 ✅ | ~8 | ~10 | ~8 |
| FAQ schema | ✅ Sur 13 pages | ❌ | ❌ | ❌ |
| Meta tags complets | ✅ | ✅ partiel | ✅ partiel | ✅ partiel |
| Crédit d'impôt SAP | ❌ Absent | ✅ Argument central | ❌ | ❌ |
| Avis Google intégrés | ✅ (carousel) | ✅ | ✅ | ✅ |
| Blog / content | ❌ Absent | ❌ | ❌ | ❌ |
| Pages villes geo-local | ❌ | ❌ | ✅ quelques-unes | ❌ |
| Ancienneté domaine | ⚠️ Nouveau | ~3 ans | ~5 ans | ~4 ans |
| Backlinks estimés | ~0 | Modéré | Modéré | Faible |
| Vitesse de page | ⚠️ À mesurer | Moyenne | Lente (WordPress) | Moyenne |
| Réservation en ligne | ✅ (Dispoo) | ✅ | ❌ | ❌ |

**Avantages concurrentiels de Clean&Fresh :**
- FAQ schema sur 13 pages — aucun concurrent ne l'a (**potentiel "People Also Ask" Google**)
- Réservation en ligne intégrée (In The Clean 31 aussi, les autres non)
- Architecture de site moderne et rapide (React + Cloudflare vs WordPress)
- 13 services vs 8–10 chez les concurrents

**Avantages concurrents à combler :**
- Crédit d'impôt 50% (In The Clean 31)
- Ancienneté de domaine (tous les concurrents)
- Backlinks (tous les concurrents)

---

## 6. Plan d'action prioritaire

### ⚡ Quick wins — À faire cette semaine

| Action | Impact | Effort | Dépendances |
|---|---|---|---|
| Créer `sitemap.xml` avec les 15 URLs | 🔴 Critique | 30 min | Site déployé |
| Créer `robots.txt` avec Sitemap | 🔴 Critique | 10 min | Sitemap |
| Soumettre à Google Search Console | 🔴 Critique | 30 min | Site live sur cleanfresh-toulouse.fr |
| Ajouter LocalBusiness JSON-LD dans `__root.tsx` | 🔴 Critique | 1h | — |
| Vérifier / créer la route `/formules` | 🔴 Critique | 30 min | — |
| Ajouter "fin de bail" et "Diogène" dans le menu nav | 🟠 Haute | 30 min | — |
| Rédiger 5 premiers avis Google / lien GMB | 🟠 Haute | 30 min | Compte GMB |
| Configurer redirect www → non-www sur Cloudflare | 🟠 Haute | 15 min | DNS Cloudflare |

### 📈 Investissements stratégiques — Ce trimestre

| Action | Impact | Effort | Notes |
|---|---|---|---|
| Vérifier éligibilité SAP + afficher crédit d'impôt 50% | 🔴 Haute | 1–2 semaines | Démarche NOVA (agrément SAP). Levier conversion majeur. |
| Créer `sitemap.xml` dynamique via la route Vite | 🟠 Haute | Demi-journée | Permet indexation automatique des nouvelles pages |
| Ajouter composant Breadcrumb + schema JSON-LD | 🟡 Moyenne | 2h | Améliore SERP appearance |
| Écrire premier article blog (nettoyage canapé guide) | 🟠 Haute | Demi-journée | Base du content marketing, attire backlinks |
| Créer page "nettoyage après déménagement toulouse" | 🟠 Haute | 1h | Fork de la page fin de bail avec H1 distinct |
| Inscrire le site sur 5 annuaires locaux (Pages Jaunes, Yelp, Houzz, Starofservice, Allovoisins) | 🟡 Moyenne | 2h | Backlinks locaux + citations NAP |
| Demander 10 avis Google à des clients existants | 🟠 Haute | 1 semaine | Signaux de confiance E-E-A-T |
| Mesurer Core Web Vitals post-déploiement (PageSpeed Insights) | 🟡 Moyenne | 30 min | À faire dès le site live |

---

## Annexe — LocalBusiness JSON-LD à ajouter dans `__root.tsx`

```tsx
// Dans head() de __root.tsx, ajouter un script JSON-LD global :
{
  tag: "script",
  attrs: { type: "application/ld+json" },
  children: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cleanfresh-toulouse.fr/#business",
    "name": "Clean&Fresh",
    "description": "Entreprise de nettoyage professionnel à Toulouse : canapé, matelas, tapis, auto, façade, toiture, fin de bail.",
    "url": "https://cleanfresh-toulouse.fr",
    "telephone": "+33767127500",
    "email": "nettoyagecleanfresh@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toulouse",
      "addressRegion": "Haute-Garonne",
      "postalCode": "31000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6047,
      "longitude": 1.4442
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6047,
        "longitude": 1.4442
      },
      "geoRadius": "40000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  })
}
```

---

*Audit réalisé sur la base du code source du site et de la recherche web concurrentielle.*
*Prochaine révision recommandée : 3 mois après la mise en ligne.*
