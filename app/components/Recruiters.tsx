"use client";

import { useEffect, useRef } from "react";

const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Apollo", "Fortis", "Cipla",
  "Sun Pharma", "L&T", "Zoho", "Accenture", "Dr.Reddy's", "Lupin", "Biocon",
  "Amazon", "Flipkart", "HDFC Bank", "Manipal", "Thyrocare", "KIMS", "Concentrix",
  "Hetero", "Kauvery",
];

export default function Recruiters() {
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
    <section ref={sectionRef} id="recruiters" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Our Partners</div>
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
            Our Esteemed Recruiters
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Over 500 companies across diverse industries trust JKKN talent for their workforce needs
          </p>
        </div>

        <div
          className="recruiters-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          {recruiters.map((name) => (
            <div
              key={name}
              className="logo-hover"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "20px 16px",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
              }}
            >
              <img
                src={`https://placehold.co/140x50/ffffff/334155?text=${encodeURIComponent(name)}`}
                alt={`${name} logo`}
                width={140}
                height={50}
                style={{ maxHeight: 36, maxWidth: "100%", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
