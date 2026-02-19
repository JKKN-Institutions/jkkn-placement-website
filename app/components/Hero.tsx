"use client";

import { useEffect, useRef } from "react";

const statCards = [
  { value: "500", suffix: "+", label: "Recruiters" },
  { value: "95", suffix: "%", label: "Placement Rate" },
  { value: null, display: "\u20B912 LPA", label: "Highest Package" },
  { value: "1200", suffix: "+", label: "Students Placed Annually" },
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

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

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
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
      section.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));
    }

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "var(--green-dark)" }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(11,109,65,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(197,160,89,0.1) 0%, transparent 60%)",
        }}
      />

      <div
        className="hero-grid relative z-[2] mx-auto grid w-full items-center gap-12"
        style={{
          maxWidth: "var(--max-w)",
          gridTemplateColumns: "1fr 1fr",
          padding: "120px 24px 80px",
        }}
      >
        {/* Left: Text */}
        <div className="reveal">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(11,109,65,0.2)",
              color: "var(--green-light)",
              padding: "8px 18px",
              border: "1px solid rgba(11,109,65,0.25)",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.3px",
              fontSize: "0.82rem",
            }}
          >
            <span
              className="rounded-full"
              style={{
                width: 8,
                height: 8,
                background: "var(--gold)",
                animation: "pulse-dot 2s infinite",
              }}
            />
            JKKN Training &amp; Placement Cell
          </div>

          <h1
            className="mb-5 font-extrabold text-white"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Empowering Careers Across{" "}
            <span style={{ color: "var(--green-light)" }}>6 Colleges</span>
          </h1>

          <p
            className="hero-tagline mb-8"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#94a3b8",
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            JKKN Institutions connects over 1,200 students annually with 500+
            leading recruiters across healthcare, technology, pharmaceutical, and
            core engineering sectors.
          </p>

          <div className="hero-actions flex flex-wrap gap-3">
            <a href="#colleges" className="btn btn-primary">
              Explore Placements
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Placement Cell
            </a>
          </div>
        </div>

        {/* Right: Stat Cards */}
        <div
          className="hero-visual reveal reveal-delay-2 grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {statCards.map((stat, i) => (
            <div
              key={i}
              className="hero-stat-hover rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: 24,
              }}
            >
              <span
                className="mb-1 block font-extrabold text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                {...(stat.value
                  ? { "data-counter": stat.value, "data-suffix": stat.suffix }
                  : {})}
              >
                {stat.value ? "0" : stat.display}
              </span>
              <span
                className="block text-xs font-medium uppercase"
                style={{ color: "#94a3b8", letterSpacing: "0.8px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}

          {/* Featured wide card */}
          <div
            className="hero-stat-hover col-span-2 rounded-2xl text-center"
            style={{
              background: "rgba(11,109,65,0.15)",
              border: "1px solid rgba(11,109,65,0.25)",
              backdropFilter: "blur(16px)",
              padding: 24,
            }}
          >
            <span
              className="mb-1 block font-extrabold text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              data-counter="15"
              data-suffix="+ Years"
            >
              0
            </span>
            <span
              className="block text-xs font-medium uppercase"
              style={{ color: "#94a3b8", letterSpacing: "0.8px" }}
            >
              Of Placement Excellence
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
