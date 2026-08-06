"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { computeCameraTransform } from "./map-geometry";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CameraTarget = { cx: number; cy: number; scale: number } | null;

type MapCameraProps = {
  /** Focal point + zoom level to animate toward, or null for the resting India view. */
  target: CameraTarget;
  reducedMotion: boolean;
  children: ReactNode;
};

/**
 * The single transform group every map layer lives inside — panning and
 * scaling it is the entire "cinematic zoom" effect. Everything downstream
 * (pins, labels, the bus) shares this coordinate space and counter-scales
 * itself against the same target scale to stay a constant visual size.
 */
export function MapCamera({ target, reducedMotion, children }: MapCameraProps) {
  const { x, y, scale } = target
    ? computeCameraTransform(target.cx, target.cy, target.scale)
    : { x: 0, y: 0, scale: 1 };

  return (
    <motion.g
      animate={{ x, y, scale }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.75, ease: EASE }}
    >
      {children}
    </motion.g>
  );
}
