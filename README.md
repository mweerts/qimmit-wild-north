# Qimmit Wild North

Site vitrine pour [Qimmit Wild North](docs/PROJECT.md) : activités touristiques autour des chiens de traîneau (Esquimau canadien / Qimmiq), près de Kuusamo, en Finlande.

Projet initié par **Romain Weerts** ; ce dépôt est le site vitrine, développé et maintenu par **Maxime** (frère de Romain, développeur). Voir [`docs/PROJECT.md`](docs/PROJECT.md) pour les rôles et le contexte.

## Documentation

- [Contexte et faits métier](docs/PROJECT.md)
- [Identité visuelle](docs/BRAND.md)
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
├── docs/                  # documentation projet (métier, identité, roadmap)
├── media/
│   ├── brand/valise/      # valise graphiste (sources + exports de référence)
│   └── raw/               # photos et vidéos brutes (hors Git)
├── public/
│   ├── brand/             # logos SVG pour le site
│   └── images/            # images web optimisées
├── src/
│   ├── content/           # contenus Markdown (textes du site)
│   │   └── dogs/          # fiches des chiens
│   └── pages/             # routes Astro
├── AGENTS.md              # instructions pour Cursor
├── astro.config.mjs
└── package.json
```

## Contenus

Les textes du site vivent dans `src/content/`, séparés de la mise en page Astro dans `src/pages/`, `src/layouts/` et `src/components/` (à venir).

Les faits métier validés (lieu, chiens, langues, etc.) sont résumés dans [`docs/PROJECT.md`](docs/PROJECT.md). Avant d'écrire ou de modifier un contenu public, s'y référer. Ne pas inventer d'informations : utiliser des `TODO` explicites quand une information manque.

### Chiens

Chaque chien a une fiche Markdown dans `src/content/dogs/`. Pour l'instant :

| Fichier | Chien | Statut |
| ------- | ----- | ------ |
| [`siku.md`](src/content/dogs/siku.md) | Siku | Description publiée |
| `asiaq.md` | Asiaq | À rédiger |

Convention de nommage pour un chien :

- **nom actuel** — celui utilisé au quotidien et sur le site ;
- **nom de pedigree** — nom d'origine inscrit au pedigree ;
- **élevage** — nom de l'élevage d'origine.

## Médias et identité visuelle

- La **valise graphique** (`media/brand/`) est versionnée dans Git.
- Les **logos SVG** servis sur le site sont dans `public/brand/`.
- Les **photos et vidéos brutes** (`media/raw/`, `*.mov`, `*.mp4`) restent hors Git ; utiliser des versions optimisées dans `public/images/`.

Voir [`docs/BRAND.md`](docs/BRAND.md) pour les variantes de logo et les chemins web.

## Avancement

- Projet Astro initialisé, build fonctionnel.
- Valise graphiste intégrée (`media/brand/valise/`, `public/brand/`).
- Description de **Siku** rédigée (`src/content/dogs/siku.md`).
- Pages, styles, navigation et galerie : à construire (voir [`docs/ROADMAP.md`](docs/ROADMAP.md)).

## Stack

Astro, TypeScript, HTML sémantique, CSS plain, contenu Markdown, npm.
