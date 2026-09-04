# Build plan — revised schedule

Source of truth for the build. Originally a fixed 9-day sprint (Jul 27 – Aug 5, 2026); revised below after the original window slipped. Mirrors `BTG_9-Day_Execution_Plan.pdf` (kept local/untracked — client-facing formatting) in plain markdown so it's versioned alongside the code.

**Window:** Aug 31 – Sept 16, 2026 · **Launch:** Sept 16, 2026 · **Pages:** six

## Locked decisions

- **Platform:** Next.js + Tailwind + Vercel
- **Forms:** Formspree
- **Articles:** MDX (no Sanity) — done, see Day 1 below
- **Domain:** repoint DNS (A record + CNAME) — no registrar transfer (a full transfer off Wix takes 5–7 days; registrar move happens after launch — see Post-launch)
- **Design system:** updated Sept 3 — the real logo landed (maroon/gold, not the MVP spec's red/black); accent recolored to match (see Day 3)
- **Structure:** six pages confirmed

## Open decisions

- [x] **Headline typeface** — Oswald, confirmed Sept 4 (compared against Anton, Bebas Neue, and Archivo side by side; Oswald is the only one of the three alternatives with a real weight range, so it stays legible from hero size down to small card titles without needing synthetic bold)
- [x] **Analytics** — GA4, confirmed Sept 4. Code-side wired in via `@next/third-parties/google`, gated on `NEXT_PUBLIC_GA_MEASUREMENT_ID` so nothing fires without a real ID. Still needs: GA4 property created in Google Analytics, measurement ID added to Vercel env vars, Enhanced Measurement turned on for client-side pageviews

## Day by day

| Day | Date | Focus | Done when |
|---|---|---|---|
| 1 · Articles / MDX | Mon Aug 31 | `content/` dir, MDX pipeline (gray-matter + next-mdx-remote/rsc + remark-gfm), blog grid on `/articles`, single-article template, 3 seed posts | **Done.** Build + lint clean, all three seed posts statically prerender, 404 on unknown slug |
| 2 · Responsive / mobile sweep | Tue Sept 1 | Dedicated pass across all six routes, every breakpoint; fix layout breaks; test nav menu + forms on mobile | **Done (Sept 2).** Nav's desktop/hamburger switch moved from `sm:` (640px) to `md:` (768px) — 6 nav items incl. "Digital Landscape"/"Get Involved" were too tight in the 640–767px band; three 1→3-column grids (Digital Landscape platforms, Get Involved benefits, CV projects) now step through 2 columns at `sm:` instead of jumping straight to 3; build+lint clean, all six routes verified 200 |
| 3 · Content integration pt. 1 (gated on assets) | Wed Sept 2–3 | Real copy into `lib/content.ts`; logo + favicon + Howard photos into `public/`; wire image components; **real social links** (Instagram/LinkedIn/YouTube, currently `#` in `lib/content.ts`); **real contact email** (currently `placeholder@behindthegame.com`) | **Photos/logo/socials/email done — body copy still pending.** 8 event photos (Howard + Maryland "Navigating the Industry") optimized into `public/images/events/`; Events page rebuilt with both as **past** recaps (Maryland's May 1, 2026 photo evidence overrode the old "upcoming/TBD" placeholder). Real logo landed Sept 3 (`Images/FullLogo 2.png`) — trimmed to `public/images/logo.png` + `app/icon.png`; wired into nav, footer, and Home's brand panel, replacing the text wordmark. Logo's maroon/gold didn't match the red/black MVP spec, so recolored `globals.css` tokens to match (`--color-accent` → gold `#D9A94F` for text/borders, new `--color-accent-strong` → maroon `#7A1F35` for solid fills) after previewing both options as an artifact and getting sign-off. Real Instagram/TikTok/LinkedIn URLs wired into footer + Digital Landscape (YouTube still placeholder, pending); real contact email (`behindthegame@gmail.com`) on CV page. Caught + fixed a real bug: the logo file had no actual transparency (opaque white baked in, despite looking transparent in previews) — chroma-keyed it out so nav/footer/Home/favicon/OG image all render clean against the dark background. Still needed: real body copy for every section (hero, mission, programs, digital landscape, get-involved benefits, founder bio, event recap copy), headshots/bios |
| 4 · Content integration pt. 2 + polish | Thu Sept 3 | Headshots/bios, Maryland details into `lib/events.ts`, OG images, alt text, copy proofread; **custom 404 page** | **Done except headshots/bios/copy proofread (blocked on real copy).** `app/not-found.tsx` built matching the design system; `app/opengraph-image.tsx` generates a branded 1200×630 share image from the real logo; Maryland details already landed in `lib/events.ts` during Day 3; alt text upgraded from generic labels to real photo descriptions across Home + Events (`lib/events.ts` images are now `{src, alt}` objects). Build+lint clean |
| 5 · QA + preview out | Fri Sept 4 (started Sept 3) | Cross-browser, Lighthouse (perf/a11y/SEO); explicit WCAG AA contrast check; meta tags, OG cards, favicon, link check, form test; confirm `NEXT_PUBLIC_FORMSPREE_ID` + `NEXT_PUBLIC_SITE_URL` are set in Vercel's production/preview environments; noindex the staging URL. Deploy to staging, send Daud the preview link, feedback deadline Sept 8 | **Mostly done — two items need you, not code.** Lighthouse (desktop, local `next start` build): Performance 96, Accessibility 100, Best Practices 100, SEO 100 (Performance was 85 before fixing inaccurate `sizes` attrs on the real photos, which were serving 750px images into ~250px boxes). Contrast re-verified: gold-on-near-black 8.98:1, cream-on-maroon 8.92:1, both AAA. Added `proxy.ts` + `app/robots.ts` to noindex every hostname except `behindthegame.com` (verified with a spoofed Host header) — this means the current `.vercel.app` preview URL is already safe to send Daud without leaking to search engines. Added `app/sitemap.ts`. Every page now has a distinct `<title>`/description instead of all six sharing the root default. Found and fixed a real dead-link bug: the three CV project cards were `<Link href="#">`, jumping to page-top on click. **Still needed: (1) confirm in the Vercel dashboard that `NEXT_PUBLIC_FORMSPREE_ID`/`NEXT_PUBLIC_SITE_URL` are actually set for the production environment — didn't have Vercel access to check this myself; (2) an actual form submission test and real cross-browser check (Safari/Firefox) — both need a human, not code.** Preview link hasn't been sent to Daud yet |
| Buffer + review | Sat Sept 5 / Sun Sept 6 / Mon Sept 7 (Labor Day) | Daud reviews | — |
| 6 · Feedback pass | Tue Sept 8 | Consolidate notes, run revision round, confirm DNS access is in hand | **Blocked — can't start.** This is Daud reviewing and giving notes; nothing to consolidate until Day 5 finishes (preview sent) and he's actually seen it. The one non-Daud-dependent item, confirming Wix DNS panel access, is a Noah↔Daud conversation, not something code touches |
| 7 · DNS repoint (critical path) | Wed Sept 9 | Add domain in Vercel, repoint Wix DNS to Vercel, verify SSL provisioning | Propagation started with a full week of runway before Sept 16 |
| Monitor + stragglers | Thu Sept 10 / Fri Sept 11 | Watch propagation + SSL, absorb late content or a second feedback nudge | — |
| Buffer | Sat Sept 12 / Sun Sept 13 | — | — |
| Final slack | Mon Sept 14 / Tue Sept 15 | Cushion for slippage. If clean, full smoke test of every route + form + link | — |
| 8 · Launch | Wed Sept 16 | Confirm propagation resolved, SSL live, smoke test, go live, notify Daud | Domain serves the new site over HTTPS, form works in production, Daud notified |

## Post-launch

- [ ] **Registrar transfer off Wix** — deliberately deferred past launch (DNS repoint only, not a full transfer). Schedule this calmly once the site is stable; don't let it get forgotten once launch excitement passes.

## Pre-launch checklist (run on Day 8)

- [ ] Domain resolves over HTTPS
- [ ] All six pages load on desktop + mobile
- [ ] Form submits and inquiry is received (verified against production env vars, not just local)
- [ ] All links work (nav, socials, CTAs, platforms — no `#` placeholders remain)
- [ ] No placeholder text or images remain
- [ ] No Wix references anywhere
- [ ] Favicon + OG images set
- [ ] Custom 404 page in place
- [ ] Staging noindex removed / production is indexable
- [ ] Red-on-black text passes WCAG AA contrast
- [ ] Daud has signed off
