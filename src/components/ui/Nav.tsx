"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

const links = [
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-cream/80 shadow-soft backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden />
          <span className="font-display text-2xl tracking-tight text-brown">
            Raigad Tours
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-small font-medium uppercase tracking-[0.08em] text-gray-500 underline-offset-4 transition-colors duration-200 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact" variant="accent" className="px-5 py-3 text-xs">
          Enquire
        </Button>
      </Container>
    </header>
  );
}
