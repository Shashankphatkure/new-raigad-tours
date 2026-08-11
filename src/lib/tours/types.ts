export const TRIP_TYPES = [
  "Heritage Walk",
  "Science Tour",
  "Industrial Visit",
  "Weekend Trip",
  "Educational Tour",
] as const;

export const SEASONS = ["Monsoon", "Winter", "Summer"] as const;

export const DURATION_BANDS = [
  { id: "short", label: "1–2 days", min: 1, max: 2 },
  { id: "medium", label: "3–4 days", min: 3, max: 4 },
  { id: "long", label: "5+ days", min: 5, max: 99 },
] as const;

export const GRADE_BANDS = [
  { id: "primary", label: "Grades 4–6", min: 4, max: 6 },
  { id: "middle", label: "Grades 7–9", min: 7, max: 9 },
  { id: "senior", label: "Grades 10–12", min: 10, max: 12 },
] as const;

export type TripType = (typeof TRIP_TYPES)[number];
export type Season = (typeof SEASONS)[number];

export type Tour = {
  slug: string;
  title: string;
  /** Links back to the illustrated map's destination catalogue. */
  destinationId: string;
  destination: string;
  state: string;
  tripType: TripType;
  /** Indicative trip length, for filtering and display — not a fixed itinerary. */
  durationDays: number;
  durationLabel: string;
  gradeMin: number;
  gradeMax: number;
  gradesLabel: string;
  seasons: Season[];
  bestSeason: string;
  standfirst: string;
  overview: string;
  highlights: string[];
  educationalValue: string;
  imageSlot: string;
  gallerySlots: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  popular?: boolean;
};
