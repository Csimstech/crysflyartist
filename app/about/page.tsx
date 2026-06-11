import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { exhibitions } from "@/data/exhibitions";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Crys Adams (CrysFLY) is an Atlanta-based painter exploring self-reflection, identity, growth, and personal responsibility. Read her biography, artist statement, and exhibition history.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pb-[clamp(2rem,4vw,3rem)] pt-[calc(1.05rem+1.18rem+5rem)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-[54px] bg-gold-deep" />
              <span className="eyebrow">About the Artist</span>
            </div>
            <h1
              className="max-w-[16ch] font-serif font-extrabold leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem,7vw,5.6rem)" }}
            >
              The self, reflected.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* BIO + PORTRAIT */}
      <section className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="container-site grid grid-cols-1 items-start gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <div
              className="max-w-[58ch] font-cormorant leading-relaxed"
              style={{ fontSize: "clamp(1.2rem,1.8vw,1.5rem)" }}
            >
              <p className="mb-6">
                Crys Adams is an Atlanta-based visual artist. Her work centers on self-reflection as a
                process of understanding identity, growth, and personal responsibility. Adams earned a
                B.A. in Studio Arts from Georgia State University in 2016.
              </p>
              <p className="mb-6">
                Working primarily in painting, she also explores ceramics and sculpture. Her practice
                has evolved from incorporating literal mirrors to using abstract representations of
                water as a symbolic form of reflection — a shift most fully realized in recent works
                such as <em>Sacral</em> and <em>Blue 42</em>.
              </p>
              <p>
                Through her practice, Adams creates visually engaging work that encourages viewers to
                look inward, take ownership of their healing, and better understand themselves through
                reflection and personal growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative mx-auto max-w-[440px] overflow-hidden">
            <Image
              src="/images/artist/portrait-about.jpg"
              alt="Portrait of Crys Adams in a white shirt with layered wooden-bead necklaces and brass rings, arms folded, against a green backdrop."
              width={960}
              height={1200}
              sizes="(max-width: 768px) 100vw, 38vw"
              className="h-auto w-full"
            />
            <span className="pointer-events-none absolute inset-[14px] border border-ivory-45" />
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE OVER STUDIO */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden text-center">
        <Image
          src="/images/artist/portrait-studio.jpg"
          alt="Crys Adams in her Atlanta studio before a green backdrop."
          fill
          sizes="100vw"
          className="object-cover [object-position:center_28%]"
        />
        <span className="pointer-events-none absolute inset-0 bg-char-deep/70" />
        <Reveal className="container-site relative z-10 mx-auto max-w-[900px] text-ivory">
          <blockquote
            className="font-cormorant font-light italic leading-tight tracking-[-0.005em]"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3.4rem)" }}
          >
            Rooted in my artist name — CrysFLY,{" "}
            <span className="text-gold">Find Light Yourself</span> — my work is grounded in the
            belief that healing and growth require ownership.
          </blockquote>
          <cite className="mt-8 block font-sans text-[0.72rem] uppercase not-italic tracking-[0.24em] text-ivory-70">
            Crys Adams · Artist Statement
          </cite>
        </Reveal>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site grid grid-cols-1 gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <span className="eyebrow">Artist Statement</span>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="max-w-[58ch] font-cormorant leading-relaxed"
              style={{ fontSize: "clamp(1.2rem,1.8vw,1.5rem)" }}
            >
              <p className="mb-6">
                My work explores self-reflection as a process of understanding identity, growth, and
                personal responsibility. I create mixed-media paintings that invite viewers to look
                inward and engage with themselves beyond surface-level perception.
              </p>
              <p className="mb-6">
                My practice has evolved from incorporating mirrors to using abstract representations
                of water as a symbolic form of reflection. Rooted in my artist name, CrysFLY — Find
                Light Yourself — my work is grounded in the belief that healing and growth require
                ownership.
              </p>
              <p>
                I aim to create visually engaging work that encourages introspection, allowing
                viewers to confront, understand, and evolve through their own personal experiences and
                journeys.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXHIBITIONS */}
      <section id="exhibitions" className="scroll-mt-28 bg-char py-[clamp(5rem,9vw,8rem)] text-ivory">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>Exhibitions</span>
            <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em] text-ivory" style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}>
              Selected Exhibitions
            </h2>
          </Reveal>
          <div className="max-w-[900px]">
            {exhibitions.map((e, i) => (
              <Reveal key={e.venue} delay={(i % 4) * 0.06}>
                <div className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-6">
                  <span className="font-serif italic text-ivory" style={{ fontSize: "clamp(1.4rem,2.6vw,2rem)" }}>
                    {e.venue}
                  </span>
                  <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ivory-45">
                    {e.type ?? "Exhibition"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.16em] text-ivory-45">
              Education — B.A. Studio Arts, Georgia State University, 2016
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(5rem,9vw,8rem)] text-center">
        <Reveal className="container-site mx-auto max-w-[760px]">
          <h2 className="mb-7 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)" }}>
            See the work in person.
          </h2>
          <p className="mx-auto mb-10 max-w-[46ch] font-cormorant text-[1.3rem] italic text-[var(--ink-60)]">
            Explore the full body of work, or reach out to arrange a viewing or commission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery" className="btn btn-solid">View the Gallery <span className="arr">→</span></Link>
            <Link href="/contact" className="btn btn-ghost">Contact the Studio</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
