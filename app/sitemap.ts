import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crysflyartist.com";
  const routes = ["", "/gallery", "/collections", "/about", "/contact"].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const works = artworks.map((a) => ({
    url: `${base}/gallery/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...routes, ...works];
}
