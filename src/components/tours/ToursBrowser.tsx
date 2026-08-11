"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { TourCard } from "./TourCard";
import { TOURS } from "@/lib/tours/tours";
import { DURATION_BANDS, GRADE_BANDS, SEASONS, TRIP_TYPES } from "@/lib/tours/types";

const EASE = [0.22, 1, 0.36, 1] as const;
const ANY = "any";

const DESTINATIONS = Array.from(new Set(TOURS.map((t) => t.destination))).sort();
const STATES = Array.from(new Set(TOURS.map((t) => t.state))).sort();

type Filters = {
  destination: string;
  tripType: string;
  duration: string;
  grade: string;
  season: string;
  state: string;
};

const EMPTY_FILTERS: Filters = {
  destination: ANY,
  tripType: ANY,
  duration: ANY,
  grade: ANY,
  season: ANY,
  state: ANY,
};

/** Compact labelled <select>, styled to read as part of the filter rail. */
function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  const isActive = value !== ANY;

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`cursor-pointer rounded-button border px-3.5 py-2.5 text-small transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-forest ${
          isActive
            ? "border-forest bg-forest text-cream"
            : "border-line bg-white text-brown hover:border-gray-400"
        }`}
      >
        <option value={ANY}>Any</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ToursBrowser() {
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  const [filtersExpanded, setFiltersExpanded] = useState(true);

  // Seed from the URL once, so the hero search can hand off its selections.
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const [filters, setFilters] = useState<Filters>(() => ({
    destination: searchParams.get("destination") ?? ANY,
    tripType: searchParams.get("tripType") ?? ANY,
    duration: searchParams.get("duration") ?? ANY,
    grade: searchParams.get("grade") ?? ANY,
    season: searchParams.get("season") ?? ANY,
    state: searchParams.get("state") ?? ANY,
  }));

  const setFilter = (key: keyof Filters) => (value: string) =>
    setFilters((current) => ({ ...current, [key]: value }));

  const trimmedQuery = query.trim().toLowerCase();
  const activeCount =
    Object.values(filters).filter((value) => value !== ANY).length +
    (trimmedQuery ? 1 : 0);

  const results = useMemo(() => {
    return TOURS.filter((tour) => {
      if (filters.destination !== ANY && tour.destination !== filters.destination)
        return false;
      if (filters.tripType !== ANY && tour.tripType !== filters.tripType) return false;
      if (filters.state !== ANY && tour.state !== filters.state) return false;

      if (filters.season !== ANY && !tour.seasons.includes(filters.season as never))
        return false;

      if (filters.duration !== ANY) {
        const band = DURATION_BANDS.find((b) => b.id === filters.duration);
        if (band && (tour.durationDays < band.min || tour.durationDays > band.max))
          return false;
      }

      if (filters.grade !== ANY) {
        const band = GRADE_BANDS.find((b) => b.id === filters.grade);
        // Keep a tour if its grade range overlaps the selected band at all.
        if (band && (tour.gradeMax < band.min || tour.gradeMin > band.max))
          return false;
      }

      if (trimmedQuery) {
        const haystack = [
          tour.title,
          tour.destination,
          tour.state,
          tour.tripType,
          tour.standfirst,
          ...tour.highlights,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(trimmedQuery)) return false;
      }

      return true;
    });
  }, [filters, trimmedQuery]);

  const clearAll = () => {
    setFilters(EMPTY_FILTERS);
    setQuery("");
  };

  return (
    <div>
      {/* ---------- Sticky filter rail ---------- */}
      <div className="sticky top-20 z-30 -mx-6 border-y border-line bg-cream/85 px-6 py-6 backdrop-blur-md md:-mx-10 md:px-10 lg:-mx-20 lg:px-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-5">
            <label className="relative flex min-w-[220px] flex-1 flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Search
              </span>
              <span className="relative flex items-center">
                <Search
                  className="pointer-events-none absolute left-3.5 h-4 w-4 text-gray-500"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Fort, ecology, science…"
                  className="w-full rounded-button border border-line bg-white py-2.5 pl-10 pr-3.5 text-small text-brown placeholder:text-gray-500 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                />
              </span>
            </label>

            <button
              type="button"
              onClick={() => setFiltersExpanded((current) => !current)}
              aria-expanded={filtersExpanded}
              aria-controls="tour-filter-fields"
              className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-button border px-4 py-2.5 text-small font-medium transition-colors duration-200 ${
                filtersExpanded
                  ? "border-line bg-white text-brown hover:border-gray-400"
                  : "border-forest bg-forest text-cream"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
              Filters
              {activeCount > 0 && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                    filtersExpanded ? "bg-beige text-brown" : "bg-cream/20 text-cream"
                  }`}
                >
                  {activeCount}
                </span>
              )}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  filtersExpanded ? "rotate-180" : ""
                }`}
                strokeWidth={1.75}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {filtersExpanded && (
              <motion.div
                id="tour-filter-fields"
                initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={
                  prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
                }
                exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-end gap-x-4 gap-y-5 pt-1">
                  <FilterSelect
                    label="Destination"
                    value={filters.destination}
                    onChange={setFilter("destination")}
                    options={DESTINATIONS.map((d) => ({ value: d, label: d }))}
                  />
                  <FilterSelect
                    label="Trip type"
                    value={filters.tripType}
                    onChange={setFilter("tripType")}
                    options={TRIP_TYPES.map((t) => ({ value: t, label: t }))}
                  />
                  <FilterSelect
                    label="Duration"
                    value={filters.duration}
                    onChange={setFilter("duration")}
                    options={DURATION_BANDS.map((b) => ({ value: b.id, label: b.label }))}
                  />
                  <FilterSelect
                    label="Grades"
                    value={filters.grade}
                    onChange={setFilter("grade")}
                    options={GRADE_BANDS.map((b) => ({ value: b.id, label: b.label }))}
                  />
                  <FilterSelect
                    label="Season"
                    value={filters.season}
                    onChange={setFilter("season")}
                    options={SEASONS.map((s) => ({ value: s, label: s }))}
                  />
                  <FilterSelect
                    label="State"
                    value={filters.state}
                    onChange={setFilter("state")}
                    options={STATES.map((s) => ({ value: s, label: s }))}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2 text-small text-gray-500" role="status" aria-live="polite">
              <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
              {results.length} {results.length === 1 ? "journey" : "journeys"}
              {activeCount > 0 && ` · ${activeCount} filter${activeCount === 1 ? "" : "s"} active`}
            </p>

            <AnimatePresence>
              {activeCount > 0 && (
                <motion.button
                  type="button"
                  onClick={clearAll}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="flex cursor-pointer items-center gap-1.5 text-small font-semibold uppercase tracking-[0.12em] text-forest transition-colors hover:text-saffron"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                  Clear all
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ---------- Results ---------- */}
      <div className="pt-16">
        {results.length > 0 ? (
          <motion.div
            layout={!prefersReducedMotion}
            className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {results.map((tour) => (
                <motion.div
                  key={tour.slug}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-h3 text-brown">No journeys match</p>
            <p className="mt-4 text-body text-gray-600">
              Try widening one of the filters — or tell us what you need and we
              will build it.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-8 cursor-pointer text-small font-semibold uppercase tracking-[0.12em] text-forest underline underline-offset-4 transition-colors hover:text-saffron"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
