import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CollectionCard } from "@/components/collection-card";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Bodies of work by Crys Adams — Water & Reflection, Spirit & Symbol, and Memory & Identity. Recurring threads across a decade of painting and mixed media.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <section className="pb-[clamp(2.5rem,5vw,4rem)] pt-[calc(1.05rem+1.18rem+5rem)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-[54px] bg-gold-deep" />
              <span className="eyebrow">Bodies of Work</span>
            </div>
            <h1 className="font-serif font-extrabold leading-[0.95] tracking-[-0.02em]" style={{ fontSize: "clamp(2.8rem,7vw,5.6rem)" }}>
              Collections
            </h1>
            <p className="mt-6 max-w-[52ch] font-cormorant leading-snug text-[var(--ink-60)]" style={{ fontSize: "clamp(1.2rem,2vw,1.55rem)" }}>
              Three threads run through the work — reflection as water, as symbol, and as memory. Each
              gathers paintings that speak to one another across the years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(5rem,9vw,8rem)]">
        <div className="container-site grid grid-cols-1 gap-[clamp(1.4rem,3vw,2.6rem)] sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.08}>
              <CollectionCard collection={c} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
