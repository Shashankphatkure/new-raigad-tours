"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
};

/**
 * Counts up to `to` once scrolled into view. Under prefers-reduced-motion the
 * final value renders immediately.
 */
export function Counter({ to, suffix = "", duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Under reduced motion the final value is derived below, not animated.
    if (!inView || prefersReducedMotion) return;

    let frame: number;
    const start = performance.now();
    const durationMs = duration * 1000;

    const step = (now: number) => {
      const linear = Math.min(1, (now - start) / durationMs);
      // Ease-out cubic: fast start, gentle settle.
      const eased = 1 - Math.pow(1 - linear, 3);
      setValue(Math.round(to * eased));

      if (linear < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, prefersReducedMotion]);

  const displayed = prefersReducedMotion ? to : value;

  return (
    <span ref={ref}>
      {displayed.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
