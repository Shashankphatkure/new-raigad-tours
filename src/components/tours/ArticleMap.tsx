import { DESTINATIONS } from "@/components/hero-map/data";
import { INDIA_OUTLINE, MAP_VIEWBOX } from "@/components/hero-map/map-geometry";

/**
 * A still, editorial version of the hero map — reuses the same illustrated
 * outline and destination coordinates, with a single location highlighted.
 */
export function ArticleMap({ destinationId }: { destinationId: string }) {
  const destination = DESTINATIONS.find((d) => d.id === destinationId);
  if (!destination) return null;

  return (
    <svg
      viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
      className="h-auto w-full max-w-md"
      role="img"
      aria-label={`Map of India showing the location of ${destination.name}, ${destination.region}`}
    >
      <path
        d={INDIA_OUTLINE}
        fill="#EFE8DD"
        stroke="#1E4D3A"
        strokeWidth="1.5"
        strokeOpacity="0.25"
        strokeLinejoin="round"
      />

      {/* Every other destination, muted for context */}
      {DESTINATIONS.filter((d) => d.id !== destinationId).map((d) => (
        <circle
          key={d.id}
          cx={d.point.x}
          cy={d.point.y}
          r="4"
          fill="#1E4D3A"
          opacity="0.2"
        />
      ))}

      {/* The highlighted destination */}
      <g transform={`translate(${destination.point.x}, ${destination.point.y})`}>
        <circle r="14" fill="#E98B2A" opacity="0.16" />
        <circle r="7" fill="#E98B2A" stroke="#F8F4EC" strokeWidth="2.5" />
        <text
          x="0"
          y="-22"
          textAnchor="middle"
          fontSize="26"
          fontWeight={600}
          fill="#3E2F23"
          className="font-sans"
        >
          {destination.name}
        </text>
      </g>
    </svg>
  );
}
