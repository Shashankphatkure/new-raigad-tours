import Image from "next/image";
import {
  CalendarCheck,
  Clock,
  GraduationCap,
  LifeBuoy,
  MapPin,
  School,
  Shield,
  ShieldCheck,
  Star,
  Tag,
  Users,
} from "lucide-react";
import { Container } from "./Container";
import { Counter } from "./Counter";

const LEFT_TRUST_ITEMS = [
  { icon: Shield, value: "Safety", label: "Certified Protocol" },
  { icon: Clock, value: "24/7", label: "Trip Support" },
  { icon: Tag, value: "Fair", label: "Transparent Pricing" },
  { icon: School, value: "500+", label: "Schools Served" },
  { icon: Users, value: "1,20,000+", label: "Students Guided" },
  { icon: MapPin, value: "10+", label: "Destinations" },
];

const PHOTO_STAT_TILES = [
  { icon: Star, value: "4.9", label: "School Satisfaction" },
  { icon: CalendarCheck, value: "27+", label: "Years of Experience" },
  { icon: ShieldCheck, value: "100%", label: "Safety Record" },
  { icon: GraduationCap, value: "1,20,000+", label: "Students Guided" },
  { icon: LifeBuoy, value: "24/7", label: "Trip Support" },
  { icon: Tag, value: "Fair", label: "Transparent Pricing" },
];

/**
 * Cross-page trust promo, placed just above the footer on every page.
 * Split card: credentials + copy on white, a photo with a marquee stat and
 * six tiles on the other side.
 */
export function TrustPromo() {
  return (
    <section className="py-24 md:py-30">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-card shadow-soft lg:grid-cols-[60fr_40fr]">
          {/* Left — credentials */}
          <div className="flex flex-col justify-center bg-white p-10 sm:p-12 lg:p-14">
            <h2 className="font-display text-h2 leading-tight text-brown">
              Trusted by Schools
              <span className="block text-forest">Across India.</span>
            </h2>
            <p className="mt-6 max-w-md text-body leading-relaxed text-gray-600">
              Twenty-seven years of guiding students beyond the classroom —
              heritage forts, working science centres, and coastlines studied
              first-hand. Every journey is planned with safety, curriculum and
              curiosity in equal measure.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 border-t border-line pt-12 sm:grid-cols-3">
              {LEFT_TRUST_ITEMS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige">
                    <Icon className="h-4 w-4 text-forest" strokeWidth={1.5} />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="block text-body font-semibold leading-snug text-brown">
                      {value}
                    </span>
                    <span className="block text-small leading-snug text-gray-500">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo with marquee stat and tiles */}
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1609775015123-e7573e73a7a7?fm=jpg&q=60&w=1400&auto=format&fit=crop"
              alt="Waterfall in a monsoon forest in the Western Ghats"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover [filter:sepia(0.16)_saturate(1.12)_contrast(1.04)_brightness(0.8)]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brown/55 via-brown/35 to-forest-dark/90" />

            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                  Trusted Since 1998
                </p>
                <p className="mt-3 font-display text-h1 leading-none text-cream">
                  <Counter to={120000} suffix="+" />
                </p>
                <p className="mt-3 text-body text-cream/85">
                  students guided across India
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {PHOTO_STAT_TILES.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-button border border-cream/15 bg-cream/10 p-4 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-saffron" strokeWidth={1.75} />
                    <p className="mt-3 font-display text-2xl text-cream">
                      {value}
                    </p>
                    <p className="mt-1 text-small text-cream/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
