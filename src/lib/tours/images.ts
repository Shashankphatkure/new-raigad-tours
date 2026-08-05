/**
 * Imagery for the Tours pages.
 *
 * Placeholder photography standing in for Raigad Tours' own trip archive.
 * Keys are stable — only src/alt should change when real photos arrive.
 */

const img = (base: string) => `${base}?w=1600&q=75&auto=format&fit=crop`;

export const TOUR_IMAGES: Record<string, { src: string; alt: string }> = {
  "raigad-fort": {
    src: img("https://images.unsplash.com/photo-1560756718-59609860409c"),
    alt: "The valley below Raigad Fort in Maharashtra",
  },
  "monsoon-ghats": {
    src: img("https://images.unsplash.com/photo-1776180040561-b0776ed2d3a7"),
    alt: "Waterfalls cascading down mist-covered green mountainsides in the Western Ghats",
  },
  "cave-architecture": {
    src: img("https://images.unsplash.com/photo-1741207857655-d148b242178a"),
    alt: "A carved stone figure in the rock-cut Elephanta Caves, Maharashtra",
  },
  "coastal-village": {
    src: img("https://images.unsplash.com/photo-1723158524575-60362d6e7d6f"),
    alt: "Chinese fishing nets and moored wooden boats on the Kerala backwaters",
  },
  "stepwell-geometry": {
    src: img("https://images.unsplash.com/photo-1680476560161-781c71d85be4"),
    alt: "Carved pillars and descending stone steps inside the Adalaj Stepwell, Gujarat",
  },
  "railway-journey": {
    src: img("https://images.unsplash.com/photo-1685858874777-b87106319be7"),
    alt: "A railway track curving through dense green forest and hills near Dudhsagar, Goa",
  },
  "night-sky": {
    src: img("https://images.unsplash.com/photo-1498611291069-aa296192f1e4"),
    alt: "The Milky Way arcing above a dark silhouetted mountain ridge",
  },
  "market-craft": {
    src: img("https://images.unsplash.com/photo-1607867810523-d10955f2a8df"),
    alt: "A potter in Tamil Nadu shaping a clay pot by hand while seated on the floor",
  },
  "birds-wildlife": {
    src: img("https://images.unsplash.com/photo-1618471840051-483f7b11251c"),
    alt: "A peacock perched on a bare tree branch in Ambajogai, Maharashtra",
  },
  mumbai: {
    src: img("https://images.unsplash.com/photo-1665651175621-115a4858ee5e"),
    alt: "Crowd gathered in front of the Gateway of India in Mumbai",
  },
  mahabaleshwar: {
    src: img("https://images.unsplash.com/photo-1579609838707-12cd362e2597"),
    alt: "Green forested hills above a lake under an overcast sky in Mahabaleshwar",
  },

  "science-centre": {
    src: img("https://images.unsplash.com/photo-1588444543009-7db73c43514e"),
    alt: "A child silhouetted against backlit cases of animal skeletons in a darkened natural history museum",
  },
  "industrial-visit": {
    src: img("https://images.unsplash.com/photo-1764114909312-c27b89ec7223"),
    alt: "Workers at a metal fabrication workshop in Mumbai marking and cutting sheet metal by hand",
  },
  "observatory-night": {
    src: img("https://images.unsplash.com/photo-1582594657903-96b4ba495d4d"),
    alt: "A white observatory dome lit against a star-filled night sky",
  },
  "weekend-trip": {
    src: img("https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf"),
    alt: "A small wooden boat on Nainital lake with forested hills rising behind it",
  },
  "heritage-walk": {
    src: img("https://images.unsplash.com/photo-1685110191139-eb2caaac220d"),
    alt: "A lone figure walking through a narrow winding lane in the old quarter of Delhi",
  },
  "nature-camp": {
    src: img("https://images.unsplash.com/photo-1660819731358-e197f235eeb7"),
    alt: "A single tent pitched in an open field below mist-covered hills",
  },
  "students-group": {
    src: img("https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98"),
    alt: "Schoolchildren with matching backpacks walking away from the camera along a paved path",
  },
  accommodation: {
    src: img("https://images.unsplash.com/photo-1709805619372-40de3f158e83"),
    alt: "An eight-bed hostel dormitory in Pondicherry with metal bunk beds and daylight from a window",
  },
  meals: {
    src: img("https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5"),
    alt: "A steel thali plate with rice, dal, several curries, bread, yoghurt and a sweet",
  },
  "transport-coach": {
    src: img("https://images.unsplash.com/photo-1752563247435-8b1ee6107121"),
    alt: "A bus descending a winding mountain road through green hills in Himachal Pradesh",
  },
};
