import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-[var(--pad)] text-center">
      <div>
        <p className="font-serif italic text-gold-deep">404</p>
        <h1 className="my-5 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2.4rem,6vw,4rem)" }}>
          This page has drifted out of view.
        </h1>
        <p className="mx-auto mb-9 max-w-[40ch] font-cormorant text-[1.3rem] italic text-[var(--ink-60)]">
          The work you&rsquo;re looking for may have moved. Return to the gallery to keep looking.
        </p>
        <Link href="/gallery" className="btn btn-solid">View the Gallery <span className="arr">→</span></Link>
      </div>
    </section>
  );
}
