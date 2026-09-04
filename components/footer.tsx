import Image from "next/image";
import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Behind the Game" width={483} height={501} className="h-12 w-auto" />
          <p className="max-w-xs text-sm text-text-muted">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {footerContent.socials.map((social) =>
            social.href === "#" ? (
              <span key={social.label} className="text-sm font-medium text-text-muted">
                {social.label}
              </span>
            ) : (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                {social.label}
              </a>
            ),
          )}
        </div>

        <Link
          href={footerContent.cta.href}
          className="eyebrow rounded-full border border-accent px-5 py-2 text-accent transition-colors hover:bg-accent-strong hover:text-text"
        >
          {footerContent.cta.label}
        </Link>
      </div>
    </footer>
  );
}
