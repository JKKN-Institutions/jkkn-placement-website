"use client";

import { useState, useEffect, useRef } from "react";

const faqData = [
  {
    question: "What is the overall placement rate at JKKN Institutions?",
    answer: "JKKN Institutions maintains an overall placement rate of approximately 90\u201395% across all six colleges. The Training and Placement Cell works with 500+ recruiting companies to ensure maximum placement opportunities. Each college also has dedicated placement coordinators who work closely with industry-specific recruiters.",
  },
  {
    question: "Which companies recruit from JKKN Institutions?",
    answer: "Over 500 companies recruit from JKKN, including Apollo Hospitals, Fortis Healthcare, TCS, Infosys, Wipro, Cognizant, HCL Technologies, Cipla, Sun Pharma, Dr. Reddy\u2019s, L&T, Zoho, Accenture, Amazon, and many more across healthcare, IT, pharmaceutical, manufacturing, diagnostics, and education sectors.",
  },
  {
    question: "What is the highest and average salary package offered?",
    answer: "The highest package offered at JKKN Institutions is \u20B912 LPA (across Engineering and IT placements). The average package ranges from \u20B93.5 LPA to \u20B96 LPA depending on the programme, college, and industry sector. Healthcare and IT sectors typically offer the highest compensation.",
  },
  {
    question: "How does the campus placement process work?",
    answer: "The JKKN placement process follows a structured 6-step approach: (1) Student Registration with the Placement Cell, (2) Pre-Placement Training covering aptitude, soft skills, and mock interviews, (3) Aptitude Tests conducted by recruiting companies, (4) Technical Rounds with domain-specific assessments, (5) HR Interview for final evaluation, and (6) Offer Letter distribution to selected candidates.",
  },
  {
    question: "Does JKKN provide pre-placement training for students?",
    answer: "Yes, JKKN Institutions provides comprehensive pre-placement training that includes aptitude and quantitative reasoning, soft skills and English communication, group discussion practice, mock technical and HR interviews, resume building workshops, and industry-specific guest lectures. Training begins well before the placement season.",
  },
  {
    question: "Which programmes are eligible for campus placements?",
    answer: "All undergraduate and postgraduate programmes across JKKN\u2019s six colleges are eligible: BDS and MDS (Dental), B.E./B.Tech and M.E. (Engineering), B.Pharm, M.Pharm, Pharm.D, and D.Pharm (Pharmacy), B.Sc. and M.Sc. Nursing (Nursing), B.Sc., B.Com, BBA, BCA, MBA, MCA (Arts and Science), and B.Sc. and M.Sc. in Allied Health Sciences specialisations.",
  },
  {
    question: "Are internship opportunities available through the Placement Cell?",
    answer: "Yes, JKKN facilitates both internship and final placement opportunities. Many recruiting companies offer pre-placement internships (PPIs) during the pre-final year. These internships often convert into full-time job offers based on student performance. The Placement Cell actively coordinates with companies to create summer and semester internship opportunities.",
  },
  {
    question: "How can recruiters partner with JKKN for campus recruitment?",
    answer: "Recruiters can partner with JKKN by contacting the Training and Placement Cell directly via email or phone. The Placement Cell facilitates the entire recruitment process including venue arrangement, student shortlisting, logistics support, and post-placement coordination. Companies can conduct pool campus drives across all six colleges or target specific programmes.",
  },
  {
    question: "Is JKKN Institutions recognised and accredited?",
    answer: "Yes, JKKN Institutions and its constituent colleges hold accreditations and approvals from relevant regulatory bodies including NAAC, AICTE, PCI (Pharmacy Council of India), DCI (Dental Council of India), INC (Indian Nursing Council), and are affiliated to their respective state universities.",
  },
  {
    question: "Where is JKKN Institutions located?",
    answer: "JKKN Institutions is located at Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu \u2014 638183, India. The campus is well-connected by road and is accessible from Salem (35 km), Erode (25 km), and Coimbatore (130 km).",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section ref={sectionRef} id="faq" style={{ background: "var(--surface-1)", padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">FAQ</div>
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
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Answers to the most common queries from students, parents, and recruiters
          </p>
        </div>

        <div className="reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
          {faqData.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className="faq-hover"
                style={{
                  border: `1px solid ${isActive ? "var(--brand)" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)",
                  marginBottom: 10,
                  overflow: "hidden",
                  background: "var(--surface-0)",
                  boxShadow: isActive ? "var(--shadow-md)" : "none",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isActive}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "20px 24px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "inherit",
                    gap: 16,
                  }}
                >
                  {item.question}
                  <span
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: 28,
                      height: 28,
                      background: isActive ? "var(--brand)" : "var(--surface-2)",
                      borderRadius: "50%",
                      transition: "all 0.3s var(--ease-out)",
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isActive ? "#fff" : "var(--text-secondary)"}
                      strokeWidth={2.5}
                      style={{ width: 14, height: 14 }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isActive ? 400 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s var(--ease-out)",
                  }}
                >
                  <div style={{ padding: "0 24px 24px", fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
