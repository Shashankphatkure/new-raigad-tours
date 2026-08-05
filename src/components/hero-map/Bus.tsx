"use client";

import { motion } from "motion/react";

type BusProps = {
  /** Whether the wheels should be spinning (i.e. the bus is travelling). */
  driving: boolean;
  reducedMotion: boolean;
};

const WHEEL_SPIN = {
  rotate: 360,
  transition: { duration: 0.7, repeat: Infinity, ease: "linear" as const },
};

/**
 * Minimal vector illustration of a classic Indian tourist coach, drawn around
 * its own origin (0,0) at the centre so the parent can position and rotate it
 * along the route without extra offset maths.
 */
export function Bus({ driving, reducedMotion }: BusProps) {
  const wheelsSpinning = driving && !reducedMotion;

  return (
    <g>
      {/* Soft ground shadow */}
      <ellipse cx="0" cy="15" rx="26" ry="5" fill="#3E2F23" opacity="0.16" />

      {/* Body */}
      <rect
        x="-26"
        y="-16"
        width="52"
        height="26"
        rx="7"
        fill="#F8F4EC"
        stroke="#1E4D3A"
        strokeWidth="2"
      />

      {/* Forest-green lower band — classic coach livery */}
      <path
        d="M -26 2 H 26 V 3 A 7 7 0 0 1 19 10 H -19 A 7 7 0 0 1 -26 3 Z"
        fill="#1E4D3A"
      />

      {/* Saffron accent stripe */}
      <rect x="-26" y="-2" width="52" height="3" fill="#E98B2A" />

      {/* Windows */}
      <rect x="-21" y="-12" width="11" height="9" rx="2" fill="#4B9CD3" opacity="0.55" />
      <rect x="-7" y="-12" width="11" height="9" rx="2" fill="#4B9CD3" opacity="0.55" />
      <rect x="7" y="-12" width="9" height="9" rx="2" fill="#4B9CD3" opacity="0.55" />

      {/* Windscreen (front of travel direction) */}
      <path
        d="M 19 -12 H 23 A 3 3 0 0 1 26 -9 V -4 H 19 Z"
        fill="#4B9CD3"
        opacity="0.7"
      />

      {/* Headlight */}
      <circle cx="24" cy="4" r="2" fill="#E98B2A" />

      {/* Wheels */}
      <g>
        <circle cx="-14" cy="10" r="6" fill="#3E2F23" />
        <motion.g
          animate={wheelsSpinning ? WHEEL_SPIN : { rotate: 0 }}
          style={{ originX: "-14px", originY: "10px" }}
        >
          <circle cx="-14" cy="10" r="2.4" fill="#F8F4EC" />
          <rect x="-14.6" y="5.6" width="1.2" height="8.8" fill="#F8F4EC" opacity="0.75" />
        </motion.g>
      </g>
      <g>
        <circle cx="14" cy="10" r="6" fill="#3E2F23" />
        <motion.g
          animate={wheelsSpinning ? WHEEL_SPIN : { rotate: 0 }}
          style={{ originX: "14px", originY: "10px" }}
        >
          <circle cx="14" cy="10" r="2.4" fill="#F8F4EC" />
          <rect x="13.4" y="5.6" width="1.2" height="8.8" fill="#F8F4EC" opacity="0.75" />
        </motion.g>
      </g>
    </g>
  );
}
