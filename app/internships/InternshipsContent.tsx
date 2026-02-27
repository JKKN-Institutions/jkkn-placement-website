"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ========== DATA ========== */
const colleges = [
  {
    id: "engineering",
    label: "Engineering",
    name: "JKKN College of Engineering & Technology",
    programs: "B.E/B.Tech (CSE, ECE, EEE, Mechanical, Civil, AI & DS, IT), M.E, MBA",
    partners: "50+",
    duration: "2-6",
    durationLabel: "Months",
    types: ["Software Development Internship", "Hardware & Embedded Systems", "Manufacturing & Production", "R&D & Innovation Projects", "Business & Management (MBA)"],
    highlights: ["Paid internships with top IT companies", "PPO (Pre-Placement Offer) opportunities", "Industry-mentored capstone projects", "Internship-to-job conversion rate: 40%+"],
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Zoho", "Accenture", "L&T", "TVS Group", "Bosch", "Amazon", "Ashok Leyland"],
    partnersLabel: "Top Internship Partners",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    name: "JKKN College of Pharmacy",
    programs: "B.Pharm, M.Pharm, Pharm.D, Pharm.D (PB), PhD",
    partners: "30+",
    duration: "3-12",
    durationLabel: "Months",
    types: ["Drug Formulation & Development", "Quality Control & Assurance", "Clinical Research & Trials", "Pharmacovigilance", "Hospital & Community Pharmacy", "Regulatory Affairs"],
    highlights: ["Pharm.D clinical rotations in partner hospitals", "Research internships with pharma R&D labs", "International placement pathways", "1,600+ alumni network in pharmaceutical industry"],
    companies: ["Sun Pharmaceutical", "Cipla", "Dr. Reddy's", "Lupin", "Aurobindo Pharma", "Torrent Pharma", "GSK", "Pfizer India", "Biocon", "Apollo Pharmacy"],
    partnersLabel: "Top Internship Partners",
  },
  {
    id: "dental",
    label: "Dental",
    name: "JKKN Dental College & Hospital",
    programs: "BDS, MDS (Orthodontics, Prosthodontics, Periodontics, Oral Surgery, Conservative Dentistry)",
    partners: "15+",
    duration: "12",
    durationLabel: "Months",
    types: ["Compulsory Rotating Internship (CRRI)", "Clinical Dental Practice", "Oral Surgery Assistance", "Dental Research Projects", "Community Dental Health Camps"],
    highlights: ["200+ dental chairs for hands-on clinical training", "500+ patients treated daily in attached hospital", "CBCT & CAD/CAM advanced lab access", "Clinical exposure from Year 1"],
    companies: ["JKKN Teaching Hospital", "Apollo Dental", "Clove Dental", "Sabka Dentist", "Government Hospitals"],
    partnersLabel: "Internship & Clinical Partners",
  },
  {
    id: "nursing",
    label: "Nursing",
    name: "JKKN College of Nursing",
    programs: "B.Sc Nursing, M.Sc Nursing, P.B.B.Sc Nursing, ANM, GNM",
    partners: "80+",
    duration: "6-12",
    durationLabel: "Months",
    types: ["Clinical Nursing Rotations", "ICU & Critical Care Training", "Operation Theatre Assistance", "Community Health Nursing", "Neonatal & Pediatric Care"],
    highlights: ["500+ bed attached multi-specialty teaching hospital", "International pathways (UK, UAE, Singapore)", "Simulation labs for clinical training", "98%+ placement rate with internship conversion"],
    companies: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "KIMS Hospitals", "Kauvery Hospital"],
    internationalPartners: ["NHS (UK)", "Saudi German Hospital", "Cleveland Clinic Abu Dhabi"],
    partnersLabel: "Top Internship Partners",
  },
  {
    id: "allied",
    label: "Allied Health",
    name: "JKKN College of Allied Health Sciences",
    programs: "B.Sc in 9 specializations: Cardiac Tech, Radiology, Dialysis, OT Tech, Respiratory, PA, Critical Care, Medical Records, Emergency Care",
    partners: "20+",
    duration: "12",
    durationLabel: "Months",
    types: ["Cardiac Catheterization Lab Training", "Radiology & Imaging Internship", "Dialysis Unit Practice", "OT & Anaesthesia Training", "Respiratory Therapy Clinical Rotation", "Emergency & Trauma Care"],
    highlights: ["2,000+ clinical training hours during internship", "Advanced labs: Anatomy, Physiology, Microbiology", "Hands-on training with real patient exposure", "95% placement rate after internship"],
    companies: ["Apollo Hospitals", "MIOT International", "Fortis Healthcare", "GEM Hospital", "Brookefield Hospital", "Narayana Health"],
    partnersLabel: "Top Internship Partners",
  },
  {
    id: "arts",
    label: "Arts & Science",
    name: "JKKN College of Arts & Science",
    programs: "B.Sc, B.Com, BBA, BCA, B.A, M.Sc, M.Com, MBA, MCA",
    partners: "20+",
    duration: "1-3",
    durationLabel: "Months",
    types: ["Industry Exposure Program", "IT & Software Development", "Business Process & Analytics", "Research Internships", "Corporate Training & Projects"],
    highlights: ["Autonomous institution under Periyar University", "Active MoU partnerships with industry", "Placement Day events with on-spot offers", "IT and business internship pathways"],
    companies: ["Foxconn", "Sakthi Auto Components", "Rinex Technologies", "Pronoia EduTech", "Premier Fine Linens", "ODUGAATECH"],
    partnersLabel: "Top Internship Partners",
  },
  {
    id: "education",
    label: "Education",
    name: "JKKN College of Education",
    programs: "B.Ed \u2014 14 specializations (Tamil, English, Maths, Physics, Chemistry, CS, Commerce, History, and more)",
    partners: "100+",
    duration: "16-20",
    durationLabel: "Weeks",
    types: ["School Teaching Practice (Mandatory)", "Classroom Management Training", "Educational Technology Projects", "Community Education Programs", "Curriculum Development Assistance"],
    highlights: ["5,000+ alumni teaching across India", "Smart learning studios for modern pedagogy", "Psychology lab and ICT lab (60+ systems)", "98% placement rate with teaching internship"],
    companies: ["KVS (Kendriya Vidyalaya)", "NVS (Navodaya Vidyalaya)", "DAV Schools", "DPS (Delhi Public School)", "CBSE Schools", "State Government Schools"],
    partnersLabel: "Partner Schools & Networks",
  },
];

const steps = [
  { num: 1, title: "Registration", desc: "Register through the JKKN Placement Cell portal with your academic details and internship preferences" },
  { num: 2, title: "Profile Building", desc: "Build your profile with skills, resume, and areas of interest for personalized internship matching" },
  { num: 3, title: "Company Matching", desc: "Our placement team matches you with internship opportunities from 500+ partner companies across sectors" },
  { num: 4, title: "Interview Prep", desc: "Attend mock interviews, aptitude sessions, and soft skills training before company interactions" },
  { num: 5, title: "Internship Placement", desc: "Get placed in your matched internship with full mentorship and support from the placement cell" },
  { num: 6, title: "Completion & PPO", desc: "Complete your internship successfully and explore Pre-Placement Offer opportunities for full-time roles", isGreen: true },
];

const sectors = [
  { icon: "H", title: "Healthcare & Hospitals", desc: "Apollo, Fortis, Manipal, KIMS, Kauvery, Narayana Health" },
  { icon: "IT", title: "IT & Software", desc: "TCS, Infosys, Wipro, Cognizant, HCL, Zoho, Amazon" },
  { icon: "Rx", title: "Pharmaceutical", desc: "Sun Pharma, Cipla, Dr. Reddy's, Lupin, Biocon, GSK" },
  { icon: "Eng", title: "Manufacturing & Engineering", desc: "L&T, TVS Group, Ashok Leyland, Bosch, Foxconn" },
  { icon: "Lab", title: "Diagnostics & Laboratory", desc: "MIOT International, GEM Hospital, Brookefield, Thyrocare" },
  { icon: "Edu", title: "Education & Research", desc: "KVS, NVS, DAV Schools, DPS, State Government Schools" },
];

const testimonials = [
  { initials: "JD", name: "Jae Divya S", role: "B.Tech IT \u2014 Rinex Technologies", color: "var(--green)", quote: "My internship at Rinex Technologies gave me real-world software development experience. The placement cell\u2019s guidance in resume building and interview preparation was invaluable." },
  { initials: "BD", name: "Bharani Dharan M", role: "B.Com CA \u2014 Sakthi Auto Components", color: "var(--green-light)", quote: "The industry exposure program connected me with Sakthi Auto where I learned practical business operations. This internship directly led to my full-time offer." },
  { initials: "AM", name: "Anitha Murugan", role: "B.Sc Nursing \u2014 NHS UK", color: "var(--gold)", quote: "JKKN\u2019s international internship pathway helped me secure a position at NHS UK. The clinical training at the attached 500-bed hospital prepared me for global healthcare standards." },
];

const faqs = [
  { q: "Who is eligible for internships at JKKN?", a: "All JKKN students from the 7 colleges are eligible for internships. For clinical/hospital internships (Dental, Nursing, Allied Health), eligibility is based on program curriculum requirements. For industry internships (Engineering, Pharmacy, Arts & Science), students from 2nd year onwards can apply." },
  { q: "Are internships paid or unpaid?", a: "It varies by company and sector. Many IT and engineering internships offer stipends ranging from \u20B95,000 to \u20B925,000 per month. Clinical rotations and mandatory internships are typically part of degree requirements and focus on hands-on clinical experience." },
  { q: "How long do internships typically last?", a: "Duration varies by program: Engineering/IT (2-6 months), Pharmacy (3-12 months), Dental BDS (12 months CRRI), Nursing (6-12 months), Allied Health (12 months mandatory), Arts & Science (1-3 months), Education B.Ed (16-20 weeks mandatory teaching practice)." },
  { q: "Can internships lead to full-time job offers?", a: "Yes! Many partner companies offer Pre-Placement Offers (PPOs) to outstanding interns. Over 40% of engineering interns and a significant number of pharmacy and nursing interns receive full-time offers from their internship companies." },
  { q: "Does JKKN help with international internships?", a: "Yes, the Nursing and Pharmacy departments have international placement pathways with partners in the UK (NHS), UAE (Cleveland Clinic Abu Dhabi), Saudi Arabia, and Singapore. The placement cell facilitates documentation and visa support for eligible candidates." },
  { q: "How do companies partner with JKKN for internships?", a: "Companies can partner by reaching out to our Corporate Development Centre (CDC) via email at cdc@jkkn.ac.in or phone at +91-9865910003. We offer customized internship programs, campus recruitment drives, and MoU partnerships for long-term collaboration." },
];

/* ========== COMPONENT ========== */
export default function InternshipsContent() {
  const [activeTab, setActiveTab] = useState("engineering");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeCollege = colleges.find((c) => c.id === activeTab)!;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "calc(40px + 80px)" }}>

        {/* ===== HERO ===== */}
        <section className="itp-hero">
          <div className="itp-hero-bg-1" />
          <div className="itp-hero-bg-2" />
          <div className="itp-container itp-hero-inner">
            <div className="itp-hero-content">
              <div className="itp-hero-badge">
                <span className="itp-hero-dot" />
                Now Accepting Internship Applications 2026
              </div>
              <h1 className="itp-hero-title">
                Launch Your Career with <span>Real-World Internships</span>
              </h1>
              <p className="itp-hero-desc">
                500+ partner companies across healthcare, IT, pharma, and manufacturing offer internship opportunities to students across all 7 JKKN colleges. Gain hands-on experience, earn while you learn, and unlock Pre-Placement Offers.
              </p>
              <div className="itp-hero-btns">
                <a href="#inquiry-form" className="itp-btn itp-btn-primary">Register for Internship</a>
                <a href="#colleges" className="itp-btn itp-btn-outline">Explore by College</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="itp-stats">
          <div className="itp-container">
            <div className="itp-stats-grid">
              <div className="itp-stat"><div className="itp-stat-val">500+</div><div className="itp-stat-label">Partner Companies</div></div>
              <div className="itp-stat"><div className="itp-stat-val" style={{ color: "var(--green)" }}>1,200+</div><div className="itp-stat-label">Annual Interns Placed</div></div>
              <div className="itp-stat"><div className="itp-stat-val" style={{ color: "var(--green-light)" }}>7</div><div className="itp-stat-label">Colleges Covered</div></div>
              <div className="itp-stat"><div className="itp-stat-val" style={{ color: "var(--gold)" }}>40%+</div><div className="itp-stat-label">PPO Conversion Rate</div></div>
            </div>
          </div>
        </section>

        {/* ===== COLLEGE TABS ===== */}
        <section id="colleges" className="itp-colleges-section">
          <div className="itp-container">
            <div className="itp-section-header">
              <h2 className="itp-section-title">Internships Across 7 Colleges</h2>
              <p className="itp-section-sub">Select a college to explore internship opportunities, partner companies, and program details</p>
            </div>
            <div className="itp-tabs-wrap">
              {colleges.map((c) => (
                <button key={c.id} onClick={() => setActiveTab(c.id)} className={`itp-tab ${activeTab === c.id ? "active" : ""}`}>
                  {c.label}
                </button>
              ))}
            </div>
            <div className="itp-panel itp-fade-in" key={activeTab}>
              <div className="itp-panel-header">
                <div>
                  <h3 className="itp-panel-name">{activeCollege.name}</h3>
                  <p className="itp-panel-programs">{activeCollege.programs}</p>
                </div>
                <div className="itp-panel-stats">
                  <div className="itp-panel-stat"><div className="itp-panel-stat-val">{activeCollege.partners}</div><div className="itp-panel-stat-lbl">{activeCollege.id === "education" ? "Schools" : "Partners"}</div></div>
                  <div className="itp-panel-stat"><div className="itp-panel-stat-val">{activeCollege.duration}</div><div className="itp-panel-stat-lbl">{activeCollege.durationLabel}</div></div>
                </div>
              </div>
              <div className="itp-panel-body">
                <div className="itp-panel-grid">
                  <div>
                    <h4 className="itp-panel-subtitle">
                      <span className="itp-icon-box itp-icon-green">
                        <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      </span>
                      Internship Types
                    </h4>
                    <ul className="itp-list">
                      {activeCollege.types.map((t, i) => <li key={i}><span className="itp-arrow">&#9656;</span>{t}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="itp-panel-subtitle">
                      <span className="itp-icon-box itp-icon-light">
                        <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Key Highlights
                    </h4>
                    <ul className="itp-list">
                      {activeCollege.highlights.map((h, i) => <li key={i}><span className="itp-check">&#10003;</span>{h}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="itp-panel-partners">
                  <h4 className="itp-panel-subtitle">
                    <span className="itp-icon-box itp-icon-gold">
                      <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </span>
                    {activeCollege.partnersLabel}
                  </h4>
                  <div className="itp-tag-wrap">
                    {activeCollege.companies.map((c, i) => <span key={i} className="itp-tag">{c}</span>)}
                    {(activeCollege as typeof colleges[3]).internationalPartners?.map((c, i) => <span key={`intl-${i}`} className="itp-tag itp-tag-intl">{c}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="itp-how-section">
          <div className="itp-container">
            <div className="itp-section-header">
              <h2 className="itp-section-title">How the Internship Process Works</h2>
              <p className="itp-section-sub">Our placement cell guides you through every step from registration to internship completion</p>
            </div>
            <div className="itp-steps-grid">
              {steps.map((s) => (
                <div key={s.num} className="itp-step">
                  <div className="itp-step-head">
                    <div className={`itp-step-num ${s.isGreen ? "green" : ""}`}>{s.num}</div>
                    <h3 className="itp-step-title">{s.title}</h3>
                  </div>
                  <p className="itp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INDUSTRY SECTORS ===== */}
        <section className="itp-sectors-section">
          <div className="itp-container">
            <div className="itp-section-header">
              <h2 className="itp-section-title" style={{ color: "#fff" }}>Internships Across Industries</h2>
              <p className="itp-section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>Our partner companies span 6 major industry sectors offering diverse internship experiences</p>
            </div>
            <div className="itp-sectors-grid">
              {sectors.map((s, i) => (
                <div key={i} className="itp-sector">
                  <div className="itp-sector-icon">{s.icon}</div>
                  <h3 className="itp-sector-title">{s.title}</h3>
                  <p className="itp-sector-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOR RECRUITERS ===== */}
        <section className="itp-recruiters-section">
          <div className="itp-container">
            <div className="itp-recruiters-grid">
              <div>
                <div className="itp-recruiters-badge">For Industry Partners</div>
                <h2 className="itp-recruiters-title">Partner with JKKN for Your Internship Needs</h2>
                <p className="itp-recruiters-desc">
                  Access a talent pool of 1,200+ students annually across 7 colleges spanning engineering, healthcare, pharma, and education. Our Corporate Development Centre makes it easy to find the right interns.
                </p>
                <div className="itp-recruiters-list">
                  {["Customized internship programs tailored to your company\u2019s needs", "Pre-screened, trained candidates ready for industry exposure", "Dedicated placement coordinator for seamless onboarding", "MoU partnerships for recurring internship & placement drives"].map((item, i) => (
                    <div key={i} className="itp-recruiters-item">
                      <div className="itp-recruiters-check">&#10003;</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="itp-contact-card">
                <h3 className="itp-contact-card-title">Quick Contact</h3>
                <div className="itp-contact-items">
                  <a href="tel:+919865910003" className="itp-contact-item">
                    <div className="itp-contact-icon">
                      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div><div className="itp-contact-label">Phone</div><div className="itp-contact-val">+91-9865910003</div></div>
                  </a>
                  <a href="mailto:cdc@jkkn.ac.in" className="itp-contact-item">
                    <div className="itp-contact-icon">
                      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div><div className="itp-contact-label">Email</div><div className="itp-contact-val">cdc@jkkn.ac.in</div></div>
                  </a>
                  <a href="https://wa.me/919865910003?text=Hello%2C%20I%20want%20to%20partner%20with%20JKKN%20for%20internships" target="_blank" className="itp-contact-item">
                    <div className="itp-contact-icon">
                      <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <div><div className="itp-contact-label">WhatsApp</div><div className="itp-contact-val">Chat with Us</div></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="itp-testimonials-section">
          <div className="itp-container">
            <div className="itp-section-header">
              <h2 className="itp-section-title">What Our Interns Say</h2>
              <p className="itp-section-sub">Hear from students who transformed their careers through JKKN internships</p>
            </div>
            <div className="itp-testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="itp-testimonial">
                  <div className="itp-stars">{"★★★★★"}</div>
                  <p className="itp-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="itp-testimonial-author">
                    <div className="itp-testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <div className="itp-testimonial-name">{t.name}</div>
                      <div className="itp-testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INQUIRY FORM ===== */}
        <section id="inquiry-form" className="itp-form-section">
          <div className="itp-container">
            <div className="itp-form-grid">
              <div>
                <h2 className="itp-section-title" style={{ textAlign: "left" }}>Register for Internship Opportunities</h2>
                <p className="itp-section-sub" style={{ textAlign: "left", maxWidth: "none", marginBottom: 32 }}>Fill out the form and our placement cell team will connect you with the right internship opportunities matching your skills and interests.</p>
                <div className="itp-form-features">
                  {[
                    { title: "Quick Registration", desc: "Submit your details and get matched with internship openings within 48 hours" },
                    { title: "Personalized Matching", desc: "Our team analyzes your profile to find the best internship fit across 500+ partners" },
                    { title: "End-to-End Support", desc: "From application to completion, our placement cell supports you every step of the way" },
                  ].map((f, i) => (
                    <div key={i} className="itp-form-feature">
                      <div className="itp-form-feature-icon">{i === 0 ? "\u270D" : i === 1 ? "\u2726" : "\u2764"}</div>
                      <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="itp-form-card">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="itp-form-fields">
                      <div>
                        <label className="itp-label">Full Name <span className="itp-required">*</span></label>
                        <input type="text" required placeholder="Enter your full name" className="itp-input" />
                      </div>
                      <div>
                        <label className="itp-label">Email Address <span className="itp-required">*</span></label>
                        <input type="email" required placeholder="your.email@example.com" className="itp-input" />
                      </div>
                      <div>
                        <label className="itp-label">Phone Number <span className="itp-required">*</span></label>
                        <input type="tel" required placeholder="+91 XXXXX XXXXX" className="itp-input" />
                      </div>
                      <div>
                        <label className="itp-label">Select Your College <span className="itp-required">*</span></label>
                        <select required className="itp-input" defaultValue="">
                          <option value="" disabled>Choose your college</option>
                          {colleges.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="itp-label">Program / Course</label>
                        <input type="text" placeholder="e.g., B.Tech CSE, B.Pharm, BDS" className="itp-input" />
                      </div>
                      <div>
                        <label className="itp-label">Current Year of Study</label>
                        <select className="itp-input" defaultValue="">
                          <option value="" disabled>Select year</option>
                          <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option><option>Final Year</option><option>Post Graduate</option>
                        </select>
                      </div>
                      <div>
                        <label className="itp-label">Preferred Industry Sector</label>
                        <select className="itp-input" defaultValue="">
                          <option value="" disabled>Choose preferred sector</option>
                          <option>Healthcare & Hospitals</option><option>IT & Software</option><option>Pharmaceutical</option><option>Manufacturing & Engineering</option><option>Diagnostics & Laboratory</option><option>Education & Research</option><option>Open to Any Sector</option>
                        </select>
                      </div>
                      <div>
                        <label className="itp-label">Additional Message (Optional)</label>
                        <textarea rows={3} placeholder="Tell us about your skills, interests, or preferred internship type..." className="itp-input itp-textarea" />
                      </div>
                      <button type="submit" className="itp-btn itp-btn-primary itp-btn-full">
                        Submit Internship Interest
                        <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="itp-form-success">
                    <div style={{ fontSize: "3rem", marginBottom: 16 }}>&#10004;</div>
                    <h3>Application Submitted!</h3>
                    <p>Our placement cell will review your profile and contact you within 48 hours with internship opportunities.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section className="itp-faq-section">
          <div className="itp-container" style={{ maxWidth: 800 }}>
            <div className="itp-section-header">
              <h2 className="itp-section-title">Frequently Asked Questions</h2>
              <p className="itp-section-sub">Everything you need to know about internships at JKKN</p>
            </div>
            <div className="itp-faq-list">
              {faqs.map((f, i) => (
                <div key={i} className="itp-faq">
                  <button className="itp-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{f.q}</span>
                    <svg className={`itp-faq-icon ${openFaq === i ? "open" : ""}`} width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`itp-faq-answer ${openFaq === i ? "open" : ""}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="itp-final-cta">
          <div className="itp-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Ready to Launch Your Career?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginBottom: 32, maxWidth: 640, margin: "0 auto 32px" }}>
              Don&apos;t wait for opportunities to come to you. Register now and let our placement cell connect you with the best internships across 500+ companies.
            </p>
            <div className="itp-cta-btns">
              <a href="#inquiry-form" className="itp-btn itp-btn-primary">Register Now</a>
              <a href="https://wa.me/919865910003?text=Hello%2C%20I%20am%20interested%20in%20internship%20opportunities%20at%20JKKN" target="_blank" className="itp-btn itp-btn-whatsapp">WhatsApp Us</a>
              <a href="tel:+919865910003" className="itp-btn itp-btn-outline">+91-9865910003</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .itp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .itp-fade-in { animation: itpFadeIn 0.4s ease-out; }
        @keyframes itpFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes itpPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }

        /* HERO */
        .itp-hero { position: relative; padding: 64px 0 80px; background: linear-gradient(135deg, var(--green-dark), #085032, var(--green-dark)); overflow: hidden; }
        .itp-hero-bg-1 { position: absolute; top: 20px; left: 10px; width: 288px; height: 288px; background: var(--green); border-radius: 50%; filter: blur(80px); opacity: 0.08; }
        .itp-hero-bg-2 { position: absolute; bottom: 10px; right: 10px; width: 384px; height: 384px; background: var(--green-light); border-radius: 50%; filter: blur(80px); opacity: 0.06; }
        .itp-hero-inner { position: relative; z-index: 10; }
        .itp-hero-content { max-width: 720px; }
        .itp-hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(15,143,86,0.2); color: var(--green-light); padding: 6px 16px; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; margin-bottom: 24px; }
        .itp-hero-dot { width: 8px; height: 8px; background: var(--green-light); border-radius: 50%; animation: itpPulse 2s ease-in-out infinite; }
        .itp-hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 24px; }
        .itp-hero-title span { color: var(--green-light); }
        .itp-hero-desc { color: rgba(255,255,255,0.6); font-size: clamp(0.9rem, 2vw, 1.1rem); line-height: 1.7; margin-bottom: 32px; }
        .itp-hero-btns { display: flex; flex-wrap: wrap; gap: 16px; }

        /* BUTTONS */
        .itp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 32px; border-radius: 12px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; font-family: inherit; }
        .itp-btn-primary { background: var(--green); color: #fff; box-shadow: 0 4px 14px rgba(11,109,65,0.3); }
        .itp-btn-primary:hover { background: var(--green-light); transform: translateY(-2px); }
        .itp-btn-outline { background: transparent; color: rgba(255,255,255,0.8); border: 1.5px solid rgba(255,255,255,0.3); }
        .itp-btn-outline:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .itp-btn-whatsapp { background: #25d366; color: #fff; }
        .itp-btn-whatsapp:hover { background: #1fb855; }
        .itp-btn-full { width: 100%; }

        /* STATS */
        .itp-stats { background: #fff; padding: 24px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.06); position: relative; z-index: 20; }
        .itp-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .itp-stat { text-align: center; animation: itpPulse 2s ease-in-out infinite; }
        .itp-stat:nth-child(2) { animation-delay: 0.2s; }
        .itp-stat:nth-child(3) { animation-delay: 0.4s; }
        .itp-stat:nth-child(4) { animation-delay: 0.6s; }
        .itp-stat-val { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; color: var(--text-primary); }
        .itp-stat-label { color: var(--text-tertiary); font-size: 0.8rem; margin-top: 4px; }

        /* SECTION HEADER */
        .itp-section-header { text-align: center; margin-bottom: 48px; }
        .itp-section-title { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
        .itp-section-sub { color: var(--text-tertiary); font-size: 1rem; max-width: 600px; margin: 0 auto; }

        /* COLLEGE TABS */
        .itp-colleges-section { padding: 64px 0; background: var(--surface-1); }
        .itp-tabs-wrap { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 16px; margin-bottom: 32px; scrollbar-width: none; -ms-overflow-style: none; }
        .itp-tabs-wrap::-webkit-scrollbar { display: none; }
        .itp-tab { white-space: nowrap; padding: 10px 20px; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; flex-shrink: 0; font-family: inherit; background: var(--surface-0); color: var(--text-secondary); }
        .itp-tab:hover { background: var(--surface-2); }
        .itp-tab.active { background: var(--green); color: #fff; }
        .itp-panel { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .itp-panel-header { background: var(--green-dark); padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
        .itp-panel-name { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .itp-panel-programs { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 4px; }
        .itp-panel-stats { display: flex; gap: 12px; }
        .itp-panel-stat { background: rgba(255,255,255,0.08); padding: 8px 16px; border-radius: 12px; text-align: center; }
        .itp-panel-stat-val { font-size: 1.1rem; font-weight: 700; color: var(--green-light); }
        .itp-panel-stat-lbl { color: rgba(255,255,255,0.5); font-size: 0.65rem; }
        .itp-panel-body { padding: 24px 32px; }
        .itp-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .itp-panel-subtitle { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .itp-icon-box { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .itp-icon-green { background: rgba(11,109,65,0.1); color: var(--green); }
        .itp-icon-light { background: rgba(15,143,86,0.1); color: var(--green-light); }
        .itp-icon-gold { background: rgba(125,178,71,0.15); color: var(--gold); }
        .itp-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .itp-list li { display: flex; align-items: start; gap: 8px; font-size: 0.85rem; color: var(--text-secondary); }
        .itp-arrow { color: var(--green); margin-top: 2px; flex-shrink: 0; }
        .itp-check { color: var(--green-light); margin-top: 2px; flex-shrink: 0; }
        .itp-panel-partners { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-light); }
        .itp-tag-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .itp-tag { background: var(--surface-1); color: var(--text-secondary); padding: 6px 14px; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; }
        .itp-tag-intl { background: rgba(11,109,65,0.08); color: var(--green); border: 1px solid rgba(11,109,65,0.2); }

        /* HOW IT WORKS */
        .itp-how-section { padding: 64px 0; background: var(--surface-0); }
        .itp-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .itp-step { background: var(--surface-1); border-radius: 16px; padding: 24px; transition: box-shadow 0.3s; }
        .itp-step:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .itp-step-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .itp-step-num { width: 48px; height: 48px; border-radius: 12px; background: var(--green); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; flex-shrink: 0; }
        .itp-step-num.green { background: var(--green-light); }
        .itp-step-title { font-size: 1rem; font-weight: 600; color: var(--text-primary); }
        .itp-step-desc { font-size: 0.8rem; color: var(--text-tertiary); line-height: 1.7; }

        /* SECTORS */
        .itp-sectors-section { padding: 64px 0; background: var(--green-dark); }
        .itp-sectors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .itp-sector { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; transition: border-color 0.3s; }
        .itp-sector:hover { border-color: var(--green-light); }
        .itp-sector-icon { font-size: 0.8rem; font-weight: 700; color: var(--green-light); background: rgba(15,143,86,0.15); width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
        .itp-sector-title { font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .itp-sector-desc { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

        /* RECRUITERS */
        .itp-recruiters-section { padding: 64px 0; background: linear-gradient(135deg, var(--green), var(--green-dark)); }
        .itp-recruiters-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .itp-recruiters-badge { display: inline-flex; background: rgba(255,255,255,0.2); color: #fff; padding: 6px 16px; border-radius: 9999px; font-size: 0.8rem; font-weight: 500; margin-bottom: 24px; }
        .itp-recruiters-title { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 700; color: #fff; margin-bottom: 24px; }
        .itp-recruiters-desc { color: rgba(255,255,255,0.8); font-size: 1rem; line-height: 1.7; margin-bottom: 32px; }
        .itp-recruiters-list { display: flex; flex-direction: column; gap: 16px; }
        .itp-recruiters-item { display: flex; align-items: start; gap: 12px; color: #fff; }
        .itp-recruiters-check { width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0; margin-top: 2px; }
        .itp-contact-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 32px; }
        .itp-contact-card-title { font-size: 1.25rem; font-weight: 700; color: #fff; text-align: center; margin-bottom: 24px; }
        .itp-contact-items { display: flex; flex-direction: column; gap: 16px; }
        .itp-contact-item { display: flex; align-items: center; gap: 16px; background: rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; text-decoration: none; transition: background 0.2s; }
        .itp-contact-item:hover { background: rgba(255,255,255,0.18); }
        .itp-contact-icon { color: #fff; }
        .itp-contact-label { color: rgba(255,255,255,0.6); font-size: 0.75rem; }
        .itp-contact-val { color: #fff; font-weight: 600; font-size: 1rem; }

        /* TESTIMONIALS */
        .itp-testimonials-section { padding: 64px 0; background: var(--surface-1); }
        .itp-testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .itp-testimonial { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); transition: box-shadow 0.3s; }
        .itp-testimonial:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .itp-stars { color: #facc15; font-size: 1rem; margin-bottom: 16px; letter-spacing: 2px; }
        .itp-testimonial-quote { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
        .itp-testimonial-author { display: flex; align-items: center; gap: 12px; padding-top: 16px; border-top: 1px solid var(--border-light); }
        .itp-testimonial-avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
        .itp-testimonial-name { font-weight: 600; font-size: 0.85rem; color: var(--text-primary); }
        .itp-testimonial-role { font-size: 0.7rem; color: var(--text-tertiary); }

        /* FORM */
        .itp-form-section { padding: 64px 0; background: var(--surface-0); }
        .itp-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .itp-form-features { display: flex; flex-direction: column; gap: 24px; }
        .itp-form-feature { display: flex; align-items: start; gap: 16px; }
        .itp-form-feature-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(11,109,65,0.08); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; }
        .itp-form-feature h4 { font-weight: 600; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 4px; }
        .itp-form-feature p { font-size: 0.8rem; color: var(--text-tertiary); }
        .itp-form-card { background: var(--surface-1); border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .itp-form-fields { display: flex; flex-direction: column; gap: 20px; }
        .itp-label { display: block; font-size: 0.8rem; font-weight: 500; color: var(--text-primary); margin-bottom: 6px; }
        .itp-required { color: #ef4444; }
        .itp-input { width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border); background: #fff; font-size: 0.85rem; color: var(--text-primary); transition: all 0.2s; font-family: inherit; }
        .itp-input:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 3px rgba(11,109,65,0.1); }
        .itp-textarea { resize: none; }
        .itp-form-success { text-align: center; padding: 48px 0; }
        .itp-form-success h3 { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
        .itp-form-success p { font-size: 0.85rem; color: var(--text-tertiary); }

        /* FAQ */
        .itp-faq-section { padding: 64px 0; background: var(--surface-1); }
        .itp-faq-list { display: flex; flex-direction: column; gap: 12px; }
        .itp-faq { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
        .itp-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px; text-align: left; border: none; background: none; cursor: pointer; font-family: inherit; font-size: 0.9rem; font-weight: 600; color: var(--text-primary); transition: background 0.2s; }
        .itp-faq-btn:hover { background: var(--surface-1); }
        .itp-faq-icon { transition: transform 0.3s; flex-shrink: 0; color: var(--text-tertiary); }
        .itp-faq-icon.open { transform: rotate(180deg); }
        .itp-faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
        .itp-faq-answer.open { max-height: 500px; transition: max-height 0.5s ease-in; }
        .itp-faq-answer p { padding: 0 20px 20px; font-size: 0.85rem; color: var(--text-tertiary); line-height: 1.7; }

        /* FINAL CTA */
        .itp-final-cta { padding: 64px 0; background: linear-gradient(135deg, var(--green-dark), #085032); }
        .itp-cta-btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .itp-recruiters-grid, .itp-form-grid { grid-template-columns: 1fr; }
          .itp-steps-grid, .itp-sectors-grid, .itp-testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .itp-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .itp-panel-grid, .itp-steps-grid, .itp-sectors-grid, .itp-testimonials-grid { grid-template-columns: 1fr; }
          .itp-panel-header { padding: 20px; flex-direction: column; align-items: flex-start; }
          .itp-panel-body { padding: 20px; }
          .itp-hero { padding: 48px 0 56px; }
          .itp-hero-btns, .itp-cta-btns { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </>
  );
}
