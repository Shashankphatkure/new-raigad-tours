"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type AccordionItem = {
  question: string;
  answer: string;
};

/**
 * Single-open accordion with a rotating plus/cross affordance.
 * Used for FAQ blocks across the site.
 */
export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={triggerId}
                className="flex w-full cursor-pointer items-start justify-between gap-8 py-7 text-left"
              >
                <span
                  className={`font-display text-h3 leading-snug transition-colors duration-300 ${
                    isOpen ? "text-forest" : "text-brown"
                  }`}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="mt-1.5 shrink-0"
                >
                  <Plus
                    className={`h-5 w-5 transition-colors duration-300 ${
                      isOpen ? "text-saffron" : "text-gray-500"
                    }`}
                    strokeWidth={1.75}
                  />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={
                    prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
                  }
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pb-8 text-body leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
