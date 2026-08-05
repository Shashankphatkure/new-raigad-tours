import { PhotoFrame } from "./PhotoFrame";

type CardProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  meta: string;
  description: string;
};

export function Card({ image, imageAlt, eyebrow, title, meta, description }: CardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-card bg-white shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1">
      <PhotoFrame
        src={image}
        alt={imageAlt}
        aspect="4/3"
        rounded={false}
        bordered={false}
        zoom
      />
      <div className="flex flex-col gap-2 p-6">
        <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl leading-snug text-brown">{title}</h3>
        <p className="text-small text-gray-500">{meta}</p>
        <p className="text-body leading-relaxed text-gray-600">{description}</p>
      </div>
    </article>
  );
}
