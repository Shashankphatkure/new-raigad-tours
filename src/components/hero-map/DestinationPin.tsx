"use client";

import { motion } from "motion/react";
import { LeaderLine } from "./LeaderLine";
import type { Destination } from "./types";

type DestinationPinProps = {
  destination: Destination;
  isActive: boolean;
  /** True once the bus has arrived — drives the soft pulse. */
  hasArrived: boolean;
  reducedMotion: boolean;
  /** Counters the camera's zoom (1 / region scale) so the pin stays a constant size. */
  counterScale: number;
  /** Staggered entrance delay, in seconds, so labels don't all snap in at once. */
  delay: number;
  onSelect: (id: string) => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function DestinationPin({
  destination,
  isActive,
  hasArrived,
  reducedMotion,
  counterScale,
  delay,
  onSelect,
}: DestinationPinProps) {
  const { point, name, labelOffset, labelAnchor = "middle" } = destination;
  const dx = labelOffset?.dx ?? 0;
  const dy = labelOffset?.dy ?? -22;

  return (
    <g style={{ transform: `translate(${point.x}px, ${point.y}px)` }}>
      <motion.g
        role="button"
        tabIndex={0}
        aria-label={`${name}, ${destination.region}. ${destination.duration} trip.`}
        aria-pressed={isActive}
        onClick={() => onSelect(destination.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(destination.id);
          }
        }}
        className="group cursor-pointer outline-none"
        initial={reducedMotion ? { opacity: 1, scale: counterScale } : { opacity: 0, scale: counterScale * 0.6 }}
        animate={{ opacity: 1, scale: counterScale }}
        transition={{
          duration: reducedMotion ? 0 : 0.45,
          ease: EASE,
          delay: reducedMotion ? 0 : delay,
        }}
      >
        {/* Generous invisible hit area — comfortable for touch and mouse alike. */}
        <circle r="26" fill="transparent" />

        {/* Soft pulse once the journey completes */}
        {hasArrived && !reducedMotion && (
          <motion.circle
            r="10"
            fill="#E98B2A"
            initial={{ scale: 1, opacity: 0.45 }}
            animate={{ scale: [1, 2.6], opacity: [0.45, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Focus ring — visible for keyboard users only */}
        <circle
          r="17"
          fill="none"
          stroke="#1E4D3A"
          strokeWidth="1.5"
          className="opacity-0 transition-opacity duration-200 group-focus-visible:opacity-100"
        />

        {/* Hover halo */}
        <circle
          r="14"
          fill="#1E4D3A"
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        />

        {labelOffset && <LeaderLine dx={dx} dy={dy} />}

        {/* The pin itself */}
        <motion.circle
          fill={isActive ? "#E98B2A" : "#1E4D3A"}
          stroke="#F8F4EC"
          strokeWidth="2.5"
          initial={false}
          animate={{ r: isActive ? 8 : 6 }}
          whileHover={{ r: 8 }}
          transition={{ duration: 0.4, ease: EASE }}
        />

        {/* Label */}
        <text
          x={dx}
          y={dy}
          textAnchor={labelAnchor}
          fontSize="15"
          fontWeight={isActive ? 600 : 500}
          fill={isActive ? "#3E2F23" : "#6B7280"}
          opacity={isActive ? 1 : 0.7}
          className="pointer-events-none select-none font-sans tracking-wide transition-all duration-300 group-hover:fill-[#3E2F23] group-hover:opacity-100"
        >
          {name}
        </text>
      </motion.g>
    </g>
  );
}
