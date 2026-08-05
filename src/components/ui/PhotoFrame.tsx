import Image from "next/image";

type PhotoFrameProps = {
  src: string;
  alt: string;
  aspect?: "4/3" | "3/2" | "16/9" | "1/1";
  rounded?: boolean;
  bordered?: boolean;
  zoom?: boolean;
  sizes?: string;
  priority?: boolean;
};

const aspectClass: Record<NonNullable<PhotoFrameProps["aspect"]>, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function PhotoFrame({
  src,
  alt,
  aspect = "4/3",
  rounded = true,
  bordered = true,
  zoom = false,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
}: PhotoFrameProps) {
  const frameClasses = [
    "relative overflow-hidden bg-beige",
    aspectClass[aspect],
    rounded ? "rounded-image" : "",
    bordered ? "border border-line" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const imageClasses = [
    "object-cover [filter:sepia(0.18)_saturate(1.15)_contrast(1.05)_brightness(0.98)]",
    zoom ? "transition-transform duration-500 ease-out group-hover:scale-105" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={frameClasses}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={imageClasses} />
    </div>
  );
}
