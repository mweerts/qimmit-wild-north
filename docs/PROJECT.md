# Qimmit Wild North

## Le projet (monde réel)

Qimmit Wild North est le projet de développement d'activités touristiques autour des chiens de traîneau, mené sur une propriété en Finlande, près de Kuusamo et Ruka, à quelques centaines de mètres du lac Ala-Kitka.

**Adresse :** Tolvantie 48, 43900 Kuusamo, Finlande.

La race choisie est l'**Esquimau canadien** (*Canadian Eskimo Dog*, ou **Qimmiq**), découverte au Canada et porteuse d'un fort héritage inuit. Au-delà du tourisme, le projet vise aussi à **contribuer à la conservation** de cette race rare, aujourd'hui en voie de disparition.

Ce dépôt sert à construire le **site vitrine** de ce projet.

## Équipe et rôles

| Rôle | Personne | Responsabilité |
| ---- | -------- | -------------- |
| **Porteur du projet** | Romain Weerts | Initiative, terrain, chiens, activités, textes et faits métier à publier. |
| **Développement du site** | Maxime (frère de Romain, développeur) | Construction et maintenance du site vitrine dans ce dépôt. |

Les contenus publics (descriptions des chiens, histoire du projet, activités, contact, etc.) doivent refléter la réalité du terrain telle que validée par Romain. Le développeur structure, intègre et met en ligne ces contenus sans en inventer.

## Objectif du site

Qimmit Wild North est un site vitrine simple et maintenable destiné à présenter le projet, les chiens, le lieu, ainsi que des photographies et des vidéos. Le site doit privilégier une expérience claire, naturelle et adaptée aux appareils mobiles, tout en restant facile à faire évoluer.

## État actuel

- Propriété à **Tolvantie 48, 43900 Kuusamo**, Finlande (près de Ruka et du lac Ala-Kitka).
- Le parc est construit.
- Deux chiens (Esquimau canadien / Qimmiq) : **Siku** et **Asiaq**, mâles de la même portée.
- Des photographies et des vidéos peuvent être produites avec un drone, une GoPro et un téléphone.
- Valise graphique intégrée au dépôt (voir [`BRAND.md`](BRAND.md)).
- Description publique de **Siku** rédigée (voir [`src/content/dogs/siku.md`](../src/content/dogs/siku.md)).
- Site vitrine en cours de construction : page d'accueil placeholder, pas encore de mise en page ni de navigation.

## Organisation du contenu

| Emplacement | Rôle |
| ----------- | ---- |
| `docs/` | Documentation du projet : faits métier validés, identité visuelle, feuille de route. |
| `src/content/` | Textes du site en Markdown, séparés de la mise en page. |
| `src/pages/` | Routes et templates Astro. |
| `public/` | Fichiers statiques servis tels quels (logos, images web). |
| `media/brand/` | Archive de la valise graphiste (versionnée). |
| `media/raw/` | Médias bruts (photos, vidéos), hors Git. |

Pour chaque chien, distinguer trois informations quand elles sont connues :

1. **Nom actuel** — nom utilisé au quotidien et affiché sur le site.
2. **Nom de pedigree** — nom d'origine inscrit au pedigree.
3. **Élevage** — nom de l'élevage d'origine.

## Les chiens

| Nom | Notes |
|-----|-------|
| **Siku** | Premier chien du projet. Nom actuel : Siku ; nom de pedigree : Arctous ; élevage : Nunavut Inuit Heritage. Description publiée : [`src/content/dogs/siku.md`](../src/content/dogs/siku.md). |
| **Asiaq** | Deuxième chien du projet. |

Les deux sont mâles et proviennent de la même fratrie.

### Siku

- **Nom actuel :** Siku.
- **Nom de pedigree :** Arctous.
- **Élevage :** Nunavut Inuit Heritage.
- **Signification du nom :** « banquise », en inuktitut.
- **Rôle dans le projet :** premier chien esquimau canadien à rejoindre Qimmit Wild North ; point de départ de l'aventure.
- **Tempérament (tel que décrit par le porteur du projet) :** fidèle, protecteur, curieux, explorateur, très attaché à son humain.

### Asiaq

Description individuelle à rédiger pour le site (`TODO`).

## Contact

Coordonnées publiées sur le site :

| Moyen | Détail |
| ----- | ------ |
| **Téléphone** | +32 492 71 72 87 |
| **Email** | info@qimmitwildnorth.com |
| **Instagram** | [qimmitwildnorth](https://www.instagram.com/qimmitwildnorth/) |
| **Facebook** | [Qimmit Wild North](https://www.facebook.com/profile.php?id=61591377812424) |

## Presse

| Date | Source | Article |
| ---- | ------ | ------- |
| 27 juin 2026 | [Blog de Jean-Louis Xhonneux](http://fourons.blogspirit.com/) | [Initiative d'un fouronnais, Romain Weerts](http://fourons.blogspirit.com/archive/2026/06/27/initiative-d-un-fouronnais-romain-weerts-3392284.html) |

## Langues du site

Ordre de déploiement prévu :

1. **Français** (première version)
2. **Anglais**
3. **Finnois** et éventuellement d'autres langues plus tard

La structure technique doit faciliter l'ajout progressif de ces langues.

## Périmètre de la première version

La première version présente le projet, les chiens, le lieu, les médias et les informations de contact. Elle ne comprend pas de système de réservation en ligne. La structure technique doit néanmoins permettre d'ajouter cette fonctionnalité plus tard.

## Publication et outils (phase ultérieure)

Pendant la construction du site, on fait abstraction de la mise en production et des outils numériques du quotidien. Ces sujets seront traités une fois le site prêt.

### Déjà en place (côté Romain)

- **Nom de domaine** : acheté. `TODO` : noter le nom exact dans ce document quand il sera utile pour la configuration.
- **Google Business** : compte existant. Pas d'intégration ni d'harmonisation pour l'instant avec le site en cours de construction.

### À décider plus tard (Maxime + Romain)

- **Hébergement** du site vitrine — choix à faire ensemble au moment de la mise en ligne.
- **Outils numériques** que Maxime pourra mettre en place pour Romain, en fonction de ce que Romain préfère :
  - traiter de manière informatisée (email pro, agenda, réservations, etc.) ;
  - ou gérer « à l'ancienne » (téléphone, papier, échanges directs).

Le site sera construit de façon à rester déployable chez différents hébergeurs (build statique Astro), sans verrouillage prématuré.

## Informations métier à compléter

- TODO : description individuelle d'Asiaq pour le site.
- TODO : indications d'accès pour les visiteurs (parking, accès hiver/été, etc.).
- TODO : histoire personnelle du porteur de projet et formulation publique de la mission de conservation.
- TODO : activités ou expériences proposées (détail des offres touristiques).
- TODO : droits d'utilisation, légendes et crédits des médias.
- TODO : nom de domaine acheté (à noter ici pour la configuration).
- TODO : informations légales et politique de confidentialité nécessaires.

