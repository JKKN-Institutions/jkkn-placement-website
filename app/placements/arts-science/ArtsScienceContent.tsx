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
    name: "B.Sc. Computer Science",
    duration: "3 Years",
    desc: "Comprehensive programme covering programming, data structures, databases, web development, and software engineering with hands-on lab sessions.",
    tags: ["UGC Recognised", "High Demand", "IT Placements"],
  },
  {
    icon: "\u{1F4B0}",
    name: "Bachelor of Commerce (B.Com.)",
    duration: "3 Years",
    desc: "Foundation in accounting, taxation, auditing, business law, and financial management. Ideal for careers in banking, CA, and corporate finance.",
    tags: ["UGC Recognised", "Banking", "CA Foundation"],
  },
  {
    icon: "\u{1F4BC}",
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    desc: "Management-focused programme covering marketing, HR, operations, entrepreneurship, and business strategy with industry projects.",
    tags: ["UGC Recognised", "Management", "MBA Pathway"],
  },
  {
    icon: "\u{1F5A5}",
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    desc: "IT-focused programme covering Java, Python, web technologies, database management, cloud computing, and software project development.",
    tags: ["UGC Recognised", "IT Sector", "MCA Pathway"],
  },
  {
    icon: "\u{1F393}",
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    desc: "Postgraduate management programme with specialisations in Marketing, Finance, HR, and Operations. Includes industry internship and live projects.",
    tags: ["AICTE Approved", "Specialisations", "Internship"],
  },
  {
    icon: "\u{1F52C}",
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    desc: "Advanced IT programme covering full-stack development, AI/ML, cloud computing, cybersecurity, and enterprise application development.",
    tags: ["AICTE Approved", "Advanced IT", "High Placement"],
  },
  {
    icon: "\u{1F4CA}",
    name: "B.Sc. Mathematics / Physics / Chemistry",
    duration: "3 Years",
    desc: "Pure science programmes building strong analytical and research foundations. Gateway to M.Sc., competitive exams, and research careers.",
    tags: ["UGC Recognised", "Research", "Govt. Exams"],
  },
  {
    icon: "\u{1F9EC}",
    name: "B.Sc. Biochemistry / Microbiology",
    duration: "3 Years",
    desc: "Life science programmes covering molecular biology, genetics, clinical biochemistry, and industrial microbiology with practical lab training.",
    tags: ["UGC Recognised", "Life Sciences", "Lab-Based"],
  },
  {
    icon: "\u{1F4C8}",
    name: "M.Com. / M.Sc. Programmes",
    duration: "2 Years",
    desc: "Postgraduate programmes in Commerce, Computer Science, and Mathematics for advanced specialisation, research, and teaching careers (UGC NET/SET).",
    tags: ["UGC Recognised", "NET/SET", "Teaching"],
  },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant",
  "HCL Tech", "Zoho", "Freshworks", "HDFC Bank",
  "ICICI Bank", "Axis Bank", "Bajaj Finserv", "Amazon",
  "Flipkart", "Deloitte", "Ernst & Young", "BYJU'S",
  "Reliance Retail", "HDB Financial", "Muthoot Finance", "CTS",
];

const processSteps = [
  { title: "Registration", desc: "Final-year students register with the placement cell and submit their profiles" },
  { title: "Aptitude Training", desc: "Quantitative aptitude, logical reasoning, and verbal ability training sessions" },
  { title: "Skill Development", desc: "Communication skills, GD practice, mock interviews, and personality development" },
  { title: "Resume & Profile", desc: "Professional CV creation with academic achievements, projects, and internship details" },
  { title: "Campus Drives", desc: "On-campus recruitment drives by IT firms, banks, corporates, and FMCG companies" },
  { title: "Offer & Joining", desc: "Offer letter support, salary negotiation guidance, and smooth career transition" },
];

const testimonials = [
  {
    text: "The BCA placement drive at JKKN brought TCS and Infosys directly to our campus. The aptitude training and mock interview sessions gave me the confidence I needed. I was placed at TCS in the first campus drive itself.",
    name: "Praveen K.",
    role: "BCA 2024 \u2014 Placed at TCS",
    initials: "PK",
  },
  {
    text: "After completing B.Com., the placement cell helped me prepare for banking exams. I cleared IBPS PO in my first attempt thanks to the competitive exam coaching provided by JKKN. Now I work at HDFC Bank.",
    name: "Divya M.",
    role: "B.Com. 2023 \u2014 Probationary Officer, HDFC Bank",
    initials: "DM",
  },
  {
    text: "My MBA at JKKN CAS transformed my career. The industry internship and live projects gave me practical experience. I was recruited by Bajaj Finserv during the campus drive for a marketing management role.",
    name: "Sathish R.",
    role: "MBA 2024 \u2014 Marketing Manager, Bajaj Finserv",
    initials: "SR",
  },
  {
    text: "B.Sc. Computer Science at JKKN gave me a solid programming foundation. The placement cell organised a special drive with Zoho, and I was selected for their software development team. The coding workshops were invaluable.",
    name: "Nandhini L.",
    role: "B.Sc. CS 2024 \u2014 Software Developer, Zoho",
    initials: "NL",
  },
  {
    text: "The MCA programme and placement support at JKKN opened doors I never expected. I got placed at Cognizant as a full-stack developer. The curriculum covering both frontend and backend technologies was perfectly aligned with industry needs.",
    name: "Vijay G.",
    role: "MCA 2023 \u2014 Full-Stack Developer, Cognizant",
    initials: "VG",
  },
  {
    text: "I completed BBA and then cleared the TNPSC Group II exam with coaching support from the placement cell. JKKN doesn\u2019t just focus on private-sector placements \u2014 they genuinely support students aiming for government jobs too.",
    name: "Karthik S.",
    role: "BBA 2023 \u2014 TNPSC Group II Officer",
    initials: "KS",
  },
];

const trainingCards = [
  { icon: "\u{1F4CA}", title: "Aptitude Training", desc: "Quantitative aptitude, logical reasoning, and data interpretation sessions aligned with IT and banking recruitment patterns." },
  { icon: "\u{1F4AC}", title: "Communication Skills", desc: "English fluency, group discussion practice, presentation skills, and professional communication workshops." },
  { icon: "\u{1F4BB}", title: "Computer Certification", desc: "MS Office, Tally ERP, Python basics, and digital literacy certification to enhance employability." },
  { icon: "\u{1F4C4}", title: "Resume & Interview Prep", desc: "Professional CV building, mock interviews with industry panels, and personality development sessions." },
  { icon: "\u{1F393}", title: "Competitive Exam Coaching", desc: "TNPSC, SSC CGL, banking exams (IBPS/SBI), and TANCET entrance preparation with study material and mock tests." },
  { icon: "\u{1F4BC}", title: "Industry Orientation", desc: "Guest lectures by industry leaders, corporate visits, internship facilitation, and career counselling sessions with HR professionals." },
];

const faculty = [
  {
    name: "Prof. A. Senthil",
    designation: "Training & Placement Officer",
    college: "JKKN College of Arts and Science",
    qualifications: ["MBA", "M.Com.", "12+ Yrs Exp."],
    badge: "Training & Placement Officer",
    email: "tpo.cas@jkkn.ac.in",
    phone: "+919876543214",
    initials: "AS",
  },
  {
    name: "Prof. V. Priya",
    designation: "IT Placement Coordinator",
    college: "JKKN College of Arts and Science",
    qualifications: ["MCA", "M.Sc. CS", "9+ Yrs Exp."],
    badge: "IT Placement Coordinator",
    email: "it.placements@jkkn.ac.in",
    phone: "+919876543222",
    initials: "VP",
  },
  {
    name: "Prof. D. Murugan",
    designation: "Corporate Relations Coordinator",
    college: "JKKN College of Arts and Science",
    qualifications: ["MBA (HR)", "BBA", "7+ Yrs Exp."],
    badge: "Corporate Relations",
    email: "corporate.cas@jkkn.ac.in",
    phone: "+919876543223",
    initials: "DM",
  },
];

const faqs = [
  {
    q: "What is the placement rate at JKKN College of Arts and Science?",
    a: "JKKN College of Arts and Science maintains an 85% placement rate across all programmes. BCA, B.Sc. Computer Science, and MBA graduates achieve the highest placement percentages, with students placed in IT, banking, FMCG, retail, and corporate sectors across India.",
  },
  {
    q: "Which companies recruit from JKKN College of Arts and Science?",
    a: "Top recruiters include TCS, Infosys, Wipro, Cognizant, HCL Technologies, Zoho, Freshworks, HDFC Bank, ICICI Bank, Axis Bank, Bajaj Finserv, Amazon, Flipkart, Deloitte, Ernst & Young, Reliance Retail, and several other IT, banking, and FMCG companies.",
  },
  {
    q: "What is the highest salary package offered to JKKN CAS graduates?",
    a: "The highest salary package offered to JKKN CAS graduates is \u20B96 LPA, with an average package of \u20B93.2 LPA. BCA and MCA graduates in IT roles and MBA graduates in management positions typically receive the highest packages.",
  },
  {
    q: "What programmes are offered at JKKN College of Arts and Science?",
    a: "JKKN CAS offers undergraduate programmes (B.Sc. in Computer Science, Mathematics, Physics, Chemistry, Biochemistry, Microbiology; B.Com.; BBA; BCA), postgraduate programmes (M.Sc. in Computer Science, Mathematics; M.Com.; MBA; MCA), and certificate courses in computer skills and digital literacy.",
  },
  {
    q: "Does JKKN CAS provide placement support for B.Sc. graduates?",
    a: "Yes. B.Sc. graduates receive full placement support through campus drives with IT companies, research laboratories, educational institutions, and analytical testing centres. B.Sc. Computer Science students are particularly sought after by IT service companies, and life science graduates are placed in QC labs and research organisations.",
  },
  {
    q: "What career paths are available for JKKN CAS graduates?",
    a: "Career paths include IT services (software development, testing, data analytics), banking and financial services (clerks, POs, relationship managers), accounting and audit (CA articleship, tax consultancy), marketing and sales, government services (TNPSC, SSC, banking exams), and higher education (M.Sc., MBA, MCA, UGC NET/SET for teaching careers).",
  },
  {
    q: "Does JKKN CAS provide competitive exam coaching?",
    a: "Yes. The placement cell provides coaching support for TNPSC Group exams, SSC CGL, banking exams (IBPS PO/Clerk, SBI PO), and entrance exams like TANCET (for MBA/MCA admission) and UGC NET/SET for students aspiring to teaching and government careers.",
  },
  {
    q: "What pre-placement training does the CAS placement cell offer?",
    a: "The placement cell offers aptitude and reasoning training, group discussion and interview preparation, soft skills and communication workshops, professional resume building, personality development sessions, computer skills certification (MS Office, Tally, Python basics), and industry orientation with guest lectures from corporate professionals.",
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
export default function ArtsScienceContent() {
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
            <span>College of Arts and Science</span>
          </nav>
          <div className="cp-hero__grid">
            <div className="reveal">
              <div className="cp-hero__badge">JKKN CAS Placement Cell</div>
              <h1>Build Your <span>Dream Career</span> Across Arts, Science &amp; Management</h1>
              <p className="cp-hero__tagline">
                JKKN College of Arts and Science connects B.Sc., B.Com., BBA, BCA, MBA, and MCA graduates with 180+ leading companies across IT, banking, FMCG, and corporate sectors through dedicated placement support and industry-ready training.
              </p>
              <div className="cp-hero__actions">
                <a href="#programmes" className="btn btn-primary">View Programmes &#8595;</a>
                <a href="#contact" className="btn btn-outline">Contact Placement Cell</a>
              </div>
            </div>
            <div className="cp-hero__visual reveal reveal-delay-2">
              <div className="cp-hero__stat-card">
                <CounterSpan target={85} suffix="%" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Placement Rate</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={180} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Recruiters</span>
              </div>
              <div className="cp-hero__stat-card">
                <span className="cp-hero__stat-value">
                  <span className="currency">&#8377;</span>{" "}
                  <CounterSpan target={6} suffix=" LPA" />
                </span>
                <span className="cp-hero__stat-label">Highest Package</span>
              </div>
              <div className="cp-hero__stat-card">
                <CounterSpan target={8000} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Alumni Placed</span>
              </div>
              <div className="cp-hero__stat-card featured">
                <CounterSpan target={15} suffix="+" className="cp-hero__stat-value" />
                <span className="cp-hero__stat-label">Departments</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Stats Bar ===== */}
        <section className="cp-stats-bar">
          <div className="cp-stats-bar__grid">
            <div className="cp-stats-bar__item">
              <CounterSpan target={85} suffix="%" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Placement Rate</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={180} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Recruiters</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;3.2 LPA</span>
              <span className="cp-stats-bar__label">Average Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <span className="cp-stats-bar__number">&#8377;6 LPA</span>
              <span className="cp-stats-bar__label">Highest Package</span>
            </div>
            <div className="cp-stats-bar__item">
              <CounterSpan target={15} suffix="+" className="cp-stats-bar__number" />
              <span className="cp-stats-bar__label">Departments</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: About ===== */}
        <section style={{ padding: "80px 0" }} id="about" aria-label="About the Arts and Science Placement Cell">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">About Us</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Arts &amp; Science Placement Cell
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Connecting graduates across arts, science, commerce, and management streams with India&apos;s top employers
              </p>
            </div>
            <div className="cp-about__grid">
              <div className="cp-about__text reveal">
                <p>The Placement Cell at JKKN College of Arts and Science bridges the gap between academic learning and industry requirements. With a diverse portfolio of UGC-recognised programmes spanning arts, science, commerce, and management, our graduates are prepared for a wide spectrum of career opportunities.</p>
                <p>Our placement ecosystem covers IT services, banking and financial services, FMCG, retail, e-commerce, accounting firms, educational institutions, and government services &mdash; ensuring every student finds a career path aligned with their strengths.</p>
                <h3>IT &amp; Technology</h3>
                <p>BCA, MCA, and B.Sc. Computer Science graduates are placed at leading IT service companies and software firms in roles spanning software development, testing, data analytics, and technical support.</p>
                <h3>Banking &amp; Finance</h3>
                <p>B.Com., BBA, and MBA graduates secure positions at major banks, NBFCs, insurance companies, and fintech firms in operations, relationship management, accounting, and financial analysis roles.</p>
                <h3>Government &amp; Higher Studies</h3>
                <p>Students are supported for competitive exams including TNPSC Group exams, banking exams (IBPS/SBI), SSC, and entrance tests for higher studies (TANCET, UGC NET/SET) through dedicated coaching modules.</p>
              </div>
              <figure className="reveal reveal-delay-2">
                <div className="cp-about__img-wrap">
                  <img src="https://placehold.co/600x450/e2e8f0/334155?text=JKKN+CAS+Campus" alt="JKKN College of Arts and Science campus with modern classrooms and computer labs" width={600} height={450} loading="lazy" />
                </div>
                <figcaption className="cp-about__img-caption">JKKN College of Arts and Science — Modern campus with state-of-the-art facilities</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Programmes ===== */}
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="programmes" aria-label="Arts and Science programmes offered">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Programmes</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Programmes Offered
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                UGC-recognised undergraduate and postgraduate programmes across arts, science, commerce, and management
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
        <section style={{ padding: "80px 0" }} id="recruiters" aria-label="Arts and Science recruiters">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Recruiters</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                180+ Companies Trust JKKN CAS
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Leading IT firms, banks, FMCG companies, and corporate organisations that recruit our graduates
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="process" aria-label="Arts and Science placement process">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Process</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Placement Process
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured pathway from classroom to corporate career
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
        <section style={{ padding: "80px 0" }} id="testimonials" aria-label="Arts and Science student placement testimonials">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                What Our Graduates Say
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Real experiences from JKKN CAS alumni who built successful careers across diverse industries
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="training" aria-label="Arts and Science pre-placement training">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Training</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Career-Ready Skills Training
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Comprehensive training to prepare graduates for IT, banking, corporate, and government careers
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
                  <img src="https://placehold.co/540x600/e2e8f0/334155?text=CAS+Training+Session" alt="JKKN CAS students attending a pre-placement aptitude training session" width={540} height={600} loading="lazy" />
                </div>
                <figcaption className="cp-training__img-caption">Students during a pre-placement aptitude and soft skills training session</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: Faculty ===== */}
        <section style={{ padding: "80px 0" }} id="faculty" aria-label="Arts and Science placement cell faculty">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">Faculty</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                CAS Placement Faculty
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Dedicated faculty connecting arts, science, and management graduates with industry opportunities
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
        <section style={{ padding: "80px 0", background: "var(--surface-1)" }} id="faq" aria-label="Frequently asked questions about JKKN CAS placements">
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 24px" }}>
            <div className="section-header reveal">
              <div className="section-label">FAQ</div>
              <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Placement FAQs
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                Commonly asked questions about placements at JKKN College of Arts and Science
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
        <section className="cp-cta" id="contact" aria-label="Contact the Arts and Science Placement Cell">
          <div className="cp-cta__inner">
            <h2>Ready to Launch Your Career?</h2>
            <p>Connect with the JKKN CAS Placement Cell for campus recruitment opportunities, internship enquiries, and career guidance across arts, science, and management streams.</p>
            <div className="cp-cta__contacts">
              <div className="cp-cta__contact-item">&#9993;{" "}<a href="mailto:tpo.cas@jkkn.ac.in">tpo.cas@jkkn.ac.in</a></div>
              <div className="cp-cta__contact-item">&#9742;{" "}<a href="tel:+919876543214">+91 98765 43214</a></div>
              <div className="cp-cta__contact-item">&#127760;{" "}<a href="https://cas.jkkn.ac.in/" target="_blank" rel="noopener noreferrer">cas.jkkn.ac.in</a></div>
            </div>
            <div className="cp-cta__actions">
              <a href="https://cas.jkkn.ac.in/placements/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Apply for Placement Support</a>
              <Link href="/placements" className="btn btn-outline">&#8592; Back to All Colleges</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
