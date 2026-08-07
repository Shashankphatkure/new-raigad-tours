import type { Destination, Region } from "./types";

const img = (base: string) => `${base}?w=1200&q=75&auto=format&fit=crop`;

/**
 * Destination catalogue for the hero map.
 *
 * `point` is the pin position within MAP_VIEWBOX (1024x1024) — computed by
 * linearly projecting each place's real `coordinates` onto the outline's
 * bounding box and verifying the result lands inside the actual landmass
 * (see map-geometry.ts for the outline's provenance). Not literal survey
 * cartography, but genuinely derived from real coordinates rather than
 * eyeballed.
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
    point: { x: 186.6, y: 650.1 },
    labelOffset: { dx: -46, dy: 4 },
    labelAnchor: "end",
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
    point: { x: 218.8, y: 669.6 },
    labelOffset: { dx: 42, dy: 6 },
    labelAnchor: "start",
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
    point: { x: 204, y: 661.4 },
    labelOffset: { dx: 32, dy: 30 },
    labelAnchor: "start",
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
    point: { x: 199.5, y: 653.2 },
    labelOffset: { dx: 32, dy: -28 },
    labelAnchor: "start",
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
    point: { x: 211.9, y: 690.3 },
    labelOffset: { dx: 0, dy: 44 },
    labelAnchor: "middle",
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
    point: { x: 216.6, y: 617.8 },
    labelOffset: { dx: 0, dy: -36 },
    labelAnchor: "middle",
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
    point: { x: 279.5, y: 598.3 },
    labelOffset: { dx: 54, dy: 6 },
    labelAnchor: "start",
  },
  {
    id: "old-goa",
    name: "Old Goa",
    region: "Goa",
    title: "Basilicas of the Portuguese Capital",
    description:
      "The former capital of Portuguese India, its UNESCO-listed basilicas and a cloistered archaeological museum read together as four centuries of colonial and religious history.",
    duration: "Half Day",
    highlights: [
      "Basilica of Bom Jesus",
      "Se Cathedral",
      "St. Cajetan Church",
      "Archaeological Museum",
    ],
    grades: "Grades 5–12",
    tripType: "Historical",
    image: "/images/goa/old-goa.jpg",
    imageAlt: "The ornate Baroque stone facade of the Basilica of Bom Jesus in Old Goa",
    coordinates: { lat: 15.5037, lng: 73.9114 },
    point: { x: 234, y: 776 },
    labelOffset: { dx: 26, dy: -18 },
    labelAnchor: "start",
  },
  {
    id: "fort-aguada",
    name: "Fort Aguada",
    region: "Goa",
    title: "Coastal Defence & the Arabian Sea",
    description:
      "A 17th-century Portuguese fort and lighthouse guarding the mouth of the Mandovi, read as a lesson in maritime history, fort architecture and coastal geography.",
    duration: "Half Day",
    highlights: [
      "Portuguese fort",
      "Lighthouse",
      "Arabian Sea views",
      "Coastal defense history",
    ],
    grades: "Grades 6–12",
    tripType: "Coastal",
    image: "/images/goa/fort-aguada.png",
    imageAlt:
      "Fort Aguada's white lighthouse and moated Portuguese fort walls above the Arabian Sea",
    coordinates: { lat: 15.4909, lng: 73.7736 },
    point: { x: 200, y: 760 },
    labelOffset: { dx: -10, dy: -28 },
    labelAnchor: "end",
  },
  {
    id: "goa-science-centre",
    name: "Goa Science Centre",
    region: "Goa",
    title: "Planetarium & Hands-On STEM",
    description:
      "Interactive physics and space-science exhibits paired with a planetarium show and robotics demonstrations — a hands-on STEM afternoon in Panaji.",
    duration: "Half Day",
    highlights: [
      "Interactive exhibits",
      "Planetarium",
      "Science demonstrations",
      "Robotics exhibits",
    ],
    grades: "Grades 3–10",
    tripType: "Science",
    image: "/images/goa/goa-science-centre.jpg",
    imageAlt: "The entrance building of the Goa Science Centre in Panaji, with its fountain",
    coordinates: { lat: 15.4614, lng: 73.8074 },
    point: { x: 206, y: 798 },
    labelOffset: { dx: -8, dy: 32 },
    labelAnchor: "end",
  },
  {
    id: "dudhsagar-falls",
    name: "Dudhsagar Falls",
    region: "Goa",
    title: "India's Tallest Falls & Western Ghats Ecology",
    description:
      "A four-tiered waterfall inside the Bhagwan Mahavir sanctuary, studied alongside Western Ghats biodiversity and the railway line that threads directly past it.",
    duration: "Full Day",
    highlights: [
      "India's tallest waterfall",
      "Western Ghats biodiversity",
      "Forest ecosystem",
      "Railway engineering",
    ],
    grades: "Grades 5–12",
    tripType: "Nature",
    image: "/images/goa/dudhsagar-falls.png",
    imageAlt: "Dudhsagar Falls cascading down a misty rock face in the Western Ghats",
    coordinates: { lat: 15.3144, lng: 74.3144 },
    point: { x: 272, y: 772 },
    labelOffset: { dx: 34, dy: 2 },
    labelAnchor: "start",
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
    point: { x: 371.2, y: 709.5 },
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    title: "Stepwells, Sabarmati & Textile Mills",
    description:
      "Adalaj's stepwell engineering, the Sabarmati Ashram, and a working textile mill visit.",
    duration: "4 Days",
    highlights: [
      "Sabarmati Ashram",
      "Adalaj Stepwell",
      "Kankaria Lake",
      "Science City",
    ],
    grades: "Grades 7–12",
    tripType: "Industrial",
    image: img("https://images.unsplash.com/photo-1741207730591-79ec31061e62"),
    imageAlt:
      "Symmetrical carved stone pillars inside the Adalaj Stepwell in Gujarat",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    point: { x: 186.5, y: 503.6 },
    labelOffset: { dx: -10, dy: -26 },
    labelAnchor: "end",
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    region: "Gujarat",
    title: "The World's Tallest Statue & the Making of a Nation",
    description:
      "A 182-metre tribute to Sardar Patel above the Narmada dam, read through the engineering that built it and the story of how India's princely states became one country.",
    duration: "Full Day",
    highlights: [
      "World's tallest statue",
      "Viewing Gallery",
      "Valley of Flowers",
      "Museum & Audio-Visual Gallery",
    ],
    grades: "Grades 5–12",
    tripType: "Historical",
    image: "/images/gujarat/statue-of-unity.png",
    imageAlt: "The Statue of Unity rising above the Narmada valley near Kevadia",
    coordinates: { lat: 21.838, lng: 73.7192 },
    point: { x: 222, y: 547 },
    labelOffset: { dx: 24, dy: 8 },
    labelAnchor: "start",
  },
  {
    id: "gir-national-park",
    name: "Gir National Park",
    region: "Gujarat",
    title: "The Last Wild Asiatic Lions",
    description:
      "A jeep safari through the only place on Earth with wild Asiatic lions, paired with the interpretation centre's work on habitat conservation and dry-forest ecology.",
    duration: "Full Day",
    highlights: [
      "Asiatic Lions",
      "Jeep Safari",
      "Wildlife Interpretation Centre",
      "Forest Ecosystem",
    ],
    grades: "Grades 5–12",
    tripType: "Nature",
    image: "/images/gujarat/gir-national-park.png",
    imageAlt: "Two wild Asiatic lions resting in the dry forest of Gir National Park",
    coordinates: { lat: 21.1244, lng: 70.7942 },
    point: { x: 133, y: 572 },
    labelOffset: { dx: 0, dy: 34 },
    labelAnchor: "middle",
  },
  {
    id: "dwarka",
    name: "Dwarka",
    region: "Gujarat",
    title: "Temple Spires at the Edge of the Arabian Sea",
    description:
      "One of Hinduism's char dham sites and a candidate for India's oldest submerged port city, studied through temple architecture, maritime trade history and coastal geography.",
    duration: "Full Day",
    highlights: [
      "Dwarkadhish Temple",
      "Bet Dwarka",
      "Lighthouse",
      "Coastal Geography",
    ],
    grades: "Grades 6–12",
    tripType: "Historical",
    image: "/images/gujarat/dwarka.png",
    imageAlt: "The carved spire of the Dwarkadhish Temple rising above the Gomti creek",
    coordinates: { lat: 22.2394, lng: 68.9678 },
    point: { x: 92, y: 533 },
    labelOffset: { dx: -8, dy: -24 },
    labelAnchor: "end",
  },
];

/**
 * Regional groupings shown on the default, collapsed India view. Each
 * region's `zoom` focal point and level are hand-tuned so the camera settles
 * with that region comfortably readable while neighbouring regions (and
 * India's shape as a whole) stay visible around it — a modest 1.6-2x, not a
 * tile-style zoom-to-fill. See IndiaMap.tsx / MapCamera.tsx for how these
 * drive the camera. `homePoint` is where the bus waits once a region is
 * entered; it's intentionally distinct from the shared HOME_POINT (the real
 * Mahad office used by ContactMap), since the bus should read as "based near
 * Mumbai" for this exploratory experience.
 */
export const REGIONS: Region[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    marker: { x: 216.7, y: 640 },
    zoom: { cx: 236, cy: 658, zoom: 2 },
    homePoint: { x: 186.6, y: 650.1 },
  },
  {
    id: "gujarat",
    name: "Gujarat",
    marker: { x: 186.5, y: 503.6 },
    zoom: { cx: 153, cy: 539, zoom: 2.2 },
    homePoint: { x: 206.5, y: 519.6 },
  },
  {
    id: "goa",
    name: "Goa",
    marker: { x: 227.6, y: 782.7 },
    zoom: { cx: 228, cy: 778, zoom: 1.9 },
    homePoint: { x: 225, y: 825 },
  },
  {
    id: "telangana",
    name: "Telangana",
    marker: { x: 371.2, y: 709.5 },
    zoom: { cx: 371.2, cy: 709.5, zoom: 1.7 },
    homePoint: { x: 351.2, y: 693.5 },
  },
];
