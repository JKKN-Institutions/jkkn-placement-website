"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Recruiter logos from the jkkn.ac.in CMS, trimmed of their blank margins.
const logo = (file: string, name: string) => ({ src: `/recruiters/${file}.png`, name });

const recruiters = [
  logo("tcs", "Tata Consultancy Services"),
  logo("hcl", "HCL"),
  logo("bosch", "Bosch"),
  logo("foxconn", "Foxconn"),
  logo("tech-mahindra", "Tech Mahindra"),
  logo("tvs", "TVS"),
  logo("apotex", "Apotex"),
  logo("omega-healthcare", "Omega Healthcare"),
  logo("buddi-ai", "Buddi.ai"),
  logo("ivy-mobility", "Ivy Mobility"),
  logo("lgb", "LGB"),
  logo("premier-fine-linens", "Premier Fine Linens"),
  logo("tulasi-group", "Tulasi Group"),
  logo("rinex", "Rinex"),
];

// Further recruiters listed on the live site, shown by name until logo files are available.
const moreRecruiters = [
  "Infosys", "Wipro", "Cognizant", "Apollo", "Fortis", "Cipla", "Sun Pharma", "L&T",
  "Zoho", "Accenture", "Dr. Reddy’s", "Lupin", "Biocon", "Amazon", "Flipkart",
  "HDFC Bank", "Manipal", "Thyrocare", "KIMS", "Concentrix", "Hetero", "Kauvery",
];

const card =
  "rounded-2xl bg-white shadow-[0_14px_36px_-22px_rgba(3,40,22,0.35)] ring-1 ring-black/5 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-20px_rgba(3,40,22,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

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
    <section
      ref={sectionRef}
      id="recruiters"
      className="py-16 lg:py-20"
      style={{ scrollMarginTop: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Partners"
          icon={Handshake}
          title="Our Esteemed Recruiters"
          lead="Over 500 companies across diverse industries trust JKKN talent for their workforce needs"
        />

        {/* 14 logos + 1 link card fill 3×5 on desktop and 5×3 on tablets. */}
        <ul className="reveal m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {recruiters.map((r) => (
            <li key={r.src} className={`${card} flex flex-col items-center justify-between gap-3 px-4 pb-4 pt-6`}>
              <span className="flex h-16 w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.src}
                  alt={r.name}
                  loading="lazy"
                  draggable={false}
                  style={{ maxHeight: 60, maxWidth: "78%", width: "auto", objectFit: "contain" }}
                />
              </span>
              <span className="text-center text-[13px] font-medium leading-snug text-slate-600">{r.name}</span>
            </li>
          ))}
          <li>
            <a
              href="/recruiters"
              className="group flex h-full min-h-[120px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl bg-green px-4 py-5 text-center text-white shadow-[0_14px_36px_-18px_rgba(11,109,65,0.7)] transition-colors duration-200 hover:bg-[#085032] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              <span className="text-3xl font-bold leading-none" style={{ color: "var(--gold)" }}>
                500+
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                All recruiters{" "}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </span>
            </a>
          </li>
        </ul>

        <div className="reveal mb-6 mt-12 flex items-center justify-center gap-4 lg:mt-14">
          <span className="hidden h-px w-10 bg-green/40 sm:block lg:w-16" aria-hidden="true" />
          <h3 className="text-center text-lg font-bold" style={{ color: "var(--green-dark)" }}>
            More companies hiring JKKN learners
          </h3>
          <span className="hidden h-px w-10 bg-green/40 sm:block lg:w-16" aria-hidden="true" />
        </div>
        <ul className="reveal m-0 flex list-none flex-wrap justify-center gap-2.5 p-0 sm:gap-3">
          {moreRecruiters.map((name) => (
            <li
              key={name}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold shadow-[0_8px_20px_-14px_rgba(3,40,22,0.4)] ring-1 ring-black/5"
              style={{ color: "var(--green-dark)" }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
