import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const institutions = [
  { label: "JKKN Dental College and Hospital", href: "https://dental.jkkn.ac.in" },
  { label: "JKKN College of Allied Health Sciences", href: "https://ahs.jkkn.ac.in/" },
  { label: "JKKN College of Pharmacy", href: "https://pharmacy.jkkn.ac.in/" },
  { label: "Sresakthimayeil Institute Of Nursing And Research", href: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
  { label: "JKKN College of Education", href: "https://edu.jkkn.ac.in/" },
  { label: "JKKN College of Arts and Science (Autonomous)", href: "https://cas.jkkn.ac.in/" },
  { label: "JKKN College of Engineering and Technology (Autonomous)", href: "https://engg.jkkn.ac.in/" },
  { label: "Nattraja Vidhyalya", href: "https://nv.jkkn.ac.in/" },
  { label: "JKKN Matriculation Higher Secondary School", href: "https://school.jkkn.ac.in/" },
];

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/jkkninstitution",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@JKKNINSTITUTIONS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.64 31.64 0 000 12a31.64 31.64 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.64 31.64 0 0024 12a31.64 31.64 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/myjkkn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/school/jkkninstitutions/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jkkninstitutions/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.25 2.43.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.46.36 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.97-.41 2.43-.24.61-.52 1.05-.98 1.51-.46.46-.9.74-1.51.98-.46.17-1.26.36-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.25-2.43-.41a4.08 4.08 0 01-1.51-.98 4.08 4.08 0 01-.98-1.51c-.17-.46-.36-1.26-.41-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.97.41-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.17 1.26-.36 2.43-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 00-2.13 1.38A5.87 5.87 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.87 5.87 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 002.13-1.38 5.87 5.87 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 00-1.38-2.13A5.87 5.87 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
];

// Mirrors the jkkn.ac.in footer: green gradient, yellow accents, institutions list and map.
export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(to bottom right, var(--green), var(--green), #047857)" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* About + contact */}
          <div>
            <a href="https://jkkn.ac.in" className="group mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gold to-yellow-400 shadow-lg shadow-gold/30 transition-transform duration-300 group-hover:scale-105">
                <GraduationCap className="h-7 w-7 text-gray-900" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xl font-bold">JKKN Institutions</p>
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Excellence in Education
                </p>
              </div>
            </a>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/80">
              JKKN Institutions, recognized as one of the best colleges in Erode Region, is
              committed to providing quality education and fostering innovation, research, and
              holistic learner development to prepare learners for global challenges.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+919345855001"
                className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
              >
                <div className="rounded-xl bg-white/10 p-2.5 transition-colors group-hover:bg-gold/30">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                </div>
                <span className="text-sm">+91 9345855001</span>
              </a>
              <a
                href="mailto:info@jkkn.ac.in"
                className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
              >
                <div className="rounded-xl bg-white/10 p-2.5 transition-colors group-hover:bg-gold/30">
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                </div>
                <span className="text-sm">info@jkkn.ac.in</span>
              </a>
              <div className="flex items-start gap-4 text-white/80">
                <div className="shrink-0 rounded-xl bg-white/10 p-2.5">
                  <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                </div>
                <span className="text-sm">
                  Natarajapuram, NH-544 (Salem To Coimbatore National Highway),
                  <br />
                  Komarapalayam (TK),
                  <br />
                  Namakkal (DT),
                  <br />
                  Tamil Nadu - 638183
                </span>
              </div>
            </div>
          </div>

          {/* Our Institutions */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <span className="h-0.5 w-8 rounded-full bg-gold" />
              Our Institutions
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {institutions.map((inst, i) => (
                <li key={inst.label} className="flex items-center">
                  <a
                    href={inst.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white transition-all duration-300 hover:text-gold"
                  >
                    {inst.label}
                  </a>
                  {i < institutions.length - 1 && <span className="ml-6 text-white/30">|</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Location */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <span className="h-0.5 w-8 rounded-full bg-gold" />
              Our Location
            </h2>
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123!2d77.73060452273064!3d11.445400813968119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e0a0a0a0a0a%3A0x0!2sJKKN+Educational+Institutions!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JKKN Institutions Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-6 md:flex-row lg:px-8">
          <p className="text-center text-sm text-white/70 md:text-left">
            &copy; 2026 JKKN Institutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-xl border border-white/10 bg-white/10 p-2.5 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-gray-900"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
