import type { Artwork } from "@/lib/types";

export const artworks: Artwork[] = [
  {
    slug: "sacral",
    title: "Sacral",
    year: 2023,
    medium: "Oil and Mirror",
    mediumCategory: "oil",
    dimensions: "60 × 72 in",
    dimensionsCm: "152 × 183 cm",
    support: "Wood panel",
    collection: "water",
    edition: "Original — unique work",
    image: "/images/artwork/sacral.jpg",
    details: [
      { src: "/images/artwork/sacral-detail-1.jpg", caption: "Detail — the gilded mirror at the work's center" },
      { src: "/images/artwork/sacral-detail-2.jpg", caption: "Detail — the breaking wave and kintsugi seam" },
    ],
    status: "available",
    price: "Price on inquiry",
    featured: true,
    note: "Her largest work to date, Sacral marks the threshold where the literal mirror dissolves into water. A cupped hand opens onto a reflective sky while a wave breaks below — the self meeting the self across a gilded seam, where what was broken is mended in gold.",
  },
  {
    slug: "complicated-no-2",
    title: "Complicated No. 2",
    year: 2024,
    medium: "Mixed Media",
    mediumCategory: "mixed",
    dimensions: "40 × 40 in",
    dimensionsCm: "102 × 102 cm",
    collection: "spirit",
    edition: "Original — unique work",
    image: "/images/artwork/complicated-no-2.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "Reaching hands move across a Mondrian-like grid of color and mirror — the fractured, ordered complexity of the self.",
  },
  {
    slug: "yahweh",
    title: "Yahweh",
    year: 2023,
    medium: "Oil on Canvas",
    mediumCategory: "oil",
    dimensions: "24 × 30 in",
    dimensionsCm: "61 × 76 cm",
    collection: "spirit",
    edition: "Original — unique work",
    image: "/images/artwork/yahweh.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "A figure in a crown of thorns, rendered in warm light against shadow — devotion, suffering, and dignity held together.",
  },
  {
    slug: "lotus",
    title: "Lotus",
    year: 2023,
    medium: "Mixed Media (Mirror)",
    mediumCategory: "mixed",
    dimensions: "20 × 24 in",
    dimensionsCm: "51 × 61 cm",
    collection: "spirit",
    edition: "Original — unique work",
    image: "/images/artwork/lotus.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "Two hands meet in a mudra within a mirrored oval ringed in malachite — stillness, ritual, and reflection.",
  },
  {
    slug: "blue-42",
    title: "Blue 42",
    year: 2023,
    medium: "Mixed Media",
    mediumCategory: "mixed",
    dimensions: "26 × 76 in",
    dimensionsCm: "66 × 193 cm",
    collection: "spirit",
    edition: "Original — unique work",
    image: "/images/artwork/blue-42.jpg",
    details: [
      { src: "/images/artwork/blue-42-detail-1.jpg", caption: "Reverse — the Eye of Horus" },
    ],
    status: "available",
    price: "Price on inquiry",
    note: "A circular, double-sided work: a blue figure crests a wave on one face, the Eye of Horus on the other — momentum and inner sight.",
  },
  {
    slug: "growth",
    title: "Growth",
    year: 2022,
    medium: "Mixed Media (Mirror)",
    mediumCategory: "mixed",
    dimensions: "24 × 36 in",
    dimensionsCm: "61 × 91 cm",
    collection: "spirit",
    edition: "Original — unique work",
    image: "/images/artwork/growth.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "Hands cradle a seedling beneath sheltering leaves; a mirror and a red hamsa frame the slow, protected work of becoming.",
  },
  {
    slug: "dahomey",
    title: "DaHomey",
    year: 2021,
    medium: "Oil and Mirror",
    mediumCategory: "oil",
    dimensions: "36 × 48 in",
    dimensionsCm: "91 × 122 cm",
    collection: "memory",
    edition: "Original — unique work",
    image: "/images/artwork/dahomey.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "Armored in a bullet sash and crowned in gold, a young sentinel holds both spear and white hood — a meditation on inherited violence and resistance.",
  },
  {
    slug: "queen-move",
    title: "Queen Move",
    year: 2019,
    medium: "Acrylic and Mirror",
    mediumCategory: "acrylic",
    dimensions: "24 × 24 in",
    dimensionsCm: "61 × 61 cm",
    collection: "memory",
    edition: "Original — unique work",
    image: "/images/artwork/queen-move.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "Drawn from the Little Rock Nine, a young woman walks past a jeering crowd as mirrored tiles dissolve the scene — history reframed, the viewer written in.",
  },
  {
    slug: "nine",
    title: "Nine",
    year: 2017,
    medium: "Oil on Canvas",
    mediumCategory: "oil",
    dimensions: "36 × 48 in",
    dimensionsCm: "91 × 122 cm",
    collection: "memory",
    edition: "Original — unique work",
    image: "/images/artwork/nine.jpg",
    status: "available",
    price: "Price on inquiry",
    note: "A masked figure raises a broken chain at dusk, ringed by dancing silhouettes — ancestry, freedom, and release.",
  },
  {
    slug: "seven",
    title: "Seven",
    year: 2016,
    medium: "Oil on Canvas",
    mediumCategory: "oil",
    dimensions: "30 × 40 in",
    dimensionsCm: "76 × 102 cm",
    collection: "water",
    edition: "Original — unique work",
    image: "/images/artwork/seven.jpg",
    note: "An early work: legs caught mid-stride against a deep, water-like blue — the body in motion toward something unseen.",
    status: "available",
    price: "Price on inquiry",
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeatured(): Artwork {
  return artworks.find((a) => a.featured) ?? artworks[0];
}

export function getRelated(slug: string, count = 3): Artwork[] {
  const current = getArtwork(slug);
  if (!current) return artworks.slice(0, count);
  const sameCollection = artworks.filter(
    (a) => a.slug !== slug && a.collection === current.collection,
  );
  const others = artworks.filter(
    (a) => a.slug !== slug && a.collection !== current.collection,
  );
  return [...sameCollection, ...others].slice(0, count);
}

export function adjacent(slug: string): { prev: Artwork; next: Artwork } {
  const i = artworks.findIndex((a) => a.slug === slug);
  const prev = artworks[(i - 1 + artworks.length) % artworks.length];
  const next = artworks[(i + 1) % artworks.length];
  return { prev, next };
}
