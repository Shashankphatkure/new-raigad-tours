type HandwrittenQuoteProps = {
  quote: string;
  attribution: string;
};

/** A founder's aside, set in a handwriting face as if pencilled in the margin. */
export function HandwrittenQuote({ quote, attribution }: HandwrittenQuoteProps) {
  return (
    <figure className="relative">
      <span
        aria-hidden
        className="absolute -left-2 -top-6 font-display text-[80px] leading-none text-saffron/25"
      >
        &ldquo;
      </span>
      <blockquote className="relative font-hand text-[30px] leading-[1.45] text-brown sm:text-[34px]">
        {quote}
      </blockquote>
      <figcaption className="mt-5 text-small uppercase tracking-[0.14em] text-gray-500">
        {attribution}
      </figcaption>
    </figure>
  );
}
