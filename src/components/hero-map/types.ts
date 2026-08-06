export type TripType =
  | "Historical"
  | "Nature"
  | "Industrial"
  | "Science"
  | "Coastal"
  | "Hill Station";

/** Position on the map's SVG viewBox coordinate system (see MAP_VIEWBOX). */
export type MapPoint = {
  x: number;
  y: number;
};

export type LabelAnchor = "start" | "middle" | "end";

export type Destination = {
  id: string;
  name: string;
  /** State/region label shown under the name. */
  region: string;
  title: string;
  description: string;
  duration: string;
  highlights: string[];
  grades: string;
  tripType: TripType;
  image: string;
  imageAlt: string;
  /** Real-world coords, kept for future use (search, filtering, real maps). */
  coordinates: { lat: number; lng: number };
  /** Where the pin sits on the illustrated SVG map. */
  point: MapPoint;
  /**
   * Hand-placed offset (local units, counter-scaled with the pin) from the
   * pin to its label — used to fan out labels that would otherwise collide
   * within a tight cluster. Omit for the default position directly above
   * the pin, which needs no leader line.
   */
  labelOffset?: { dx: number; dy: number };
  labelAnchor?: LabelAnchor;
};

/** A collapsed regional grouping shown before a state is zoomed into. */
export type Region = {
  id: string;
  /** Must match the `region` field on every Destination it groups. */
  name: string;
  /** Where the collapsed regional marker sits before any zoom. */
  marker: MapPoint;
  /** Camera focal point + base (desktop) zoom level for this region. */
  zoom: { cx: number; cy: number; scale: number };
  /** Where the bus waits once this region is zoomed into. */
  homePoint: MapPoint;
};
