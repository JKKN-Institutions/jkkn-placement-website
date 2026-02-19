"use client";

import { useEffect, useRef } from "react";

const colleges = [
  {
    name: "JKKN Dental College & Hospital",
    programmes: "BDS, MDS (Orthodontics, Prosthodontics, Periodontics, Oral Surgery, Conservative Dentistry, Paediatric Dentistry, Oral Pathology, Public Health Dentistry, Oral Medicine)",
    metrics: [
      { value: "92%", label: "Placement Rate" },
      { value: "\u20B98 LPA", label: "Highest Package" },
      { value: "\u20B94.2 LPA", label: "Avg. Package" },
      { value: "60+", label: "Recruiters" },
    ],
    recruiters: "Apollo Hospitals, Clove Dental, Manipal Hospitals, Fortis Healthcare, Dental Lounge",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=JKKN+Dental+College",
  },
  {
    name: "JKKN College of Engineering and Technology",
    programmes: "B.E. / B.Tech (CSE, ECE, EEE, Mechanical, Civil, AI&DS), M.E.",
    metrics: [
      { value: "95%", label: "Placement Rate" },
      { value: "\u20B912 LPA", label: "Highest Package" },
      { value: "\u20B95.5 LPA", label: "Avg. Package" },
      { value: "150+", label: "Recruiters" },
    ],
    recruiters: "TCS, Infosys, Wipro, Cognizant, HCL Technologies, L&T, Zoho, Accenture",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=JKKN+Engineering",
  },
  {
    name: "JKKN College of Pharmacy",
    programmes: "B.Pharm, M.Pharm, Pharm.D, D.Pharm",
    metrics: [
      { value: "90%", label: "Placement Rate" },
      { value: "\u20B97 LPA", label: "Highest Package" },
      { value: "\u20B94 LPA", label: "Avg. Package" },
      { value: "80+", label: "Recruiters" },
    ],
    recruiters: "Cipla, Sun Pharma, Dr. Reddy\u2019s, Hetero, Lupin, Aurobindo, Biocon",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=JKKN+Pharmacy",
  },
  {
    name: "Sresakthimayeil Institute of Nursing and Research",
    programmes: "B.Sc. Nursing, M.Sc. Nursing, P.B.B.Sc. Nursing",
    metrics: [
      { value: "93%", label: "Placement Rate" },
      { value: "\u20B96 LPA", label: "Highest Package" },
      { value: "\u20B93.8 LPA", label: "Avg. Package" },
      { value: "70+", label: "Recruiters" },
    ],
    recruiters: "Apollo Hospitals, MIOT Hospitals, Fortis Healthcare, KIMS, Global Hospitals, Kauvery Hospital",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=Nursing+Institute",
  },
  {
    name: "JKKN College of Arts and Science",
    programmes: "B.Sc., B.Com, BBA, BCA, M.Sc., M.Com, MBA, MCA",
    metrics: [
      { value: "88%", label: "Placement Rate" },
      { value: "\u20B98 LPA", label: "Highest Package" },
      { value: "\u20B93.5 LPA", label: "Avg. Package" },
      { value: "100+", label: "Recruiters" },
    ],
    recruiters: "TCS, Infosys BPO, Concentrix, Amazon, Flipkart, HDFC Bank, ICICI Bank",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=Arts+and+Science",
  },
  {
    name: "JKKN College of Allied Health Sciences",
    programmes: "B.Sc. (Medical Lab Technology, Radiology, Cardiac Technology, Optometry, Renal Dialysis), M.Sc.",
    metrics: [
      { value: "91%", label: "Placement Rate" },
      { value: "\u20B96.5 LPA", label: "Highest Package" },
      { value: "\u20B93.5 LPA", label: "Avg. Package" },
      { value: "65+", label: "Recruiters" },
    ],
    recruiters: "Apollo Diagnostics, SRL Diagnostics, Thyrocare, Narayana Health, KIMS, Vijaya Diagnostic Centre",
    image: "https://placehold.co/400x180/1e293b/94a3b8?text=Allied+Health+Sciences",
  },
];

export default function Colleges() {
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
      id="colleges"
      style={{ background: "var(--surface-1)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Our Colleges</div>
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
            Placements Across 6 Colleges
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Each college has a dedicated placement wing working with industry-specific recruiters
          </p>
        </div>

        <div
          className="colleges-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {colleges.map((college, i) => (
            <article
              key={i}
              className={`reveal card-hover ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "var(--surface-0)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={college.image}
                alt={`${college.name} campus`}
                width={400}
                height={180}
                style={{ width: "100%", height: 180, objectFit: "cover" }}
                loading="lazy"
              />
              <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3, marginBottom: 6 }}>
                  {college.name}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-tertiary)", marginBottom: 20, lineHeight: 1.5 }}>
                  {college.programmes}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                  {college.metrics.map((m, j) => (
                    <div
                      key={j}
                      style={{
                        background: "var(--surface-1)",
                        borderRadius: "var(--radius-md)",
                        padding: 12,
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", display: "block" }}>
                        {m.value}
                      </span>
                      <span style={{ fontSize: "0.68rem", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500, marginTop: 2 }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 20, lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Top Recruiters:</strong> {college.recruiters}
                </p>
                <a href="#" className="btn btn-card" style={{ borderRadius: "var(--radius-full)", padding: "12px 20px", fontSize: "0.9rem", marginTop: "auto" }}>
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
