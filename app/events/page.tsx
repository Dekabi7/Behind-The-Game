import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PanelistCard } from "@/components/panelist-card";
import { eventsContent, pageIntros } from "@/lib/content";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: pageIntros.events.title,
  description: pageIntros.events.description,
};

export default function EventsPage() {
  const { hero, cta } = eventsContent;

  return (
    <>
      <Section className="py-16 text-center sm:py-24">
        <span className="eyebrow text-accent">{hero.eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">{hero.body}</p>
      </Section>

      {events.map((event, index) => {
        const flipped = index % 2 === 1;
        return (
          <div key={event.slug} className="border-t border-border">
            <Section className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
              <div className={flipped ? "lg:order-2" : ""}>
                <span className="eyebrow text-accent">Recap</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {event.name}
                </h2>
                <p className="mt-4 text-sm font-medium uppercase tracking-wide text-text-muted">
                  {event.date} — {event.location}
                </p>
                {event.partner && (
                  <p className="mt-1 text-sm text-text-muted">With {event.partner}</p>
                )}
                <p className="mt-6 text-lg text-text-muted">{event.summary}</p>
              </div>
              <PlaceholderImage
                label={event.images[0].alt}
                src={event.images[0].src}
                aspect="aspect-[4/5]"
                className={flipped ? "lg:order-1" : ""}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Section>

            {event.panelists && (
              <Section className="border-t border-border py-16">
                <span className="eyebrow text-accent">Previous Panelists</span>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {event.panelists.map((panelist) => (
                    <PanelistCard key={panelist.name} panelist={panelist} />
                  ))}
                </div>
              </Section>
            )}

            {event.images.length > 1 && (
              <div
                className={`grid grid-cols-1 border-t border-border ${
                  event.images.length > 2 ? "sm:grid-cols-2" : ""
                }`}
              >
                {event.images.slice(1, 3).map((image) => (
                  <PlaceholderImage
                    key={image.src}
                    label={image.alt}
                    src={image.src}
                    aspect={image.aspect ?? "aspect-[21/9]"}
                    sizes={event.images.length > 2 ? "(min-width: 640px) 50vw, 100vw" : "100vw"}
                    objectPosition={image.objectPosition}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}

      <Section className="border-t border-border py-20 text-center">
        <span className="eyebrow text-accent">{cta.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">{cta.body}</p>
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
