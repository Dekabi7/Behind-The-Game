# Build plan — 9-day execution

Source of truth for the launch sprint. Mirrors `BTG_9-Day_Execution_Plan.pdf` (kept local/untracked — client-facing formatting) in plain markdown so it's versioned alongside the code.

**Window:** Jul 27 – Aug 5, 2026 · **Launch:** Aug 5, 2026 · **Pages:** six · **Content drop:** Jul 31, 2026

## The strategy — build first, content later

Content and payment don't land until Friday Jul 31. The build is deliberately decoupled from content: Monday through Friday stands up a complete, functional site shell using placeholder copy from the one-pager. When real assets arrive Friday, integration becomes a fast plug-in over the weekend rather than a blocker. **Done** means Daud has reviewed, signed off, and the domain resolves to the new site.

## Locked decisions

- **Platform:** Next.js + Tailwind + Vercel
- **Forms:** Formspree
- **Articles:** MDX (no Sanity)
- **Domain:** repoint DNS (A record + CNAME) — no registrar transfer (a full transfer off Wix takes 5–7 days and would eat the whole window; registrar move happens after launch)
- **Design system:** locked per MVP spec
- **Structure:** six pages confirmed

## Two things that govern everything

**Risk — content + payment arrive Fri Jul 31.** Everything before Friday is build-with-placeholder. This turns the weekend (Aug 1–2), normally the buffer, into content-integration work. Almost no slack: any Mon–Fri day that slips has nowhere to go.

**Note — building ahead of the deposit.** Original terms were first payment before build starts. Payment on the 31st means fronting four days of build before the deposit lands. Conscious call, not drift.

## Day by day

| Day | Date | Focus | Done when |
|---|---|---|---|
| 1 · Foundation | Mon Jul 27 | Scaffold, design system, nav + footer, seeded content file, stub all six routes, GitHub + Vercel staging | All six pages load, nav highlights active page in red, footer renders sitewide, push-to-GitHub deploys a live Vercel staging URL |
| 2 · Home | Tue Jul 28 | Heaviest page fully built with placeholders (hero, Our Story block); remove Wix map/filler | Home visually complete top to bottom, responsive, nothing references Wix |
| 3 · Digital Landscape + Events | Wed Jul 29 | Platform cards, philosophy block, community impact; recap headline, highlights image, CTA card | Both pages complete with placeholders, all platform/CTA links stubbed |
| 4 · Get Involved + CV | Thu Jul 30 | Contact form (Formspree, test-submitted), benefits cards; CV bio structure + linked project sections | Test form submission arrives successfully; CV renders with placeholder bio/projects |
| 5 · Articles + Responsive · **content arrives** | Fri Jul 31 | MDX setup, blog grid, two placeholder posts; full responsive/mobile sweep incl. mobile nav (deferred from Day 1). EOD: real content, photos, logo pick, payment arrive | Every page functional on desktop + mobile with placeholders; real assets in hand and inventoried |
| Content integration (former buffer) | Sat–Sun Aug 1–2 | Swap all placeholders for real copy/photos/logo/URLs/articles/bio | Zero placeholders remain; every image real and sized |
| 6 · QA + preview | Mon Aug 3 | Cross-browser, mobile, accessibility, SEO/OG/favicon, link + form verification, perf sanity | QA checklist clear, preview link sent to Daud |
| 7 · Feedback + DNS prep | Tue Aug 4 | Consolidated feedback round (polish only, no new features); point Wix DNS to Vercel, verify SSL | Daud signs off; DNS pointed and propagating; SSL issuing |
| 8 · Launch | Wed Aug 5 | Confirm propagation + HTTPS, final smoke test, go live | Domain serves the new site, form works in production, Daud notified |

## Risk register

| Risk | Mitigation |
|---|---|
| Content slips past Fri 31 | Highest risk. Build is done and functional before content is needed, so a late drop delays only weekend integration. If it slips to Sat/Sun, Day 6 QA absorbs some. Beyond that, launch date is at risk — flag Daud early. |
| No buffer left | The weekend is now working time. A slipped Mon–Fri day pushes into the weekend and compounds. Protect the Mon–Fri done-when bars strictly. |
| Scope creep in feedback | Frame the Day 7 preview as polish/corrections for launch. Park new-feature requests as post-launch. |
| DNS/SSL surprise on launch day | DNS is pointed on Day 7, not Day 8, so propagation and SSL have a full day of runway. |
| Payment timing | Building ahead of the deposit. Relationship call, made consciously. |

## Pre-launch checklist (run on Day 8)

- [ ] Domain resolves over HTTPS
- [ ] All six pages load on desktop + mobile
- [ ] Form submits and inquiry is received
- [ ] All links work (nav, socials, CTAs, platforms)
- [ ] No placeholder text or images remain
- [ ] No Wix references anywhere
- [ ] Favicon + OG images set
- [ ] Daud has signed off
