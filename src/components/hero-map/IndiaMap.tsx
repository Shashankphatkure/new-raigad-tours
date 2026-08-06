"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";
import { DESTINATIONS, REGIONS } from "./data";
import { Ambience } from "./Ambience";
import { Breadcrumb } from "./Breadcrumb";
import { Bus } from "./Bus";
import { DestinationCard } from "./DestinationCard";
import { DestinationPin } from "./DestinationPin";
import { MapCamera, type CameraTarget } from "./MapCamera";
import { MapLandmass, MapRoute } from "./MapRoutes";
import { RegionMarker } from "./RegionMarker";
import { StateZoom } from "./StateZoom";
import { INDIA_OUTLINE, MAP_VIEWBOX, buildRoutePath } from "./map-geometry";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Timings for the miniature journey story, in seconds. */
const TIMING = {
  routeDraw: 0.9,
  departPause: 0.75,
  drive: 2.4,
} as const;

/** Milliseconds between clicking a region and its destinations fading in. */
const REGION_EXPAND_MS = 150;
const REGION_SETTLE_MS = 900;

type JourneyPhase = "idle" | "departing" | "driving" | "arrived";
type Viewport = "mobile" | "tablet" | "desktop";

const MAHARASHTRA = REGIONS.find((region) => region.id === "maharashtra")!;

/**
 * Samples a point and heading along an SVG path so the bus can follow the
 * curve and rotate to match its tangent.
 */
function sampleAlongPath(path: SVGPathElement, progress: number) {
  const length = path.getTotalLength();
  const distance = length * progress;
  const point = path.getPointAtLength(distance);

  // Look slightly ahead (or behind, at the very end) to derive the heading.
  const delta = Math.min(1, length * 0.01);
  const ahead = path.getPointAtLength(Math.min(length, distance + delta));
  const behind = path.getPointAtLength(Math.max(0, distance - delta));
  const angle =
    (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;

  return { x: point.x, y: point.y, angle };
}

export function IndiaMap() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);

  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [activeRegionId, setActiveRegionId] = useState<string | null>(null);
  const [justClickedId, setJustClickedId] = useState<string | null>(null);
  const [showDestinations, setShowDestinations] = useState(false);

  const [activeDestId, setActiveDestId] = useState<string | null>(null);
  const [phase, setPhase] = useState<JourneyPhase>("idle");
  const [journeyKey, setJourneyKey] = useState(0);
  const [busPose, setBusPose] = useState({ ...MAHARASHTRA.homePoint, angle: 0 });

  const measurePathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  /** Track viewport tier: desktop gets the full zoom, tablet a reduced one, mobile a fullscreen overlay instead. */
  useEffect(() => {
    const mqTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setViewport(mqDesktop.matches ? "desktop" : mqTablet.matches ? "tablet" : "mobile");
    };
    update();
    mqTablet.addEventListener("change", update);
    mqDesktop.addEventListener("change", update);
    return () => {
      mqTablet.removeEventListener("change", update);
      mqDesktop.removeEventListener("change", update);
    };
  }, []);

  const activeRegion = useMemo(
    () => REGIONS.find((region) => region.id === activeRegionId) ?? null,
    [activeRegionId],
  );

  const regionDestinations = useMemo(
    () =>
      activeRegion
        ? DESTINATIONS.filter((d) => d.region === activeRegion.name)
        : [],
    [activeRegion],
  );

  const activeDestination = useMemo(
    () => DESTINATIONS.find((d) => d.id === activeDestId) ?? null,
    [activeDestId],
  );

  /** On tablet the zoom is "slightly reduced"; on mobile the map never zooms in-place. */
  const appliedScale = useMemo(() => {
    if (!activeRegion) return 1;
    if (viewport === "tablet") return Math.max(1.6, activeRegion.zoom.scale * 0.75);
    return activeRegion.zoom.scale;
  }, [activeRegion, viewport]);

  const isZoomedIn = Boolean(activeRegion) && viewport !== "mobile";
  const counterScale = isZoomedIn ? 1 / appliedScale : 1;

  const cameraTarget: CameraTarget = useMemo(() => {
    if (!activeRegion || viewport === "mobile") return null;
    return { cx: activeRegion.zoom.cx, cy: activeRegion.zoom.cy, scale: appliedScale };
  }, [activeRegion, appliedScale, viewport]);

  /** Route runs from the active region's home point to the chosen destination. */
  const routePath = useMemo(() => {
    if (!activeRegion || !activeDestination) return "";
    return buildRoutePath(activeRegion.homePoint, activeDestination.point);
  }, [activeRegion, activeDestination]);

  const clearPending = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  useEffect(() => clearPending, [clearPending]);

  /** Drives the bus along the measured route path via rAF. */
  const runDrive = useCallback(() => {
    const path = measurePathRef.current;
    if (!path) return;

    setPhase("driving");
    const start = performance.now();
    const durationMs = TIMING.drive * 1000;

    const step = (now: number) => {
      const elapsed = now - start;
      const linear = Math.min(1, elapsed / durationMs);
      // Gentle ease-in-out so the coach pulls away and settles naturally.
      const eased =
        linear < 0.5
          ? 4 * linear * linear * linear
          : 1 - Math.pow(-2 * linear + 2, 3) / 2;

      setBusPose(sampleAlongPath(path, eased));

      if (linear < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
        setPhase("arrived");
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, []);

  const selectRegion = useCallback(
    (id: string) => {
      if (id === activeRegionId) return;

      clearPending();
      setActiveDestId(null);
      setPhase("idle");
      setShowDestinations(false);

      const region = REGIONS.find((r) => r.id === id);
      if (!region) return;

      if (viewport === "mobile") {
        setActiveRegionId(id);
        return;
      }

      if (reducedMotion) {
        setActiveRegionId(id);
        setBusPose({ ...region.homePoint, angle: 0 });
        setShowDestinations(true);
        return;
      }

      setJustClickedId(id);
      setBusPose({ ...region.homePoint, angle: 0 });

      timeoutsRef.current.push(
        setTimeout(() => {
          setJustClickedId(null);
          setActiveRegionId(id);
        }, REGION_EXPAND_MS),
      );

      timeoutsRef.current.push(
        setTimeout(() => setShowDestinations(true), REGION_SETTLE_MS),
      );
    },
    [activeRegionId, viewport, reducedMotion, clearPending],
  );

  const resetToIndia = useCallback(() => {
    clearPending();
    setActiveRegionId(null);
    setShowDestinations(false);
    setActiveDestId(null);
    setPhase("idle");
    setBusPose({ ...MAHARASHTRA.homePoint, angle: 0 });
  }, [clearPending]);

  const handleSelectDestination = useCallback(
    (id: string) => {
      if (!activeRegion) return;
      if (id === activeDestId && phase !== "idle") return;

      clearPending();
      setActiveDestId(id);
      setJourneyKey((key) => key + 1);

      const destination = DESTINATIONS.find((d) => d.id === id);
      if (!destination) return;

      if (reducedMotion) {
        // Respect the user's preference: no travel, just the result.
        setBusPose({ ...destination.point, angle: 0 });
        setPhase("arrived");
        return;
      }

      setPhase("departing");
      setBusPose({ ...activeRegion.homePoint, angle: 0 });

      // Let the route finish drawing, hold on "Departing…", then drive.
      timeoutsRef.current.push(
        setTimeout(
          () => runDrive(),
          (TIMING.routeDraw + TIMING.departPause) * 1000,
        ),
      );
    },
    [activeRegion, activeDestId, phase, clearPending, reducedMotion, runDrive],
  );

  /** Swipe between destinations within the active region (desktop/tablet only). */
  const stepDestination = useCallback(
    (direction: 1 | -1) => {
      if (regionDestinations.length === 0) return;
      const currentIndex = regionDestinations.findIndex((d) => d.id === activeDestId);
      const nextIndex =
        currentIndex === -1
          ? 0
          : (currentIndex + direction + regionDestinations.length) %
            regionDestinations.length;
      handleSelectDestination(regionDestinations[nextIndex].id);
    },
    [regionDestinations, activeDestId, handleSelectDestination],
  );

  const busTransition: Transition = { duration: 0.5, ease: EASE };

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14">
      {/* ---------- Map ---------- */}
      <div className="relative">
        <Breadcrumb
          regionName={viewport !== "mobile" ? activeRegion?.name ?? null : null}
          onReset={resetToIndia}
          reducedMotion={reducedMotion}
        />

        <svg
          viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
          className="h-auto w-full overflow-visible"
          role="group"
          aria-label="Interactive map of India showing Raigad Tours destinations"
        >
          <defs>
            <clipPath id="india-clip">
              <path d={INDIA_OUTLINE} />
            </clipPath>
          </defs>

          <MapCamera target={cameraTarget} reducedMotion={reducedMotion}>
            <Ambience reducedMotion={reducedMotion} />
            <MapLandmass reducedMotion={reducedMotion} dimmed={isZoomedIn} />

            {REGIONS.map((region) => (
              <RegionMarker
                key={region.id}
                region={region}
                visible={!activeRegion}
                justClicked={region.id === justClickedId}
                reducedMotion={reducedMotion}
                onSelect={selectRegion}
              />
            ))}

            {/* Hidden path used purely for geometric measurement. */}
            {routePath && (
              <path ref={measurePathRef} d={routePath} fill="none" stroke="none" />
            )}

            {routePath && phase !== "idle" && (
              <MapRoute
                path={routePath}
                journeyKey={journeyKey}
                duration={TIMING.routeDraw}
                reducedMotion={reducedMotion}
              />
            )}

            {isZoomedIn &&
              showDestinations &&
              regionDestinations.map((destination, index) => (
                <DestinationPin
                  key={destination.id}
                  destination={destination}
                  isActive={destination.id === activeDestId}
                  hasArrived={destination.id === activeDestId && phase === "arrived"}
                  reducedMotion={reducedMotion}
                  counterScale={counterScale}
                  delay={index * 0.07}
                  onSelect={handleSelectDestination}
                />
              ))}

            {/* ---------- Bus ---------- */}
            <motion.g
              animate={{
                x: busPose.x,
                y: busPose.y,
                rotate: busPose.angle,
              }}
              transition={phase === "driving" ? { duration: 0 } : busTransition}
            >
              <motion.g
                animate={{ scale: counterScale }}
                transition={{ duration: reducedMotion ? 0 : 0.5, ease: EASE }}
              >
                {/* Idle bob, kept separate so it never fights the travel transform. */}
                <motion.g
                  animate={
                    phase === "idle" && !reducedMotion
                      ? { y: [0, -3, 0] }
                      : { y: 0 }
                  }
                  transition={
                    phase === "idle" && !reducedMotion
                      ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.3 }
                  }
                >
                  <Bus driving={phase === "driving"} reducedMotion={reducedMotion} />

                  {/* Story beat: "Departing…" then "Arrived" */}
                  <AnimatePresence>
                    {(phase === "departing" || phase === "arrived") && (
                      <motion.g
                        key={phase}
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: -26 }}
                        exit={{ opacity: 0, y: -34 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        // Counter-rotate so the label stays upright on curves.
                        style={{ rotate: -busPose.angle }}
                      >
                        <rect
                          x={phase === "departing" ? -38 : -30}
                          y="-14"
                          width={phase === "departing" ? 76 : 60}
                          height="22"
                          rx="11"
                          fill={phase === "arrived" ? "#E98B2A" : "#1E4D3A"}
                        />
                        <text
                          x="0"
                          y="1"
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight={600}
                          fill="#F8F4EC"
                          className="select-none font-sans tracking-wide"
                        >
                          {phase === "departing" ? "Departing…" : "Arrived"}
                        </text>
                      </motion.g>
                    )}
                  </AnimatePresence>
                </motion.g>
              </motion.g>
            </motion.g>
          </MapCamera>
        </svg>

        {/* Screen-reader narration of the journey state. */}
        <p className="sr-only" role="status" aria-live="polite">
          {!activeRegion && "Select a region to begin exploring."}
          {activeRegion &&
            !activeDestination &&
            `Showing destinations in ${activeRegion.name}. Select one to begin the journey.`}
          {phase === "departing" &&
            `Departing for ${activeDestination?.name ?? ""}.`}
          {phase === "driving" && `Travelling to ${activeDestination?.name ?? ""}.`}
          {phase === "arrived" && `Arrived at ${activeDestination?.name ?? ""}.`}
        </p>
      </div>

      {/* ---------- Destination panel ---------- */}
      <div className="lg:min-h-[560px]">
        {activeDestination ? (
          <DestinationCard
            destination={activeDestination}
            visible={phase === "arrived"}
            reducedMotion={reducedMotion}
            onSwipeNext={() => stepDestination(1)}
            onSwipePrev={() => stepDestination(-1)}
          />
        ) : null}

        {/* Prompt shown before any region is chosen. */}
        <AnimatePresence>
          {!activeRegion && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-image border border-line bg-white/60 p-8 sm:p-10"
            >
              <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
                Since 1998
              </p>
              <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
                Learning Beyond Classrooms
              </h2>
              <p className="mt-5 text-body leading-relaxed text-gray-600">
                Choose a region on the map to zoom in — every stop inside it is
                a guided, curriculum-linked journey designed for school groups
                across India.
              </p>
              <p className="mt-6 text-small text-gray-500">
                Tap any region to begin.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Browsing state: region is zoomed but no destination chosen yet. */}
        {activeRegion && viewport !== "mobile" && !activeDestination && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-image border border-line bg-white/60 p-8 sm:p-10"
          >
            <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
              India / {activeRegion.name}
            </p>
            <h2 className="mt-3 font-display text-h2 leading-tight text-brown">
              {regionDestinations.length} destination
              {regionDestinations.length === 1 ? "" : "s"} in {activeRegion.name}
            </h2>
            <p className="mt-5 text-body leading-relaxed text-gray-600">
              Pick a marker on the map to send the coach on its way.
            </p>
          </motion.div>
        )}

        {/* Travelling state placeholder keeps the layout from collapsing. */}
        {(phase === "departing" || phase === "driving") && activeDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex min-h-[280px] flex-col justify-center rounded-image border border-line bg-white/60 p-8 sm:p-10"
          >
            <p className="text-small font-semibold uppercase tracking-[0.14em] text-saffron">
              En route
            </p>
            <h3 className="mt-3 font-display text-h3 leading-tight text-brown">
              {activeDestination.name}
            </h3>
            <p className="mt-4 text-body text-gray-600">
              {activeDestination.region}
            </p>
          </motion.div>
        )}
      </div>

      {/* ---------- Mobile: fullscreen destination overlay ---------- */}
      <AnimatePresence>
        {viewport === "mobile" && activeRegion && (
          <StateZoom
            region={activeRegion}
            destinations={regionDestinations}
            onClose={resetToIndia}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
