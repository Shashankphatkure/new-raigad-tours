type LeaderLineProps = {
  /** End point, relative to the pin at (0,0), in local (counter-scaled) units. */
  dx: number;
  dy: number;
};

/**
 * Thin connector between a destination pin and its fanned-out label.
 * Stops short of both ends so it never pokes into the dot or the text.
 */
export function LeaderLine({ dx, dy }: LeaderLineProps) {
  return (
    <line
      x1={dx * 0.22}
      y1={dy * 0.22}
      x2={dx * 0.82}
      y2={dy * 0.82}
      stroke="#1E4D3A"
      strokeWidth="1.25"
      strokeLinecap="round"
      className="pointer-events-none opacity-30 transition-opacity duration-300 group-hover:opacity-70"
    />
  );
}
