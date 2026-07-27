# Behind the Game — Website

Custom rebuild of [behindthegame.com](https://behindthegame.com), replacing the existing Wix site.

Behind the Game is a sports business and consulting organization connecting underserved students and student-athletes — particularly at HBCUs — to opportunities across the global sports industry.

**Status:** In development · Target launch Aug 5, 2026

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Content | MDX for articles (locked — no Sanity) |
| Forms | Formspree |
| Hosting | Vercel |
| Analytics | TBD (Plausible or GA4) |

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:3000`.

```bash
npm run build      # production build
npm run start      # serve the production build locally
npm run lint       # eslint
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_FORMSPREE_ID=
NEXT_PUBLIC_SITE_URL=https://behindthegame.com
```

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, mission/vision, the five programs, pilot highlights, CTA |
| `/digital-landscape` | The org's digital presence and content ecosystem |
| `/events` | Symposium Series — past (Howard, Mar 2026) and upcoming (Maryland) |
| `/cv` | Founder bio and background |
| `/articles` | Blog index and post template |
| `/get-involved` | For Brands / For Students / For Partners, plus contact form |

All six routes are stubbed and live behind the shared nav/footer as of Day 1. Full page builds land Day 2–5 per [`docs/build-plan.md`](docs/build-plan.md).

## Design system

Editorial black, white, and red. Near-black backgrounds with heavy white grotesque headlines and a single red accent used sparingly.

```
--color-bg          #0A0A0A
--color-surface     #161616
--color-border      #2B2B2B
--color-text        #FFFFFF
--color-text-muted  #9A9A9A
--color-accent      #E7202B
```

Red is an accent, not a fill — borders, small caps labels, and single interactive elements. Watch contrast on red-on-black text; use it at 13px+ and check against WCAG AA before shipping.

Headline typeface: Archivo (weights 700/900) as a placeholder pending license confirmation — see Open Decisions. Body: Inter.

## Project structure

```
app/                 # routes
components/          # shared UI (nav, footer, page-header, buttons, image blocks)
content/articles/    # MDX posts
lib/                 # content.ts + helpers
public/              # images, logo, favicon, OG assets
docs/                # build plan and specs
```

## Content

Articles live in `content/articles/` as MDX with frontmatter:

```yaml
---
title: "Post title"
date: "2026-08-01"
excerpt: "One or two sentences for the index card."
image: "/images/articles/slug.jpg"
---
```

Events are data-driven in `lib/events.ts` — adding an event should be a data entry, never a layout rebuild.

Site copy, nav links, and per-page intros live in `lib/content.ts` as a single source of truth. Everything in there is placeholder until the client content drop on Jul 31.

---

## Deployment

Pushes to `main` deploy to production via Vercel. All other branches get preview URLs.

Domain is currently registered through Wix. Per the execution plan, launch does **not** require a registrar transfer — only repointing DNS (A record + CNAME) from Wix to Vercel, done on Day 7.

## Branching

- `main` — production
- `feat/<page-or-feature>` — everything else, merged via PR

Commit style: `feat:`, `fix:`, `style:`, `content:`, `chore:`

---

## Open decisions

- [ ] **Headline typeface** — confirm license if it's a paid face (Archivo used as placeholder).
- [ ] **Analytics** — Plausible (paid, privacy-first) vs. GA4 (free).

## Assets needed from client

- [ ] Logo files (SVG or high-res PNG)
- [ ] Howard pilot photography
- [ ] Headshots and bios
- [ ] Final copy for all six pages
- [ ] Maryland event details
- [ ] Wix DNS panel access (for the A record / CNAME repoint — no registrar transfer needed)

---

## Docs

- [`docs/build-plan.md`](docs/build-plan.md) — the 9-day execution plan (day-by-day scope, risk register, pre-launch checklist)
