export type VisualType = "image" | "video" | "gradient";

export interface RoomVisual {
  type: VisualType;
  alt: string;
  srcPlaceholder: string;
}

export interface RoomTheme {
  accentClass: string;
  bgClass: string;
  glowClass: string;
}

export interface Room {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  quote: string;
  funFact: string;
  visual: RoomVisual;
  theme: RoomTheme;
}
