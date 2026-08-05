"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  ChevronDown,
  GraduationCap,
  IndianRupee,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TOURS } from "@/lib/tours/tours";
import {
  BUDGET_BANDS,
  DURATION_BANDS,
  GRADE_BANDS,
  TRIP_TYPES,
} from "@/lib/tours/types";
import { TRAVEL_MONTHS } from "@/lib/contact-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const ANY = "any";

const DESTINATIONS = Array.from(new Set(TOURS.map((t) => t.destination))).sort();

/** Quick-pick collections mirroring the chip row in the reference layout. */
const QUICK_PICKS = [
  { label: "Heritage Walks", tripType: "Heritage Walk" },
  { label: "Science Tours", tripType: "Science Tour" },
  { label: "Nature Camps", tripType: "Nature Camp" },
  { label: "Industrial Visits", tripType: "Industrial Visit" },
];

/** A field inside the search card: icon, small caps label, and its control. */
function SearchField({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 items-center gap-4 px-6 py-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button bg-beige">
        <Icon className="h-5 w-5 text-forest" strokeWidth={1.5} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          {label}
        </span>
        {children}
      </span>
    </div>
  );
}

/** Borderless select that reads as plain text until focused. */
function BareSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  return (
    <span className="relative flex items-center">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer appearance-none truncate bg-transparent pr-6 text-body font-medium text-brown outline-none focus-visible:underline focus-visible:decoration-saffron focus-visible:underline-offset-4"
      >
        <option value={ANY}>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-0 h-4 w-4 text-gray-500"
        strokeWidth={1.75}
        aria-hidden
      />
    </span>
  );
}

/** Compact pill select used in the secondary filter row. */
function PillSelect({
  icon: Icon,
  value,
  onChange,
  placeholder,
  options,
}: {
  icon: typeof MapPin;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  const isActive = value !== ANY;

  return (
    <span
      className={`relative inline-flex items-center gap-2 rounded-button border px-4 py-2.5 transition-colors duration-200 ${
        isActive
          ? "border-forest bg-forest text-cream"
          : "border-line bg-white text-brown hover:border-gray-400"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="cursor-pointer appearance-none bg-transparent pr-5 text-small font-medium outline-none"
      >
        <option value={ANY}>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 h-3.5 w-3.5 opacity-70"
        strokeWidth={1.75}
        aria-hidden
      />
    </span>
  );
}

export function HeroSearch() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const [mode, setMode] = useState<"browse" | "custom">("browse");
  const [destination, setDestination] = useState(ANY);
  const [grade, setGrade] = useState(ANY);
  const [month, setMonth] = useState(ANY);
  const [students, setStudents] = useState("");
  const [tripType, setTripType] = useState(ANY);
  const [duration, setDuration] = useState(ANY);
  const [budget, setBudget] = useState(ANY);

  /** Carries the chosen filters through to the Tours page. */
  const goToTours = (overrides: Record<string, string> = {}) => {
    const params = new URLSearchParams();
    const entries: Record<string, string> = {
      destination,
      grade,
      tripType,
      duration,
      budget,
      ...overrides,
    };

    for (const [key, value] of Object.entries(entries)) {
      if (value && value !== ANY) params.set(key, value);
    }

    const queryString = params.toString();
    router.push(queryString ? `/tours?${queryString}` : "/tours");
  };

  return (
    <div className="w-full">
      {/* ---------- Mode tabs ---------- */}
      <div
        role="tablist"
        aria-label="How would you like to start?"
        className="inline-flex rounded-card border border-line bg-white p-1.5 shadow-soft"
      >
        {(
          [
            { id: "browse", label: "Browse Journeys" },
            { id: "custom", label: "Plan a Custom Trip" },
          ] as const
        ).map((tab) => {
          const isActive = mode === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setMode(tab.id)}
              className="relative cursor-pointer rounded-button px-6 py-3 text-small font-semibold transition-colors duration-200"
            >
              {isActive && (
                <motion.span
                  layoutId="hero-tab"
                  className="absolute inset-0 rounded-button bg-forest"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
              <span
                className={`relative ${isActive ? "text-cream" : "text-gray-500 hover:text-brown"}`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---------- Panel ---------- */}
      <AnimatePresence mode="wait">
        {mode === "browse" ? (
          <motion.div
            key="browse"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-6 overflow-hidden rounded-card bg-white shadow-soft"
          >
            {/* Primary search row */}
            <div className="flex flex-col divide-y divide-line lg:flex-row lg:divide-x lg:divide-y-0">
              <SearchField icon={MapPin} label="Destination">
                <BareSelect
                  value={destination}
                  onChange={setDestination}
                  placeholder="Anywhere in India"
                  options={DESTINATIONS.map((d) => ({ value: d, label: d }))}
                />
              </SearchField>

              <SearchField icon={GraduationCap} label="Year group">
                <BareSelect
                  value={grade}
                  onChange={setGrade}
                  placeholder="Any grade"
                  options={GRADE_BANDS.map((b) => ({ value: b.id, label: b.label }))}
                />
              </SearchField>

              <SearchField icon={CalendarDays} label="Travel month">
                <BareSelect
                  value={month}
                  onChange={setMonth}
                  placeholder="Flexible"
                  options={TRAVEL_MONTHS.map((m) => ({ value: m, label: m }))}
                />
              </SearchField>

              <SearchField icon={Users} label="Students">
                <input
                  type="number"
                  min={1}
                  value={students}
                  onChange={(event) => setStudents(event.target.value)}
                  placeholder="How many?"
                  className="w-full bg-transparent text-body font-medium text-brown outline-none placeholder:font-normal placeholder:text-gray-500"
                />
              </SearchField>

              <div className="p-3 lg:flex lg:items-center">
                <Button
                  onClick={() => goToTours()}
                  variant="primary"
                  className="w-full gap-2.5 py-5 lg:h-full lg:w-auto lg:px-9"
                >
                  <Search className="h-4 w-4" strokeWidth={2} />
                  Find Journeys
                </Button>
              </div>
            </div>

            {/* Secondary filter row */}
            <div className="flex flex-wrap items-center gap-3 border-t border-line bg-cream/40 px-6 py-5">
              <PillSelect
                icon={Sparkles}
                value={tripType}
                onChange={setTripType}
                placeholder="All types"
                options={TRIP_TYPES.map((t) => ({ value: t, label: t }))}
              />
              <PillSelect
                icon={CalendarDays}
                value={duration}
                onChange={setDuration}
                placeholder="Any length"
                options={DURATION_BANDS.map((b) => ({ value: b.id, label: b.label }))}
              />
              <PillSelect
                icon={IndianRupee}
                value={budget}
                onChange={setBudget}
                placeholder="Any budget"
                options={BUDGET_BANDS.map((b) => ({ value: b.id, label: b.label }))}
              />

              <span aria-hidden className="mx-1 hidden h-6 w-px bg-line sm:block" />

              {QUICK_PICKS.map((pick) => (
                <button
                  key={pick.label}
                  type="button"
                  onClick={() => goToTours({ tripType: pick.tripType })}
                  className="cursor-pointer rounded-button border border-line bg-white px-4 py-2.5 text-small text-brown transition-colors duration-200 hover:border-saffron hover:text-saffron"
                >
                  {pick.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="custom"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-6 rounded-card bg-white p-8 shadow-soft sm:p-10"
          >
            <h2 className="max-w-xl font-display text-h3 leading-snug text-brown">
              Most of our itineraries began as a request from a teacher.
            </h2>
            <p className="mt-5 max-w-xl text-body leading-relaxed text-gray-600">
              Tell us the syllabus you are working to, your group size and your
              dates. We will build the journey around it and send back a costed
              itinerary within three working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
              <Button href="/tours" variant="secondary">
                Browse Existing Journeys
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
