import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/content";

const canonicalHost = new URL(siteConfig.url).host;

// Until DNS is repointed (Day 7 of the build plan), every request hits this
// app through a *.vercel.app preview hostname. Keep those out of search
// results so they don't compete with behindthegame.com once it goes live.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (host !== canonicalHost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
