import type { Metadata } from "next";
import Image from "next/image";
import { Globe, Heart, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Timeline } from "@/components/about/Timeline";
import { HandwrittenQuote } from "@/components/about/HandwrittenQuote";
import { GradientWaves } from "@/components/ui/GradientWaves";
import { ABOUT_IMAGES } from "@/lib/about-images";
import { MISSION_VALUES, STATS } from "@/lib/about-content";

export const metadata: Metadata = {
  title: "About — Raigad Tours",
  description:
    "More than destinations. We create lifelong memories. The story of Raigad Tours, guiding school groups across India since 1998.",
};

const MISSION_VALUE_ICONS = [Globe, Heart, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="absolute inset-0">
            <GradientWaves
              horizonColor="#1E4D3A"
              waveColor="#163A2B"
              crestColor="#E98B2A"
              speed={0.4}
              amplitude={2.5}
              waveScale={0.6}
              waveRatio={0.6}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={1}
              height={5.5}
              fogDepth={15}
              detail="medium"
              brightness={1}
              opacity={1}
              mouseInteraction
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brown/55 via-transparent to-transparent"
          />

          <Container className="relative">
            <Reveal className="max-w-3xl">
              <div className="rounded-card border border-cream/15 bg-cream/10 p-8 shadow-soft backdrop-blur-md sm:p-12">
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Our Story
                </p>
                <h1 className="mt-4 font-display text-h1 leading-[1.05] text-cream">
                  More than destinations.
                  <span className="block text-saffron">
                    We create lifelong memories.
                  </span>
                </h1>
                <p className="mt-8 max-w-xl text-body leading-relaxed text-cream/85">
                  Since 1998, Raigad Tours has taken school groups out of the
                  classroom and into the places their textbooks describe — forts,
                  caves, coastlines, factory floors and science centres across
                  India.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Hero photograph ---------- */}
        <section className="py-20 md:py-24">
          <Container>
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-image bg-beige lg:aspect-[21/9]">
                <Image
                  src={ABOUT_IMAGES.hero.src}
                  alt={ABOUT_IMAGES.hero.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover [filter:sepia(0.18)_saturate(1.12)_contrast(1.04)]"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Statistics ---------- */}
        <section className="py-30">
          <Container>
            <div className="grid grid-cols-1 gap-12 border-y border-line py-16 sm:grid-cols-3">
              {STATS.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.12}
                  className="text-center"
                >
                  <p className="font-display text-h1 leading-none text-forest">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-small uppercase tracking-[0.14em] text-gray-500">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- Timeline ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <Reveal className="mb-16 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                1998 — Today
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Twenty-seven years of first journeys
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <Timeline images={ABOUT_IMAGES} />
            </Reveal>
          </Container>
        </section>

        {/* ---------- Founder's Story ---------- */}
        <section className="py-30">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[42fr_58fr] lg:gap-20">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-image bg-beige">
                  <Image
                    src={ABOUT_IMAGES.founder.src}
                    alt={ABOUT_IMAGES.founder.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover [filter:sepia(0.2)_saturate(1.1)_contrast(1.04)]"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  The Founder&apos;s Story
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  It started with a history lesson that wouldn&apos;t sit still
                </h2>
                <div className="mt-8 flex flex-col gap-5 text-body leading-relaxed text-gray-600">
                  <p>
                    Our founder spent eleven years teaching history before
                    starting Raigad Tours. The frustration was always the same:
                    a chapter on the Maratha empire could be read, tested and
                    forgotten within a fortnight — but a student who had climbed
                    the steps to Raigad Fort never forgot it.
                  </p>
                  <p>
                    In 1998, a single hired bus took forty students up to the
                    fort. The trip was unglamorous and slightly over budget.
                    Every one of those students could still describe the
                    approach to the main gate years later.
                  </p>
                  <p>
                    That is the whole idea, and it has not changed since: put
                    young people in the place, give them someone who knows it
                    well, and get out of the way.
                  </p>
                </div>

                <div className="mt-12 border-l-2 border-saffron/40 pl-8">
                  <HandwrittenQuote
                    quote="A fort is not a date in a textbook. It is a climb, a view, and a story you tell for the rest of your life."
                    attribution="Founder, Raigad Tours"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Mission & Values ---------- */}
        <section className="bg-forest py-30">
          <Container>
            <Reveal className="mb-16 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                What Drives Us
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-cream">
                Our Mission & Values
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {MISSION_VALUES.map((value, index) => {
                const Icon = MISSION_VALUE_ICONS[index];
                return (
                  <Reveal key={value.title} delay={index * 0.1}>
                    <div className="rounded-card border border-cream/15 bg-cream/10 p-8 shadow-soft backdrop-blur-md">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/10">
                        <Icon className="h-6 w-6 text-saffron" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-6 font-display text-2xl text-cream">
                        {value.title}
                      </h3>
                      <p className="mt-4 text-small leading-relaxed text-cream/80">
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
