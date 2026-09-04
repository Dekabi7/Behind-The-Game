# Behind the Game — Website

Custom rebuild of [behindthegame.com](https://behindthegame.com), replacing the existing Wix site.

Behind the Game is a sports business and consulting organization connecting underserved students and student-athletes — particularly at HBCUs — to opportunities across the global sports industry.

**Status:** In development · Target launch Sept 16, 2026

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

Editorial maroon, gold, and near-black, matching the real logo (updated Sept 3 — the original spec called for a red accent before the logo existed; see `docs/build-plan.md` Day 3). Warm near-black backgrounds with heavy cream/white grotesque headlines.

```
--color-bg            #100D0C
--color-surface       #1C1210
--color-border        #33221E
--color-text          #F5F0E8
--color-text-muted    #A89A8C
--color-accent        #D9A94F  (gold — text, borders, small caps labels, thin/interactive elements)
--color-accent-strong #7A1F35  (maroon — solid fills only: primary CTA buttons, filled pills)
```

Two accent roles, not one: gold is the thin/text role red used to play (it has the luminance to read on near-black); maroon is a dark color, so it's reserved for solid fills where a light label sits on top of it. Watch contrast on the gold accent; use it at 13px+ and check against WCAG AA before shipping.

Headline typeface: Oswald (weight 700) — confirmed Sept 4, replacing the placeholder Archivo after comparing it against Anton, Bebas Neue, and the original side by side. Free Google Font, no licensing cost. Body: Inter.

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

Site copy, nav links, and per-page intros live in `lib/content.ts` as a single source of truth. Everything in there is placeholder until the client content drop, scheduled for content integration (see [`docs/build-plan.md`](docs/build-plan.md)).

---

## Deployment

Pushes to `main` deploy to production via Vercel. All other branches get preview URLs.

Domain is currently registered through Wix. Per the execution plan, launch does **not** require a registrar transfer — only repointing DNS (A record + CNAME) from Wix to Vercel (see [`docs/build-plan.md`](docs/build-plan.md) for the current date).

## Branching

- `main` — production
- `feat/<page-or-feature>` — everything else, merged via PR

Commit style: `feat:`, `fix:`, `style:`, `content:`, `chore:`

---

## Open decisions

- [x] **Headline typeface** — Oswald, confirmed Sept 4.
- [x] **Analytics** — GA4, confirmed Sept 4. Wired in (`@next/third-parties/google`), gated on `NEXT_PUBLIC_GA_MEASUREMENT_ID` — still needs the actual GA4 property created and the measurement ID added to Vercel.

## Assets needed from client

- [x] Logo files — received Sept 3 (`FullLogo 2.png`)
- [x] Howard + Maryland event photography — received Sept 2
- [ ] Headshots and bios
- [ ] Final copy for all six pages
- [x] Maryland event details — date/location/partner confirmed via the event poster (May 1, 2026, Gossett Hall/Glazer Auditorium, w/ Minorities in Sports)
- [ ] Wix DNS panel access (for the A record / CNAME repoint — no registrar transfer needed)

---

## Docs

- [`docs/build-plan.md`](docs/build-plan.md) — the 9-day execution plan (day-by-day scope, risk register, pre-launch checklist)
