import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BedDouble,
  Bus,
  CalendarRange,
  Check,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ParallaxHero } from "@/components/tours/ParallaxHero";
import { ItineraryTimeline } from "@/components/tours/ItineraryTimeline";
import { TourCard } from "@/components/tours/TourCard";
import { ArticleMap } from "@/components/tours/ArticleMap";
import { TOURS, getRelatedTours, getTour } from "@/lib/tours/tours";
import { TOUR_IMAGES } from "@/lib/tours/images";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata(
  props: PageProps<"/tours/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const tour = getTour(slug);
  if (!tour) return { title: "Journeys — Raigad Tours" };

  return {
    title: `${tour.title} — Raigad Tours`,
    description: tour.standfirst,
  };
}

export default async function TourDetailPage(props: PageProps<"/tours/[slug]">) {
  const { slug } = await props.params;
  const tour = getTour(slug);

  if (!tour) notFound();

  const heroImage = TOUR_IMAGES[tour.imageSlot];
  const related = getRelatedTours(tour);

  const logistics = [
    { icon: Bus, label: "Transport", value: tour.transport },
    { icon: UtensilsCrossed, label: "Meals", value: tour.meals },
    { icon: BedDouble, label: "Accommodation", value: tour.accommodation },
  ];

  return (
    <>
      <Nav />

      <main>
        {/* ---------- Parallax hero ---------- */}
        <ParallaxHero
          src={heroImage?.src ?? ""}
          alt={heroImage?.alt ?? tour.title}
        >
          <Container className="pb-14">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-cream/80 transition-colors hover:text-saffron"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              All Journeys
            </Link>

            <p className="mt-8 flex items-center gap-2 text-small font-semibold uppercase tracking-[0.14em] text-saffron">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
              {tour.destination}, {tour.state}
            </p>

            <h1 className="mt-3 max-w-3xl font-display text-h1 leading-[1.05] text-cream">
              {tour.title}
            </h1>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-small text-cream/85">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
                {tour.durationLabel}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" strokeWidth={1.5} />
                {tour.gradesLabel}
              </span>
              <span className="flex items-center gap-2">
                <CalendarRange className="h-4 w-4" strokeWidth={1.5} />
                {tour.seasons.join(" · ")}
              </span>
              <span className="text-cream">
                from{" "}
                <span className="font-medium">{inr.format(tour.priceFrom)}</span>{" "}
                per student
              </span>
            </div>
          </Container>
        </ParallaxHero>

        {/* ---------- Overview ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[60fr_40fr] lg:gap-20">
              <Reveal>
                <h2 className="font-display text-h2 leading-tight text-brown">
                  Journey overview
                </h2>
                <p className="mt-8 max-w-[62ch] text-body leading-[1.75] text-gray-700">
                  {tour.standfirst}
                </p>
                <p className="mt-6 max-w-[62ch] text-body leading-[1.75] text-gray-600">
                  {tour.overview}
                </p>

                <div className="mt-12">
                  <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Highlights
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-forest"
                          strokeWidth={2}
                        />
                        <span className="text-body text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="flex flex-col gap-8 rounded-card bg-beige p-8">
                  <ArticleMap destinationId={tour.destinationId} />
                  <div className="border-t border-line pt-6">
                    <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                      Best season
                    </p>
                    <p className="mt-3 text-body leading-relaxed text-brown">
                      {tour.bestSeason}
                    </p>
                  </div>
                  <Button href="/contact" variant="primary">
                    Enquire About This Journey
                  </Button>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Itinerary ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[35fr_65fr] lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Day by day
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  The itinerary
                </h2>
                <p className="mt-6 text-body leading-relaxed text-gray-600">
                  Select a day to see what it holds. Most schools adjust at
                  least one element — tell us what you need.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <ItineraryTimeline days={tour.itinerary} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Learning outcomes ---------- */}
        <section className="py-30">
          <Container>
            <Reveal className="mb-12 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                What Students Take Home
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Learning outcomes
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {tour.learningOutcomes.map((outcome, index) => (
                <Reveal key={outcome} delay={index * 0.08}>
                  <div className="border-t border-line pt-6">
                    <span className="font-display text-h3 text-saffron">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-body leading-relaxed text-gray-600">
                      {outcome}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Gallery ---------- */}
        <section className="pb-30">
          <Container>
            <Reveal className="mb-10">
              <h2 className="font-display text-h2 leading-tight text-brown">
                Gallery
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {tour.gallerySlots.map((slot) => {
                  const image = TOUR_IMAGES[slot];
                  if (!image) return null;
                  return (
                    <div
                      key={slot}
                      className="group relative aspect-[3/4] overflow-hidden rounded-image bg-beige"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105 [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
                      />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Logistics ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <Reveal className="mb-12 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                The Practical Detail
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Transport, meals &amp; accommodation
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {logistics.map(({ icon: Icon, label, value }, index) => (
                <Reveal key={label} delay={index * 0.08}>
                  <div className="h-full rounded-card bg-white p-8 shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige">
                      <Icon className="h-5 w-5 text-forest" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-brown">{label}</h3>
                    <p className="mt-4 text-small leading-relaxed text-gray-600">
                      {value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Safety & teacher info ---------- */}
        <section className="py-30">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="flex items-center gap-2 text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
                  Safety
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  On every departure
                </h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {tour.safety.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-forest"
                        strokeWidth={2}
                      />
                      <span className="text-body text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="flex items-center gap-2 text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                  For teachers
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  What we handle
                </h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {tour.teacherInfo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-forest"
                        strokeWidth={2}
                      />
                      <span className="text-body text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35fr_65fr] lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Before You Ask
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Questions about this journey
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <Accordion items={tour.faqs} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Related journeys ---------- */}
        <section className="py-30">
          <Container>
            <Reveal className="mb-12">
              <h2 className="font-display text-h2 leading-tight text-brown">
                Other journeys you might consider
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <TourCard tour={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
