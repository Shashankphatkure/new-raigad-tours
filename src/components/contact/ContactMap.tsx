"use client";

import { motion, useReducedMotion } from "motion/react";
import { DESTINATIONS } from "@/components/hero-map/data";
import {
  HOME_POINT,
  INDIA_OUTLINE,
  MAP_VIEWBOX,
} from "@/components/hero-map/map-geometry";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Where-we-travel map. Destination pins drop in on a stagger; the office pin
 * sits at the Maharashtra home point with a slow outward pulse.
 */
export function ContactMap() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = Boolean(prefersReducedMotion);

  return (
    <svg
      viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
      className="h-auto w-full"
      role="img"
      aria-label="Illustrated map of India showing Raigad Tours' office in Maharashtra and the destinations we travel to"
    >
      <motion.path
        d={INDIA_OUTLINE}
        fill="#EFE8DD"
        stroke="#1E4D3A"
        strokeWidth="1.5"
        strokeOpacity="0.25"
        strokeLinejoin="round"
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
      />

      {DESTINATIONS.map((destination, index) => (
        <motion.g
          key={destination.id}
          transform={`translate(${destination.point.x}, ${destination.point.y})`}
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: reduced ? 0 : 0.3 + index * 0.07,
            ease: EASE,
          }}
        >
          <circle r="6" fill="#1E4D3A" stroke="#F8F4EC" strokeWidth="2" />
          <text
            x="0"
            y="-16"
            textAnchor="middle"
            fontSize="21"
            fontWeight={500}
            fill="#6B7280"
            className="font-sans"
          >
            {destination.name}
          </text>
        </motion.g>
      ))}

      {/* Office */}
      <g transform={`translate(${HOME_POINT.x}, ${HOME_POINT.y})`}>
        {!reduced && (
          <motion.circle
            r="10"
            fill="#E98B2A"
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: [1, 2.8], opacity: [0.4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <circle r="9" fill="#E98B2A" stroke="#F8F4EC" strokeWidth="3" />
        <text
          x="0"
          y="34"
          textAnchor="middle"
          fontSize="23"
          fontWeight={600}
          fill="#3E2F23"
          className="font-sans"
        >
          Our office
        </text>
      </g>
    </svg>
  );
}
