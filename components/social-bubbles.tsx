import type { ReactNode } from "react";

type Social = {
  name: string;
  href: string;
  handle: string;
  icon: ReactNode;
};

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/behindthegame.0/",
    handle: "@behindthegame.0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.75" cy="6.25" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@behindthegame01",
    handle: "@behindthegame01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
        <path d="M16.5 2h-3.2v13.1a2.5 2.5 0 1 1-2-2.45V9.4a5.6 5.6 0 1 0 5.2 5.58V8.6a6.6 6.6 0 0 0 4 1.36V6.78A3.68 3.68 0 0 1 16.5 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/behindthegame-1-b84a7342a/",
    handle: "Behind the Game",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
        <path d="M16.5 8.25A5.25 5.25 0 0 1 21.75 13.5v7.5h-3.9v-7.5a1.35 1.35 0 0 0-2.7 0V21h-3.9v-7.5a5.25 5.25 0 0 1 5.25-5.25Z" />
        <rect x="2.25" y="9" width="3.9" height="12" rx="0.4" />
        <circle cx="4.2" cy="4.2" r="2.2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BehindtheGame01",
    handle: "@BehindtheGame01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.97C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
      </svg>
    ),
  },
];

export function SocialBubbles() {
  return (
    <ul className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
      {socials.map((social, index) => (
        <li key={social.name} className="flex justify-center">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 outline-none"
          >
            <span
              className="animate-float relative flex h-24 w-24 items-center justify-center motion-reduce:animate-none"
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              <span className="absolute inset-0 rounded-full border border-accent opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-70 group-focus-visible:scale-125 group-focus-visible:opacity-70" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-surface text-accent transition duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent-strong group-hover:text-text group-focus-visible:border-accent group-focus-visible:bg-accent-strong group-focus-visible:text-text">
                {social.icon}
              </span>
            </span>
            <span className="text-center">
              <span className="block font-display text-base font-bold transition-colors group-hover:text-accent group-focus-visible:text-accent">
                {social.name}
              </span>
              <span className="mt-1 block text-xs text-text-muted">{social.handle}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
