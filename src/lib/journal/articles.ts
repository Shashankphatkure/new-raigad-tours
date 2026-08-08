import type { Article } from "./types";

/**
 * Placeholder editorial content for the Journal.
 *
 * Bylines, dates and article text are illustrative and awaiting real material.
 * Structure, categories and reading times are final.
 */
export const ARTICLES: Article[] = [
  {
    slug: "reading-a-fort",
    title: "How to Read a Fort",
    standfirst:
      "Every gateway, curve and blind corner at Raigad was an argument about defence. A guide to seeing military architecture the way its builders did.",
    category: "Educational Resources",
    author: "Raigad Tours",
    authorRole: "Editorial",
    date: "12 March 2026",
    isoDate: "2026-03-12",
    readingTime: 9,
    imageSlot: "featured",
    featured: true,
    relatedJourneys: ["mumbai", "pune", "mahabaleshwar"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "Most students arrive at a hill fort and see a ruin. They photograph the view, eat their packed lunch on a wall, and leave with the vague impression that something important happened there a long time ago. The buildings themselves stay silent. This is a shame, because a fort is one of the most legible objects in the Indian landscape — it was designed to be read, at speed, by people whose lives depended on understanding it.",
      },
      {
        type: "paragraph",
        text: "The trick is to stop looking at a fort as architecture and start looking at it as an argument. Every wall is a claim about where an attack will come from. Every gate is a compromise between the need to let people in and the need to keep people out. Once a group of fourteen-year-olds understands that, they stop taking pictures of the view and start taking pictures of the corners.",
      },
      { type: "heading", text: "Start at the gate, and turn left" },
      {
        type: "paragraph",
        text: "Almost every Maratha hill fort makes you turn sharply as you enter. At Raigad, the Maha Darwaja forces an approaching column to swing hard before it can proceed. This is not decorative. A straight approach lets attackers build momentum and use a battering ram; a dog-leg kills both. Ask students to walk it at speed, then walk it again carrying something heavy. They work it out themselves within about ninety seconds.",
      },
      {
        type: "quote",
        text: "The fort is not asking you to admire it. It is asking you a question about how you would attack it — and every answer you come up with, someone already thought of in 1670.",
        attribution: "From our trip leader briefing notes",
      },
      {
        type: "paragraph",
        text: "The same logic explains the height of the thresholds, the position of the guardrooms, and the seemingly pointless blank stretches of wall. Nothing on a working fort is accidental. The exercise is to find the reason.",
      },
      { type: "heading", text: "Water is the real story" },
      {
        type: "paragraph",
        text: "A fort's walls decide whether it can be taken by assault. Its water decides whether it can be taken by patience. The cisterns at Raigad are the least photographed and most important structures on the hill, and they are the reason the fort could hold out for months. Every siege in the region was ultimately an argument about rainfall.",
      },
      {
        type: "gallery",
        slots: ["cave-architecture", "stepwell-geometry", "monsoon-ghats"],
        caption:
          "Water management across three sites: rock-cut cisterns, stepwell geometry, and the monsoon that fills them.",
      },
      {
        type: "paragraph",
        text: "We now build a water-storage exercise into every fort itinerary. Students estimate the volume of a cistern, divide it by a plausible garrison, and calculate how long the fort could last. The number is always lower than they expect, and it changes how they read every other structure on the hill.",
      },
      {
        type: "map",
        destinationId: "mahabaleshwar",
        caption: "The plateau country where most of these forts sit.",
      },
      {
        type: "paragraph",
        text: "By the time a group walks back down, the ruin has become a set of decisions made by people under pressure. That is the difference between visiting a monument and understanding one.",
      },
    ],
  },
  {
    slug: "monsoon-fieldwork",
    title: "Fieldwork in the Rain",
    standfirst:
      "The Western Ghats in July are inconvenient, uncomfortable and by far the best classroom we know. Notes on running a monsoon field study.",
    category: "Destination Guides",
    author: "Raigad Tours",
    authorRole: "Trip Leaders",
    date: "28 February 2026",
    isoDate: "2026-02-28",
    readingTime: 7,
    imageSlot: "monsoon-ghats",
    relatedJourneys: ["mahabaleshwar", "raigad-fort"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "There is a strong instinct among trip coordinators to avoid the monsoon entirely. The roads are worse, the photographs are greyer, and someone always loses a shoe. We schedule into it deliberately, because the Ghats spend nine months of the year hiding what they are.",
      },
      {
        type: "paragraph",
        text: "In June the escarpment is a brown wall. By the second week of July it is producing several hundred temporary waterfalls, the plateau soil is visibly moving, and the relationship between rock, water and vegetation that a textbook renders as a diagram is happening loudly in front of you.",
      },
      { type: "heading", text: "What to actually measure" },
      {
        type: "paragraph",
        text: "Rainfall totals are easy to look up and dull to collect. We have better luck with three things students can measure themselves: stream turbidity at two points, soil infiltration rate on cleared versus vegetated ground, and temperature drop with altitude on the way up a ghat road.",
      },
      {
        type: "quote",
        text: "The point is not the reading. It is the moment a student realises the number they wrote down disagrees with the textbook, and has to work out which one is wrong.",
      },
      {
        type: "paragraph",
        text: "The infiltration comparison is the one that lands hardest. Two identical tins, two identical volumes of water, one on grass and one on a bare slope — and a difference so obvious that nobody needs it explained.",
      },
      {
        type: "image",
        slot: "birds-wildlife",
        caption:
          "Endemic species become far easier to spot once the rains begin.",
      },
      { type: "heading", text: "Logistics that actually matter" },
      {
        type: "paragraph",
        text: "Dry bags for notebooks, not raincoats for students — the students will get wet regardless and mind far less than you expect. Two changes of clothing minimum. Laminated field sheets. And a firm rule that phones stay in the coach, which is unpopular for roughly one hour.",
      },
    ],
  },
  {
    slug: "twenty-three-questions",
    title: "Twenty-Three Questions on a Bus",
    standfirst:
      "A teacher's account of the journey home from Ellora, and what her students actually wanted to know.",
    category: "Teacher Stories",
    author: "Raigad Tours",
    authorRole: "Partner School",
    date: "14 February 2026",
    isoDate: "2026-02-14",
    readingTime: 6,
    imageSlot: "teacher-guiding",
    relatedJourneys: ["ajanta-ellora"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "I have taken groups to Ellora four times, and the drive back has become the part I plan for most carefully. Something happens in the ninety minutes after a group leaves a site that does not happen in a classroom.",
      },
      {
        type: "paragraph",
        text: "On the most recent trip I wrote down every question I was asked between the car park and the dinner stop. There were twenty-three. Two were about the syllabus. The rest were the kind of question you cannot set as homework.",
      },
      {
        type: "quote",
        text: "How did they know it would not fall down? Nobody had built anything like it before, so who told them it would work?",
        attribution: "Student, Grade 9",
      },
      {
        type: "paragraph",
        text: "I did not have a good answer. We looked it up together on the bus, badly, on one phone with poor signal, and the answer we found was more interesting than anything I would have prepared. Three of them were still arguing about load-bearing rock when we stopped for food.",
      },
      { type: "heading", text: "What I changed afterwards" },
      {
        type: "paragraph",
        text: "I now stop teaching about forty minutes before we leave a site. No summarising, no recap. The recap happens on its own, out loud, on the coach, and it is far better than mine.",
      },
      {
        type: "image",
        slot: "cave-architecture",
        caption: "The monolithic excavation at Ellora, cut downward from solid rock.",
      },
    ],
  },
  {
    slug: "packing-list-that-works",
    title: "The Packing List That Actually Works",
    standfirst:
      "Twenty-seven years of watching what students bring, what they use, and what comes home unopened.",
    category: "Travel Tips",
    author: "Raigad Tours",
    authorRole: "Operations",
    date: "3 February 2026",
    isoDate: "2026-02-03",
    readingTime: 5,
    imageSlot: "railway-journey",
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "Most school packing lists are written by adults imagining a trip rather than adults who have unloaded four hundred bags. Ours has been edited down every year since 1998, almost entirely by deletion.",
      },
      { type: "heading", text: "The things that earn their weight" },
      {
        type: "paragraph",
        text: "A refillable bottle that actually seals. Two pairs of broken-in shoes, never new ones. A cheap notebook with a hard cover, which doubles as a writing surface. A torch that is not a phone. And one warm layer more than the forecast suggests, because hill stations at 5am ignore forecasts.",
      },
      {
        type: "quote",
        text: "If a student has to ask where something is packed, it was the wrong thing to pack.",
      },
      { type: "heading", text: "The things that never get used" },
      {
        type: "paragraph",
        text: "Full-size towels. Multiple pairs of jeans. Anything described as 'in case'. Portable speakers, which are confiscated within the hour anyway. And, reliably, about half of the snacks.",
      },
    ],
  },
  {
    slug: "night-sky-notes",
    title: "Notes from a Dark Sky",
    standfirst:
      "What happens when a group of city students sees the Milky Way for the first time, and how to make the moment count.",
    category: "Educational Resources",
    author: "Raigad Tours",
    authorRole: "Science Programme",
    date: "21 January 2026",
    isoDate: "2026-01-21",
    readingTime: 8,
    imageSlot: "night-sky",
    relatedJourneys: ["hyderabad", "mahabaleshwar"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "The reaction is always the same, and it is always quieter than you expect. There is no cheering. A group of thirty teenagers who have never seen an unpolluted sky simply stop talking, which for thirty teenagers is remarkable.",
      },
      {
        type: "paragraph",
        text: "Roughly seventy per cent of the students we take out have never seen the Milky Way. They know it exists in the way they know the Amazon exists. Seeing it is a different category of knowledge, and it arrives all at once.",
      },
      { type: "heading", text: "Give them twenty minutes of nothing" },
      {
        type: "paragraph",
        text: "The strongest temptation is to start naming things immediately. Resist it. Full dark adaptation takes about twenty minutes, and a group that has been told to simply look will see three times as many stars by the end of it as a group that has been lectured at.",
      },
      {
        type: "quote",
        text: "We stopped bringing the telescope out first. The naked-eye sky is the lesson; the telescope is a footnote to it.",
      },
      {
        type: "paragraph",
        text: "Only then bring out the instruments. By that point the questions are coming from the students, which is the entire objective.",
      },
      {
        type: "map",
        destinationId: "hyderabad",
        caption: "Our astronomy sessions run alongside the Hyderabad itinerary.",
      },
    ],
  },
  {
    slug: "harbour-at-five",
    title: "The Harbour at Five in the Morning",
    standfirst:
      "A photography essay from the Konkan coast, where the working day starts long before the students are usually awake.",
    category: "Photography Essays",
    author: "Raigad Tours",
    authorRole: "Editorial",
    date: "9 January 2026",
    isoDate: "2026-01-09",
    readingTime: 4,
    imageSlot: "coastal-village",
    relatedJourneys: ["fort-aguada"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "We ask groups on the coastal itinerary to be at the harbour before sunrise. There is complaining. It stops the moment the first boats come in.",
      },
      {
        type: "gallery",
        slots: ["coastal-village", "market-craft", "archive-bw"],
        caption:
          "The morning sequence: boats landing, the sorting, and the market that follows within the hour.",
      },
      {
        type: "paragraph",
        text: "The economics lesson writes itself. A catch is landed, graded, argued over and sold inside ninety minutes, by people who have done it every morning for decades. No worksheet explains a supply chain as efficiently as watching one operate at speed in the half-light.",
      },
      {
        type: "quote",
        text: "Photograph the hands, not the faces. The hands are doing the work, and they will tell you more about this place than any portrait.",
        attribution: "Briefing given to every coastal group",
      },
    ],
  },
  {
    slug: "student-diary-ellora",
    title: "Diary: Three Days at Ellora",
    standfirst:
      "Unedited extracts from a Grade 8 student's trip journal, published with permission.",
    category: "Student Diaries",
    author: "Raigad Tours",
    authorRole: "Student Contributor",
    date: "18 December 2025",
    isoDate: "2025-12-18",
    readingTime: 5,
    imageSlot: "students-notebook",
    relatedJourneys: ["ajanta-ellora"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "Day one. The bus took six hours and I slept for four of them. When we arrived it did not look like much from the car park, which everyone said afterwards, so I am not embarrassed about writing it down.",
      },
      {
        type: "quote",
        text: "Then you walk round the corner and it is not a building. Somebody removed a hill and left a temple behind. I do not think I understood the word 'carved' before today.",
        attribution: "Day one, evening",
      },
      {
        type: "paragraph",
        text: "Day two. We did measurements. My group had to estimate how much rock was taken out. We got two hundred thousand tonnes and Sir said we were low. Nobody in my group has stopped talking about this.",
      },
      {
        type: "paragraph",
        text: "Day three. Last morning. I went back on my own for ten minutes before the bus. It was quiet and there was nobody there and I think that was the best part of the whole trip.",
      },
      { type: "image", slot: "students-notebook", caption: "Field notebooks from the same trip." },
    ],
  },
  {
    slug: "stepwell-mathematics",
    title: "The Mathematics of a Stepwell",
    standfirst:
      "Adalaj is a geometry lesson you can walk down into. A guide to teaching symmetry, depth and water engineering on site.",
    category: "Educational Resources",
    author: "Raigad Tours",
    authorRole: "Academic Team",
    date: "2 December 2025",
    isoDate: "2025-12-02",
    readingTime: 7,
    imageSlot: "stepwell-geometry",
    relatedJourneys: ["ahmedabad"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "A stepwell is the rare historic structure that is more interesting to a mathematics teacher than to a historian. Adalaj descends five storeys into the ground, and every one of those storeys is a repeated, rotated, precisely scaled instance of the one above it.",
      },
      { type: "heading", text: "Symmetry you can stand inside" },
      {
        type: "paragraph",
        text: "Octagonal symmetry is difficult to convey on a whiteboard and trivially obvious when you are standing at the centre of an octagonal well shaft looking up. Students who cannot reliably identify rotational symmetry in an exercise book identify it here immediately.",
      },
      {
        type: "quote",
        text: "The building is doing the explaining. We are just handing out measuring tape.",
      },
      {
        type: "paragraph",
        text: "The second exercise is thermal. The temperature difference between the street and the lowest level is usually five or six degrees. Students measure it on the way down, and the passive-cooling discussion happens on its own.",
      },
      { type: "map", destinationId: "ahmedabad", caption: "Adalaj sits just outside Ahmedabad." },
    ],
  },
  {
    slug: "first-trip-nerves",
    title: "Your First Trip as a Coordinator",
    standfirst:
      "Practical advice for the teacher who has just been handed responsibility for ninety students and a coach.",
    category: "Travel Tips",
    author: "Raigad Tours",
    authorRole: "Operations",
    date: "20 November 2025",
    isoDate: "2025-11-20",
    readingTime: 6,
    imageSlot: "teacher-guiding",
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "The first trip is the hardest, and almost everything that makes it hard is administrative rather than educational. Here is what we tell first-time coordinators, in the order it matters.",
      },
      { type: "heading", text: "Do the paperwork twice, early" },
      {
        type: "paragraph",
        text: "Consent forms, medical declarations and dietary requirements should be complete a fortnight before departure, not the night before. We supply the templates, but the chasing is yours, and it always takes twice as long as expected.",
      },
      {
        type: "quote",
        text: "Every problem we have ever had on a trip was visible in the paperwork a week beforehand.",
      },
      { type: "heading", text: "Know your three names" },
      {
        type: "paragraph",
        text: "Before departure, know the name of your trip leader, your driver, and the person answering our emergency line that week. Three names. Coordinators who have them sleep considerably better.",
      },
    ],
  },
  {
    slug: "reading-a-market",
    title: "Reading a Market",
    standfirst:
      "How a forty-minute walk through a working bazaar teaches supply, pricing and craft better than a term of theory.",
    category: "Destination Guides",
    author: "Raigad Tours",
    authorRole: "Editorial",
    date: "6 November 2025",
    isoDate: "2025-11-06",
    readingTime: 6,
    imageSlot: "market-craft",
    relatedJourneys: ["ahmedabad", "hyderabad"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "We build a market visit into almost every itinerary, and it is consistently underestimated by everyone until they have done it once. A bazaar is a live economics seminar that happens to also sell vegetables.",
      },
      {
        type: "paragraph",
        text: "Give each small group a single item and a budget. Their task is to find it in three different places, record the price, and explain the difference. The explanations they come back with are rarely what a textbook would predict.",
      },
      {
        type: "quote",
        text: "One group discovered the same item was cheaper at the far end of the street and spent twenty minutes working out why. That is the entire lesson, and we did not teach any of it.",
      },
      {
        type: "image",
        slot: "market-craft",
        caption: "Craft workshops within the market often welcome small student groups.",
      },
    ],
  },
  {
    slug: "twelve-hours-by-rail",
    title: "Twelve Hours by Rail",
    standfirst:
      "Why we still choose overnight trains for longer journeys, and what happens in the carriage.",
    category: "Teacher Stories",
    author: "Raigad Tours",
    authorRole: "Trip Leaders",
    date: "22 October 2025",
    isoDate: "2025-10-22",
    readingTime: 5,
    imageSlot: "railway-journey",
    relatedJourneys: ["hyderabad", "ahmedabad"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "A coach gets a group there faster. We frequently choose the train anyway, and the reason has nothing to do with logistics.",
      },
      {
        type: "paragraph",
        text: "Something in the format of a long rail journey dissolves the usual social geography of a school group. The seating is fixed, the corridors are shared, and by hour four the groupings that have been rigid since September have quietly rearranged themselves.",
      },
      {
        type: "quote",
        text: "You put ninety students on a train at nine at night. By morning, a different set of them are friends. It happens every time and we have never fully explained it.",
      },
      { type: "image", slot: "archive-bw", caption: "The overnight service, somewhere past midnight." },
    ],
  },
  {
    slug: "birds-before-breakfast",
    title: "Birds Before Breakfast",
    standfirst:
      "A photography essay on the first hour of light in the Ghats, and the case for getting a group up early.",
    category: "Photography Essays",
    author: "Raigad Tours",
    authorRole: "Editorial",
    date: "8 October 2025",
    isoDate: "2025-10-08",
    readingTime: 4,
    imageSlot: "birds-wildlife",
    relatedJourneys: ["mahabaleshwar"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "The forest at Matheran is a different place between half past five and half past six than it is for the rest of the day. Groups that sleep through it get a pleasant walk. Groups that do not get something else entirely.",
      },
      {
        type: "gallery",
        slots: ["birds-wildlife", "monsoon-ghats", "night-sky"],
        caption: "One hour, three exposures: pre-dawn, first light, and full morning.",
      },
      {
        type: "paragraph",
        text: "We hand out no cameras for the first twenty minutes. Listening first changes what students then photograph, and the pictures are consistently better for it.",
      },
    ],
  },
  {
    slug: "diary-first-sea",
    title: "Diary: The First Time I Saw the Sea",
    standfirst:
      "A Grade 6 student from inland Maharashtra writes about the coastal itinerary.",
    category: "Student Diaries",
    author: "Raigad Tours",
    authorRole: "Student Contributor",
    date: "24 September 2025",
    isoDate: "2025-09-24",
    readingTime: 3,
    imageSlot: "coastal-village",
    relatedJourneys: ["fort-aguada"],
    body: [
      {
        type: "paragraph",
        dropCap: true,
        text: "I knew what the sea looked like. I have seen it in films and on my cousin's phone. I did not know it made a noise all the time, without stopping, even at night when you are trying to sleep.",
      },
      {
        type: "quote",
        text: "Nobody told me it is loud. Why does nobody mention that it is loud?",
        attribution: "Day one",
      },
      {
        type: "paragraph",
        text: "On the second day we went out with the fishermen at five in the morning and I was sick over the side, and everybody was very nice about it, and I would still go again tomorrow.",
      },
    ],
  },
];

export const FEATURED_ARTICLE =
  ARTICLES.find((article) => article.featured) ?? ARTICLES[0];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(current: Article, limit = 3) {
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category === current.category,
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
