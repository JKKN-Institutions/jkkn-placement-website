"use client";

import { useEffect, useRef } from "react";

const stats: { value?: string; suffix?: string; display?: string; label: string }[] = [
  { value: "1200", suffix: "+", label: "Students Placed" },
  { value: "500", suffix: "+", label: "Recruiters" },
  { display: "\u20B912 LPA", label: "Highest Package" },
  { display: "\u20B94.5 LPA", label: "Average Package" },
  { value: "6", suffix: "", label: "Colleges Covered" },
];

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.counter!, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(eased * target).toLocaleString("en-IN") + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.counted) return;
          el.dataset.counted = "true";
          animateCounter(el);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));
    }

    return () => counterObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--surface-1)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="relative" style={{ padding: "8px 0" }}>
              <span
                className="block font-extrabold"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--brand)",
                  lineHeight: 1.2,
                }}
                {...(stat.value
                  ? { "data-counter": stat.value, "data-suffix": stat.suffix }
                  : {})}
              >
                {stat.value ? "0" : stat.display}
              </span>
              <span
                className="mt-1 block text-xs font-medium uppercase"
                style={{
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.8px",
                }}
              >
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <div
                  className="stats-divider absolute right-0"
                  style={{
                    top: 12,
                    bottom: 12,
                    width: 1,
                    background: "var(--border)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
