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
    year: "2010",
    label: "Founded",
    title: "Raigad Tours founded with 3 tour packages",
    description: "Raigad Tours founded with 3 tour packages.",
    imageSlot: "era-1998",
  },
  {
    year: "2013",
    label: "Expansion",
    title: "Expanded to 15+ tours across Maharashtra",
    description: "Expanded to 15+ tours across Maharashtra.",
    imageSlot: "era-2005",
  },
  {
    year: "2016",
    label: "5,000 travellers",
    title: "Reached 5,000 happy travellers milestone",
    description: "Reached 5,000 happy travellers milestone.",
    imageSlot: "era-2015",
  },
  {
    year: "2018",
    label: "Trekking division",
    title: "Launched adventure trekking division",
    description: "Launched adventure trekking division.",
    imageSlot: "era-today",
  },
  {
    year: "2020",
    label: "Virtual tours",
    title: "Introduced virtual heritage tours during the pandemic",
    description: "Introduced virtual heritage tours during the pandemic.",
    imageSlot: "era-1998",
  },
  {
    year: "2023",
    label: "15,000+ travellers",
    title: "Crossed 15,000 travellers, 50+ tour packages",
    description: "Crossed 15,000 travellers, 50+ tour packages.",
    imageSlot: "era-2005",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Schools Served" },
  { value: 120000, suffix: "+", label: "Students Travelled" },
  { value: 27, suffix: "", label: "Years of Experience" },
];

export const MISSION_VALUES = [
  {
    title: "Sustainable Tourism",
    description:
      "We are committed to preserving Maharashtra's natural beauty and cultural heritage for future generations through responsible tourism practices.",
  },
  {
    title: "Authentic Experiences",
    description:
      "Every tour is designed to provide genuine, immersive experiences that connect travellers with local culture, history, and people.",
  },
  {
    title: "Safety & Trust",
    description:
      "Your safety is our top priority. All tours follow strict safety protocols with trained guides, emergency support, and insurance coverage.",
  },
];

