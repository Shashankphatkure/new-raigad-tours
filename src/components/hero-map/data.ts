import type { Destination } from "./types";

const img = (base: string) => `${base}?w=1200&q=75&auto=format&fit=crop`;

/**
 * Destination catalogue for the hero map.
 *
 * `point` is the pin position within MAP_VIEWBOX (1000x1100); `coordinates`
 * holds the real lat/lng, kept for future search/filter/real-map features.
 *
 * Trip copy is placeholder content pending real material from the booklet.
 */
export const DESTINATIONS: Destination[] = [
  {
    id: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    title: "Gateway City: Heritage & Harbour",
    description:
      "Colonial architecture, the working harbour, and a city museum session tracing how Bombay became Mumbai.",
    duration: "2 Days",
    highlights: ["Gateway of India", "CSMVS Museum", "Harbour walk"],
    grades: "Grades 6–12",
    tripType: "Historical",
    image: img("https://images.unsplash.com/photo-1665651175621-115a4858ee5e"),
    imageAlt:
      "Crowd gathered in front of the Gateway of India stone monument in Mumbai",
    coordinates: { lat: 19.076, lng: 72.8777 },
    point: { x: 322, y: 668 },
  },
  {
    id: "pune",
    name: "Pune",
    region: "Maharashtra",
    title: "Peshwa Capital & Science Centres",
    description:
      "Shaniwar Wada's fortified history paired with a hands-on afternoon at a working science centre.",
    duration: "2 Days",
    highlights: ["Shaniwar Wada", "Science centre", "Aga Khan Palace"],
    grades: "Grades 5–10",
    tripType: "Science",
    image: img("https://images.unsplash.com/photo-1565805672329-7b49cd8be8ef"),
    imageAlt:
      "Indian flag waving beside the fortified walls of Shaniwar Wada in Pune",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    point: { x: 372, y: 660 },
  },
  {
    id: "lonavala",
    name: "Lonavala",
    region: "Maharashtra",
    title: "Ghats, Caves & Monsoon Geography",
    description:
      "A field-study weekend on Western Ghats geology, rainfall patterns, and the Karla rock-cut caves.",
    duration: "2 Days",
    highlights: ["Karla Caves", "Ghat viewpoints", "Rainfall study"],
    grades: "Grades 6–9",
    tripType: "Nature",
    image: img("https://images.unsplash.com/photo-1589286875480-743411b84f53"),
    imageAlt:
      "Green hillside under a blue sky with white clouds at Lonavala hill station",
    coordinates: { lat: 18.7546, lng: 73.4062 },
    point: { x: 352, y: 646 },
  },
  {
    id: "matheran",
    name: "Matheran",
    region: "Maharashtra",
    title: "Toy Train & Forest Ecology",
    description:
      "India's only vehicle-free hill station, reached by narrow-gauge railway, with a guided forest ecology walk.",
    duration: "2 Days",
    highlights: ["Narrow-gauge railway", "Forest trails", "No-vehicle zone"],
    grades: "Grades 4–8",
    tripType: "Hill Station",
    image: img("https://images.unsplash.com/photo-1659385861464-80ec555aa2d4"),
    imageAlt:
      "Narrow-gauge railway tracks disappearing into misty forest at Matheran",
    coordinates: { lat: 18.9866, lng: 73.2707 },
    point: { x: 338, y: 652 },
  },
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar",
    region: "Maharashtra",
    title: "Plateau Ecology & River Sources",
    description:
      "Tracing the Krishna's source across the plateau, with strawberry-farm visits and valley viewpoint study.",
    duration: "3 Days",
    highlights: ["Krishna source", "Plateau ecology", "Valley viewpoints"],
    grades: "Grades 5–10",
    tripType: "Nature",
    image: img("https://images.unsplash.com/photo-1579609838707-12cd362e2597"),
    imageAlt:
      "Green forested hills above a lake under an overcast sky in Mahabaleshwar",
    coordinates: { lat: 17.9307, lng: 73.6477 },
    point: { x: 366, y: 700 },
  },
  {
    id: "nashik",
    name: "Nashik",
    region: "Maharashtra",
    title: "Godavari Ghats & Industry Visits",
    description:
      "River-city heritage along the Godavari alongside guided visits to food-processing and bottling plants.",
    duration: "2 Days",
    highlights: ["Godavari ghats", "Industrial visit", "Pandavleni Caves"],
    grades: "Grades 8–12",
    tripType: "Industrial",
    image: img("https://images.unsplash.com/photo-1694667509674-676629c9d069"),
    imageAlt: "River running through the city of Nashik with buildings along the bank",
    coordinates: { lat: 19.9975, lng: 73.7898 },
    point: { x: 366, y: 606 },
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora",
    region: "Maharashtra",
    title: "Rock-Cut Caves of the Deccan",
    description:
      "Two UNESCO cave complexes studied together — Buddhist painting at Ajanta, monolithic architecture at Ellora.",
    duration: "3 Days",
    highlights: ["Ajanta murals", "Kailasa Temple", "UNESCO sites"],
    grades: "Grades 7–12",
    tripType: "Historical",
    image: img("https://images.unsplash.com/photo-1701430662581-fbda7edaa84a"),
    imageAlt:
      "Rock-cut stone temple structures at the Ellora Caves with a green hillside behind",
    coordinates: { lat: 20.5519, lng: 75.7002 },
    point: { x: 410, y: 596 },
  },
  {
    id: "goa",
    name: "Goa",
    region: "Goa",
    title: "Coastal Ecology & Colonial History",
    description:
      "Beach and estuary ecology fieldwork paired with the Portuguese-era churches and museums of Old Goa.",
    duration: "4 Days",
    highlights: ["Coastal ecology", "Old Goa churches", "Spice plantation"],
    grades: "Grades 6–12",
    tripType: "Coastal",
    image: img("https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a"),
    imageAlt: "Palm trees along the shoreline at Palolem Beach in Goa",
    coordinates: { lat: 15.2993, lng: 74.124 },
    point: { x: 350, y: 762 },
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    title: "Charminar, Golconda & Planetarium",
    description:
      "Qutb Shahi architecture and acoustics at Golconda, closing with an evening planetarium session.",
    duration: "4 Days",
    highlights: ["Charminar", "Golconda Fort", "Planetarium"],
    grades: "Grades 6–12",
    tripType: "Historical",
    image: img("https://images.unsplash.com/photo-1741545979534-02f59c742730"),
    imageAlt:
      "The Charminar monument with its four minarets above a busy market under a blue sky",
    coordinates: { lat: 17.385, lng: 78.4867 },
    point: { x: 470, y: 714 },
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    title: "Stepwells, Sabarmati & Textile Mills",
    description:
      "Adalaj's stepwell engineering, the Sabarmati Ashram, and a working textile mill visit.",
    duration: "4 Days",
    highlights: ["Adalaj Stepwell", "Sabarmati Ashram", "Textile mill"],
    grades: "Grades 7–12",
    tripType: "Industrial",
    image: img("https://images.unsplash.com/photo-1741207730591-79ec31061e62"),
    imageAlt:
      "Symmetrical carved stone pillars inside the Adalaj Stepwell in Gujarat",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    point: { x: 288, y: 470 },
  },
];
