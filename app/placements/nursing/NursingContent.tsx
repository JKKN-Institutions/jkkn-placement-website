"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../college-page.css";

/* ===== Data ===== */
const programmes = [
  {
    icon: "\u{1F9D1}\u200D\u2695\uFE0F",
    name: "General Nursing and Midwifery (GNM)",
    duration: "3.5 Years (3 + 6 Months Internship)",
    desc: "Diploma programme covering general nursing care, midwifery, community health, and basic medical-surgical nursing with hospital clinical training.",
    tags: ["INC Approved", "Diploma", "Clinical"],
  },
  {
    icon: "\u{1F393}",
    name: "B.Sc. Nursing",
    duration: "4 Years",
    desc: "Comprehensive undergraduate nursing programme with clinical rotations in medical-surgical, paediatric, obstetric, psychiatric, community, and ICU nursing.",
    tags: ["INC Approved", "93% Placement", "Clinical Rotations"],
  },
  {
    icon: "\u{1F4DA}",
    name: "Post Basic B.Sc. Nursing",
    duration: "2 Years",
    desc: "Bridge programme for GNM-qualified nurses to upgrade to B.Sc. Nursing, enhancing career prospects and eligibility for M.Sc. Nursing admission.",
    tags: ["INC Approved", "Career Upgrade"],
  },
  {
    icon: "\u{1F489}",
    name: "M.Sc. Nursing \u2014 Medical Surgical",
    duration: "2 Years",
    desc: "Advanced specialisation in adult medical-surgical nursing with focus on critical care, perioperative nursing, and evidence-based clinical practice.",
    tags: ["INC Approved", "Critical Care"],
  },
  {
    icon: "\u{1F930}",
    name: "M.Sc. Nursing \u2014 OBG Nursing",
    duration: "2 Years",
    desc: "Specialisation in obstetrics and gynaecological nursing covering maternal care, high-risk pregnancy management, neonatal care, and reproductive health.",
    tags: ["INC Approved", "Maternal Care"],
  },
  {
    icon: "\u{1F476}",
    name: "M.Sc. Nursing \u2014 Child Health",
    duration: "2 Years",
    desc: "Advanced training in paediatric nursing, neonatal intensive care (NICU), child development, and adolescent health nursing.",
    tags: ["INC Approved", "Paediatric"],
  },
];

const recruiters = [
  "Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "MIOT Hospitals",
  "Kauvery Hospital", "Narayana Health", "Max Healthcare", "KMCH",
  "Meenakshi Mission", "PSG Hospitals", "Sri Ramachandra", "Medanta",
  "Aster DM", "NMC Healthcare", "Saudi German", "Hamad Medical",
  "NHS UK", "Parkway SG",
];

const processSteps = [
  { title: "Registration", desc: "Final-year B.Sc./GNM/M.Sc. Nursing students register with the placement cell" },
  { title: "Clinical Assessment", desc: "Nursing competency evaluation, clinical log review, and skills check-off" },
  { title: "Career Counselling", desc: "India vs international, hospital vs community, speciality preferences mapping" },
  { title: "Pre-Placement Training", desc: "Interview skills, clinical viva, OET/licensing exam prep for international aspirants" },
  { title: "Campus Drives", desc: "On-campus recruitment by hospitals, healthcare chains, and international agencies" },
  { title: "Offer & Onboarding", desc: "Offer acceptance, documentation support, and smooth transition to practice" },
];

const testimonials = [
  {
    text: "The placement cell connected me with Apollo Hospitals during the campus drive. The clinical rotations at our affiliated hospital gave me the confidence to perform well in the practical assessment. I am now an ICU staff nurse.",
    name: "Priya S.",
    role: "B.Sc. Nursing 2024 \u2014 ICU Nurse, Apollo Hospitals",
    initials: "PS",
  },
  {
    text: "I always dreamed of working abroad. The placement cell\u2019s OET preparation sessions and HAAD exam guidance helped me secure a nursing position at NMC Healthcare in Abu Dhabi. The support was incredible from start to finish.",
    name: "Revathi K.",
    role: "B.Sc. Nursing 2023 \u2014 Staff Nurse, NMC Healthcare, UAE",
    initials: "RK",
  },
  {
    text: "After completing M.Sc. Nursing in Medical Surgical specialisation, I was placed as a nursing lecturer at a reputed nursing college. The placement cell guided me on teaching demonstration preparation and CV building for academic roles.",
    name: "Lavanya M.",
    role: "M.Sc. Nursing 2023 \u2014 Nursing Lecturer",
    initials: "LM",
  },
  {
    text: "Fortis Healthcare recruited from our campus, and I was selected as an emergency department nurse. The simulation lab training and emergency nursing practical sessions at JKKN College of Nursing gave me a real advantage.",
    name: "Dinesh V.",
    role: "B.Sc. Nursing 2024 \u2014 Emergency Nurse, Fortis",
    initials: "DV",
  },
  {
    text: "The government exam coaching provided by the placement cell helped me crack the AIIMS nursing officer exam. For students aiming for government positions, JKKN College of Nursing\u2019s guidance is truly valuable.",
    name: "Suganya K.",
    role: "B.Sc. Nursing 2023 \u2014 Nursing Officer, AIIMS",
    initials: "SK",
  },
  {
    text: "My GNM training at JKKN College of Nursing gave me strong clinical foundations. I was placed at Kauvery Hospital as a ward nurse and am now pursuing Post Basic B.Sc. Nursing to further advance my career.",
    name: "Meera J.",
    role: "GNM 2024 \u2014 Ward Nurse, Kauvery Hospital",
    initials: "MJ",
  },
];

const trainingCards = [
  { icon: "\u{1F3E5}", title: "Clinical Rotations", desc: "Extensive hospital rotations covering medical-surgical, paediatric, obstetric, ICU, emergency, community, and psychiatric nursing." },
  { icon: "\u{1F4AC}", title: "Patient Communication", desc: "Training in therapeutic communication, patient education, counselling skills, and family interaction in clinical settings." },
  { icon: "\u{1F3A4}", title: "Mock Clinical Interviews", desc: "Simulated hospital interview rounds including clinical viva, practical demonstrations, and scenario-based assessments." },
  { icon: "\u{1F310}", title: "OET & Licensing Prep", desc: "OET (Occupational English Test) coaching and preparation for HAAD, DHA, MOH, and Prometric licensing exams for international aspirants." },
  { icon: "\u{1F4C4}", title: "Govt. Exam Coaching", desc: "Guidance for AIIMS, PGI, JIPMER, ESI, railway, and state government staff nurse recruitment examinations." },
  { icon: "\u{1F9D1}\u200D\u2695\uFE0F", title: "Simulation Lab", desc: "High-fidelity simulation training for emergency care, IV cannulation, catheterisation, CPR, and advanced clinical procedures." },
];

const faculty = [
  {
    name: "Mrs. T. Deepa",
    designation: "Training & Placement Officer",
    college: "JKKN College of Nursing",
    qualifications: ["M.Sc. Nursing", "B.Sc. Nursing", "9+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.nursing@jkkn.ac.in",
    phone: "+919876543214",
    initials: "TD",
  },
  {
    name: "Mrs. G. Saranya",
    designation: "Clinical Placement Coordinator",
    college: "JKKN College of Nursing",
    qualifications: ["M.Sc. Nursing (Med-Surg)", "B.Sc. Nursing", "7+ Yrs Exp."],
    badge: "Clinical Placement Coordinator",
    email: "clinical.nursing@jkkn.ac.in",
    phone: "+919876543222",
    initials: "GS",
  },
  {
    name: "Mrs. R. Jayanthi",
    designation: "International Placement Advisor",
    college: "JKKN College of Nursing",
    qualifications: ["M.Sc. Nursing (OBG)", "OET Trainer", "8+ Yrs Exp."],
    badge: "International Placement Advisor",
    email: "international.nursing@jkkn.ac.in",
    phone: "+919876543223",
    initials: "RJ",
  },
];

const faqs = [
  {
    q: "What is the placement rate for B.Sc. Nursing graduates at JKKN College of Nursing Institute?",
    a: "JKKN College of Nursing maintains a 93% placement rate for B.Sc. Nursing graduates, with students placed at leading multi-speciality hospitals, government hospitals, and international healthcare organisations across India and abroad.",
  },
  {
    q: "Which hospitals recruit nursing graduates from JKKN College of Nursing Institute?",
    a: "Top recruiters include Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, MIOT Hospitals, Kauvery Hospital, Narayana Health, Max Healthcare, KMCH, Meenakshi Mission Hospital, and international employers like NMC Healthcare (UAE), Saudi German Hospital, Hamad Medical Corporation (Qatar), NHS UK, and Parkway Pantai (Singapore).",
  },
  {
    q: "What is the highest salary package offered to nursing graduates?",
    a: "The highest salary package is \u20B97 LPA (inclusive of international placements), with an average package of \u20B93.5 LPA for B.Sc. Nursing graduates in Indian hospitals. International nursing positions in Gulf countries, Singapore, and UK offer significantly higher packages.",
  },
  {
    q: "What nursing programmes are offered at JKKN College of Nursing Institute?",
    a: "The institute offers GNM, B.Sc. Nursing, Post Basic B.Sc. Nursing, and M.Sc. Nursing with specialisations in Medical Surgical Nursing, Obstetrics & Gynaecological Nursing, and Child Health Nursing \u2014 all approved by the Indian Nursing Council (INC).",
  },
  {
    q: "Are there international nursing placement opportunities?",
    a: "Yes. The placement cell facilitates international nursing opportunities in UAE, Saudi Arabia, Qatar, Oman, Singapore, UK, and Ireland. Graduates receive support for licensing exams including HAAD, DHA, MOH, Prometric, and OET (Occupational English Test) preparation.",
  },
  {
    q: "Does the nursing placement cell provide government exam coaching?",
    a: "Yes. The placement cell provides coaching and guidance for AIIMS, PGI, JIPMER, railway nursing, ESI, state government staff nurse recruitments, and TNPSC nursing officer exams. Regular mock tests and study material are provided.",
  },
  {
    q: "What clinical training do nursing students receive?",
    a: "Students receive extensive clinical training through rotations at affiliated multi-speciality hospitals covering medical-surgical, paediatric, obstetric, ICU, emergency, community health, and psychiatric nursing with supervised patient care experience totalling 1,500+ clinical hours.",
  },
  {
    q: "Can M.Sc. Nursing graduates get academic placements?",
    a: "Yes. M.Sc. Nursing graduates are placed in nursing faculty positions at nursing colleges across India, including lecturer, tutor, and clinical instructor roles. The placement cell actively connects postgraduate nurses with academic institutions seeking qualified nursing educators.",
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
export default function NursingContent() {
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
            <span>Nursing</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKN Nursing Placement Cell</div>
              <h1>Shape Your <span>Nursing Career</span> with Clinical Excellence</h1>
              <p className="cp-hero__tagline">
                JKKN College of Nursing prepares B.Sc. Nursing, M.Sc. Nursing, and GNM graduates for successful healthcare careers across India&apos;s top hospitals and international nursing opportunities.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">View Programmes &#8595;</a>
                <a href="#contact" className="btn btn-outline">Contact Placement Cell</a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan target={93} suffix="%" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={100} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Hospital Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={7} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={2000} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <span className="cp-hero__stat-value">India + International</span>
                <span className="cp-hero__stat-label">Placement Reach</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan target={93} suffix="%" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={100} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;3.5 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;7 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={6} suffix="" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Programmes Offered</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section style={{ padding: "80px 0" }} id="about" aria-label="About the Nursing Placement Cell">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Nursing Placement Cell
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Connecting INC-approved nursing graduates with India&apos;s finest hospitals and international healthcare opportunities
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>The Placement Cell at JKKN College of Nursing is dedicated to ensuring every nursing graduate transitions smoothly from academic training to professional healthcare practice. With INC-approved programmes and extensive clinical rotations, our graduates are sought after by hospitals across India.</p>
                <p>Our placement network spans multi-speciality hospitals, government healthcare facilities, community health centres, and international nursing opportunities in Gulf countries, Singapore, UK, and Ireland.</p>
                <h3>Hospital Placements</h3>
                <p>B.Sc. Nursing graduates secure staff nurse, ICU nurse, and specialised nursing positions at Apollo, Fortis, Manipal, MIOT, Kauvery, and 100+ other hospitals across Tamil Nadu and India.</p>
                <h3>International Opportunities</h3>
                <p>The placement cell facilitates overseas nursing careers with support for HAAD, DHA, MOH, Prometric, and OET exam preparation. Gulf countries, Singapore, and UK are primary international destinations.</p>
                <h3>Government &amp; Academic Careers</h3>
                <p>Graduates are guided for government nursing exams (AIIMS, PGI, JIPMER, state recruitments) and M.Sc. Nursing graduates are placed in nursing faculty positions at colleges across India.</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img src="https://placehold.co/600x450/e2e8f0/334155?text=Nursing+Institute" alt="JKKN College of Nursing campus with clinical training facilities" width={600} height={450} loading="lazy" />
                </div>
                <figcaption className="cp-about__img-caption">JKKN College of Nursing — Clinical training facility</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="programmes" aria-label="Nursing programmes offered">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Nursing Programmes Offered
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                INC-approved diploma, undergraduate, and postgraduate nursing programmes with clinical placement support
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
        <section style={{ padding: "80px 0" }} id="recruiters" aria-label="Nursing recruiters">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                100+ Hospitals Recruit Our Nurses
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Leading multi-speciality hospitals, government facilities, and international healthcare organisations
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="process" aria-label="Nursing placement process">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Nursing Placement Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured pathway from clinical training to professional nursing practice
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
        <section style={{ padding: "80px 0" }} id="testimonials" aria-label="Nursing student placement testimonials">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                What Our Nursing Graduates Say
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Real experiences from B.Sc. Nursing, GNM, and M.Sc. Nursing alumni placed across India and abroad
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="training" aria-label="Nursing pre-placement training">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Clinical &amp; Professional Training
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Specialised training bridging academic nursing education and professional healthcare practice
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
                  <img src="https://placehold.co/540x600/e2e8f0/334155?text=Nursing+Clinical+Training" alt="Nursing students practising clinical skills in the simulation laboratory" width={540} height={600} loading="lazy" />
                </div>
                <figcaption className="cp-training__img-caption">Students during a clinical simulation training session</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section style={{ padding: "80px 0" }} id="faculty" aria-label="Nursing placement cell faculty">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Nursing Placement Faculty
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Dedicated nursing educators guiding graduates towards successful healthcare careers
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="faq" aria-label="Frequently asked questions about nursing placements">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">FAQ</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Nursing Placement FAQs
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Commonly asked questions about placements at JKKN College of Nursing
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
        <section className="cp-cta" id="contact" aria-label="Contact the Nursing Placement Cell">
          <div className="cp-cta__inner">
            <h2>Ready to Begin Your Nursing Career?</h2>
            <p>Connect with the JKKN Nursing Placement Cell for hospital placements, international opportunities, and career guidance.</p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">&#9993;{" "}<a href="mailto:tpo.nursing@jkkn.ac.in">tpo.nursing@jkkn.ac.in</a></div>
              <div className="cp-cta__contact-item">&#9742;{" "}<a href="tel:+919876543214">+91 98765 43214</a></div>
              <div className="cp-cta__contact-item">&#127760;{" "}<a href="https://nursing.sresakthimayeil.jkkn.ac.in/" target="_blank" rel="noopener noreferrer">nursing.sresakthimayeil.jkkn.ac.in</a></div>
            </div>
            <div className="cp-cta__actions">
              <a href="https://nursing.sresakthimayeil.jkkn.ac.in/placements/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Apply for Placement Support</a>
              <Link href="/placements" className="btn btn-outline">&#8592; Back to All Colleges</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
