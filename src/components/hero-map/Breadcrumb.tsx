"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type BreadcrumbProps = {
  /** Current region name, or null when at the resting India-wide view. */
  regionName: string | null;
  onReset: () => void;
  reducedMotion: boolean;
};

/** "India > Maharashtra" — only appears once a region is zoomed into. */
export function Breadcrumb({ regionName, onReset, reducedMotion }: BreadcrumbProps) {
  return (
    <motion.nav
      aria-label="Map breadcrumb"
      initial={false}
      animate={{ opacity: regionName ? 1 : 0, y: regionName ? 0 : -8 }}
      transition={{ duration: reducedMotion ? 0 : 0.35, ease: EASE }}
      style={{ pointerEvents: regionName ? "auto" : "none" }}
      className="absolute left-0 top-0 z-10 flex items-center gap-1.5 text-small font-medium"
    >
      <button
        type="button"
        onClick={onReset}
        tabIndex={regionName ? 0 : -1}
        className="cursor-pointer text-forest underline-offset-4 transition-colors hover:text-saffron hover:underline"
      >
        India
      </button>
      {regionName && (
        <>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" strokeWidth={1.75} />
          <span aria-current="page" className="text-brown">
            {regionName}
          </span>
        </>
      )}
    </motion.nav>
  );
}
