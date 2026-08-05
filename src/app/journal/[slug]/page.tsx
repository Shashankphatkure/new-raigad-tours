import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleBody } from "@/components/journal/ArticleBody";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { ARTICLES, getArticle, getRelatedArticles } from "@/lib/journal/articles";
import { JOURNAL_IMAGES } from "@/lib/journal/images";
import { DESTINATIONS } from "@/components/hero-map/data";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/journal/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return { title: "Journal — Raigad Tours" };

  return {
    title: `${article.title} — Raigad Tours`,
    description: article.standfirst,
  };
}

export default async function ArticlePage(props: PageProps<"/journal/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) notFound();

  const heroImage = JOURNAL_IMAGES[article.imageSlot];
  const related = getRelatedArticles(article);
  const journeys = (article.relatedJourneys ?? [])
    .map((id) => DESTINATIONS.find((d) => d.id === id))
    .filter((d) => d !== undefined);

  return (
    <>
      <Nav />

      <main>
        {/* ---------- Header ---------- */}
        <article>
          <header className="pt-16 md:pt-24">
            <Container>
              <Reveal className="mx-auto max-w-[68ch]">
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-gray-500 transition-colors hover:text-forest"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                  The Journal
                </Link>

                <div className="mt-10 flex flex-wrap items-center gap-3 text-small text-gray-500">
                  <span className="font-semibold uppercase tracking-[0.12em] text-saffron">
                    {article.category}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{article.readingTime} min read</span>
                </div>

                <h1 className="mt-4 font-display text-h1 leading-[1.05] text-brown">
                  {article.title}
                </h1>

                <p className="mt-8 text-body leading-relaxed text-gray-600">
                  {article.standfirst}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-small text-gray-500">
                  <span className="font-medium text-brown">{article.author}</span>
                  <span aria-hidden>·</span>
                  <span>{article.authorRole}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={article.isoDate}>{article.date}</time>
                </div>
              </Reveal>
            </Container>
          </header>

          {/* ---------- Hero image ---------- */}
          <Reveal delay={0.1} className="mt-16">
            <Container>
              <div className="relative aspect-[16/9] overflow-hidden rounded-image bg-beige lg:aspect-[21/9]">
                {heroImage && (
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
                  />
                )}
              </div>
            </Container>
          </Reveal>

          {/* ---------- Body ---------- */}
          <div className="py-24 md:py-30">
            <Container>
              <div className="mx-auto max-w-3xl">
                <ArticleBody blocks={article.body} />
              </div>
            </Container>
          </div>
        </article>

        {/* ---------- Related journeys ---------- */}
        {journeys.length > 0 && (
          <section className="border-t border-line py-24">
            <Container>
              <Reveal className="mx-auto max-w-3xl">
                <h2 className="font-display text-h3 leading-tight text-brown">
                  Related journeys
                </h2>
                <p className="mt-4 text-body text-gray-600">
                  Trips that visit the places in this story.
                </p>

                <ul className="mt-10 flex flex-col divide-y divide-line border-y border-line">
                  {journeys.map((journey) => (
                    <li key={journey.id}>
                      <Link
                        href="/tours"
                        className="group flex items-center justify-between gap-6 py-6"
                      >
                        <div>
                          <p className="font-display text-2xl text-brown transition-colors group-hover:text-forest">
                            {journey.title}
                          </p>
                          <p className="mt-2 text-small text-gray-500">
                            {journey.name}, {journey.region} · {journey.duration} ·{" "}
                            {journey.grades}
                          </p>
                        </div>
                        <ArrowRight
                          className="h-5 w-5 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.75}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Container>
          </section>
        )}

        {/* ---------- Related articles ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <Reveal>
              <h2 className="font-display text-h2 leading-tight text-brown">
                More from the Journal
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.1}>
                  <ArticleCard article={item} variant="compact" />
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
