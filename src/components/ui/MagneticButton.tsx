"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/** Cursor distance, in pixels, at which the pull starts. */
const FIELD_RADIUS = 90;
/** Maximum pull, in pixels, once the cursor is at the element's centre. */
const MAX_PULL = 14;

/**
 * Wraps a single element in a magnetic field: as the cursor nears, the
 * element drifts toward it, then springs back once the cursor leaves.
 */
export function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);

      if (distance < FIELD_RADIUS) {
        const pull = (1 - distance / FIELD_RADIUS) * MAX_PULL;
        const angle = Math.atan2(dy, dx);
        rawX.set(Math.cos(angle) * pull);
        rawY.set(Math.sin(angle) * pull);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion, rawX, rawY]);

  return (
    <motion.div ref={ref} style={{ x, y, display: "inline-block" }}>
      {children}
    </motion.div>
  );
}
