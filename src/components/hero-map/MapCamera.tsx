"use client";

import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { MAP_VIEWBOX } from "./map-geometry";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CameraTarget = { cx: number; cy: number; zoom: number } | null;

const RESTING = {
  cx: MAP_VIEWBOX.width / 2,
  cy: MAP_VIEWBOX.height / 2,
  zoom: 1,
};

function toViewBox(cx: number, cy: number, zoom: number) {
  const w = MAP_VIEWBOX.width / zoom;
  const h = MAP_VIEWBOX.height / zoom;
  return `${cx - w / 2} ${cy - h / 2} ${w} ${h}`;
}

/**
 * Drives the map by animating the SVG's own `viewBox` — a real camera moving
 * over a fixed coordinate space, rather than scaling/translating a `<g>`.
 * The `<svg>` element's on-screen box never changes size or position; only
 * the world-coordinate window it displays does, so the map is structurally
 * guaranteed to stay centred and contained inside its container no matter
 * the zoom level — there's no transform-order ambiguity and nothing can
 * spill outside the box.
 *
 * cx/cy/zoom live as Motion values rather than React state so an in-flight
 * transition retargets smoothly from wherever it currently is if the user
 * clicks another region mid-zoom (`animate()` reads a motion value's
 * current value automatically — no manual "from" tracking needed).
 *
 * Returns the live `zoom` too, so pins/labels/the bus can counter-scale
 * against it and stay a constant screen size while the terrain underneath
 * zooms, exactly like map pins in Apple Maps or Google Earth.
 */
export function useMapCamera(target: CameraTarget, reducedMotion: boolean) {
  const cx = useMotionValue(RESTING.cx);
  const cy = useMotionValue(RESTING.cy);
  const zoom = useMotionValue(RESTING.zoom);

  const [viewBox, setViewBox] = useState(() =>
    toViewBox(RESTING.cx, RESTING.cy, RESTING.zoom),
  );
  const [liveZoom, setLiveZoom] = useState(RESTING.zoom);

  useEffect(() => {
    const to = target ?? RESTING;
    const duration = reducedMotion ? 0 : 0.8;
    const options = { duration, ease: EASE };

    const controlsX = animate(cx, to.cx, options);
    const controlsY = animate(cy, to.cy, options);
    const controlsZoom = animate(zoom, to.zoom, options);

    return () => {
      controlsX.stop();
      controlsY.stop();
      controlsZoom.stop();
    };
    // Only the target's own values (and motion prefs) should restart the tween.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target?.cx, target?.cy, target?.zoom, reducedMotion]);

  const sync = () => {
    setViewBox(toViewBox(cx.get(), cy.get(), zoom.get()));
    setLiveZoom(zoom.get());
  };
  useMotionValueEvent(cx, "change", sync);
  useMotionValueEvent(cy, "change", sync);
  useMotionValueEvent(zoom, "change", sync);

  return { viewBox, zoom: liveZoom };
}
