"use client";

import { useEffect, useRef } from "react";

export default function AboutPlacement() {
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
    <section
      ref={sectionRef}
      id="about"
      style={{ padding: "80px 0" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">About Us</div>
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
            About the JKKN Placement Cell
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Dedicated to bridging the gap between academic excellence and industry-ready careers
          </p>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <p style={{ color: "var(--text-secondary)", marginBottom: 16, fontSize: "1.02rem" }}>
              The Training and Placement Cell at JKKN Institutions serves as the central hub for all placement-related activities across six constituent colleges. Established with the vision of ensuring every student transitions seamlessly from academia to the professional world, the cell coordinates campus recruitment drives, industry partnerships, and career development programmes throughout the academic year.
            </p>

            <h3
              className="flex items-center gap-2"
              style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 8px" }}
            >
              <span style={{ width: 3, height: 20, background: "var(--brand)", borderRadius: 2 }} />
              Our Mission
            </h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: 16, fontSize: "1.02rem" }}>
              To achieve 100% placement assistance for all eligible students by cultivating industry-relevant skills, fostering strong recruiter relationships, and providing personalised career guidance. We work closely with over 500 companies spanning healthcare, information technology, pharmaceuticals, engineering, and education sectors.
            </p>

            <h3
              className="flex items-center gap-2"
              style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: "24px 0 8px" }}
            >
              <span style={{ width: 3, height: 20, background: "var(--brand)", borderRadius: 2 }} />
              Training &amp; Placement Officer
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem" }}>
              The Placement Cell is led by a dedicated Training and Placement Officer (TPO) supported by a team of placement coordinators from each college. Together, they organise pre-placement training sessions, aptitude workshops, mock interviews, and industry interaction programmes.
            </p>
          </div>

          <figure className="reveal reveal-delay-2">
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=580&h=435&fit=crop"
                alt="JKKN Placement Cell team during a campus recruitment drive"
                width={580}
                height={435}
                style={{ borderRadius: "var(--radius-xl)", width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <figcaption style={{ textAlign: "center", fontSize: "0.82rem", color: "var(--text-tertiary)", marginTop: 12 }}>
              JKKN Training &amp; Placement Cell Team
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
