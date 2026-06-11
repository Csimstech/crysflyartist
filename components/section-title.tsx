import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, sub, light }: SectionTitleProps) {
  return (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]"
        style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", color: light ? "var(--ivory)" : "var(--char)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="mt-3 font-cormorant italic"
          style={{
            fontSize: "clamp(1.05rem,1.6vw,1.3rem)",
            color: light ? "var(--ivory-70)" : "var(--ink-60)",
            maxWidth: "36ch",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
