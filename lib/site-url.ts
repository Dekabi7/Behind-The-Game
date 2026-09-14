// Server-only. Do not import from a client component ("use client") — this
// reads Vercel's system env vars, which aren't exposed to the browser.

// The site's permanent brand domain. Fixed regardless of where the app is
// actually hosted right now — used only to decide what counts as "the real
// site" for the noindex-staging logic in proxy.ts and app/robots.ts.
export const BRAND_DOMAIN = "behind-the-game.com";

// Wherever this deployment is actually reachable right now. Auto-detects via
// Vercel's VERCEL_PROJECT_PRODUCTION_URL, which reflects the project's
// primary domain — currently the *.vercel.app alias, and will automatically
// become behind-the-game.com once DNS is repointed and it's set as the
// project's primary domain, with no code or env var changes needed.
export function getSiteUrl(): string {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
