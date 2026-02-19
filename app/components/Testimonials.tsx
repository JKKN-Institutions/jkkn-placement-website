"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "The placement cell at JKKN was incredibly supportive. From resume building to mock interviews, they prepared us for every stage. I secured a position at TCS during the campus drive, and the entire process was smooth and well-organised.",
    name: "Rahul K.",
    role: "B.E. CSE \u2014 Placed at TCS",
    initials: "RK",
  },
  {
    text: "I always wanted to work in a leading hospital, and JKKN made it possible. The nursing placement cell connected us with Apollo Hospitals, and I received my offer within two weeks of the interview. Grateful for the guidance!",
    name: "Priya S.",
    role: "B.Sc. Nursing \u2014 Placed at Apollo Hospitals",
    initials: "PS",
  },
  {
    text: "The pharmacy placement drive brought some of India\u2019s top pharmaceutical companies to our campus. Sun Pharma selected me after a thorough aptitude test and technical interview. The pre-placement training made all the difference.",
    name: "Arun V.",
    role: "B.Pharm \u2014 Placed at Sun Pharma",
    initials: "AV",
  },
  {
    text: "As a BCA graduate, I was uncertain about placement prospects. But the JKKN Arts and Science placement team organised excellent training sessions and brought companies like Concentrix and Amazon to campus. I\u2019m now working at Amazon!",
    name: "Deepika M.",
    role: "BCA \u2014 Placed at Amazon",
    initials: "DM",
  },
  {
    text: "The dental placement cell introduced us to some of the finest hospital chains in India. I completed my BDS and secured a position at Clove Dental. The clinical training at JKKN gave me the confidence to perform well in interviews.",
    name: "Suresh K.",
    role: "BDS \u2014 Placed at Clove Dental",
    initials: "SK",
  },
  {
    text: "My B.Sc. in Medical Lab Technology from JKKN Allied Health Sciences opened doors I never expected. The placement cell arranged campus interviews with SRL Diagnostics, and I was selected in the first round itself.",
    name: "Kavitha L.",
    role: "B.Sc. MLT \u2014 Placed at SRL Diagnostics",
    initials: "KL",
  },
];

export default function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-header reveal">
          <div className="section-label">Testimonials</div>
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
            What Our Placed Students Say
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Real experiences from students who launched their careers through JKKN placements
          </p>
        </div>

        <div
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`reveal card-hover-md ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: 28,
              }}
            >
              <div style={{ color: "var(--accent)", fontSize: "0.9rem", marginBottom: 16, letterSpacing: 2 }} aria-hidden="true">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                {t.text}
              </blockquote>
              <div
                className="flex items-center gap-3"
                style={{ paddingTop: 16, borderTop: "1px solid var(--border-light)" }}
              >
                <img
                  src={`https://placehold.co/44x44/e2e8f0/334155?text=${t.initials}`}
                  alt={`Photo of ${t.name}`}
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--surface-2)" }}
                  loading="lazy"
                />
                <div>
                  <span style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text-primary)", display: "block" }}>{t.name}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-tertiary)" }}>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
