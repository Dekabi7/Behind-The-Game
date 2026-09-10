import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { homeContent } from "@/lib/content";

export default function HomePage() {
  const { hero, vision, mission, ecosystem, programs, pilot, cta } = homeContent;

  return (
    <>
      <Section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow text-accent">{hero.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-text-muted">{hero.description}</p>
          <Link
            href={hero.ctaHref}
            className="mt-8 inline-flex items-center gap-2 border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent-strong hover:text-text"
          >
            {hero.ctaLabel}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <PlaceholderImage
            label="A student in a maroon and brown varsity jacket sits at the edge of the stage, listening as panelists speak behind him."
            src="/images/events/howard-01.jpg"
            aspect="aspect-[3/4]"
            sizes="(min-width: 1024px) 260px, 45vw"
          />
          <PlaceholderImage
            label="A student in a varsity jacket with 'Community Fashion Inspiration' and 'Dreams of Triumph' patches, smiling toward the camera."
            src="/images/events/howard-03.jpg"
            aspect="aspect-[3/4]"
            className="mt-8"
            sizes="(min-width: 1024px) 260px, 45vw"
          />
          <div className="col-span-2 border border-border bg-surface p-6">
            <span className="eyebrow text-accent">{hero.recap.meta}</span>
            <p className="mt-2 font-display text-xl font-bold">{hero.recap.title}</p>
            <p className="mt-2 text-sm text-text-muted">{hero.recap.body}</p>
          </div>
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-border py-20 lg:grid-cols-2 lg:items-center">
        <div className="order-2 flex items-center justify-center border border-border bg-surface p-10 lg:order-1">
          <Image src="/images/logo.png" alt="Behind the Game" width={483} height={501} className="h-40 w-auto" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow text-accent">{vision.eyebrow}</span>
          <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {vision.statement}
          </p>
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow text-accent">{mission.eyebrow}</span>
        <p className="mt-4 max-w-3xl font-display text-xl font-bold tracking-tight sm:text-2xl">
          {mission.statement}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mission.pillars.map((pillar) => (
            <div key={pillar} className="border border-border p-6">
              <p className="text-text-muted">{pillar}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow text-accent">{ecosystem.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {ecosystem.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-text-muted">{ecosystem.body}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <div className="border border-accent bg-accent-strong p-6 text-text lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:flex-col lg:justify-center">
            <p className="font-display text-lg font-bold">{ecosystem.hub.name}</p>
            <p className="mt-2">{ecosystem.hub.description}</p>
          </div>
          {ecosystem.stakeholders.map((stakeholder, index) => {
            const rowClass = index < 2 ? "lg:row-start-1" : "lg:row-start-2";
            const colClass = index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-3";
            return (
              <div key={stakeholder.name} className={`border border-border p-6 ${rowClass} ${colClass}`}>
                <p className="font-display text-lg font-bold">{stakeholder.name}</p>
                <p className="mt-2 text-text-muted">{stakeholder.value}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow text-accent">What We Do</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
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
          <span className="eyebrow text-accent">{pilot.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {pilot.title}
          </h2>
          <p className="mt-6 text-lg text-text-muted">{pilot.body}</p>
        </div>
        <PlaceholderImage
          label="Two attendees in conversation near a brick wall during the Howard University symposium."
          src="/images/events/howard-02.jpg"
          aspect="aspect-video"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </Section>

      <Section className="border-t border-border py-20 text-center">
        <span className="eyebrow text-accent">{cta.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {cta.title}
        </h2>
        <Link
          href={cta.ctaHref}
          className="mt-8 inline-flex items-center gap-2 bg-accent-strong px-8 py-4 text-sm font-semibold uppercase tracking-wide text-text transition-opacity hover:opacity-90"
        >
          {cta.ctaLabel}
        </Link>
      </Section>
    </>
  );
}
