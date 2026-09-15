"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Panelist } from "@/lib/events";

const AUTO_HIDE_MS = 3000;

export function PanelistCard({ panelist }: { panelist: Panelist }) {
  const [revealed, setRevealed] = useState(false);

  // Tapping opens the headshot on mobile (no hover to close it), so auto-hide
  // it after a few seconds instead of leaving it up until the next tap.
  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => setRevealed(false), AUTO_HIDE_MS);
    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <div
      role={panelist.image ? "button" : undefined}
      tabIndex={panelist.image ? 0 : undefined}
      onClick={() => setRevealed((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRevealed((v) => !v);
        }
      }}
      className={`group relative border border-border p-6 ${panelist.image ? "cursor-pointer" : ""}`}
    >
      {panelist.image && (
        <div
          className={`pointer-events-none absolute inset-x-0 -top-4 z-10 flex -translate-y-full justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
            revealed ? "opacity-100" : ""
          }`}
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-accent bg-surface shadow-lg">
            <Image src={panelist.image} alt={panelist.name} fill sizes="128px" className="object-cover" />
          </div>
        </div>
      )}
      <p className="font-display text-lg font-bold">{panelist.name}</p>
      <p className="mt-2 text-sm text-text-muted">{panelist.title}</p>
    </div>
  );
}
