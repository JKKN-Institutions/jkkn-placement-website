import type { LucideIcon } from "lucide-react";

// Centered section header: mint pill label, title flanked by green rules, optional lead line.
export default function SectionHeading({
  label,
  icon: Icon,
  title,
  lead,
}: {
  label: string;
  icon: LucideIcon;
  title: string;
  lead?: string;
}) {
  return (
    <div className="reveal mb-10 text-center lg:mb-14">
      <p
        className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-green"
        style={{ background: "#d4f1e4" }}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <span className="hidden h-0.5 w-12 shrink-0 rounded-full bg-green sm:block lg:w-20" aria-hidden="true" />
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)",
            color: "var(--green-dark)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h2>
        <span className="hidden h-0.5 w-12 shrink-0 rounded-full bg-green sm:block lg:w-20" aria-hidden="true" />
      </div>
      {lead && (
        <p className="mx-auto mt-4 max-w-[600px] text-slate-700" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          {lead}
        </p>
      )}
    </div>
  );
}
