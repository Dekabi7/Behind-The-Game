import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { getInvolvedContent } from "@/lib/content";

export default function GetInvolvedPage() {
  const { hero, benefits } = getInvolvedContent;

  return (
    <>
      <Section className="py-16 text-center sm:py-24">
        <span className="eyebrow text-accent">{hero.eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">{hero.body}</p>
      </Section>

      <Section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border border-border p-6">
              <p className="font-display text-lg font-bold">{benefit.title}</p>
              <p className="mt-2 text-sm text-text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border py-20">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
