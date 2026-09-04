import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { pageIntros } from "@/lib/content";
import { getAllArticles, formatArticleDate } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHeader {...pageIntros.articles} />

      <Section className="grid gap-x-8 gap-y-14 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
            <PlaceholderImage label={article.frontmatter.title} aspect="aspect-[4/3]" />
            <span className="mt-4 block text-xs font-medium uppercase tracking-wide text-text-muted">
              {formatArticleDate(article.frontmatter.date)}
            </span>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
              {article.frontmatter.title}
            </h2>
            <p className="mt-2 text-text-muted">{article.frontmatter.excerpt}</p>
          </Link>
        ))}
      </Section>
    </>
  );
}
