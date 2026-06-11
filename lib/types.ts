export type CollectionId = "water" | "spirit" | "memory";

export type MediumCategory = "oil" | "mixed" | "acrylic";

export type Availability = "available" | "reserved" | "sold";

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  medium: string;
  mediumCategory: MediumCategory;
  dimensions: string;
  dimensionsCm?: string;
  support?: string;
  collection: CollectionId;
  edition: string;
  image: string;
  details?: { src: string; caption: string }[];
  status: Availability;
  price: string;
  featured?: boolean;
  /** Short curatorial / artist note shown on cards and detail pages. */
  note: string;
}

export interface Collection {
  id: CollectionId;
  slug: string;
  title: string;
  description: string;
  /** slug of the artwork used as the collection cover */
  cover: string;
}

export interface Exhibition {
  venue: string;
  location?: string;
  year?: string;
  type?: string;
}
