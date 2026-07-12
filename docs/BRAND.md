# Identité visuelle

Valise graphique livrée par la graphiste, intégrée au dépôt en juillet 2026.

## Emplacements

| Dossier | Rôle |
| ------- | ---- |
| `media/brand/valise/` | Livraison complète de la graphiste (sources `.ai`, exports PNG et SVG). Versionnée dans Git. |
| `public/brand/` | Exports SVG prêts pour le site, servis tels quels par Astro. |

La valise graphique est versionnée pour pouvoir la récupérer sur un autre poste via `git clone` / `git pull`. Ne pas utiliser directement les fichiers de `media/brand/` dans les pages : copier ou synchroniser vers `public/brand/` les variantes nécessaires.

## Variantes fournies

### `icon/`

Symbole seul (chien stylisé). Usage : favicon, marque compacte, réseaux sociaux.

- `bleu.svg` — fond clair
- `blanc.svg` — fond sombre ou photo
- `dark.svg` — fond clair, variante sombre

### `logo-finland/`

Logo complet avec le texte « Qimmit Wild North » et la mention Finlande.

- `bleu.svg`
- `blanc.svg`
- `dark.svg`

### `logo-square/`

Format carré pour vignettes, partage social ou applications nécessitant un ratio 1:1.

- `bleu.svg`
- `blanc.svg`

## Couleurs repérées dans les SVG

| Nom | Code | Usage typique |
| --- | ---- | ------------- |
| Bleu | `#203663` / `#203664` | Couleur principale de marque |
| Dark | `#101626` | Texte et symbole sur fond clair |
| Blanc | `#dcdee1` / `#dcdee2` | Logo sur fond sombre ou photo |

`TODO` : confirmer la palette officielle et les règles d'usage (marges, taille minimale, fonds interdits) avec la graphiste.

## Chemins web

Les fichiers de `public/brand/` sont accessibles à la racine du site, par exemple :

- `/brand/icon/bleu.svg`
- `/brand/logo-finland/dark.svg`
- `/brand/logo-square/blanc.svg`

## Ce qui reste hors Git

Seuls les médias bruts volumineux (photos, vidéos drone/GoPro) sont exclus du dépôt, dans `media/raw/`. La valise graphique, elle, est bien versionnée.
