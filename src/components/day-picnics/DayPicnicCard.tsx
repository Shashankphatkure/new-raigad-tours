import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DAY_PICNIC_IMAGES } from "@/lib/day-picnics-images";
import type { DayPicnic } from "@/lib/day-picnics";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Photography-first card: image dominates, metadata stays small and quiet. */
export function DayPicnicCard({ picnic }: { picnic: DayPicnic }) {
  const image = DAY_PICNIC_IMAGES[picnic.id];
  const priceLabel = picnic.priceTiers
    ? `${inr.format(Math.min(...picnic.priceTiers.map((t) => t.price)))}–${inr.format(
        Math.max(...picnic.priceTiers.map((t) => t.price)),
      )}`
    : inr.format(picnic.price);

  return (
    <article className="group">
      <Link href="#enquiry" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03] [filter:sepia(0.14)_saturate(1.1)_contrast(1.03)]"
            />
          )}

          {/* Highlights on hover, matching the Tours card treatment */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brown/95 via-brown/60 to-transparent p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          >
            <p className="text-small font-semibold uppercase tracking-[0.12em] text-saffron">
              Highlights
            </p>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {picnic.highlights.slice(0, 3).map((highlight) => (
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
            {priceLabel}
            <span className="font-normal normal-case text-gray-500">
              {" "}
              / student
            </span>
          </span>
        </div>

        <div className="mt-6">
          <p className="flex items-center gap-1.5 text-small font-semibold uppercase tracking-[0.12em] text-saffron">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
            {picnic.location}
          </p>

          <h3 className="mt-3 font-display text-h3 leading-tight text-brown transition-colors duration-300 group-hover:text-forest">
            {picnic.name}
          </h3>

          <p className="mt-3 text-small leading-relaxed text-gray-600">
            {picnic.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-small text-gray-500">
            {picnic.grades && <span>{picnic.grades}</span>}
            {picnic.food && <span>{picnic.food}</span>}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
            <span className="inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-forest">
              Explore
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </span>
            <span className="text-small text-gray-500">
              {picnic.priceTiers ? (
                <>
                  {priceLabel}
                  <span className="ml-1 text-gray-400">/ student</span>
                </>
              ) : (
                <>
                  <span className="font-medium text-brown">{priceLabel}</span>
                  <span className="ml-1">/ student</span>
                </>
              )}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
