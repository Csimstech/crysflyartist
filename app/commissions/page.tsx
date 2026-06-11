import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";
import { getArtwork } from "@/data/artworks";
import { dims } from "@/lib/image-dims";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission an original work by Crys Adams (CrysFLY). A limited number of private and institutional commissions are accepted each year — a collaborative process from first conversation to final delivery.",
  alternates: { canonical: "/commissions" },
};

const steps = [
  {
    n: "01",
    title: "The Inquiry",
    body: "It begins with a conversation. Share your vision, the space the work will live in, and any themes or feelings you hope it will hold. No detail is too small.",
  },
  {
    n: "02",
    title: "The Proposal",
    body: "Adams responds with a considered direction — scale, medium, palette, and timeline — along with the investment and the deposit that reserves your place in the studio calendar.",
  },
  {
    n: "03",
    title: "In the Studio",
    body: "The work takes shape over several weeks. You receive progress images at key moments, with room for reflection and dialogue as the piece finds its form.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "The finished work arrives with a signed Certificate of Authenticity, insured and ready to hang — accompanied by the story of how it came to be.",
  },
];

const scope = [
  {
    title: "Mediums",
    body: "Oil and mixed media on canvas or panel, often incorporating mirror and gold. Ceramic and sculptural commissions are considered by arrangement.",
  },
  {
    title: "Scale",
    body: "From intimate works for a private room to large statement pieces for a lobby, gallery, or institutional collection.",
  },
  {
    title: "Spirit",
    body: "Portraiture and figurative work, abstract reflection, and pieces built around a personal symbol, memory, or moment of transformation.",
  },
];

export default function CommissionsPage() {
  const feature = getArtwork("sacral")!;
  const fd = dims(feature.image);

  return (
    <>
      {/* HEADER */}
      <section className="pb-[clamp(2.5rem,5vw,4rem)] pt-[calc(1.05rem+1.18rem+5rem)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-[54px] bg-gold-deep" />
              <span className="eyebrow">Commissions</span>
            </div>
            <h1
              className="max-w-[18ch] font-serif font-extrabold leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem,7vw,5.6rem)" }}
            >
              Commission a work of your own.
            </h1>
            <p
              className="mt-7 max-w-[54ch] font-cormorant leading-snug text-[var(--ink-60)]"
              style={{ fontSize: "clamp(1.2rem,2vw,1.55rem)" }}
            >
              Each year, Crys Adams accepts a limited number of private and institutional commissions
              — original works created in close conversation with the people and spaces that will hold
              them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="container-site grid grid-cols-1 items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[1fr_1fr]">
          <Reveal className="overflow-hidden bg-char-soft">
            <Image
              src={feature.image}
              width={fd.width}
              height={fd.height}
              alt={`${feature.title}, ${feature.year} — an example of Crys Adams's commissioned-scale work.`}
              sizes="(max-width: 768px) 100vw, 48vw"
              className="h-auto w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="max-w-[50ch] font-cormorant leading-relaxed"
              style={{ fontSize: "clamp(1.2rem,1.8vw,1.5rem)" }}
            >
              <p className="mb-6">
                A commission is not a transaction — it is a collaboration. Adams works closely with
                each collector to create a piece that reflects something true: a person, a passage, a
                belief, a turning point.
              </p>
              <p>
                Rooted in her practice of self-reflection, commissioned works invite their owners to
                look inward long after the paint has dried. The result is a piece made for you alone,
                and unrepeatable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ivory-2 py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site">
          <Reveal className="mb-[clamp(3rem,5vw,4.5rem)]">
            <span className="eyebrow">How It Works</span>
            <h2
              className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
            >
              The Process
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-12 md:grid-cols-2">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <div className="flex gap-6 border-t border-[var(--line)] pt-7">
                  <span className="font-serif text-[1.6rem] italic leading-none text-gold-deep">{s.n}</span>
                  <div>
                    <h3 className="mb-3 font-serif font-semibold tracking-[-0.01em]" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)" }}>
                      {s.title}
                    </h3>
                    <p className="max-w-[42ch] font-cormorant leading-relaxed text-[var(--ink-60)]" style={{ fontSize: "clamp(1.1rem,1.6vw,1.3rem)" }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <span className="eyebrow">What&rsquo;s Possible</span>
            <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Scope &amp; Range
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,3.5rem)] md:grid-cols-3">
            {scope.map((c) => (
              <Reveal key={c.title}>
                <div className="border-t border-char pt-6">
                  <h3 className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-char">{c.title}</h3>
                  <p className="font-cormorant leading-relaxed text-[var(--ink-60)]" style={{ fontSize: "clamp(1.1rem,1.6vw,1.32rem)" }}>
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-14 max-w-[64ch] border-l-2 border-gold-deep pl-6 font-cormorant italic leading-relaxed text-[var(--ink-60)]" style={{ fontSize: "clamp(1.15rem,1.7vw,1.4rem)" }}>
              Investment, timeline, and deposit are tailored to each commission and confirmed during
              the proposal — most works are completed within a matter of weeks. A signed Certificate
              of Authenticity accompanies every piece, with insured worldwide delivery from the
              artist&rsquo;s Atlanta studio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INQUIRE */}
      <section className="bg-char py-[clamp(5rem,9vw,8rem)] text-ivory">
        <div className="container-site grid grid-cols-1 items-start gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>
              Begin <span className="dot" style={{ color: "var(--gold)" }}>·</span> Commission
            </span>
            <h2 className="my-6 font-serif font-bold leading-none tracking-[-0.02em] text-ivory" style={{ fontSize: "clamp(2.2rem,4.6vw,3.5rem)" }}>
              Start the conversation.
            </h2>
            <p className="max-w-[42ch] font-cormorant font-light leading-snug text-ivory-70" style={{ fontSize: "clamp(1.15rem,1.8vw,1.4rem)" }}>
              Tell Adams a little about what you have in mind — the space, the subject, the feeling.
              She personally reviews every commission inquiry and will respond within two business
              days.
            </p>
            <p className="mt-10 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-ivory-45">
              Prefer email? <Link href="mailto:studio@crysflyartist.com" className="text-gold transition-colors hover:text-ivory">studio@crysflyartist.com</Link>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm variant="dark" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
