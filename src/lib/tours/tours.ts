import type { Tour } from "./types";

/**
 * Placeholder journey catalogue.
 *
 * Itineraries, prices and operational detail are illustrative and awaiting real
 * material from the Raigad Tours booklet. Structure and taxonomy are final.
 */

/** Commitments that apply to every departure, spelled out on each tour page. */
const STANDARD_SAFETY = [
  "Two trained trip leaders for every twenty students",
  "Government-certified drivers and regularly serviced coaches",
  "Qualified first-aider and medical kit on every departure",
  "24-hour emergency line open for the length of the trip",
  "Nearest hospital identified in advance at every overnight stop",
];

const STANDARD_TEACHER_INFO = [
  "Accompanying staff travel free at your school's required ratio",
  "Consent pack, medical declaration forms and itinerary documentation supplied",
  "Pre-departure briefing call with your trip leader",
  "Daily written check-in with the school throughout the trip",
];

const STANDARD_FAQS = [
  {
    question: "What is included in the price?",
    answer:
      "Transport, accommodation, all meals, entry fees, guide charges and medical cover. The per-student figure we quote is the figure you pay — no surcharges are added after booking.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      "Twenty students. Smaller groups are possible for specialised itineraries, though the per-student cost rises.",
  },
  {
    question: "Can the itinerary be adapted?",
    answer:
      "Yes. Most schools adjust at least one element — extending a site visit, adding a workshop, or reshaping the schedule around exam timetables. Tell us what you need when you enquire.",
  },
];

export const TOURS: Tour[] = [
  {
    slug: "raigad-fort-maratha-capital",
    title: "Raigad Fort & the Maratha Capital",
    destinationId: "mumbai",
    destination: "Raigad",
    state: "Maharashtra",
    tripType: "Heritage Walk",
    durationDays: 2,
    durationLabel: "2 days, 1 night",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "November to February, when the climb is cool and clear",
    priceFrom: 4200,
    standfirst:
      "A guided climb to Shivaji Maharaj's hill capital, read as a piece of working military architecture rather than a ruin.",
    overview:
      "Raigad is the clearest lesson in defensive design available anywhere in western India. Students climb the fort with a historian, work out for themselves why every gateway turns, and end the day calculating how long the cisterns could have sustained a garrison under siege.",
    highlights: [
      "Maha Darwaja and the dog-leg approach",
      "Ropeway ascent option for mixed-ability groups",
      "Water cistern volume exercise",
      "Evening history session at the base village",
    ],
    educationalValue:
      "Military architecture, Maratha history, and an applied volume-and-rate calculation built into the site visit.",
    shortItinerary: [
      "Day 1 — Ascent, Maha Darwaja, fort circuit",
      "Day 1 evening — Base village history session",
      "Day 2 — Cistern study, market, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The climb and the gateways",
        description:
          "Early departure, reaching the base by mid-morning. The ascent is made on foot or by ropeway depending on the group, with the first teaching stop at the Maha Darwaja.",
        activities: [
          "Coach departure and briefing",
          "Ascent to the main gate",
          "Guided circuit of the fort plateau",
          "Base village history session after dinner",
        ],
      },
      {
        day: "Day 2",
        title: "Water, siege and the long view",
        description:
          "The morning is spent on the cisterns and the logistics of holding a hill fort, followed by a short market visit before the return journey.",
        activities: [
          "Cistern measurement and siege-duration exercise",
          "Takmak Tok viewpoint",
          "Local market visit",
          "Return coach, arriving early evening",
        ],
      },
    ],
    learningOutcomes: [
      "Explain how fort gateway design counters specific modes of attack",
      "Estimate the volume of a historic water store and reason about garrison capacity",
      "Place the Maratha state in its regional and chronological context",
    ],
    imageSlot: "raigad-fort",
    gallerySlots: ["raigad-fort", "heritage-walk", "students-group"],
    safety: STANDARD_SAFETY,
    transport: "Air-conditioned coach from your school gate. Ropeway tickets included where the group opts to ascend by cable car.",
    meals: "All meals from Day 1 lunch to Day 2 lunch. Vegetarian and Jain options as standard.",
    accommodation: "Inspected guesthouse in the base village, shared rooms segregated by gender, with staff rooms adjacent.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "How demanding is the climb?",
        answer:
          "The stepped ascent takes roughly ninety minutes at a student pace. Groups with mixed fitness or accessibility needs use the ropeway, which we include at no extra cost when requested in advance.",
      },
      ...STANDARD_FAQS,
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "sahyadri-monsoon-trail",
    title: "Sahyadri Monsoon Trail",
    destinationId: "lonavala",
    destination: "Lonavala & the Ghats",
    state: "Maharashtra",
    tripType: "Nature Camp",
    durationDays: 3,
    durationLabel: "3 days, 2 nights",
    gradeMin: 6,
    gradeMax: 9,
    gradesLabel: "Grades 6–9",
    seasons: ["Monsoon"],
    bestSeason: "July and August, at the height of the rains",
    priceFrom: 6800,
    standfirst:
      "Field ecology in the Western Ghats during the monsoon, when the geography stops being theoretical.",
    overview:
      "The escarpment spends nine months of the year hiding what it is. In July it produces several hundred temporary waterfalls and the relationship between rock, water and vegetation happens loudly in front of you. Students run three field measurements and reach conclusions their textbooks only assert.",
    highlights: [
      "Soil infiltration comparison on cleared versus vegetated ground",
      "Stream turbidity readings at two points",
      "Karla rock-cut caves",
      "Temperature and altitude transect on the ghat road",
    ],
    educationalValue:
      "Hands-on physical geography — infiltration, run-off, erosion and lapse rate — measured rather than described.",
    shortItinerary: [
      "Day 1 — Ghat transect, camp setup",
      "Day 2 — Infiltration and turbidity fieldwork",
      "Day 3 — Karla Caves, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Into the escarpment",
        description:
          "Ascending the ghat road with temperature readings at fixed intervals, arriving at camp by afternoon for equipment briefing.",
        activities: [
          "Altitude and temperature transect",
          "Camp orientation and kit check",
          "Evening fieldwork briefing",
        ],
      },
      {
        day: "Day 2",
        title: "Measuring the monsoon",
        description:
          "A full field day. Groups rotate through infiltration plots and stream sampling points, recording and comparing results in the evening.",
        activities: [
          "Infiltration rate comparison",
          "Stream turbidity sampling",
          "Guided flora walk with a naturalist",
          "Data comparison session",
        ],
      },
      {
        day: "Day 3",
        title: "Caves and the return",
        description:
          "A morning at the Karla caves, examining how the same rock that shapes the drainage was also cut into architecture.",
        activities: ["Karla Caves visit", "Group debrief", "Return coach"],
      },
    ],
    learningOutcomes: [
      "Measure and compare infiltration rates across differing ground cover",
      "Relate stream turbidity to upstream land use",
      "Describe the lapse rate from their own recorded data",
    ],
    imageSlot: "monsoon-ghats",
    gallerySlots: ["monsoon-ghats", "nature-camp", "birds-wildlife"],
    safety: [
      ...STANDARD_SAFETY,
      "Monsoon-specific route assessment carried out within 48 hours of departure",
    ],
    transport: "Air-conditioned coach. All field movements on foot, within a two-kilometre radius of camp.",
    meals: "All meals from Day 1 lunch. Hot food and drinks available throughout the field day.",
    accommodation: "Fixed-structure camp with solid roofing and dormitory bunks — not tents, given the rainfall.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "Is the monsoon safe for a student group?",
        answer:
          "With the right planning, yes. We assess routes within 48 hours of departure, avoid all stream crossings and exposed ridges, and keep fieldwork within a short radius of the camp. Trips are rescheduled rather than risked if conditions turn.",
      },
      {
        question: "What should students bring?",
        answer:
          "Two changes of clothing minimum, broken-in shoes with grip, and a dry bag for notebooks. We supply all field equipment, laminated recording sheets and rain protection for kit.",
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
    durationLabel: "3 days, 2 nights",
    gradeMin: 7,
    gradeMax: 12,
    gradesLabel: "Grades 7–12",
    seasons: ["Winter"],
    bestSeason: "October to March, avoiding the Deccan summer",
    priceFrom: 8400,
    standfirst:
      "Two UNESCO cave complexes studied together — Buddhist painting at Ajanta, monolithic engineering at Ellora.",
    overview:
      "Studying Ajanta and Ellora in sequence lets students see two entirely different answers to the same question: what can be made by removing rock rather than assembling it. The Kailasa temple at Ellora, excavated downward from a single outcrop, is the point at which most groups stop talking.",
    highlights: [
      "Ajanta mural galleries with a specialist guide",
      "Kailasa Temple monolithic excavation",
      "Rock-removal volume estimation exercise",
      "Comparative Buddhist, Hindu and Jain iconography",
    ],
    educationalValue:
      "Art history, comparative religion, and a striking applied-mathematics exercise in excavated volume.",
    shortItinerary: [
      "Day 1 — Travel, Ellora orientation",
      "Day 2 — Kailasa Temple, volume exercise",
      "Day 3 — Ajanta murals, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and first sight",
        description:
          "Travel to Aurangabad and an afternoon orientation walk at Ellora, deliberately approaching the Kailasa complex from the side rather than the front.",
        activities: ["Travel and check-in", "Ellora orientation walk", "Evening briefing"],
      },
      {
        day: "Day 2",
        title: "The monolith",
        description:
          "A full day at Ellora, centred on Kailasa. Groups estimate the volume of rock removed and compare answers against the accepted figure.",
        activities: [
          "Kailasa Temple guided study",
          "Rock-removal estimation exercise",
          "Jain and Buddhist cave groups",
        ],
      },
      {
        day: "Day 3",
        title: "Ajanta's painted walls",
        description:
          "An early start for Ajanta before the light and crowds build, focusing on pigment, narrative sequence and conservation.",
        activities: ["Ajanta mural galleries", "Conservation discussion", "Return journey"],
      },
    ],
    learningOutcomes: [
      "Compare subtractive and additive architecture with reference to specific sites",
      "Read a narrative mural sequence and identify its conventions",
      "Estimate excavated volume and evaluate the labour implied",
    ],
    imageSlot: "cave-architecture",
    gallerySlots: ["cave-architecture", "heritage-walk", "students-group"],
    safety: STANDARD_SAFETY,
    transport: "Air-conditioned coach throughout, including the two-hour transfer between Ellora and Ajanta.",
    meals: "All meals from Day 1 lunch to Day 3 lunch, with packed lunches on both site days.",
    accommodation: "Inspected hotel in Aurangabad, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "Is photography permitted in the caves?",
        answer:
          "Flash photography is prohibited at Ajanta to protect the pigments, and this is strictly enforced. Non-flash photography is permitted at both sites. We brief students on this before arrival.",
      },
      ...STANDARD_FAQS,
    ],
    featured: true,
  },
  {
    slug: "pune-science-heritage",
    title: "Pune: Peshwa Capital & Science Centres",
    destinationId: "pune",
    destination: "Pune",
    state: "Maharashtra",
    tripType: "Science Tour",
    durationDays: 2,
    durationLabel: "2 days, 1 night",
    gradeMin: 5,
    gradeMax: 10,
    gradesLabel: "Grades 5–10",
    seasons: ["Winter", "Summer"],
    bestSeason: "Year-round, with November to February most comfortable",
    priceFrom: 3900,
    standfirst:
      "Shaniwar Wada's fortified history in the morning, a working science centre in the afternoon.",
    overview:
      "Pune is the easiest city in Maharashtra to pair history with hands-on science in a single short trip. The contrast is the point: students spend one half-day reading eighteenth-century power from its architecture, and the other operating experiments they can break without consequence.",
    highlights: [
      "Shaniwar Wada fortified complex",
      "Hands-on science centre session",
      "Aga Khan Palace and the freedom movement",
      "Evening planetarium show",
    ],
    educationalValue:
      "Modern Indian history alongside applied physics and mechanics in an interactive setting.",
    shortItinerary: [
      "Day 1 — Shaniwar Wada, science centre",
      "Day 1 evening — Planetarium",
      "Day 2 — Aga Khan Palace, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fort and laboratory",
        description:
          "A morning at Shaniwar Wada followed by an afternoon of structured hands-on work at the science centre.",
        activities: [
          "Shaniwar Wada guided visit",
          "Science centre workshop",
          "Evening planetarium show",
        ],
      },
      {
        day: "Day 2",
        title: "The freedom movement",
        description:
          "The Aga Khan Palace and its role in the Quit India period, followed by a group debrief and the return journey.",
        activities: ["Aga Khan Palace", "Group debrief", "Return coach"],
      },
    ],
    learningOutcomes: [
      "Relate the layout of a fortified urban palace to the politics that produced it",
      "Operate and explain at least three hands-on physics exhibits",
      "Summarise the significance of the Aga Khan Palace in the freedom movement",
    ],
    imageSlot: "science-centre",
    gallerySlots: ["science-centre", "heritage-walk", "students-group"],
    safety: STANDARD_SAFETY,
    transport: "Air-conditioned coach from your school gate, with all intra-city movements included.",
    meals: "All meals from Day 1 lunch to Day 2 lunch.",
    accommodation: "Inspected hotel in central Pune, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: STANDARD_FAQS,
    popular: true,
  },
  {
    slug: "nashik-industry-river",
    title: "Nashik: Godavari Ghats & Industry",
    destinationId: "nashik",
    destination: "Nashik",
    state: "Maharashtra",
    tripType: "Industrial Visit",
    durationDays: 2,
    durationLabel: "2 days, 1 night",
    gradeMin: 8,
    gradeMax: 12,
    gradesLabel: "Grades 8–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    priceFrom: 4600,
    standfirst:
      "River-city heritage alongside guided visits to working food-processing and bottling plants.",
    overview:
      "Few things clarify a supply chain like watching one operate at scale. Nashik lets a senior group see production, quality control and logistics in a single morning, then spend the afternoon on the Godavari ghats considering what the river meant before industry arrived.",
    highlights: [
      "Guided food-processing or bottling plant visit",
      "Godavari ghats and river-city history",
      "Pandavleni rock-cut caves",
      "Production-line efficiency discussion",
    ],
    educationalValue:
      "Applied economics and business studies — process flow, quality assurance and logistics observed first-hand.",
    shortItinerary: [
      "Day 1 — Plant visit, Godavari ghats",
      "Day 1 evening — Process debrief",
      "Day 2 — Pandavleni Caves, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The production floor",
        description:
          "A structured plant visit with a floor manager, followed by an afternoon on the ghats and an evening session mapping the process students observed.",
        activities: [
          "Industrial plant guided visit",
          "Godavari ghats walk",
          "Process-mapping debrief",
        ],
      },
      {
        day: "Day 2",
        title: "Older infrastructure",
        description:
          "The Pandavleni caves, a reminder that the trade routes the modern plants sit on are two thousand years old.",
        activities: ["Pandavleni Caves", "Group debrief", "Return coach"],
      },
    ],
    learningOutcomes: [
      "Map a production process from raw input to dispatched product",
      "Identify quality-control points and explain their purpose",
      "Connect historic trade routes to present-day industrial siting",
    ],
    imageSlot: "industrial-visit",
    gallerySlots: ["industrial-visit", "railway-journey", "students-group"],
    safety: [
      ...STANDARD_SAFETY,
      "Plant-issued safety equipment and a site induction before any factory floor access",
    ],
    transport: "Air-conditioned coach throughout.",
    meals: "All meals from Day 1 lunch to Day 2 lunch.",
    accommodation: "Inspected hotel in Nashik, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "Which plant will we visit?",
        answer:
          "It depends on availability and your students' year level — we confirm the specific site four weeks before departure. All partner plants are used to student groups and provide a floor manager as guide.",
      },
      {
        question: "Are there age restrictions on the factory floor?",
        answer:
          "Most partner sites require students to be 13 or older for production-floor access. Younger groups visit the visitor centre and packaging areas instead, which we arrange in advance.",
      },
      ...STANDARD_FAQS,
    ],
  },
  {
    slug: "konkan-coast-ecology",
    title: "Konkan Coast & Fishing Villages",
    destinationId: "goa",
    destination: "Konkan Coast",
    state: "Goa",
    tripType: "Educational Tour",
    durationDays: 4,
    durationLabel: "4 days, 3 nights",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter"],
    bestSeason: "November to February, outside the fishing ban",
    priceFrom: 9800,
    standfirst:
      "Coastal ecology fieldwork, a working harbour before dawn, and the Portuguese-era churches of Old Goa.",
    overview:
      "The coastal itinerary works because it puts three unrelated things side by side and lets students find the connections: an intertidal ecosystem, a fishing economy that has run on it for centuries, and a colonial architecture built on the trade it funded.",
    highlights: [
      "Pre-dawn harbour visit as the catch lands",
      "Intertidal zone survey",
      "Old Goa churches and colonial history",
      "Spice plantation and cash-crop economics",
    ],
    educationalValue:
      "Marine ecology, economic geography and colonial history in one integrated itinerary.",
    shortItinerary: [
      "Day 1 — Travel, shoreline orientation",
      "Day 2 — Harbour at dawn, intertidal survey",
      "Day 3 — Old Goa, spice plantation",
      "Day 4 — Debrief and return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Reaching the coast",
        description:
          "Overnight or early travel, arriving for an afternoon shoreline orientation and equipment briefing.",
        activities: ["Travel and check-in", "Shoreline orientation walk", "Fieldwork briefing"],
      },
      {
        day: "Day 2",
        title: "The working morning",
        description:
          "A pre-dawn start at the harbour to watch the catch land, grade and sell — then an intertidal survey on the falling tide.",
        activities: [
          "Pre-dawn harbour visit",
          "Fish market observation",
          "Intertidal zone survey",
          "Species identification session",
        ],
      },
      {
        day: "Day 3",
        title: "Trade and its buildings",
        description:
          "Old Goa's churches in the morning, a spice plantation in the afternoon, joined by the question of what paid for what.",
        activities: ["Old Goa churches", "Spice plantation visit", "Cash-crop economics session"],
      },
      {
        day: "Day 4",
        title: "Synthesis",
        description: "A morning debrief drawing the three strands together, then the return journey.",
        activities: ["Group synthesis session", "Return travel"],
      },
    ],
    learningOutcomes: [
      "Record and classify intertidal species by zone",
      "Describe the supply chain from catch to consumer",
      "Explain how maritime trade shaped colonial settlement patterns",
    ],
    imageSlot: "coastal-village",
    gallerySlots: ["coastal-village", "market-craft", "students-group"],
    safety: [
      ...STANDARD_SAFETY,
      "No open-water activity; all shoreline work on the falling tide with staff positioned at the waterline",
    ],
    transport: "Air-conditioned coach, with an overnight rail option for schools that prefer it.",
    meals: "All meals from Day 1 dinner to Day 4 breakfast. Seafood is optional at every meal.",
    accommodation: "Inspected beachside guesthouse, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "Will students swim?",
        answer:
          "No. This is a fieldwork itinerary and there is no open-water swimming. Shoreline work happens on the falling tide with staff positioned between the group and the water.",
      },
      ...STANDARD_FAQS,
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "hyderabad-charminar-planetarium",
    title: "Hyderabad: Charminar, Golconda & the Night Sky",
    destinationId: "hyderabad",
    destination: "Hyderabad",
    state: "Telangana",
    tripType: "Science Tour",
    durationDays: 4,
    durationLabel: "4 days, 3 nights",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter"],
    bestSeason: "November to February for clear night skies",
    priceFrom: 10400,
    standfirst:
      "Qutb Shahi architecture, the famous acoustics of Golconda, and an observatory session under a genuinely dark sky.",
    overview:
      "Hyderabad pairs unusually well with astronomy. Days go to Qutb Shahi architecture and the acoustic engineering at Golconda; one evening goes outside the city to a dark-sky site, where roughly seventy per cent of our students see the Milky Way for the first time.",
    highlights: [
      "Golconda Fort acoustic demonstration",
      "Charminar and the old city",
      "Planetarium and observatory session",
      "Dark-sky naked-eye astronomy",
    ],
    educationalValue:
      "Acoustics and structural engineering alongside practical observational astronomy.",
    shortItinerary: [
      "Day 1 — Travel, Charminar and old city",
      "Day 2 — Golconda, acoustics study",
      "Day 3 — Planetarium, dark-sky session",
      "Day 4 — Museum and return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The old city",
        description: "Arrival and an afternoon around Charminar, reading the old city's street plan.",
        activities: ["Travel and check-in", "Charminar and old city walk", "Evening briefing"],
      },
      {
        day: "Day 2",
        title: "Sound and stone",
        description:
          "Golconda Fort, including the celebrated hand-clap acoustics, tested rather than merely demonstrated.",
        activities: [
          "Golconda Fort guided visit",
          "Acoustic transmission experiment",
          "Qutb Shahi tombs",
        ],
      },
      {
        day: "Day 3",
        title: "Under the sky",
        description:
          "A planetarium session by day, then out of the city for naked-eye observation before the telescopes come out.",
        activities: [
          "Planetarium show",
          "Twenty-minute dark adaptation session",
          "Telescope observation",
        ],
      },
      {
        day: "Day 4",
        title: "Collections and return",
        description: "A museum morning, then the return journey.",
        activities: ["Museum visit", "Group debrief", "Return travel"],
      },
    ],
    learningOutcomes: [
      "Explain how the Golconda acoustics work in terms of reflection and focusing",
      "Identify major constellations and at least one deep-sky object unaided",
      "Situate the Qutb Shahi period within Deccan history",
    ],
    imageSlot: "observatory-night",
    gallerySlots: ["observatory-night", "night-sky", "heritage-walk"],
    safety: [
      ...STANDARD_SAFETY,
      "Head-count protocol and lighting discipline for all night-time observation sessions",
    ],
    transport: "Air-conditioned coach, with rail travel to Hyderabad for schools that prefer it.",
    meals: "All meals from Day 1 dinner to Day 4 breakfast.",
    accommodation: "Inspected hotel in Hyderabad, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "What if the dark-sky night is cloudy?",
        answer:
          "We hold a reserve evening in the itinerary and switch nights if the forecast is poor. If both are clouded out, the planetarium session is extended and telescope work moves to solar observation the following morning.",
      },
      ...STANDARD_FAQS,
    ],
  },
  {
    slug: "ahmedabad-stepwells-mills",
    title: "Ahmedabad: Stepwells, Sabarmati & Textile Mills",
    destinationId: "ahmedabad",
    destination: "Ahmedabad",
    state: "Gujarat",
    tripType: "Industrial Visit",
    durationDays: 4,
    durationLabel: "4 days, 3 nights",
    gradeMin: 7,
    gradeMax: 12,
    gradesLabel: "Grades 7–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    priceFrom: 11200,
    standfirst:
      "Adalaj's stepwell geometry, the Sabarmati Ashram, and a working textile mill — three centuries of Gujarat in one itinerary.",
    overview:
      "Adalaj is the rare historic structure that interests a mathematics teacher more than a historian: five storeys of repeated, rotated, precisely scaled octagonal symmetry that students can walk down into. Paired with a working mill and the Sabarmati Ashram, it makes an unusually complete trip.",
    highlights: [
      "Adalaj Stepwell symmetry and thermal study",
      "Working textile mill visit",
      "Sabarmati Ashram",
      "Old Ahmedabad heritage walk",
    ],
    educationalValue:
      "Geometry and passive cooling, industrial process, and the history of the independence movement.",
    shortItinerary: [
      "Day 1 — Travel, old city heritage walk",
      "Day 2 — Adalaj Stepwell, geometry fieldwork",
      "Day 3 — Textile mill, Sabarmati Ashram",
      "Day 4 — Debrief and return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The old city",
        description:
          "Arrival and an afternoon heritage walk through the pols of old Ahmedabad.",
        activities: ["Travel and check-in", "Old city pol walk", "Evening briefing"],
      },
      {
        day: "Day 2",
        title: "Descending Adalaj",
        description:
          "A full morning at the stepwell running symmetry identification and a temperature transect from street level to the lowest storey.",
        activities: [
          "Adalaj Stepwell guided visit",
          "Rotational symmetry exercise",
          "Temperature gradient measurement",
        ],
      },
      {
        day: "Day 3",
        title: "Cloth and conscience",
        description:
          "A working textile mill in the morning, the Sabarmati Ashram in the afternoon — and the connection between the two.",
        activities: ["Textile mill visit", "Sabarmati Ashram", "Khadi and swadeshi session"],
      },
      {
        day: "Day 4",
        title: "Synthesis and return",
        description: "A closing session drawing the three days together, then the return journey.",
        activities: ["Group synthesis", "Return travel"],
      },
    ],
    learningOutcomes: [
      "Identify and describe rotational symmetry in a built structure",
      "Measure a temperature gradient and explain passive cooling",
      "Connect textile manufacture to the swadeshi movement",
    ],
    imageSlot: "stepwell-geometry",
    gallerySlots: ["stepwell-geometry", "industrial-visit", "market-craft"],
    safety: [
      ...STANDARD_SAFETY,
      "Mill-issued safety equipment and site induction before any production-floor access",
    ],
    transport: "Overnight rail to Ahmedabad, with an air-conditioned coach for all local movement.",
    meals: "All meals from Day 1 dinner to Day 4 breakfast. Gujarat's vegetarian cuisine suits most dietary needs by default.",
    accommodation: "Inspected hotel in Ahmedabad, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: STANDARD_FAQS,
  },
  {
    slug: "matheran-toy-train",
    title: "Matheran: Toy Train & Forest Ecology",
    destinationId: "matheran",
    destination: "Matheran",
    state: "Maharashtra",
    tripType: "Weekend Trip",
    durationDays: 2,
    durationLabel: "2 days, 1 night",
    gradeMin: 4,
    gradeMax: 8,
    gradesLabel: "Grades 4–8",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "October to February",
    priceFrom: 3400,
    standfirst:
      "India's only vehicle-free hill station, reached by narrow-gauge railway, with a guided forest ecology walk.",
    overview:
      "Matheran bans motor vehicles entirely, which makes it the calmest introduction to residential travel we run. For many Grade 4 and 5 groups this is a first night away from home, and the absence of traffic changes the whole character of the trip.",
    highlights: [
      "Narrow-gauge toy train ascent",
      "Red-earth forest trails",
      "Dawn chorus listening session",
      "Viewpoint circuit",
    ],
    educationalValue:
      "Forest ecology and an accessible introduction to independent travel for younger students.",
    shortItinerary: [
      "Day 1 — Toy train ascent, forest walk",
      "Day 1 evening — Night sounds session",
      "Day 2 — Dawn chorus, viewpoints, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Up by rail",
        description:
          "The narrow-gauge ascent, then a guided walk into the forest with the naturalist who will lead the following morning.",
        activities: ["Toy train ascent", "Guided forest walk", "Evening night-sounds session"],
      },
      {
        day: "Day 2",
        title: "First light",
        description:
          "An early start for the dawn chorus — twenty minutes of listening before anyone is allowed a camera.",
        activities: ["Dawn chorus listening walk", "Viewpoint circuit", "Descent and return"],
      },
    ],
    learningOutcomes: [
      "Identify common Western Ghats forest species by sight and call",
      "Describe how the absence of vehicles alters a settlement",
      "Complete a first residential trip with confidence",
    ],
    imageSlot: "railway-journey",
    gallerySlots: ["railway-journey", "nature-camp", "birds-wildlife"],
    safety: [
      ...STANDARD_SAFETY,
      "No motor traffic anywhere in Matheran, removing the single largest hazard on most trips",
    ],
    transport: "Coach to Neral, then the narrow-gauge railway. All movement in Matheran is on foot.",
    meals: "All meals from Day 1 lunch to Day 2 lunch.",
    accommodation: "Inspected guesthouse in Matheran, shared rooms segregated by gender, staff rooms adjacent.",
    teacherInfo: [
      ...STANDARD_TEACHER_INFO,
      "First-residential guidance pack for schools travelling with Grade 4 and 5 groups",
    ],
    faqs: [
      {
        question: "Is this suitable as a first residential trip?",
        answer:
          "It is the trip we most often recommend for a first night away. The site is small and traffic-free, walking distances are short, and we supply a first-residential guidance pack covering homesickness and bedtime routines.",
      },
      ...STANDARD_FAQS,
    ],
    popular: true,
  },
  {
    slug: "mahabaleshwar-plateau",
    title: "Mahabaleshwar: Plateau Ecology & River Sources",
    destinationId: "mahabaleshwar",
    destination: "Mahabaleshwar",
    state: "Maharashtra",
    tripType: "Nature Camp",
    durationDays: 3,
    durationLabel: "3 days, 2 nights",
    gradeMin: 5,
    gradeMax: 10,
    gradesLabel: "Grades 5–10",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "October to February",
    priceFrom: 6200,
    standfirst:
      "Tracing the Krishna to its source across a lateritic plateau, with strawberry-farm economics along the way.",
    overview:
      "A river source is an abstraction until you stand at one. Mahabaleshwar gives students the Krishna's origin, a plateau whose soil chemistry explains the region's agriculture, and a strawberry industry that ties the two together commercially.",
    highlights: [
      "Krishna river source",
      "Lateritic soil and plateau geology",
      "Strawberry farm visit and crop economics",
      "Valley viewpoint transect",
    ],
    educationalValue:
      "Drainage systems, soil science and agricultural economics, all within a few kilometres.",
    shortItinerary: [
      "Day 1 — Travel, plateau orientation",
      "Day 2 — River source, soil study, farm visit",
      "Day 3 — Viewpoints, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Onto the plateau",
        description: "Travel and an afternoon orientation walk across the plateau top.",
        activities: ["Travel and check-in", "Plateau orientation walk", "Evening briefing"],
      },
      {
        day: "Day 2",
        title: "Source and soil",
        description:
          "The Krishna source in the morning, soil sampling at three plateau sites, and a working strawberry farm in the afternoon.",
        activities: [
          "Krishna river source visit",
          "Soil sampling and comparison",
          "Strawberry farm and crop economics",
        ],
      },
      {
        day: "Day 3",
        title: "The long view",
        description: "A viewpoint circuit reading the drainage pattern from above, then the return journey.",
        activities: ["Valley viewpoint circuit", "Group debrief", "Return coach"],
      },
    ],
    learningOutcomes: [
      "Trace a drainage basin from source to plain on a map and on the ground",
      "Compare soil samples and relate composition to land use",
      "Explain the economics of a regional cash crop",
    ],
    imageSlot: "mahabaleshwar",
    gallerySlots: ["mahabaleshwar", "nature-camp", "weekend-trip"],
    safety: [
      ...STANDARD_SAFETY,
      "Fixed barriers and staff positioning at every plateau-edge viewpoint",
    ],
    transport: "Air-conditioned coach, with all local movement included.",
    meals: "All meals from Day 1 lunch to Day 3 lunch.",
    accommodation: "Inspected hill-station guesthouse, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
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
    durationLabel: "2 days, 1 night",
    gradeMin: 6,
    gradeMax: 12,
    gradesLabel: "Grades 6–12",
    seasons: ["Winter"],
    bestSeason: "November to February",
    priceFrom: 4800,
    standfirst:
      "Colonial architecture, a working harbour, and a museum session tracing how Bombay became Mumbai.",
    overview:
      "Mumbai rewards a group that walks it. The Fort district can be read as a single continuous argument about empire, trade and reclamation — and the harbour ferry gives students the view from the water that explains why the city is where it is.",
    highlights: [
      "Gateway of India and the Fort district",
      "CSMVS museum session",
      "Harbour ferry and Elephanta option",
      "Land reclamation study",
    ],
    educationalValue:
      "Urban geography, colonial history and the physical process of land reclamation.",
    shortItinerary: [
      "Day 1 — Fort district walk, CSMVS museum",
      "Day 1 evening — Marine Drive and reclamation",
      "Day 2 — Harbour ferry, return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Reading the Fort district",
        description:
          "A guided architectural walk followed by a structured museum session, closing with Marine Drive and the reclamation story.",
        activities: [
          "Fort district heritage walk",
          "CSMVS museum session",
          "Marine Drive reclamation discussion",
        ],
      },
      {
        day: "Day 2",
        title: "From the water",
        description:
          "The harbour ferry, with the option of continuing to Elephanta for groups with the time.",
        activities: ["Harbour ferry", "Optional Elephanta Caves", "Return journey"],
      },
    ],
    learningOutcomes: [
      "Identify colonial architectural styles and date them approximately",
      "Explain how reclamation produced the modern shape of the city",
      "Use museum collections as primary historical evidence",
    ],
    imageSlot: "mumbai",
    gallerySlots: ["mumbai", "heritage-walk", "coastal-village"],
    safety: [
      ...STANDARD_SAFETY,
      "Life jackets issued and worn for the full duration of any ferry crossing",
    ],
    transport: "Air-conditioned coach, with local rail experience included for senior groups where appropriate.",
    meals: "All meals from Day 1 lunch to Day 2 lunch.",
    accommodation: "Inspected hotel in south Mumbai, shared rooms segregated by gender.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: STANDARD_FAQS,
  },
  {
    slug: "karla-bhaja-weekend",
    title: "Karla & Bhaja Caves Weekend",
    destinationId: "lonavala",
    destination: "Karla & Bhaja",
    state: "Maharashtra",
    tripType: "Weekend Trip",
    durationDays: 1,
    durationLabel: "1 day",
    gradeMin: 5,
    gradeMax: 9,
    gradesLabel: "Grades 5–9",
    seasons: ["Winter", "Monsoon"],
    bestSeason: "June to February",
    priceFrom: 1600,
    standfirst:
      "A single-day introduction to rock-cut architecture and the ancient trade routes it was built to serve.",
    overview:
      "The shortest trip we run, and a useful first step for schools trying educational travel for the first time. Two cave complexes within a few kilometres of each other, no overnight stay, and students back at the school gate by early evening.",
    highlights: [
      "Karla chaitya hall and its timber ribs",
      "Bhaja cave group and stupas",
      "Ancient trade-route context",
      "No overnight stay required",
    ],
    educationalValue:
      "An accessible introduction to rock-cut architecture and early trade geography.",
    shortItinerary: [
      "Morning — Karla chaitya hall",
      "Midday — Packed lunch, trade-route session",
      "Afternoon — Bhaja caves and return",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Two cave complexes",
        description:
          "An early departure reaching Karla by mid-morning, with Bhaja in the afternoon and a return to school by early evening.",
        activities: [
          "Karla chaitya hall guided visit",
          "Packed lunch and trade-route session",
          "Bhaja caves and stupa group",
          "Return coach",
        ],
      },
    ],
    learningOutcomes: [
      "Describe the structure of a chaitya hall and its function",
      "Explain why cave complexes cluster along historic trade routes",
    ],
    imageSlot: "weekend-trip",
    gallerySlots: ["weekend-trip", "cave-architecture", "students-group"],
    safety: STANDARD_SAFETY,
    transport: "Air-conditioned coach from your school gate and back.",
    meals: "Packed lunch and refreshments included.",
    accommodation: "Not applicable — single-day trip.",
    teacherInfo: STANDARD_TEACHER_INFO,
    faqs: [
      {
        question: "How long is the walk up to the caves?",
        answer:
          "Karla involves a stepped climb of about twenty minutes. Bhaja is shorter and gentler. Both are manageable for most students, and we can adapt the itinerary for groups with accessibility needs.",
      },
      ...STANDARD_FAQS,
    ],
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
