import Link from "next/link";
import { Container } from "./Container";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Tours", href: "/tours" },
      { label: "About Us", href: "/about" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "#" },
      { label: "Safety & Guidelines", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-beige">
      <Container className="grid grid-cols-1 gap-10 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <span className="font-display text-2xl tracking-tight text-brown">
            Raigad Tours
          </span>
          <p className="max-w-xs text-small leading-relaxed text-gray-600">
            Educational and heritage travel across the Sahyadris — guided
            treks, coastal expeditions, and school programs rooted in local
            history and nature.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <p className="text-small font-semibold uppercase tracking-[0.1em] text-brown">
              {col.heading}
            </p>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-small text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raigad Tours. All rights reserved.</p>
          <p>Raigad, Maharashtra, India</p>
        </Container>
      </div>
    </footer>
  );
}
