/**
 * Contact details and FAQ copy.
 *
 * Address, phone numbers, email and hours below are PLACEHOLDERS awaiting the
 * company's real details. Everything is centralised here so they can be
 * replaced in one place.
 */

export const OFFICE = {
  name: "Raigad Tours",
  addressLines: ["Station Road", "Mahad, Raigad District", "Maharashtra 402301"],
  phones: [
    { label: "Enquiries", value: "+91 00000 00000", href: "tel:+910000000000" },
    { label: "Bookings", value: "+91 00000 00001", href: "tel:+910000000001" },
  ],
  email: "hello@raigadtours.example",
  whatsapp: {
    display: "+91 00000 00000",
    // wa.me expects the number in international format, digits only.
    href: "https://wa.me/910000000000",
  },
  emergency: {
    label: "24-hour trip line",
    value: "+91 00000 00002",
    href: "tel:+910000000002",
    note: "Staffed around the clock for the duration of every trip in progress.",
  },
  hours: [
    { days: "Monday – Friday", time: "9:30 am – 6:30 pm" },
    { days: "Saturday", time: "10:00 am – 4:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  responseTime: "We reply to every enquiry within one working day.",
  /** Placeholder map query — swap for the real address. */
  mapQuery: "Mahad, Raigad, Maharashtra, India",
};

export const TRAVEL_MONTHS = [
  "June 2026",
  "July 2026",
  "August 2026",
  "September 2026",
  "October 2026",
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
  "March 2027",
  "Not decided yet",
];

export const SPECIAL_REQUIREMENTS = [
  "Vegetarian / Jain meals",
  "Accessibility support",
  "Medical requirements",
  "First-time travellers",
  "Overnight rail preferred",
  "Extended itinerary",
];

export const CONTACT_FAQS = [
  {
    question: "How far in advance should we book?",
    answer:
      "Six to eight weeks is comfortable for most itineraries. Peak season — October to December and February to March — fills earlier, so three months ahead is safer if your dates are fixed.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      "We run trips from twenty students upward. Smaller groups are possible for specialised itineraries, though the per-student cost rises. There is no upper limit; our largest single movement was 340 students across seven coaches.",
  },
  {
    question: "Do accompanying teachers pay?",
    answer:
      "No. Accompanying staff travel free at the ratio your school policy requires, typically one adult per fifteen to twenty students. Additional staff beyond that ratio travel at cost.",
  },
  {
    question: "What is included in the quoted price?",
    answer:
      "Transport, accommodation, all meals, entry fees, guide charges, and medical cover. The figure we quote per student is the figure you pay — we do not add surcharges after booking.",
  },
  {
    question: "How do you handle permissions and parental consent?",
    answer:
      "We supply the consent pack, medical declaration forms and the itinerary documentation your office needs for approvals. Collecting completed forms from parents stays with the school, since only you can chase them effectively.",
  },
  {
    question: "What happens if a student falls ill during a trip?",
    answer:
      "Every departure carries a qualified first-aider and a medical kit, and we identify the nearest hospital at each overnight stop before departure. The school is contacted immediately, and our 24-hour line stays open for the duration of the trip.",
  },
];
