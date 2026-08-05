import Image from "next/image";
import { BookOpen, Compass, ShieldCheck, Users } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroMap } from "@/components/hero-map/HeroMap";
import { placeholderTours } from "@/lib/placeholder-tours";

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
        <section className="pt-10 md:pt-16">
          <Container>
            <div className="relative overflow-hidden rounded-image">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
                <Image
                  src="https://images.unsplash.com/photo-1560756718-59609860409c?fm=jpg&q=60&w=1600&auto=format&fit=crop"
                  alt="The valley below Raigad Fort in Maharashtra"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover [filter:sepia(0.18)_saturate(1.15)_contrast(1.05)_brightness(0.85)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16">
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Educational &amp; Heritage Travel
                </p>
                <h1 className="mt-3 max-w-2xl font-display text-h1 leading-[1.05] text-cream">
                  Learning Beyond Classrooms Since 1998
                </h1>
                <p className="mt-5 max-w-xl text-body text-cream/90">
                  Heritage treks, coastal expeditions, and school programs
                  across Raigad — led by certified guides and local experts.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/tours" variant="accent">Explore Tours</Button>
                  <Button variant="inverse">Download Brochure</Button>
                </div>
              </div>
            </div>
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
