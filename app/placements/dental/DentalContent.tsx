"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../college-page.css";

/* ===== Data ===== */
const programmes = [
  {
    icon: "\u{1F9B7}",
    name: "Bachelor of Dental Surgery (BDS)",
    duration: "5 Years (4 + 1 Internship)",
    desc: "Comprehensive undergraduate dental programme covering all branches of dentistry with extensive clinical training at the attached 200-bed hospital.",
    tags: ["DCI Approved", "Clinical Rotations", "CRI Included"],
  },
  {
    icon: "\u{1F393}",
    name: "MDS \u2014 Orthodontics & Dentofacial Orthopaedics",
    duration: "3 Years",
    desc: "Advanced specialisation in teeth alignment, jaw correction, and dentofacial aesthetics with modern bracket systems and clear aligner technology.",
    tags: ["DCI Approved", "High Demand"],
  },
  {
    icon: "\u{1F4AB}",
    name: "MDS \u2014 Oral & Maxillofacial Surgery",
    duration: "3 Years",
    desc: "Surgical training in extractions, jaw fractures, tumour management, implantology, and facial reconstructive procedures.",
    tags: ["DCI Approved", "Surgical"],
  },
  {
    icon: "\u{1F9E8}",
    name: "MDS \u2014 Prosthodontics & Crown Bridge",
    duration: "3 Years",
    desc: "Specialisation in tooth replacement, dentures, crowns, bridges, dental implants, and maxillofacial prosthetics for complete oral rehabilitation.",
    tags: ["DCI Approved", "Implantology"],
  },
  {
    icon: "\u{1F52C}",
    name: "MDS \u2014 Conservative Dentistry & Endodontics",
    duration: "3 Years",
    desc: "Advanced training in root canal therapy, tooth restoration, dental biomaterials, and aesthetic dentistry procedures.",
    tags: ["DCI Approved", "Restorative"],
  },
  {
    icon: "\u{1F50D}",
    name: "MDS \u2014 Periodontics",
    duration: "3 Years",
    desc: "Specialisation in gum disease management, surgical periodontics, implantology, and regenerative therapies for supporting structures.",
    tags: ["DCI Approved", "Implants"],
  },
];

const recruiters = [
  "Apollo Hospitals", "Clove Dental", "MIOT Hospitals", "Manipal Hospitals",
  "Kauvery Hospital", "Sabka Dentist", "MyDentist", "Narayana Health",
  "Dr. Agarwals", "Fortis Healthcare", "Max Healthcare", "Dental Planet",
  "Sri Ramachandra", "Meenakshi Mission", "KMC Hospital", "KMCH",
  "PSG Hospitals", "GVN Hospital",
];

const processSteps = [
  { title: "Registration", desc: "Final-year BDS/MDS students register with the dental placement cell" },
  { title: "Clinical Assessment", desc: "Clinical competency evaluation and portfolio review of procedures handled" },
  { title: "Pre-Placement Training", desc: "Interview prep, case presentation skills, and clinical viva training" },
  { title: "Resume & Profile", desc: "Professional CV creation highlighting clinical experience and publications" },
  { title: "Campus Drives", desc: "On-campus recruitment by hospitals, dental chains, and academic institutions" },
  { title: "Offer & Onboarding", desc: "Offer negotiation support and smooth transition to professional practice" },
];

const testimonials = [
  {
    text: "The dental placement cell connected me with Apollo Hospitals during my final year. The mock clinical interviews and case presentation training made me confident. I received my offer within a week of the campus drive.",
    name: "Dr. Ananya K.",
    role: "BDS 2024 \u2014 Placed at Apollo Hospitals",
    initials: "AK",
  },
  {
    text: "After completing my MDS in Orthodontics, the placement cell helped me secure an academic position at a reputed dental college. Their guidance on preparing my CV and teaching demonstration was invaluable.",
    name: "Dr. Rajesh S.",
    role: "MDS Ortho 2023 \u2014 Academic Placement",
    initials: "RS",
  },
  {
    text: "JKKN\u2019s 200-bed dental hospital gave me the clinical exposure that employers look for. Clove Dental hired me because of my hands-on experience with diverse cases during the compulsory rotatory internship.",
    name: "Dr. Preethi M.",
    role: "BDS 2024 \u2014 Placed at Clove Dental",
    initials: "PM",
  },
  {
    text: "The placement cell supported my dream of starting my own clinic. They connected me with dental equipment vendors, helped with business planning, and introduced me to alumni mentors who had already set up practices.",
    name: "Dr. Vijay K.",
    role: "BDS 2022 \u2014 Private Practice, Salem",
    initials: "VK",
  },
  {
    text: "My MDS in Prosthodontics from JKKN opened doors I never expected. The implantology training and clinical cases I handled during my programme made my profile stand out. MIOT Hospitals recruited me as a specialist.",
    name: "Dr. Deepa L.",
    role: "MDS Prostho 2023 \u2014 Placed at MIOT Hospitals",
    initials: "DL",
  },
  {
    text: "The NEET MDS coaching support from our faculty, combined with the placement cell\u2019s guidance on postgraduate career paths, helped me secure an MDS seat in Periodontics. Now placed at Kauvery Hospital.",
    name: "Dr. Sathya N.",
    role: "MDS Perio 2024 \u2014 Placed at Kauvery Hospital",
    initials: "SN",
  },
];

const trainingCards = [
  { icon: "\u{1F9B7}", title: "Clinical Skill Labs", desc: "Hands-on training in phantom head labs and simulation centres for advanced clinical procedures." },
  { icon: "\u{1F4AC}", title: "Patient Communication", desc: "Training in treatment explanation, consent processes, and building patient rapport in clinical settings." },
  { icon: "\u{1F3A4}", title: "Clinical Viva Prep", desc: "Mock viva sessions simulating real interview scenarios with dental professionals and hospital panels." },
  { icon: "\u{1F4C4}", title: "Case Presentation", desc: "Training in preparing and presenting clinical case reports \u2014 a key skill for hospital placements and academics." },
  { icon: "\u{1F393}", title: "NEET MDS Guidance", desc: "Coaching support and study material for NEET MDS preparation alongside final-year coursework." },
  { icon: "\u{1F6E0}", title: "Practice Setup Workshop", desc: "Business planning, equipment selection, and regulatory compliance guidance for private dental clinic setup." },
];

const faculty = [
  {
    name: "Dr. M. Kavitha",
    designation: "Training & Placement Officer",
    college: "JKKN Dental College & Hospital",
    qualifications: ["MDS", "BDS", "10+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.dental@jkkn.ac.in",
    phone: "+919876543211",
    initials: "MK",
  },
  {
    name: "Dr. N. Suresh",
    designation: "Placement Coordinator",
    college: "JKKN Dental College & Hospital",
    qualifications: ["MDS (Ortho)", "BDS", "8+ Yrs Exp."],
    badge: "Placement Coordinator",
    email: "placement.dental@jkkn.ac.in",
    phone: "+919876543216",
    initials: "NS",
  },
  {
    name: "Dr. R. Meena",
    designation: "Clinical Training Lead",
    college: "JKKN Dental College & Hospital",
    qualifications: ["MDS (Prostho)", "BDS", "7+ Yrs Exp."],
    badge: "Clinical Training Lead",
    email: "training.dental@jkkn.ac.in",
    phone: "+919876543217",
    initials: "RM",
  },
];

const faqs = [
  {
    q: "What is the placement rate for BDS graduates at JKKN Dental College & Hospital?",
    a: "JKKN Dental College & Hospital maintains a 92% placement rate for BDS graduates, with students placed across leading dental hospitals, multi-speciality chains, and private clinics across Tamil Nadu and India.",
  },
  {
    q: "Which dental hospitals recruit from JKKN Dental College?",
    a: "Top recruiters include Apollo Hospitals, Clove Dental, MIOT Hospitals, Kauvery Hospital, Manipal Hospitals, Dr. Agarwal\u2019s Healthcare, Sabka Dentist, MyDentist, Narayana Health, and several private dental clinics across Tamil Nadu and India.",
  },
  {
    q: "What MDS specialisations are available at JKKN Dental College?",
    a: "JKKN Dental College offers MDS in Orthodontics & Dentofacial Orthopaedics, Prosthodontics, Oral & Maxillofacial Surgery, Periodontics, Conservative Dentistry & Endodontics, Oral Medicine & Radiology, Oral Pathology & Microbiology, Paediatric & Preventive Dentistry, and Public Health Dentistry.",
  },
  {
    q: "What is the highest salary package offered to JKKN Dental graduates?",
    a: "The highest salary package offered to JKKN Dental graduates is \u20B910 LPA, with an average package of \u20B94.5 LPA for BDS graduates and higher packages for MDS specialisations depending on the discipline and employer.",
  },
  {
    q: "Does JKKN Dental College provide internship support?",
    a: "Yes. JKKN Dental College provides a mandatory one-year compulsory rotatory internship (CRI) at its attached 200-bed dental hospital, along with external internship placements at partner hospitals across Tamil Nadu for additional clinical exposure.",
  },
  {
    q: "What pre-placement training does the dental placement cell offer?",
    a: "The placement cell offers clinical skill enhancement workshops, mock clinical interviews with dental professionals, resume building for healthcare careers, patient communication training, case presentation coaching, and guidance for competitive exams like NEET MDS.",
  },
  {
    q: "Can MDS graduates get academic placements through JKKN?",
    a: "Yes. MDS graduates from JKKN Dental College are placed in academic positions at dental colleges across India, including lecturer and senior lecturer roles. The placement cell actively connects MDS graduates with academic institutions seeking qualified faculty.",
  },
  {
    q: "Does JKKN Dental College support entrepreneurship for dental graduates?",
    a: "Yes. JKKN Dental College provides guidance for setting up private dental clinics, including business planning workshops, dental equipment vendor introductions, regulatory compliance support, and mentorship from successful dental entrepreneurs among the alumni network.",
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
export default function DentalContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  /* Scroll Reveal */
  useEffect(() => {
    const els = mainRef.current?.querySelectorAll(".reveal");
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
            <span className="cp-breadcrumb__sep" aria-hidden="true">
              &#8250;
            </span>
            <span>Dental College</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKN Dental Placement Cell</div>
              <h1>
                Launch Your <span>Dental Career</span> with Confidence
              </h1>
              <p className="cp-hero__tagline">
                JKKN Dental College &amp; Hospital prepares BDS and MDS graduates
                for successful careers across leading hospitals, dental chains, and
                private practice through dedicated placement support and clinical
                training.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">
                  View Programmes &#8595;
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Placement Cell
                </a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan
                  target={92}
                  suffix="%"
                  className="cp-hero__stat-value"
                />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan
                  target={120}
                  suffix="+"
                  className="cp-hero__stat-value"
                />
                <span className="cp-hero__stat-label">Dental Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={10} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan
                  target={2500}
                  suffix="+"
                  className="cp-hero__stat-value"
                />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <CounterSpan
                  target={200}
                  suffix=""
                  className="cp-hero__stat-value"
                />
                <span className="cp-hero__stat-label">Bed Dental Hospital</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan
                target={92}
                suffix="%"
                className="cp-stats-bar__number"
              />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan
                target={120}
                suffix="+"
                className="cp-stats-bar__number"
              />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;4.5 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;10 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan
                target={9}
                suffix=""
                className="cp-stats-bar__number"
              />
              <span className="cp-stats-bar__label">MDS Specialisations</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section
          style={{ padding: "80px 0" }}
          id="about"
          aria-label="About the Dental Placement Cell"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
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
                Dental Placement Cell
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Bridging the gap between clinical education and professional dental
                careers across India
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>
                  The Placement Cell at JKKN Dental College &amp; Hospital is
                  committed to connecting dental graduates with the finest career
                  opportunities across healthcare institutions, dental chains,
                  academic colleges, and research organisations.
                </p>
                <p>
                  With a DCI-approved curriculum, state-of-the-art clinical
                  facilities, and a 200-bed attached dental hospital, our graduates
                  are equipped with the hands-on experience that employers value
                  most.
                </p>
                <h3>Clinical Excellence</h3>
                <p>
                  Students gain extensive clinical exposure through the attached
                  dental hospital, handling real patient cases across all dental
                  specialisations — from orthodontics to oral surgery.
                </p>
                <h3>Industry Connections</h3>
                <p>
                  Our placement cell maintains active relationships with 120+ dental
                  hospitals, multi-speciality clinics, and corporate dental chains
                  across India, ensuring regular campus recruitment drives.
                </p>
                <h3>Career Pathways</h3>
                <p>
                  Beyond hospital placements, we support graduates pursuing private
                  practice setup, academic careers, research fellowships, and
                  competitive exam preparation for NEET MDS and dental licensing.
                </p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img
                    src="https://placehold.co/600x450/e2e8f0/334155?text=JKKN+Dental+Hospital"
                    alt="JKKN Dental College & Hospital campus with 200-bed dental hospital facility"
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <figcaption className="cp-about__img-caption">
                  JKKN Dental College &amp; Hospital — 200-bed attached dental
                  hospital
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section
          style={{ padding: "80px 0", background: "var(--surface-1)" }}
          id="programmes"
          aria-label="Dental programmes offered"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
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
                Dental Programmes Offered
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                DCI-approved undergraduate and postgraduate dental programmes with
                placement support
              </p>
            </div>
            <div className="cp-programmes__grid">
              {programmes.map((prog, i) => (
                <article
                  key={prog.name}
                  className={`cp-programme-card reveal${
                    i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""
                  }`}
                >
                  <div className="cp-programme-card__icon" aria-hidden="true">
                    {prog.icon}
                  </div>
                  <h3 className="cp-programme-card__name">{prog.name}</h3>
                  <p className="cp-programme-card__duration">{prog.duration}</p>
                  <p className="cp-programme-card__desc">{prog.desc}</p>
                  <div className="cp-programme-card__tags">
                    {prog.tags.map((tag) => (
                      <span key={tag} className="cp-programme-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Recruiters ===== */}
        <section
          style={{ padding: "80px 0" }}
          id="recruiters"
          aria-label="Dental recruiters"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
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
                120+ Dental Recruiters Trust JKKN
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Leading hospitals, dental chains, and healthcare organisations that
                recruit our BDS and MDS graduates
              </p>
            </div>
            <div className="cp-recruiters__grid reveal">
              {recruiters.map((name) => (
                <div key={name} className="cp-recruiter-logo">
                  <img
                    src={`https://placehold.co/150x36/e2e8f0/334155?text=${encodeURIComponent(name)}`}
                    alt={name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: Placement Process ===== */}
        <section
          style={{ padding: "80px 0", background: "var(--surface-1)" }}
          id="process"
          aria-label="Dental placement process"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
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
                Dental Placement Process
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                A structured 6-step process ensuring every dental graduate is
                career-ready
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
        <section
          style={{ padding: "80px 0" }}
          id="testimonials"
          aria-label="Dental student placement testimonials"
        >
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
                What Our Dental Graduates Say
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Real experiences from BDS and MDS alumni who launched their careers
                through our placement cell
              </p>
            </div>
            <div className="cp-testimonials__grid">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`cp-testimonial reveal${
                    i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""
                  }`}
                >
                  <div className="cp-testimonial__stars" aria-hidden="true">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <blockquote className="cp-testimonial__text">
                    {t.text}
                  </blockquote>
                  <div className="cp-testimonial__author">
                    <img
                      src={`https://placehold.co/44x44/e2e8f0/334155?text=${t.initials}`}
                      alt={`Photo of ${t.name}`}
                      className="cp-testimonial__avatar"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                    <div>
                      <span className="cp-testimonial__name">{t.name}</span>
                      <br />
                      <span className="cp-testimonial__role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: Training ===== */}
        <section
          style={{ padding: "80px 0", background: "var(--surface-1)" }}
          id="training"
          aria-label="Dental pre-placement training"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
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
                Clinical &amp; Professional Training
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Specialised training programmes to bridge the gap between dental
                education and professional practice
              </p>
            </div>
            <div className="cp-training__grid">
              <div className="cp-training__features reveal">
                {trainingCards.map((card) => (
                  <div key={card.title} className="cp-training-card">
                    <div className="cp-training-card__icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-training__img">
                  <img
                    src="https://placehold.co/540x600/e2e8f0/334155?text=Dental+Clinical+Training"
                    alt="JKKN dental students practising clinical procedures in the simulation lab"
                    width={540}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <figcaption className="cp-training__img-caption">
                  Students during a clinical simulation training session
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section
          style={{ padding: "80px 0" }}
          id="faculty"
          aria-label="Dental placement cell faculty"
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
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
                Dental Placement Faculty
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Dedicated faculty members guiding dental graduates towards successful
                careers
              </p>
            </div>
            <div className="cp-faculty__grid">
              {faculty.map((f, i) => (
                <article
                  key={f.name}
                  className={`cp-faculty-card reveal${
                    i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""
                  }`}
                >
                  <div className="cp-faculty-card__img-wrap">
                    <img
                      src={`https://placehold.co/400x220/e2e8f0/334155?text=${encodeURIComponent(f.name)}`}
                      alt={`${f.name} — ${f.designation}, ${f.college}`}
                      width={400}
                      height={220}
                      loading="lazy"
                    />
                    <span className="cp-faculty-card__badge">{f.badge}</span>
                  </div>
                  <div className="cp-faculty-card__body">
                    <h3 className="cp-faculty-card__name">{f.name}</h3>
                    <p className="cp-faculty-card__designation">
                      {f.designation}
                    </p>
                    <p className="cp-faculty-card__college">{f.college}</p>
                    <div className="cp-faculty-card__qualifications">
                      {f.qualifications.map((q) => (
                        <span key={q} className="cp-faculty-card__qual-tag">
                          {q}
                        </span>
                      ))}
                    </div>
                    <div className="cp-faculty-card__contact">
                      <a
                        href={`mailto:${f.email}`}
                        className="cp-faculty-card__contact-link"
                        title="Email"
                        aria-label={`Email ${f.name}`}
                      >
                        &#9993;
                      </a>
                      <a
                        href={`tel:${f.phone}`}
                        className="cp-faculty-card__contact-link"
                        title="Phone"
                        aria-label={`Call ${f.name}`}
                      >
                        &#9742;
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        className="cp-faculty-card__contact-link"
                        title="LinkedIn"
                        aria-label={`LinkedIn profile of ${f.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        in
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 10: FAQ ===== */}
        <section
          style={{ padding: "80px 0", background: "var(--surface-1)" }}
          id="faq"
          aria-label="Frequently asked questions about JKKN Dental placements"
        >
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
                Dental Placement FAQs
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Commonly asked questions about placements at JKKN Dental College
                &amp; Hospital
              </p>
            </div>
            <div className="cp-faq-list reveal">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`cp-faq-item${activeFaq === i ? " active" : ""}`}
                >
                  <button
                    className="cp-faq-question"
                    aria-expanded={activeFaq === i}
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{faq.q}</span>
                    <span className="cp-faq-toggle" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2.5}
                      >
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
        <section
          className="cp-cta"
          id="contact"
          aria-label="Contact the Dental Placement Cell"
        >
          <div className="cp-cta__inner">
            <h2>Ready to Launch Your Dental Career?</h2>
            <p>
              Connect with the JKKN Dental Placement Cell for campus recruitment
              opportunities, internship enquiries, and career guidance.
            </p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">
                &#9993;{" "}
                <a href="mailto:tpo.dental@jkkn.ac.in">tpo.dental@jkkn.ac.in</a>
              </div>
              <div className="cp-cta__contact-item">
                &#9742;{" "}
                <a href="tel:+919876543211">+91 98765 43211</a>
              </div>
              <div className="cp-cta__contact-item">
                &#127760;{" "}
                <a
                  href="https://dental.jkkn.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dental.jkkn.ac.in
                </a>
              </div>
            </div>
            <div className="cp-cta__actions">
              <a
                href="https://dental.jkkn.ac.in/placements/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Placement Support
              </a>
              <Link href="/placements" className="btn btn-outline">
                &#8592; Back to All Colleges
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
