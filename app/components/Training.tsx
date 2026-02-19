"use client";

import { useEffect, useRef } from "react";

const trainingCards = [
  { icon: "\uD83E\uDDE0", title: "Aptitude & Reasoning", desc: "Quantitative aptitude, logical reasoning, and data interpretation covering standard test patterns." },
  { icon: "\uD83D\uDCAC", title: "Soft Skills", desc: "English communication, presentation skills, email etiquette, and professional body language." },
  { icon: "\uD83C\uDF99\uFE0F", title: "Mock Interviews", desc: "One-on-one sessions with industry professionals simulating real interview scenarios." },
  { icon: "\uD83D\uDCC4", title: "Resume Building", desc: "Personalised review ensuring ATS-friendly formatting and impactful content." },
  { icon: "\uD83C\uDF93", title: "Guest Lectures", desc: "Regular sessions from industry leaders, domain experts, and successful alumni." },
  { icon: "\uD83D\uDEE0\uFE0F", title: "Technical Workshops", desc: "Hands-on workshops in coding, clinical skills, and domain-specific competencies." },
];

export default function Training() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="training" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Training</div>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Pre-Placement Training &amp; Development
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Comprehensive skill-building programmes to prepare students for competitive recruitment
          </p>
        </div>

        <div
          className="training-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div
            className="training-features reveal"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {trainingCards.map((card, i) => (
              <div
                key={i}
                className="card-hover-sm"
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--brand-glow)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1rem",
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-tertiary)", lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <figure className="reveal reveal-delay-2">
            <div>
              <img
                src="https://placehold.co/540x600/e2e8f0/334155?text=Training+Session"
                alt="JKKN students attending a pre-placement training session"
                width={540}
                height={600}
                style={{
                  borderRadius: "var(--radius-xl)",
                  width: "100%",
                  aspectRatio: "9/10",
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                }}
                loading="lazy"
              />
            </div>
            <figcaption style={{ textAlign: "center", fontSize: "0.82rem", color: "var(--text-tertiary)", marginTop: 12 }}>
              Students during a pre-placement aptitude training session
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
