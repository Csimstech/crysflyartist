import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/lib/types";
import { dims } from "@/lib/image-dims";
import { collections } from "@/data/collections";

const statusLabel: Record<Artwork["status"], string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const { width, height } = dims(artwork.image);
  const collection = collections.find((c) => c.id === artwork.collection);
  return (
    <Link href={`/gallery/${artwork.slug}`} className="group block break-inside-avoid">
      <div className="relative overflow-hidden bg-char-soft">
        <span className="absolute left-4 top-4 z-10 -translate-y-1.5 bg-ivory/90 px-3 py-1.5 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-char opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
          {collection?.title}
        </span>
        <Image
          src={artwork.image}
          width={width}
          height={height}
          alt={`${artwork.title}, ${artwork.year} — ${artwork.medium}.`}
          sizes="(max-width: 600px) 100vw, (max-width: 1080px) 50vw, 33vw"
          className="h-auto w-full transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.05]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char/55 to-transparent to-[48%] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-4 left-4 z-10 inline-flex translate-y-2 items-center gap-2 font-sans text-[0.66rem] uppercase tracking-[0.2em] text-ivory opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
          View Work →
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 pt-[1.1rem]">
        <div>
          <h3 className="font-cormorant text-2xl font-medium italic leading-tight">
            {artwork.title}{" "}
            <span className="not-italic font-normal text-[var(--ink-60)]">· {artwork.year}</span>
          </h3>
          <p className="mt-1.5 font-sans text-[0.66rem] uppercase leading-relaxed tracking-[0.13em] text-[var(--ink-60)]">
            {artwork.medium} · {artwork.dimensions}
          </p>
        </div>
        <span className="mt-1 inline-flex flex-shrink-0 items-center gap-2 font-sans text-[0.6rem] uppercase tracking-[0.16em] text-[var(--ink-60)]">
          <span className="h-[7px] w-[7px] rounded-full bg-gold-deep shadow-[0_0_0_3px_rgba(169,132,47,0.18)]" />
          {statusLabel[artwork.status]}
        </span>
      </div>
    </Link>
  );
}
