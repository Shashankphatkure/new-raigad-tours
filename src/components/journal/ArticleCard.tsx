import Image from "next/image";
import Link from "next/link";
import { JOURNAL_IMAGES } from "@/lib/journal/images";
import type { Article } from "@/lib/journal/types";

type ArticleCardProps = {
  article: Article;
  /** "compact" drops the standfirst for dense rails. */
  variant?: "default" | "compact";
};

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const image = JOURNAL_IMAGES[article.imageSlot];

  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-image bg-beige">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
            />
          )}
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3 text-small text-gray-500">
            <span className="font-semibold uppercase tracking-[0.12em] text-saffron">
              {article.category}
            </span>
            <span aria-hidden>·</span>
            <span>{article.readingTime} min read</span>
          </div>

          <h3 className="mt-3 font-display text-h3 leading-tight text-brown transition-colors duration-300 group-hover:text-forest">
            {article.title}
          </h3>

          {variant === "default" && (
            <p className="mt-4 text-body leading-relaxed text-gray-600">
              {article.standfirst}
            </p>
          )}

          <p className="mt-4 text-small text-gray-500">
            <time dateTime={article.isoDate}>{article.date}</time>
          </p>
        </div>
      </Link>
    </article>
  );
}
