import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { eventsContent } from "@/lib/content";
import { events } from "@/lib/events";

export default function EventsPage() {
  const { hero, highlightsLabel, cta } = eventsContent;
  const pastEvent = events.find((event) => event.status === "past");
  const upcomingEvent = events.find((event) => event.status === "upcoming");

  return (
    <>
      <Section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow text-accent">{hero.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg text-text-muted">{hero.body}</p>
          {pastEvent && (
            <p className="mt-4 text-sm text-text-muted">
              {pastEvent.name} — {pastEvent.date}, {pastEvent.location}
            </p>
          )}
        </div>
        <PlaceholderImage label="Auditorium photo" aspect="aspect-[4/5]" />
      </Section>

      <div className="border-t border-border">
        <PlaceholderImage label={highlightsLabel} aspect="aspect-[21/9]" />
      </div>

      <Section className="border-t border-border py-20 text-center">
        <span className="eyebrow text-accent">{cta.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">
          {cta.title}
        </h2>
        {upcomingEvent && (
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            {upcomingEvent.name} — {upcomingEvent.date}, {upcomingEvent.location}
          </p>
        )}
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
