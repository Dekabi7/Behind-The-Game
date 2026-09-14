import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BRAND_DOMAIN } from "@/lib/site-url";

// Until DNS is repointed (Day 7 of the build plan), every request hits this
// app through a *.vercel.app preview hostname. Keep those out of search
// results so they don't compete with behind-the-game.com once it goes live.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (host !== BRAND_DOMAIN) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
