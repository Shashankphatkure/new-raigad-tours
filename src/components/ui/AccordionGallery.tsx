"use client";

import { useId, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { hexToRgba } from "@/lib/color";

export type AccordionGalleryItem = {
  image: string;
  /** Alt text for the photo — falls back to `label` if omitted. */
  alt?: string;
  label: string;
  link?: string;
  /** Small caps line shown above the label, e.g. a category. */
  eyebrow?: string;
  /** Short meta line (duration, grade, etc). */
  meta?: string;
  /** Longer line, revealed only once a panel is active. */
  description?: string;
};

type AccordionGalleryProps = {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  /** Fraction (0–1) of the total space the active panel occupies. */
  expandRatio?: number;
  trigger?: "hover" | "click";
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  grayscale?: boolean;
  showLabels?: boolean;
  /** Seconds. */
  duration?: number;
  /**
   * Named for parity with the reference API; internally mapped to a single
   * fixed premium easing curve so it matches the rest of the site's motion.
   */
  ease?: string;
  /** 0–1 — strength of the subtle zoom applied to the active image. */
  parallax?: number;
  /** Degrees of pseudo-3D tilt applied to the active image. */
  tilt?: number;
  /** Seconds — stagger between panels on initial mount. */
  stagger?: number;
  /** Px. */
  height?: number;
  /** Px. */
  gap?: number;
  /** Px. */
  radius?: number;
  orientation?: "horizontal" | "vertical";
};

const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
const CSS_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.5,
  trigger = "hover",
  accentColor = "#e98b2a",
  overlayColor = "#3e2f23",
  textColor = "#f8f4ec",
  grayscale = false,
  showLabels = true,
  duration = 0.6,
  parallax = 0.4,
  tilt = 0,
  stagger = 0.06,
  height = 440,
  gap = 10,
  radius = 16,
  orientation = "horizontal",
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const prefersReducedMotion = useReducedMotion();
  const groupId = useId();
  const isHorizontal = orientation === "horizontal";
  const restGrow = (1 - expandRatio) / Math.max(items.length - 1, 1);

  const resetToDefault = () => {
    if (trigger === "hover") setActiveIndex(defaultIndex);
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    height,
    width: "100%",
    gap,
  };

  return (
    <div
      role="group"
      aria-label="Featured journeys gallery"
      onMouseLeave={resetToDefault}
      style={containerStyle}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const activate = () => setActiveIndex(index);
        const panelId = `${groupId}-panel-${index}`;

        const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate();
          }
        };

        const triggerHandlers =
          trigger === "hover"
            ? { onMouseEnter: activate, onFocus: activate }
            : { onClick: activate, onFocus: activate };

        const panelStyle: CSSProperties = {
          position: "relative",
          overflow: "hidden",
          flexGrow: isActive ? expandRatio : restGrow,
          flexShrink: 1,
          flexBasis: 0,
          minWidth: 0,
          minHeight: 0,
          borderRadius: radius,
          display: "block",
          transition: prefersReducedMotion
            ? undefined
            : `flex-grow ${duration}s ${CSS_EASE}`,
        };

        const imageWrapStyle: CSSProperties = {
          position: "absolute",
          inset: 0,
          transform:
            !prefersReducedMotion && isActive
              ? `perspective(900px) rotateY(${tilt}deg) scale(${1 + parallax * 0.1})`
              : undefined,
          transition: prefersReducedMotion
            ? undefined
            : `transform ${duration}s ${CSS_EASE}`,
          transformOrigin: "center",
        };

        const imageStyle: CSSProperties = {
          filter:
            grayscale && !isActive
              ? "grayscale(0.85) brightness(0.92)"
              : "grayscale(0) sepia(0.16) saturate(1.12) contrast(1.03)",
          transition: prefersReducedMotion
            ? undefined
            : `filter ${duration}s ${CSS_EASE}`,
        };

        // Shared visual stack — image, scrim and label block — rendered once
        // and mounted inside whichever wrapper element (Link or div) the
        // panel needs, so the two never drift out of sync.
        const visual = (
          <motion.div
            className="absolute inset-0"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: prefersReducedMotion ? 0 : index * stagger,
              ease: MOTION_EASE,
            }}
          >
            <div style={imageWrapStyle}>
              <Image
                src={item.image}
                alt={item.alt ?? item.label}
                fill
                sizes={isHorizontal ? "(min-width: 1024px) 40vw, 60vw" : "100vw"}
                className="object-cover"
                style={imageStyle}
              />
            </div>

            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${hexToRgba(
                  overlayColor,
                  isActive ? 0.88 : 0.5,
                )}, transparent 65%)`,
                transition: prefersReducedMotion
                  ? undefined
                  : `background ${duration}s ${CSS_EASE}`,
              }}
            />

            {showLabels && (
              <div id={panelId} className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                {item.eyebrow && (
                  <p
                    className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: accentColor }}
                  >
                    {item.eyebrow}
                  </p>
                )}

                {isHorizontal && !isActive ? (
                  <p
                    className="mt-3 font-display text-xl leading-none"
                    style={{
                      color: textColor,
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      maxHeight: height - 96,
                    }}
                  >
                    {item.label}
                  </p>
                ) : (
                  <p
                    className="mt-2 font-display text-2xl leading-snug sm:text-3xl"
                    style={{ color: textColor }}
                  >
                    {item.label}
                  </p>
                )}

                <AnimatePresence>
                  {isActive && (item.meta || item.description) && (
                    <motion.div
                      initial={
                        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{ duration: 0.35, ease: MOTION_EASE }}
                    >
                      {item.meta && (
                        <p
                          className="mt-2 text-small"
                          style={{ color: textColor, opacity: 0.75 }}
                        >
                          {item.meta}
                        </p>
                      )}
                      {item.description && (
                        <p
                          className="mt-3 max-w-sm text-small leading-relaxed"
                          style={{ color: textColor, opacity: 0.92 }}
                        >
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        );

        const sharedClassName =
          "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-saffron";

        if (item.link) {
          return (
            <Link
              key={item.label}
              href={item.link}
              aria-label={item.label}
              style={panelStyle}
              className={sharedClassName}
              {...triggerHandlers}
            >
              {visual}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            aria-controls={panelId}
            onKeyDown={onKeyDown}
            style={panelStyle}
            className={sharedClassName}
            {...triggerHandlers}
          >
            {visual}
          </div>
        );
      })}
    </div>
  );
}
