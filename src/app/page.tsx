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
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroMap } from "@/components/hero-map/HeroMap";
import { placeholderTours } from "@/lib/placeholder-tours";

/** Quiet credibility markers sitting under the search card. */
const trustMarkers = [
  { icon: CalendarCheck, label: "Since 1998", tone: "bg-forest/10 text-forest" },
  { icon: School, label: "500+ Schools Served", tone: "bg-saffron/15 text-saffron" },
  { icon: ShieldCheck, label: "Safety-First Protocol", tone: "bg-sky/15 text-sky" },
  { icon: LifeBuoy, label: "24-Hour Trip Line", tone: "bg-maroon/10 text-maroon" },
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
        <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
          {/* Subtle survey-grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
              maskImage:
                "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
            }}
          />
          {/* Warm wash behind the headline */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-beige/60 blur-3xl"
          />

          <Container className="relative">
            <span className="inline-flex items-center gap-2.5 rounded-button border border-line bg-white/80 py-2.5 pl-3 pr-5 shadow-soft backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden />
              <span className="text-small font-medium text-brown">
                Educational &amp; Heritage Travel
              </span>
            </span>

            <h1 className="mt-8 max-w-4xl font-display text-h1 leading-[1.05] text-brown">
              <span className="text-forest">Learning Beyond Classrooms</span>{" "}
              Since 1998
            </h1>

            <p className="mt-7 max-w-xl text-body leading-relaxed text-gray-600">
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
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${tone}`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-small font-medium text-brown">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Interactive India map */}
        <section className="py-30">
          <Container>
            <HeroMap />
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {placeholderTours.map((tour) => (
                <Card key={tour.title} {...tour} />
              ))}
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

        {/* CTA banner */}
        <section className="bg-forest py-30">
          <Container className="flex flex-col items-center gap-5 text-center">
            <h2 className="max-w-2xl font-display text-h2 leading-tight text-cream">
              Ready to plan your school&apos;s next educational journey?
            </h2>
            <p className="max-w-xl text-body text-cream/85">
              Tell us your group size and dates, and we&apos;ll help design a
              heritage or nature itinerary that fits.
            </p>
            <div className="mt-3">
              <Button href="/contact" variant="accent">
                Get in Touch
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
