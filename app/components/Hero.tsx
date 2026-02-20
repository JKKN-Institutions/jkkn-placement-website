"use client";

import { useEffect, useRef } from "react";

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

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
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

        {/* Right: Image */}
        <div
          className="hero-visual reveal reveal-delay-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "var(--radius-xl, 16px)",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <img
            src="/placement-event.png"
            alt="JKKN Placement Event"
            style={{
              width: "110%",
              maxWidth: "none",
              marginTop: -40,
              marginRight: -30,
              objectFit: "cover",
            }}
          />
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
