import type { ReactNode } from "react";

type Social = {
  name: string;
  href: string;
  handle: string;
  /** Olympic-rings placement on the 6-column grid: three up top, two nested below. */
  cell: string;
  icon: ReactNode;
};

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/behindthegame.0/",
    handle: "@behindthegame.0",
    cell: "col-span-2 col-start-1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
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
    cell: "col-span-2 col-start-3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M16.5 2h-3.2v13.1a2.5 2.5 0 1 1-2-2.45V9.4a5.6 5.6 0 1 0 5.2 5.58V8.6a6.6 6.6 0 0 0 4 1.36V6.78A3.68 3.68 0 0 1 16.5 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/behindthegame-1-b84a7342a/",
    handle: "Behind the Game",
    cell: "col-span-2 col-start-5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
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
    cell: "col-span-2 col-start-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.97C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/pbPkw6NVX",
    handle: "Join the server",
    cell: "col-span-2 col-start-4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M19.54 5.34a16.2 16.2 0 0 0-4.04-1.25l-.2.4a12.2 12.2 0 0 1 3.6 1.83 17.1 17.1 0 0 0-14.8 0 12.2 12.2 0 0 1 3.6-1.83l-.2-.4a16.2 16.2 0 0 0-4.04 1.25C.9 9.1.2 12.76.55 16.37a16.3 16.3 0 0 0 4.94 2.49l.99-1.55a10.6 10.6 0 0 1-1.7-.82l.42-.33a11.63 11.63 0 0 0 9.6 0l.42.33c-.54.32-1.1.6-1.7.82l.99 1.55a16.3 16.3 0 0 0 4.94-2.49c.4-4.18-.7-7.81-2.91-11.03ZM8.3 14.16c-.97 0-1.76-.9-1.76-2s.78-2 1.76-2c.98 0 1.77.9 1.76 2 0 1.1-.79 2-1.76 2Zm7.4 0c-.97 0-1.76-.9-1.76-2s.78-2 1.76-2c.98 0 1.77.9 1.76 2 0 1.1-.78 2-1.76 2Z" />
      </svg>
    ),
  },
];

export function SocialBubbles() {
  return (
    <ul className="mx-auto mt-16 grid max-w-3xl grid-cols-6 gap-x-1 gap-y-10 sm:gap-x-4 sm:gap-y-12">
      {socials.map((social, index) => (
        <li key={social.name} className={`${social.cell} flex justify-center`}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 outline-none sm:gap-4"
          >
            <span
              className="animate-float relative flex h-16 w-16 items-center justify-center motion-reduce:animate-none sm:h-24 sm:w-24"
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              <span className="absolute inset-0 rounded-full border border-accent opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-70 group-focus-visible:scale-125 group-focus-visible:opacity-70" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-surface text-accent transition duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent-strong group-hover:text-text group-focus-visible:border-accent group-focus-visible:bg-accent-strong group-focus-visible:text-text">
                {social.icon}
              </span>
            </span>
            <span className="text-center">
              <span className="block font-display text-sm font-bold transition-colors group-hover:text-accent group-focus-visible:text-accent sm:text-base">
                {social.name}
              </span>
              <span className="mt-1 block text-[11px] break-words text-text-muted sm:text-xs">{social.handle}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
