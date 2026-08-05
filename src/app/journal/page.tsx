import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JournalIndex } from "@/components/journal/JournalIndex";
import { FEATURED_ARTICLE } from "@/lib/journal/articles";
import { JOURNAL_IMAGES } from "@/lib/journal/images";

export const metadata: Metadata = {
  title: "Journal — Raigad Tours",
  description:
    "Travel stories, educational resources, destination guides and student diaries from twenty-seven years of school journeys across India.",
};

export default function JournalPage() {
  const featuredImage = JOURNAL_IMAGES[FEATURED_ARTICLE.imageSlot];

  return (
    <>
      <Nav />

      <main>
        {/* ---------- Masthead ---------- */}
        <section className="pt-16 md:pt-24">
          <Container>
            <Reveal className="max-w-3xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                The Journal
              </p>
              <h1 className="mt-4 font-display text-h1 leading-[1.05] text-brown">
                Stories from the road
              </h1>
              <p className="mt-8 max-w-xl text-body leading-relaxed text-gray-600">
                Travel writing, teaching resources and field notes gathered over
                twenty-seven years of taking school groups across India.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Featured story ---------- */}
        <section className="py-20">
          <Container>
            <Reveal>
              <Link href={`/journal/${FEATURED_ARTICLE.slug}`} className="group block">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[58fr_42fr] lg:gap-16">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige lg:aspect-[3/2]">
                    {featuredImage && (
                      <Image
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
                      />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-small text-gray-500">
                      <span className="font-semibold uppercase tracking-[0.12em] text-saffron">
                        Featured
                      </span>
                      <span aria-hidden>·</span>
                      <span>{FEATURED_ARTICLE.readingTime} min read</span>
                    </div>

                    <h2 className="mt-4 font-display text-h2 leading-tight text-brown transition-colors duration-300 group-hover:text-forest">
                      {FEATURED_ARTICLE.title}
                    </h2>

                    <p className="mt-6 text-body leading-relaxed text-gray-600">
                      {FEATURED_ARTICLE.standfirst}
                    </p>

                    <p className="mt-8 inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-forest">
                      Read the story
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.75}
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Search, categories & articles ---------- */}
        <section className="pb-30">
          <Container>
            <JournalIndex />
          </Container>
        </section>
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
