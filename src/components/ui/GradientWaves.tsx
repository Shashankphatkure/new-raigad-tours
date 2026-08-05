"use client";

import { useEffect, useRef } from "react";
import { hexToRgb, lerpRgb } from "@/lib/color";

type DetailLevel = "low" | "medium" | "high";

type GradientWavesProps = {
  /** Colour at the far edge of the field — distant, fogged-out. */
  horizonColor?: string;
  /** Base colour of the wave body. */
  waveColor?: string;
  /** Highlight colour picked out along wave crests. */
  crestColor?: string;
  /** Overall animation speed. */
  speed?: number;
  /** Height of the wave displacement. */
  amplitude?: number;
  /** Frequency of the primary wave pattern. */
  waveScale?: number;
  /** 0–1 mix between the slow "swell" and the fast "turbulence" layers. */
  waveRatio?: number;
  /** Amplitude contribution of the slow, large-scale swell. */
  swell?: number;
  /** Amplitude contribution of the fast, chaotic ripple layer. */
  turbulence?: number;
  /** Perspective steepness — higher compresses rows toward the horizon. */
  tilt?: number;
  /** Overall scale of the field. */
  zoom?: number;
  /** Vertical scale of the wave displacement, in a hand-tuned unit. */
  height?: number;
  /** How aggressively distant rows fade toward horizonColor. */
  fogDepth?: number;
  /** Mesh resolution: row and sample-point count. */
  detail?: DetailLevel;
  /** Brightness multiplier on the final colours. */
  brightness?: number;
  /** Opacity of the whole field. */
  opacity?: number;
  /** Whether the field drifts toward the cursor. */
  mouseInteraction?: boolean;
  /** 0–1 strength of the mouse-driven parallax drift. */
  parallaxStrength?: number;
  /** Whether to overlay a static film-grain texture. */
  grain?: boolean;
  /** 0–1 opacity of the grain overlay. */
  grainIntensity?: number;
  className?: string;
};

const DETAIL_SETTINGS: Record<DetailLevel, { rows: number; points: number }> = {
  low: { rows: 16, points: 36 },
  medium: { rows: 26, points: 56 },
  high: { rows: 38, points: 84 },
};

/** Builds a small tileable noise texture once, used for the optional grain overlay. */
function buildGrainDataUrl(size = 128): string {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const imageData = ctx.createImageData(size, size);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const shade = Math.floor(Math.random() * 255);
    imageData.data[i] = shade;
    imageData.data[i + 1] = shade;
    imageData.data[i + 2] = shade;
    imageData.data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

/**
 * A Canvas 2D perspective wave field — a lightweight stand-in for a WebGL
 * ocean shader. Draws horizontal wave lines that recede toward a horizon,
 * fogging into `horizonColor`, with brighter `crestColor` picked out along
 * wave peaks. Fully decorative; skips animation under prefers-reduced-motion.
 */
export function GradientWaves({
  horizonColor = "#1E4D3A",
  waveColor = "#163A2B",
  crestColor = "#E98B2A",
  speed = 0.4,
  amplitude = 2.5,
  waveScale = 0.6,
  waveRatio = 0.6,
  swell = 35,
  turbulence = 20,
  tilt = 1.1,
  zoom = 1,
  height = 5.5,
  fogDepth = 15,
  detail = "medium",
  brightness = 1,
  opacity = 1,
  mouseInteraction = false,
  parallaxStrength = 0.5,
  grain = false,
  grainIntensity = 0.05,
  className = "",
}: GradientWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const horizonRgb = hexToRgb(horizonColor);
    const waveRgb = hexToRgb(waveColor);
    const crestRgb = hexToRgb(crestColor);
    const { rows, points } = DETAIL_SETTINGS[detail];

    let width = 0;
    let height_ = 0;
    let dpr = 1;
    let frame = 0;
    let time = prefersReducedMotion ? 12 : 0;

    const mouse = { x: 0, y: 0 };
    const mouseTarget = { x: 0, y: 0 };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height_ = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height_ * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height_}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseTarget.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseTarget.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    if (mouseInteraction) {
      container.addEventListener("pointermove", handlePointerMove);
    }

    const draw = () => {
      if (width === 0 || height_ === 0) return;

      // Smoothly ease the tracked mouse position toward its latest target.
      mouse.x += (mouseTarget.x - mouse.x) * 0.05;
      mouse.y += (mouseTarget.y - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height_);

      // Backdrop wash from horizon to wave colour.
      const backdrop = ctx.createLinearGradient(0, 0, 0, height_);
      backdrop.addColorStop(0, `rgb(${horizonRgb.join(",")})`);
      backdrop.addColorStop(1, `rgb(${waveRgb.join(",")})`);
      ctx.fillStyle = backdrop;
      ctx.fillRect(0, 0, width, height_);

      const horizonY = height_ * 0.06;
      const parallaxX = mouseInteraction ? mouse.x * parallaxStrength * 40 : 0;
      const parallaxY = mouseInteraction ? mouse.y * parallaxStrength * 12 : 0;

      for (let row = 0; row < rows; row++) {
        const t = row / Math.max(1, rows - 1); // 0 = far, 1 = near
        const perspectiveT = Math.pow(t, 1 + tilt);
        const baseY =
          horizonY + (height_ - horizonY) * perspectiveT * zoom + parallaxY * t;

        const rowAmplitude = amplitude * zoom * height * (0.12 + 0.88 * t);
        const fogT = Math.max(0, 1 - t * (fogDepth / 20));
        const rowColor = lerpRgb(waveRgb, horizonRgb, fogT);
        const lineAlpha = Math.max(0.08, 0.85 * t) * (1 - fogT * 0.6);

        ctx.beginPath();
        let peakX = 0;
        let peakY = baseY;
        let peakStrength = -Infinity;

        for (let p = 0; p <= points; p++) {
          const x = (p / points) * width;
          const phase = time * speed + row * 0.35;

          const swellWave =
            Math.sin(x * waveScale * 0.006 + phase + parallaxX * 0.01) * swell;
          const turbulenceWave =
            (Math.sin(x * waveScale * 0.021 - phase * 1.7) * 0.6 +
              Math.sin(x * waveScale * 0.037 + phase * 2.3 + row) * 0.4) *
            turbulence;

          const displacement =
            (swellWave * waveRatio + turbulenceWave * (1 - waveRatio)) *
            (rowAmplitude / 40);

          const y = baseY + displacement;
          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);

          if (displacement > peakStrength) {
            peakStrength = displacement;
            peakX = x;
            peakY = y;
          }
        }

        const [r, g, b] = rowColor.map((c) => Math.min(255, c * brightness));
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
        ctx.lineWidth = Math.max(0.6, 1.3 * zoom);
        ctx.stroke();

        // A bright crest highlight at this row's most-raised point. Uses a
        // radial-gradient halo rather than ctx.shadowBlur — shadowBlur is a
        // real convolution pass and re-running it ~30x per frame is enough
        // to tank the frame rate; a gradient fill costs almost nothing.
        if (peakStrength > rowAmplitude * 0.12 && t > 0.1) {
          const crestAlpha = Math.min(
            1,
            0.55 + (peakStrength / (rowAmplitude || 1)) * t * 0.6,
          );
          const coreRadius = Math.max(2.6, 4.6 * zoom * (0.5 + 0.5 * t));
          const haloRadius = coreRadius * 2.4;
          const [cr, cg, cb] = crestRgb;

          const halo = ctx.createRadialGradient(
            peakX,
            peakY,
            0,
            peakX,
            peakY,
            haloRadius,
          );
          halo.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${crestAlpha * 0.55})`);
          halo.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
          ctx.beginPath();
          ctx.arc(peakX, peakY, haloRadius, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(peakX, peakY, coreRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${crestAlpha})`;
          ctx.fill();
        }
      }
    };

    // Real elapsed time, not an assumed fixed frame duration — keeps motion
    // fluid and self-correcting if a frame or two is ever dropped, rather
    // than the whole field compounding into slow motion.
    let lastTimestamp = 0;
    const loop = (timestamp: number) => {
      const deltaSeconds = lastTimestamp
        ? Math.min(0.1, (timestamp - lastTimestamp) / 1000)
        : 0;
      lastTimestamp = timestamp;
      time += deltaSeconds * 1.8;
      draw();
      frame = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (mouseInteraction) {
        container.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    zoom,
    height,
    fogDepth,
    detail,
    brightness,
    mouseInteraction,
    parallaxStrength,
  ]);

  useEffect(() => {
    if (!grain || !grainRef.current) return;
    const dataUrl = buildGrainDataUrl();
    grainRef.current.style.backgroundImage = `url(${dataUrl})`;
  }, [grain]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {grain && (
        <div
          ref={grainRef}
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: grainIntensity,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  );
}
