export type EventStatus = "past" | "upcoming";

export type EventImage = {
  src: string;
  alt: string;
};

export type SiteEvent = {
  slug: string;
  name: string;
  status: EventStatus;
  date: string;
  location: string;
  partner?: string;
  summary: string;
  images: EventImage[];
};

export const events: SiteEvent[] = [
  {
    slug: "howard-symposium",
    name: "Howard University Symposium",
    status: "past",
    date: "February 26, 2026",
    location: "Howard University",
    summary:
      "Placeholder recap copy — real copy lands during content integration. The pilot symposium that started it all.",
    images: [
      {
        src: "/images/events/howard-01.jpg",
        alt: "A student in a maroon and brown varsity jacket sits at the edge of the stage, listening as panelists speak behind him.",
      },
      {
        src: "/images/events/howard-02.jpg",
        alt: "Two attendees in conversation near a brick wall during the symposium.",
      },
      {
        src: "/images/events/howard-03.jpg",
        alt: "A student in a varsity jacket with 'Community Fashion Inspiration' and 'Dreams of Triumph' patches, smiling toward the camera.",
      },
    ],
  },
  {
    slug: "maryland-symposium",
    name: "Navigating the Industry",
    status: "past",
    date: "May 1, 2026",
    location: "Gossett Hall, Glazer Auditorium — University of Maryland",
    partner: "Minorities in Sports, University of Maryland Chapter",
    summary:
      "Placeholder recap copy — real copy lands during content integration. A career panel connecting students directly with professionals across the sports industry.",
    images: [
      {
        src: "/images/events/maryland-01.jpg",
        alt: "The \"Navigating the Industry\" career panel underway in a University of Maryland auditorium, with panelist headshots projected on screen.",
      },
      {
        src: "/images/events/maryland-panelists.jpg",
        alt: "Panelists standing and talking near the stage after the \"Navigating the Industry\" panel.",
      },
      {
        src: "/images/events/maryland-02.jpg",
        alt: "A wide view of the University of Maryland auditorium during the panel, with Terrapins branding on the walls.",
      },
    ],
  },
];
