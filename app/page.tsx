import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { homeContent } from "@/lib/content";

export default function HomePage() {
  const { hero, mission, programs, pilot, cta } = homeContent;

  return (
    <>
      <Section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-text-muted">{hero.description}</p>
          <Link
            href={hero.ctaHref}
            className="mt-8 inline-flex items-center gap-2 border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-text"
          >
            {hero.ctaLabel}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <PlaceholderImage label="Howard pilot photo" aspect="aspect-[3/4]" />
          <PlaceholderImage label="BTG photo" aspect="aspect-[3/4]" className="mt-8" />
          <div className="col-span-2 border border-border bg-surface p-6">
            <span className="eyebrow">{hero.recap.meta}</span>
            <p className="mt-2 font-display text-xl font-bold">{hero.recap.title}</p>
            <p className="mt-2 text-sm text-text-muted">{hero.recap.body}</p>
          </div>
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-border py-20 lg:grid-cols-2 lg:items-center">
        <div className="order-2 flex items-center justify-center border border-border bg-surface p-10 lg:order-1">
          <p className="font-display text-2xl font-black tracking-tight">
            BEHIND THE GAME<span className="text-accent">.</span>
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">{mission.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
            {mission.title}
          </h2>
          <p className="mt-6 text-lg text-text-muted">{mission.body}</p>
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow">What We Do</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
          The Five Programs
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.name} className="border border-border p-6">
              <p className="font-display text-lg font-bold">{program.name}</p>
              <p className="mt-2 text-sm text-text-muted">{program.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-border py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">{pilot.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
            {pilot.title}
          </h2>
          <p className="mt-6 text-lg text-text-muted">{pilot.body}</p>
        </div>
        <PlaceholderImage label="Howard pilot recap photo" aspect="aspect-video" />
      </Section>

      <Section className="border-t border-border py-20 text-center">
        <span className="eyebrow">{cta.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">
          {cta.title}
        </h2>
        <Link
          href={cta.ctaHref}
          className="mt-8 inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-text transition-opacity hover:opacity-90"
        >
          {cta.ctaLabel}
        </Link>
      </Section>
    </>
  );
}
