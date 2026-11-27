"use client";

import { useEffect, useRef } from "react";
import { CircleCheck, Settings } from "lucide-react";

const trainingCards = [
  { title: "Aptitude & Reasoning", desc: "Quantitative aptitude, logical reasoning, and data interpretation covering standard test patterns." },
  { title: "Soft Skills", desc: "English communication, presentation skills, email etiquette, and professional body language." },
  { title: "Mock Interviews", desc: "One-on-one sessions with industry professionals simulating real interview scenarios." },
  { title: "Resume Building", desc: "Personalised review ensuring ATS-friendly formatting and impactful content." },
  { title: "Guest Lectures", desc: "Regular sessions from industry leaders, domain experts, and successful alumni." },
  { title: "Technical Workshops", desc: "Hands-on workshops in coding, clinical skills, and domain-specific competencies." },
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
    <section
      ref={sectionRef}
      id="training"
      className="py-16 lg:py-20"
      style={{ scrollMarginTop: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* One wide card: copy and checklist on the left, photo fading in from the right */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-30px_rgba(3,40,22,0.4)] ring-1 ring-black/5 lg:grid lg:grid-cols-2">
          <div className="relative z-10 p-6 sm:p-8 lg:py-12 lg:pl-12 lg:pr-4">
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-green"
              style={{ background: "#d4f1e4" }}
            >
              <Settings className="h-4 w-4" aria-hidden="true" />
              Training
            </p>
            <h2
              className="mb-3 font-bold"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "var(--green-dark)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              Pre-Placement Training &amp; Development
            </h2>
            <p className="mb-8 max-w-[38rem] text-slate-700" style={{ fontSize: "1.08rem", lineHeight: 1.6 }}>
              Comprehensive skill-building programmes to prepare students for competitive recruitment
            </p>

            <ul className="m-0 grid list-none gap-x-8 gap-y-6 p-0 sm:grid-cols-2">
              {trainingCards.map((card) => (
                <li key={card.title} className="flex gap-3">
                  <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-green" aria-hidden="true" />
                  <div>
                    <h3 className="mb-1 text-base font-bold" style={{ color: "var(--green-dark)" }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{card.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative m-0 h-72 sm:h-80 lg:h-auto lg:min-h-[520px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/training-session.jpg"
              alt="Students in a group discussion at a placement training workshop, with mock interviews under way behind them (illustrative image)"
              width={1408}
              height={768}
              className="absolute inset-0 w-full object-cover object-[30%_center]"
              style={{ height: "100%" }}
              loading="lazy"
            />
            {/* Photo is AI-generated, supplied by the client. It dissolves into the card: from the left on desktop, from the top on small screens */}
            <div
              className="absolute inset-0 hidden lg:block"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.85) 12%, rgba(255,255,255,0.35) 28%, rgba(255,255,255,0) 45%)",
              }}
            />
            <div
              className="absolute inset-x-0 top-0 h-20 lg:hidden"
              aria-hidden="true"
              style={{ background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%)" }}
            />
            <figcaption className="absolute inset-x-4 bottom-4 mx-auto w-fit rounded-full bg-white px-5 py-2.5 text-center text-[13px] font-semibold text-green shadow-[0_12px_30px_-12px_rgba(3,40,22,0.5)] ring-1 ring-black/5 lg:left-auto lg:right-6 lg:mx-0">
              Students during a pre-placement aptitude training session
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
