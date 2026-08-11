"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "./Container";
import { Button } from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "School Picnics", href: "/school-picnics" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
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

        <div className="flex items-center gap-2">
          <Button href="/contact" variant="accent" className="px-5 py-3 text-xs">
            Enquire
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brown transition-colors duration-200 hover:bg-beige md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </Container>

      {/* ---------- Mobile menu ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-line bg-cream md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-button px-3 py-3 text-body font-medium text-brown transition-colors duration-200 hover:bg-beige hover:text-forest"
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
