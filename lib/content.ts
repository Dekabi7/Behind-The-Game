export const siteConfig = {
  name: "Behind the Game",
  legalName: "Behind the Game",
  tagline:
    "Connecting underserved students and student-athletes — particularly at HBCUs — to opportunities across the global sports industry.",
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
    { label: "Instagram", href: "https://www.instagram.com/behindthegame.0/" },
    { label: "TikTok", href: "https://www.tiktok.com/@behindthegame01" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/behindthegame-1-b84a7342a/" },
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
      "Placeholder hero copy — real copy lands during content integration. Connecting underserved students and student-athletes, particularly at HBCUs, to opportunities across the global sports industry.",
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
    ctaLabel: "View the Collection",
    ctaHref: "/events",
    recap: {
      meta: "Howard University — Feb 26, 2026",
      title: "Pilot Recap",
      body: "Placeholder recap card copy — real copy lands during content integration.",
    },
  },
  mission: {
    eyebrow: "Our Story",
    title: "Who We Are",
    body: "Placeholder mission copy — real copy lands during content integration.",
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
    title: "Howard University, Feb 26, 2026",
    body: "Placeholder recap of the Howard pilot program — real copy lands during content integration.",
  },
  cta: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
};

export const digitalLandscapeContent = {
  intro: {
    eyebrow: "Digital Landscape",
    title: "Our Digital Presence",
    body: "Placeholder philosophy copy — real copy lands during content integration. How Behind the Game shows up across platforms, and how the content ecosystem serves the mission.",
  },
  platforms: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/behindthegame.0/",
      description: "Placeholder platform description — real copy lands during content integration.",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@behindthegame01",
      description: "Placeholder platform description — real copy lands during content integration.",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/behindthegame-1-b84a7342a/",
      description: "Placeholder platform description — real copy lands during content integration.",
    },
    {
      name: "YouTube",
      href: "#",
      description: "Placeholder platform description — real copy and URL land during content integration.",
    },
  ],
  communityImpact: {
    eyebrow: "Community Impact",
    title: "Built With the Community",
    body: "Placeholder community impact copy — real copy lands during content integration.",
  },
};

export const eventsContent = {
  hero: {
    eyebrow: "Symposium Series",
    title: "Moments Mean Everything",
    body: "Placeholder recap copy — real copy lands during content integration.",
  },
  cta: {
    eyebrow: "What's Next",
    title: "Be Part of the Next One",
    body: "No symposium is on the calendar yet — get involved and be the first to hear when the next one is announced.",
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
};

export const getInvolvedContent = {
  hero: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    body: "Placeholder copy — real copy lands during content integration. For brands, students, and partners looking to work with Behind the Game.",
  },
  roles: ["Speaker", "Brand Partner", "Student"] as const,
  focusAreas: [
    "Mentorship",
    "Internships & Career Pathways",
    "Speaking & Panels",
    "Partnerships & Sponsorship",
    "Other",
  ],
  benefits: [
    { title: "Benefit One", description: "Placeholder benefit description — real copy lands during content integration." },
    { title: "Benefit Two", description: "Placeholder benefit description — real copy lands during content integration." },
    { title: "Benefit Three", description: "Placeholder benefit description — real copy lands during content integration." },
  ],
};

export const cvContent = {
  intro: {
    eyebrow: "Founder",
    body: "Placeholder bio copy — real copy lands during content integration.",
  },
  name: "Daud Gantt-Bay",
  role: "Founder, Behind the Game",
  linkedinHref: "https://www.linkedin.com/in/daud-gantt-bey-m-s-487058195/",
  email: "behindthegame@gmail.com",
  projects: [
    { title: "CBA Project", description: "Placeholder project description.", href: "#" },
    { title: "Data Visualizations", description: "Placeholder project description.", href: "#" },
    { title: "CBA Recommendations", description: "Placeholder project description.", href: "#" },
  ],
};
