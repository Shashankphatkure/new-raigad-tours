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

export const BUDGET_BANDS = [
  { id: "value", label: "Under ₹5,000", min: 0, max: 4999 },
  { id: "mid", label: "₹5,000 – ₹9,999", min: 5000, max: 9999 },
  { id: "premium", label: "₹10,000+", min: 10000, max: Number.MAX_SAFE_INTEGER },
] as const;

export type TripType = (typeof TRIP_TYPES)[number];
export type Season = (typeof SEASONS)[number];

export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
  activities: string[];
};

export type Tour = {
  slug: string;
  title: string;
  /** Links back to the illustrated map's destination catalogue. */
  destinationId: string;
  destination: string;
  state: string;
  tripType: TripType;
  durationDays: number;
  durationLabel: string;
  gradeMin: number;
  gradeMax: number;
  gradesLabel: string;
  seasons: Season[];
  bestSeason: string;
  /** Indicative per-student cost in INR. */
  priceFrom: number;
  standfirst: string;
  overview: string;
  highlights: string[];
  educationalValue: string;
  /** Three-line summary revealed on card hover. */
  shortItinerary: string[];
  itinerary: ItineraryDay[];
  learningOutcomes: string[];
  imageSlot: string;
  gallerySlots: string[];
  safety: string[];
  transport: string;
  meals: string;
  accommodation: string;
  teacherInfo: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  popular?: boolean;
};
