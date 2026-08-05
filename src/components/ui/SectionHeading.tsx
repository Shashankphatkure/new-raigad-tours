type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-2 ${align === "center" ? "items-center text-center" : ""}`}
    >
      <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
        {eyebrow}
      </p>
      <h2 className="font-display text-h2 leading-tight text-brown">{title}</h2>
    </div>
  );
}
