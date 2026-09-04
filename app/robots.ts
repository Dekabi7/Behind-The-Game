import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { siteConfig } from "@/lib/content";

const canonicalHost = new URL(siteConfig.url).host;

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host") ?? "";

  if (host !== canonicalHost) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
