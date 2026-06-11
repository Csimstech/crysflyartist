import type { Collection } from "@/lib/types";

export const collections: Collection[] = [
  {
    id: "water",
    slug: "water-reflection",
    title: "Water & Reflection",
    description:
      "Submersion, surfacing, and the body in motion — reflection rendered as water. The mirror gives way to the sea.",
    cover: "sacral",
  },
  {
    id: "spirit",
    slug: "spirit-symbol",
    title: "Spirit & Symbol",
    description:
      "Ancestral iconography and sacred geometry — hands, halos, and the eye that sees inward.",
    cover: "blue-42",
  },
  {
    id: "memory",
    slug: "memory-identity",
    title: "Memory & Identity",
    description:
      "History reframed; the viewer written into the picture through mirror and gaze.",
    cover: "queen-move",
  },
];

export function getCollection(id: string): Collection | undefined {
  return collections.find((c) => c.id === id || c.slug === id);
}
