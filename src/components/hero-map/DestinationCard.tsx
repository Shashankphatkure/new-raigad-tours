"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Clock, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TOURS } from "@/lib/tours/tours";
import type { Destination } from "./types";

const EASE = [0.22, 1, 0.36, 1] as const;

type DestinationCardProps = {
  destination: Destination;
  /** Card only reveals once the bus has completed its journey. */
  visible: boolean;
  reducedMotion: boolean;
  /** Mobile swipe handlers — omitted on larger screens. */
  onSwipeNext?: () => void;
  onSwipePrev?: () => void;
};

export function DestinationCard({
  destination,
  visible,
  reducedMotion,
  onSwipeNext,
  onSwipePrev,
}: DestinationCardProps) {
  const swipeEnabled = Boolean(onSwipeNext || onSwipePrev);

  // Deep-link to the first journey covering this destination, else the index.
  const matchingTour = TOURS.find(
    (tour) => tour.destinationId === destination.id,
  );
  const tourHref = matchingTour ? `/tours/${matchingTour.slug}` : "/tours";

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.article
          key={destination.id}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: EASE }}
          drag={swipeEnabled ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) onSwipeNext?.();
            else if (info.offset.x > 60) onSwipePrev?.();
          }}
          className="overflow-hidden rounded-image bg-white shadow-soft"
          aria-live="polite"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
            <Image
              src={destination.image}
              alt={destination.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover [filter:sepia(0.18)_saturate(1.15)_contrast(1.05)_brightness(0.98)]"
            />
            <span className="absolute left-5 top-5 rounded-button bg-cream/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest backdrop-blur-sm">
              {destination.tripType}
            </span>
          </div>

          <div className="flex flex-col gap-5 p-7 sm:p-8">
            <div>
              <p className="flex items-center gap-1.5 text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                {destination.region}
              </p>
              <h3 className="mt-2 font-display text-h3 leading-tight text-brown">
                {destination.title}
              </h3>
              <p className="mt-5 text-body leading-relaxed text-gray-600">
                {destination.description}
              </p>
            </div>

            <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-forest" strokeWidth={1.5} />
                <div>
                  <dt className="sr-only">Duration</dt>
                  <dd className="text-small font-medium text-brown">
                    {destination.duration}
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-forest" strokeWidth={1.5} />
                <div>
                  <dt className="sr-only">Suitable grades</dt>
                  <dd className="text-small font-medium text-brown">
                    {destination.grades}
                  </dd>
                </div>
              </div>
            </dl>

            <div>
              <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                Highlights
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {destination.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-button bg-beige px-3 py-1.5 text-small text-brown"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <Button href={tourHref} variant="primary">
                Explore Journey
              </Button>
            </div>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
}
