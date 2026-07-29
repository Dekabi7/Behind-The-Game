import Link from "next/link";
import { Section } from "@/components/section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { digitalLandscapeContent } from "@/lib/content";

export default function DigitalLandscapePage() {
  const { intro, platforms, communityImpact } = digitalLandscapeContent;

  return (
    <>
      <Section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow text-accent">{intro.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            {intro.title}
          </h1>
          <p className="mt-6 text-lg text-text-muted">{intro.body}</p>
        </div>
        <PlaceholderImage label="Panelist poster graphic" aspect="aspect-[4/5]" />
      </Section>

      <Section className="border-t border-border py-20">
        <span className="eyebrow text-accent">Where to Find Us</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
          Platforms
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {platforms.map((platform) => (
            <div key={platform.name} className="border border-border p-6">
              <p className="font-display text-lg font-bold">{platform.name}</p>
              <p className="mt-2 text-sm text-text-muted">{platform.description}</p>
              <Link
                href={platform.href}
                className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:text-text"
              >
                Visit Platform →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border py-20 text-center">
        <span className="eyebrow text-accent">{communityImpact.eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
          {communityImpact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">{communityImpact.body}</p>
      </Section>
    </>
  );
}
