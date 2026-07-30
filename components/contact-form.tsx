"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { getInvolvedContent } from "@/lib/content";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const fieldClasses =
  "w-full border border-border bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none";
const labelClasses = "mb-2 block text-sm font-medium text-text-muted";
const fieldErrorClasses = "mt-2 text-sm text-accent";

export function ContactForm() {
  const [role, setRole] = useState<string>(getInvolvedContent.roles[0]);
  // useForm throws if given a falsy key, and hooks can't be called
  // conditionally — fall back to a placeholder that's never submitted
  // when the env var isn't set (the guard below skips rendering <form>).
  const [state, handleSubmit] = useForm(FORMSPREE_ID || "unconfigured");

  if (!FORMSPREE_ID) {
    return (
      <p className="text-sm text-accent">
        Form isn&apos;t connected yet — set NEXT_PUBLIC_FORMSPREE_ID in .env.local.
      </p>
    );
  }

  if (state.succeeded) {
    return (
      <div className="border border-border bg-surface p-8 text-center">
        <p className="font-display text-xl font-bold">Thanks — we&apos;ve got it.</p>
        <p className="mt-2 text-text-muted">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <span className="eyebrow text-accent">I am a…</span>
        <div className="mt-3 flex flex-wrap gap-3">
          {getInvolvedContent.roles.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRole(option)}
              aria-pressed={role === option}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                role === option
                  ? "border-accent bg-accent text-black"
                  : "border-border text-text-muted hover:border-accent hover:text-text"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="role" value={role} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClasses} />
          <ValidationError prefix="Name" field="name" errors={state.errors} className={fieldErrorClasses} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={fieldErrorClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="focusArea" className={labelClasses}>
          Focus area
        </label>
        <select id="focusArea" name="focusArea" required className={fieldClasses}>
          {getInvolvedContent.focusAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={fieldClasses} />
        <ValidationError prefix="Message" field="message" errors={state.errors} className={fieldErrorClasses} />
      </div>

      <ValidationError errors={state.errors} className={fieldErrorClasses} />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-text transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {state.submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
