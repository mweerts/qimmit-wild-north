# Qimmit Wild North

## Project

Build a simple, maintainable showcase website for Qimmit Wild North.

The website is a digital layer that presents Romain’s real-world project. It must not invent a commercial offer to fill a layout.

Current scope:

- presentation of the project and its identity;
- presentation of Romain when content is validated;
- presentation of the dogs and location;
- photographs and videos with cleared usage rights;
- simple contact information;
- French first, then English, then Finnish and possibly other languages later.

Online booking, payment, user accounts, complex CMS, and ad tracking are out of scope for V1. The site must remain easy to extend when a real business need is validated.

## Sources of truth

- **Validated business facts and product decisions:** shared project Notion (and what is copied into [`docs/PROJECT.md`](docs/PROJECT.md) after validation).
- **Code, Git history, and technical docs:** this repository.
- **AI / Cursor chats:** exploration only — not durable decisions unless Maxime or Romain confirm them.

Do not copy private Notion notes, AI chats, personal data, veterinary/financial details, or secrets into the public repo or frontend.

## Business context

Validated project facts live in [`docs/PROJECT.md`](docs/PROJECT.md). Read it before writing or changing site content. Do not invent business facts; use explicit `TODO` placeholders when information is missing.

**Romain Weerts** is the project owner (vision, dogs, activities, on-site reality, public business copy). **Maxime** (Romain’s brother) builds and maintains this repository and may take reversible technical decisions compatible with validated needs. Business, image, activities, and visitor promises require Romain’s validation.

## Naming

- Official brand name: **Qimmit Wild North**.
- Abandoned project name: Qimmiq Wild North — do not reintroduce `Qimmiq`, `QimmiQ`, or similar as the brand name without an explicit decision.
- Technical kebab-case: `qimmit-wild-north`.
- **Qimmiq** may still refer to the Canadian Eskimo Dog breed (race), not the brand.

Logo and brand asset locations: [`docs/BRAND.md`](docs/BRAND.md). Public site copy lives in `src/content/` (e.g. `src/content/dogs/siku.md`), separate from Astro layout and pages.

## Stack

- Astro
- TypeScript when needed
- semantic HTML
- plain CSS
- Markdown content
- npm

Static by default. JavaScript only for real interaction. No React/Vue/Svelte or heavy frontend deps in V1 without a demonstrated need.

## Design direction

Nordic, documentary, natural, calm, authentic, photography-focused, mobile-readable.

Avoid: generic tourist aesthetics, fake Far-North folklore, decorative overload, gratuitous animation, crowded UI, unsubstantiated marketing copy, and tech effects that overshadow dogs, place, and human story.

The hacker/cyber look of `mweerts.dev` does **not** apply here.

## Working rules

Before modifying files:

1. inspect the repository and relevant docs;
2. check `git status` and preserve existing user changes;
3. explain the proposed changes briefly;
4. make the smallest coherent change.

After modifying files:

1. run `npm run build`;
2. inspect the Git diff;
3. report assumptions and remaining work.

Never commit, push, publish, or change DNS unless Maxime explicitly asks.

## Content rules

- Never invent business facts, activities, prices, capacity, schedules, testimonials, partners, or guarantees.
- Never present a hypothesis as a fact.
- Use explicit placeholders when information is missing.
- Prefer a human, precise, calm, concrete tone.
- Keep content separate from layout when practical.
- Do not commit raw photographs or videos.

## Deployment notes

- Target hosting: **Cloudflare Pages**.
- Known preprod: `https://qimmitwildnorth.projects.mweerts.dev` (distinct from the future public domain).
- Preprod must not be indexed (`robots.txt`, meta robots, `X-Robots-Tag`). No Cloudflare Access (or equivalent) on the preview.
- No secrets in Git or client bundles.

## Git rules

- Do not commit secrets.
- Do not force-push.
- Do not modify unrelated files.
- Do not commit automatically unless explicitly requested.

## Development

```bash
npm run dev
```

## Definition of done

A change is complete when:

- the requested result works;
- structure stays coherent with Astro and existing conventions;
- `npm run build` succeeds;
- no secrets are added;
- mobile and desktop layouts remain usable;
- durable decisions are documented when the change creates them;
- the Git diff contains no unrelated changes.
