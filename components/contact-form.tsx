"use client";

import { useState } from "react";
import { getInvolvedContent } from "@/lib/content";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border border-border bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none";
const labelClasses = "mb-2 block text-sm font-medium text-text-muted";

export function ContactForm() {
  const [role, setRole] = useState<string>(getInvolvedContent.roles[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMessage(
        "Form isn't connected yet — set NEXT_PUBLIC_FORMSPREE_ID in .env.local."
      );
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setRole(getInvolvedContent.roles[0]);
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong — please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong — please try again.");
    }
  }

  if (status === "success") {
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
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClasses} />
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
      </div>

      {status === "error" && <p className="text-sm text-accent">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-text transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
