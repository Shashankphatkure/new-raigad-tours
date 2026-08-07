"use client";

import { motion } from "motion/react";
import type { Region } from "./types";

const EASE = [0.22, 1, 0.36, 1] as const;

type RegionMarkerProps = {
  region: Region;
  /** False once any region is zoomed into — every marker recedes together. */
  visible: boolean;
  /** True for the ~150ms "expand" beat right after this marker is clicked. */
  justClicked: boolean;
  /** 1 / camera.zoom — keeps the marker a constant screen size as the camera moves. */
  counterScale: number;
  reducedMotion: boolean;
  onSelect: (id: string) => void;
};

/**
 * A single elegant marker for a collapsed region — no city names, just the
 * region itself, inviting a click rather than presenting a finished map.
 */
export function RegionMarker({
  region,
  visible,
  justClicked,
  counterScale,
  reducedMotion,
  onSelect,
}: RegionMarkerProps) {
  const { marker, name } = region;

  return (
    <motion.g
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35, ease: EASE }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <g
        role="button"
        tabIndex={visible ? 0 : -1}
        aria-label={`Explore ${name}`}
        onClick={() => onSelect(region.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(region.id);
          }
        }}
        className="group cursor-pointer outline-none"
        style={{ transform: `translate(${marker.x}px, ${marker.y}px)` }}
      >
        <motion.g
          animate={{ scale: counterScale }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: EASE }}
        >
          {/* Generous invisible hit area */}
          <circle r="34" fill="transparent" />

          {/* Idle "come explore me" pulse */}
          {!reducedMotion && (
            <motion.circle
              r="12"
              fill="#E98B2A"
              initial={{ scale: 1, opacity: 0.35 }}
              animate={{ scale: [1, 2], opacity: [0.35, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}

          {/* Focus ring — keyboard users only */}
          <circle
            r="20"
            fill="none"
            stroke="#1E4D3A"
            strokeWidth="1.5"
            className="opacity-0 transition-opacity duration-200 group-focus-visible:opacity-100"
          />

          {/* Hover halo */}
          <circle
            r="18"
            fill="#1E4D3A"
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          />

          <motion.circle
            r="10"
            fill="#1E4D3A"
            stroke="#F8F4EC"
            strokeWidth="3"
            animate={{ scale: justClicked ? 1.5 : 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.25, ease: EASE }}
          />

          <rect
            x="-48"
            y="16"
            width="96"
            height="27"
            rx="13.5"
            fill="#F8F4EC"
            stroke="#E6DDCD"
            className="transition-transform duration-300 group-hover:scale-105"
            style={{ transformOrigin: "center" }}
          />
          <text
            x="0"
            y="34"
            textAnchor="middle"
            fontSize="14"
            fontWeight={600}
            fill="#3E2F23"
            className="pointer-events-none select-none font-sans tracking-wide"
          >
            {name}
          </text>
        </motion.g>
      </g>
    </motion.g>
  );
}
