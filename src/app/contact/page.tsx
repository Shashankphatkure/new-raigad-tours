import type { Metadata } from "next";
import {
  AlertCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { TrustPromo } from "@/components/ui/TrustPromo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { OFFICE } from "@/lib/contact-content";

export const metadata: Metadata = {
  title: "Contact — Raigad Tours",
  description:
    "Let's plan your next educational journey. Send an enquiry and we'll reply within one working day with a costed itinerary for your group.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    OFFICE.mapQuery,
  )}&output=embed`;

  return (
    <>
      <Nav />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="pt-16 md:pt-24">
          <Container>
            <Reveal className="max-w-4xl">
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Get in Touch
              </p>
              <h1 className="mt-4 font-display text-h1 leading-[1.05] text-brown">
                Let&apos;s Plan Your Next
                <span className="block text-forest">Educational Journey.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body leading-relaxed text-gray-600">
                Tell us your group size, year level and rough dates. We will
                come back with a costed itinerary — no obligation, and no
                surcharges added later.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Split: form + details ---------- */}
        <section className="py-24 md:py-30">
          <Container>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[58fr_42fr] lg:gap-20">
              {/* Left — enquiry form */}
              <Reveal>
                <h2 className="font-display text-h2 leading-tight text-brown">
                  Send an enquiry
                </h2>
                <p className="mt-5 max-w-lg text-body leading-relaxed text-gray-600">
                  The more you can tell us now, the more useful our first reply
                  will be.
                </p>
                <div className="mt-12">
                  <EnquiryForm />
                </div>
              </Reveal>

              {/* Right — map & contact details */}
              <Reveal delay={0.12}>
                <div className="flex flex-col gap-12">
                  <div className="rounded-card bg-beige px-6 py-8">
                    <ContactMap />
                  </div>

                  <div className="flex flex-col gap-8">
                    {/* Office */}
                    <div className="flex gap-4">
                      <MapPin
                        className="mt-1 h-5 w-5 shrink-0 text-forest"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                          Our office
                        </p>
                        <address className="mt-2 not-italic text-body leading-relaxed text-brown">
                          {OFFICE.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="flex gap-4">
                      <Phone
                        className="mt-1 h-5 w-5 shrink-0 text-forest"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                          Phone
                        </p>
                        <ul className="mt-2 flex flex-col gap-1">
                          {OFFICE.phones.map((phone) => (
                            <li key={phone.value}>
                              <a
                                href={phone.href}
                                className="text-body text-brown transition-colors hover:text-forest"
                              >
                                {phone.value}
                              </a>
                              <span className="ml-2 text-small text-gray-500">
                                {phone.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4">
                      <Mail
                        className="mt-1 h-5 w-5 shrink-0 text-forest"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                          Email
                        </p>
                        <a
                          href={`mailto:${OFFICE.email}`}
                          className="mt-2 block text-body text-brown transition-colors hover:text-forest"
                        >
                          {OFFICE.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-4">
                      <Clock
                        className="mt-1 h-5 w-5 shrink-0 text-forest"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
                          Business hours
                        </p>
                        <dl className="mt-2 flex flex-col gap-1">
                          {OFFICE.hours.map((slot) => (
                            <div key={slot.days} className="flex gap-3">
                              <dt className="w-40 shrink-0 text-body text-brown">
                                {slot.days}
                              </dt>
                              <dd className="text-body text-gray-600">
                                {slot.time}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        <p className="mt-4 text-small text-gray-500">
                          {OFFICE.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={OFFICE.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 rounded-card bg-forest p-7 transition-transform duration-300 ease-out hover:-translate-y-1"
                  >
                    <div>
                      <p className="flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-saffron">
                        <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                        WhatsApp
                      </p>
                      <p className="mt-3 font-display text-2xl text-cream">
                        Message us directly
                      </p>
                      <p className="mt-2 text-small text-cream/70">
                        {OFFICE.whatsapp.display}
                      </p>
                    </div>
                  </a>

                  {/* Emergency */}
                  <div className="rounded-card border border-maroon/25 bg-white p-7">
                    <p className="flex items-center gap-2 text-small font-semibold uppercase tracking-[0.12em] text-maroon">
                      <AlertCircle className="h-4 w-4" strokeWidth={1.75} />
                      {OFFICE.emergency.label}
                    </p>
                    <a
                      href={OFFICE.emergency.href}
                      className="mt-3 block font-display text-2xl text-brown transition-colors hover:text-maroon"
                    >
                      {OFFICE.emergency.value}
                    </a>
                    <p className="mt-3 text-small leading-relaxed text-gray-600">
                      {OFFICE.emergency.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Google Maps embed ---------- */}
        <section className="pb-24 md:pb-30">
          <Container>
            <Reveal>
              <div className="overflow-hidden rounded-image border border-line bg-beige">
                <iframe
                  src={mapSrc}
                  title={`Map showing the location of ${OFFICE.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0 grayscale-[0.35]"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="bg-beige py-30">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35fr_65fr] lg:gap-20">
              <Reveal>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Before You Ask
                </p>
                <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                  Questions we get most
                </h2>
                <p className="mt-6 text-body leading-relaxed text-gray-600">
                  If yours is not here, send it through the form — we answer
                  every enquiry personally.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <ContactFaq />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <TrustPromo />
      <Footer />
    </>
  );
}
