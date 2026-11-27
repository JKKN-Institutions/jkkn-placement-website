"use client";

import { useEffect, useRef } from "react";
import { Info, Target, UserCheck } from "lucide-react";

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
    <section ref={sectionRef} id="about" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10 text-center lg:mb-14">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-green"
            style={{ background: "#d4f1e4" }}
          >
            <Info className="h-4 w-4" aria-hidden="true" />
            About Us
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="hidden h-0.5 w-12 shrink-0 rounded-full bg-green sm:block lg:w-20" aria-hidden="true" />
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)",
                color: "var(--green-dark)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              About the JKKN Placement Cell
            </h2>
            <span className="hidden h-0.5 w-12 shrink-0 rounded-full bg-green sm:block lg:w-20" aria-hidden="true" />
          </div>
          <p className="mx-auto mt-4 max-w-[600px] text-slate-700" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
            Dedicated to bridging the gap between academic excellence and industry-ready careers
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-14">
          <div className="reveal">
            <p className="mb-6 text-slate-700" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              The Training and Placement Cell at JKKN Institutions serves as the central hub for all placement-related activities across six constituent colleges. Established with the vision of ensuring every student transitions seamlessly from academia to the professional world, the cell coordinates campus recruitment drives, industry partnerships, and career development programmes throughout the academic year.
            </p>

            <div className="grid gap-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-[0_18px_44px_-24px_rgba(3,40,22,0.35)] ring-1 ring-black/5 sm:p-6">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-green"
                  style={{ background: "#d4f1e4" }}
                  aria-hidden="true"
                >
                  <Target className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold" style={{ color: "var(--green-dark)" }}>
                    Our Mission
                  </h3>
                  <p className="text-slate-700" style={{ fontSize: "0.98rem", lineHeight: 1.7 }}>
                    To achieve 100% placement assistance for all eligible students by cultivating industry-relevant skills, fostering strong recruiter relationships, and providing personalised career guidance. We work closely with over 500 companies spanning healthcare, information technology, pharmaceuticals, engineering, and education sectors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-[0_18px_44px_-24px_rgba(3,40,22,0.35)] ring-1 ring-black/5 sm:p-6">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-green"
                  style={{ background: "#d4f1e4" }}
                  aria-hidden="true"
                >
                  <UserCheck className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold" style={{ color: "var(--green-dark)" }}>
                    Training &amp; Placement Officer
                  </h3>
                  <p className="text-slate-700" style={{ fontSize: "0.98rem", lineHeight: 1.7 }}>
                    The Placement Cell is led by a dedicated Training and Placement Officer (TPO) supported by a team of placement coordinators from each college. Together, they organise pre-placement training sessions, aptitude workshops, mock interviews, and industry interaction programmes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <figure className="reveal reveal-delay-2 relative pb-6">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_50px_-24px_rgba(3,40,22,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=580&h=435&fit=crop"
                alt="JKKN Placement Cell team during a campus recruitment drive"
                width={580}
                height={435}
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
              {/* Brand curve, matching the hero photo */}
              <svg className="absolute bottom-0 right-0 h-[45%] w-auto" viewBox="0 0 200 300" aria-hidden="true">
                <path d="M200 0 C 192 140 122 250 0 300 L 200 300 Z" fill="var(--gold)" />
                <path d="M200 44 C 196 164 142 262 44 300 L 200 300 Z" fill="var(--green)" />
              </svg>
            </div>
            <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-green shadow-[0_12px_30px_-12px_rgba(3,40,22,0.4)] ring-1 ring-black/5">
              JKKN Training &amp; Placement Cell Team
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
