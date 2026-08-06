"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Clock, GraduationCap, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TOURS } from "@/lib/tours/tours";
import type { Destination, Region } from "./types";

const EASE = [0.22, 1, 0.36, 1] as const;

type StateZoomProps = {
  region: Region;
  destinations: Destination[];
  onClose: () => void;
};

/**
 * Mobile stand-in for the in-map camera zoom: a fullscreen overlay with the
 * region's destinations as a horizontally swipeable, scroll-snapped strip —
 * deep SVG zooming doesn't read well at phone width, so this trades the
 * cinematic camera move for a simpler, still-focused browsing pattern.
 */
export function StateZoom({ region, destinations, onClose }: StateZoomProps) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${region.name} destinations`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-50 flex flex-col bg-cream"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
            India
          </p>
          <h2 className="font-display text-h3 leading-tight text-brown">
            {region.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to the full map"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-brown transition-colors hover:border-forest hover:text-forest"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 py-6">
        {destinations.map((destination) => {
          const matchingTour = TOURS.find(
            (tour) => tour.destinationId === destination.id,
          );
          const tourHref = matchingTour ? `/tours/${matchingTour.slug}` : "/tours";

          return (
            <article
              key={destination.id}
              className="w-[82vw] shrink-0 snap-center overflow-hidden rounded-image bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  sizes="82vw"
                  className="object-cover [filter:sepia(0.18)_saturate(1.15)_contrast(1.05)_brightness(0.98)]"
                />
                <span className="absolute left-4 top-4 rounded-button bg-cream/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest backdrop-blur-sm">
                  {destination.tripType}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-display text-h3 leading-tight text-brown">
                  {destination.name}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-small text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {destination.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {destination.grades}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {destination.highlights.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-button bg-beige px-3 py-1.5 text-small text-brown"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Button href={tourHref} variant="primary" className="mt-1">
                  Explore Journey
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      <p className="px-5 pb-5 text-small text-gray-500">
        Swipe to browse {destinations.length} destination
        {destinations.length === 1 ? "" : "s"} in {region.name}.
      </p>
    </motion.div>
  );
}
