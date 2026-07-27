export const siteConfig = {
  name: "Behind the Game",
  legalName: "Behind the Game",
  tagline:
    "Connecting underserved students and student-athletes — particularly at HBCUs — to opportunities across the global sports industry.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://behindthegame.com",
};

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/digital-landscape", label: "Digital Landscape" },
  { href: "/events", label: "Events" },
  { href: "/cv", label: "CV" },
  { href: "/articles", label: "Articles" },
  { href: "/get-involved", label: "Get Involved" },
];

export const footerContent = {
  cta: {
    label: "Get Involved",
    href: "/get-involved",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export type PageIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export const pageIntros: Record<string, PageIntro> = {
  home: {
    eyebrow: "Sports Business & Consulting",
    title: "Behind the Game",
    description:
      "Placeholder hero copy — real copy lands Fri Jul 31. Connecting underserved students and student-athletes, particularly at HBCUs, to opportunities across the global sports industry.",
  },
  digitalLandscape: {
    eyebrow: "Digital Landscape",
    title: "Our Digital Presence",
    description:
      "Placeholder copy — where Behind the Game shows up across platforms, and how the content ecosystem serves the mission.",
  },
  events: {
    eyebrow: "Symposium Series",
    title: "Events",
    description:
      "Placeholder copy — recap of the Howard University symposium (March 2026) and details on the upcoming Maryland event.",
  },
  cv: {
    eyebrow: "Founder",
    title: "CV",
    description: "Placeholder copy — founder bio and background.",
  },
  articles: {
    eyebrow: "Articles",
    title: "All Posts",
    description: "Placeholder copy — blog index for Behind the Game articles.",
  },
  getInvolved: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    description:
      "Placeholder copy — for brands, students, and partners looking to work with Behind the Game.",
  },
};

export const homeContent = {
  hero: {
    ...pageIntros.home,
    ctaLabel: "See the Collection",
    ctaHref: "/events",
  },
  mission: {
    eyebrow: "Our Story",
    title: "Who We Are",
    body: "Placeholder mission copy — real copy lands Fri Jul 31.",
  },
  programs: [
    { name: "Program One", description: "Placeholder program description." },
    { name: "Program Two", description: "Placeholder program description." },
    { name: "Program Three", description: "Placeholder program description." },
    { name: "Program Four", description: "Placeholder program description." },
    { name: "Program Five", description: "Placeholder program description." },
  ],
  pilot: {
    eyebrow: "Pilot Highlight",
    title: "Howard University, March 2026",
    body: "Placeholder recap of the Howard pilot program — real copy and photography land Fri Jul 31.",
  },
  cta: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
};
