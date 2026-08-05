"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxHeroProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

/**
 * Full-bleed hero whose image drifts slightly slower than the page scroll.
 * The offset is deliberately small (8%) — enough to feel considered, not showy.
 */
export function ParallaxHero({ src, alt, children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <div ref={ref} className="relative h-[68vh] min-h-[520px] overflow-hidden">
      <motion.div
        style={prefersReducedMotion ? undefined : { y }}
        className="absolute inset-0 h-[112%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:sepia(0.18)_saturate(1.12)_contrast(1.04)_brightness(0.86)]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-brown/92 via-brown/45 to-brown/10" />

      <div className="relative flex h-full items-end">{children}</div>
    </div>
  );
}
