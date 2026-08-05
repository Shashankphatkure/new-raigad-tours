import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { placeholderTours } from "@/lib/placeholder-tours";

export const metadata: Metadata = {
  title: "Style Guide — Raigad Tours",
};

const swatches = [
  { name: "Cream", group: "Primary", swatchClass: "bg-cream", hex: "#F8F4EC", usage: "Primary background" },
  { name: "Forest Green", group: "Primary", swatchClass: "bg-forest", hex: "#1E4D3A", usage: "Brand color — buttons, nav, links" },
  { name: "Dark Brown", group: "Primary", swatchClass: "bg-brown", hex: "#3E2F23", usage: "Headings & body text" },
  { name: "Saffron", group: "Accent", swatchClass: "bg-saffron", hex: "#E98B2A", usage: "Primary CTA accent" },
  { name: "Sky Blue", group: "Accent", swatchClass: "bg-sky", hex: "#4B9CD3", usage: "Secondary accent, used sparingly" },
  { name: "Light Beige", group: "Neutral", swatchClass: "bg-beige", hex: "#EFE8DD", usage: "Alternate section background" },
  { name: "Gray", group: "Neutral", swatchClass: "bg-gray-500", hex: "#6B7280", usage: "Muted / secondary text" },
  { name: "White", group: "Neutral", swatchClass: "bg-white", hex: "#FFFFFF", usage: "Card surfaces" },
  { name: "Maroon", group: "Optional Accent", swatchClass: "bg-maroon", hex: "#7B2D26", usage: "Rare highlight — use very little" },
];

export default function StyleGuidePage() {
  return (
    <>
      <Nav />

      <main>
        <Container className="py-20">
          <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
            Design System
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-h1 leading-tight text-brown">
            Visual language for Raigad Tours
          </h1>
          <p className="mt-5 max-w-xl text-body leading-relaxed text-gray-600">
            Cream & forest-green warmth, big photography, generous whitespace,
            and soft, rounded surfaces. This page is the living reference
            every future page is built against.
          </p>
        </Container>

        {/* Colors */}
        <Container className="py-20">
          <SectionHeading eyebrow="01 — Palette" title="Color" />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div
                  className={`h-20 rounded-card border border-line ${s.swatchClass}`}
                />
                <div>
                  <p className="text-body font-medium text-brown">{s.name}</p>
                  <p className="text-small text-gray-500">
                    {s.group} · {s.hex}
                  </p>
                  <p className="text-small text-gray-500">{s.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Typography */}
        <Container className="bg-beige py-20">
          <SectionHeading eyebrow="02 — Type" title="Typography" />
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-display text-h1 leading-none text-brown">
                Sahyadri Journeys
              </p>
              <p className="mt-2 text-small uppercase tracking-[0.1em] text-gray-500">
                Cormorant Garamond · H1 · 64px
              </p>
            </div>
            <div>
              <p className="font-display text-h2 leading-tight text-brown">
                Guided heritage &amp; nature travel
              </p>
              <p className="mt-2 text-small uppercase tracking-[0.1em] text-gray-500">
                Cormorant Garamond · H2 · 48px
              </p>
            </div>
            <div>
              <p className="font-display text-h3 leading-snug text-brown">
                Small groups, local experts
              </p>
              <p className="mt-2 text-small uppercase tracking-[0.1em] text-gray-500">
                Cormorant Garamond · H3 · 32px
              </p>
            </div>
            <div>
              <p className="max-w-xl text-body leading-relaxed text-brown">
                Every itinerary pairs a certified guide with a local historian
                or naturalist, so travellers leave with more than photographs.
              </p>
              <p className="mt-2 text-small uppercase tracking-[0.1em] text-gray-500">
                Manrope · Body · 18px
              </p>
            </div>
            <div>
              <p className="max-w-xl text-small leading-relaxed text-gray-600">
                Small print for captions, meta rows, and fine detail across
                the site.
              </p>
              <p className="mt-2 text-small uppercase tracking-[0.1em] text-gray-500">
                Manrope · Small · 15px
              </p>
            </div>
          </div>
        </Container>

        {/* Grid */}
        <Container className="py-20">
          <SectionHeading eyebrow="03 — Structure" title="12-Column Grid" />
          <GridOverlay />
          <p className="mt-4 text-small text-gray-500">
            Content max-width 1200–1280px · margins 80px desktop / 40px
            tablet / 24px mobile.
          </p>
        </Container>

        {/* Radius, Shadow, Spacing */}
        <Container className="bg-beige py-20">
          <SectionHeading eyebrow="04 — Surface" title="Radius, Shadow & Spacing" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-start gap-3">
              <div className="h-24 w-full rounded-card bg-white shadow-soft" />
              <p className="text-small text-gray-600">
                <span className="font-medium text-brown">Cards</span> — 20px
                radius, white surface, soft shadow, no border
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="h-24 w-full rounded-button bg-forest" />
              <p className="text-small text-gray-600">
                <span className="font-medium text-brown">Buttons</span> — 14px
                radius, 16×28 padding
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="h-24 w-full rounded-image bg-brown/80" />
              <p className="text-small text-gray-600">
                <span className="font-medium text-brown">Images</span> — 24px
                radius for standalone photography
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 text-small text-gray-600">
            <p>
              <span className="font-medium text-brown">Shadow</span> —{" "}
              <code className="rounded-sm bg-white px-1.5 py-0.5">
                0 10px 40px rgba(0,0,0,.08)
              </code>{" "}
              — the only shadow used anywhere, no harsh drop shadows.
            </p>
            <p>
              <span className="font-medium text-brown">Spacing</span> —
              120px between sections, 32px between cards, 20px between a
              heading and its supporting text.
            </p>
          </div>
        </Container>

        {/* Buttons */}
        <Container className="py-20">
          <SectionHeading eyebrow="05 — Actions" title="Buttons" />
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary Action</Button>
            <Button variant="accent">Accent CTA</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="ghost">Ghost Link</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </Container>

        {/* Cards */}
        <Container className="bg-beige py-20">
          <SectionHeading eyebrow="06 — Components" title="Tour Card" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderTours.map((tour) => (
              <Card key={tour.title} {...tour} />
            ))}
          </div>
        </Container>

        {/* Navigation reference */}
        <Container className="py-20">
          <SectionHeading eyebrow="07 — Navigation" title="Header" />
          <p className="mb-6 text-small text-gray-500">
            The header shown at the top of this page, isolated for reference.
          </p>
          <div className="overflow-hidden rounded-card border border-line">
            <Nav />
          </div>
        </Container>

        {/* Guardrails */}
        <Container className="bg-beige py-20">
          <SectionHeading eyebrow="08 — Guardrails" title="Do / Avoid" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-6 shadow-soft">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-forest">
                Do
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-small text-gray-600">
                <li>Large whitespace, big documentary-style photography</li>
                <li>Rounded cards, soft shadows, thin dividers</li>
                <li>Minimal, single-color line icons</li>
                <li>Trustworthy, family-friendly, organized tone</li>
              </ul>
            </div>
            <div className="rounded-card border border-line bg-white p-6 shadow-soft">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-maroon">
                Avoid
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-small text-gray-600">
                <li>Heavy borders or harsh drop shadows</li>
                <li>Neon gradients or glassmorphism</li>
                <li>Gaming-style or excessive motion</li>
                <li>AI-looking illustration</li>
                <li>Overusing Sky Blue or Maroon accents</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
