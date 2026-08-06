# Audit SEO — Clean&Fresh · cleanetfresh.fr
**Date :** 06 août 2026 · **Périmètre :** audit complet (on-page, technique, mots-clés, contenu, concurrents)

---

## Résumé exécutif

Clean&Fresh dispose d'une base solide : 24 pages indexées avec des balises méta propres, un sitemap structuré, un schema LocalBusiness + FAQPage sur chaque service, et une fiche Google Business à 4,9 étoiles (102 avis) qui génère déjà de la confiance. Le site est découvrable sur Google (cleanetfresh.fr apparaît dans les résultats pour plusieurs requêtes de nettoyage à Toulouse).

**Trois priorités pour passer devant intheclean31.fr :**
1. Créer une page dédiée au crédit d'impôt (avantage 50 % — angle majeur que tous les concurrents top utilisent, absent de votre site)
2. Lancer un blog avec 4 à 6 articles de fond (guides pratiques, questions fréquentes longue traîne)
3. Créer des pages ville pour les 35 communes servies sans page dédiée

**Évaluation globale :** Fondations solides — nécessite des investissements contenu pour grimper en tête.

---

## 1. Opportunités mots-clés

| Mot-clé | Difficulté est. | Opportunité | Classement actuel | Intention | Format recommandé |
|---|---|---|---|---|---|
| nettoyage tapis Toulouse | Haute | 🔴 Haute | Non top 3 | Commercial | Page service (existante — renforcer) |
| nettoyage canapé Toulouse | Haute | 🔴 Haute | Non top 3 | Commercial | Page service (existante — renforcer) |
| nettoyage matelas Toulouse | Haute | 🔴 Haute | Non top 3 | Commercial | Page service (existante — renforcer) |
| entreprise de nettoyage Toulouse | Haute | 🔴 Haute | Non top 5 | Commercial | Homepage + pillar page |
| nettoyage auto Toulouse | Moyenne | 🔴 Haute | Non classé top | Commercial | Page service (existante — renforcer) |
| crédit d'impôt nettoyage Toulouse | Faible | 🔴 Haute | **Non classé** | Commercial | **Page dédiée à créer** |
| nettoyage canapé domicile Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Page service (renforcer) |
| prix nettoyage tapis Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Guide prix / blog |
| shampouinage canapé Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Page service |
| nettoyage matelas acariens Toulouse | Faible | 🟠 Moyenne | Non classé | Informatif | Blog / FAQ |
| nettoyage fin de chantier Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Page service (existante) |
| nettoyage fin de bail Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Page service (existante) |
| nettoyage moquette bureau Toulouse | Faible | 🟠 Moyenne | Non classé | Commercial | Page service (renforcer tapis) |
| nettoyage canapé Blagnac | Très faible | 🟡 Locale | Non classé | Commercial | Page ville à créer |
| nettoyage tapis Colomiers | Très faible | 🟡 Locale | Non classé | Commercial | Page ville à créer |
| nettoyage canapé Tournefeuille | Très faible | 🟡 Locale | Non classé | Commercial | Page ville à créer |
| nettoyer canapé tissu tache Toulouse | Très faible | 🟡 Longue traîne | Non classé | Informatif | Article blog |
| comment enlever odeur pipi chat tapis | Très faible | 🟡 Longue traîne | Non classé | Informatif | Article blog |
| nettoyage toiture démoussage Toulouse | Faible | 🟡 Moyenne | Non classé | Commercial | Page service (existante) |
| nettoyage façade ravalement Toulouse | Faible | 🟡 Moyenne | Non classé | Commercial | Page service (existante) |
| nettoyage vitres professionnel Toulouse | Faible | 🟡 Moyenne | Non classé | Commercial | Page service (existante) |
| nettoyage diogène Toulouse | Très faible | 🟡 Niche | Non classé | Commercial | Page service (existante) |
| nettoyage extrême Toulouse | Très faible | 🟡 Niche | Non classé | Commercial | Page service (existante) |

---

## 2. Problèmes on-page

| Page | Problème | Sévérité | Correctif recommandé |
|---|---|---|---|
| **Toutes les pages service** | Images avant/après sans attribut `alt` descriptif | 🔴 Haute | Ajouter `alt="Nettoyage [service] Toulouse — avant/après"` sur chaque `<img>` |
| **fresh-sparkle-toulouse.vercel.app** | URL Vercel non marquée `noindex` → doublon potentiel avec cleanetfresh.fr | 🔴 Critique | Ajouter `noindex` pour le sous-domaine vercel.app dans `__root.tsx` (le script actuel ne couvre que lovable.app) |
| **Homepage** | H1 implicite masqué dans le carrousel — pas de vrai H1 texte visible | 🟠 Haute | S'assurer que le H1 "Entreprise de nettoyage à Toulouse" est en HTML pur, pas seulement affiché en CSS |
| **nettoyage-dappartement-ou-maison** | URL sans mot "Toulouse" → moins fort pour la requête géolocalisée | 🟠 Haute | À terme, rediriger vers `/nettoyage-appartement-toulouse` (impact fort, effort moyen) |
| **Toutes pages service** | Balise `canonical` hard-codée en production : OK, mais si le staging Vercel est crawlé avant, Google peut ignorer le canonical | 🟠 Haute | Bloquer indexation staging (voir point Vercel ci-dessus) |
| **Page "formules"** | Page listant les formules sans méta description propre et contenu trop court | 🟡 Moyenne | Enrichir avec 200 mots de contenu + méta description spécifique |
| **Page "nos-realisations"** | Galerie photos sans texte alternatif ni légendes SEO | 🟡 Moyenne | Ajouter des légendes + alt text sur chaque photo ("Nettoyage canapé tissu à Toulouse — résultat avant/après") |
| **Pages villes** (Blagnac, Colomiers, etc.) | Contenu potentiellement dupliqué entre les 5 pages villes | 🟡 Moyenne | Personnaliser chaque page avec des mentions spécifiques à la commune |
| **Toutes pages** | Pas de fil d'Ariane (breadcrumb) visible + schema BreadcrumbList manquant | 🟡 Moyenne | Ajouter breadcrumb HTML + schema pour améliorer SERP snippet |
| **nettoyage-fin-de-bail** | Titre "nettoyage fin de bail" — mot "Toulouse" absent du title tag | 🟡 Moyenne | Ajouter "Toulouse" dans le titre |

---

## 3. Lacunes de contenu

### 🔴 Priorité haute

**Crédit d'impôt nettoyage Toulouse (page dédiée)**
- Pourquoi ça compte : In The Clean 31 met ce badge en avant sur sa homepage. PurCompagnon, CrasseBusters, tous les concurrents utilisent cet angle. La requête "crédit d'impôt nettoyage Toulouse" est peu compétitive et très convertissante.
- Format : landing page `/credit-impot-nettoyage-toulouse`
- Effort : 3-4h (contenu + code)
- Contenu à couvrir : explication du dispositif SAP, montant (50 % plafonné à 12 000 €/an), avance immédiate, liste des services Clean&Fresh éligibles, FAQ

**Blog / guide de contenu**
- Pourquoi ça compte : tapis-toulouse.fr a un "Guide des Pros du nettoyage tapis Toulouse" et Raffclean.fr couvre plusieurs requêtes longue traîne. Sans articles de blog, le site est invisible pour toutes les recherches informationnelles.
- Articles prioritaires :
  1. "Comment nettoyer un canapé en tissu : ce que font les pros" → cible "nettoyer canapé tissu"
  2. "Prix d'un nettoyage de tapis à Toulouse en 2026" → cible "prix nettoyage tapis Toulouse"
  3. "Acariens dans le matelas : signes, dangers et solutions" → cible "acariens matelas"
  4. "Comment éliminer l'odeur d'urine d'animal sur un tapis" → cible longue traîne haute intention
  5. "Nettoyage fin de chantier : le guide complet pour promoteurs et particuliers"
- Effort : 2-3h par article (avec les faits déjà dans site.ts)

### 🟠 Priorité moyenne

**Pages villes supplémentaires** (35 communes non couvertes)
- Haute priorité : Muret, Cugnaux, Ramonville-Saint-Agne, Plaisance-du-Touch, Castanet-Tolosan
- Format : `/nettoyage-[ville]` sur le modèle des 5 existantes
- Effort : 1h par page (template déjà en place)
- Impact : capter les recherches géolocalisées peu compétitives

**Page guide "Tous nos tarifs"**
- Requête cible : "tarif nettoyage Toulouse", "prix nettoyage canapé tapis matelas"
- Format : page récap `/tarifs` avec tableau comparatif tous services + FAQ prix
- Effort : 2-3h

### 🟡 Priorité faible

**Témoignages / cas clients détaillés**
- Format : page `/avis` ou section dédiée avec extraits d'avis Google enrichis + récits avant/après par service
- Effort : 1-2h

---

## 4. Audit technique

| Vérification | Statut | Détail |
|---|---|---|
| HTTPS | ✅ Pass | Vercel + cleanetfresh.fr sécurisés |
| robots.txt | ✅ Pass | `Allow: /` + Sitemap pointant vers cleanetfresh.fr |
| Sitemap XML | ✅ Pass | 24 URLs, `lastmod` à jour, structuré par catégorie |
| Schema LocalBusiness | ✅ Pass | Présent dans `__root.tsx` avec téléphone, email, zone, horaires |
| Schema Service (par page) | ✅ Pass | Injecté via ServicePage.tsx pour chaque service |
| Schema FAQPage | ✅ Pass | Présent sur toutes les pages service |
| Schema BreadcrumbList | ❌ Fail | Absent — ajouter pour améliorer les rich snippets SERP |
| Balises canonical | ✅ Pass | Hard-codées vers cleanetfresh.fr sur chaque page |
| Open Graph / Twitter Card | ✅ Pass | og:image, og:title, og:description présents globalement |
| Viewport mobile | ✅ Pass | `width=device-width, initial-scale=1` |
| Polices optimisées | ✅ Pass | `display=swap` sur Google Fonts |
| Google Analytics 4 | ✅ Pass | GT-NBQQP8JN intégré |
| Google Ads Tag | ✅ Pass | AW-17507775021 intégré |
| URL Vercel staging noindex | ❌ Fail | `fresh-sparkle-toulouse.vercel.app` non bloquée — risque de contenu dupliqué |
| Alt text images | ❌ Fail | Images avant/après et photos réalisations sans alt |
| Fil d'Ariane (breadcrumb) | ❌ Fail | Absent du code et du schema |
| Vitesse de chargement | ⚠️ Warning | React SPA + Google Fonts synchrones — LCP potentiellement élevé sur mobile |
| Compression images | ⚠️ Warning | Fichiers dans `/public/realisations/` — format et taille non vérifiables sans accès serveur |
| Core Web Vitals | ⚠️ Warning | À mesurer via Google Search Console après déploiement |

---

## 5. Comparaison concurrents

| Dimension | Clean&Fresh | intheclean31.fr | raffclean.fr | nettoyeurtoulouse.fr |
|---|---|---|---|---|
| Pages service dédiées | 13 ✅ | ~8 | ~5 | ~6 |
| Pages villes | 5 | ~3 | ~10 | ~2 |
| Crédit d'impôt affiché | ❌ Non | ✅ Oui (en gros sur homepage) | ❌ Non | ❌ Non |
| Blog / articles | ❌ Non | ❌ Non | ❌ Non | ✅ Oui (partiel) |
| Avis Google (volume) | 102 ⭐ 4,9 | Non vérifié | Non vérifié | Non vérifié |
| Schémas structurés | LocalBusiness + Service + FAQ ✅ | Basique | Basique | Basique |
| Profondeur de contenu | Bonne (enrichi) | Moyenne | Moyenne | Faible |
| Présence annuaires | À confirmer | ✅ Oui | ✅ Oui | ✅ Oui |
| Vainqueur estimé | Meilleure structure | Meilleure conversion (crédit impôt) | Meilleure couverture villes | Keyword dans URL |

---

## 6. Plan d'action prioritaire

### ⚡ Quick Wins — à faire cette semaine (< 2h chacun)

**1. Bloquer l'indexation de la staging Vercel**
- Quoi : Dans `__root.tsx`, modifier le script noindex pour inclure aussi `vercel.app`
- Code :
```js
if(window.location.hostname.includes('lovable.app') || window.location.hostname.includes('vercel.app')) {
  var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex';
  document.head.appendChild(m);
}
```
- Impact : 🔴 Critique (évite le duplicate content)
- Effort : 10 min

**2. Ajouter alt text sur toutes les images**
- Quoi : Passer en revue toutes les balises `<img>` dans ServicePage.tsx et nos-realisations.tsx
- Exemple : `alt="Nettoyage tapis Toulouse — résultat après injection-extraction"`
- Impact : 🟠 Haute
- Effort : 1h

**3. Ajouter "Toulouse" dans le title tag de nettoyage-fin-de-bail**
- Quoi : Modifier `meta title` → "Nettoyage fin de bail Toulouse | Récupérez votre caution | Clean&Fresh"
- Impact : 🟡 Moyenne
- Effort : 5 min

**4. Corriger l'URL appartement**
- Quoi : Ajouter une route `/nettoyage-appartement-toulouse` qui redirige (301) vers `/nettoyage-dappartement-ou-maison`
- Impact : 🟠 Haute
- Effort : 30 min

**5. Soumettre le sitemap dans Google Search Console**
- Quoi : Aller sur search.google.com/search-console → Sitemaps → soumettre `https://cleanetfresh.fr/sitemap.xml`
- Impact : 🔴 Haute (accélère l'indexation)
- Effort : 5 min

---

### 📅 Investissements stratégiques — ce trimestre

**A. Page crédit d'impôt nettoyage Toulouse** *(priorité #1)*
- Route : `/credit-impot-nettoyage-toulouse`
- Contenu : 500 mots expliquant SAP, 50 %, avance immédiate, liste des services éligibles chez Clean&Fresh
- Schema : FAQPage + Service
- Impact : 🔴 Haute — requête peu compétitive, très convertissante
- Effort : 4-6h

**B. Blog — 4 articles prioritaires** *(priorité #2)*
- Articles : prix nettoyage tapis, comment nettoyer canapé tissu, acariens matelas, odeur urine animal
- Impact : 🟠 Haute — visibilité longue traîne + autorité de domaine
- Effort : 2-3h/article

**C. 10 nouvelles pages villes** *(priorité #3)*
- Communes cibles : Muret, Cugnaux, Ramonville, Plaisance-du-Touch, Castanet, Saint-Orens, Portet-sur-Garonne, Launaguet, Pibrac, Léguevin
- Template déjà en place → contenu personnalisé par ville (50 mots par ville)
- Impact : 🟠 Haute — requêtes géolocalisées sans concurrence
- Effort : 1h pour les 10 pages

**D. Breadcrumb schema + HTML**
- Ajouter un composant `<Breadcrumb>` visible + schema `BreadcrumbList` dans chaque page service
- Impact : 🟡 Moyenne (rich snippets SERP)
- Effort : 2-3h

**E. Inscription annuaires** *(action manuelle)*
- PagesJaunes, Yelp, Houzz, Tripadvisor, Kiwiz, 3BestRated, StarOfService
- Impact : 🟠 Haute (backlinks + citations locales)
- Effort : 3-4h (une fois)

---

## Note sur les outils SEO

Pour des données précises de volume de recherche, difficulty scores et positions actuelles, branchez **Google Search Console** (gratuit, donne vos vraies positions) et optionnellement Ahrefs ou SEMrush. La Search Console vous dira exactement quelles requêtes génèrent des impressions pour cleanetfresh.fr.

---

*Audit réalisé le 06/08/2026 — données Google et analyse codebase*
