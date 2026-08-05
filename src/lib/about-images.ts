/**
 * Imagery for the About page.
 *
 * These are placeholder photographs standing in for Raigad Tours' own archive.
 * The brief calls for authentic, non-stock photography — that can only come
 * from the company's real trip photos, so every entry here is intended to be
 * swapped once those are supplied. Keys are stable; only src/alt should change.
 */

const img = (base: string) => `${base}?w=1600&q=75&auto=format&fit=crop`;

export const ABOUT_IMAGES: Record<string, { src: string; alt: string }> = {
  hero: {
    src: img("https://images.unsplash.com/photo-1763924041952-1a401796cc9e"),
    alt: "Visitors walking along a tree-lined path toward the gateway of Humayun's Tomb, New Delhi",
  },
  founder: {
    src: img("https://images.unsplash.com/photo-1772748036323-15713acdfbe6"),
    alt: "An older man looking ahead inside a thatched-roof market building in Pune",
  },
  "era-1998": {
    src: img("https://images.unsplash.com/photo-1698465246538-ad09b631dd6c"),
    alt: "Black and white photograph of passengers seated on a local bus in Tamil Nadu",
  },
  "era-2005": {
    src: img("https://images.unsplash.com/photo-1692269725836-fbd72e98883f"),
    alt: "Young children in school uniforms seated together in an Indian classroom",
  },
  "era-2015": {
    src: img("https://images.unsplash.com/photo-1646818550233-4c033f82399c"),
    alt: "Visitors spread across the stone ramparts of Golconda Fort, Hyderabad",
  },
  "era-today": {
    src: img("https://images.unsplash.com/photo-1764032758859-634187751c5d"),
    alt: "Children gathered around display cases looking at museum exhibits",
  },
  safety: {
    src: img("https://images.unsplash.com/photo-1764072970350-2ce4f354a483"),
    alt: "Adults supervising a group of children in bright safety vests on an outing beside a lake",
  },
  team: {
    src: img("https://images.unsplash.com/photo-1760992003927-96ac55e57296"),
    alt: "Three adults standing outdoors looking together at a tablet screen",
  },
  trust: {
    src: img("https://images.unsplash.com/photo-1771577125646-b38ed7b14411"),
    alt: "A man telling a story to a group of children sitting around him in a park",
  },
};
