import Image from "next/image";
import { DAY_PICNIC_IMAGES } from "@/lib/day-picnics-images";
import { Reveal } from "@/components/ui/Reveal";

type Frame = { id: string; caption: string };

/** Editorial gallery built from the four venues with genuine, identifiable photography. */
const FRAMES: Frame[] = [
  { id: "imagica", caption: "Imagica, Khopoli" },
  { id: "suraj-waterpark", caption: "Suraj Waterpark, Thane" },
  { id: "saguna-baug", caption: "Saguna Baug, Neral" },
  { id: "essel-world-water-kingdom", caption: "Water Kingdom, EsselWorld" },
];

function Frame({ id, caption, aspect }: Frame & { aspect: string }) {
  const image = DAY_PICNIC_IMAGES[id];
  if (!image) return null;

  return (
    <figure className={`relative overflow-hidden rounded-image bg-beige ${aspect}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover [filter:sepia(0.14)_saturate(1.1)_contrast(1.03)]"
      />
      <figcaption className="absolute bottom-4 left-4 rounded-button bg-brown/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-cream backdrop-blur-sm">
        {caption}
      </figcaption>
    </figure>
  );
}

export function PhotoStory() {
  const [large, smallA, smallB, wide] = FRAMES;

  return (
    <div className="flex flex-col gap-6">
      <Reveal>
        <Frame {...large} aspect="aspect-[16/10]" />
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Reveal delay={0.08}>
          <Frame {...smallA} aspect="aspect-[4/5]" />
        </Reveal>
        <Reveal delay={0.14}>
          <Frame {...smallB} aspect="aspect-[4/5]" />
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <Frame {...wide} aspect="aspect-[21/9]" />
      </Reveal>
    </div>
  );
}
