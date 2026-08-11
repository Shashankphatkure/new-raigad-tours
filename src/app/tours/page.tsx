import type { Metadata } from "next";
import { Suspense } from "react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TourCard } from "@/components/tours/TourCard";
import { ToursBrowser } from "@/components/tours/ToursBrowser";
import { IndiaMap } from "@/components/hero-map/IndiaMap";
import { FEATURED_TOURS, POPULAR_TOURS, TOURS } from "@/lib/tours/tours";
import type { TripType } from "@/lib/tours/types";

export const metadata: Metadata = {
  title: "Journeys — Raigad Tours",
  description:
    "Journeys that become lessons. A curated collection of educational school trips across India — heritage walks, science tours, industrial visits and nature camps.",
};

/** Collections surfaced below the browser, in the order schools tend to shop. */
const COLLECTIONS: { type: TripType; title: string; blurb: string }[] = [
  {
    type: "Weekend Trip",
    title: "Weekend Trips",
    blurb: "Short journeys that fit a Friday departure and a Sunday return.",
  },
  {
    type: "Educational Tour",
    title: "Educational Tours",
    blurb: "Multi-strand itineraries built around a syllabus, not a checklist.",
  },
  {
    type: "Industrial Visit",
    title: "Industrial Visits",
    blurb: "Working plants and production floors, with a manager as guide.",
  },
  {
    type: "Heritage Walk",
    title: "Heritage Walks",
    blurb: "Forts, caves and old cities read as evidence rather than scenery.",
  },
  {
    type: "Science Tour",
    title: "Science Tours",
    blurb: "Hands-on centres, planetariums and observatories.",
  },
];

export default function ToursPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="pt-16 md:pt-24">
          <Container>
            <Reveal className="max-w-4xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Our Journeys
              </p>
              <h1 className="mt-4 font-display text-h1 leading-[1.05] text-brown">
                Journeys That
                <span className="block text-forest">Become Lessons.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body leading-relaxed text-gray-600">
                Educational travel works when the place does the teaching. Every
                journey below is built around a clear destination, a
                measurable exercise, and a reason for students to still be
                arguing about it on the coach home.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Explore by region ---------- */}
        <section className="py-30">
          <Container>
            <Reveal className="mb-12 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Explore With Raigad Tours
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Where will your next journey take you?
              </h2>
              <p className="mt-5 text-body leading-relaxed text-gray-600">
                We organize educational and group journeys across Maharashtra
                and select destinations across India. Tap a region to see
                where your students could go.
              </p>
            </Reveal>

            <IndiaMap />
          </Container>
        </section>

        {/* ---------- Popular destinations ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <Reveal className="mb-12">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Most Requested
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Popular Destinations
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {POPULAR_TOURS.map((tour, index) => (
                <Reveal key={tour.slug} delay={index * 0.08}>
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Featured journeys ---------- */}
        <section className="py-20 md:py-24">
          <Container>
            <Reveal className="mb-12">
              <h2 className="font-display text-h2 leading-tight text-brown">
                Featured Journeys
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_TOURS.map((tour, index) => (
                <Reveal key={tour.slug} delay={index * 0.1}>
                  <TourCard tour={tour} priority={index === 0} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Browse all with filters ---------- */}
        <section className="pb-24">
          <Container>
            <Reveal className="mb-10">
              <h2 className="font-display text-h2 leading-tight text-brown">
                Browse all journeys
              </h2>
              <p className="mt-5 max-w-xl text-body leading-relaxed text-gray-600">
                Filter by destination, trip type, duration, year group, season,
                state or budget.
              </p>
            </Reveal>

            {/* useSearchParams needs a boundary for static prerendering. */}
            <Suspense
              fallback={<div className="h-64" aria-busy="true" aria-live="polite" />}
            >
              <ToursBrowser />
            </Suspense>
          </Container>
        </section>

        {/* ---------- Collections by trip type ---------- */}
        {COLLECTIONS.map((collection) => {
          const inCollection = TOURS.filter(
            (tour) => tour.tripType === collection.type,
          );
          if (inCollection.length === 0) return null;

          return (
            <section key={collection.type} className="py-24">
              <Container>
                <Reveal className="mb-12 max-w-2xl">
                  <h2 className="font-display text-h2 leading-tight text-brown">
                    {collection.title}
                  </h2>
                  <p className="mt-4 text-body leading-relaxed text-gray-600">
                    {collection.blurb}
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {inCollection.map((tour, index) => (
                    <Reveal key={tour.slug} delay={index * 0.08}>
                      <TourCard tour={tour} />
                    </Reveal>
                  ))}
                </div>
              </Container>
            </section>
          );
        })}
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}

