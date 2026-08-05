"use client";

import { motion } from "motion/react";
import type { Destination } from "./types";

type DestinationPinProps = {
  destination: Destination;
  isActive: boolean;
  /** True once the bus has arrived — drives the soft pulse. */
  hasArrived: boolean;
  reducedMotion: boolean;
  onSelect: (id: string) => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function DestinationPin({
  destination,
  isActive,
  hasArrived,
  reducedMotion,
  onSelect,
}: DestinationPinProps) {
  const { point, name } = destination;

  return (
    <g
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
      style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
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
        x="0"
        y="-20"
        textAnchor="middle"
        fontSize="15"
        fontWeight={isActive ? 600 : 500}
        fill={isActive ? "#3E2F23" : "#6B7280"}
        opacity={isActive ? 1 : 0.7}
        className="pointer-events-none select-none font-sans tracking-wide transition-all duration-300 group-hover:fill-[#3E2F23] group-hover:opacity-100"
      >
        {name}
      </text>
    </g>
  );
}
