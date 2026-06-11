"use client";

import { useMemo, useState } from "react";
import type { Artwork, CollectionId, MediumCategory } from "@/lib/types";
import { ArtworkCard } from "@/components/artwork-card";

type CollectionFilter = CollectionId | "all";
type MediumFilter = MediumCategory | "all";

const collectionChips: { value: CollectionFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "water", label: "Water & Reflection" },
  { value: "spirit", label: "Spirit & Symbol" },
  { value: "memory", label: "Memory & Identity" },
];

const mediumChips: { value: MediumFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "oil", label: "Oil" },
  { value: "mixed", label: "Mixed Media" },
  { value: "acrylic", label: "Acrylic" },
];

export function GalleryFilter({
  artworks,
  initialCollection = "all",
}: {
  artworks: Artwork[];
  initialCollection?: CollectionFilter;
}) {
  const [collection, setCollection] = useState<CollectionFilter>(initialCollection);
  const [medium, setMedium] = useState<MediumFilter>("all");

  const visible = useMemo(
    () =>
      artworks.filter(
        (a) =>
          (collection === "all" || a.collection === collection) &&
          (medium === "all" || a.mediumCategory === medium),
      ),
    [artworks, collection, medium],
  );

  return (
    <>
      <div className="sticky top-[3.2rem] z-[900] border-y border-[var(--line)] bg-ivory/[0.92] py-5 backdrop-blur-[10px]">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <ChipGroup
            label="Collection"
            chips={collectionChips}
            active={collection}
            onSelect={setCollection}
          />
          <ChipGroup label="Medium" chips={mediumChips} active={medium} onSelect={setMedium} />
          <span className="hidden whitespace-nowrap font-cormorant text-[1.05rem] italic text-[var(--ink-60)] sm:block">
            {visible.length} {visible.length === 1 ? "work" : "works"}
          </span>
        </div>
      </div>

      <div className="container-site py-[clamp(2.6rem,5vw,4rem)]">
        {visible.length > 0 ? (
          <div className="[column-gap:clamp(1.4rem,2.6vw,2.6rem)] sm:columns-2 lg:columns-3">
            {visible.map((a) => (
              <div key={a.slug} className="mb-[clamp(1.8rem,3.2vw,3rem)]">
                <ArtworkCard artwork={a} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-cormorant text-[1.4rem] italic text-[var(--ink-60)]">
            No works match these filters.{" "}
            <button
              className="tlink ml-2 inline-flex"
              onClick={() => {
                setCollection("all");
                setMedium("all");
              }}
            >
              Reset →
            </button>
          </p>
        )}
      </div>
    </>
  );
}

function ChipGroup<T extends string>({
  label,
  chips,
  active,
  onSelect,
}: {
  label: string;
  chips: { value: T; label: string }[];
  active: T;
  onSelect: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4" role="group" aria-label={`Filter by ${label}`}>
      <span className="mr-1 font-sans text-[0.6rem] uppercase tracking-[0.24em] text-[var(--ink-42)]">
        {label}
      </span>
      {chips.map((c) => {
        const isActive = active === c.value;
        return (
          <button
            key={c.value}
            onClick={() => onSelect(c.value)}
            aria-pressed={isActive}
            className={`relative py-2 font-sans text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-300 ${
              isActive ? "font-medium text-char" : "text-[var(--ink-60)] hover:text-char"
            }`}
          >
            {c.label}
            <span
              className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold-deep transition-transform duration-300 ease-editorial ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
