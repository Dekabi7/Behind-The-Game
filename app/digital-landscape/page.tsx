import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SocialBubbles } from "@/components/social-bubbles";
import { pageIntros } from "@/lib/content";

export const metadata: Metadata = {
  title: pageIntros.digitalLandscape.title,
  description: pageIntros.digitalLandscape.description,
};

export default function DigitalLandscapePage() {
  return (
    <Section className="py-20 text-center sm:py-28">
      <span className="eyebrow text-accent">{pageIntros.digitalLandscape.eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
        Where to Find Us
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
        {pageIntros.digitalLandscape.description}
      </p>
      <SocialBubbles />
    </Section>
  );
}
