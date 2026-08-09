/**
 * Day Picnics — Raigad Tours' one-day school picnic destinations.
 *
 * Sourced from the company's own printed tariff card ("Tariff Applicable
 * for One-Day School Picnics"): every name, location, grade eligibility,
 * price and food inclusion below comes directly from that document, not
 * invented. Descriptions and highlights were verified separately via each
 * venue's official site, Wikipedia or independent travel coverage — real,
 * checkable facts, not marketing copy. Where a detail couldn't be verified
 * (or the brochure itself didn't specify it, e.g. grade range), it's left
 * out rather than guessed.
 *
 * The brochure's own footer note — "Transport Charges Extra" — applies to
 * every destination below; none of the prices include transport.
 */

export type DayPicnicCategory =
  | "amusement-park"
  | "water-park"
  | "resort"
  | "learning";

export const DAY_PICNIC_CATEGORIES: {
  id: DayPicnicCategory;
  label: string;
  blurb: string;
}[] = [
  {
    id: "amusement-park",
    label: "Amusement Parks",
    blurb: "Rides and thrills, from coasters to drop towers.",
  },
  {
    id: "water-park",
    label: "Water Parks",
    blurb: "Wave pools, slides and a day that ends in wet uniforms.",
  },
  {
    id: "resort",
    label: "Resorts & Retreats",
    blurb: "Pools, lawns and group games at a slower pace.",
  },
  {
    id: "learning",
    label: "Learning Experiences",
    blurb: "A working farm and a role-play city — hands-on, not spectator.",
  },
];

export type DayPicnic = {
  id: string;
  name: string;
  location: string;
  category: DayPicnicCategory;
  description: string;
  highlights: string[];
  /** Only set where the tariff card actually specifies eligible grades. */
  grades?: string;
  /** Per-student price in INR. For UK's Resort, the lower of two tiers — see priceTiers. */
  price: number;
  /** Only set where the tariff lists more than one grade-banded price. */
  priceTiers?: { label: string; price: number }[];
  /** Exact food inclusion as printed on the tariff card. Omitted where the card didn't state one. */
  food?: string;
};

export const DAY_PICNICS: DayPicnic[] = [
  {
    id: "imagica",
    name: "Imagica",
    location: "Khopoli, Maharashtra",
    category: "amusement-park",
    description:
      "A 132-acre theme park divided into six zones — Viva Europa, Americana, Jambo Africa, Asiana, Arabia and India — built around multiple roller coasters and family rides.",
    highlights: [
      "Nitro, a floorless coaster with 5 inversions",
      "Deep Space, an indoor launched dark coaster",
      "Scream Machine, a giant swinging pendulum ride",
      "Rajasaurus River Adventure, an animatronic dinosaur boat ride",
    ],
    grades: "Grades 4–12",
    price: 1299,
    food: "Lunch + Hi-Tea",
  },
  {
    id: "aquamagica",
    name: "Aquamagica",
    location: "Khopoli, Maharashtra",
    category: "water-park",
    description:
      "The separately-ticketed water park at the same Khopoli complex as Imagica, spread across 72 acres with a wave pool and a mix of family and thrill slides.",
    highlights: [
      "Wacky Wavess wave pool",
      "Twin Twister and Crazy Fall thrill slides",
      "Kiddie Pond and Rain Dance for younger students",
    ],
    grades: "Grades 5–12",
    price: 999,
    food: "Lunch + Hi-Tea",
  },
  {
    id: "wet-n-joy-amusement",
    name: "Wet N Joy — Amusement Park",
    location: "Lonavala, Maharashtra",
    category: "amusement-park",
    description:
      "The dry-rides side of the Wet N Joy resort on the old Mumbai–Pune highway, sold as a separate ticket from its water park next door.",
    highlights: [
      "Turbo Force suspended coaster",
      "Z Force drop tower",
      "Sky Screamer suspended rotation ride",
      "5D motion theatre",
    ],
    price: 1100,
    food: "With food",
  },
  {
    id: "wet-n-joy-waterpark",
    name: "Wet N Joy — Water Park",
    location: "Lonavala, Maharashtra",
    category: "water-park",
    description:
      "The water park side of the same Lonavala resort, built around one of the region's larger wave pools and a water coaster.",
    highlights: [
      "60,000 sq ft wave pool",
      "Master Blaster water coaster",
      "Volcano and Tornado tube rides",
    ],
    price: 1100,
    food: "With food",
  },
  {
    id: "kidzania",
    name: "KidZania",
    location: "Ghatkopar, Mumbai",
    category: "learning",
    description:
      "An indoor role-play city at R-City Mall where students take on real jobs — firefighter, pilot, radio host — scaled to child size. India's first KidZania branch.",
    highlights: [
      "Bollywood Acting Academy, unique to the Mumbai branch",
      "Pottery Studio",
      "Dabbawalla role-play, based on Mumbai's real lunchbox-delivery network",
    ],
    price: 1100,
    food: "With Lunch",
  },
  {
    id: "uk-resort",
    name: "UK's Resort",
    location: "Khopoli, Maharashtra",
    category: "resort",
    description:
      "A resort on the old Mumbai–Pune highway pairing an on-site water park and swimming pool with indoor and outdoor group games.",
    highlights: [
      "On-site water park with a rain-dance area",
      "Swimming pool",
      "Indoor games: table tennis, badminton, carrom",
      "Outdoor sports: volleyball, cricket, football",
    ],
    price: 700,
    priceTiers: [
      { label: "Grades 5–10", price: 750 },
      { label: "Grades 1–4", price: 700 },
    ],
    food: "With food",
  },
  {
    id: "shivganga",
    name: "Shivganga Waterpark and Resort",
    location: "Panvel, Maharashtra",
    category: "water-park",
    description:
      "A water park and resort at Somatane village near Panvel, with an on-site Shiv temple alongside its pools and slides.",
    highlights: [
      "Wave pool",
      "Tube slide",
      "Rain-dance area",
      "Kids' zone with a mini-train and horse rides",
    ],
    grades: "Grades 1–10",
    price: 800,
    food: "With food",
  },
  {
    id: "bk-water-park",
    name: "BK Water Park",
    location: "Kalyan-Shil Highway, Maharashtra",
    category: "water-park",
    description:
      "A roughly 10-acre water park on the Kalyan-Shil Highway with more than 20 slides and attractions across wave-pool, thrill and kids' zones.",
    highlights: [
      "Wave Pool",
      "\"Amazon — The Crazy River\" lazy river",
      "Aqua Lagoon",
      "Volcano, Aquadrop and Superdrop slides",
    ],
    price: 899,
    food: "With food",
  },
  {
    id: "suraj-waterpark",
    name: "Suraj Waterpark",
    location: "Thane, Maharashtra",
    category: "water-park",
    description:
      "An 11-acre water park in Waghbil, Thane, designed by Canada's WhiteWater West Industries.",
    highlights: [
      "Wave pool",
      "\"Har Har Ganga\" artificial waterfall",
      "Rainbow Slides",
      "A fiberglass cave housing a lock collection",
    ],
    price: 900,
    food: "With food",
  },
  {
    id: "essel-world-water-kingdom",
    name: "Essel World — Water Kingdom",
    location: "Gorai, Borivali, Mumbai",
    category: "water-park",
    description:
      "The water park division of the EsselWorld complex at Gorai, built around a large wave pool and a lagoon-style aqua-play area. EsselWorld's separate dry amusement park has been closed since April 2022; Water Kingdom continues to operate independently.",
    highlights: ["Wetlantic wave pool", "Lagoon aqua-play pool", "Lazy river"],
    price: 1000,
    food: "With food",
  },
  {
    id: "anand-sagar",
    name: "Anand Sagar Resort & Water Park",
    location: "Ambarnath, Maharashtra",
    category: "resort",
    description:
      "A water park and resort at Pale Gaon, Ambarnath, established in 2007 and also used as a banquet venue.",
    highlights: [
      "Multiple pools and a lazy river",
      "Water slide tower",
      "Rain-dance and DJ zone",
    ],
    price: 700,
    food: "Lunch + Hi-Tea",
  },
  {
    id: "kumar-resort",
    name: "Kumar Resort by Turtle",
    location: "Lonavala, Maharashtra",
    category: "resort",
    description:
      "A resort in central Lonavala combining a water park with an indoor arcade.",
    highlights: [
      "Water park with slides and a rain-dance zone",
      "Indoor arcade with a VR simulator and bumper cars",
    ],
    price: 800,
    food: "With food",
  },
  {
    id: "paradise-fun-land",
    name: "Paradise Fun Land",
    location: "Kalyan, Maharashtra",
    category: "water-park",
    description:
      "A water park in the Kalyan–Bhiwandi belt with three pools and a small kids' amusement section.",
    highlights: [
      "Three pools with 10+ water slides",
      "\"Mushroom pool\" and rain-dance area",
      "Paradise Express mini-train for younger students",
    ],
    price: 900,
  },
  {
    id: "sp-farm-house",
    name: "S P Farm House Waterpark",
    location: "Pen, Maharashtra",
    category: "water-park",
    description:
      "A farmhouse-style property on the Pen–Khopoli road with a swimming pool and water slides amid orchards and farmland.",
    highlights: [
      "Swimming pool with water slides",
      "AC and non-AC bungalow accommodation",
      "Set amid fruit orchards near Pen",
    ],
    price: 800,
    food: "With food",
  },
  {
    id: "monteria-resort",
    name: "Monteria Resort",
    location: "Khopoli, Maharashtra",
    category: "resort",
    description:
      "A resort near Khopoli offering an outdoor pool alongside adventure activities — a distinct property from Monteria Village below, despite the shared name.",
    highlights: [
      "Large outdoor swimming pool",
      "Zip line, Burma bridge and rope courses",
      "Archery",
    ],
    price: 850,
    food: "With food",
  },
  {
    id: "shangrila",
    name: "Shangrila Resort & Waterpark",
    location: "Bhiwandi, Maharashtra",
    category: "resort",
    description:
      "A resort and water park on the Mumbai–Nashik highway in Bhiwandi.",
    highlights: ["Wave pool", "22 water slides", "Separate kids' and adults' pools"],
    price: 825,
    food: "With food",
  },
  {
    id: "tikuji-ni-wadi",
    name: "Tikuji-Ni-Wadi",
    location: "Thane, Maharashtra",
    category: "resort",
    description:
      "A 20-acre amusement park, water park and resort at Manpada, Thane, recognised as a tourist attraction by the Maharashtra Tourism Department.",
    highlights: ["Wave pool and lazy river", "Dinosaur Park", "Rotating spin coaster"],
    price: 975,
    food: "With food (breakfast extra at ₹30)",
  },
  {
    id: "monteria-village",
    name: "Monteria Village",
    location: "Khalapur, Maharashtra",
    category: "resort",
    description:
      "A village-themed eco resort at Kalote Mokashi, Khalapur, built around rural-craft activities and adventure elements rather than water slides.",
    highlights: [
      "Zip line, zip cycle and a 7-element rope course",
      "Pottery-making and village-craft stations",
      "Gaushala and bullock-cart village-life experiences",
    ],
    price: 850,
    food: "With food",
  },
  {
    id: "visava-resort",
    name: "Visava Amusement Park & Resort",
    location: "Karnala, Maharashtra",
    category: "resort",
    description:
      "A resort beside Karnala Bird Sanctuary on the Mumbai–Goa highway, pairing a water park with event lawns.",
    highlights: [
      "Adjacent to Karnala Bird Sanctuary",
      "Water park with multiple pools and slides",
      "Rain-dance attraction",
    ],
    price: 800,
    food: "With food",
  },
  {
    id: "saguna-baug",
    name: "Saguna Baug",
    location: "Neral, Maharashtra",
    category: "learning",
    description:
      "A 22-acre working farm at the foothills of Matheran, running since 1985, where students spend the day as hands-on farmers rather than spectators. Winner of a Government of India Rural Tourism award in 2022.",
    highlights: [
      "Cow-milking demonstrations and a biogas plant",
      "\"Become a one-day farmer\" hands-on activities",
      "Fishing and organic horticulture",
      "Bordered by the Ulhas River",
    ],
    price: 825,
    food: "With food",
  },
  {
    id: "pinewood-resort",
    name: "Pinewood Resort",
    location: "Karjat, Maharashtra",
    category: "resort",
    description:
      "A resort in Injiwali village near Karjat, converted from a farmhouse in 2006, with Portuguese/Goan-style cottages and a water park.",
    highlights: [
      "On-site water park",
      "Outdoor games: football, badminton, archery",
      "Near Karjat's Panorama Point and Bhivpuri waterfalls",
    ],
    price: 800,
    food: "With food",
  },
  {
    id: "royal-garden-resort",
    name: "Royal Garden Resort",
    location: "Thane, Maharashtra",
    category: "resort",
    description:
      "A resort on the Mumbai–Ahmedabad highway corridor built around four pools and a dedicated wave pool.",
    highlights: [
      "Four pools plus a wave pool",
      "20+ named slides, including WaveRider and Aqua Cascade",
      "On-site lifeguards and first aid",
    ],
    price: 800,
    food: "With food",
  },
];

export const DAY_EXPERIENCE_STEPS = [
  {
    step: "01",
    title: "Departure",
    description: "Students board a coach from the school gate in the early morning.",
  },
  {
    step: "02",
    title: "Arrival",
    description: "A short briefing on the day ahead before the group heads in together.",
  },
  {
    step: "03",
    title: "Activities",
    description: "Rides, pools or hands-on experiences, depending on the destination.",
  },
  {
    step: "04",
    title: "Lunch",
    description: "A meal as included with the destination — see each listing for the exact inclusion.",
  },
  {
    step: "05",
    title: "Free Time",
    description: "Time to explore at their own pace before the group reassembles.",
  },
  {
    step: "06",
    title: "Return Journey",
    description: "Back at the school gate by evening, the same day.",
  },
] as const;

export const DAY_PICNIC_FAQS = [
  {
    question: "What age groups are these day picnics suitable for?",
    answer:
      "It varies by destination. Amusement and water parks with thrill rides are generally recommended from Grade 4 or 5 upward — each listing above shows the grade range the venue itself specifies. Resorts and the farm experience at Saguna Baug suit a wider range, including younger students. Tell us your group's grades when you enquire and we'll point you to the right fit.",
  },
  {
    question: "Is transport included in the price?",
    answer:
      "No. Per our tariff, the price shown for each destination covers entry and the stated meal only — transport charges are extra and quoted separately based on your school's location and group size.",
  },
  {
    question: "How do schools enquire?",
    answer:
      "Send your school's details, group size and preferred destination through the enquiry form below, or reach us by phone or WhatsApp — our contact details are on the Contact page.",
  },
  {
    question: "Can we request a destination not confirmed with grade eligibility?",
    answer:
      "Yes. A few venues on our tariff don't have a specific grade restriction — get in touch and we'll confirm suitability for your group's age range before you book.",
  },
  {
    question: "Can schools request a specific destination?",
    answer:
      "Yes — if you already have one of these venues in mind, or need something that fits a particular syllabus or budget, let us know when you enquire and we'll arrange it.",
  },
];
