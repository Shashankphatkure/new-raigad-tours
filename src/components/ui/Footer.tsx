import Link from "next/link";
import { X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { OFFICE } from "@/lib/contact-content";

const EXPLORE_LINKS = [
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "School Picnics", href: "/school-picnics" },
  { label: "Contact", href: "/contact" },
];

const PLAN_LINKS = [
  { label: "Enquire", href: "/contact" },
  { label: "Plan a School Trip", href: "/school-picnics#enquiry" },
];

// No real accounts yet — Raigad Tours currently has no social media presence.
// Icons are placeholders, ready to point at real profiles once they exist.
const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "X (Twitter)", href: "#", icon: X },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      {/* Wordmark + tagline */}
      <div className="border-b border-line">
        <Container className="flex flex-wrap items-center gap-4 py-6">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden />
            <span className="font-display text-xl tracking-tight text-brown">
              Raigad Tours
            </span>
          </span>
          <span aria-hidden className="h-5 w-px bg-line" />
          <span className="text-small text-gray-500">
            Your trusted partner for educational travel
          </span>
        </Container>
      </div>

      {/* CTA band */}
      <div className="border-b border-line bg-beige">
        <Container className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-h3 leading-tight text-brown">
              Planning Your Next School Journey?
            </h2>
            <p className="mt-2 text-small text-gray-600">
              Let&apos;s plan it together.
            </p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            Start an Enquiry →
          </Button>
        </Container>
      </div>

      {/* Main link grid */}
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <p className="max-w-xs text-small leading-relaxed text-gray-600">
            Educational and group journeys across Maharashtra and beyond,
            creating experiences where travel, discovery and learning come
            together.
          </p>

          <div className="flex gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-beige text-brown transition-colors duration-200 hover:bg-forest hover:text-cream"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-small font-semibold uppercase tracking-[0.1em] text-forest">
            Explore
          </p>
          {EXPLORE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-small font-semibold uppercase tracking-[0.1em] text-forest">
            Plan
          </p>
          {PLAN_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-small font-semibold uppercase tracking-[0.1em] text-forest">
            Contact
          </p>
          <div>
            <p className="text-small text-gray-500">Phone</p>
            <a
              href={OFFICE.phones[0].href}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              {OFFICE.phones[0].value}
            </a>
          </div>
          <div>
            <p className="text-small text-gray-500">Email</p>
            <a
              href={`mailto:${OFFICE.email}`}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              {OFFICE.email}
            </a>
          </div>
          <div>
            <p className="text-small text-gray-500">Office</p>
            <address className="not-italic text-small leading-relaxed text-gray-600">
              {OFFICE.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-small text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-forest" aria-hidden />©{" "}
            {new Date().getFullYear()} Raigad Tours. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-forest">
              Contact
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
