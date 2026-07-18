# Feuille de route

## Avancement

Déjà en place :

- Projet Astro initialisé, build fonctionnel (`dist/`).
- Valise graphiste intégrée (`media/brand/valise/`, `public/brand/`) — voir [`BRAND.md`](BRAND.md).
- Styles globaux, variables CSS, layout, header, footer, page 404.
- Navigation multipage : accueil, projet, chiens, lieu, médias, contact.
- Collection Markdown des chiens (`src/content/dogs/`) ; fiche **Siku** ; stub **Asiaq**.
- Contact et presse intégrés.
- Préproduction Cloudflare Pages : [qimmitwildnorth.projects.mweerts.dev](https://qimmitwildnorth.projects.mweerts.dev).
- Non-indexation préprod / pré-lancement dans le dépôt (`allowIndexing`, `robots.txt`, meta robots, `X-Robots-Tag`).

Prochaines étapes prioritaires (site) : enrichir les contenus validés par Romain, description d’**Asiaq**, médias web, approfondir la direction visuelle documentaire / photo.

Les priorités métier globales restent le brief Romain et la consolidation des faits terrain — le site ne doit pas les précéder.

## 1. Fondations

- [x] Confirmer le périmètre de la première version (vitrine, pas de réservation).
- [x] Organiser les contenus Markdown séparément de la mise en page (`src/content/dogs/`).
- [ ] Définir une structure simple pour le français et l’anglais à venir.
- [x] Styles globaux, variables CSS et composants Astro essentiels.
- [x] Build et routes de base vérifiés.
- [ ] Vérifier régulièrement l’affichage mobile sur les évolutions UI.

## 2. Structure des pages

- [x] Navigation principale et pied de page.
- [x] Page d’accueil (structure ; enrichissement photo / copy à venir).
- [x] Pages projet, chiens, lieu, médias, contact.
- [ ] Galerie photographies / vidéos (placeholder actuel).
- [x] Informations de contact (coordonnées V1 publiées).
- [ ] Présentation de Romain lorsque le contenu est validé.
- [ ] Activités validées uniquement — page ou section quand le besoin et les faits existent.
- [ ] Renforcer sémantique et accessibilité au fil des changements.

## 3. Identité visuelle

- [x] Valise graphiste au dépôt.
- [x] Première palette / typographie / espacements (`src/styles/global.css`).
- [ ] Approfondir la direction nordique, documentaire, naturelle et calme.
- [ ] Donner la priorité aux photographies sans surcharger les pages.
- [ ] Affiner compositions mobile / large.
- [ ] Limiter les animations aux transitions réellement utiles.

## 4. Contenu et médias

- [x] Fiche Siku ; [ ] fiche Asiaq.
- [ ] Histoire du projet et présentation de Romain (validation Romain).
- [ ] Indications d’accès visiteurs.
- [ ] Activités / expériences réellement proposées (si validées).
- [ ] Sélectionner et optimiser les médias (drone, GoPro, téléphone) → `public/images/`.
- [ ] Légendes, textes alternatifs et crédits ; droits d’utilisation.
- [ ] Préparer la version anglaise selon les priorités confirmées.

## 5. Publication

- [x] Préproduction Cloudflare Pages déployée.
- [x] Non-indexation côté site (repo) pour la phase préprod / pré-lancement.
- [x] Pas de Cloudflare Access sur la prévisualisation (décision : non requis).
- [ ] Noter le nom de domaine public exact dans [`PROJECT.md`](PROJECT.md).
- [ ] Critères et date de lancement public.
- [ ] Activer l’indexation (`site.allowIndexing`) uniquement au lancement public.
- [ ] Métadonnées de partage social, favicon consolidé.
- [ ] Informations légales / confidentialité nécessaires (`TODO`).
- [ ] Harmonisation Google Business (plus tard).
- [ ] Outils numériques du quotidien pour Romain (`TODO`).

## 6. Réservation future

Hors V1. À étudier seulement après besoin métier validé :

- Offres, disponibilités, tarifs et règles (`TODO`).
- Parcours de réservation et notifications.
- Solution externe vs intégration dédiée.
- Paiements, annulations, données personnelles, obligations légales (`TODO`).
