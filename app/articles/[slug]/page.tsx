import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getAllArticles, getArticleBySlug, formatArticleDate } from "@/lib/articles";

const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 font-display text-2xl font-bold tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 font-display text-xl font-bold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mt-5 leading-relaxed text-text-muted" {...props} />,
  a: (props) => (
    <a className="text-accent underline underline-offset-4 hover:opacity-80" {...props} />
  ),
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-text-muted" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-text-muted" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-accent pl-6 text-lg italic text-text" {...props} />
  ),
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-border px-4 py-2 text-sm font-semibold uppercase tracking-wide text-text-muted" {...props} />
  ),
  td: (props) => <td className="border-b border-border px-4 py-2 text-text-muted" {...props} />,
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article>
      <Section className="max-w-3xl py-16 sm:py-24">
        <span className="eyebrow text-accent">{formatArticleDate(article.frontmatter.date)}</span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {article.frontmatter.title}
        </h1>
        <p className="mt-6 text-lg text-text-muted">{article.frontmatter.excerpt}</p>
      </Section>

      <div className="border-t border-border">
        <PlaceholderImage label="Article hero image" aspect="aspect-[21/9]" />
      </div>

      <Section className="max-w-3xl py-16">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </Section>
    </article>
  );
}
