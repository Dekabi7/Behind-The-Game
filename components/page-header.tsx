import type { PageIntro } from "@/lib/content";

export function PageHeader({ eyebrow, title, description }: PageIntro) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-8">
      <span className="eyebrow text-accent">{eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg text-text-muted">{description}</p>
    </div>
  );
}
