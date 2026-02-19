"use client";

import { useEffect, useRef } from "react";

const facultyData = [
  {
    name: "Dr. S. Harish",
    designation: "Chief Placement Officer",
    college: "JKKN Institutions (Group Level)",
    qualifications: ["Ph.D.", "MBA (HR)", "15+ Yrs Exp."],
    badge: "Chief Placement Officer",
    email: "placements@jkkn.ac.in",
    phone: "+919876543210",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Dr.+S.+Harish",
  },
  {
    name: "Dr. M. Kavitha",
    designation: "Training & Placement Officer",
    college: "JKKN Dental College & Hospital",
    qualifications: ["MDS", "BDS", "10+ Yrs Exp."],
    badge: "TPO \u2014 Dental",
    email: "tpo.dental@jkkn.ac.in",
    phone: "+919876543211",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Dr.+M.+Kavitha",
  },
  {
    name: "Prof. R. Kumar",
    designation: "Training & Placement Officer",
    college: "JKKN College of Engineering and Technology",
    qualifications: ["M.E.", "B.E.", "12+ Yrs Exp."],
    badge: "TPO \u2014 Engineering",
    email: "tpo.engg@jkkn.ac.in",
    phone: "+919876543212",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Prof.+R.+Kumar",
  },
  {
    name: "Dr. P. Lakshmi",
    designation: "Training & Placement Officer",
    college: "JKKN College of Pharmacy",
    qualifications: ["Pharm.D", "M.Pharm", "8+ Yrs Exp."],
    badge: "TPO \u2014 Pharmacy",
    email: "tpo.pharmacy@jkkn.ac.in",
    phone: "+919876543213",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Dr.+P.+Lakshmi",
  },
  {
    name: "Mrs. T. Deepa",
    designation: "Training & Placement Officer",
    college: "Sresakthimayeil Institute of Nursing and Research",
    qualifications: ["M.Sc. Nursing", "B.Sc. Nursing", "9+ Yrs Exp."],
    badge: "TPO \u2014 Nursing",
    email: "tpo.nursing@jkkn.ac.in",
    phone: "+919876543214",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Mrs.+T.+Deepa",
  },
  {
    name: "Prof. V. Senthil",
    designation: "Training & Placement Officer",
    college: "JKKN College of Arts and Science & JKKN College of Allied Health Sciences",
    qualifications: ["M.Sc.", "M.Phil.", "11+ Yrs Exp."],
    badge: "TPO \u2014 Arts & Science / AHS",
    email: "tpo.cas@jkkn.ac.in",
    phone: "+919876543215",
    image: "https://placehold.co/400x220/e2e8f0/334155?text=Prof.+V.+Senthil",
  },
];

export default function Faculty() {
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
    <section ref={sectionRef} id="faculty" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Our Faculty</div>
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
            Placement Cell Faculty &amp; Coordinators
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Experienced faculty members dedicated to guiding students from campus to career
          </p>
        </div>

        <div
          className="faculty-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {facultyData.map((f, i) => (
            <article
              key={i}
              className={`reveal card-hover-md ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 220,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, var(--surface-2), var(--surface-3))",
                }}
              >
                <img
                  src={f.image}
                  alt={`${f.name} \u2014 ${f.designation}`}
                  width={400}
                  height={220}
                  className="faculty-img-hover"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--brand)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    padding: "4px 14px",
                    borderRadius: "var(--radius-full)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.badge}
                </span>
              </div>
              <div style={{ padding: "24px 20px 28px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 4, lineHeight: 1.3 }}>
                  {f.name}
                </h3>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--brand)", marginBottom: 10, letterSpacing: "0.3px" }}>
                  {f.designation}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 14, lineHeight: 1.5 }}>
                  {f.college}
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                  {f.qualifications.map((q, j) => (
                    <span
                      key={j}
                      style={{
                        display: "inline-block",
                        background: "var(--brand-glow)",
                        color: "var(--brand)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      {q}
                    </span>
                  ))}
                </div>
                <div
                  className="flex justify-center gap-2.5"
                  style={{ paddingTop: 14, borderTop: "1px solid var(--border-light)" }}
                >
                  <a
                    href={`mailto:${f.email}`}
                    title="Email"
                    className="contact-icon"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--surface-2)",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {"\u2709"}
                  </a>
                  <a
                    href={`tel:${f.phone}`}
                    title="Phone"
                    className="contact-icon"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--surface-2)",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {"\u260E"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
