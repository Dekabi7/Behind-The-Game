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
    { label: "YouTube", href: "https://www.youtube.com/@BehindtheGame01" },
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
      "Talent is everywhere. Access to opportunity is not. Behind the Game connects underserved students and student-athletes, particularly at HBCUs, to mentors, career paths, and real jobs across the global sports industry.",
  },
  digitalLandscape: {
    eyebrow: "Digital Landscape",
    title: "Digital Landscape",
    description:
      "Follow Behind the Game on Instagram, TikTok, LinkedIn, and YouTube.",
  },
  events: {
    eyebrow: "Symposium Series",
    title: "Events",
    description:
      "Recaps from the Behind the Game event series: Howard University (Feb 2026), Navigating the Industry at the University of Maryland (May 2026), and Bowie State University (Sept 2026).",
  },
  cv: {
    eyebrow: "Founder",
    title: "CV",
    description: "Placeholder copy — founder bio and background.",
  },
  articles: {
    eyebrow: "Articles",
    title: "All Posts",
    description:
      "Lessons, recaps, and practical advice from the Behind the Game community for students and student-athletes building a career in sports.",
  },
  getInvolved: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    description:
      "Speak on a panel, partner with us as a brand, or join as a student. Help Behind the Game open doors to careers in sports for students at HBCUs and beyond.",
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
      body: "Where it started: a student-led symposium at Howard University that put students in the same room as the professionals building careers in sports.",
    },
  },
  vision: {
    eyebrow: "Our Vision",
    statement:
      "A future where underserved and diverse communities have equitable pathways to lead, innovate, and thrive through opportunities in sports, education, technology, entrepreneurship, and related industries.",
  },
  mission: {
    eyebrow: "Our Mission",
    statement:
      "To educate, empower, and connect underserved and marginalized communities with educational, leadership, mentorship, and career opportunities in sports and related fields.",
    pillars: [
      "Education & experiential learning",
      "Mentorship & leadership development",
      "Career readiness & workforce development",
      "Innovation, entrepreneurship & community partnerships",
    ],
  },
  ecosystem: {
    eyebrow: "How We Connect",
    title: "Our Ecosystem",
    body: "Connecting people, education, community, and industry.",
    hub: {
      name: "Behind the Game",
      description: "A connector, educator, and opportunity platform.",
    },
    stakeholders: [
      { name: "Colleges & Universities", value: "Education + talent" },
      { name: "Industry Leaders", value: "Expertise + opportunity" },
      { name: "Communities", value: "Participants + local impact" },
      { name: "Nonprofits & Businesses", value: "Partnership + resources" },
    ],
  },
  programs: [
    {
      name: "Symposium Series",
      description:
        "Student-centered events where industry leaders share how they got in, and how students can too.",
    },
    {
      name: "Career Panels",
      description:
        "Focused conversations with working professionals in marketing, player affairs, agency, and operations.",
    },
    {
      name: "Mentorship",
      description:
        "One-to-one and small-group relationships that turn a conversation into guidance, introductions, and a next step.",
    },
    {
      name: "Tennis for Schools",
      description:
        "Structured tennis programming that builds discipline, consistency, and focus while connecting students to education, mentorship, and college and career preparation.",
    },
    {
      name: "Workshops & Career Exploration",
      description:
        "Hands-on sessions on resumes, networking, and understanding the business side of sports.",
    },
  ],
  pilot: {
    eyebrow: "Pilot Highlight",
    title: "Howard University, Feb 26, 2026",
    body: "On February 26, 2026, Behind the Game held its first symposium at Howard University. Students heard directly from industry professionals, asked the questions they rarely get to ask, and left with names, ideas, and next steps. It proved what we believed: when students are in the room, they belong in the industry. Since then, we've taken the work to the University of Maryland (May 2026) and Bowie State University (September 2026).",
  },
  cta: {
    eyebrow: "Get Involved",
    title: "Power the Future of Sports",
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
};

export const eventsContent = {
  hero: {
    eyebrow: "Symposium Series",
    title: "Moments Mean Everything",
    body: "Every Behind the Game symposium is built around one idea: moments mean everything. One conversation, one introduction, or one honest answer from someone who has done the job can change what a student believes is possible.",
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
    body: "The next generation of sports leaders is already on campus. They just need someone to open the door. Whether you bring a story, a platform, or your own ambition, there's a place for you in the room.",
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
    {
      title: "For Speakers",
      description:
        "Share how you got your start. One honest answer from someone who has done the job can change what a student believes is possible. Join a panel, lead a workshop, or mentor a student after the event ends.",
    },
    {
      title: "For Brand Partners",
      description:
        "Meet driven, diverse talent before anyone else does. Sponsor a symposium, bring your team to campus, or open internship pathways for students who are ready to work.",
    },
    {
      title: "For Students",
      description:
        "Get in the room with the people building careers in sports. Come to our events, ask the questions you rarely get to ask, and leave with names, contacts, and a next step.",
    },
  ],
};

export const cvContent = {
  intro: {
    eyebrow: "Founder",
    body: [
      "Daud Gantt-Bey is the Founder of Behind the Game Foundation, an organization dedicated to expanding access to careers in the sports industry by connecting students with professionals, mentorship, and meaningful opportunities. Through innovative programming and strategic partnerships, Daud is committed to building pathways that empower the next generation of sports leaders.",
      "A graduate of Hampton University with a bachelor's degree and American University with a master's degree, Daud combines his passion for sports, business, and community engagement to create experiences that inspire career exploration and professional growth. His work centers on community building, innovation, and fostering authentic relationships that drive lasting impact.",
      "Whether organizing career exposure events, developing strategic partnerships, or creating spaces where students can connect directly with industry leaders, Daud believes meaningful change begins with access, collaboration, and opportunity. His mission is to bridge the gap between talent and the sports industry by transforming curiosity into careers and building ecosystems where individuals and organizations can thrive together.",
      "Driven by creativity and a passion for service, Daud continues to champion initiatives that challenge traditional pathways, strengthen communities, and create opportunities that extend far beyond the game.",
    ],
  },
  name: "Daud Gantt-Bey",
  role: "Founder, Behind the Game",
  linkedinHref: "https://www.linkedin.com/in/daud-gantt-bey-m-s-487058195/",
  email: "hbcusportstour@gmail.com",
  projects: [
    { title: "CBA Project", description: "Placeholder project description.", href: "#" },
    { title: "Data Visualizations", description: "Placeholder project description.", href: "#" },
    { title: "CBA Recommendations", description: "Placeholder project description.", href: "#" },
  ],
};
