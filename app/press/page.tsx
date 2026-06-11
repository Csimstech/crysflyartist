import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { press, pressKit } from "@/data/press";
import { dims } from "@/lib/image-dims";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press resources for Crys Adams (CrysFLY) — artist biography, fast facts, approved high-resolution images, and media contact for journalists, curators, and galleries.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pb-[clamp(2.5rem,5vw,4rem)] pt-[calc(1.05rem+1.18rem+5rem)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-[54px] bg-gold-deep" />
              <span className="eyebrow">Press &amp; Media</span>
            </div>
            <h1
              className="max-w-[16ch] font-serif font-extrabold leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem,7vw,5.6rem)" }}
            >
              For the press.
            </h1>
            <p
              className="mt-7 max-w-[54ch] font-cormorant leading-snug text-[var(--ink-60)]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.55rem)" }}
            >
              Resources for journalists, curators, and galleries — a ready-to-use biography, fast
              facts, and approved images. For interviews, additional materials, or studio visits,
              please reach out directly.
            </p>
            <p className="mt-8 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-60)]">
              Media contact —{" "}
              <Link href="mailto:crysflyartist@gmail.com" className="text-gold-deep transition-colors hover:text-char">
                crysflyartist@gmail.com
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAST FACTS */}
      <section className="bg-ivory-2 py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site grid grid-cols-1 gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <span className="eyebrow">At a Glance</span>
            <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Fast Facts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="border-t border-[var(--line)]">
              {pressKit.facts.map((f) => (
                <div key={f.label} className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-[var(--line)] py-4">
                  <dt className="font-sans text-[0.66rem] uppercase tracking-[0.2em] text-[var(--ink-60)]">{f.label}</dt>
                  <dd className="font-cormorant text-[1.25rem] text-char">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site grid grid-cols-1 gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <span className="eyebrow">For Reprint</span>
            <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Artist Biography
            </h2>
            <p className="mt-4 max-w-[28ch] font-sans text-[0.72rem] uppercase leading-loose tracking-[0.14em] text-[var(--ink-42)]">
              Free to reprint with credit to the artist.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-[58ch] font-cormorant leading-relaxed" style={{ fontSize: "clamp(1.2rem,1.8vw,1.45rem)" }}>
              <p className="mb-3 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-gold-deep">Short</p>
              <p className="mb-9">{pressKit.shortBio}</p>
              <p className="mb-3 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-gold-deep">Extended</p>
              <p>{pressKit.extendedBio}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE LIBRARY */}
      <section className="bg-char py-[clamp(5rem,9vw,8rem)] text-ivory">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>Approved Images</span>
              <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em] text-ivory" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Image Library
              </h2>
            </div>
            <p className="max-w-[34ch] font-sans text-[0.66rem] leading-loose tracking-[0.06em] text-ivory-45">
              Free for editorial use with credit: Courtesy of the artist, Crys Adams (CrysFLY).
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-[clamp(1.2rem,3vw,2.4rem)] md:grid-cols-3">
            {pressKit.images.map((img) => {
              const d = dims(img.src);
              return (
                <Reveal key={img.src}>
                  <figure className="m-0">
                    <div className="relative overflow-hidden bg-char-soft">
                      <Image
                        src={img.src}
                        width={d.width}
                        height={d.height}
                        alt={img.label}
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 flex items-center justify-between gap-3">
                      <span className="font-sans text-[0.64rem] uppercase tracking-[0.14em] text-ivory-45">{img.label}</span>
                      <a
                        href={img.src}
                        download
                        className="flex-shrink-0 font-sans text-[0.64rem] uppercase tracking-[0.16em] text-gold transition-colors hover:text-ivory"
                      >
                        Download ↓
                      </a>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED PRESS */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <span className="eyebrow">In the Press</span>
            <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Selected Features
            </h2>
          </Reveal>
          {press.length > 0 ? (
            <div className="max-w-[1000px]">
              {press.map((p) => (
                <Reveal key={p.outlet + p.title}>
                  <a
                    href={p.url ?? "#"}
                    target={p.url ? "_blank" : undefined}
                    rel={p.url ? "noopener noreferrer" : undefined}
                    className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-[var(--line)] py-6"
                  >
                    <span className="font-serif italic text-char transition-colors group-hover:text-gold-deep" style={{ fontSize: "clamp(1.3rem,2.4vw,1.85rem)" }}>
                      {p.title}
                    </span>
                    <span className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ink-60)]">
                      {p.outlet}{p.date ? ` · ${p.date}` : ""}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="border-t border-[var(--line)] py-12">
                <p className="max-w-[44ch] font-cormorant italic leading-snug text-[var(--ink-60)]" style={{ fontSize: "clamp(1.3rem,2vw,1.6rem)" }}>
                  Recent features and reviews will appear here. For press inquiries, interviews, or
                  review copies, the studio is glad to help.
                </p>
                <Link href="mailto:crysflyartist@gmail.com" className="tlink mt-7 inline-flex">
                  Contact for press <span>→</span>
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
