import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, GraduationCap, MapPin } from "lucide-react";
import { TOUR_IMAGES } from "@/lib/tours/images";
import type { Tour } from "@/lib/tours/types";

type TourCardProps = {
  tour: Tour;
  priority?: boolean;
};

export function TourCard({ tour, priority = false }: TourCardProps) {
  const image = TOUR_IMAGES[tour.imageSlot];

  return (
    <article className="group">
      <Link href={`/tours/${tour.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105 [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
            />
          )}

          {/* Hover panel — three highlights, kept short so it never overflows the card. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brown/95 via-brown/60 to-transparent p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          >
            <p className="text-small font-semibold uppercase tracking-[0.12em] text-saffron">
              At a glance
            </p>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {tour.highlights.slice(0, 3).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-small leading-snug text-cream/90"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-saffron"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <span className="absolute left-5 top-5 rounded-button bg-cream/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
            {tour.tripType}
          </span>
        </div>

        <div className="mt-6">
          <p className="flex items-center gap-1.5 text-small font-semibold uppercase tracking-[0.12em] text-saffron">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
            {tour.destination}, {tour.state}
          </p>

          <h3 className="mt-3 font-display text-h3 leading-tight text-brown transition-colors duration-300 group-hover:text-forest">
            {tour.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-small text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
              {tour.durationLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.5} />
              {tour.gradesLabel}
            </span>
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {tour.highlights.slice(0, 3).map((highlight) => (
              <li
                key={highlight}
                className="rounded-button bg-beige px-3 py-1.5 text-small text-brown"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
            <span className="inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-forest">
              Explore Journey
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </span>
            <span className="text-small text-gray-500">Enquire for pricing</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
