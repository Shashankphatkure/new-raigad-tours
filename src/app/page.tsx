import Image from "next/image";
import {
  BookOpen,
  CalendarCheck,
  Compass,
  LifeBuoy,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { IndiaMap } from "@/components/hero-map/IndiaMap";

/** Quiet credibility markers under the hero copy — tuned for the dark hero photo. */
const trustMarkers = [
  { icon: CalendarCheck, label: "Since 1998", tone: "text-saffron" },
  { icon: School, label: "For Schools & Groups", tone: "text-sky" },
  { icon: ShieldCheck, label: "Safety-First Protocol", tone: "text-cream" },
  { icon: LifeBuoy, label: "Dedicated Trip Support", tone: "text-saffron" },
];

const highlights = [
  {
    icon: Users,
    title: "School Picnics",
    description: "One-day experiences designed for school groups.",
  },
  {
    icon: BookOpen,
    title: "Educational Trips",
    description: "Journeys that bring learning beyond the classroom.",
  },
  {
    icon: Compass,
    title: "Outstation Journeys",
    description: "Explore destinations across Maharashtra and India.",
  },
  {
    icon: Sparkles,
    title: "Customized Packages",
    description: "Trips planned around the needs of each group or school.",
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
                Educational &amp; Group Travel
              </span>
            </span>

            <h1 className="mt-8 max-w-4xl font-display text-h1 leading-[1.05] text-cream">
              <span className="font-accent italic text-saffron">Journeys</span>{" "}
              That Take Learning
              <span className="block">Beyond the Classroom</span>
            </h1>

            <p className="mt-7 max-w-xl text-body leading-relaxed text-cream/85">
              Educational trips, school picnics and group journeys designed to
              make every destination worth remembering.
            </p>

            <div className="mt-12 max-w-lg rounded-card border border-cream/20 bg-cream/10 p-8 backdrop-blur-sm sm:p-10">
              <h2 className="font-display text-h3 leading-tight text-cream">
                Planning a school trip?
              </h2>
              <p className="mt-3 text-body leading-relaxed text-cream/80">
                Tell us where you want to go, and we&apos;ll help you plan the
                journey.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="accent">
                  Plan a School Trip →
                </Button>
              </div>
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

        {/* Interactive Maharashtra map */}
        <section id="explore-india" className="py-30">
          <Container>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Start With Maharashtra
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Explore Maharashtra
                </h2>
                <p className="mt-4 max-w-lg text-body leading-relaxed text-gray-600">
                  Discover the destinations Raigad Tours takes students and
                  groups across Maharashtra.
                </p>
              </div>
              <Button href="/tours" variant="ghost">
                Explore all destinations →
              </Button>
            </div>

            <IndiaMap regionIds={["maharashtra"]} />
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

        {/* Explore Our Journeys */}
        <section className="bg-beige py-30">
          <Container className="text-center">
            <h2 className="font-display text-h2 leading-tight text-brown">
              Explore Our Journeys
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/tours" variant="primary">
                Explore All Destinations →
              </Button>
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
                More Than 25 Years of Journeys That Matter
              </h2>
              <p className="mt-5 max-w-lg text-body leading-relaxed text-gray-600">
                From school picnics and educational excursions to journeys
                across India, Raigad Tours has spent decades creating
                experiences that take learning beyond the classroom.
              </p>
              <div className="mt-8">
                <MagneticButton>
                  <Button href="/about" variant="secondary">Learn More About Us</Button>
                </MagneticButton>
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
