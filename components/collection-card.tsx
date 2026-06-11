import Link from "next/link";
import Image from "next/image";
import type { Collection } from "@/lib/types";
import { getArtwork } from "@/data/artworks";

const numerals: Record<string, string> = { water: "I", spirit: "II", memory: "III" };

export function CollectionCard({ collection }: { collection: Collection }) {
  const cover = getArtwork(collection.cover);
  return (
    <Link
      href={`/gallery?collection=${collection.id}`}
      className="group relative block overflow-hidden bg-char-soft"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        {cover && (
          <Image
            src={cover.image}
            fill
            alt={`${collection.title} — featuring ${cover.title}.`}
            sizes="(max-width: 980px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.07]"
          />
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char-deep/90 from-[4%] via-char-deep/15 via-[55%] to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 p-7">
        <span className="mb-2 block font-serif italic text-gold" style={{ fontSize: "0.92rem" }}>
          {numerals[collection.id]}
        </span>
        <h3
          className="mb-2.5 font-serif font-semibold leading-tight text-ivory"
          style={{ fontSize: "clamp(1.5rem,2.4vw,1.95rem)" }}
        >
          {collection.title}
        </h3>
        <p className="mb-4 max-w-[30ch] font-cormorant text-[1.05rem] font-light italic leading-snug text-ivory-70">
          {collection.description}
        </p>
        <span className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ivory opacity-85 transition-all duration-500 ease-editorial group-hover:gap-4 group-hover:text-gold group-hover:opacity-100">
          Explore →
        </span>
      </div>
    </Link>
  );
}
