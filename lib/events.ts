export type EventStatus = "past" | "upcoming";

export type SiteEvent = {
  slug: string;
  name: string;
  status: EventStatus;
  date: string;
  location: string;
  summary: string;
};

export const events: SiteEvent[] = [
  {
    slug: "howard-symposium",
    name: "Howard University Symposium",
    status: "past",
    date: "March 2026",
    location: "Howard University",
    summary:
      "Placeholder recap of the Howard pilot symposium — real copy and photography land Fri Jul 31.",
  },
  {
    slug: "maryland-symposium",
    name: "Maryland Symposium",
    status: "upcoming",
    date: "Date TBD",
    location: "University of Maryland",
    summary: "Placeholder — Maryland event details land Fri Jul 31.",
  },
];
