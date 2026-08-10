import Link from "next/link";
import { Mail, Phone, Send, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { OFFICE } from "@/lib/contact-content";

/** A representative slice of destinations, each deep-linking into the Tours filter. */
const DESTINATION_LINKS = ["Raigad"];

const EXPLORE_LINKS = [
  { label: "All Journeys", href: "/tours" },
  { label: "Interactive Map", href: "/#explore-india" },
  { label: "Plan a Custom Trip", href: "/contact" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "#" },
  { label: "Press & Media", href: "#" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "#" },
  { label: "Safety Information", href: "#" },
  { label: "Cancellation Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
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

      {/* Newsletter band */}
      <div className="border-b border-line bg-beige">
        <Container className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-button bg-white px-3 py-1.5 text-small font-semibold text-forest shadow-soft">
              <Send className="h-3.5 w-3.5" strokeWidth={1.75} />
              Newsletter
            </span>
            <h2 className="mt-4 font-display text-h3 leading-tight text-brown">
              Get travel stories &amp; teaching resources
            </h2>
            <p className="mt-2 text-small text-gray-600">
              Join the educators who receive our monthly travel digest.
            </p>
          </div>

          <form
            className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
            aria-label="Newsletter signup"
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-button border border-line bg-white px-5 py-3.5 text-small text-brown placeholder:text-gray-500 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest sm:w-72"
            />
            <Button type="submit" variant="primary" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </Container>
      </div>

      {/* Main link grid */}
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <p className="max-w-xs text-small leading-relaxed text-gray-600">
            Educational and heritage travel across the Sahyadris — guided
            treks, coastal expeditions, and school programs rooted in local
            history and nature.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={OFFICE.phones[0].href}
              className="flex items-center gap-3 rounded-button border border-line px-4 py-3 transition-colors duration-200 hover:border-forest"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige">
                <Phone className="h-4 w-4 text-forest" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-small text-gray-500">Call us</span>
                <span className="block text-small font-medium text-brown">
                  {OFFICE.phones[0].value}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${OFFICE.email}`}
              className="flex items-center gap-3 rounded-button border border-line px-4 py-3 transition-colors duration-200 hover:border-forest"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige">
                <Mail className="h-4 w-4 text-forest" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-small text-gray-500">Email us</span>
                <span className="block text-small font-medium text-brown">
                  {OFFICE.email}
                </span>
              </span>
            </a>
          </div>

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
            Destinations
          </p>
          <p className="text-small text-gray-500">Explore top journeys</p>
          {DESTINATION_LINKS.map((destination) => (
            <Link
              key={destination}
              href={`/tours?destination=${encodeURIComponent(destination)}`}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              Tours in {destination}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-small font-semibold uppercase tracking-[0.1em] text-forest">
            Explore
          </p>
          <p className="text-small text-gray-500">Discover more</p>
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
            Company
          </p>
          <p className="text-small text-gray-500">Learn about us</p>
          {COMPANY_LINKS.map((link) => (
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
            Support
          </p>
          <p className="text-small text-gray-500">We&apos;re here to help</p>
          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-small text-gray-600 transition-colors duration-200 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
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
            <Link href="#" className="transition-colors hover:text-forest">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link href="#" className="transition-colors hover:text-forest">
              Terms of Use
            </Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="transition-colors hover:text-forest">
              Contact
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
