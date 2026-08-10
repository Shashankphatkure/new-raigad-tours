/**
 * Imagery for the Day Picnics page.
 *
 * Every venue has a real, identifiable photo of the actual place. Four were
 * sourced from Wikimedia Commons (openly licensed for reuse with
 * attribution): Aquamagica (the Nitro coaster, shared with the adjacent
 * Imagica park), Suraj Waterpark, Essel World Water Kingdom and Saguna Baug.
 * The rest were supplied directly for each destination.
 *
 * Keys are stable; only src/alt/credit need to change when photos are updated.
 */

const img = (base: string) => `${base}?w=1600&q=75&auto=format&fit=crop`;

type PicnicImage = {
  src: string;
  alt: string;
  /** Set only for genuine, identifiable photos of the real venue. */
  credit?: string;
  /** True when this is a generic stand-in, not a photo of the actual venue. */
  placeholder?: boolean;
};

export const DAY_PICNIC_IMAGES: Record<string, PicnicImage> = {
  hero: {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled pool at a water park, palm trees behind",
    placeholder: true,
  },

  imagica: {
    src: "/images/day-picnics/imagica.png",
    alt: "The illuminated lotus fountain and pirate ship at dusk, Adlabs Imagica, Khopoli",
  },

  // ---- Wikimedia Commons (CC BY-SA, attribution required) ----
  "suraj-waterpark": {
    src: "/images/day-picnics/suraj-waterpark.jpg",
    alt: "Suraj Waterpark, Thane",
    credit: "Parthan, CC BY-SA 2.0, via Wikimedia Commons",
  },
  "essel-world-water-kingdom": {
    src: "/images/day-picnics/essel-world-water-kingdom.jpg",
    alt: "A water splash ride at Water Kingdom, EsselWorld, Gorai",
    credit: "CC BY-SA 3.0, via Wikimedia Commons",
  },
  "saguna-baug": {
    src: "/images/day-picnics/saguna-baug.jpg",
    alt: "Saguna Baug farm at Neral, at the foothills of Matheran",
    credit: "Pralhad Bandivadekar, CC BY-SA 3.0, via Wikimedia Commons",
  },

  // ---- Venue photography ----
  "bk-water-park": {
    src: "/images/day-picnics/bk-water-park.webp",
    alt: "The wave pool and slide tower at BK Water Park, its signage visible at right",
  },
  kidzania: {
    src: "/images/day-picnics/kidzania.webp",
    alt: "The airport-themed entrance desks at KidZania Mumbai, with the welcome sign overhead",
  },
  "wet-n-joy-amusement": {
    src: "/images/day-picnics/wet-n-joy-amusement.jpg",
    alt: "A carousel ride at Wet N Joy's amusement park, Lonavala",
  },
  "wet-n-joy-waterpark": {
    src: "/images/day-picnics/wet-n-joy-waterpark.webp",
    alt: "An aerial view of the lazy river and slide tower at Wet N Joy's water park, Lonavala, with the Sahyadri hills behind",
  },
  shivganga: {
    src: "/images/day-picnics/shivganga.webp",
    alt: "A spiral water slide and pool at Shivganga Waterpark and Resort, Panvel",
  },
  "anand-sagar": {
    src: "/images/day-picnics/anand-sagar.webp",
    alt: "A children's water play structure and pool at Anand Sagar Resort & Water Park, Ambarnath",
  },
  "kumar-resort": {
    src: "/images/day-picnics/kumar-resort.webp",
    alt: "Water slides feeding into the pool at Kumar Resort by Turtle, Lonavala",
  },
  "uk-resort": {
    src: "/images/day-picnics/uk-resort.avif",
    alt: "A pirate-ship themed water play structure in the pool at UK's Resort, Khopoli",
  },
  "monteria-resort": {
    src: "/images/day-picnics/monteria-resort.webp",
    alt: "The entrance gate at Monteria Resort, Khopoli",
  },
  "monteria-village": {
    src: "/images/day-picnics/monteria-village.avif",
    alt: "The rock-themed swimming pool at Monteria Village, Khalapur",
  },
  "visava-resort": {
    src: "/images/day-picnics/visava-resort.avif",
    alt: "An aerial view of the water slides and pools at Visava Amusement Park & Resort, Karnala",
  },
  "paradise-fun-land": {
    src: "/images/day-picnics/paradise-fun-land.jpg",
    alt: "The \"Under Water\" themed water play zone at Paradise Fun Land",
  },
  "sp-farm-house": {
    src: "/images/day-picnics/sp-farm-house.jpg",
    alt: "A crowded pool and slide at S P Farm House Waterpark, Pen",
  },
  "pinewood-resort": {
    src: "/images/day-picnics/pinewood-resort.jpg",
    alt: "Children playing at the water play structure at Pinewood Resort, Karjat",
  },
  shangrila: {
    src: "/images/day-picnics/shangrila.webp",
    alt: "Water slides at sunset at Shangrila Resort & Waterpark, Bhiwandi",
  },
  "tikuji-ni-wadi": {
    src: "/images/day-picnics/tikuji-ni-wadi.webp",
    alt: "A children's pool with a frog-shaped slide at Tikuji-Ni-Wadi, Thane",
  },
  "royal-garden-resort": {
    src: "/images/day-picnics/royal-garden-resort.webp",
    alt: "A crowded pool with a slide tower at Royal Garden Resort, Thane",
  },
  aquamagica: {
    src: "/images/day-picnics/aquamagica.jpg",
    alt: "The Nitro roller coaster at the Khopoli complex, seen from Aquamagica",
    credit: "Aaditya Bardhan, CC BY-SA 2.0, via Wikimedia Commons",
  },
};
