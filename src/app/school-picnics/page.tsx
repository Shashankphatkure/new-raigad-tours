import type { Metadata } from "next";
import Image from "next/image";
import { Compass, HeartHandshake, IndianRupee, Users } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { DayPicnicsBrowser } from "@/components/day-picnics/DayPicnicsBrowser";
import { DayExperienceTimeline } from "@/components/day-picnics/DayExperienceTimeline";
import { PhotoStory } from "@/components/day-picnics/PhotoStory";
import { DAY_PICNICS, DAY_PICNIC_FAQS } from "@/lib/day-picnics";
import { DAY_PICNIC_IMAGES } from "@/lib/day-picnics-images";

export const metadata: Metadata = {
  title: "School Picnics — Raigad Tours",
  description:
    "One-day school picnics to more than twenty destinations across Mumbai, Thane, Pune and the Sahyadris — amusement parks, water parks, resorts and hands-on farm experiences, each priced and planned for school groups.",
};

const WHY_DAY_PICNICS = [
  {
    icon: Compass,
    title: "Learning Outside the Classroom",
    description:
      "A theme park's queue teaches patience differently than a textbook does, and a farm's mud teaches biology by hand rather than by diagram.",
  },
  {
    icon: Users,
    title: "Shared Experience",
    description:
      "Every student on the same coach, the same ride, the same joke about who screamed loudest — the kind of day a class still talks about at term's end.",
  },
  {
    icon: HeartHandshake,
    title: "A Full Day, Not a Half-Measure",
    description:
      "No overnight logistics, no packing lists — just a full day away that's over by evening, the same day it started.",
  },
  {
    icon: IndianRupee,
    title: "Priced and Planned",
    description:
      "One quoted figure per student, food included as listed for each destination, transport arranged and quoted separately — nothing sprung on the coordinator signing off.",
  },
];

export default function DayPicnicsPage() {
  const heroImage = DAY_PICNIC_IMAGES.hero;
  const introImage = DAY_PICNIC_IMAGES["monteria-village"];

  return (
    <>
      <Nav />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover [filter:sepia(0.12)_saturate(1.1)_contrast(1.03)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/35 to-brown/10"
            />
          </div>

          <Container className="absolute inset-x-0 bottom-0">
            <Reveal className="max-w-2xl pb-16 sm:pb-20 md:pb-24">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                One-Day School Picnics
              </p>
              <h1 className="mt-4 font-display text-h1 leading-[1.05] text-cream">
                One day.
                <span className="block">A whole new classroom.</span>
              </h1>
              <p className="mt-6 max-w-lg text-body leading-relaxed text-cream/85">
                Educational outings, amusement parks, water parks and group
                experiences designed for students to learn, explore and have
                fun together — each on a fixed, per-student tariff.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#destinations" variant="accent">
                  Explore Destinations
                </Button>
                <Button href="#enquiry" variant="inverse">
                  Plan a School Picnic
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- 01: Introduction ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Not Every Trip Needs a Night Away
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Twenty-two destinations, one day each.
                </h2>
                <p className="mt-6 max-w-lg text-body leading-relaxed text-gray-600">
                  A water park before the monsoon ends, a theme park that
                  becomes the whole term&apos;s conversation, a working farm an
                  hour from Mumbai — these are the trips schools plan on
                  shorter notice and a fixed budget. We run them on a
                  per-student tariff covering entry and food, with transport
                  quoted separately for your group.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige">
                  <Image
                    src={introImage.src}
                    alt={introImage.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover [filter:sepia(0.14)_saturate(1.1)_contrast(1.03)]"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- 02: Destinations ---------- */}
        <section id="destinations" className="bg-beige py-24 md:py-30">
          <Container>
            <SectionHeading
              eyebrow={`${DAY_PICNICS.length} Destinations`}
              title="Where students can go"
            />
            <p className="-mt-6 mb-8 text-small text-gray-500">
              Prices shown are per student, covering entry and food as listed.
              Transport charges extra*.
            </p>
            <DayPicnicsBrowser />

            <div className="mt-16 flex justify-center">
              <Button href="#enquiry" variant="primary">
                Plan a School Picnic
              </Button>
            </div>
          </Container>
        </section>

        {/* ---------- 04: The Day Experience ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <SectionHeading eyebrow="How It Works" title="The Day Experience" />
            <p className="-mt-4 mb-16 max-w-xl text-body leading-relaxed text-gray-600">
              What a typical day picnic looks like, coach to coach.
            </p>
            <DayExperienceTimeline />
          </Container>
        </section>

        {/* ---------- 05: Why School Picnics ---------- */}
        <section className="bg-forest py-24 md:py-30">
          <Container>
            <Reveal className="mb-16 max-w-2xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Why School Picnics
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-cream">
                A day out is still an education
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_DAY_PICNICS.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/10">
                    <item.icon className="h-6 w-6 text-saffron" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-small leading-relaxed text-cream/75">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ---------- 06: Photo Story ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <SectionHeading eyebrow="In the Field" title="A Few Real Places" />
            <p className="-mt-4 mb-16 max-w-xl text-body leading-relaxed text-gray-600">
              A closer look at four of the destinations on our tariff — see
              each listing above for the rest.
            </p>
            <PhotoStory />
          </Container>
        </section>

        {/* ---------- 07: School Enquiry ---------- */}
        <section id="enquiry" className="bg-beige py-24 md:py-30">
          <Container>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[45fr_55fr] lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Get in Touch
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Planning Your School&apos;s Next Day Out?
                </h2>
                <p className="mt-6 max-w-lg text-body leading-relaxed text-gray-600">
                  Tell us a little about your school and we&apos;ll help you
                  plan the journey — group size, preferred destination and
                  rough dates are enough to start.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <EnquiryForm />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- 08: FAQ ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35fr_65fr] lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Before You Ask
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Questions we get most
                </h2>
                <p className="mt-6 text-body leading-relaxed text-gray-600">
                  If yours is not here, send it through the form above.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <Accordion items={DAY_PICNIC_FAQS} />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
