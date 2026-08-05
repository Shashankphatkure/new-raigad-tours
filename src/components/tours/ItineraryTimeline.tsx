"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import type { ItineraryDay } from "@/lib/tours/types";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Day-by-day itinerary as a vertical rail. Selecting a day expands its detail;
 * the rail itself doubles as a progress indicator for the trip's shape.
 */
export function ItineraryTimeline({ days }: { days: ItineraryDay[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <ol className="relative flex flex-col">
      {/* Continuous rail behind the markers */}
      <span
        aria-hidden
        className="absolute bottom-6 left-[11px] top-6 w-px bg-line"
      />

      {days.map((day, index) => {
        const isActive = index === activeIndex;

        return (
          <li key={day.day} className="relative pl-12">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              className="w-full cursor-pointer py-6 text-left"
            >
              {/* Marker */}
              <span
                aria-hidden
                className={`absolute left-0 top-8 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isActive
                    ? "border-saffron bg-saffron"
                    : "border-line bg-cream"
                }`}
              >
                {isActive && <Check className="h-3 w-3 text-cream" strokeWidth={3} />}
              </span>

              <p
                className={`text-small font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? "text-saffron" : "text-gray-500"
                }`}
              >
                {day.day}
              </p>
              <h3
                className={`mt-2 font-display text-h3 leading-snug transition-colors duration-300 ${
                  isActive ? "text-forest" : "text-brown"
                }`}
              >
                {day.title}
              </h3>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={
                    prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
                  }
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <p className="max-w-[62ch] text-body leading-relaxed text-gray-600">
                      {day.description}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {day.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-3 text-small text-gray-600"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-saffron"
                          />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
