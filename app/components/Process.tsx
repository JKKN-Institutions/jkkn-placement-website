"use client";

import { useEffect, useRef } from "react";

const steps = [
  { num: 1, title: "Registration", desc: "Final-year students register with the Placement Cell and submit their resumes." },
  { num: 2, title: "Pre-Placement Training", desc: "Aptitude, soft skills, technical skills, group discussions, and mock interviews." },
  { num: 3, title: "Aptitude Tests", desc: "Company-specific assessments covering quantitative, logical, and verbal reasoning." },
  { num: 4, title: "Technical Rounds", desc: "Domain-specific interviews and coding tests conducted by recruiting companies." },
  { num: 5, title: "HR Interview", desc: "Career goals, cultural fit, salary expectations, and joining details." },
  { num: 6, title: "Offer Letter", desc: "Selected students receive official offer letters with onboarding support." },
];

export default function Process() {
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
    <section ref={sectionRef} id="process" style={{ background: "var(--surface-1)", padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Process</div>
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
            How Does the Placement Process Work?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            A structured, transparent, and student-centric 6-step placement journey
          </p>
        </div>

        <div
          className="process-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
            position: "relative",
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 60,
              right: 60,
              height: 2,
              background: "var(--border)",
            }}
          />

          {steps.map((step) => (
            <div key={step.num} className="process-step-wrap relative text-center">
              <div
                className="process-circle mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--brand-glow)",
                  border: "2px solid var(--brand)",
                  position: "relative",
                  zIndex: 1,
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--brand)",
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
