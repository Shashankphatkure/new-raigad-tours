"use client";

import { motion } from "motion/react";
import { CONTOUR_LINES, INDIA_OUTLINE } from "./map-geometry";

const EASE = [0.22, 1, 0.36, 1] as const;

/** The landmass: soft beige fill, muted outline, subtle interior contours. */
export function MapLandmass({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <g>
      <motion.path
        d={INDIA_OUTLINE}
        fill="#EFE8DD"
        stroke="#1E4D3A"
        strokeWidth="1.5"
        strokeOpacity="0.28"
        strokeLinejoin="round"
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
      />

      {/* Contour texture, clipped to the landmass */}
      <g clipPath="url(#india-clip)" aria-hidden="true">
        {CONTOUR_LINES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="#1E4D3A"
            strokeWidth="1"
            strokeOpacity="0.1"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: reducedMotion ? 0 : 0.35 + i * 0.08,
              ease: EASE,
            }}
          />
        ))}
      </g>
    </g>
  );
}

type RouteProps = {
  path: string;
  /** Bumped each time a new journey starts, to replay the draw-on animation. */
  journeyKey: number;
  duration: number;
  reducedMotion: boolean;
};

/** The journey route, drawn progressively as though sketched by hand. */
export function MapRoute({ path, journeyKey, duration, reducedMotion }: RouteProps) {
  return (
    <g aria-hidden="true">
      {/* Faint under-stroke gives the drawn line a little depth */}
      <motion.path
        key={`shadow-${journeyKey}`}
        d={path}
        fill="none"
        stroke="#1E4D3A"
        strokeWidth="5"
        strokeOpacity="0.08"
        strokeLinecap="round"
        initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reducedMotion ? 0 : duration, ease: EASE }}
      />
      <motion.path
        key={`route-${journeyKey}`}
        d={path}
        fill="none"
        stroke="#1E4D3A"
        strokeWidth="2.5"
        strokeOpacity="0.55"
        strokeLinecap="round"
        strokeDasharray="1 9"
        initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reducedMotion ? 0 : duration, ease: EASE }}
      />
    </g>
  );
}
