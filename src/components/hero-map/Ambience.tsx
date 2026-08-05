"use client";

import { motion } from "motion/react";

const CLOUDS = [
  { x: 120, y: 150, scale: 1, drift: 26, duration: 26 },
  { x: 700, y: 96, scale: 0.75, drift: -20, duration: 32 },
  { x: 800, y: 520, scale: 0.9, drift: 22, duration: 29 },
  { x: 150, y: 760, scale: 0.65, drift: 18, duration: 35 },
];

const BIRD_FLIGHTS = [
  { startX: 560, startY: 250, delay: 3, duration: 13 },
  { startX: 240, startY: 470, delay: 11, duration: 15 },
];

/** A soft, low-contrast cloud built from overlapping circles. */
function Cloud({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`} fill="#1E4D3A" opacity="0.05">
      <circle cx="0" cy="0" r="18" />
      <circle cx="20" cy="4" r="14" />
      <circle cx="-20" cy="5" r="13" />
      <circle cx="6" cy="9" r="15" />
    </g>
  );
}

/** Two small strokes suggesting a bird in flight. */
function Bird() {
  return (
    <g fill="none" stroke="#3E2F23" strokeWidth="1.6" strokeLinecap="round" opacity="0.35">
      <path d="M -7 0 Q -3.5 -4 0 0" />
      <path d="M 0 0 Q 3.5 -4 7 0" />
    </g>
  );
}

/**
 * Slow ambient motion: drifting clouds and the occasional bird crossing.
 * Entirely decorative, so it is skipped under prefers-reduced-motion.
 */
export function Ambience({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return null;

  return (
    <g aria-hidden="true">
      {CLOUDS.map((cloud) => (
        <motion.g
          key={`${cloud.x}-${cloud.y}`}
          initial={{ x: cloud.x, y: cloud.y, opacity: 0 }}
          animate={{
            x: [cloud.x, cloud.x + cloud.drift, cloud.x],
            opacity: 1,
          }}
          transition={{
            x: {
              duration: cloud.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 1.6, ease: "easeOut" },
          }}
        >
          <Cloud scale={cloud.scale} />
        </motion.g>
      ))}

      {BIRD_FLIGHTS.map((flight) => (
        <motion.g
          key={`${flight.startX}-${flight.startY}`}
          initial={{ x: flight.startX, y: flight.startY, opacity: 0 }}
          animate={{
            x: [flight.startX, flight.startX + 150],
            y: [flight.startY, flight.startY - 45],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: 7,
            delay: flight.delay,
            repeat: Infinity,
            repeatDelay: flight.duration,
            ease: "easeInOut",
          }}
        >
          <Bird />
        </motion.g>
      ))}
    </g>
  );
}
