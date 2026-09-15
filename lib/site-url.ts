// Server-only. Do not import from a client component ("use client") — this
// reads Vercel's system env vars, which aren't exposed to the browser.

// The site's permanent brand domain. Fixed regardless of where the app is
// actually hosted right now — used only to decide what counts as "the real
// site" for the noindex-staging logic in proxy.ts and app/robots.ts.
export const BRAND_DOMAIN = "behind-the-game.com";

// Wherever this deployment is actually reachable right now.
//
// Originally this preferred VERCEL_PROJECT_PRODUCTION_URL on the assumption
// it would auto-update to the custom domain once one was attached as
// primary. Verified against the live site on Sept 15 (after DNS actually
// went live) that this assumption was wrong — it kept reporting the
// *.vercel.app alias even with behind-the-game.com correctly resolving,
// which meant the sitemap, OG image URLs, and canonical links were all
// pointing at the wrong domain in production. Using VERCEL_ENV instead,
// which is Vercel's documented, stable way to detect this:
// - production deployments (main branch) → the real brand domain, which
//   is safe now that it's confirmed live
// - preview deployments (other branches/PRs) → that deployment's own
//   VERCEL_URL, so previews don't claim to be the production domain
// - local dev → localhost
export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") {
    return `https://${BRAND_DOMAIN}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
