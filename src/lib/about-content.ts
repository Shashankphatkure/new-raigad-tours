/**
 * Placeholder narrative content for the About page.
 *
 * All copy, names, dates and figures below are illustrative and awaiting real
 * material from the Raigad Tours booklet — the structure is what's final here.
 */

export type TimelineEra = {
  year: string;
  label: string;
  title: string;
  description: string;
  imageSlot: "era-1998" | "era-2005" | "era-2015" | "era-today";
};

export const TIMELINE: TimelineEra[] = [
  {
    year: "1998",
    label: "The first trip",
    title: "One bus, forty students, one fort",
    description:
      "Raigad Tours began with a single hired bus and a history teacher who believed a fort should be climbed, not just read about. Forty students made the first journey to Raigad Fort.",
    imageSlot: "era-1998",
  },
  {
    year: "2005",
    label: "Beyond Maharashtra",
    title: "Routes open across western India",
    description:
      "Word travelled between staff rooms. By 2005 we were running curriculum-linked trips to Goa, Gujarat and the Deccan, with trained trip leaders on every departure.",
    imageSlot: "era-2005",
  },
  {
    year: "2015",
    label: "A safety standard",
    title: "Our safety protocol becomes formal",
    description:
      "After a decade of learning what school groups actually need, we wrote down our safety protocol — vetted operators, fixed ratios, medical cover, and a 24-hour contact line.",
    imageSlot: "era-2015",
  },
  {
    year: "Today",
    label: "Learning beyond classrooms",
    title: "Science centres, museums and living history",
    description:
      "Our itineraries now pair every monument with a working context — a science centre, a museum session, a factory floor, a naturalist's walk.",
    imageSlot: "era-today",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Schools Served" },
  { value: 120000, suffix: "+", label: "Students Travelled" },
  { value: 27, suffix: "", label: "Years of Experience" },
];

export const VALUES = [
  {
    title: "Curiosity first",
    description:
      "Every itinerary starts with a question worth answering, not a checklist of monuments.",
  },
  {
    title: "Safety without compromise",
    description:
      "Fixed staff ratios, vetted transport, and medical cover on every single departure.",
  },
  {
    title: "Respect for place",
    description:
      "We travel lightly, pay local guides fairly, and leave sites as we found them.",
  },
  {
    title: "Teachers as partners",
    description:
      "Trips are built with the teachers who know the syllabus and the students best.",
  },
];

export const SAFETY_PROMISES = [
  "Two trained trip leaders for every twenty students",
  "Government-certified drivers and regularly serviced coaches",
  "A qualified first-aider and medical kit on every departure",
  "24-hour emergency line staffed for the length of the trip",
  "Verified accommodation, inspected before every season",
  "Daily written check-ins with the school throughout",
];

export const TEAM = [
  {
    name: "Team member",
    role: "Founder & Trip Director",
    note: "Former history teacher. Has climbed Raigad over two hundred times.",
  },
  {
    name: "Team member",
    role: "Head of Safety",
    note: "Runs driver vetting, route checks and the emergency line.",
  },
  {
    name: "Team member",
    role: "Academic Coordinator",
    note: "Maps every itinerary to the syllabus with partner schools.",
  },
  {
    name: "Team member",
    role: "Senior Trip Leader",
    note: "Naturalist. Leads the Western Ghats and coastal ecology programmes.",
  },
];

export const TRUST_REASONS = [
  {
    title: "Permissions handled",
    description:
      "We prepare the parent consent packs, permission letters and documentation your office needs.",
  },
  {
    title: "Transparent pricing",
    description:
      "One quoted figure per student, itemised. No surcharges added after booking.",
  },
  {
    title: "Teachers travel free",
    description:
      "Accompanying staff travel at no cost, at the ratio your school policy requires.",
  },
  {
    title: "Food you can vouch for",
    description:
      "Vegetarian and Jain options as standard, from kitchens we have inspected ourselves.",
  },
];
