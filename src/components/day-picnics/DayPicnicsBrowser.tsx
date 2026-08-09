"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { DAY_PICNICS, DAY_PICNIC_CATEGORIES, type DayPicnicCategory } from "@/lib/day-picnics";
import { DayPicnicCard } from "./DayPicnicCard";

const EASE = [0.22, 1, 0.36, 1] as const;
const ALL = "all" as const;

export function DayPicnicsBrowser() {
  const [active, setActive] = useState<DayPicnicCategory | typeof ALL>(ALL);
  const prefersReducedMotion = useReducedMotion();

  const results = useMemo(
    () => (active === ALL ? DAY_PICNICS : DAY_PICNICS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      {/* Editorial category selector — a horizontal rail of underlined labels. */}
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex gap-8 overflow-x-auto overflow-y-hidden border-b border-line pb-0"
      >
        <button
          type="button"
          role="tab"
          aria-selected={active === ALL}
          onClick={() => setActive(ALL)}
          className={`relative shrink-0 cursor-pointer whitespace-nowrap pb-5 text-body font-medium transition-colors duration-300 ${
            active === ALL ? "text-brown" : "text-gray-400 hover:text-brown"
          }`}
        >
          All Destinations
          {active === ALL && (
            <motion.span
              layoutId="day-picnic-category-marker"
              className="absolute inset-x-0 -bottom-px h-0.5 bg-saffron"
              transition={{ duration: 0.4, ease: EASE }}
            />
          )}
        </button>

        {DAY_PICNIC_CATEGORIES.map((category) => {
          const isActive = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category.id)}
              className={`relative shrink-0 cursor-pointer whitespace-nowrap pb-5 text-body font-medium transition-colors duration-300 ${
                isActive ? "text-brown" : "text-gray-400 hover:text-brown"
              }`}
            >
              {category.label}
              {isActive && (
                <motion.span
                  layoutId="day-picnic-category-marker"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-saffron"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-small text-gray-500" role="status" aria-live="polite">
        {results.length} destination{results.length === 1 ? "" : "s"}
      </p>

      <motion.div
        layout={!prefersReducedMotion}
        className="mt-8 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {results.map((picnic) => (
            <motion.div
              key={picnic.id}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <DayPicnicCard picnic={picnic} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
