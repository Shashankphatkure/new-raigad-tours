"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TIMELINE } from "@/lib/about-content";

const EASE = [0.22, 1, 0.36, 1] as const;

type TimelineProps = {
  /** Maps an era's imageSlot to a resolved image + alt text. */
  images: Record<string, { src: string; alt: string }>;
};

export function Timeline({ images }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = TIMELINE[activeIndex];
  const activeImage = images[active.imageSlot];

  return (
    <div>
      {/* Year selector — a horizontal rail with a moving marker. */}
      <div
        role="tablist"
        aria-label="Company history by era"
        className="relative flex gap-2 overflow-x-auto overflow-y-hidden border-b border-line pb-0 sm:gap-0"
      >
        {TIMELINE.map((era, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={era.year}
              role="tab"
              id={`era-tab-${era.year}`}
              aria-selected={isActive}
              aria-controls={`era-panel-${era.year}`}
              onClick={() => setActiveIndex(index)}
              className="relative flex-1 shrink-0 cursor-pointer px-5 pb-5 pt-2 text-left transition-colors duration-300 sm:px-6"
            >
              <span
                className={`block font-display text-h3 leading-none transition-colors duration-300 ${
                  isActive ? "text-forest" : "text-gray-400 hover:text-brown"
                }`}
              >
                {era.year}
              </span>
              <span
                className={`mt-2 block text-small transition-colors duration-300 ${
                  isActive ? "text-brown" : "text-gray-500"
                }`}
              >
                {era.label}
              </span>

              {isActive && (
                <motion.span
                  layoutId="timeline-marker"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-saffron"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active era panel */}
      <div
        role="tabpanel"
        id={`era-panel-${active.year}`}
        aria-labelledby={`era-tab-${active.year}`}
        className="mt-14"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.year}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige">
              {activeImage && (
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover [filter:sepia(0.22)_saturate(1.1)_contrast(1.04)]"
                />
              )}
            </div>

            <div>
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                {active.year}
              </p>
              <h3 className="mt-3 font-display text-h3 leading-tight text-brown">
                {active.title}
              </h3>
              <p className="mt-5 max-w-lg text-body leading-relaxed text-gray-600">
                {active.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
