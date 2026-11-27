"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const colleges = [
  {
    name: "JKKN Dental College & Hospital",
    slug: "dental",
    programmes: "BDS, MDS (Orthodontics, Prosthodontics, Periodontics, Oral Surgery, Conservative Dentistry, Paediatric Dentistry, Oral Pathology, Public Health Dentistry, Oral Medicine)",
    metrics: [
      { value: "92%", label: "Placement Rate" },
      { value: "\u20B98 LPA", label: "Highest Package" },
      { value: "\u20B94.2 LPA", label: "Avg. Package" },
      { value: "60+", label: "Recruiters" },
    ],
    recruiters: "Apollo Hospitals, Clove Dental, Manipal Hospitals, Fortis Healthcare, Dental Lounge",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/97319b8f-3346-404e-8368-106d8daa7984.jpg",
  },
  {
    name: "JKKN College of Pharmacy",
    slug: "pharmacy",
    programmes: "B.Pharm, M.Pharm, Pharm.D, D.Pharm",
    metrics: [
      { value: "90%", label: "Placement Rate" },
      { value: "\u20B97 LPA", label: "Highest Package" },
      { value: "\u20B94 LPA", label: "Avg. Package" },
      { value: "80+", label: "Recruiters" },
    ],
    recruiters: "Cipla, Sun Pharma, Dr. Reddy\u2019s, Hetero, Lupin, Aurobindo, Biocon",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/babdddef-4ba7-4caa-acf2-eda9b4be0199.jpg",
  },
  {
    name: "JKKN College of Nursing",
    slug: "nursing",
    programmes: "B.Sc. Nursing, M.Sc. Nursing, P.B.B.Sc. Nursing",
    metrics: [
      { value: "93%", label: "Placement Rate" },
      { value: "\u20B96 LPA", label: "Highest Package" },
      { value: "\u20B93.8 LPA", label: "Avg. Package" },
      { value: "70+", label: "Recruiters" },
    ],
    recruiters: "Apollo Hospitals, MIOT Hospitals, Fortis Healthcare, KIMS, Global Hospitals, Kauvery Hospital",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/59457a83-8780-42d0-8351-d4eee877a7a6.jpg",
  },
  {
    name: "JKKN College of Allied Health Sciences",
    slug: "allied-health",
    programmes: "B.Sc. (Medical Lab Technology, Radiology, Cardiac Technology, Optometry, Renal Dialysis), M.Sc.",
    metrics: [
      { value: "91%", label: "Placement Rate" },
      { value: "\u20B96.5 LPA", label: "Highest Package" },
      { value: "\u20B93.5 LPA", label: "Avg. Package" },
      { value: "65+", label: "Recruiters" },
    ],
    recruiters: "Apollo Diagnostics, SRL Diagnostics, Thyrocare, Narayana Health, KIMS, Vijaya Diagnostic Centre",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/0a7ec366-6d23-4745-a201-dcd771b9f47d.jpg",
  },
  {
    name: "JKKN College of Engineering",
    slug: "engineering",
    programmes: "B.E. / B.Tech (CSE, ECE, EEE, Mechanical, Civil, AI&DS), M.E.",
    metrics: [
      { value: "95%", label: "Placement Rate" },
      { value: "\u20B912 LPA", label: "Highest Package" },
      { value: "\u20B95.5 LPA", label: "Avg. Package" },
      { value: "150+", label: "Recruiters" },
    ],
    recruiters: "TCS, Infosys, Wipro, Cognizant, HCL Technologies, L&T, Zoho, Accenture",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/40d1dc8e-bbe1-4750-ab02-ea06861bb9c5.jpg",
  },
  {
    name: "JKKN College of Arts and Science",
    slug: "arts-science",
    programmes: "B.Sc., B.Com, BBA, BCA, M.Sc., M.Com, MBA, MCA",
    metrics: [
      { value: "88%", label: "Placement Rate" },
      { value: "\u20B98 LPA", label: "Highest Package" },
      { value: "\u20B93.5 LPA", label: "Avg. Package" },
      { value: "100+", label: "Recruiters" },
    ],
    recruiters: "TCS, Infosys BPO, Concentrix, Amazon, Flipkart, HDFC Bank, ICICI Bank",
    image: "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/af856eac-ce3b-4437-9562-203201b209d5.jpg",
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
      className="py-16 lg:py-20"
      style={{ background: "var(--cream-dark)", scrollMarginTop: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Colleges"
          icon={Building2}
          title="Placements Across 6 Colleges"
          lead="Each college has a dedicated placement wing working with industry-specific recruiters"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {colleges.map((college, i) => (
            <article
              key={college.slug}
              className={`reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_44px_-24px_rgba(3,40,22,0.35)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_26px_54px_-22px_rgba(3,40,22,0.5)] ${
                i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={college.image}
                  alt={`${college.name} campus`}
                  width={400}
                  height={192}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading="lazy"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/3"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(180deg, rgba(3,40,22,0) 0%, rgba(3,40,22,0.82) 100%)" }}
                />
                <h3 className="absolute inset-x-0 bottom-0 px-5 pb-4 text-lg font-bold leading-snug text-white">
                  {college.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-5 text-[13px] leading-relaxed text-slate-600">{college.programmes}</p>

                <dl className="mb-5 grid grid-cols-2 gap-2.5">
                  {college.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col-reverse rounded-xl px-3 py-3 text-center"
                      style={{ background: "var(--cream-dark)" }}
                    >
                      <dt className="mt-0.5 text-xs font-medium text-slate-600">{m.label}</dt>
                      <dd className="text-xl font-bold tabular-nums text-green">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mb-6 text-[13px] leading-relaxed text-slate-700">
                  <strong className="font-semibold" style={{ color: "var(--green-dark)" }}>
                    Top Recruiters:
                  </strong>{" "}
                  {college.recruiters}
                </p>

                <a
                  href={`/placements/${college.slug}`}
                  aria-label={`View Details: ${college.name}`}
                  className="mt-auto inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 self-start rounded-full border-[1.5px] border-green px-6 text-sm font-semibold text-green transition-colors duration-200 hover:bg-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
