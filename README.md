# Qimmit Wild North

Site vitrine pour [Qimmit Wild North](docs/PROJECT.md) : projet de Romain Weerts autour des chiens de traîneau (race Esquimau canadien / Qimmiq), près de Kuusamo, en Finlande.

**Romain** porte le projet réel. **Maxime** développe et maintient ce dépôt. Voir [`docs/PROJECT.md`](docs/PROJECT.md) pour les rôles, faits validés et limites du périmètre.

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
│   ├── images/            # images web optimisées (quand disponibles)
│   └── _headers           # en-têtes Cloudflare Pages (X-Robots-Tag)
├── src/
│   ├── components/        # Header, Footer, DogCard
│   ├── config/            # configuration du site (nom, contact, nav, indexation)
│   ├── content/           # contenus Markdown (textes du site)
│   │   └── dogs/          # fiches des chiens
│   ├── layouts/
│   ├── pages/             # routes Astro
│   └── styles/
├── AGENTS.md
├── astro.config.mjs
└── package.json
```

## Routes actuelles

| Route | Rôle |
| ----- | ---- |
| `/` | Accueil |
| `/projet` | Présentation du projet (contenu métier à compléter) |
| `/chiens` | Liste des chiens |
| `/chiens/[slug]` | Fiche chien (collection Markdown) |
| `/lieu` | Lieu (accès visiteurs en TODO) |
| `/medias` | Presse + galerie (galerie en TODO) |
| `/contact` | Coordonnées publiées |

## Contenus

Les textes du site vivent dans `src/content/` et `src/config/site.ts`, séparés de la mise en page Astro. Les faits métier validés sont dans [`docs/PROJECT.md`](docs/PROJECT.md). Ne pas inventer d’informations : utiliser des `TODO` explicites.

### Chiens

| Fichier | Chien | Statut |
| ------- | ----- | ------ |
| [`siku.md`](src/content/dogs/siku.md) | Siku | Description publiée |
| [`asiaq.md`](src/content/dogs/asiaq.md) | Asiaq | À rédiger |

Convention de nommage pour un chien :

- **nom actuel** — utilisé au quotidien et sur le site ;
- **nom de pedigree** — nom d’origine inscrit au pedigree ;
- **élevage** — nom de l’élevage d’origine.

## Médias et identité visuelle

- Valise graphique versionnée : `media/brand/`.
- Logos SVG servis : `public/brand/`.
- Photos/vidéos brutes hors Git (`media/raw/`, `*.mov`, `*.mp4`) ; versions web dans `public/images/`.

Voir [`docs/BRAND.md`](docs/BRAND.md).

## Préproduction

- URL connue : [qimmitwildnorth.projects.mweerts.dev](https://qimmitwildnorth.projects.mweerts.dev)
- Hébergement : Cloudflare Pages (build `npm run build`, sortie `dist/`)
- Indexation désactivée tant que `site.allowIndexing` est `false` (meta robots, `/robots.txt` généré, `X-Robots-Tag` via `public/_headers`)
- Pas de Cloudflare Access (ni équivalent) sur la prévisualisation
- Domaine public officiel : distinct ; nom exact encore à noter dans `docs/PROJECT.md`

## Avancement

- Fondations Astro, styles, navigation, header/footer, page 404.
- Pages vitrine en place ; contenus métier encore partiels (placeholders `TODO`).
- Contact et presse intégrés.
- Fiche **Siku** publiée ; **Asiaq** en attente.
- Préprod Cloudflare déployée ; lancement public non ouvert.

Détail : [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Stack

Astro, TypeScript, HTML sémantique, CSS plain, contenu Markdown, npm. Pas de framework frontend additionnel en V1.
