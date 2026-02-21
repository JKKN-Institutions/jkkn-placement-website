"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ========== DRIVE DATA ========== */
interface InternshipDetails {
  period: string;
  stipend: string;
  postInternship: string;
  note?: string;
}

interface Position {
  title: string;
  vacancies: string;
  role: string;
  skills: string;
}

interface RoleDetail {
  title: string;
  duties: string[];
}

interface Compensation {
  stipend: string;
  trainingPeriod: string;
  foodSubsidy: string;
  accommodation: string;
}

interface CampusDrive {
  id: number;
  company: string;
  logo: string | null;
  status: "completed" | "upcoming" | "ongoing";
  date: string;
  sortDate: string;
  jobTitle: string;
  jobType: string;
  package: string;
  location: string;
  colleges: string;
  departments: string[];
  aboutCompany: string;
  selectionProcess: string[];
  sector: string;
  circularRef: string;
  circularDate?: string;
  jobDescription?: string;
  responsibilities?: string[];
  skills?: string[];
  requirements?: string[];
  internshipDetails?: InternshipDetails;
  positions?: Position[];
  totalPositions?: string;
  whatCompanyOffers?: string[];
  specialFeatures?: string[];
  employmentTerms?: string[];
  howToApply?: string[];
  documentsRequired?: string[];
  departmentCoordination?: string[];
  importantInstructions?: string[];
  endorsement?: string;
  approvedBy?: string;
  contact?: { email: string; phone: string };
  companyAdditionalDetails?: string[];
  roleDetails?: RoleDetail[];
  compensation?: Compensation;
  plantLocation?: string;
  departmentsHiring?: string[];
  careerDevelopment?: string;
  careerPaths?: string[];
  infrastructure?: string;
  technicalRequirements?: string[];
  eligibilityCriteria?: string[];
}

const campusDrives: CampusDrive[] = [
  {
    id: 1,
    company: "Infronex IT Product and Services",
    logo: null,
    status: "completed",
    date: "19 July 2025",
    sortDate: "2025-07-19",
    jobTitle: "Full Stack Developer (Fresher)",
    jobType: "Full-Time",
    package: "Rs. 4-6 LPA",
    location: "Coimbatore",
    colleges: "JKKNCET / JKKNCAS",
    departments: [
      "JKKNCET \u2014 B.E / B.Tech: CSE, IT, ECE / MBA",
      "JKKNCAS \u2014 B.Sc: CS, BCA, AI&DS, Cyber Security",
    ],
    aboutCompany:
      "Infronex is a fast-growing tech company specializing in innovative and scalable software products. With expertise in web/mobile applications, cloud solutions, and enterprise software, Infronex encourages a culture of learning, creativity, and cutting-edge technology.",
    jobDescription:
      "The selected candidates will join as Full Stack Developers and work on real-time projects with the latest technologies under the mentorship of experienced professionals.",
    selectionProcess: ["Technical Round", "HR Round"],
    responsibilities: [
      "Learn and assist in developing web applications using modern technologies. Gain hands-on experience working with Node.js, Python, or Java under the guidance of senior developers.",
      "Support in building and styling responsive web interfaces using HTML, CSS, JavaScript, jQuery.",
      "Collaborate with the team to understand and implement both frontend and backend functionalities.",
      "Participate in designing user-friendly interfaces and basic server-side logic. Understand the basics of server-side CSS and responsive/adaptive web design principles.",
      "Work on real-time projects to enhance your understanding of databases such as SQL or SSMS.",
      "Communicate clearly and effectively with team members to understand requirements and share updates.",
      "Stay up to date with current web development trends, tools, and best practices through self learning.",
      "Show enthusiasm for learning new programming languages, frameworks, and tools as required by the team.",
    ],
    skills: [
      "Good understanding of HTML, CSS, JavaScript, Bootstrap",
      "Familiarity with frontend frameworks like React.js",
      "Basic knowledge of backend technologies such as Node.js, Django, & SpringBoot",
      "Familiarity with databases like MongoDB, MySQL, or SSMS",
      "Understanding of Git and version control",
      "Good problem-solving and communication skills",
      "Eagerness to learn and grow in a fast-paced environment",
    ],
    sector: "IT / Software",
    circularRef: "JKKNCDC",
  },
  {
    id: 2,
    company: "Jicate Solutions",
    logo: null,
    status: "completed",
    date: "28 October 2025 (Tuesday)",
    sortDate: "2025-10-28",
    jobTitle: "Software Project Coordinator / UI Developer / Backend Developer",
    jobType: "Full-Time",
    package: "Not specified in circular",
    location: "JKKN Campus, Kumarapalayam",
    colleges: "JKKNCET / JKKNCAS",
    departments: [
      "Bachelor\u2019s degree in CSE, IT, or related fields",
      "Final year students (2025 Batch)",
      "Recent graduates (2023\u20132024 Batch)",
      "No active backlogs",
    ],
    technicalRequirements: [
      "Basic programming skills in relevant technologies",
      "Understanding of software development lifecycle",
      "Good analytical and problem-solving abilities",
    ],
    positions: [
      {
        title: "Software Project Coordinator & Junior Developer",
        vacancies: "Open",
        role: "Hybrid role blending hands-on development with project management",
        skills: "Basic programming (Java, Python, JavaScript), SDLC understanding",
      },
      {
        title: "UI/Frontend Developer",
        vacancies: "Open",
        role: "Creating exceptional user experiences and responsive web applications",
        skills: "HTML5, CSS3, JavaScript (ES6+), React/Angular/Vue.js",
      },
      {
        title: "Backend & Database Developer",
        vacancies: "Open",
        role: "Server-side logic, database architecture, and API development",
        skills: "Java/Python/Node.js/PHP, MySQL/PostgreSQL/MongoDB",
      },
    ],
    totalPositions: "3 (Additional positions may be available)",
    aboutCompany:
      "JICATE SOLUTIONS is a growing software company dedicated to building tomorrow\u2019s digital future. Located within our JKKN Campus in Namakkal District, they offer comprehensive training, mentorship, and real-world project experience in a collaborative environment.",
    selectionProcess: [
      "Application Submission: Resume with work samples (if any)",
      "Group Discussion",
      "Initial Screening: Technical Assessment",
      "Technical Interview: With Team Lead and technical team",
      "Offer Letter: For selected candidates",
    ],
    whatCompanyOffers: [
      "Structured training and mentorship programs",
      "Hands-on experience with cutting-edge technologies",
      "Real-world project exposure",
      "Collaborative and innovative work culture",
      "Career growth opportunities",
      "Professional development investment",
    ],
    specialFeatures: [
      "Work within campus \u2014 No relocation required",
      "Industry exposure while completing studies",
      "Comprehensive training provided",
      "Building portfolio with real projects",
      "Pathway to long-term tech career",
    ],
    employmentTerms: [
      "Employment Type: Full-time",
      "Location: JKKN Campus, Kumarapalayam",
      "Minimum Commitment: 1 Year",
      "Notice Period: 2 Months",
    ],
    howToApply: [
      "Direct Application: Submit resume and cover letter to career development center",
      "Email: ceooffice@jkkn.ac.in (Subject: JICATE SOLUTIONS - [Position Name])",
    ],
    documentsRequired: [
      "Updated resume",
      "All semester mark sheets",
      "Portfolio/GitHub profile (if available)",
    ],
    departmentCoordination: [
      "CSE/IT Students: Mr. Palanisamy K / Mr. Arun VP / All Heads of Departments",
      "Other Eligible Departments: Contact Career Development Center for eligibility confirmation",
    ],
    importantInstructions: [
      "This is an exclusive opportunity for JKKN students and alumni",
      "Selected candidates will work from JKKN Campus location",
      "Professional dress code mandatory during selection process",
      "Candidates must maintain academic performance while working",
      "Final year students can join immediately after graduation",
    ],
    endorsement:
      "This recruitment drive is specially recommended for students seeking to build careers in software development while maintaining proximity to the academic environment.",
    approvedBy: "Mr. Rangarajan Raghavachari, CEO, JKKN Institutions",
    contact: { email: "ceooffice@jkkn.ac.in", phone: "9865910003" },
    sector: "IT / Software",
    circularRef: "JKKN/CDC/2025/001",
    circularDate: "25th October 2025",
  },
  {
    id: 3,
    company: "Rinex Technologies Private Limited",
    logo: null,
    status: "completed",
    date: "7 March 2025",
    sortDate: "2025-03-07",
    jobTitle: "Inside Sales Strategist",
    jobType: "Internship + Full-Time",
    package: "10 LPA (post internship: 7 LPA standard + 3 LPA variable)",
    location: "Bengaluru / Kolkata",
    colleges: "JKKNCET / JKKNCAS",
    departments: ["Any Graduation / Post Graduation"],
    aboutCompany:
      "Rinex is a flagship brand from Rinex Technologies Pvt. Ltd. accredited by National Skill Development Corporation (NSDC) and Skill India. It is one of the finest E-learning platforms for all students and professionals that facilitate studying top-notch technical certification courses from profound industry experts and help them comprehend & network in the current engineering industry.",
    selectionProcess: ["Group Discussion", "Personal Interview Round"],
    responsibilities: [
      "Familiarizing yourself with all products and services offered by our company.",
      "Develop and implement strategic sales plans to achieve company objectives.",
      "Generate sales by identifying potential clients and prospects through market research, cold calling, networking, and other lead generation techniques.",
      "Procuring new clients through direct contact, word-of-mouth, and collaboration with the marketing department.",
      "Maintaining meaningful relationships with existing clients to ensure that they are retained.",
      "Suggesting upgrades or added products and services that may be of interest to clients.",
      "Reviewing clients\u2019 feedback and implementing necessary changes.",
    ],
    requirements: [
      "Intuitive and insightful, particularly regarding human behaviour",
      "Neat, well-groomed appearance",
      "Great networking skills",
      "Excellent written and verbal communication",
      "Resourceful, with outstanding research skills",
      "Emboldened by challenges",
    ],
    internshipDetails: {
      period: "4 Months",
      stipend: "Up to Rs. 25,000/- per month",
      postInternship: "10 LPA (7 LPA Standard + 3 LPA Variable)",
      note: "A monthly salary structure requires a mandatory 30-days working day. You need to maintain at least 90% consistency during the probation period to secure full-time Employment.",
    },
    sector: "EdTech / Sales",
    circularRef: "JKKNCDC",
  },
  {
    id: 4,
    company: "Shree Viswam Gears LLP",
    logo: null,
    status: "completed",
    date: "26 September 2025",
    sortDate: "2025-09-26",
    jobTitle: "Service Advisor / CCE / Technician / Sales Executive / Admin",
    jobType: "Full-Time",
    package: "Rs. 1.8 LPA",
    location: "Thiruchengode / Sangagiri / Edappadi / Mallasamudram",
    colleges: "JKKNCET / JKKNCAS",
    departments: [
      "JKKNCET \u2014 B.E / B.Tech / MBA: All Streams",
      "JKKNCAS \u2014 All Streams",
    ],
    aboutCompany:
      "Viswam TVS is an authorized TVS Two-Wheeler Dealer operating in Thiruchengode, Sangagiri, Edappadi, and Mallasamudram. The dealership specializes in the sales and service of Internal Combustion Engine (ICE) vehicles, Electric Vehicles (EVs), and premium models from TVS Motors.",
    companyAdditionalDetails: [
      "Offers a wide range of two-wheelers: Mopeds (XL100), Scooters (4 variants), Motorcycles (110cc to 310cc including Sport, Star City, Radeon, Raider, Apache, etc.).",
      "Pioneered sales and service of TVS Electric Vehicles (iQube) since 1986.",
      "Provides a strong platform for technical students to start their career in the Automobile Sales and Service sector.",
    ],
    selectionProcess: ["HR Round"],
    roleDetails: [
      {
        title: "Service Advisor",
        duties: [
          "Greet and interact with customers to understand vehicle issues.",
          "Coordinate between customers and technicians.",
          "Ensure timely service delivery.",
          "Maintain service records and follow-up.",
        ],
      },
      {
        title: "Customer Care Executive (CCE)",
        duties: [
          "Handle customer inquiries and complaints.",
          "Provide details about products, services, and offers.",
          "Ensure customer satisfaction and retention.",
        ],
      },
      {
        title: "Technician",
        duties: [
          "Diagnose and repair two-wheelers (ICE & EV).",
          "Conduct regular vehicle maintenance.",
          "Ensure adherence to safety and quality standards.",
        ],
      },
      {
        title: "Sales Executive",
        duties: [
          "Promote and sell two-wheelers to customers.",
          "Achieve monthly sales targets.",
          "Conduct product demonstrations and test rides.",
          "Handle customer queries on finance and insurance.",
        ],
      },
      {
        title: "Admin",
        duties: [
          "Manage office records and documentation.",
          "Support HR, accounts, and operational tasks.",
          "Ensure smooth coordination among departments.",
        ],
      },
    ],
    skills: [
      "Technical Knowledge (for Mechanical & EEE graduates - ICE & EVs)",
      "Good communication and interpersonal skills",
      "Customer service orientation",
      "Problem-solving and analytical skills",
      "Sales and negotiation skills (for sales roles)",
      "Basic computer knowledge (MS Office, record management)",
      "Teamwork and adaptability",
    ],
    sector: "Automobile / Retail",
    circularRef: "JKKNCDC",
  },
  {
    id: 5,
    company: "L G Balakrishnan and Bros Limited",
    logo: null,
    status: "completed",
    date: "6 January 2026 (Tuesday)",
    sortDate: "2026-01-06",
    jobTitle: "Campus Recruitment",
    jobType: "Full-Time (Training Period: 1\u20132 Years)",
    package: "Stipend: Rs. 15,500 - Rs. 25,000/month",
    location: "FPD Plants at Annur",
    colleges: "JKKNCET",
    departments: ["BE - Mechanical", "BE - ECE", "BE - EEE"],
    eligibilityCriteria: [
      "Eligible Branches: BE - Mechanical, ECE, EEE",
      "Qualification: Fresh Graduates & Experienced Candidates",
      "Academic Requirement: Good academic records with consistent performance",
    ],
    aboutCompany:
      "L G Balakrishnan and Bros Limited is a leading corporate company manufacturing various automobile components and chains (Rolon Brand) for two wheelers and other vehicles. The company has an impressive presence with more than 37 factories located across India, along with international facilities in the USA and Mexico. Our clients include leading TIER-1 suppliers and OEMs of automobile industries, as well as other Engineering & Manufacturing Industries.",
    plantLocation:
      "FPD Plants located at Annur: Fine Products Division - 1 & 2, Precision Machining Division - 2",
    departmentsHiring: [
      "Fine Blanking",
      "CNC Operations",
      "Maintenance",
      "New Product Development (NPD)",
      "Quality Assurance",
      "Heat Treatment",
    ],
    compensation: {
      stipend: "Rs. 15,500/- to Rs. 25,000/- per month (BE Students)",
      trainingPeriod: "1 to 2 years (based on qualification & experience)",
      foodSubsidy:
        "Breakfast & Dinner: Rs. 15.20 per meal; Lunch: Rs. 17.20 per meal (Available on holidays & leave days too)",
      accommodation:
        "Rs. 800/- to Rs. 1,000/- per month (based on requirements)",
    },
    careerDevelopment:
      "Our structured training curriculum helps candidates develop skill sets in various aspects to meet industry requirements.",
    careerPaths: [
      "Production",
      "Quality",
      "Maintenance",
      "New Product Development",
      "Heat Treatment",
    ],
    infrastructure:
      "All our plants are equipped with great infrastructure, advanced machines, and modern systems designed to develop candidates and build their careers in specific functional areas.",
    selectionProcess: ["Technical Test", "HR / Technical Interview"],
    importantInstructions: [
      "This is an exclusive opportunity for JKKN students.",
      "Professional dress code mandatory during selection process.",
    ],
    endorsement:
      "This recruitment drive is specially recommended for EEE, ECE, and Mechanical Engineering students who aspire to build careers in core engineering, manufacturing, automation, electronics, and allied technical domains, while gaining practical industry exposure aligned with their academic background.",
    approvedBy: "Mr. Rangarajan Raghavachari, CEO, JKKN Institutions",
    contact: { email: "ceooffice@jkkn.ac.in", phone: "9865910003" },
    sector: "Manufacturing / Automotive",
    circularRef: "JKKN/CDC/2026/003",
    circularDate: "December 15, 2025",
  },
];

/* ========== ICONS ========== */
function SectorIcon({ sector }: { sector: string }) {
  if (sector.includes("IT") || sector.includes("Software"))
    return (
      <svg className="ocd-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  if (sector.includes("EdTech") || sector.includes("Sales"))
    return (
      <svg className="ocd-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  if (sector.includes("Automobile") || sector.includes("Retail"))
    return (
      <svg className="ocd-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  if (sector.includes("Manufacturing") || sector.includes("Automotive"))
    return (
      <svg className="ocd-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  return (
    <svg className="ocd-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const cls =
    status === "upcoming"
      ? "ocd-badge-upcoming"
      : status === "ongoing"
      ? "ocd-badge-ongoing"
      : "ocd-badge-completed";
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return <span className={`ocd-badge ${cls}`}>{label}</span>;
}

/* ========== DETAIL VIEW ========== */
function DriveDetail({
  drive,
  onBack,
}: {
  drive: CampusDrive;
  onBack: () => void;
}) {
  const d = drive;
  const yearLabel = d.sortDate.startsWith("2026") ? "2026" : "2025";

  return (
    <div className="ocd-fade-in">
      {/* Back button */}
      <div className="ocd-back-bar">
        <div className="ocd-container">
          <button onClick={onBack} className="ocd-back-btn">
            <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Drives
          </button>
        </div>
      </div>

      <div className="ocd-container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        {/* Header Card */}
        <div className="ocd-detail-header">
          <div className="ocd-detail-header-top">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span className="ocd-detail-cdc-label">Career Development Centre</span>
                <StatusBadge status={d.status} />
              </div>
              <h1 className="ocd-detail-company">{d.company}</h1>
              <p className="ocd-detail-ref">
                ON-CAMPUS DRIVE {yearLabel} &bull; Ref: {d.circularRef}
                {d.circularDate ? ` \u2022 ${d.circularDate}` : ""}
              </p>
            </div>
            <div className="ocd-detail-sector-icon">
              <SectorIcon sector={d.sector} />
            </div>
          </div>
          <div className="ocd-detail-quick-grid">
            <div className="ocd-detail-quick-item">
              <div className="ocd-detail-quick-label">Position</div>
              <div className="ocd-detail-quick-value">{d.jobTitle}</div>
            </div>
            <div className="ocd-detail-quick-item">
              <div className="ocd-detail-quick-label">Package / Stipend</div>
              <div className="ocd-detail-quick-value" style={{ color: "var(--green)" }}>{d.package}</div>
            </div>
            <div className="ocd-detail-quick-item">
              <div className="ocd-detail-quick-label">Location</div>
              <div className="ocd-detail-quick-value">{d.location}</div>
            </div>
            <div className="ocd-detail-quick-item">
              <div className="ocd-detail-quick-label">Drive Date</div>
              <div className="ocd-detail-quick-value">{d.date}</div>
            </div>
          </div>
        </div>

        {/* Two column layout */}
        <div className="ocd-detail-grid">
          {/* LEFT COLUMN */}
          <div className="ocd-detail-main">
            {/* About Company */}
            <div className="ocd-card">
              <h2 className="ocd-card-title">
                <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                About the Company
              </h2>
              <p className="ocd-card-text">{d.aboutCompany}</p>
              {d.companyAdditionalDetails && (
                <ul className="ocd-list" style={{ marginTop: 12 }}>
                  {d.companyAdditionalDetails.map((item, i) => (
                    <li key={i}><span className="ocd-bullet">&bull;</span>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Plant Location */}
            {d.plantLocation && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Plant Location
                </h2>
                <p className="ocd-card-text">{d.plantLocation}</p>
              </div>
            )}

            {/* Positions Available */}
            {d.positions && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Positions Available
                </h2>
                {d.totalPositions && <p className="ocd-card-text" style={{ marginBottom: 16 }}>Total: {d.totalPositions}</p>}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {d.positions.map((p, i) => (
                    <div key={i} className="ocd-position-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                        <h3 className="ocd-position-title">{i + 1}. {p.title}</h3>
                        <span className="ocd-position-vacancy">Vacancies: {p.vacancies}</span>
                      </div>
                      <p className="ocd-card-text" style={{ marginBottom: 8 }}>{p.role}</p>
                      <p className="ocd-card-text"><strong>Skills:</strong> {p.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Job Description */}
            {d.jobDescription && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Job Description
                </h2>
                <p className="ocd-card-text">{d.jobDescription}</p>
              </div>
            )}

            {/* Departments Hiring */}
            {d.departmentsHiring && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Departments Hiring
                </h2>
                <div className="ocd-tag-grid">
                  {d.departmentsHiring.map((dep, i) => (
                    <div key={i} className="ocd-tag ocd-tag-green">{dep}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Compensation */}
            {d.compensation && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Compensation & Benefits
                </h2>
                <div className="ocd-info-rows">
                  <div className="ocd-info-row"><span>Stipend (BE Students)</span><span>{d.compensation.stipend}</span></div>
                  <div className="ocd-info-row"><span>Training Period</span><span>{d.compensation.trainingPeriod}</span></div>
                  <div className="ocd-info-row"><span>Food Subsidy</span><span style={{ fontSize: "0.75rem" }}>{d.compensation.foodSubsidy}</span></div>
                  <div className="ocd-info-row" style={{ borderBottom: "none" }}><span>Accommodation</span><span>{d.compensation.accommodation}</span></div>
                </div>
              </div>
            )}

            {/* Career Development */}
            {(d.careerDevelopment || d.careerPaths) && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  Career Development
                </h2>
                {d.careerDevelopment && <p className="ocd-card-text">{d.careerDevelopment}</p>}
                {d.careerPaths && (
                  <div style={{ marginTop: 12 }}>
                    <p className="ocd-mini-label">Career Paths Available</p>
                    <div className="ocd-tag-wrap">
                      {d.careerPaths.map((p, i) => (
                        <span key={i} className="ocd-tag ocd-tag-accent">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Infrastructure */}
            {d.infrastructure && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Infrastructure & Facilities
                </h2>
                <p className="ocd-card-text">{d.infrastructure}</p>
              </div>
            )}

            {/* Responsibilities */}
            {d.responsibilities && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  Roles & Responsibilities
                </h2>
                <ul className="ocd-list">
                  {d.responsibilities.map((r, i) => (
                    <li key={i}><span className="ocd-bullet">&bull;</span>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Role Details */}
            {d.roleDetails && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  Roles & Responsibilities
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {d.roleDetails.map((role, i) => (
                    <div key={i}>
                      <h3 style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: 8 }}>{role.title}</h3>
                      <ul className="ocd-list" style={{ paddingLeft: 16 }}>
                        {role.duties.map((duty, j) => (
                          <li key={j}><span className="ocd-bullet">&bull;</span>{duty}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {d.skills && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Required Skills
                </h2>
                <div className="ocd-tag-wrap">
                  {d.skills.map((s, i) => (
                    <span key={i} className="ocd-tag ocd-tag-neutral">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {d.requirements && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Requirements
                </h2>
                <div className="ocd-tag-wrap">
                  {d.requirements.map((r, i) => (
                    <span key={i} className="ocd-tag ocd-tag-neutral">{r}</span>
                  ))}
                </div>
              </div>
            )}

            {/* What Company Offers */}
            {d.whatCompanyOffers && (
              <div className="ocd-card">
                <h2 className="ocd-card-title">
                  <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  What the Company Offers
                </h2>
                <ul className="ocd-list">
                  {d.whatCompanyOffers.map((item, i) => (
                    <li key={i}><span style={{ color: "var(--green)" }}>&#10003;</span>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="ocd-detail-sidebar">
            {/* Eligible Departments */}
            <div className="ocd-card">
              <h3 className="ocd-sidebar-title">Eligible Departments</h3>
              <div className="ocd-card-text" style={{ marginBottom: 8 }}>
                Colleges: <strong>{d.colleges}</strong>
              </div>
              {d.departments.map((dep, i) => (
                <div key={i} className="ocd-dept-item">{dep}</div>
              ))}
            </div>

            {/* Eligibility Criteria */}
            {d.eligibilityCriteria && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Eligibility Criteria</h3>
                <ul className="ocd-list">
                  {d.eligibilityCriteria.map((c, i) => (
                    <li key={i}><span className="ocd-bullet">&bull;</span>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Requirements */}
            {d.technicalRequirements && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Technical Requirements</h3>
                <ul className="ocd-list">
                  {d.technicalRequirements.map((r, i) => (
                    <li key={i}><span className="ocd-bullet">&bull;</span>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Selection Process */}
            <div className="ocd-card">
              <h3 className="ocd-sidebar-title">Selection Process</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {d.selectionProcess.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "start", gap: 12 }}>
                    <div className="ocd-step-num">{i + 1}</div>
                    <span className="ocd-card-text" style={{ paddingTop: 2 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="ocd-card ocd-card-accent">
              <h3 className="ocd-sidebar-title">Quick Info</h3>
              <div className="ocd-info-rows">
                <div className="ocd-info-row"><span>Job Type</span><span>{d.jobType}</span></div>
                <div className="ocd-info-row"><span>Sector</span><span>{d.sector}</span></div>
                <div className="ocd-info-row"><span>Location</span><span>{d.location}</span></div>
                <div className="ocd-info-row" style={{ borderBottom: "none" }}><span>Package</span><span style={{ color: "var(--green)" }}>{d.package}</span></div>
              </div>
            </div>

            {/* Internship Details */}
            {d.internshipDetails && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Internship Details</h3>
                <div className="ocd-info-rows">
                  <div className="ocd-info-row"><span>Period</span><span>{d.internshipDetails.period}</span></div>
                  <div className="ocd-info-row"><span>Stipend</span><span style={{ color: "var(--green)" }}>{d.internshipDetails.stipend}</span></div>
                  <div className="ocd-info-row" style={{ borderBottom: "none" }}><span>Post-Internship</span><span style={{ color: "var(--green)" }}>{d.internshipDetails.postInternship}</span></div>
                </div>
                {d.internshipDetails.note && (
                  <p className="ocd-note">{d.internshipDetails.note}</p>
                )}
              </div>
            )}

            {/* Special Features */}
            {d.specialFeatures && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Special Features</h3>
                <ul className="ocd-list">
                  {d.specialFeatures.map((f, i) => (
                    <li key={i}><span style={{ color: "var(--green)" }}>&#10003;</span>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Employment Terms */}
            {d.employmentTerms && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Employment Terms</h3>
                <ul className="ocd-list">
                  {d.employmentTerms.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            )}

            {/* How to Apply */}
            {d.howToApply && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">How to Apply</h3>
                <ul className="ocd-list">
                  {d.howToApply.map((h, i) => (
                    <li key={i}><span className="ocd-bullet">&bull;</span>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Documents Required */}
            {d.documentsRequired && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Documents Required</h3>
                <ul className="ocd-list">
                  {d.documentsRequired.map((doc, i) => <li key={i}>{i + 1}. {doc}</li>)}
                </ul>
              </div>
            )}

            {/* Department Coordination */}
            {d.departmentCoordination && (
              <div className="ocd-card">
                <h3 className="ocd-sidebar-title">Department Coordination</h3>
                {d.departmentCoordination.map((c, i) => (
                  <div key={i} className="ocd-dept-item">{c}</div>
                ))}
              </div>
            )}

            {/* Important Instructions */}
            {d.importantInstructions && (
              <div className="ocd-card ocd-card-warn">
                <h3 className="ocd-sidebar-title">Important Instructions</h3>
                <ul className="ocd-list">
                  {d.importantInstructions.map((inst, i) => <li key={i}>{i + 1}. {inst}</li>)}
                </ul>
              </div>
            )}

            {/* Endorsement */}
            {d.endorsement && (
              <div className="ocd-card ocd-card-accent">
                <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.6 }}>
                  &ldquo;{d.endorsement}&rdquo;
                </p>
              </div>
            )}

            {/* Approved By */}
            {d.approvedBy && (
              <div className="ocd-card" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>Approved by</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>{d.approvedBy}</p>
              </div>
            )}

            {/* Contact */}
            {d.contact && (
              <div className="ocd-card ocd-card-dark">
                <h3 style={{ fontWeight: 700, fontSize: "0.8rem", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff" }}>Contact CDC</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a href={`mailto:${d.contact.email}`} className="ocd-contact-link">
                    <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {d.contact.email}
                  </a>
                  <a href={`tel:+91${d.contact.phone}`} className="ocd-contact-link">
                    <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +91 {d.contact.phone}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== MAIN COMPONENT ========== */
export default function OnCampusDrivesContent() {
  const [view, setView] = useState<"listing" | "detail">("listing");
  const [selectedDrive, setSelectedDrive] = useState<CampusDrive | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "upcoming">("all");

  const filtered =
    filter === "all"
      ? campusDrives
      : campusDrives.filter((d) => d.status === filter);

  function showDetail(id: number) {
    const drive = campusDrives.find((d) => d.id === id);
    if (!drive) return;
    setSelectedDrive(drive);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showListing() {
    setView("listing");
    setSelectedDrive(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#drive-")) {
      const id = parseInt(hash.replace("#drive-", ""));
      if (id) showDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "calc(40px + 80px)" }}>
        {view === "listing" ? (
          <>
            {/* Hero */}
            <section className="ocd-hero">
              <div className="ocd-container" style={{ textAlign: "center" }}>
                <span className="ocd-hero-label">Career Development Centre</span>
                <h1 className="ocd-hero-title">On-Campus Drives 2025&ndash;2026</h1>
                <p className="ocd-hero-desc">
                  JKKN Institutions connects students with leading recruiters through exclusive on-campus recruitment drives. Explore upcoming and past campus placements below.
                </p>
                {/* Stats */}
                <div className="ocd-stats-grid">
                  <div className="ocd-stat">
                    <div className="ocd-stat-value">{campusDrives.length}</div>
                    <div className="ocd-stat-label">Companies Visited</div>
                  </div>
                  <div className="ocd-stat">
                    <div className="ocd-stat-value">10+</div>
                    <div className="ocd-stat-label">Positions Offered</div>
                  </div>
                  <div className="ocd-stat">
                    <div className="ocd-stat-value">&#8377;10 LPA</div>
                    <div className="ocd-stat-label">Highest Package</div>
                  </div>
                  <div className="ocd-stat">
                    <div className="ocd-stat-value">2</div>
                    <div className="ocd-stat-label">Colleges Covered</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Filter + Cards */}
            <section className="ocd-container" style={{ paddingTop: 48, paddingBottom: 48 }}>
              <div className="ocd-filter-bar">
                <div>
                  <h2 className="ocd-section-title">Campus Recruitment Drives</h2>
                  <p className="ocd-section-sub">Click on any drive to view full details</p>
                </div>
                <div className="ocd-filter-btns">
                  {(["all", "completed", "upcoming"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`ocd-filter-btn ${filter === f ? "active" : ""}`}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="ocd-empty">
                  <svg width={64} height={64} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#ccc", marginBottom: 16 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p>No drives found for this filter.</p>
                </div>
              ) : (
                <div className="ocd-drive-grid">
                  {filtered.map((d) => (
                    <div
                      key={d.id}
                      className="ocd-drive-card"
                      onClick={() => showDetail(d.id)}
                    >
                      <div className="ocd-drive-card-body">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                          <div className="ocd-drive-card-icon">
                            <SectorIcon sector={d.sector} />
                          </div>
                          <StatusBadge status={d.status} />
                        </div>
                        <h3 className="ocd-drive-card-company">{d.company}</h3>
                        <p className="ocd-drive-card-title">{d.jobTitle}</p>
                        <div className="ocd-drive-card-meta">
                          <div className="ocd-drive-card-meta-item">
                            <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span style={{ fontWeight: 500 }}>{d.package}</span>
                          </div>
                          <div className="ocd-drive-card-meta-item">
                            <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {d.location}
                          </div>
                          <div className="ocd-drive-card-meta-item">
                            <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {d.date}
                          </div>
                          <div className="ocd-drive-card-meta-item">
                            <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            {d.colleges}
                          </div>
                        </div>
                      </div>
                      <div className="ocd-drive-card-footer">
                        <span>{d.sector}</span>
                        <span className="ocd-view-details">
                          View Details
                          <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Contact CTA */}
            <section className="ocd-cta">
              <div className="ocd-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
                  Want to Know About Upcoming Drives?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginBottom: 24 }}>
                  Contact the Career Development Centre for the latest on-campus recruitment updates.
                </p>
                <div className="ocd-cta-btns">
                  <a href="tel:+919865910003" className="ocd-cta-btn ocd-cta-btn-primary">
                    <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call: +91 9865910003
                  </a>
                  <a href="mailto:ceooffice@jkkn.ac.in" className="ocd-cta-btn ocd-cta-btn-outline">
                    <svg width={16} height={16} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email: ceooffice@jkkn.ac.in
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          selectedDrive && <DriveDetail drive={selectedDrive} onBack={showListing} />
        )}
      </main>
      <Footer />

      <style>{`
        /* ===== CONTAINER ===== */
        .ocd-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* ===== FADE IN ===== */
        .ocd-fade-in { animation: ocdFadeIn 0.4s ease-out; }
        @keyframes ocdFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        /* ===== HERO ===== */
        .ocd-hero {
          background: linear-gradient(135deg, var(--green-dark) 0%, #085032 50%, var(--green-dark) 100%);
          color: #fff; padding: 64px 0 80px;
        }
        .ocd-hero-label {
          display: inline-block; background: rgba(15,143,86,0.25); color: var(--green-light);
          font-size: 0.75rem; font-weight: 600; padding: 4px 14px; border-radius: 9999px;
          margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em;
        }
        .ocd-hero-title {
          font-size: clamp(1.75rem, 4vw, 3rem); font-weight: 700; line-height: 1.2; margin-bottom: 16px;
        }
        .ocd-hero-desc {
          color: rgba(255,255,255,0.7); font-size: clamp(0.875rem, 2vw, 1.05rem);
          max-width: 640px; margin: 0 auto 32px; line-height: 1.7;
        }
        .ocd-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
          max-width: 640px; margin: 0 auto;
        }
        .ocd-stat {
          background: rgba(255,255,255,0.08); backdrop-filter: blur(8px);
          border-radius: 16px; padding: 16px; text-align: center;
        }
        .ocd-stat-value { font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; color: var(--green-light); }
        .ocd-stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.5); margin-top: 4px; }

        /* ===== FILTER ===== */
        .ocd-filter-bar {
          display: flex; justify-content: space-between; align-items: start; gap: 16px;
          margin-bottom: 32px; flex-wrap: wrap;
        }
        .ocd-section-title { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); }
        .ocd-section-sub { font-size: 0.8rem; color: var(--text-tertiary); margin-top: 4px; }
        .ocd-filter-btns { display: flex; gap: 8px; flex-wrap: wrap; }
        .ocd-filter-btn {
          padding: 6px 14px; font-size: 0.75rem; font-weight: 500; border-radius: 9999px;
          border: none; cursor: pointer; transition: all 0.2s;
          background: var(--surface-1); color: var(--text-secondary);
          font-family: inherit;
        }
        .ocd-filter-btn:hover { background: var(--surface-2); }
        .ocd-filter-btn.active { background: var(--green-dark); color: #fff; }

        /* ===== DRIVE CARDS GRID ===== */
        .ocd-drive-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          align-items: stretch;
        }
        .ocd-drive-card {
          background: #fff; border-radius: 16px; overflow: hidden; cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid var(--border-light);
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
        }
        .ocd-drive-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(11,109,65,0.12);
          border-color: var(--green);
        }
        .ocd-drive-card-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
        .ocd-drive-card-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(11,109,65,0.06); display: flex;
          align-items: center; justify-content: center; color: var(--green);
        }
        .ocd-drive-card-company {
          font-weight: 700; font-size: 1.1rem; color: var(--text-primary);
          margin-bottom: 4px; line-height: 1.3;
        }
        .ocd-drive-card-title {
          font-size: 0.8rem; color: var(--text-tertiary); margin-bottom: 16px;
        }
        .ocd-drive-card-meta { display: flex; flex-direction: column; gap: 8px; margin-top: auto; }
        .ocd-drive-card-meta-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.75rem; color: var(--text-secondary);
        }
        .ocd-drive-card-meta-item svg { color: var(--green); flex-shrink: 0; }
        .ocd-drive-card-footer {
          padding: 12px 24px; background: var(--surface-1);
          border-top: 1px solid var(--border-light);
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.75rem; color: var(--text-tertiary);
          margin-top: auto;
        }
        .ocd-view-details {
          color: var(--green); font-weight: 500;
          display: flex; align-items: center; gap: 4px;
        }

        /* ===== BADGES ===== */
        .ocd-badge {
          font-size: 0.7rem; font-weight: 600; padding: 3px 10px; border-radius: 9999px;
        }
        .ocd-badge-upcoming { background: rgba(11,109,65,0.08); color: var(--green); border: 1px solid rgba(11,109,65,0.2); }
        .ocd-badge-completed { background: var(--surface-1); color: var(--text-secondary); border: 1px solid var(--border); }
        .ocd-badge-ongoing { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }

        /* ===== ICON ===== */
        .ocd-icon { width: 20px; height: 20px; }

        /* ===== EMPTY STATE ===== */
        .ocd-empty { text-align: center; padding: 64px 0; color: var(--text-tertiary); font-size: 1rem; }

        /* ===== CTA ===== */
        .ocd-cta { background: var(--green-dark); color: #fff; padding: 48px 0; }
        .ocd-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .ocd-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 500; padding: 12px 24px; border-radius: 12px;
          transition: all 0.2s; text-decoration: none; font-size: 0.875rem;
          font-family: inherit;
        }
        .ocd-cta-btn-primary { background: var(--green); color: #fff; }
        .ocd-cta-btn-primary:hover { background: var(--green-light); }
        .ocd-cta-btn-outline {
          background: rgba(255,255,255,0.08); color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .ocd-cta-btn-outline:hover { background: rgba(255,255,255,0.15); }

        /* ===== DETAIL VIEW ===== */
        .ocd-back-bar { background: #fff; border-bottom: 1px solid var(--border-light); }
        .ocd-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.8rem; color: var(--text-secondary); font-weight: 500;
          background: none; border: none; cursor: pointer; padding: 12px 0;
          transition: color 0.2s; font-family: inherit;
        }
        .ocd-back-btn:hover { color: var(--green); }
        .ocd-back-btn:hover svg { transform: translateX(-3px); transition: transform 0.2s; }

        .ocd-detail-header {
          background: #fff; border-radius: 16px; overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }
        .ocd-detail-header-top {
          background: linear-gradient(135deg, var(--green-dark), #085032);
          color: #fff; padding: 24px 32px;
          display: flex; justify-content: space-between; align-items: start; gap: 16px;
        }
        .ocd-detail-cdc-label {
          color: var(--green-light); font-size: 0.7rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .ocd-detail-company { font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 8px; }
        .ocd-detail-ref { color: rgba(255,255,255,0.6); font-size: 0.8rem; }
        .ocd-detail-sector-icon {
          width: 56px; height: 56px; border-radius: 12px;
          background: rgba(255,255,255,0.1); display: flex;
          align-items: center; justify-content: center; color: #fff;
          flex-shrink: 0;
        }
        .ocd-detail-quick-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .ocd-detail-quick-item {
          padding: 16px; text-align: center;
          border-right: 1px solid var(--border-light);
        }
        .ocd-detail-quick-item:last-child { border-right: none; }
        .ocd-detail-quick-label { font-size: 0.7rem; color: var(--text-tertiary); margin-bottom: 4px; }
        .ocd-detail-quick-value { font-size: 0.8rem; font-weight: 600; color: var(--text-primary); }

        .ocd-detail-grid {
          display: grid; grid-template-columns: 2fr 1fr; gap: 24px;
        }
        .ocd-detail-main { display: flex; flex-direction: column; gap: 24px; }
        .ocd-detail-sidebar { display: flex; flex-direction: column; gap: 24px; }

        /* ===== CARDS ===== */
        .ocd-card {
          background: #fff; border-radius: 16px; padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid var(--border-light);
        }
        .ocd-card-accent {
          background: rgba(11,109,65,0.04); border-color: rgba(11,109,65,0.12);
        }
        .ocd-card-warn {
          background: #fffbeb; border-color: #fde68a;
        }
        .ocd-card-dark {
          background: var(--green-dark); border-color: transparent; color: #fff;
        }
        .ocd-card-title {
          font-weight: 700; font-size: 1rem; color: var(--text-primary);
          margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
        }
        .ocd-card-title svg { color: var(--green); flex-shrink: 0; }
        .ocd-card-text { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; }
        .ocd-sidebar-title {
          font-weight: 700; font-size: 0.8rem; color: var(--text-primary);
          text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;
        }

        /* ===== LISTS ===== */
        .ocd-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .ocd-list li {
          font-size: 0.8rem; color: var(--text-secondary); line-height: 1.6;
          display: flex; align-items: start; gap: 8px;
        }
        .ocd-bullet { color: var(--green); flex-shrink: 0; margin-top: 2px; }

        /* ===== TAGS ===== */
        .ocd-tag-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .ocd-tag-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .ocd-tag {
          display: inline-block; font-size: 0.7rem; font-weight: 500;
          padding: 6px 12px; border-radius: 9999px;
        }
        .ocd-tag-neutral { background: var(--surface-1); color: var(--text-secondary); }
        .ocd-tag-green { background: rgba(11,109,65,0.06); color: var(--green); font-weight: 500; text-align: center; border-radius: 8px; }
        .ocd-tag-accent { background: rgba(11,109,65,0.06); color: var(--green); }

        /* ===== INFO ROWS ===== */
        .ocd-info-rows { display: flex; flex-direction: column; gap: 12px; }
        .ocd-info-row {
          display: flex; justify-content: space-between; align-items: start;
          font-size: 0.8rem; padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .ocd-info-row > span:first-child { color: var(--text-tertiary); }
        .ocd-info-row > span:last-child { font-weight: 500; color: var(--text-primary); text-align: right; }

        /* ===== MISC ===== */
        .ocd-dept-item {
          border-left: 3px solid var(--green); padding: 4px 0 4px 12px;
          font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 8px;
        }
        .ocd-step-num {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(11,109,65,0.1); color: var(--green);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.7rem; font-weight: 700; flex-shrink: 0;
        }
        .ocd-position-card {
          border: 1px solid var(--border-light); border-radius: 12px; padding: 16px;
        }
        .ocd-position-title { font-weight: 600; font-size: 0.8rem; color: var(--text-primary); }
        .ocd-position-vacancy {
          font-size: 0.7rem; background: rgba(11,109,65,0.06); color: var(--green);
          padding: 2px 8px; border-radius: 9999px; white-space: nowrap;
        }
        .ocd-note {
          margin-top: 12px; font-size: 0.7rem; color: var(--text-tertiary);
          background: var(--surface-1); border-radius: 8px; padding: 8px;
          line-height: 1.6;
        }
        .ocd-mini-label {
          font-size: 0.65rem; color: var(--text-tertiary); font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;
        }
        .ocd-contact-link {
          display: flex; align-items: center; gap: 8px;
          color: var(--green-light); text-decoration: none; font-size: 0.8rem;
          transition: color 0.2s;
        }
        .ocd-contact-link:hover { color: #6ee7b7; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ocd-drive-grid { grid-template-columns: repeat(2, 1fr); }
          .ocd-detail-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .ocd-drive-grid { grid-template-columns: 1fr; }
          .ocd-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .ocd-detail-quick-grid { grid-template-columns: repeat(2, 1fr); }
          .ocd-detail-quick-item { border-bottom: 1px solid var(--border-light); }
          .ocd-detail-header-top { padding: 20px; flex-direction: column; }
          .ocd-filter-bar { flex-direction: column; }
          .ocd-cta-btns { flex-direction: column; align-items: center; }
          .ocd-hero { padding: 48px 0 56px; }
        }
      `}</style>
    </>
  );
}
