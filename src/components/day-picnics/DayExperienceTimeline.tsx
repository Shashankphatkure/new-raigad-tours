"use client";

import { motion, useReducedMotion } from "motion/react";
import { DAY_EXPERIENCE_STEPS } from "@/lib/day-picnics";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A quiet route line connecting each stage of the day, left to right on desktop. */
export function DayExperienceTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* The route line — drawn once on scroll-into-view, hidden on mobile where steps stack. */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 top-[13px] hidden h-px bg-line md:block"
        style={{ transformOrigin: "left" }}
        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: EASE }}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-6">
        {DAY_EXPERIENCE_STEPS.map((item, index) => (
          <motion.div
            key={item.step}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
            className="relative"
          >
            <div className="relative flex items-center gap-4 md:block">
              <span className="relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 border-saffron bg-cream text-xs font-semibold text-forest md:mb-6">
                {index + 1}
              </span>
              <h3 className="font-display text-2xl text-brown md:mt-0">
                {item.title}
              </h3>
            </div>
            <p className="mt-2 text-small leading-relaxed text-gray-600 md:mt-3">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
