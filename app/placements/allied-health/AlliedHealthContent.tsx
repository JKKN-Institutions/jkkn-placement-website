"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../college-page.css";

/* ===== Data ===== */
const programmes = [
  {
    icon: "\u{1F52C}",
    name: "B.Sc. Medical Laboratory Technology (MLT)",
    duration: "3 Years + Internship",
    desc: "Training in clinical biochemistry, haematology, microbiology, histopathology, serology, and molecular diagnostics with hands-on lab experience.",
    tags: ["University Affiliated", "High Demand", "Lab-Based"],
  },
  {
    icon: "\u{1F4E1}",
    name: "B.Sc. Radiology & Imaging Technology",
    duration: "3 Years + Internship",
    desc: "Comprehensive training in X-ray, CT scan, MRI, ultrasound, and interventional radiology techniques with clinical rotations at multi-speciality hospitals.",
    tags: ["University Affiliated", "Imaging", "Clinical"],
  },
  {
    icon: "\u2764\uFE0F",
    name: "B.Sc. Cardiac Technology",
    duration: "3 Years + Internship",
    desc: "Specialised training in ECG, echocardiography, cardiac catheterisation, Holter monitoring, and stress testing with hospital-based clinical exposure.",
    tags: ["University Affiliated", "Cardiology", "High Salary"],
  },
  {
    icon: "\u{1F32C}\uFE0F",
    name: "B.Sc. Respiratory Therapy",
    duration: "3 Years + Internship",
    desc: "Training in ventilator management, pulmonary function testing, arterial blood gas analysis, oxygen therapy, and ICU respiratory care protocols.",
    tags: ["University Affiliated", "ICU/Critical Care", "High Demand"],
  },
  {
    icon: "\u{1F441}",
    name: "B.Sc. Optometry",
    duration: "4 Years",
    desc: "Comprehensive eye care programme covering refraction, contact lens fitting, binocular vision assessment, low vision aids, and ocular disease screening.",
    tags: ["University Affiliated", "Eye Care", "Clinical Practice"],
  },
  {
    icon: "\u{1F9D1}\u200D\u2695\uFE0F",
    name: "B.Sc. Physician Assistant",
    duration: "3 Years + Internship",
    desc: "Clinical support training covering patient assessment, emergency care assistance, minor procedure support, and clinical documentation under physician supervision.",
    tags: ["University Affiliated", "Clinical Support", "Hospital-Based"],
  },
  {
    icon: "\u{1F393}",
    name: "M.Sc. Medical Laboratory Technology",
    duration: "2 Years",
    desc: "Advanced postgraduate programme covering molecular diagnostics, advanced haematology, clinical research methodology, and laboratory management for supervisory roles.",
    tags: ["University Affiliated", "Postgraduate", "Research"],
  },
];

const recruiters = [
  "Apollo", "Fortis", "MIOT", "Kauvery",
  "KMCH", "Narayana Health", "Manipal Hospitals", "Global Hospitals",
  "SRL Diagnostics", "Thyrocare", "Dr. Lal PathLabs", "Metropolis",
  "Medall", "Vijaya Diagnostic", "GKNM Hospital", "KG Hospital",
  "Aravind Eye", "Sankara Eye",
];

const processSteps = [
  { title: "Registration", desc: "Final-year B.Sc. and M.Sc. allied health students register with the placement cell" },
  { title: "Clinical Training", desc: "Hospital rotations, diagnostic equipment training, and clinical SOP orientation" },
  { title: "Skills Assessment", desc: "Clinical competency evaluation, practical tests, and readiness assessment" },
  { title: "Resume & Profile", desc: "Healthcare-specific CV with clinical rotation experience and certifications" },
  { title: "Campus Drives", desc: "On-campus recruitment by hospitals, diagnostic centres, and healthcare chains" },
  { title: "Offer & Joining", desc: "Offer support, credential verification, and smooth transition to your healthcare career" },
];

const testimonials = [
  {
    text: "The B.Sc. MLT programme at JKKN gave me excellent hands-on lab experience. SRL Diagnostics recruited from our campus, and I was placed in their clinical biochemistry department. The placement cell\u2019s preparation sessions were incredibly helpful.",
    name: "Ramya M.",
    role: "B.Sc. MLT 2024 \u2014 Placed at SRL Diagnostics",
    initials: "RM",
  },
  {
    text: "My B.Sc. Cardiac Technology training, especially the echocardiography and cath lab rotations, made me confident. Apollo Hospitals recruited me as a cardiac technologist during the campus drive. The clinical exposure at JKKN was outstanding.",
    name: "Suresh K.",
    role: "B.Sc. Cardiac Tech. 2024 \u2014 Placed at Apollo Hospitals",
    initials: "SK",
  },
  {
    text: "After completing B.Sc. Radiology, I was placed at MIOT International in their CT/MRI department. The clinical rotations during the programme prepared me for real-world imaging scenarios. JKKN\u2019s placement cell connected me with the right opportunity.",
    name: "Preethi V.",
    role: "B.Sc. Radiology 2023 \u2014 Placed at MIOT International",
    initials: "PV",
  },
  {
    text: "B.Sc. Respiratory Therapy at JKKN was life-changing. The ICU rotations and ventilator management training gave me practical skills. I got placed at Narayana Health in their critical care department. The demand for respiratory therapists is incredible.",
    name: "Ashwin G.",
    role: "B.Sc. Respiratory Therapy 2024 \u2014 Placed at Narayana Health",
    initials: "AG",
  },
  {
    text: "I chose B.Sc. Optometry at JKKN and it was the best decision. The refraction clinics and contact lens fitting labs gave me practical skills. Aravind Eye Hospital recruited me directly from campus. Optometry has great growth potential.",
    name: "Dhivya L.",
    role: "B.Sc. Optometry 2023 \u2014 Placed at Aravind Eye Hospital",
    initials: "DL",
  },
  {
    text: "After M.Sc. MLT, I got a supervisory role at Metropolis Healthcare. The advanced molecular diagnostics training and research methodology modules during the programme gave me the edge over other candidates. JKKN truly prepares you for leadership roles.",
    name: "Meena N.",
    role: "M.Sc. MLT 2024 \u2014 Lab Supervisor, Metropolis Healthcare",
    initials: "MN",
  },
];

const trainingCards = [
  { icon: "\u{1F52C}", title: "Diagnostic Equipment", desc: "Hands-on training with autoanalysers, haematology analysers, ELISA readers, PCR machines, and other modern diagnostic instruments." },
  { icon: "\u{1F4E1}", title: "Imaging Technology", desc: "Clinical training on X-ray, CT, MRI, and ultrasound equipment with radiation safety protocols and image quality assessment." },
  { icon: "\u{1F4AC}", title: "Patient Communication", desc: "Hospital etiquette, patient interaction skills, consent procedures, and empathetic communication for clinical settings." },
  { icon: "\u{1F4C4}", title: "Resume & Interview Prep", desc: "Healthcare-specific CV creation, mock interviews with hospital HR panels, and clinical scenario discussion practice." },
  { icon: "\u{1F393}", title: "Govt. Exam Coaching", desc: "Coaching for government hospital recruitment exams (TNMRB, AIIMS, PGI) and support for competitive exam preparation." },
  { icon: "\u{1F310}", title: "International Prep", desc: "Guidance on HAAD, DHA, MOH, and Prometric registration for students interested in healthcare careers in Gulf countries." },
];

const faculty = [
  {
    name: "Mr. B. Karthik",
    designation: "Training & Placement Officer",
    college: "JKKN College of Allied Health Sciences",
    qualifications: ["M.Sc. MLT", "MBA (Hospital Mgmt.)", "10+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.ahs@jkkn.ac.in",
    phone: "+919876543215",
    initials: "BK",
  },
  {
    name: "Mrs. S. Revathi",
    designation: "Clinical Placement Coordinator",
    college: "JKKN College of Allied Health Sciences",
    qualifications: ["M.Sc. MLT", "B.Sc. MLT", "8+ Yrs Exp."],
    badge: "Clinical Placement Coordinator",
    email: "clinical.ahs@jkkn.ac.in",
    phone: "+919876543224",
    initials: "SR",
  },
  {
    name: "Mr. R. Balaji",
    designation: "Hospital Relations Coordinator",
    college: "JKKN College of Allied Health Sciences",
    qualifications: ["B.Sc. Radiology", "MBA (Healthcare)", "7+ Yrs Exp."],
    badge: "Hospital Relations",
    email: "hospital.ahs@jkkn.ac.in",
    phone: "+919876543225",
    initials: "RB",
  },
];

const faqs = [
  {
    q: "What is the placement rate at JKKN College of Allied Health Sciences?",
    a: "JKKN College of Allied Health Sciences maintains an 88% placement rate across all allied health programmes. B.Sc. MLT, Radiology, and Cardiac Technology graduates achieve particularly high placement rates at hospitals, diagnostic chains, and healthcare organisations across India.",
  },
  {
    q: "Which hospitals and companies recruit from JKKN AHS?",
    a: "Top recruiters include Apollo Hospitals, Fortis Healthcare, MIOT International, Kauvery Hospital, KMCH, SRL Diagnostics, Thyrocare, Dr. Lal PathLabs, Metropolis Healthcare, Medall Healthcare, Narayana Health, Global Hospitals, Aravind Eye Hospital, and several multi-speciality hospitals and diagnostic chains across Tamil Nadu and India.",
  },
  {
    q: "What is the highest salary package offered to JKKN AHS graduates?",
    a: "The highest salary package offered to JKKN Allied Health Sciences graduates is \u20B95 LPA, with an average package of \u20B92.8 LPA. Graduates specialising in Cardiac Technology, Radiology, and Respiratory Therapy typically receive the highest packages due to high demand in multi-speciality hospitals and critical care units.",
  },
  {
    q: "What allied health programmes are offered at JKKN AHS?",
    a: "JKKN College of Allied Health Sciences offers B.Sc. programmes in Medical Laboratory Technology (MLT), Radiology & Imaging Technology, Cardiac Technology, Respiratory Therapy, Optometry, and Physician Assistant, along with M.Sc. in Medical Laboratory Technology for advanced specialisation and supervisory roles.",
  },
  {
    q: "Do JKKN AHS graduates get placed in diagnostic centres?",
    a: "Yes. A significant number of B.Sc. MLT graduates are placed at leading diagnostic chains including SRL Diagnostics, Thyrocare, Dr. Lal PathLabs, Metropolis Healthcare, Medall Healthcare, and Vijaya Diagnostic Centre. Roles cover clinical biochemistry, haematology, microbiology, histopathology, and molecular diagnostics.",
  },
  {
    q: "Are there international placement opportunities for allied health graduates?",
    a: "Yes. Allied health professionals are in demand internationally, particularly in Gulf countries (UAE, Saudi Arabia, Qatar, Oman) and Southeast Asia. The placement cell provides guidance on international licensing requirements, HAAD/DHA/MOH registration, Prometric exams, and overseas recruitment processes for interested graduates.",
  },
  {
    q: "What clinical training do JKKN AHS students receive?",
    a: "Students undergo mandatory clinical rotations at affiliated multi-speciality hospitals and diagnostic centres. Training includes hands-on experience with modern diagnostic equipment (CT, MRI, ECG, echocardiography, ventilators, autoanalysers), patient interaction, standard operating procedures, and quality assurance protocols followed in NABL-accredited healthcare facilities.",
  },
  {
    q: "What pre-placement training does the AHS placement cell offer?",
    a: "The placement cell offers clinical skills refresher workshops, medical equipment operation training, hospital etiquette and patient communication sessions, soft skills and interview preparation, healthcare-specific resume building, competitive exam coaching for government hospital recruitment (TNMRB, AIIMS), and international licensing guidance (HAAD, DHA, MOH, Prometric).",
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
export default function AlliedHealthContent() {
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
            <span>College of Allied Health Sciences</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKN AHS Placement Cell</div>
              <h1>Launch Your <span>Healthcare Career</span> in Allied Health Sciences</h1>
              <p className="cp-hero__tagline">
                JKKN College of Allied Health Sciences connects MLT, Radiology, Cardiac Technology, Respiratory Therapy, and Optometry graduates with 120+ leading hospitals and diagnostic centres through dedicated placement support and clinical training.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">View Programmes &#8595;</a>
                <a href="#contact" className="btn btn-outline">Contact Placement Cell</a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan target={88} suffix="%" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={120} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Healthcare Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={5} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={1500} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <CounterSpan target={7} suffix="" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">AHS Programmes</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan target={88} suffix="%" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={120} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;2.8 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;5 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={7} suffix="" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Programmes Offered</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section style={{ padding: "80px 0" }} id="about" aria-label="About the Allied Health Sciences Placement Cell">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Allied Health Sciences Placement Cell
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Connecting skilled allied health graduates with leading hospitals, diagnostic centres, and healthcare organisations
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>The Placement Cell at JKKN College of Allied Health Sciences bridges the gap between clinical education and healthcare employment. With university-affiliated programmes and hands-on training at multi-speciality hospitals, our graduates are prepared to operate advanced medical equipment and deliver quality patient care.</p>
                <p>India&apos;s healthcare sector is expanding rapidly, creating unprecedented demand for trained allied health professionals. Our placement ecosystem covers hospitals, diagnostic laboratories, imaging centres, cardiac catheterisation labs, respiratory care units, and optical clinics across the country.</p>
                <h3>Hospitals &amp; Multi-Speciality Centres</h3>
                <p>Graduates in Radiology, Cardiac Technology, Respiratory Therapy, and Physician Assistant programmes are placed at leading multi-speciality hospitals in diagnostic imaging, cardiac catheterisation labs, ICU ventilator management, and clinical support roles.</p>
                <h3>Diagnostic Laboratories</h3>
                <p>B.Sc. MLT graduates secure positions at national diagnostic chains and standalone laboratories in clinical biochemistry, haematology, microbiology, histopathology, serology, and molecular diagnostics departments.</p>
                <h3>International Opportunities</h3>
                <p>Allied health professionals are in high demand in Gulf countries (UAE, Saudi Arabia, Qatar, Oman) and Southeast Asia. The placement cell guides interested graduates through international licensing, HAAD/DHA/MOH registration, and overseas recruitment processes.</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img src="https://placehold.co/600x450/e2e8f0/334155?text=JKKN+AHS+Lab" alt="JKKN College of Allied Health Sciences students training in the clinical laboratory" width={600} height={450} loading="lazy" />
                </div>
                <figcaption className="cp-about__img-caption">JKKN College of Allied Health Sciences — Advanced clinical training laboratory</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="programmes" aria-label="Allied Health Sciences programmes offered">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Allied Health Programmes Offered
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                University-affiliated undergraduate and postgraduate programmes in allied health disciplines
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
        <section style={{ padding: "80px 0" }} id="recruiters" aria-label="Allied Health Sciences recruiters">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                120+ Healthcare Recruiters Trust JKKN AHS
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Leading hospitals, diagnostic chains, and healthcare organisations that recruit our allied health graduates
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="process" aria-label="Allied Health Sciences placement process">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                AHS Placement Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured pathway from clinical training to healthcare career
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
        <section style={{ padding: "80px 0" }} id="testimonials" aria-label="Allied Health Sciences student placement testimonials">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                What Our AHS Graduates Say
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Real experiences from allied health alumni who built successful healthcare careers
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="training" aria-label="Allied Health Sciences pre-placement training">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Clinical Skills Training
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Healthcare-specific training to prepare allied health graduates for hospital, diagnostic, and clinical careers
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
                  <img src="https://placehold.co/540x600/e2e8f0/334155?text=AHS+Clinical+Training" alt="JKKN AHS students during hands-on clinical training session in the diagnostic laboratory" width={540} height={600} loading="lazy" />
                </div>
                <figcaption className="cp-training__img-caption">Students during a hands-on clinical diagnostic training session</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section style={{ padding: "80px 0" }} id="faculty" aria-label="Allied Health Sciences placement cell faculty">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                AHS Placement Faculty
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Dedicated faculty connecting allied health graduates with hospitals and diagnostic organisations
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="faq" aria-label="Frequently asked questions about JKKN AHS placements">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">FAQ</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                AHS Placement FAQs
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Commonly asked questions about placements at JKKN College of Allied Health Sciences
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
        <section className="cp-cta" id="contact" aria-label="Contact the Allied Health Sciences Placement Cell">
          <div className="cp-cta__inner">
            <h2>Ready to Start Your Healthcare Career?</h2>
            <p>Connect with the JKKN AHS Placement Cell for campus recruitment opportunities, clinical training enquiries, and career guidance in allied health sciences.</p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">&#9993;{" "}<a href="mailto:tpo.ahs@jkkn.ac.in">tpo.ahs@jkkn.ac.in</a></div>
              <div className="cp-cta__contact-item">&#9742;{" "}<a href="tel:+919876543215">+91 98765 43215</a></div>
              <div className="cp-cta__contact-item">&#127760;{" "}<a href="https://ahs.jkkn.ac.in/" target="_blank" rel="noopener noreferrer">ahs.jkkn.ac.in</a></div>
            </div>
            <div className="cp-cta__actions">
              <a href="https://ahs.jkkn.ac.in/placements/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Apply for Placement Support</a>
              <Link href="/placements" className="btn btn-outline">&#8592; Back to All Colleges</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
