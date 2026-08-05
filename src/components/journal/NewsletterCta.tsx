import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NewsletterCta() {
  return (
    <section className="bg-forest py-30">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
            The Journal
          </p>
          <h2 className="font-display text-h2 leading-tight text-cream">
            Stories from the road, once a month
          </h2>
          <p className="max-w-xl text-body text-cream/85">
            Trip notes, teaching resources and destination guides for educators.
            No more than one email a month, and never a sales pitch.
          </p>

          {/* Static placeholder — needs wiring to a real mailing provider. */}
          <form
            className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@school.edu.in"
              className="w-full rounded-button border border-cream/25 bg-cream/10 px-5 py-4 text-small text-cream placeholder:text-cream/50 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
            />
            <Button variant="accent" type="submit" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
