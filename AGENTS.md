# Qimmit Wild North

## Project

Build a simple, maintainable showcase website for Qimmit Wild North.

Current scope:

- presentation of the project;
- presentation of the dogs and location;
- photographs and videos;
- contact information;
- French first, then English, then Finnish and possibly other languages later.

Online booking is not part of the first version, but the site must remain easy to extend.

## Business context

Validated project facts (location, dogs, languages, etc.) live in [`docs/PROJECT.md`](docs/PROJECT.md). Read it before writing or changing site content. Do not invent business facts; use explicit `TODO` placeholders when information is missing.

**Romain Weerts** is the project owner (dogs, activities, on-site reality). This repository is built and maintained by **Maxime** (Romain's brother, developer). Business copy should come from or be validated by Romain.

Logo and brand asset locations are documented in [`docs/BRAND.md`](docs/BRAND.md). Public site copy lives in `src/content/` (e.g. `src/content/dogs/siku.md`), separate from Astro layout and pages.

## Stack

- Astro
- TypeScript
- semantic HTML
- plain CSS
- Markdown content
- npm

Avoid adding frontend frameworks or production dependencies unless necessary.

## Working rules

Before modifying files:

1. inspect the repository;
2. explain the proposed changes briefly;
3. make the smallest coherent change.

After modifying files:

1. run `npm run build`;
2. inspect the Git diff;
3. report assumptions and remaining work.

## Content rules

- Never invent business facts.
- Use explicit placeholders when information is missing.
- Keep content separate from layout when practical.
- Do not commit raw photographs or videos.

## Design direction

The visual identity should be:

- Nordic;
- documentary;
- natural;
- calm;
- authentic;
- photography-focused;
- readable on mobile.

Avoid:

- excessive animations;
- crowded layouts;
- generic Christmas aesthetics;
- fake tribal motifs;
- unnecessary JavaScript.

## Git rules

- Do not commit secrets.
- Do not force-push.
- Do not modify unrelated files.
- Do not commit automatically unless explicitly requested.

## Development

Start the development server with:

```bash
npm run dev
```

## Definition of done

A change is complete when:

- the requested result works;
- `npm run build` succeeds;
- mobile and desktop layouts remain usable;
- the Git diff contains no unrelated changes.
