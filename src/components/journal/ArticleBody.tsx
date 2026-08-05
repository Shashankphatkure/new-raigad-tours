import Image from "next/image";
import { ArticleMap } from "./ArticleMap";
import { JOURNAL_IMAGES } from "@/lib/journal/images";
import type { ArticleBlock } from "@/lib/journal/types";

/**
 * Renders an article's block list.
 *
 * Body text sits in a narrow measure for readability; images, galleries, quotes
 * and maps are allowed to break wider than that column for editorial rhythm.
 */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-10">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className={`mx-auto w-full max-w-[68ch] text-body leading-[1.75] text-gray-700 ${
                  block.dropCap
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[68px] first-letter:leading-[0.82] first-letter:text-forest"
                    : ""
                }`}
              >
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={index}
                className="mx-auto mt-6 w-full max-w-[68ch] font-display text-h3 leading-tight text-brown"
              >
                {block.text}
              </h2>
            );

          case "quote":
            return (
              <figure
                key={index}
                className="mx-auto my-6 w-full max-w-[52ch] border-l-2 border-saffron pl-8"
              >
                <blockquote className="font-display text-[30px] leading-[1.35] text-brown sm:text-[34px]">
                  {block.text}
                </blockquote>
                {block.attribution && (
                  <figcaption className="mt-5 text-small uppercase tracking-[0.14em] text-gray-500">
                    {block.attribution}
                  </figcaption>
                )}
              </figure>
            );

          case "image": {
            const image = JOURNAL_IMAGES[block.slot];
            if (!image) return null;
            return (
              <figure key={index} className="my-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-image bg-beige">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-cover [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mx-auto mt-4 max-w-[68ch] text-small text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          case "gallery":
            return (
              <figure key={index} className="my-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {block.slots.map((slot) => {
                    const image = JOURNAL_IMAGES[slot];
                    if (!image) return null;
                    return (
                      <div
                        key={slot}
                        className="relative aspect-[3/4] overflow-hidden rounded-image bg-beige"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover [filter:sepia(0.16)_saturate(1.1)_contrast(1.04)]"
                        />
                      </div>
                    );
                  })}
                </div>
                {block.caption && (
                  <figcaption className="mx-auto mt-4 max-w-[68ch] text-small text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "map":
            return (
              <figure
                key={index}
                className="my-4 flex flex-col items-center rounded-image bg-beige px-6 py-10"
              >
                <ArticleMap destinationId={block.destinationId} />
                {block.caption && (
                  <figcaption className="mt-6 max-w-[52ch] text-center text-small text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
