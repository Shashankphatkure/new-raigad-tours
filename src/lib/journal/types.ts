export const JOURNAL_CATEGORIES = [
  "Educational Resources",
  "Travel Tips",
  "Destination Guides",
  "Teacher Stories",
  "Student Diaries",
  "Photography Essays",
] as const;

export type JournalCategory = (typeof JOURNAL_CATEGORIES)[number];

/**
 * Article bodies are described as a block list rather than raw HTML/MDX, so the
 * editorial treatments (drop caps, pull quotes, galleries, maps) stay typed and
 * render through dedicated components.
 */
export type ArticleBlock =
  | { type: "paragraph"; text: string; dropCap?: boolean }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; slot: string; caption?: string }
  | { type: "gallery"; slots: string[]; caption?: string }
  | { type: "map"; destinationId: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  standfirst: string;
  category: JournalCategory;
  author: string;
  authorRole: string;
  date: string;
  /** ISO date, used for <time> and sorting. */
  isoDate: string;
  readingTime: number;
  /** Key into JOURNAL_IMAGES. */
  imageSlot: string;
  featured?: boolean;
  /** Destination ids from the hero map, linking stories to real journeys. */
  relatedJourneys?: string[];
  body: ArticleBlock[];
};
