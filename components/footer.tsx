import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-black tracking-tight">
            BEHIND THE GAME<span className="text-accent">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-text-muted">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {footerContent.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {social.label}
            </a>
          ))}
        </div>

        <Link
          href={footerContent.cta.href}
          className="eyebrow rounded-full border border-accent px-5 py-2 text-accent transition-colors hover:bg-accent hover:text-black"
        >
          {footerContent.cta.label}
        </Link>
      </div>
    </footer>
  );
}
