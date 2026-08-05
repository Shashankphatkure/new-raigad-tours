/**
 * Imagery for the Journal.
 *
 * Placeholder photography standing in for Raigad Tours' own trip archive.
 * Keys are stable — only src/alt should change when real photos arrive.
 */

const img = (base: string) => `${base}?w=1600&q=75&auto=format&fit=crop`;

export const JOURNAL_IMAGES: Record<string, { src: string; alt: string }> = {
  featured: {
    src: img("https://images.unsplash.com/photo-1754251055011-65052140d266"),
    alt: "Amber Fort in Jaipur on its hillside at twilight, reflected in still water",
  },
  "monsoon-ghats": {
    src: img("https://images.unsplash.com/photo-1776180040561-b0776ed2d3a7"),
    alt: "Waterfalls cascading down mist-covered green mountainsides in the Western Ghats during monsoon",
  },
  "cave-architecture": {
    src: img("https://images.unsplash.com/photo-1741207857655-d148b242178a"),
    alt: "A carved stone figure in the rock-cut Elephanta Caves, Maharashtra, lit by diffused cave light",
  },
  "students-notebook": {
    src: img("https://images.unsplash.com/photo-1560785496-3c9d27877182"),
    alt: "A young child bent over a notebook, working through problems",
  },
  "teacher-guiding": {
    src: img("https://images.unsplash.com/photo-1764072970350-2ce4f354a483"),
    alt: "Adults guiding a group of children along the edge of a lake on an outdoor field trip",
  },
  "coastal-village": {
    src: img("https://images.unsplash.com/photo-1723158524575-60362d6e7d6f"),
    alt: "Chinese fishing nets and moored wooden boats loaded with nets on the Kerala backwaters",
  },
  "night-sky": {
    src: img("https://images.unsplash.com/photo-1498611291069-aa296192f1e4"),
    alt: "The Milky Way arcing above a dark silhouetted mountain ridge",
  },
  "market-craft": {
    src: img("https://images.unsplash.com/photo-1607867810523-d10955f2a8df"),
    alt: "A potter in Tamil Nadu shaping a clay pot by hand while seated on the floor",
  },
  "railway-journey": {
    src: img("https://images.unsplash.com/photo-1685858874777-b87106319be7"),
    alt: "A railway track curving through dense green forest and hills near Dudhsagar, Goa",
  },
  "stepwell-geometry": {
    src: img("https://images.unsplash.com/photo-1680476560161-781c71d85be4"),
    alt: "Carved pillars and descending stone steps inside the Adalaj Stepwell, Gujarat",
  },
  "birds-wildlife": {
    src: img("https://images.unsplash.com/photo-1618471840051-483f7b11251c"),
    alt: "A peacock perched on a bare tree branch in Ambajogai, Maharashtra",
  },
  "archive-bw": {
    src: img("https://images.unsplash.com/photo-1649441243426-ec0a6aeb5a83"),
    alt: "Black-and-white street scene of a lone figure walking through long shadows in Surat, Gujarat",
  },
};
