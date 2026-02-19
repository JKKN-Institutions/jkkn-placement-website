"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../college-page.css";

/* ===== Data ===== */
const programmes = [
  {
    icon: "\u{1F4BB}",
    name: "B.E. Computer Science and Engineering (CSE)",
    duration: "4 Years",
    desc: "Core computer science with specialisations in full-stack development, cloud computing, cybersecurity, and software engineering. Highest placement branch.",
    tags: ["AICTE Approved", "95%+ Placement", "IT Focus"],
  },
  {
    icon: "\u{1F916}",
    name: "B.Tech Artificial Intelligence & Data Science (AI&DS)",
    duration: "4 Years",
    desc: "Cutting-edge programme covering machine learning, deep learning, big data analytics, NLP, and computer vision with industry-standard tools.",
    tags: ["AICTE Approved", "High Demand", "AI/ML"],
  },
  {
    icon: "\u{1F4E1}",
    name: "B.E. Electronics & Communication Engineering (ECE)",
    duration: "4 Years",
    desc: "Covers VLSI design, embedded systems, IoT, signal processing, and telecommunications. Dual placement path \u2014 IT and core electronics.",
    tags: ["AICTE Approved", "IT + Core"],
  },
  {
    icon: "\u26A1",
    name: "B.E. Electrical & Electronics Engineering (EEE)",
    duration: "4 Years",
    desc: "Power systems, renewable energy, control systems, and industrial automation with placements in power, manufacturing, and IT sectors.",
    tags: ["AICTE Approved", "Power + IT"],
  },
  {
    icon: "\u2699\uFE0F",
    name: "B.E. Mechanical Engineering",
    duration: "4 Years",
    desc: "Design, manufacturing, thermal engineering, and CAD/CAM with placements at automotive, aerospace, and heavy engineering companies.",
    tags: ["AICTE Approved", "Core Engg"],
  },
  {
    icon: "\u{1F3D7}",
    name: "B.E. Civil Engineering",
    duration: "4 Years",
    desc: "Structural engineering, geotechnical, transportation, and construction management with placements in infrastructure and real estate sectors.",
    tags: ["AICTE Approved", "Infrastructure"],
  },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant",
  "HCL Technologies", "Accenture", "Capgemini", "Tech Mahindra",
  "Zoho", "Freshworks", "L&T", "Ashok Leyland",
  "TVS Motor", "Saint-Gobain", "Brakes India", "Caterpillar",
  "Wheels India", "Mphasis", "Mindtree", "CTS",
  "Hexaware", "Sutherland", "KPIT Technologies", "Hyundai",
];

const processSteps = [
  { title: "Registration", desc: "Pre-final & final year students register with the T&P cell" },
  { title: "Skill Assessment", desc: "Aptitude, coding, and technical skill evaluation tests" },
  { title: "Training Phase", desc: "Aptitude, coding bootcamp, soft skills, and mock interviews" },
  { title: "Resume Prep", desc: "ATS-friendly CV creation with project portfolio review" },
  { title: "Campus Drives", desc: "On-campus recruitment by IT, core, and startup companies" },
  { title: "Offer & Joining", desc: "Offer negotiation, joining formalities, and alumni network access" },
];

const testimonials = [
  {
    text: "The coding bootcamp organised by the placement cell was a game-changer. I cleared TCS NQT in my first attempt and received my offer letter within two weeks. The DSA training and mock tests prepared me perfectly.",
    name: "Karthik R.",
    role: "B.E. CSE 2024 \u2014 Placed at TCS",
    initials: "KR",
  },
  {
    text: "As a Mechanical Engineering graduate, I was worried about getting core placements. The T&P cell arranged exclusive drives with Ashok Leyland and TVS Motor. I got selected at Ashok Leyland through the campus drive.",
    name: "Surya M.",
    role: "B.E. Mech 2024 \u2014 Placed at Ashok Leyland",
    initials: "SM",
  },
  {
    text: "The AI&DS programme at JKKNCET gave me exposure to real-world machine learning projects. Zoho recruited from our batch, and the placement cell\u2019s technical interview preparation made all the difference.",
    name: "Divya P.",
    role: "B.Tech AI&DS 2024 \u2014 Placed at Zoho",
    initials: "DP",
  },
  {
    text: "My summer internship at Infosys through JKKNCET\u2019s placement cell converted into a pre-placement offer. The internship programme gave me hands-on experience in cloud computing before I even graduated.",
    name: "Vignesh G.",
    role: "B.E. CSE 2023 \u2014 PPO at Infosys",
    initials: "VG",
  },
  {
    text: "ECE students often think placements are limited, but JKKNCET proved otherwise. I got placed at both an IT company and a core electronics firm. I chose HCL Technologies for the career growth path.",
    name: "Aishwarya N.",
    role: "B.E. ECE 2024 \u2014 Placed at HCL Technologies",
    initials: "AN",
  },
  {
    text: "The GATE preparation support from our faculty combined with the placement cell\u2019s guidance helped me secure an M.Tech seat at NIT Trichy. For those aiming for higher studies, JKKNCET provides excellent mentorship.",
    name: "Pradeep R.",
    role: "B.E. EEE 2023 \u2014 M.Tech at NIT Trichy",
    initials: "PR",
  },
];

const trainingCards = [
  { icon: "\u{1F9E0}", title: "Aptitude & Reasoning", desc: "Quantitative aptitude, logical reasoning, and data interpretation covering TCS NQT, Infosys SP, and other test patterns." },
  { icon: "\u{1F4BB}", title: "Coding Bootcamp", desc: "DSA, competitive programming, and full-stack development training with LeetCode-style practice sessions." },
  { icon: "\u{1F4AC}", title: "Soft Skills & GD", desc: "English communication, group discussion practice, email etiquette, and professional presentation skills." },
  { icon: "\u{1F3A4}", title: "Mock Interviews", desc: "Technical and HR mock interviews with industry professionals simulating real company interview rounds." },
  { icon: "\u{1F4C4}", title: "Resume & Portfolio", desc: "ATS-friendly resume creation, LinkedIn profile optimisation, and GitHub project portfolio review." },
  { icon: "\u{1F528}", title: "Tech Workshops", desc: "Hands-on workshops in cloud computing, DevOps, AI/ML, IoT, and AutoCAD for domain-specific skills." },
];

const faculty = [
  {
    name: "Prof. R. Kumar",
    designation: "Training & Placement Officer",
    college: "JKKN College of Engineering and Technology",
    qualifications: ["M.E.", "B.E.", "12+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.engg@jkkn.ac.in",
    phone: "+919876543212",
    initials: "RK",
  },
  {
    name: "Prof. S. Lakshmi",
    designation: "Placement Coordinator (IT)",
    college: "JKKN College of Engineering and Technology",
    qualifications: ["M.Tech (CSE)", "B.Tech", "9+ Yrs Exp."],
    badge: "Placement Coordinator \u2014 IT",
    email: "placement.it@jkkn.ac.in",
    phone: "+919876543218",
    initials: "SL",
  },
  {
    name: "Prof. M. Rajan",
    designation: "Placement Coordinator (Core)",
    college: "JKKN College of Engineering and Technology",
    qualifications: ["M.E. (Mech)", "B.E.", "10+ Yrs Exp."],
    badge: "Placement Coordinator \u2014 Core",
    email: "placement.core@jkkn.ac.in",
    phone: "+919876543219",
    initials: "MR",
  },
];

const faqs = [
  {
    q: "What is the placement rate for engineering graduates at JKKNCET?",
    a: "JKKN College of Engineering and Technology maintains a 90% overall placement rate across all branches. CSE and AI&DS branches achieve over 95% placement, with students placed at top IT companies, core engineering firms, and startups.",
  },
  {
    q: "Which companies recruit from JKKN College of Engineering and Technology?",
    a: "Top recruiters include TCS, Infosys, Wipro, Cognizant, HCL Technologies, Accenture, Capgemini, Tech Mahindra, Zoho, Freshworks, L&T, Ashok Leyland, TVS Motor Company, Saint-Gobain, Caterpillar, and 200+ other companies across IT and core engineering sectors.",
  },
  {
    q: "What is the highest salary package offered to JKKN Engineering graduates?",
    a: "The highest salary package offered to JKKN Engineering graduates is \u20B912 LPA, with an average package of \u20B94.2 LPA. CSE and AI&DS graduates typically receive higher packages from IT product companies and startups.",
  },
  {
    q: "What engineering branches are offered at JKKNCET?",
    a: "JKKNCET offers B.E. in Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Electrical and Electronics Engineering (EEE), Mechanical Engineering, Civil Engineering, and B.Tech in Artificial Intelligence and Data Science (AI&DS).",
  },
  {
    q: "Does JKKNCET provide internship opportunities?",
    a: "Yes. JKKNCET facilitates industry internships starting from the third year. The placement cell has tie-ups with IT companies, manufacturing firms, and startups for summer and semester-long internships. Over 40% of internships convert to pre-placement offers (PPOs).",
  },
  {
    q: "What pre-placement training does the engineering placement cell offer?",
    a: "The placement cell offers aptitude and reasoning training, coding bootcamps (DSA, competitive programming), soft skills and communication workshops, mock interviews with industry professionals, ATS-friendly resume building, group discussion practice, and hands-on technical workshops in cloud, DevOps, AI/ML, and IoT.",
  },
  {
    q: "Are there core engineering placements or only IT?",
    a: "JKKNCET provides both IT and core engineering placements. Core recruiters include L&T, Ashok Leyland, TVS Motor Company, Saint-Gobain, Brakes India, Wheels India, Caterpillar, and Hyundai for Mechanical, Civil, ECE, and EEE branches. IT placements are available for all branches.",
  },
  {
    q: "Does JKKNCET support higher education and competitive exam preparation?",
    a: "Yes. The placement cell supports students preparing for GATE, GRE, CAT, and other competitive exams through study groups, coaching guidance, and faculty mentorship. Students pursuing M.E./M.Tech at NITs/IITs or MBA at top B-schools receive dedicated counselling and preparation support.",
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
export default function EngineeringContent() {
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
            <span>Engineering &amp; Technology</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKNCET Placement Cell</div>
              <h1>Build Your <span>Engineering Career</span> from Campus to Corporate</h1>
              <p className="cp-hero__tagline">
                JKKN College of Engineering and Technology connects B.E./B.Tech graduates with 200+ top IT companies, core engineering firms, and startups through a dedicated placement cell and industry-aligned training.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">View Programmes &#8595;</a>
                <a href="#contact" className="btn btn-outline">Contact Placement Cell</a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan target={90} suffix="%" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={200} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={12} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={5000} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <CounterSpan target={6} suffix="" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Engineering Branches</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan target={90} suffix="%" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={200} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;4.2 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;12 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={6} suffix="" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Branches Offered</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section style={{ padding: "80px 0" }} id="about" aria-label="About the Engineering Placement Cell">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Engineering Placement Cell
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Connecting AICTE-approved engineering graduates with India&apos;s top technology and manufacturing employers
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>The Training &amp; Placement Cell at JKKN College of Engineering and Technology is dedicated to bridging the gap between academic learning and industry requirements. Our comprehensive placement ecosystem supports students from pre-final year through graduation and beyond.</p>
                <p>With AICTE-approved programmes, NBA-accreditation readiness, and a curriculum aligned with industry standards, JKKNCET graduates are recruited by 200+ companies across IT, manufacturing, automotive, and infrastructure sectors.</p>
                <h3>IT &amp; Software Focus</h3>
                <p>CSE and AI&amp;DS students receive specialised training in data structures, algorithms, competitive programming, and full-stack development — making them job-ready for top IT companies and product startups.</p>
                <h3>Core Engineering Strength</h3>
                <p>ECE, EEE, Mechanical, and Civil students are trained through industrial visits, workshop practice, and project-based learning with placements at L&amp;T, Ashok Leyland, TVS, and other core recruiters.</p>
                <h3>Internships &amp; PPOs</h3>
                <p>Over 40% of placed students receive pre-placement offers (PPOs) through industry internships facilitated by the placement cell starting from the third year.</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img src="https://placehold.co/600x450/e2e8f0/334155?text=JKKN+Engineering+Campus" alt="JKKN College of Engineering and Technology campus with modern laboratories and workshops" width={600} height={450} loading="lazy" />
                </div>
                <figcaption className="cp-about__img-caption">JKKN College of Engineering and Technology — Modern campus with advanced labs</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="programmes" aria-label="Engineering programmes offered">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Engineering Programmes Offered
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                AICTE-approved undergraduate engineering programmes with dedicated placement support
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
        <section style={{ padding: "80px 0" }} id="recruiters" aria-label="Engineering recruiters">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                200+ Companies Recruit from JKKNCET
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Leading IT companies, manufacturing giants, and startups that hire our engineering graduates
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="process" aria-label="Engineering placement process">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Engineering Placement Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured 6-step process from registration to offer acceptance
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
        <section style={{ padding: "80px 0" }} id="testimonials" aria-label="Engineering student placement testimonials">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                What Our Engineering Graduates Say
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Real experiences from alumni who launched their tech and engineering careers through JKKNCET
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="training" aria-label="Engineering pre-placement training">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Industry-Ready Training Programmes
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Comprehensive training to prepare engineering students for IT, core, and startup placements
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
                  <img src="https://placehold.co/540x600/e2e8f0/334155?text=Coding+Bootcamp" alt="JKKN engineering students in a coding bootcamp session at the computer lab" width={540} height={600} loading="lazy" />
                </div>
                <figcaption className="cp-training__img-caption">Students during a pre-placement coding bootcamp session</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section style={{ padding: "80px 0" }} id="faculty" aria-label="Engineering placement cell faculty">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Engineering Placement Faculty
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Experienced faculty bridging the gap between academics and industry for engineering graduates
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="faq" aria-label="Frequently asked questions about JKKN Engineering placements">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">FAQ</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Engineering Placement FAQs
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Commonly asked questions about placements at JKKN College of Engineering and Technology
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
        <section className="cp-cta" id="contact" aria-label="Contact the Engineering Placement Cell">
          <div className="cp-cta__inner">
            <h2>Ready to Build Your Engineering Career?</h2>
            <p>Connect with the JKKNCET Placement Cell for campus recruitment, internship opportunities, and career guidance.</p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">&#9993;{" "}<a href="mailto:tpo.engg@jkkn.ac.in">tpo.engg@jkkn.ac.in</a></div>
              <div className="cp-cta__contact-item">&#9742;{" "}<a href="tel:+919876543212">+91 98765 43212</a></div>
              <div className="cp-cta__contact-item">&#127760;{" "}<a href="https://engg.jkkn.ac.in/" target="_blank" rel="noopener noreferrer">engg.jkkn.ac.in</a></div>
            </div>
            <div className="cp-cta__actions">
              <a href="https://engg.jkkn.ac.in/placements/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Apply for Placement Support</a>
              <Link href="/placements" className="btn btn-outline">&#8592; Back to All Colleges</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
