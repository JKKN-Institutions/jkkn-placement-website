"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Factory, GraduationCap, Hospital, Laptop, Microscope, Pill } from "lucide-react";
import SectionHeading from "./SectionHeading";

const sectorsData = [
  {
    icon: Hospital,
    title: "Healthcare & Hospitals",
    companies: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "MIOT Hospitals", "Kauvery Hospital"],
  },
  {
    icon: Laptop,
    title: "IT & Software",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies"],
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    companies: ["Cipla", "Sun Pharma", "Dr. Reddy\u2019s Laboratories", "Hetero Pharma", "Lupin"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    companies: ["L&T", "Ashok Leyland", "TVS Motor Company", "Saint-Gobain", "Brakes India"],
  },
  {
    icon: Microscope,
    title: "Diagnostics & Laboratory",
    companies: ["SRL Diagnostics", "Thyrocare", "Apollo Diagnostics", "Vijaya Diagnostic Centre", "Metropolis Healthcare"],
  },
  {
    icon: GraduationCap,
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
    <section
      ref={sectionRef}
      id="sectors"
      className="py-16 lg:py-20"
      style={{ background: "var(--cream-dark)", scrollMarginTop: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industry Sectors"
          icon={Briefcase}
          title="Top Recruiters by Sector"
          lead="JKKN graduates are employed across diverse sectors, from healthcare to information technology"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {sectorsData.map((sector, i) => (
            <article
              key={sector.title}
              className={`reveal rounded-2xl bg-white p-6 shadow-[0_18px_44px_-24px_rgba(3,40,22,0.35)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_26px_54px_-22px_rgba(3,40,22,0.5)] sm:p-7 ${
                i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""
              }`}
            >
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-green"
                  style={{ background: "#d4f1e4" }}
                  aria-hidden="true"
                >
                  <sector.icon size={26} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--green-dark)" }}>
                    {sector.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-slate-600">{sector.companies.length} leading recruiters</p>
                </div>
              </div>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {sector.companies.map((company) => (
                  <li
                    key={company}
                    className="rounded-full px-3.5 py-1.5 text-[13px] font-medium"
                    style={{ color: "var(--green-dark)", background: "var(--cream-dark)" }}
                  >
                    {company}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
