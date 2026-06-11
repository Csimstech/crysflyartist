// AUTO-GENERATED from /public images. Re-run scripts/measure if images change.

export const imageDims: Record<string, { width: number; height: number }> = {
  "/images/artist/portrait-about.jpg": { width: 1040, height: 1300 },
  "/images/artist/portrait-hero.jpg": { width: 1280, height: 1600 },
  "/images/artist/portrait-studio.jpg": { width: 1900, height: 1520 },
  "/images/artwork/blue-42-detail-1.jpg": { width: 1053, height: 861 },
  "/images/artwork/blue-42.jpg": { width: 601, height: 1300 },
  "/images/artwork/complicated-no-2.jpg": { width: 1089, height: 1200 },
  "/images/artwork/dahomey.jpg": { width: 1058, height: 1400 },
  "/images/artwork/growth.jpg": { width: 601, height: 1300 },
  "/images/artwork/lotus.jpg": { width: 989, height: 1119 },
  "/images/artwork/nine.jpg": { width: 1034, height: 1400 },
  "/images/artwork/queen-move.jpg": { width: 1500, height: 1072 },
  "/images/artwork/sacral-detail-1.jpg": { width: 749, height: 442 },
  "/images/artwork/sacral-detail-2.jpg": { width: 819, height: 503 },
  "/images/artwork/sacral.jpg": { width: 1170, height: 1359 },
  "/images/artwork/seven.jpg": { width: 1046, height: 1400 },
  "/images/artwork/yahweh.jpg": { width: 854, height: 1300 },
};

export function dims(src: string): { width: number; height: number } {
  return imageDims[src] ?? { width: 1200, height: 1500 };
}
