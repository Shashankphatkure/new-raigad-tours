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
};
