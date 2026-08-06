import Image from "next/image";
import {
  BookOpen,
  CalendarCheck,
  Compass,
  LifeBuoy,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { HeroSearch } from "@/components/home/HeroSearch";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AccordionGallery } from "@/components/ui/AccordionGallery";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndiaMap } from "@/components/hero-map/IndiaMap";
import { placeholderTours } from "@/lib/placeholder-tours";
import { TOURS } from "@/lib/tours/tours";

/** Same three teasers, reshaped for the accordion gallery — wording untouched. */
const featuredGalleryItems = placeholderTours.map((tour) => ({
  image: tour.image,
  alt: tour.imageAlt,
  label: tour.title,
  eyebrow: tour.eyebrow,
  meta: tour.meta,
  description: tour.description,
  link: TOURS.find((t) => t.title === tour.title)
    ? `/tours/${TOURS.find((t) => t.title === tour.title)!.slug}`
    : undefined,
}));

/** Quiet credibility markers sitting under the search card — tuned for the dark hero photo. */
const trustMarkers = [
  { icon: CalendarCheck, label: "Since 1998", tone: "text-saffron" },
  { icon: School, label: "500+ Schools Served", tone: "text-sky" },
  { icon: ShieldCheck, label: "Safety-First Protocol", tone: "text-cream" },
  { icon: LifeBuoy, label: "Dedicated Trip Support", tone: "text-saffron" },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Educational Guides",
    description:
      "Every trip pairs a certified guide with a local historian or naturalist.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Organized",
    description:
      "Vetted routes, sized groups, and clear safety protocols on every itinerary.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "We keep groups intimate so every traveller gets real attention.",
  },
  {
    icon: Compass,
    title: "Local Experts",
    description:
      "Guides raised in the Sahyadris, sharing stories no guidebook has.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Background photograph */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1560756718-59609860409c?fm=jpg&q=60&w=1920&auto=format&fit=crop"
              alt="The valley below Raigad Fort in Maharashtra"
              fill
              priority
              sizes="100vw"
              className="object-cover [filter:sepia(0.18)_saturate(1.15)_contrast(1.05)_brightness(0.75)]"
            />
            {/* Dark wash for legible text, plus a vignette toward the edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/70 to-forest-dark/90" />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,transparent_0%,rgba(0,0,0,0.35)_100%)]"
            />
          </div>

          <Container className="relative pb-20 pt-16 md:pb-28 md:pt-24">
            <span className="inline-flex items-center gap-2.5 rounded-button border border-cream/25 bg-cream/10 py-2.5 pl-3 pr-5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden />
              <span className="text-small font-medium text-cream">
                Educational &amp; Heritage Travel
              </span>
            </span>

            <h1 className="mt-8 max-w-4xl font-display text-h1 leading-[1.05] text-cream">
              <span className="font-accent italic text-saffron">Learning</span>{" "}
              Beyond Classrooms Since 1998
            </h1>

            <p className="mt-7 max-w-xl text-body leading-relaxed text-cream/85">
              Heritage treks, coastal expeditions, and school programs across
              Raigad — led by certified guides and local experts.
            </p>

            <div className="mt-12">
              <HeroSearch />
            </div>

            {/* Trust markers */}
            <ul className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
              {trustMarkers.map(({ icon: Icon, label, tone }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-cream/10">
                    <Icon className={`h-4 w-4 ${tone}`} strokeWidth={1.75} />
                  </span>
                  <span className="text-small font-medium text-cream">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Interactive India map */}
        <section id="explore-india" className="py-30">
          <Container>
            <IndiaMap />
          </Container>
        </section>

        {/* Highlights */}
        <section className="py-30">
          <Container>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-beige">
                    <Icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-brown">{title}</h3>
                  <p className="text-small leading-relaxed text-gray-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Tours */}
        <section className="bg-beige py-30">
          <Container>
            <SectionHeading eyebrow="Featured Journeys" title="Popular Tours" />
            <div className="overflow-hidden rounded-card">
              <AccordionGallery
                items={featuredGalleryItems}
                defaultIndex={1}
                expandRatio={0.52}
                trigger="hover"
                accentColor="#e98b2a"
                overlayColor="#3e2f23"
                textColor="#f8f4ec"
                grayscale
                showLabels
                duration={0.6}
                parallax={0.5}
                tilt={0}
                stagger={0.08}
                height={460}
                gap={10}
                radius={20}
                orientation="horizontal"
              />
            </div>
          </Container>
        </section>

        {/* About teaser */}
        <section className="py-30">
          <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PhotoFrame
              src="https://images.unsplash.com/photo-1503676685182-2531a01b5b5c?fm=jpg&q=60&w=900&auto=format&fit=crop"
              alt="A school bus waiting to depart for a Raigad Tours trip"
              aspect="4/3"
            />
            <div>
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Every Journey Begins With Curiosity
              </p>
              <h2 className="mt-2 font-display text-h2 leading-tight text-brown">
                Two decades of guiding families through the Sahyadris
              </h2>
              <p className="mt-5 max-w-lg text-body leading-relaxed text-gray-600">
                What began as weekend treks for local students has grown into
                organized heritage and nature programs for families and
                schools across the region — always with safety, history, and
                genuine curiosity at the center.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="secondary">Learn More About Us</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
