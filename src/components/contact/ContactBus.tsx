"use client";

import { useState, type CSSProperties } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";

/**
 * A coach driving a looping road, built from real CSS 3D transforms rather
 * than a WebGL library — six shaded faces in a `preserve-3d` scene, which
 * keeps this a few kilobytes instead of pulling three.js into a
 * five-dependency marketing site.
 *
 * The coach itself stays put and the road scrolls beneath it (a treadmill),
 * so the loop is seamless and the bus never leaves its column. Livery matches
 * the flat SVG bus on the homepage map.
 */

/** Body dimensions inside the 3D scene, in pixels. */
const LENGTH = 300; // nose to tail (local X)
const HEIGHT = 124; // floor to roof (local Y)
const WIDTH = 110; // side to side (local Z)

/** Camera: looking slightly down at the nose-right quarter. */
const CAMERA = "rotateX(-20deg) rotateY(-30deg)";

const WHEEL_SIZE = 46;
const WHEEL_Y = 57; // axle height, so tyres just kiss the road
const ROAD_Y = 80; // road surface sits under the tyres
const ROAD_LENGTH = 1500;
const ROAD_DEPTH = 300;
const DASH_PERIOD = 120; // one dash + one gap; the scroll loops on this

const CREAM = "#F8F4EC";
const FOREST = "#1E4D3A";
const FOREST_DARK = "#163A2B";
const SAFFRON = "#E98B2A";
const SKY = "#4B9CD3";
const BROWN = "#3E2F23";
const ROAD = "#D8CFC0";

/** Cream body over a forest skirt, split by the saffron beltline. */
const LIVERY = `linear-gradient(to bottom,
  ${CREAM} 0%, ${CREAM} 58%,
  ${SAFFRON} 58%, ${SAFFRON} 62%,
  ${FOREST} 62%, ${FOREST} 100%)`;

/**
 * Positions a face at the centre of its box, then pushes it out to its wall.
 * `backfaceVisibility` stops far walls bleeding through the near ones.
 */
function face(width: number, height: number, transform: string): CSSProperties {
  return {
    position: "absolute",
    left: "50%",
    top: "50%",
    width,
    height,
    marginLeft: -width / 2,
    marginTop: -height / 2,
    transform,
    backfaceVisibility: "hidden",
  };
}

/** Flat wash used to fake directional light — roof lit, far walls in shade. */
function shade(alpha: number): CSSProperties {
  return {
    position: "absolute",
    inset: 0,
    background: `rgba(22, 58, 43, ${alpha})`,
    pointerEvents: "none",
  };
}

/** Passenger glass — cool and flat at rest, warm and lit on hover. */
function glass(lit: boolean, base = 0.55): CSSProperties {
  return {
    borderRadius: 6,
    background: lit ? "#FFE3B0" : SKY,
    opacity: lit ? 0.95 : base,
    boxShadow: lit ? "0 0 16px rgba(255,214,150,0.75)" : "none",
    transition:
      "background 320ms ease, opacity 320ms ease, box-shadow 320ms ease",
  };
}

/** One road wheel, parked against a flank at the given nose-to-tail offset. */
function Wheel({ x, z, spinning }: { x: number; z: number; spinning: boolean }) {
  return (
    <div
      style={{
        ...face(
          WHEEL_SIZE,
          WHEEL_SIZE,
          `translate3d(${x}px, ${WHEEL_Y}px, ${z}px)`,
        ),
        backfaceVisibility: "visible",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: BROWN,
          boxShadow: "inset 0 0 0 3px rgba(0,0,0,0.22)",
        }}
        animate={spinning ? { rotate: 360 } : { rotate: 0 }}
        transition={
          spinning
            ? { duration: 0.9, repeat: Infinity, ease: "linear" }
            : { duration: 0.3 }
        }
      >
        {/* Hub, plus one spoke so the rotation actually reads. */}
        <div
          style={{
            position: "absolute",
            inset: "34%",
            borderRadius: "50%",
            background: CREAM,
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "22%",
            width: 2,
            height: "56%",
            marginLeft: -1,
            background: CREAM,
            opacity: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}

export function ContactBus() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const [lit, setLit] = useState(false);

  // Dragging sideways banks the coach slightly, as though it were steering.
  const x = useMotionValue(0);
  const lean = useTransform(x, [-130, 130], [5, -5]);

  const rolling = !reducedMotion;

  return (
    <div
      className="relative z-0 hidden select-none lg:flex lg:items-center lg:justify-center"
      style={{ perspective: 2200, height: 360 }}
      role="img"
      aria-label="An illustrated Raigad Tours coach driving along a road. Drag it around with your cursor."
    >
      {/* ---------- Road (static camera, scrolling surface) ---------- */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          transform: CAMERA,
        }}
      >
        <div
          style={{
            ...face(
              ROAD_LENGTH,
              ROAD_DEPTH,
              `translate3d(0, ${ROAD_Y}px, 0) rotateX(90deg)`,
            ),
            backfaceVisibility: "visible",
            background: ROAD,
            overflow: "hidden",
          }}
        >
          {/* Centre dashes — one period of travel, looped seamlessly. */}
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: ROAD_LENGTH + DASH_PERIOD,
              height: 7,
              marginTop: -3.5,
              backgroundImage: `repeating-linear-gradient(to right,
                ${CREAM} 0px, ${CREAM} 62px,
                transparent 62px, transparent ${DASH_PERIOD}px)`,
              opacity: 0.85,
            }}
            animate={rolling ? { x: [0, -DASH_PERIOD] } : { x: 0 }}
            transition={
              rolling
                ? { duration: 0.75, repeat: Infinity, ease: "linear" }
                : { duration: 0 }
            }
          />

          {/* Verge lines */}
          {[26, ROAD_DEPTH - 30].map((top) => (
            <div
              key={top}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top,
                height: 3,
                background: CREAM,
                opacity: 0.45,
              }}
            />
          ))}

          {/* Blend the road into the page rather than cutting it off. The
              tail fades far earlier than the nose: that end overhangs the
              headline column, and dissolving it keeps the type clean. */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `linear-gradient(to right, ${CREAM} 0%, rgba(248,244,236,0) 44%, rgba(248,244,236,0) 78%, ${CREAM} 100%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `linear-gradient(to bottom, ${CREAM} 0%, rgba(248,244,236,0) 34%, rgba(248,244,236,0) 74%, ${CREAM} 100%)`,
            }}
          />
        </div>
      </div>

      {/* ---------- Coach ---------- */}
      <motion.div
        drag
        dragConstraints={{ left: -120, right: 120, top: -40, bottom: 40 }}
        dragElastic={0.14}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 26 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 1.03 }}
        onHoverStart={() => setLit(true)}
        onHoverEnd={() => setLit(false)}
        initial={reducedMotion ? false : { scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        style={{
          x,
          rotateZ: reducedMotion ? 0 : lean,
          transformStyle: "preserve-3d",
          cursor: "grab",
        }}
        whileDrag={{ cursor: "grabbing" }}
        className="relative touch-none"
      >
        <div
          style={{
            position: "relative",
            width: LENGTH,
            height: HEIGHT,
            transformStyle: "preserve-3d",
            transform: CAMERA,
          }}
        >
          {/* Contact shadow, lying flat on the road */}
          <div
            style={{
              ...face(
                LENGTH + 30,
                WIDTH + 40,
                `translate3d(0, ${ROAD_Y - 1}px, 0) rotateX(90deg)`,
              ),
              backfaceVisibility: "visible",
              borderRadius: "50%",
              background:
                "radial-gradient(closest-side, rgba(62,47,35,0.28), rgba(62,47,35,0))",
            }}
          />

          {/* Wheels sit on the road; only the body rides the suspension. */}
          <Wheel x={92} z={WIDTH / 2 + 2} spinning={rolling} />
          <Wheel x={-88} z={WIDTH / 2 + 2} spinning={rolling} />
          <Wheel x={92} z={-WIDTH / 2 - 2} spinning={rolling} />
          <Wheel x={-88} z={-WIDTH / 2 - 2} spinning={rolling} />

          {/* ---------- Body on its springs ---------- */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              transformStyle: "preserve-3d",
            }}
            animate={
              reducedMotion
                ? { y: 0, rotateZ: 0 }
                : { y: [0, -1.6, 0.5, -1, 0], rotateZ: [0, -0.35, 0.2, -0.15, 0] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* ---- Near flank ---- */}
            <div
              style={{
                ...face(LENGTH, HEIGHT, `translateZ(${WIDTH / 2}px)`),
                background: LIVERY,
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "inset 0 0 0 2px rgba(30,77,58,0.14)",
              }}
            >
              {/* Passenger glass */}
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  right: 76,
                  top: 18,
                  height: 44,
                  display: "flex",
                  gap: 7,
                }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} style={{ flex: 1, ...glass(lit) }} />
                ))}
              </div>

              {/* Door, just behind the front axle */}
              <div
                style={{
                  position: "absolute",
                  right: 20,
                  top: 16,
                  width: 46,
                  height: 60,
                  ...glass(lit, 0.4),
                  boxShadow: lit
                    ? "0 0 16px rgba(255,214,150,0.6), inset 0 0 0 2px rgba(30,77,58,0.22)"
                    : "inset 0 0 0 2px rgba(30,77,58,0.22)",
                }}
              />

              {/* Wheel arches */}
              {[92, -88].map((offset) => (
                <div
                  key={offset}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${offset}px - 30px)`,
                    bottom: -20,
                    width: 60,
                    height: 42,
                    borderRadius: "50%",
                    background: FOREST_DARK,
                  }}
                />
              ))}
            </div>

            {/* ---- Far flank (mostly hidden, keeps the box solid) ---- */}
            <div
              style={{
                ...face(
                  LENGTH,
                  HEIGHT,
                  `translateZ(-${WIDTH / 2}px) rotateY(180deg)`,
                ),
                background: LIVERY,
                borderRadius: 20,
              }}
            >
              <div style={shade(0.35)} />
            </div>

            {/* ---- Nose ---- */}
            <div
              style={{
                ...face(WIDTH, HEIGHT, `rotateY(90deg) translateZ(${LENGTH / 2}px)`),
                background: LIVERY,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              {/* Windscreen */}
              <div
                style={{
                  position: "absolute",
                  left: 11,
                  right: 11,
                  top: 16,
                  height: 46,
                  ...glass(lit, 0.62),
                  borderRadius: 8,
                }}
              />
              {/* Headlights */}
              {[14, 68].map((left) => (
                <div
                  key={left}
                  style={{
                    position: "absolute",
                    left,
                    bottom: 13,
                    width: 28,
                    height: 14,
                    borderRadius: 7,
                    background: lit ? "#FFF1D0" : SAFFRON,
                    boxShadow: lit
                      ? "0 0 18px 6px rgba(255,220,160,0.9), 0 0 44px 16px rgba(233,139,42,0.4)"
                      : "0 0 6px rgba(233,139,42,0.35)",
                    transition: "background 300ms ease, box-shadow 300ms ease",
                  }}
                />
              ))}
              <div style={shade(0.05)} />
            </div>

            {/* ---- Tail ---- */}
            <div
              style={{
                ...face(WIDTH, HEIGHT, `rotateY(-90deg) translateZ(${LENGTH / 2}px)`),
                background: LIVERY,
                borderRadius: 20,
              }}
            >
              <div style={shade(0.28)} />
            </div>

            {/* ---- Roof ---- */}
            <div
              style={{
                ...face(LENGTH, WIDTH, `rotateX(90deg) translateZ(${HEIGHT / 2}px)`),
                background: CREAM,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              {/* Roof seams, as in the reference */}
              {[24, WIDTH - 32].map((top) => (
                <div
                  key={top}
                  style={{
                    position: "absolute",
                    left: 28,
                    right: 28,
                    top,
                    height: 5,
                    borderRadius: 3,
                    background: FOREST,
                    opacity: 0.14,
                  }}
                />
              ))}
              {/* The sunward face reads a touch brighter than the flanks. */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.35)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* ---- Underside ---- */}
            <div
              style={{
                ...face(LENGTH, WIDTH, `rotateX(-90deg) translateZ(${HEIGHT / 2}px)`),
                background: FOREST_DARK,
                borderRadius: 20,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
