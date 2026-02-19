"use client";

import { useEffect, useRef } from "react";

const sectorsData = [
  {
    icon: "\uD83C\uDFE5",
    title: "Healthcare & Hospitals",
    companies: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "MIOT Hospitals", "Kauvery Hospital"],
  },
  {
    icon: "\uD83D\uDCBB",
    title: "IT & Software",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies"],
  },
  {
    icon: "\uD83D\uDC8A",
    title: "Pharmaceutical",
    companies: ["Cipla", "Sun Pharma", "Dr. Reddy\u2019s Laboratories", "Hetero Pharma", "Lupin"],
  },
  {
    icon: "\u2699\uFE0F",
    title: "Manufacturing & Engineering",
    companies: ["L&T", "Ashok Leyland", "TVS Motor Company", "Saint-Gobain", "Brakes India"],
  },
  {
    icon: "\uD83D\uDD2C",
    title: "Diagnostics & Laboratory",
    companies: ["SRL Diagnostics", "Thyrocare", "Apollo Diagnostics", "Vijaya Diagnostic Centre", "Metropolis Healthcare"],
  },
  {
    icon: "\uD83C\uDFEB",
    title: "Education & Research",
    companies: ["BYJU\u2019S", "Unacademy", "Vedantu", "Chegg India", "Amrita Vishwa Vidyapeetham"],
  },
];

export default function Sectors() {
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
    <section ref={sectionRef} id="sectors" style={{ background: "var(--surface-1)", padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Industry Sectors</div>
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
            Top Recruiters by Sector
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            JKKN graduates are employed across diverse sectors, from healthcare to information technology
          </p>
        </div>

        <div
          className="sectors-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {sectorsData.map((sector, i) => (
            <div
              key={i}
              className={`reveal card-hover-sm ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
              }}
            >
              <div className="flex items-center gap-2.5" style={{ marginBottom: 16 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--brand-glow)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1.2rem",
                  }}
                  aria-hidden="true"
                >
                  {sector.icon}
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {sector.title}
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {sector.companies.map((company, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2"
                    style={{
                      padding: "7px 0",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      borderBottom: j < sector.companies.length - 1 ? "1px solid var(--surface-2)" : "none",
                    }}
                  >
                    <span
                      className="shrink-0 rounded-full"
                      style={{ width: 4, height: 4, background: "var(--brand)" }}
                    />
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
