# Qimmit Wild North

## Le projet (monde réel)

Qimmit Wild North est le projet de **Romain Weerts** : développement d’activités autour des chiens de traîneau sur une propriété en Finlande, près de Kuusamo et Ruka, à quelques centaines de mètres du lac Ala-Kitka.

**Adresse :** Tolvantie 48, 43900 Kuusamo, Finlande.

La race choisie est l’**Esquimau canadien** (*Canadian Eskimo Dog*, ou **Qimmiq**), découverte au Canada et porteuse d’un fort héritage inuit. Au-delà du tourisme, le projet vise aussi à **contribuer à la conservation** de cette race rare, aujourd’hui en voie de disparition.

Ce dépôt sert à construire le **site vitrine** de ce projet. Le site doit traduire le projet réel ; il ne doit pas fabriquer une offre commerciale pour remplir une maquette.

## Nom et identité

| Usage | Forme |
| ----- | ----- |
| Nom officiel / marque | **Qimmit Wild North** |
| Ancien nom abandonné | Qimmiq Wild North |
| Dépôt / technique | `qimmit-wild-north` |
| Race (pas la marque) | Qimmiq / Esquimau canadien |

Ne pas réintroduire `Qimmiq`, `QimmiQ` ou une variante comme nom de marque sans décision explicite. Les fichiers de la valise graphiste peuvent encore porter d’anciens noms de fichiers ; les assets publics sous `public/brand/` utilisent des chemins neutres.

## Équipe et rôles

| Rôle | Personne | Responsabilité |
| ---- | -------- | -------------- |
| **Porteur du projet** | Romain Weerts | Vision, terrain, chiens, activités, risques acceptables, validation des contenus publics et des promesses faites aux visiteurs. |
| **Couche numérique** | Maxime (frère de Romain, développeur) | Structure documentaire, développement du site, dépôt Git, décisions techniques réversibles compatibles avec le besoin validé. |
| **IA / Composer** | Outil d’assistance | Analyse, rédaction, implémentation assistée — ne remplace ni Romain (métier) ni Maxime (responsabilité architecturale). |

Les contenus publics doivent refléter la réalité validée par Romain. Distinguer faits, décisions, hypothèses, déductions et questions ouvertes.

## Objectif du site

Présence web simple, crédible et évolutive pour comprendre :

- ce qu’est Qimmit Wild North ;
- qui est Romain et la réalité du projet (quand le contenu est validé) ;
- les chiens et le lieu ;
- les expériences ou activités **réellement validées** ;
- les photographies et vidéos disponibles (droits OK) ;
- comment prendre contact.

Direction visuelle : nordique, documentaire, naturelle, calme, authentique, portée par la photographie. Voir aussi [`BRAND.md`](BRAND.md) et [`../AGENTS.md`](../AGENTS.md).

## État actuel

### Terrain (validé)

- Propriété à **Tolvantie 48, 43900 Kuusamo**, Finlande (près de Ruka et du lac Ala-Kitka).
- Le parc est construit.
- Deux chiens (Esquimau canadien / Qimmiq) : **Siku** et **Asiaq**, mâles de la même portée.
- Des photographies et des vidéos peuvent être produites avec un drone, une GoPro et un téléphone.

### Site (implémentation)

- Site Astro multipage avec navigation, styles globaux, header/footer et page 404.
- Routes : `/`, `/projet`, `/chiens`, `/chiens/[slug]`, `/lieu`, `/medias`, `/contact`.
- Valise graphique intégrée (voir [`BRAND.md`](BRAND.md)).
- Description publique de **Siku** rédigée ([`src/content/dogs/siku.md`](../src/content/dogs/siku.md)) ; **Asiaq** en attente.
- Contact et un article de presse intégrés.
- Contenus projet / lieu / galerie encore partiels (`TODO` sur le site).
- Pas de réservation en ligne, pas de paiement, pas de CMS complexe.

## Organisation du contenu

| Emplacement | Rôle |
| ----------- | ---- |
| `docs/` | Documentation : faits métier validés, identité, roadmap. |
| `src/content/` | Textes Markdown du site (fiches chiens, etc.). |
| `src/config/site.ts` | Nom, description, contact, navigation, indexation. |
| `src/pages/` | Routes et templates Astro. |
| `public/` | Fichiers statiques (logos, images web, `robots.txt`, `_headers`). |
| `media/brand/` | Archive de la valise graphiste (versionnée). |
| `media/raw/` | Médias bruts (hors Git). |

Modèle conceptuel : projet / histoire, Romain, chiens, lieu, médias, activités validées (lorsqu’elles existent), contact.

Pour chaque chien, distinguer quand c’est connu :

1. **Nom actuel** — affiché sur le site.
2. **Nom de pedigree** — inscrit au pedigree.
3. **Élevage** — élevage d’origine.

## Les chiens

| Nom | Notes |
|-----|-------|
| **Siku** | Premier chien. Pedigree : Arctous ; élevage : Nunavut Inuit Heritage. Fiche : [`src/content/dogs/siku.md`](../src/content/dogs/siku.md). |
| **Asiaq** | Deuxième chien. Description individuelle `TODO`. |

Les deux sont mâles et proviennent de la même fratrie.

### Siku

- **Nom actuel :** Siku.
- **Nom de pedigree :** Arctous.
- **Élevage :** Nunavut Inuit Heritage.
- **Signification du nom :** « banquise », en inuktitut.
- **Rôle dans le projet :** premier chien esquimau canadien à rejoindre Qimmit Wild North ; point de départ de l’aventure.
- **Tempérament (tel que décrit par Romain) :** fidèle, protecteur, curieux, explorateur, très attaché à son humain.

### Asiaq

Description individuelle à rédiger pour le site (`TODO`).

## Contact

Coordonnées publiées sur le site (V1) :

| Moyen | Détail |
| ----- | ------ |
| **Téléphone** | +32 492 71 72 87 |
| **Email** | info@qimmitwildnorth.com |
| **Instagram** | [qimmitwildnorth](https://www.instagram.com/qimmitwildnorth/) |
| **Facebook** | [Qimmit Wild North](https://www.facebook.com/profile.php?id=61591377812424) |

## Presse

| Date | Source | Article |
| ---- | ------ | ------- |
| 27 juin 2026 | [Blog de Jean-Louis Xhonneux](http://fourons.blogspirit.com/) | [Initiative d’un fouronnais, Romain Weerts](http://fourons.blogspirit.com/archive/2026/06/27/initiative-d-un-fouronnais-romain-weerts-3392284.html) |

## Langues du site

1. **Français** (première version)
2. **Anglais**
3. **Finnois** et éventuellement d’autres langues plus tard

La structure technique doit faciliter l’ajout progressif, sans duplication fragile.

## Périmètre de la première version

**Inclus :** présentation du projet et de l’identité ; Romain lorsque le contenu est validé ; chiens et lieu ; médias autorisés ; contact simple ; français ; architecture extensible (dont anglais ultérieur).

**Hors périmètre V1 :** réservation en ligne, paiement, comptes utilisateurs, back-office complexe, CMS sans besoin concret, tracking publicitaire, dépendances frontend lourdes, prix / calendrier / activités / témoignages / partenaires / garanties inventés.

## Déploiement et environnements

| Environnement | Statut |
| ------------- | ------ |
| **Préproduction** | [qimmitwildnorth.projects.mweerts.dev](https://qimmitwildnorth.projects.mweerts.dev) — Cloudflare Pages, reliée au dépôt. |
| **Domaine public officiel** | Distinct de la préprod. Nom exact : `TODO` (domaine acheté côté Romain ; l’email public utilise déjà `@qimmitwildnorth.com`). |
| **Build** | `npm run build` → sortie `dist/` |
| **Indexation préprod** | Désactivée dans le dépôt (`site.allowIndexing = false`, `public/robots.txt`, meta robots, `public/_headers` → `X-Robots-Tag`). |
| **Cloudflare Access** | Non requis sur la prévisualisation. Protection limitée à la non-indexation. |
| **Schéma `*.preview.mweerts.dev`** | Envisagé pour d’autres projets Maxime ; **pas** une décision validée pour remplacer l’URL actuelle de Qimmit. |

Ne pas changer l’URL ou le DNS sans instruction explicite.

### Côté Romain (déjà en place)

- **Nom de domaine** : acheté. `TODO` : noter le nom exact ici pour la configuration publique.
- **Google Business** : compte existant. Harmonisation avec le site : plus tard.

### À décider plus tard (Maxime + Romain)

- Passage de la préprod au domaine public (critères et date de lancement).
- Outils numériques du quotidien pour Romain (informatisé vs « à l’ancienne»).
- Analytics éventuelles, uniquement si besoin réel et respect de la vie privée.
- Réservation / calendrier / paiement / CMS — seulement après besoin métier validé.

## Informations encore ouvertes

Ne pas trancher sans nouvelle information validée :

- vision exacte de Romain et histoire qu’il souhaite raconter ;
- état détaillé de la meute, du terrain, des installations et du matériel ;
- profil public d’Asiaq (et évolutions futures de la meute) ;
- activités existantes, testables ou seulement envisagées ;
- public cible, capacité opérationnelle, saisonnalité ;
- offre, prix ou modèle économique ;
- contraintes légales, assurances et autorisations ;
- textes définitifs et présentation publique de Romain ;
- sélection des médias et droits associés ;
- domaine public officiel et critères de lancement ;
- méthode d’internationalisation (anglais, puis finnois) ;
- analytics, réservation, calendrier, paiement ou CMS.

## Priorités globales (hors backlog technique seul)

1. Compléter le brief de Romain.
2. Consolider les faits terrain, chiens et activités.
3. Choisir au plus trois priorités communes à 90 jours.
4. Aligner Notion, l’assistance IA et le backlog du site sur ces décisions.

Pour le site : fiabiliser la structure technique sans finaliser des contenus métier encore inconnus.
