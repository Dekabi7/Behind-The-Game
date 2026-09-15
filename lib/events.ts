export type EventStatus = "past" | "upcoming";

export type EventImage = {
  src: string;
  alt: string;
  /** CSS object-position. Only needed when the default center crop cuts off
   * the subject — e.g. a portrait photo forced into a wide aspect ratio. */
  objectPosition?: string;
  /** Highlight-strip aspect ratio override. Defaults to aspect-[21/9] (a
   * wide strip, meant for landscape photos) — set this when a highlight
   * image is a different shape, e.g. a portrait graphic. */
  aspect?: string;
};

export type Panelist = {
  name: string;
  title: string;
  image?: string;
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
  panelists?: Panelist[];
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
    panelists: [
      {
        name: "Shaun Scott",
        title: "Sports Marketing Manager, Under Armour Grassroots Basketball",
        image: "/images/events/panelists/shaun-scott.jpg",
      },
      {
        name: "Andrea Richardson",
        title: "Sr. Program Manager at The Trust (powered by the NFLPA)",
        image: "/images/events/panelists/andrea-richardson.jpg",
      },
      {
        name: "Jeffrey Oguamanam",
        title: "Sr. Lead: Diversity Equity and Inclusion, Under Armour",
        image: "/images/events/panelists/jeffrey-oguamanam.jpg",
      },
      {
        name: "Nicole Mahzoun",
        title: "Sr. Manager, Player Affairs at NFL Players Association",
        image: "/images/events/panelists/nicole-mahzoun.jpg",
      },
      {
        name: "Destiny May",
        title: "HR Specialist, NFL Players Association",
        image: "/images/events/panelists/destiny-may.jpg",
      },
      {
        name: "Anthony Johnson",
        title: "Sports Agent, Renaissance Sports Group",
        image: "/images/events/panelists/anthony-johnson.jpg",
      },
    ],
    images: [
      {
        src: "/images/events/maryland-01.jpg",
        alt: "The \"Navigating the Industry\" career panel underway in a University of Maryland auditorium, with panelist headshots projected on screen.",
      },
      {
        src: "/images/events/maryland-panelist-poster.jpg",
        alt: "\"Meet the Panelists\" graphic for Navigating the Industry, with headshots and titles for all six panelists.",
        aspect: "aspect-[4/5]",
      },
    ],
  },
];
