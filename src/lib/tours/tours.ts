import type { Tour } from "./types";

/**
 * Journey catalogue.
 *
 * Every destination below is real, and every factual claim (what's there,
 * its history) is drawn from well-documented public record — not invented.
 * What's deliberately absent: a fixed per-student price and a locked
 * day-by-day itinerary. Those depend on group size, dates and how a school
 * wants the trip shaped, so they're handled through an enquiry rather than
 * published as a fixed figure here.
 */

const STANDARD_FAQS = [
  {
    question: "How is pricing worked out?",
    answer:
      "Per-student pricing depends on your group size, travel dates and how you want the days shaped — transport, accommodation, meals and entry fees are all quoted together as one figure once we know your requirements.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      "Twenty students. Smaller groups are possible for specialised itineraries, though the per-student cost rises.",
  },
  {
    question: "Can the itinerary be adapted?",
    answer:
      "Yes. Tell us your syllabus focus, group size and dates, and we'll shape the days around them rather than offering a fixed schedule.",
  },
];

export const TOURS: Tour[] = [
  {
    slug: "raigad-fort-maratha-capital",
    title: "Raigad Fort & the Maratha Capital",
    destinationId: "raigad-fort",
    destination: "Raigad",
    state: "Maharashtra",
    tripType: "Heritage Walk",
    durationDays: 2,
    durationLabel: "1–2 days",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "November to February, when the climb is cool and clear",
    standfirst:
      "A climb to Shivaji Maharaj's hill capital, where he was crowned Chhatrapati in 1674.",
    overview:
      "Raigad Fort was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, who was crowned there in June 1674. Reached by a stepped climb of roughly 1,400 steps or by a ropeway, the fort preserves its fortified main gate, the Samadhi (memorial) of Shivaji Maharaj, the ruins of the royal court and market, and Takmak Tok — a sheer cliff edge with a drop of several hundred metres.",
    highlights: [
      "Maha Darwaja, the fort's main gateway",
      "Ropeway ascent option for mixed-ability groups",
      "Chhatrapati Shivaji Maharaj's Samadhi",
      "Takmak Tok viewpoint",
      "Rajwada (royal court) ruins",
    ],
    educationalValue:
      "Maratha history and hill-fort military architecture, read directly from the gateway, cisterns and ruins rather than a textbook page.",
    imageSlot: "raigad-fort",
    gallerySlots: ["raigad-fort", "heritage-walk", "students-group"],
    faqs: [
      {
        question: "How demanding is the climb?",
        answer:
          "The stepped ascent takes roughly ninety minutes to two hours at a student pace. Groups with mixed fitness or accessibility needs can use the ropeway instead.",
      },
      ...STANDARD_FAQS,
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "ajanta-ellora-rock-cut",
    title: "Ajanta & Ellora: The Rock-Cut Deccan",
    destinationId: "ajanta-ellora",
    destination: "Ajanta & Ellora",
    state: "Maharashtra",
    tripType: "Heritage Walk",
    durationDays: 3,
    durationLabel: "2–3 days",
    gradeMin: 7,
    gradeMax: 12,
    gradesLabel: "Grades 7–12",
    seasons: ["Winter"],
    bestSeason: "October to March, avoiding the Deccan summer",
    standfirst:
      "Two UNESCO World Heritage cave complexes, roughly a hundred kilometres apart — Buddhist painting at Ajanta, monolithic excavation at Ellora.",
    overview:
      "Ajanta's roughly thirty rock-cut Buddhist caves, carved between the 2nd century BCE and the 6th century CE, hold some of the best-preserved ancient mural paintings in India, depicting Jataka tales from the Buddha's earlier lives. Ellora's 34 caves, cut between the 6th and 10th centuries CE, represent Buddhist, Hindu and Jain traditions side by side — the best known is the Kailasa Temple, a full temple excavated downward out of a single rock face rather than built up, and one of the largest rock-cut structures in the world.",
    highlights: [
      "Ajanta's painted cave murals",
      "Kailasa Temple, excavated from a single rock",
      "Buddhist, Hindu and Jain caves at Ellora",
      "Both sites are UNESCO World Heritage Sites",
    ],
    educationalValue:
      "Comparative religious architecture and ancient Indian art history, seen across two sites built four centuries apart by three different traditions.",
    imageSlot: "cave-architecture",
    gallerySlots: ["cave-architecture", "heritage-walk", "students-group"],
    faqs: [
      {
        question: "Is photography permitted in the caves?",
        answer:
          "Flash photography is prohibited at Ajanta to protect the ancient pigments, and this is strictly enforced by site staff. Non-flash photography is permitted at both sites.",
      },
      ...STANDARD_FAQS,
    ],
    featured: true,
  },
  {
    slug: "pune-science-heritage",
    title: "Pune: Peshwa Heritage & Science Centres",
    destinationId: "pune",
    destination: "Pune",
    state: "Maharashtra",
    tripType: "Science Tour",
    durationDays: 2,
    durationLabel: "1–2 days",
    gradeMin: 5,
    gradeMax: 10,
    gradesLabel: "Grades 5–10",
    seasons: ["Winter", "Summer"],
    bestSeason: "Year-round, with November to February most comfortable",
    standfirst:
      "Shaniwar Wada's Peshwa-era history alongside a hands-on science centre — Maratha administration and applied physics in one short trip.",
    overview:
      "Shaniwar Wada was the seat of the Peshwas, the hereditary prime ministers who effectively ran the Maratha empire, built in 1732 and largely destroyed by a fire in 1828 — its fortified stone base and gates still stand. The Aga Khan Palace, built in 1892, held Mahatma Gandhi, Kasturba Gandhi and Mahadev Desai in detention during the Quit India movement in 1942; Kasturba Gandhi died there in 1944, and her memorial stands on the grounds today.",
    highlights: [
      "Shaniwar Wada's fortified gates and base",
      "Aga Khan Palace and its Quit India history",
      "Hands-on exhibits at a Pune science centre",
    ],
    educationalValue:
      "Maratha administrative history and the freedom movement, paired with an interactive afternoon of applied physics.",
    imageSlot: "science-centre",
    gallerySlots: ["science-centre", "heritage-walk", "students-group"],
    faqs: STANDARD_FAQS,
    popular: true,
  },
  {
    slug: "old-goa-basilicas",
    title: "Old Goa: Basilicas of the Portuguese Capital",
    destinationId: "old-goa",
    destination: "Old Goa",
    state: "Goa",
    tripType: "Heritage Walk",
    durationDays: 2,
    durationLabel: "1–2 days",
    gradeMin: 5,
    gradeMax: 12,
    gradesLabel: "Grades 5–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    standfirst:
      "The former capital of Portuguese India, its UNESCO-listed basilicas read as four centuries of colonial and religious history.",
    overview:
      "Old Goa served as the capital of Portuguese India from the 16th century. The Basilica of Bom Jesus, completed in 1605, is a UNESCO World Heritage Site and holds the mortal remains of St. Francis Xavier. The nearby Sé Cathedral, dedicated to St. Catherine, was for a time the largest church in Asia. St. Cajetan Church and the Archaeological Museum, housed in a former convent, round out a compact walk through the city's Portuguese-era core.",
    highlights: [
      "Basilica of Bom Jesus, a UNESCO World Heritage Site",
      "Sé Cathedral",
      "St. Cajetan Church",
      "Archaeological Museum",
    ],
    educationalValue:
      "Colonial and religious history, read through architecture that was, for a period, among the largest of its kind in Asia.",
    imageSlot: "old-goa",
    gallerySlots: ["old-goa", "heritage-walk", "students-group"],
    faqs: STANDARD_FAQS,
    featured: true,
    popular: true,
  },
  {
    slug: "hyderabad-charminar-golconda",
    title: "Hyderabad: Charminar, Golconda & Museums",
    destinationId: "hyderabad",
    destination: "Hyderabad",
    state: "Telangana",
    tripType: "Science Tour",
    durationDays: 3,
    durationLabel: "2–3 days",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    standfirst:
      "Qutb Shahi architecture, the acoustic engineering of Golconda Fort, and one of the world's largest personal museum collections.",
    overview:
      "Charminar, built in 1591, anchors Hyderabad's old city. Golconda Fort, once a centre of the diamond trade, is known for acoustic engineering that lets a handclap at its entrance be heard at the Bala Hisar pavilion roughly a kilometre away. The Salar Jung Museum holds one of the largest collections ever assembled by a single individual, and the Birla Science Museum includes a public planetarium.",
    highlights: [
      "Golconda Fort's acoustic gateway",
      "Charminar and the old city",
      "Salar Jung Museum",
      "Birla Science Museum and planetarium",
    ],
    educationalValue:
      "Deccan architectural history and acoustic engineering, alongside a museum collection large enough to anchor a full day of study on its own.",
    imageSlot: "observatory-night",
    gallerySlots: ["observatory-night", "heritage-walk", "students-group"],
    faqs: STANDARD_FAQS,
  },
  {
    slug: "ahmedabad-stepwells-heritage",
    title: "Ahmedabad: Stepwells & Independence Heritage",
    destinationId: "ahmedabad",
    destination: "Ahmedabad",
    state: "Gujarat",
    tripType: "Industrial Visit",
    durationDays: 3,
    durationLabel: "2–3 days",
    gradeMin: 7,
    gradeMax: 12,
    gradesLabel: "Grades 7–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    standfirst:
      "Adalaj's carved stepwell geometry and the Sabarmati Ashram, in India's first UNESCO World Heritage City.",
    overview:
      "The Adalaj Stepwell, built in 1498, descends five storeys through intricately carved stone columns in an octagonal plan designed to keep water cool. The Sabarmati Ashram was Gandhi's residence from 1917 to 1930 and the starting point of the 1930 Dandi Salt March. Ahmedabad's walled old city, with its dense pols (traditional housing clusters), made it the first city in India to be designated a UNESCO World Heritage City, in 2017.",
    highlights: [
      "Adalaj Stepwell's carved symmetry",
      "Sabarmati Ashram",
      "Old city pols, UNESCO World Heritage listed",
      "Kankaria Lake",
    ],
    educationalValue:
      "Stepwell engineering and passive cooling design, alongside the history of the independence movement centred on the Ashram.",
    imageSlot: "stepwell-geometry",
    gallerySlots: ["stepwell-geometry", "heritage-walk", "market-craft"],
    faqs: STANDARD_FAQS,
  },
  {
    slug: "mahabaleshwar-plateau",
    title: "Mahabaleshwar: Plateau, Forts & River Source",
    destinationId: "mahabaleshwar",
    destination: "Mahabaleshwar",
    state: "Maharashtra",
    tripType: "Educational Tour",
    durationDays: 3,
    durationLabel: "2–3 days",
    gradeMin: 5,
    gradeMax: 10,
    gradesLabel: "Grades 5–10",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "October to February",
    standfirst:
      "Pratapgad Fort's Maratha history, the source of the Krishna River, and the plateau's strawberry economy.",
    overview:
      "Pratapgad Fort, built in 1656, was the site of Shivaji Maharaj's decisive 1659 encounter with the Bijapur general Afzal Khan. Mahabaleshwar itself is the source of the Krishna, one of India's major rivers, and its lateritic plateau soil supports a strawberry-growing industry that's become central to the local economy. Venna Lake and the colonial-era viewpoint at Arthur's Seat round out the plateau.",
    highlights: [
      "Pratapgad Fort",
      "Krishna river source",
      "Strawberry farms and Mapro's processing line",
      "Arthur's Seat and Western Ghats viewpoints",
    ],
    educationalValue:
      "River-source geography and plateau soil science, alongside a hands-on look at a regional cash-crop economy.",
    imageSlot: "mahabaleshwar",
    gallerySlots: ["mahabaleshwar", "nature-camp", "students-group"],
    faqs: STANDARD_FAQS,
  },
  {
    slug: "mumbai-gateway-harbour",
    title: "Mumbai: Gateway City & Harbour",
    destinationId: "mumbai",
    destination: "Mumbai",
    state: "Maharashtra",
    tripType: "Heritage Walk",
    durationDays: 2,
    durationLabel: "1–2 days",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    standfirst:
      "Colonial-era architecture, a working harbour, and hands-on science at the Nehru Centre.",
    overview:
      "The Gateway of India, completed in 1924, commemorates the 1911 visit of King George V and Queen Mary and looks out over the harbour it was built beside. The Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus) is a UNESCO World Heritage Site and one of India's busiest railway stations. The Nehru Science Centre is India's largest interactive science museum, and the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly the Prince of Wales Museum) holds one of the city's major art and history collections.",
    highlights: [
      "Gateway of India",
      "Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage Site",
      "Nehru Science Centre",
      "Marine Drive",
    ],
    educationalValue:
      "Colonial-era urban history and harbour geography, paired with a full afternoon of hands-on science exhibits.",
    imageSlot: "mumbai",
    gallerySlots: ["mumbai", "heritage-walk", "students-group"],
    faqs: STANDARD_FAQS,
  },
];

export const FEATURED_TOURS = TOURS.filter((tour) => tour.featured);
export const POPULAR_TOURS = TOURS.filter((tour) => tour.popular);

export function getTour(slug: string) {
  return TOURS.find((tour) => tour.slug === slug);
}

export function getRelatedTours(current: Tour, limit = 3) {
  const sameType = TOURS.filter(
    (t) => t.slug !== current.slug && t.tripType === current.tripType,
  );
  const others = TOURS.filter(
    (t) => t.slug !== current.slug && t.tripType !== current.tripType,
  );
  return [...sameType, ...others].slice(0, limit);
}
