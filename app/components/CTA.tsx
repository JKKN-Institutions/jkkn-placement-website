"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
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
      id="contact"
      className="relative overflow-hidden text-center"
      style={{ background: "var(--green-dark)", padding: "80px 24px" }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(11,109,65,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(8,80,50,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="reveal relative z-[2]">
        <h2
          className="mb-3 font-extrabold text-white"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Launch Your Career with JKKN?
        </h2>
        <p
          className="mx-auto mb-8"
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Get in touch with the Training and Placement Cell for placement queries, recruiter partnerships, or registration assistance.
        </p>

        <div
          className="cta-contacts mb-8 flex flex-wrap justify-center gap-6"
        >
          <span
            className="cta-contact-hover inline-flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-full)",
              padding: "10px 20px",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {"\uD83D\uDCDE"}{" "}
            <a href="tel:+914288234040" style={{ color: "var(--green-light)", textDecoration: "none" }}>
              +91 4288 234040
            </a>
          </span>
          <span
            className="cta-contact-hover inline-flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-full)",
              padding: "10px 20px",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {"\uD83D\uDCE7"}{" "}
            <a href="mailto:placements@jkkn.ac.in" style={{ color: "var(--green-light)", textDecoration: "none" }}>
              placements@jkkn.ac.in
            </a>
          </span>
          <span
            className="cta-contact-hover inline-flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-full)",
              padding: "10px 20px",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {"\uD83D\uDCCD"} Komarapalayam, Namakkal, Tamil Nadu
          </span>
        </div>

        <div className="cta-actions flex flex-wrap justify-center gap-3">
          <a href="#" className="btn btn-primary">
            Register for Placements
          </a>
          <a
            href="https://wa.me/914288234040?text=Hi%2C%20I%20have%20a%20query%20about%20JKKN%20placements"
            className="btn btn-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
