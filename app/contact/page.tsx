import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Inquire about acquiring an original work, commissioning a piece, or exhibiting with Crys Adams (CrysFLY). Based in Atlanta, Georgia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pb-[clamp(5rem,9vw,8rem)] pt-[calc(1.05rem+1.18rem+5rem)]">
      <div className="container-site grid grid-cols-1 gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-[54px] bg-gold-deep" />
            <span className="eyebrow">Contact</span>
          </div>
          <h1 className="font-serif font-extrabold leading-[0.95] tracking-[-0.02em]" style={{ fontSize: "clamp(2.6rem,6vw,4.6rem)" }}>
            Begin a conversation.
          </h1>
          <p className="mt-6 max-w-[42ch] font-cormorant leading-snug text-[var(--ink-60)]" style={{ fontSize: "clamp(1.2rem,1.9vw,1.5rem)" }}>
            For acquisitions, commissions, exhibitions, or press, share a few details and the studio
            will respond personally — typically within two business days.
          </p>

          <div className="mt-12 space-y-7 border-t border-[var(--line)] pt-10">
            <ContactItem label="Email" value="studio@crysflyartist.com" href="mailto:studio@crysflyartist.com" />
            <ContactItem label="Studio" value="Atlanta, Georgia" />
            <ContactItem label="Tumblr" value="@crysfly" href="https://www.tumblr.com/crysfly" external />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <InquiryForm variant="light" />
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="font-sans text-[0.64rem] uppercase tracking-[0.24em] text-[var(--ink-42)]">{label}</span>
      <span className="mt-1.5 block font-cormorant text-[1.45rem] text-char transition-colors group-hover:text-gold-deep">
        {value}
      </span>
    </>
  );
  if (!href) return <div>{inner}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">{inner}</a>
  ) : (
    <a href={href} className="group block">{inner}</a>
  );
}
