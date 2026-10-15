// Every fact on the homepage. Pure data + pure helpers, no imports:
// scripts/home-data.test.mjs loads this file directly with Node's type stripping.

const MEDIA = "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/";

export type CollegeSlug = "dental" | "pharmacy" | "nursing" | "allied-health" | "engineering" | "arts-science";

export type College = {
  slug: CollegeSlug;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  programmes: string[];
  recruiters: string[];
  grow: number;
};

export const colleges: College[] = [
  {
    slug: "dental",
    name: "JKKN Dental College and Hospital",
    short: "Dental",
    image: `${MEDIA}3848aa24-155a-4759-afc2-17987d647e8b.png`,
    imageAlt: "The JKKN Dental College and Hospital building and its yellow name board",
    programmes: ["BDS", "MDS in Orthodontics, Prosthodontics, Periodontics, Oral Surgery, Conservative Dentistry, Paediatric Dentistry, Oral Pathology, Public Health Dentistry and Oral Medicine"],
    recruiters: ["Apollo Hospitals", "Clove Dental", "Manipal Hospitals", "Fortis Healthcare", "Dental Lounge"],
    grow: 5,
  },
  {
    slug: "pharmacy",
    name: "JKKN College of Pharmacy",
    short: "Pharmacy",
    image: `${MEDIA}babdddef-4ba7-4caa-acf2-eda9b4be0199.jpg`,
    imageAlt: "The JKKN College of Pharmacy building",
    programmes: ["B.Pharm", "M.Pharm", "Pharm.D", "D.Pharm"],
    recruiters: ["Omega Healthcare", "Cipla", "Sun Pharma", "Dr. Reddy's", "Hetero", "Lupin", "Aurobindo", "Biocon"],
    grow: 2,
  },
  {
    slug: "nursing",
    name: "JKKN College of Nursing",
    short: "Nursing",
    image: `${MEDIA}f229bf34-b6d0-4435-af52-3479b4ff22e2.webp`,
    imageAlt: "The JKKN College of Nursing building",
    programmes: ["B.Sc. Nursing", "M.Sc. Nursing", "P.B.B.Sc. Nursing"],
    recruiters: ["Omega Healthcare", "Apollo Hospitals", "MIOT Hospitals", "Fortis Healthcare", "KIMS", "Global Hospitals", "Kauvery Hospital"],
    grow: 3,
  },
  {
    slug: "allied-health",
    name: "JKKN College of Allied Health Sciences",
    short: "Allied Health Sciences",
    image: `${MEDIA}0a7ec366-6d23-4745-a201-dcd771b9f47d.jpg`,
    imageAlt: "The JKKN College of Allied Health Sciences building",
    programmes: ["B.Sc. Medical Lab Technology", "B.Sc. Radiology", "B.Sc. Cardiac Technology", "B.Sc. Optometry", "B.Sc. Renal Dialysis", "M.Sc."],
    recruiters: ["Omega Healthcare", "Apollo Diagnostics", "SRL Diagnostics", "Thyrocare", "Narayana Health", "KIMS", "Vijaya Diagnostic Centre"],
    grow: 2,
  },
  {
    slug: "engineering",
    name: "JKKN College of Engineering and Technology (Autonomous)",
    short: "Engineering",
    image: `${MEDIA}f81d3b5b-5d88-4350-a779-e5487830fdbd.JPG`,
    imageAlt: "The JKKN College of Engineering and Technology campus",
    programmes: ["B.E. / B.Tech in CSE, ECE, EEE, Mechanical, Civil and AI & DS", "M.E."],
    recruiters: ["Foxconn", "Pronoia Insurance Marketing", "TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies", "L&T", "Zoho", "Accenture"],
    grow: 3,
  },
  {
    slug: "arts-science",
    name: "JKKN College of Arts and Science (Autonomous)",
    short: "Arts and Science",
    image: `${MEDIA}af856eac-ce3b-4437-9562-203201b209d5.jpg`,
    imageAlt: "The JKKN College of Arts and Science building and sports courts, seen from above",
    programmes: ["B.Sc.", "B.Com", "BBA", "BCA", "M.Sc.", "M.Com", "MBA", "MCA"],
    recruiters: ["Sakthi Auto Component", "Pronoia Insurance Marketing", "Foxconn", "TCS", "Infosys BPO", "Concentrix", "Amazon", "HDFC Bank", "ICICI Bank"],
    grow: 2,
  },
];

export function collegeShortName(slug: CollegeSlug): string {
  const college = colleges.find((c) => c.slug === slug);
  if (!college) throw new Error(`Unknown college: ${slug}`);
  return college.short;
}

export type Figure = {
  id: string;
  whole: number;
  fraction?: string;
  suffix?: string;
  separator?: boolean;
  caption: string;
};

export const figures: Figure[] = [
  { id: "rate", whole: 92, caption: "per cent placement rate across the six colleges" },
  { id: "recruiters", whole: 500, suffix: "+", caption: "recruiting partners" },
  { id: "highest", whole: 8, fraction: ".5", caption: "lakh rupees a year, the highest package" },
  { id: "average", whole: 3, fraction: ".5", caption: "lakh rupees a year, the average package" },
  { id: "alumni", whole: 50000, suffix: "+", separator: true, caption: "alumni placed" },
  { id: "years", whole: 74, suffix: "+", caption: "years of JKKN Institutions" },
];

export function formatFigure(f: Figure): string {
  const whole = f.separator ? f.whole.toLocaleString("en-US") : String(f.whole);
  return `${whole}${f.fraction ?? ""}${f.suffix ?? ""}`;
}

export type Photo = { src: string; alt: string; width: number; height: number };

export const heroImages: { gate: Photo; handover: Photo } = {
  gate: {
    src: `${MEDIA}06032de1-cbb1-498b-bdc1-52e1ffd4c8e9.webp`,
    alt: "The J.K.K. Nattraja Institutions gate in Komarapalayam, its pillars naming the colleges",
    width: 1536,
    height: 864,
  },
  handover: {
    src: "/placement-event.png",
    alt: "A Learner receives her offer letter on stage at the Premier Fine Linens campus drive",
    width: 618,
    height: 626,
  },
};

export const closingPhotos: Photo[] = [
  { src: colleges[0].image, alt: colleges[0].imageAlt, width: 1080, height: 606 },
  { src: colleges[1].image, alt: colleges[1].imageAlt, width: 640, height: 426 },
  { src: colleges[5].image, alt: colleges[5].imageAlt, width: 640, height: 360 },
];

export const recruiterLogos = [
  { name: "TCS", src: `${MEDIA}089ad387-05a5-4004-b25f-25f7e15c4799.png`, width: 305, height: 165 },
  { name: "HCL", src: `${MEDIA}e3afef79-adc6-45c9-91e7-0ed5601ee01c.png`, width: 275, height: 183 },
  { name: "Bosch", src: `${MEDIA}32f2a003-5955-481c-845e-4a189e6bdb38.jpg`, width: 259, height: 194 },
  { name: "Ivy Mobility", src: `${MEDIA}5d1b520f-9bab-4319-be8b-61cee8dcc587.png`, width: 389, height: 130 },
  { name: "Buddi.ai", src: `${MEDIA}5c227ba7-9254-42b0-b821-7b3107d78226.png`, width: 310, height: 162 },
  { name: "Tech Mahindra", src: `${MEDIA}8bed5615-ad87-44ab-bef7-ee1d06adcb7b.png`, width: 422, height: 119 },
  { name: "TVS", src: `${MEDIA}c4daea95-90d0-41e9-a693-bad13eeed614.png`, width: 300, height: 168 },
];

export const sectors = [
  { title: "Healthcare and hospitals", companies: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "MIOT Hospitals", "Kauvery Hospital"] },
  { title: "IT and software", companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies"] },
  { title: "Pharmaceutical", companies: ["Cipla", "Sun Pharma", "Dr. Reddy's Laboratories", "Hetero Pharma", "Lupin"] },
  { title: "Manufacturing", companies: ["Sakthi Auto Component", "Foxconn", "L&T", "Ashok Leyland", "TVS Motor Company"] },
  { title: "Diagnostics", companies: ["SRL Diagnostics", "Thyrocare", "Apollo Diagnostics", "Vijaya Diagnostic Centre", "Metropolis Healthcare"] },
  { title: "Insurance and services", companies: ["Pronoia Insurance Marketing", "Omega Healthcare", "Concentrix", "HDFC Bank", "ICICI Bank"] },
];

export const processSteps = [
  { line: "First, you register.", detail: "Every final-year Learner signs up with the Placement Cell of their college." },
  { line: "Then you train.", detail: "Aptitude, communication, mock interviews and resumes, taught by our Learning Facilitators." },
  { line: "Recruiters test you.", detail: "Aptitude tests, technical rounds and HR interviews, held on our campus in Komarapalayam." },
  { line: "You leave hired.", detail: "Selected Learners receive their offer letters through the Placement Cell." },
];

export type Poster = { n: number; college: CollegeSlug; company: string; learners: number };

// Transcribed from public/alumni/<n>.jpg (batch 2025, placement 2024-25).
// Poster 20 is left out: same name list as 19 with mismatched photos.
export const posters: Poster[] = [
  { n: 1, college: "allied-health", company: "Omega Healthcare", learners: 2 },
  { n: 2, college: "nursing", company: "Omega Healthcare", learners: 2 },
  { n: 3, college: "pharmacy", company: "Omega Healthcare", learners: 10 },
  { n: 4, college: "arts-science", company: "Foxconn", learners: 7 },
  { n: 5, college: "arts-science", company: "Foxconn", learners: 6 },
  { n: 6, college: "engineering", company: "Foxconn", learners: 7 },
  { n: 7, college: "engineering", company: "Foxconn", learners: 10 },
  { n: 8, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 9, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 10, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 9 },
  { n: 11, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 12, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 13, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 14, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 15, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 16, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 17, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 4 },
  { n: 18, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 8 },
  { n: 19, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 21, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 22, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 23, college: "engineering", company: "Pronoia Insurance Marketing", learners: 4 },
];

export const companyPackages: Record<string, string> = {
  "Sakthi Auto Component Limited": "2.71",
  "Pronoia Insurance Marketing": "4.5",
  Foxconn: "2.00",
  "Omega Healthcare": "2.70",
};

export type OfferRow = { company: string; colleges: CollegeSlug[]; offers: number; packageLpa: string };

export function summariseOffers(list: Poster[], packages: Record<string, string>): OfferRow[] {
  const rows = new Map<string, OfferRow>();
  for (const p of list) {
    const packageLpa = packages[p.company];
    if (packageLpa === undefined) throw new Error(`No package recorded for ${p.company}`);
    const row = rows.get(p.company) ?? { company: p.company, colleges: [], offers: 0, packageLpa };
    row.offers += p.learners;
    if (!row.colleges.includes(p.college)) row.colleges.push(p.college);
    rows.set(p.company, row);
  }
  return [...rows.values()]
    .map((r) => ({ ...r, colleges: [...r.colleges].sort() }))
    .sort((a, b) => b.offers - a.offers);
}

export const offerRows = summariseOffers(posters, companyPackages);
export const posterTotal = offerRows.reduce((sum, r) => sum + r.offers, 0);

export const faqs = [
  {
    q: "What is the placement rate?",
    a: "The Placement Cell reports a 92% placement rate across the six colleges, with more than 500 recruiting partners. Each college has a placement coordinator who works with recruiters in its field.",
  },
  {
    q: "Which companies recruit here?",
    a: "Healthcare, IT, pharmaceutical, manufacturing, diagnostics and service companies, among them Apollo Hospitals, TCS, Infosys, Cipla, Sun Pharma, Foxconn, Sakthi Auto Component and Omega Healthcare.",
  },
  {
    q: "What do recruiters pay?",
    a: "The highest package offered is ₹8.5 LPA and the average is ₹3.5 LPA. Packages vary by programme, college and sector.",
  },
  {
    q: "How does a campus drive work?",
    a: "Learners register with the Placement Cell and complete pre-placement training. Recruiters then hold aptitude tests, technical rounds and HR interviews on campus, and selected Learners receive offer letters through the cell.",
  },
  {
    q: "How are Learners trained?",
    a: "Our Learning Facilitators teach aptitude and reasoning, English communication, group discussion, mock technical and HR interviews and resume writing, with guest lectures from industry before the placement season.",
  },
  {
    q: "Do internships lead to offers?",
    a: "Often. Many recruiters offer pre-placement internships in the pre-final year, and strong interns are offered full-time roles. The Placement Cell arranges summer and semester internships.",
  },
  {
    q: "How can a recruiter visit?",
    a: "Write to cdc@jkkn.ac.in or call +91 98659 10003. The Placement Cell arranges the venue, shortlisting and logistics, for one programme or a pool drive across all six colleges.",
  },
];

export const contact = {
  email: "cdc@jkkn.ac.in",
  phone: "+91 98659 10003",
  phoneHref: "tel:+919865910003",
  hours: "Monday to Saturday, 8 am to 5 pm",
  address: "Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu 638183",
};
