# Guide de déploiement — Clean&Fresh sur Hostinger

## Vue d'ensemble

Ton site est une app React (pas WordPress). Il faut :
1. **Builder** le site sur ton ordinateur → génère un dossier `dist/`
2. **Supprimer** les anciens fichiers WordPress sur Hostinger
3. **Uploader** le contenu de `dist/` dans `public_html/`
4. Le fichier `.htaccess` est déjà inclus automatiquement ✔

---

## ÉTAPE 1 — Builder le site sur ton ordinateur

Ouvre un terminal dans le dossier du projet (`fresh-sparkle-toulouse-main`) et lance :

```bash
npm run build
```

→ Cela crée un dossier **`dist/`** contenant tous les fichiers du site (HTML, JS, CSS, images).

> Si tu n'as pas Node.js installé : https://nodejs.org → télécharge la version LTS et relance la commande.

---

## ÉTAPE 2 — Se connecter à Hostinger

1. Va sur **hPanel** → https://hpanel.hostinger.com
2. Clique sur **"Gérer"** à côté de ton hébergement
3. Dans le menu, clique sur **"Gestionnaire de fichiers"**

---

## ÉTAPE 3 — Supprimer l'ancien WordPress

Dans le Gestionnaire de fichiers, ouvre le dossier **`public_html/`**.

**Sélectionne tout** (Ctrl+A) et **supprime tout**. Les fichiers WordPress typiques à supprimer :
- `wp-admin/`, `wp-content/`, `wp-includes/` (dossiers)
- `wp-config.php`, `wp-login.php`, `index.php`, `.htaccess`, etc.

> ⚠️ **Ne supprime pas** le dossier `public_html/` lui-même, seulement son contenu.

---

## ÉTAPE 4 — Uploader le contenu de `dist/`

**Option A — Via le Gestionnaire de fichiers Hostinger (simple) :**

1. Dans `public_html/` vide, clique sur **"Uploader des fichiers"**
2. Sélectionne **tout le contenu** du dossier `dist/` de ton ordinateur
3. Attends la fin de l'upload (peut prendre 1-2 min)

**Option B — Via FTP avec FileZilla (plus rapide pour beaucoup de fichiers) :**

Tes identifiants FTP sont dans hPanel → **FTP** → Comptes FTP.

```
Hôte     : ftp.tondomaine.fr  (ou l'IP fournie par Hostinger)
Port     : 21
Login    : ton login FTP
Mot de passe : ton mdp FTP
```

Dans FileZilla :
- Gauche = ton ordinateur → navigue jusqu'à `dist/`
- Droite = Hostinger → ouvre `public_html/`
- Sélectionne tout le contenu de `dist/` → glisse dans `public_html/`

---

## ÉTAPE 5 — Vérifier que le .htaccess est bien là

Dans `public_html/`, tu dois voir le fichier **`.htaccess`**.

> Si tu ne le vois pas dans le Gestionnaire de fichiers, active "Afficher les fichiers cachés" (option en haut à droite).

Ce fichier est crucial : sans lui, les URLs `/nettoyage-toulouse`, `/nettoyage-canape-toulouse` etc. renverront une erreur 404.

---

## ÉTAPE 6 — Activer le SSL (HTTPS)

Dans hPanel → **SSL** → Active le certificat **Let's Encrypt gratuit** pour `cleanetfresh.fr` et `www.cleanetfresh.fr`.

Une fois activé, décommente ces lignes dans `.htaccess` pour forcer le HTTPS :

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## ÉTAPE 7 — Pointer le domaine vers Hostinger (si pas encore fait)

Si le domaine `cleanetfresh.fr` est chez un autre registrar (OVH, Gandi, etc.) et pas encore sur Hostinger :

1. Dans hPanel → **Domaines** → note les **nameservers Hostinger** (ex: `ns1.dns-parking.com`)
2. Va chez ton registrar → change les nameservers pour ceux d'Hostinger
3. Propagation DNS : **24-48h** (souvent moins d'1h en pratique)

Si le domaine est déjà sur Hostinger → rien à faire, ça marchera immédiatement.

---

## ÉTAPE 8 — Test final

Visite ces URLs et vérifie que tout charge :

- [ ] `https://cleanetfresh.fr` → homepage
- [ ] `https://cleanetfresh.fr/nettoyage-canape-toulouse` → page service
- [ ] `https://cleanetfresh.fr/nettoyage-toulouse` → page ville
- [ ] `https://cleanetfresh.fr/nettoyage-blagnac` → page ville
- [ ] `https://cleanetfresh.fr/formules` → page formules

Si une page renvoie **404** → le `.htaccess` n'est pas actif. Vérifie qu'il est bien dans `public_html/` (pas dans un sous-dossier).

---

## ÉTAPE 9 — Soumettre le sitemap dans Google Search Console

C'est l'action la plus importante pour le SEO après la mise en ligne :

1. Va sur https://search.google.com/search-console
2. Ajoute la propriété `cleanetfresh.fr` (si pas déjà fait)
3. **Sitemaps** → entre `sitemap.xml` → **Envoyer**
4. Reviens dans 48h et clique "Demander l'indexation" sur les 5 pages principales

---

## En cas de problème

| Symptôme | Solution |
|----------|----------|
| Page blanche | Ouvre la console navigateur (F12) → regarde l'erreur JS |
| 404 sur toutes les routes sauf / | Le `.htaccess` est manquant ou le module Rewrite n'est pas actif |
| Site charge mais images manquantes | Les images ne sont pas dans `dist/assets/` — refaire le build |
| Ancien WordPress qui s'affiche | Vider le cache du navigateur (Ctrl+Shift+R) |
| Erreur SSL | Attendre 10 min après activation du certificat |

---

*Guide rédigé le 7 août 2026 — Clean&Fresh*
