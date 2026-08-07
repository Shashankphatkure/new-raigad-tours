"use client";

import { motion } from "motion/react";
import type { Region } from "./types";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Roughly a third of the visible window at any given zoom level. */
const FOCUS_RADIUS = 340;

type RegionFocusProps = {
  region: Region;
  reducedMotion: boolean;
};

/**
 * A soft glow behind the active region, so it reads as emphasized while the
 * rest of India stays visible around it. We only have India's outer
 * silhouette (no per-state boundary paths), so this approximates "the
 * selected state stands out, the rest recedes slightly" with a gradient
 * rather than pretending to draw an actual state border.
 */
export function RegionFocus({ region, reducedMotion }: RegionFocusProps) {
  const { marker, zoom } = region;
  const radius = FOCUS_RADIUS / zoom.zoom;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: EASE }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`region-focus-${region.id}`}>
          <stop offset="0%" stopColor="#E98B2A" stopOpacity="0.16" />
          <stop offset="65%" stopColor="#E98B2A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#E98B2A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse
        cx={marker.x}
        cy={marker.y}
        rx={radius}
        ry={radius}
        fill={`url(#region-focus-${region.id})`}
      />
    </motion.g>
  );
}
