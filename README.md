# Qimmit Wild North

Site vitrine pour [Qimmit Wild North](docs/PROJECT.md) : activités touristiques autour des chiens de traîneau (Esquimau canadien / Qimmiq), près de Kuusamo, en Finlande.

## Documentation

- [Contexte et faits métier](docs/PROJECT.md)
- [Feuille de route](docs/ROADMAP.md)
- [Règles de travail pour les agents](AGENTS.md)

## Prérequis

- Node.js >= 22.12.0
- npm

## Commandes

| Commande | Action |
| -------- | ------ |
| `npm install` | Installe les dépendances |
| `npm run dev` | Serveur local sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualise le build localement |

## Structure du dépôt

```text
/
├── docs/           # documentation projet (métier, roadmap)
├── public/         # fichiers statiques servis tels quels (favicon, images web)
├── src/
│   └── pages/      # routes Astro
├── AGENTS.md       # instructions pour Cursor
├── astro.config.mjs
└── package.json
```

Les contenus Markdown, layouts, composants et styles seront ajoutés dans `src/` au fil du développement. Ne pas committer de photos ou vidéos brutes ; utiliser des versions optimisées pour le web dans `public/images/`.

## Stack

Astro, TypeScript, HTML sémantique, CSS plain, contenu Markdown, npm.
