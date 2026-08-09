/**
 * Imagery for the Day Picnics page.
 *
 * Four venues have a genuine, identifiable photo of the real place — sourced
 * from Wikimedia Commons (openly licensed for reuse with attribution) and
 * downloaded locally: Imagica, Suraj Waterpark, Essel World Water Kingdom
 * and Saguna Baug. Every other venue's tariff-card entry currently points at
 * a generic, category-appropriate stock photo rather than a specific real
 * photo of that venue — no free-license photo of it could be found online.
 * Those are flagged below and should be swapped for the venue's own
 * photography (or a licensed one) as it becomes available. Keys are stable;
 * only src/alt/attribution need to change when real photos arrive.
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

  // ---- Genuine photos of the real venue (Wikimedia Commons, CC BY-SA) ----
  imagica: {
    src: "/images/day-picnics/imagica.jpg",
    alt: "The Nitro roller coaster at Adlabs Imagica, Khopoli",
    credit: "Aaditya Bardhan, CC BY-SA 2.0, via Wikimedia Commons",
  },
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

  // ---- Generic, category-appropriate stand-ins (not the actual venue) ----
  "wet-n-joy-amusement": {
    src: img("https://images.unsplash.com/photo-1628835788312-41d61f5ddce8"),
    alt: "A steel roller coaster with riders looping against a blue sky",
    placeholder: true,
  },
  kidzania: {
    src: img("https://images.unsplash.com/photo-1774885370230-ad8bf961ae03"),
    alt: "A child playing in a colourful indoor play area",
    placeholder: true,
  },
  aquamagica: {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "wet-n-joy-waterpark": {
    src: img("https://images.unsplash.com/photo-1706843540963-ae52d784de62"),
    alt: "A child sliding down an orange water park tube slide",
    placeholder: true,
  },
  shivganga: {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "bk-water-park": {
    src: img("https://images.unsplash.com/photo-1706843540963-ae52d784de62"),
    alt: "A child sliding down an orange water park tube slide",
    placeholder: true,
  },
  "paradise-fun-land": {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "sp-farm-house": {
    src: img("https://images.unsplash.com/photo-1706843540963-ae52d784de62"),
    alt: "A child sliding down an orange water park tube slide",
    placeholder: true,
  },
  "uk-resort": {
    src: img("https://images.unsplash.com/photo-1687834618283-1b9e12de54a7"),
    alt: "A calm resort swimming pool lined with lounge chairs and palm trees",
    placeholder: true,
  },
  "anand-sagar": {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "kumar-resort": {
    src: img("https://images.unsplash.com/photo-1706843540963-ae52d784de62"),
    alt: "A child sliding down an orange water park tube slide",
    placeholder: true,
  },
  "monteria-resort": {
    src: img("https://images.unsplash.com/photo-1687834618283-1b9e12de54a7"),
    alt: "A calm resort swimming pool lined with lounge chairs and palm trees",
    placeholder: true,
  },
  shangrila: {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "tikuji-ni-wadi": {
    src: img("https://images.unsplash.com/photo-1706843540963-ae52d784de62"),
    alt: "A child sliding down an orange water park tube slide",
    placeholder: true,
  },
  "monteria-village": {
    src: img("https://images.unsplash.com/photo-1687834618283-1b9e12de54a7"),
    alt: "A calm resort swimming pool lined with lounge chairs and palm trees",
    placeholder: true,
  },
  "visava-resort": {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
  "pinewood-resort": {
    src: img("https://images.unsplash.com/photo-1687834618283-1b9e12de54a7"),
    alt: "A calm resort swimming pool lined with lounge chairs and palm trees",
    placeholder: true,
  },
  "royal-garden-resort": {
    src: img("https://images.unsplash.com/photo-1707575585281-6b6fae7c13b2"),
    alt: "Children playing in a foam-filled water park pool",
    placeholder: true,
  },
};
