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
      "Our pilot symposium, and the event that started it all. Students, student-athletes, and professionals gathered at Howard University for an open conversation about careers in sports, the paths people actually took, and how to start now.",
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
      "Hosted with Minorities in Sports, University of Maryland Chapter, in Gossett Hall's Glazer Auditorium. Panelists from Under Armour, the NFL Players Association, and Renaissance Sports Group walked students through their own career paths and answered questions on breaking in, building a network, and standing out. Students connected with the panelists directly and left with contacts they can follow up with.",
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
    ],
  },
  {
    slug: "bowie-state",
    name: "Bowie State University",
    status: "past",
    date: "September 17, 2026, 11:00 AM to 3:00 PM",
    location: "Bowie State University",
    summary:
      "Behind the Game brought its mission to Bowie State, another HBCU campus, for a four-hour afternoon with students. It was a chance to take what we learned at Howard and Maryland and test it with a new campus community.",
    images: [
      {
        src: "/images/events/bowie-state-01.jpg",
        alt: "Three people smile together in a classroom at Bowie State University during a Behind the Game event.",
      },
      {
        src: "/images/events/bowie-state-02.jpg",
        alt: "The \"Bulldog Nation\" mural with Bowie State's black-and-gold bulldog mascot on a hallway wall at Bowie State University.",
        objectPosition: "center 40%",
      },
    ],
  },
];
