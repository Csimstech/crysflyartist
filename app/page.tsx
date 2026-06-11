import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArtworkCard } from "@/components/artwork-card";
import { CollectionCard } from "@/components/collection-card";
import { getFeatured, getArtwork } from "@/data/artworks";
import { collections } from "@/data/collections";
import { exhibitions } from "@/data/exhibitions";

const selectedSlugs = ["nine", "dahomey", "complicated-no-2", "yahweh", "growth", "lotus"];

export default function HomePage() {
  const featured = getFeatured();
  const selected = selectedSlugs.map((s) => getArtwork(s)!).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="grid min-h-screen grid-cols-1 items-stretch md:grid-cols-[1.02fr_0.98fr]">
        <div className="order-2 flex flex-col justify-center px-[var(--pad)] pb-16 pt-12 md:order-1 md:pt-32">
          <div className="mb-9 flex items-center gap-4">
            <span className="h-px w-[54px] bg-gold-deep" />
            <span className="eyebrow">Selected Works · 2016—2024</span>
          </div>
          <h1
            className="font-serif font-extrabold leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.4rem,8.8vw,7.6rem)" }}
          >
            Crys<span className="block">Adams</span>
          </h1>
          <p
            className="mt-7 font-cormorant italic text-burgundy"
            style={{ fontSize: "clamp(1.25rem,2.4vw,1.7rem)" }}
          >
            <span className="font-semibold not-italic tracking-[0.02em]">CrysFLY</span> — Find Light Yourself
          </p>
          <p
            className="mt-6 max-w-[30ch] font-cormorant leading-snug text-[var(--ink-60)]"
            style={{ fontSize: "clamp(1.15rem,2vw,1.45rem)" }}
          >
            Contemporary painter exploring identity, memory, and reflection.
          </p>
          <p className="mt-[1.1rem] font-sans text-[0.72rem] uppercase tracking-[0.28em] text-[var(--ink-42)]">
            Atlanta, Georgia
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link href="/gallery" className="btn btn-solid">
              View the Work <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Inquire
            </Link>
          </div>
        </div>
        <div className="relative order-1 min-h-[62vh] overflow-hidden bg-char md:order-2 md:min-h-0">
          <Image
            src="/images/artist/portrait-hero.jpg"
            alt="Portrait of artist Crys Adams against a deep green backdrop, wearing oval sunglasses and a camel corduroy blazer over a white shirt."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover [object-position:center_18%]"
          />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-[clamp(6rem,12vw,11rem)] text-center">
        <Reveal className="container-site mx-auto max-w-[1080px]">
          <span className="eyebrow">The Work</span>
          <blockquote
            className="my-10 font-cormorant font-light italic leading-tight tracking-[-0.005em]"
            style={{ fontSize: "clamp(1.7rem,4.2vw,3.15rem)" }}
          >
            My work explores self-reflection as a process of understanding{" "}
            <span className="font-normal text-burgundy">
              identity, growth, and personal responsibility
            </span>{" "}
            — inviting the viewer to look inward, beyond surface-level perception.
          </blockquote>
          <cite className="mb-10 block font-sans text-[0.74rem] uppercase not-italic tracking-[0.24em] text-[var(--ink-60)]">
            Crys Adams · Artist Statement
          </cite>
          <Link href="/about" className="tlink">
            Read the full statement <span>→</span>
          </Link>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="pb-[clamp(5rem,9vw,8rem)]">
        <div className="container-site grid grid-cols-1 items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <Link href={`/gallery/${featured.slug}`} className="group block overflow-hidden bg-char-soft">
              <Image
                src={featured.image}
                width={1170}
                height={1359}
                alt={`${featured.title}, ${featured.year} — ${featured.medium}.`}
                sizes="(max-width: 768px) 100vw, 58vw"
                className="h-auto w-full transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.035]"
              />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-6 block font-serif text-base italic tracking-[0.04em] text-gold-deep">
              01 — Featured Work
            </span>
            <h2
              className="mb-2 font-serif font-bold leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.6rem,5vw,4rem)" }}
            >
              {featured.title}
            </h2>
            <p className="mb-7 font-sans text-[0.74rem] uppercase tracking-[0.2em] text-[var(--ink-60)]">
              {featured.medium} · {featured.dimensions} · {featured.year}
            </p>
            <p
              className="mb-8 max-w-[46ch] font-cormorant leading-relaxed"
              style={{ fontSize: "clamp(1.18rem,1.8vw,1.4rem)" }}
            >
              {featured.note}
            </p>
            <p className="mb-9 inline-flex items-center gap-2.5 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-60)]">
              <span className="h-[7px] w-[7px] rounded-full bg-gold-deep shadow-[0_0_0_3px_rgba(169,132,47,0.18)]" />
              Available — Original
            </p>
            <div>
              <Link href={`/gallery/${featured.slug}`} className="btn btn-gold">
                View This Work <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="bg-ivory-2 py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site">
          <Reveal className="mb-[clamp(3rem,5vw,4.5rem)] flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="eyebrow">Selected Works</span>
              <h2
                className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
              >
                The Gallery
              </h2>
              <p className="mt-3 max-w-[34ch] font-cormorant text-[1.2rem] italic text-[var(--ink-60)]">
                Painting and mixed media spanning oil, mirror, and abstraction — each piece an
                invitation to look inward.
              </p>
            </div>
            <Link href="/gallery" className="tlink">
              View All Works <span>→</span>
            </Link>
          </Reveal>

          <div className="[column-gap:clamp(1.4rem,2.6vw,2.6rem)] sm:columns-2 lg:columns-3">
            {selected.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.08} className="mb-[clamp(1.6rem,3vw,2.8rem)]">
                <ArtworkCard artwork={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO BAND */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="/images/artist/portrait-studio.jpg"
          alt="Crys Adams seated in her studio on a stool before a green backdrop, surrounded by lighting equipment."
          fill
          sizes="100vw"
          className="object-cover [object-position:center_30%]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char-deep/90 via-char-deep/25 via-[45%] to-char-deep/50" />
        <Reveal className="container-site relative z-10 w-full pb-[clamp(4rem,7vw,6rem)] text-ivory">
          <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>
            In the Studio <span className="dot" style={{ color: "var(--gold)" }}>·</span> Atlanta, GA
          </span>
          <h2
            className="my-6 font-serif font-medium italic leading-none tracking-[-0.01em]"
            style={{ fontSize: "clamp(2.6rem,7vw,5.6rem)" }}
          >
            Find Light Yourself.
          </h2>
          <p
            className="max-w-[48ch] font-cormorant font-light leading-snug text-ivory-70"
            style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)" }}
          >
            B.A. Studio Arts, Georgia State University, 2016. Working across oil, mixed media,
            ceramics, and sculpture — a practice built on the belief that healing and growth require
            ownership.
          </p>
        </Reveal>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-[clamp(6rem,11vw,10rem)]">
        <div className="container-site grid grid-cols-1 items-center gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="relative mx-auto max-w-[480px] overflow-hidden">
            <Image
              src="/images/artist/portrait-about.jpg"
              alt="Portrait of Crys Adams in a white shirt with layered wooden-bead necklaces and brass rings, arms folded, against a green backdrop."
              width={960}
              height={1200}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="h-auto w-full"
            />
            <span className="pointer-events-none absolute inset-[14px] border border-ivory-45" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">About the Artist</span>
            <h2
              className="my-7 font-serif font-bold leading-[1.02] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem,4.4vw,3.5rem)" }}
            >
              The self, reflected.
            </h2>
            <p className="mb-6 max-w-[54ch] font-cormorant leading-relaxed" style={{ fontSize: "clamp(1.18rem,1.7vw,1.42rem)" }}>
              Crys Adams is an Atlanta-based visual artist whose work centers on self-reflection as a
              process of understanding identity, growth, and personal responsibility. Working
              primarily in painting, she also explores ceramics and sculpture.
            </p>
            <p className="mb-6 max-w-[54ch] font-cormorant leading-relaxed" style={{ fontSize: "clamp(1.18rem,1.7vw,1.42rem)" }}>
              Her practice has evolved from incorporating literal mirrors to using abstract
              representations of water as a symbolic form of reflection. Rooted in her artist name —{" "}
              <em>CrysFLY, Find Light Yourself</em> — the work invites viewers to confront,
              understand, and evolve through their own experiences.
            </p>
            <p className="mt-8 max-w-[54ch] border-t border-[var(--line)] pt-6 font-sans text-[0.82rem] leading-loose tracking-[0.04em] text-[var(--ink-60)]">
              <b className="font-medium text-char">Exhibited at</b>&nbsp; Future Gallery · Hidden
              Gallery · Jack Sinclair Gallery · Pulgram Gallery · Nina Baldwin Gallery
            </p>
            <div className="mt-10">
              <Link href="/about" className="btn btn-solid">
                Read the Full Biography <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-char py-[clamp(5rem,9vw,8rem)] text-ivory">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>Bodies of Work</span>
            <h2
              className="mt-4 font-serif font-bold leading-none tracking-[-0.02em] text-ivory"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
            >
              Collections
            </h2>
            <p className="mt-3 max-w-[36ch] font-cormorant text-[1.2rem] italic text-ivory-70">
              Recurring threads across the practice — reflection as water, symbol, and memory.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-[clamp(1.4rem,3vw,2.6rem)] sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.08}>
                <CollectionCard collection={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITIONS STRIP */}
      <section className="py-[clamp(4.5rem,8vw,7rem)] text-center">
        <Reveal className="container-site">
          <span className="eyebrow mb-10 block">Exhibited At</span>
          <ul className="flex flex-wrap items-center justify-center gap-x-[clamp(1.2rem,4vw,3.2rem)] gap-y-4">
            {exhibitions.map((e) => (
              <li
                key={e.venue}
                className="font-serif tracking-[-0.01em] text-char transition-colors hover:italic hover:text-burgundy"
                style={{ fontSize: "clamp(1.3rem,2.8vw,2.15rem)" }}
              >
                {e.venue}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ACQUISITION CTA */}
      <section className="relative overflow-hidden bg-burgundy py-[clamp(6rem,12vw,11rem)] text-center text-ivory">
        <span
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(120% 90% at 50% 0%, rgba(198,161,91,.16), transparent 60%)" }}
        />
        <Reveal className="container-site relative mx-auto max-w-[880px]">
          <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>
            Acquisition <span className="dot" style={{ color: "var(--gold)" }}>·</span> Commission
          </span>
          <h2
            className="my-7 font-serif font-bold leading-none tracking-[-0.02em] text-ivory"
            style={{ fontSize: "clamp(2.4rem,6vw,4.6rem)" }}
          >
            Begin a conversation.
          </h2>
          <p
            className="mx-auto mb-11 max-w-[52ch] font-cormorant font-light leading-snug text-ivory-70"
            style={{ fontSize: "clamp(1.2rem,2vw,1.55rem)" }}
          >
            Original works are available for acquisition, and Adams accepts a limited number of
            commissions each year. Inquiries from collectors, galleries, and institutions are warmly
            welcomed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-light">
              Inquire <span className="arr">→</span>
            </Link>
            <Link href="/gallery" className="btn btn-gold">
              Browse Available Work
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
