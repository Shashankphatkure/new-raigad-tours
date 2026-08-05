"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DESTINATIONS } from "@/components/hero-map/data";
import { SPECIAL_REQUIREMENTS, TRAVEL_MONTHS } from "@/lib/contact-content";

const EASE = [0.22, 1, 0.36, 1] as const;

const fieldBase =
  "peer w-full border-0 border-b border-line bg-transparent pb-3 pt-7 text-body text-brown outline-none transition-colors duration-200 placeholder:text-transparent focus:border-line";

const labelBase =
  "pointer-events-none absolute left-0 top-7 origin-left text-body text-gray-500 transition-all duration-200 ease-out peer-focus:top-0 peer-focus:text-small peer-focus:text-forest peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-small";

/**
 * Wraps a control with a floating label and an underline that sweeps in from
 * the left on focus — the page's only real input flourish.
 */
function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <label className={labelBase}>{label}</label>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-forest transition-transform duration-300 ease-out peer-focus:scale-x-100"
      />
    </div>
  );
}

type Status = "idle" | "submitting" | "sent";

export function EnquiryForm() {
  const formId = useId();
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [requirements, setRequirements] = useState<string[]>([]);

  const toggleRequirement = (value: string) => {
    setRequirements((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  // No backend yet — this simulates the round trip so the UI can be reviewed.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex min-h-[420px] flex-col items-start justify-center rounded-card bg-white p-10 shadow-soft"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest">
          <Check className="h-6 w-6 text-cream" strokeWidth={2} />
        </div>
        <h3 className="mt-8 font-display text-h3 leading-tight text-brown">
          Thank you — your enquiry is with us.
        </h3>
        <p className="mt-5 max-w-md text-body leading-relaxed text-gray-600">
          One of our trip planners will be in touch within one working day with
          a costed itinerary for your group.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setRequirements([]);
          }}
          className="mt-8 cursor-pointer text-small font-semibold uppercase tracking-[0.12em] text-forest underline underline-offset-4 transition-colors hover:text-saffron"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field label="School name">
          <input
            type="text"
            name="school"
            required
            placeholder="School name"
            className={fieldBase}
          />
        </Field>

        <Field label="Teacher / coordinator">
          <input
            type="text"
            name="teacher"
            required
            placeholder="Teacher"
            className={fieldBase}
          />
        </Field>

        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            className={fieldBase}
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className={fieldBase}
          />
        </Field>

        <Field label="Number of students">
          <input
            type="number"
            name="students"
            min={1}
            placeholder="Number of students"
            className={fieldBase}
          />
        </Field>

        <Field label="Preferred destination">
          <select
            name="destination"
            defaultValue=""
            required
            className={`${fieldBase} cursor-pointer`}
          >
            <option value="" disabled hidden />
            {DESTINATIONS.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.name} — {destination.region}
              </option>
            ))}
            <option value="unsure">Not sure yet — advise us</option>
          </select>
        </Field>

        <Field label="Travel month" className="sm:col-span-2">
          <select
            name="month"
            defaultValue=""
            required
            className={`${fieldBase} cursor-pointer`}
          >
            <option value="" disabled hidden />
            {TRAVEL_MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Special requirements */}
      <fieldset>
        <legend className="text-small font-semibold uppercase tracking-[0.12em] text-gray-500">
          Special requirements
        </legend>
        <div className="mt-5 flex flex-wrap gap-3">
          {SPECIAL_REQUIREMENTS.map((requirement) => {
            const isChecked = requirements.includes(requirement);
            return (
              <label
                key={requirement}
                className={`cursor-pointer rounded-button px-4 py-2.5 text-small transition-colors duration-200 ${
                  isChecked
                    ? "bg-forest text-cream"
                    : "bg-beige text-brown hover:bg-line"
                }`}
              >
                <input
                  type="checkbox"
                  name="requirements"
                  value={requirement}
                  checked={isChecked}
                  onChange={() => toggleRequirement(requirement)}
                  className="sr-only"
                />
                {requirement}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Message */}
      <Field label="Anything else we should know?">
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          className={`${fieldBase} resize-none`}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-6">
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </Button>
        <p className="text-small text-gray-500" id={`${formId}-note`}>
          We reply within one working day.
        </p>
      </div>

      <AnimatePresence>
        {status === "submitting" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sr-only"
            role="status"
            aria-live="polite"
          >
            Sending your enquiry.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
