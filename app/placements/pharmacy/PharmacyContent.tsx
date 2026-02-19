"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../college-page.css";

/* ===== Data ===== */
const programmes = [
  {
    icon: "\u{1F48A}",
    name: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years",
    desc: "Foundation programme covering pharmacy practice, dispensing, and pharmaceutical formulation basics. Qualifies for registered pharmacist licence.",
    tags: ["PCI Approved", "Diploma", "Licence Eligible"],
  },
  {
    icon: "\u{1F393}",
    name: "Bachelor of Pharmacy (B.Pharm)",
    duration: "4 Years",
    desc: "Comprehensive undergraduate programme covering pharmaceutics, pharmacology, pharmaceutical chemistry, and pharmacognosy with industrial training.",
    tags: ["PCI Approved", "91% Placement", "Industry Training"],
  },
  {
    icon: "\u{1F52C}",
    name: "M.Pharm \u2014 Pharmaceutics",
    duration: "2 Years",
    desc: "Advanced specialisation in drug formulation, novel drug delivery systems, nanotechnology, and pharmaceutical technology research.",
    tags: ["PCI Approved", "Research"],
  },
  {
    icon: "\u2697\uFE0F",
    name: "M.Pharm \u2014 Pharmaceutical Chemistry",
    duration: "2 Years",
    desc: "Specialisation in drug design, synthetic chemistry, medicinal chemistry, computational drug discovery, and analytical method development.",
    tags: ["PCI Approved", "Drug Design"],
  },
  {
    icon: "\u{1F9EC}",
    name: "M.Pharm \u2014 Pharmacology",
    duration: "2 Years",
    desc: "Advanced study in drug action, toxicology, clinical pharmacology, and preclinical drug evaluation for research and clinical careers.",
    tags: ["PCI Approved", "Clinical"],
  },
  {
    icon: "\u{1F489}",
    name: "Doctor of Pharmacy (Pharm.D)",
    duration: "6 Years (5 + 1 Internship)",
    desc: "Clinical pharmacy doctorate with hospital rotations, patient care, pharmacovigilance, and drug information services. Highest pharmacy qualification.",
    tags: ["PCI Approved", "Clinical Practice", "Doctoral"],
  },
];

const recruiters = [
  "Cipla", "Sun Pharma", "Dr. Reddy's", "Hetero Pharma",
  "Lupin", "Aurobindo", "Biocon", "Glenmark",
  "Torrent Pharma", "Micro Labs", "Sanofi India", "Abbott India",
  "Mankind Pharma", "Alkem Labs", "Natco Pharma", "Strides Pharma",
  "Apollo Pharmacy", "MedPlus",
];

const processSteps = [
  { title: "Registration", desc: "Final-year B.Pharm, M.Pharm & Pharm.D students register with the placement cell" },
  { title: "Industry Orientation", desc: "GMP/GLP awareness, pharma industry overview, and career path counselling" },
  { title: "Skill Training", desc: "QC instrument training, clinical skills, interview prep, and soft skills" },
  { title: "Resume & Profile", desc: "Professional CV with industrial training experience and project highlights" },
  { title: "Campus Drives", desc: "On-campus recruitment by pharma companies, CROs, and hospital chains" },
  { title: "Offer & Joining", desc: "Offer negotiation support and smooth transition to your pharmaceutical career" },
];

const testimonials = [
  {
    text: "The pharmacy placement drive brought Sun Pharma directly to our campus. The pre-placement training on GMP practices and QC instruments gave me the edge. I was placed in the quality control department within two weeks.",
    name: "Arun V.",
    role: "B.Pharm 2024 \u2014 Placed at Sun Pharma",
    initials: "AV",
  },
  {
    text: "My Pharm.D training at JKKN, especially the hospital clinical rotations, made me stand out. I secured a clinical pharmacist role at a multi-speciality hospital in Chennai through the placement cell\u2019s connections.",
    name: "Nithya R.",
    role: "Pharm.D 2023 \u2014 Clinical Pharmacist, Chennai",
    initials: "NR",
  },
  {
    text: "Cipla recruited from JKKN during the campus drive, and I was selected for their production department. The industrial training during B.Pharm and the GMP workshop organised by the placement cell prepared me well.",
    name: "Mohan K.",
    role: "B.Pharm 2024 \u2014 Placed at Cipla",
    initials: "MK",
  },
  {
    text: "After completing M.Pharm in Pharmaceutics, I got placed at Biocon in their drug formulation R&D team. The research projects and publications during my M.Pharm programme were highly valued by the recruiter.",
    name: "Swetha P.",
    role: "M.Pharm 2023 \u2014 Placed at Biocon R&D",
    initials: "SP",
  },
  {
    text: "The GPAT coaching support from JKKN faculty helped me qualify for M.Pharm at a top institution. For students interested in higher studies, the placement cell provides excellent guidance alongside regular placements.",
    name: "Kavya D.",
    role: "B.Pharm 2024 \u2014 GPAT Qualified, M.Pharm",
    initials: "KD",
  },
  {
    text: "I joined a CRO as a pharmacovigilance associate after my Pharm.D. The drug safety and adverse event reporting training during clinical rotations at JKKN was exactly what the employer was looking for.",
    name: "Ravi J.",
    role: "Pharm.D 2024 \u2014 Pharmacovigilance, CRO",
    initials: "RJ",
  },
];

const trainingCards = [
  { icon: "\u{1F52C}", title: "QC Instruments", desc: "Hands-on training in HPLC, UV spectrophotometry, dissolution apparatus, and other QC instruments used in pharma labs." },
  { icon: "\u{1F4DA}", title: "GMP/GLP Workshops", desc: "Good Manufacturing Practice and Good Laboratory Practice awareness sessions conducted by industry professionals." },
  { icon: "\u{1F4AC}", title: "Interview Preparation", desc: "Mock interviews covering technical pharma questions, HR rounds, and case-based discussions for campus drives." },
  { icon: "\u{1F4C4}", title: "Resume Building", desc: "Pharma-specific CV creation highlighting industrial training, projects, publications, and regulatory knowledge." },
  { icon: "\u{1F393}", title: "GPAT Coaching", desc: "Faculty-led coaching sessions, study material, and mock tests for GPAT preparation alongside final-year studies." },
  { icon: "\u{1F489}", title: "Clinical Training", desc: "Hospital pharmacy rotations, patient counselling, drug interaction analysis, and pharmacovigilance case studies for Pharm.D students." },
];

const faculty = [
  {
    name: "Dr. P. Lakshmi",
    designation: "Training & Placement Officer",
    college: "JKKN College of Pharmacy",
    qualifications: ["Pharm.D", "M.Pharm", "8+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.pharmacy@jkkn.ac.in",
    phone: "+919876543213",
    initials: "PL",
  },
  {
    name: "Prof. K. Anand",
    designation: "Industry Liaison Officer",
    college: "JKKN College of Pharmacy",
    qualifications: ["M.Pharm", "B.Pharm", "10+ Yrs Exp."],
    badge: "Industry Liaison Officer",
    email: "industry.pharmacy@jkkn.ac.in",
    phone: "+919876543220",
    initials: "KA",
  },
  {
    name: "Dr. S. Vani",
    designation: "Clinical Training Coordinator",
    college: "JKKN College of Pharmacy",
    qualifications: ["Pharm.D", "M.Pharm (Pharmacology)", "6+ Yrs Exp."],
    badge: "Clinical Training Coordinator",
    email: "clinical.pharmacy@jkkn.ac.in",
    phone: "+919876543221",
    initials: "SV",
  },
];

const faqs = [
  {
    q: "What is the placement rate for B.Pharm graduates at JKKN College of Pharmacy?",
    a: "JKKN College of Pharmacy maintains a 91% placement rate for B.Pharm graduates, with students placed across leading pharmaceutical manufacturing companies, hospital pharmacies, CROs, and drug regulatory organisations.",
  },
  {
    q: "Which pharmaceutical companies recruit from JKKN College of Pharmacy?",
    a: "Top recruiters include Cipla, Sun Pharma, Dr. Reddy\u2019s Laboratories, Hetero Pharma, Lupin, Aurobindo Pharma, Biocon, Glenmark, Torrent Pharmaceuticals, Micro Labs, Sanofi India, Abbott India, Mankind Pharma, and several CROs and hospital pharmacy chains.",
  },
  {
    q: "What is the highest salary package offered to JKKN Pharmacy graduates?",
    a: "The highest salary package offered to JKKN Pharmacy graduates is \u20B98 LPA, with an average package of \u20B93.8 LPA for B.Pharm graduates. M.Pharm and Pharm.D graduates receive higher packages in specialised R&D, clinical, and regulatory roles.",
  },
  {
    q: "What pharmacy programmes are offered at JKKN College of Pharmacy?",
    a: "JKKN College of Pharmacy offers D.Pharm, B.Pharm, M.Pharm in Pharmaceutics, Pharmaceutical Chemistry, and Pharmacology, and Pharm.D (Doctor of Pharmacy) \u2014 all approved by the Pharmacy Council of India (PCI).",
  },
  {
    q: "Does JKKN College of Pharmacy offer Pharm.D placements?",
    a: "Yes. Pharm.D graduates are placed in clinical pharmacy roles at multi-speciality hospitals, pharmacovigilance departments, clinical research organisations (CROs), drug information centres, and drug regulatory affairs departments across India.",
  },
  {
    q: "What career paths are available for JKKN Pharmacy graduates?",
    a: "Career paths include pharmaceutical manufacturing (production, QA, QC), drug regulatory affairs, clinical research and pharmacovigilance, hospital and community pharmacy, medical writing, pharmaceutical marketing and sales, and academic/research positions at pharmacy colleges.",
  },
  {
    q: "Does JKKN College of Pharmacy provide GPAT coaching?",
    a: "Yes. The placement cell provides GPAT (Graduate Pharmacy Aptitude Test) coaching support for B.Pharm students aspiring to pursue M.Pharm at top institutions. Faculty-led study groups, comprehensive study material, and regular mock test sessions are conducted throughout the final year.",
  },
  {
    q: "What pre-placement training does the pharmacy placement cell offer?",
    a: "The placement cell offers pharmaceutical industry orientation, GMP/GLP workshop training, QC instrument hands-on sessions (HPLC, UV spectrophotometry), soft skills and interview preparation, pharma-specific resume building, GPAT coaching, and clinical pharmacy rotations for Pharm.D students.",
  },
];

/* ===== Counter Hook ===== */
function useCounter(target: number, suffix: string, isVisible: boolean) {
  const [display, setDisplay] = useState(`0${suffix}`);
  const counted = useRef(false);

  useEffect(() => {
    if (!isVisible || counted.current) return;
    counted.current = true;
    const duration = 1800;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);
      setDisplay(`${current.toLocaleString("en-IN")}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isVisible, target, suffix]);

  return display;
}

/* ===== Counter Span Component ===== */
function CounterSpan({
  target,
  suffix,
  prefix,
  className,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const display = useCounter(target, suffix, isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
    </span>
  );
}

/* ===== Main Component ===== */
export default function PharmacyContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = mainRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <Navbar />
      <div className="cp-page" ref={mainRef}>
        {/* ===== SECTION 1: Hero ===== */}
        <section className="cp-hero">
          <nav className="cp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/placements">Placements</Link>
            <span className="cp-breadcrumb__sep" aria-hidden="true">&#8250;</span>
            <span>College of Pharmacy</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKN Pharmacy Placement Cell</div>
              <h1>Advance Your <span>Pharmacy Career</span> with Industry-Ready Training</h1>
              <p className="cp-hero__tagline">
                JKKN College of Pharmacy connects B.Pharm, M.Pharm, and Pharm.D graduates with 150+ leading pharmaceutical companies, hospitals, and clinical research organisations through dedicated placement support.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">View Programmes &#8595;</a>
                <a href="#contact" className="btn btn-outline">Contact Placement Cell</a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan target={91} suffix="%" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={150} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Pharma Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={8} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={3000} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <CounterSpan target={6} suffix="" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Pharmacy Programmes</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan target={91} suffix="%" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={150} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;3.8 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;8 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={6} suffix="" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Programmes Offered</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section style={{ padding: "80px 0" }} id="about" aria-label="About the Pharmacy Placement Cell">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmacy Placement Cell
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Connecting PCI-approved pharmacy graduates with India&apos;s leading pharmaceutical industry employers
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>The Placement Cell at JKKN College of Pharmacy bridges the gap between pharmaceutical education and industry needs. With PCI-approved programmes and well-equipped laboratories, our graduates are trained to meet the highest standards of the pharmaceutical sector.</p>
                <p>Our placement ecosystem covers the full spectrum of pharmacy careers — from pharmaceutical manufacturing and quality control to clinical research, hospital pharmacy, drug regulatory affairs, and academic positions.</p>
                <h3>Manufacturing &amp; Quality</h3>
                <p>B.Pharm graduates are placed in production, quality assurance (QA), and quality control (QC) roles at top pharmaceutical manufacturing companies, ensuring GMP compliance and product excellence.</p>
                <h3>Clinical &amp; Research</h3>
                <p>Pharm.D and M.Pharm graduates secure positions in clinical pharmacy, pharmacovigilance, clinical research organisations (CROs), and drug information centres at leading hospitals and research institutions.</p>
                <h3>Regulatory &amp; Marketing</h3>
                <p>Graduates with an aptitude for regulatory sciences and business are placed in drug regulatory affairs, medical writing, pharmaceutical marketing, and medical representative roles across India.</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img src="https://placehold.co/600x450/e2e8f0/334155?text=JKKN+Pharmacy+Lab" alt="JKKN College of Pharmacy advanced pharmaceutical laboratory with modern instruments" width={600} height={450} loading="lazy" />
                </div>
                <figcaption className="cp-about__img-caption">JKKN College of Pharmacy — Advanced pharmaceutical research laboratory</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="programmes" aria-label="Pharmacy programmes offered">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmacy Programmes Offered
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                PCI-approved diploma, undergraduate, postgraduate, and doctoral pharmacy programmes
              </p>
            </div>
            <div className="cp-programmes__grid">
              {programmes.map((prog, i) => (
                <article key={prog.name} className={`cp-programme-card reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}>
                  <div className="cp-programme-card__icon" aria-hidden="true">{prog.icon}</div>
                  <h3 className="cp-programme-card__name">{prog.name}</h3>
                  <p className="cp-programme-card__duration">{prog.duration}</p>
                  <p className="cp-programme-card__desc">{prog.desc}</p>
                  <div className="cp-programme-card__tags">
                    {prog.tags.map((tag) => (<span key={tag} className="cp-programme-card__tag">{tag}</span>))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Recruiters ===== */}
        <section style={{ padding: "80px 0" }} id="recruiters" aria-label="Pharmacy recruiters">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                150+ Pharmaceutical Recruiters Trust JKKN
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Leading pharma manufacturers, hospitals, CROs, and regulatory bodies that recruit our pharmacy graduates
              </p>
            </div>
            <div className="cp-recruiters__grid reveal">
              {recruiters.map((name) => (
                <div key={name} className="cp-recruiter-logo">
                  <img src={`https://placehold.co/150x36/e2e8f0/334155?text=${encodeURIComponent(name)}`} alt={name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: Placement Process ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="process" aria-label="Pharmacy placement process">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmacy Placement Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured pathway from classroom to pharmaceutical career
              </p>
            </div>
            <div className="cp-process__grid reveal">
              {processSteps.map((step, i) => (
                <div key={step.title} className="cp-process-step">
                  <div className="cp-process-step__circle">{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: Testimonials ===== */}
        <section style={{ padding: "80px 0" }} id="testimonials" aria-label="Pharmacy student placement testimonials">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                What Our Pharmacy Graduates Say
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Real experiences from B.Pharm, M.Pharm, and Pharm.D alumni who built successful pharmaceutical careers
              </p>
            </div>
            <div className="cp-testimonials__grid">
              {testimonials.map((t, i) => (
                <article key={t.name} className={`cp-testimonial reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}>
                  <div className="cp-testimonial__stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <blockquote className="cp-testimonial__text">{t.text}</blockquote>
                  <div className="cp-testimonial__author">
                    <img src={`https://placehold.co/44x44/e2e8f0/334155?text=${t.initials}`} alt={`Photo of ${t.name}`} className="cp-testimonial__avatar" width={44} height={44} loading="lazy" />
                    <div>
                      <span className="cp-testimonial__name">{t.name}</span><br />
                      <span className="cp-testimonial__role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: Training ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="training" aria-label="Pharmacy pre-placement training">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmaceutical Skills Training
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Industry-specific training to prepare pharmacy graduates for manufacturing, clinical, and regulatory careers
              </p>
            </div>
            <div className="cp-training__grid">
              <div className="cp-training__features reveal">
                {trainingCards.map((card) => (
                  <div key={card.title} className="cp-training-card">
                    <div className="cp-training-card__icon" aria-hidden="true">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-training__img">
                  <img src="https://placehold.co/540x600/e2e8f0/334155?text=Pharma+Lab+Training" alt="JKKN pharmacy students conducting experiments in the pharmaceutical research laboratory" width={540} height={600} loading="lazy" />
                </div>
                <figcaption className="cp-training__img-caption">Students during a pharmaceutical quality control training session</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section style={{ padding: "80px 0" }} id="faculty" aria-label="Pharmacy placement cell faculty">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmacy Placement Faculty
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Dedicated faculty connecting pharmacy graduates with the pharmaceutical industry
              </p>
            </div>
            <div className="cp-faculty__grid">
              {faculty.map((f, i) => (
                <article key={f.name} className={`cp-faculty-card reveal${i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""}`}>
                  <div className="cp-faculty-card__img-wrap">
                    <img src={`https://placehold.co/400x220/e2e8f0/334155?text=${encodeURIComponent(f.name)}`} alt={`${f.name} — ${f.designation}, ${f.college}`} width={400} height={220} loading="lazy" />
                    <span className="cp-faculty-card__badge">{f.badge}</span>
                  </div>
                  <div className="cp-faculty-card__body">
                    <h3 className="cp-faculty-card__name">{f.name}</h3>
                    <p className="cp-faculty-card__designation">{f.designation}</p>
                    <p className="cp-faculty-card__college">{f.college}</p>
                    <div className="cp-faculty-card__qualifications">
                      {f.qualifications.map((q) => (<span key={q} className="cp-faculty-card__qual-tag">{q}</span>))}
                    </div>
                    <div className="cp-faculty-card__contact">
                      <a href={`mailto:${f.email}`} className="cp-faculty-card__contact-link" title="Email" aria-label={`Email ${f.name}`}>&#9993;</a>
                      <a href={`tel:${f.phone}`} className="cp-faculty-card__contact-link" title="Phone" aria-label={`Call ${f.name}`}>&#9742;</a>
                      <a href="https://www.linkedin.com/" className="cp-faculty-card__contact-link" title="LinkedIn" aria-label={`LinkedIn profile of ${f.name}`} target="_blank" rel="noopener noreferrer">in</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 10: FAQ ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="faq" aria-label="Frequently asked questions about JKKN Pharmacy placements">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">FAQ</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pharmacy Placement FAQs
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Commonly asked questions about placements at JKKN College of Pharmacy
              </p>
            </div>
            <div className="cp-faq-list reveal">
              {faqs.map((faq, i) => (
                <div key={i} className={`cp-faq-item${activeFaq === i ? " active" : ""}`}>
                  <button className="cp-faq-question" aria-expanded={activeFaq === i} onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <span className="cp-faq-toggle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5}>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="cp-faq-answer" role="region">
                    <div className="cp-faq-answer__inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 11: CTA ===== */}
        <section className="cp-cta" id="contact" aria-label="Contact the Pharmacy Placement Cell">
          <div className="cp-cta__inner">
            <h2>Ready to Launch Your Pharmaceutical Career?</h2>
            <p>Connect with the JKKN Pharmacy Placement Cell for campus recruitment opportunities, industrial training enquiries, and career guidance.</p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">&#9993;{" "}<a href="mailto:tpo.pharmacy@jkkn.ac.in">tpo.pharmacy@jkkn.ac.in</a></div>
              <div className="cp-cta__contact-item">&#9742;{" "}<a href="tel:+919876543213">+91 98765 43213</a></div>
              <div className="cp-cta__contact-item">&#127760;{" "}<a href="https://pharmacy.jkkn.ac.in/" target="_blank" rel="noopener noreferrer">pharmacy.jkkn.ac.in</a></div>
            </div>
            <div className="cp-cta__actions">
              <a href="https://pharmacy.jkkn.ac.in/placements/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Apply for Placement Support</a>
              <Link href="/placements" className="btn btn-outline">&#8592; Back to All Colleges</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
