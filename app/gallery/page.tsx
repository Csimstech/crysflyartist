import type { Metadata } from "next";
import { artworks } from "@/data/artworks";
import { GalleryFilter } from "@/components/gallery-filter";
import type { CollectionId } from "@/lib/types";

export const metadata: Metadata = {
  title: "The Gallery — Selected Works",
  description:
    "Browse selected works by Crys Adams (CrysFLY) — oil, mixed media, and mirror paintings spanning 2016–2024. Filter by collection and medium; inquire to acquire.",
  alternates: { canonical: "/gallery" },
};

const valid: CollectionId[] = ["water", "spirit", "memory"];

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string }>;
}) {
  const { collection } = await searchParams;
  const initial = valid.includes(collection as CollectionId)
    ? (collection as CollectionId)
    : "all";

  return (
    <>
      <section className="pb-[2.6rem] pt-[calc(1.05rem+1.18rem+4rem)]">
        <div className="container-site">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-[54px] bg-gold-deep" />
            <span className="eyebrow">Selected Works · 2016—2024</span>
          </div>
          <h1
            className="font-serif font-extrabold leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3rem,8vw,6.4rem)" }}
          >
            The Gallery
          </h1>
          <p
            className="mt-6 max-w-[52ch] font-cormorant leading-snug text-[var(--ink-60)]"
            style={{ fontSize: "clamp(1.2rem,2vw,1.55rem)" }}
          >
            A decade of painting and mixed media — oil, acrylic, and mirror — each work an invitation
            to look inward. Filter by collection or medium, and inquire to acquire.
          </p>
        </div>
      </section>

      <GalleryFilter artworks={artworks} initialCollection={initial} />
    </>
  );
}
