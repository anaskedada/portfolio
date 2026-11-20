# Anass Kedada – Portfolio

Portfolio personnel (React + Vite). Site statique, léger, FR / EN, mode clair / sombre.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère le site dans dist/
npm run preview  # prévisualise le build
```

## Modifier le contenu

Tout le texte est dans **`src/content.js`** (français et anglais).

Les éléments manquants s'affichent sur le site dans un encadré jaune **« À compléter »**.
Pour les remplacer :

| Élément | Où |
|---|---|
| Téléphone, LinkedIn, GitHub | `links` en haut de `src/content.js` |
| CV (PDF) | copier le PDF dans `public/` (ex. `public/cv-anass-kedada.pdf`) puis `links.cv = '/cv-anass-kedada.pdf'` |
| Captures d'écran d'un projet | images dans `public/projects/` puis `projectAssets.<projet>.screenshots = ['/projects/golf-1.webp']` |
| Lien d'un projet | `projectAssets.<projet>.url` |
| Résultat d'un projet | champ `result` du projet (FR et EN) |

Conseil performance : exporter les captures en **WebP**, largeur ~1200 px.

## Mise en ligne

Le dossier `dist/` est un site statique : il fonctionne sur Vercel, Netlify, Cloudflare Pages ou GitHub Pages.

- **Vercel / Netlify / Cloudflare Pages** : importer le dépôt GitHub. Build command `npm run build`, output `dist`.
- **GitHub Pages** (dépôt `username.github.io`) : publier le contenu de `dist/`.
  Pour un dépôt de projet (`username.github.io/portfolio`), ajouter `base: '/portfolio/'` dans `vite.config.js`.
