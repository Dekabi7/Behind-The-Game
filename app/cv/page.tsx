import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { cvContent } from "@/lib/content";

export default function CvPage() {
  const { intro, name, role, linkedinHref, email, projects } = cvContent;

  return (
    <>
      <Section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[280px_1fr] lg:items-start">
        <PlaceholderImage label="Founder photo" aspect="aspect-[4/5]" />

        <div>
          <span className="eyebrow text-accent">{intro.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
            {name}
          </h1>
          <p className="mt-2 text-text-muted">{role}</p>
          <p className="mt-6 max-w-2xl text-lg text-text-muted">{intro.body}</p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-wide">
            <Link href={linkedinHref} className="text-accent transition-colors hover:text-text">
              LinkedIn →
            </Link>
            <a href={`mailto:${email}`} className="text-accent transition-colors hover:text-text">
              {email}
            </a>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow text-accent">Projects</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
          Selected Work
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="block border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="font-display text-lg font-bold">{project.title}</p>
              <p className="mt-2 text-sm text-text-muted">{project.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
