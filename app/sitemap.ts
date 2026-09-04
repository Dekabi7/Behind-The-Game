import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";
import { getAllArticles } from "@/lib/articles";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/digital-landscape", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/events", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/cv", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/articles", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/get-involved", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: article.frontmatter.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...articleEntries];
}
