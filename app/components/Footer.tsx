"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const institutions = [
  { label: "JKKN Dental College and Hospital", href: "https://dental.jkkn.ac.in/" },
  { label: "JKKN College of Allied Health Sciences", href: "https://ahs.jkkn.ac.in/" },
  { label: "JKKN College of Pharmacy", href: "https://pharmacy.jkkn.ac.in" },
  { label: "Sresakthimayeil Institute Of Nursing And Research", href: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
  { label: "JKKN College of Education", href: "https://edu.jkkn.ac.in/" },
  { label: "JKKN College of Arts and Science", href: "https://cas.jkkn.ac.in/" },
  { label: "JKKN College of Engineering", href: "https://engg.jkkn.ac.in/" },
  { label: "Nattraja Vidhyalya", href: "#" },
  { label: "JKKN Matriculation Higher Secondary School", href: "#" },
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

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#032816" }} className="text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Left — About + Contact */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/d3d124dc-fd80-4d7d-939b-2139a9d7de93.svg"
                alt="JKKN Logo"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
              />
              <div>
                <p className="text-base font-bold leading-tight">JKKN Institutions</p>
                <p className="text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase">
                  Excellence in Education
                </p>
              </div>
            </div>

            <p className="mb-6 text-[13px] leading-relaxed text-gray-400" style={{ maxWidth: 300 }}>
              JKKN Institutions, recognized as one of the best colleges in Erode
              Region, is committed to providing quality education and fostering
              innovation, research, and holistic student development to prepare
              learners for global challenges.
            </p>

            <ul className="space-y-3.5">
              <li className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(15,143,86,0.2)" }}
                >
                  <Phone className="h-3.5 w-3.5" style={{ color: "#0f8f56" }} />
                </span>
                <a
                  href="tel:+919345855001"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  +91 9345855001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(15,143,86,0.2)" }}
                >
                  <Mail className="h-3.5 w-3.5" style={{ color: "#0f8f56" }} />
                </span>
                <a
                  href="mailto:info@jkkn.ac.in"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  info@jkkn.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full mt-0.5"
                  style={{ background: "rgba(15,143,86,0.2)" }}
                >
                  <MapPin className="h-3.5 w-3.5" style={{ color: "#0f8f56" }} />
                </span>
                <span className="text-sm leading-relaxed text-gray-300">
                  Natarajapuram, NH-544 (Salem To Coimbatore National Highway),
                  Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183
                </span>
              </li>
            </ul>
          </div>

          {/* Center — Our Institutions */}
          <div>
            <h4 className="mb-5 flex items-center gap-2.5 text-sm font-bold tracking-wider">
              <span
                className="inline-block h-[2px] w-6 rounded-full"
                style={{ background: "#0f8f56" }}
              />
              Our Institutions
            </h4>
            <ul className="space-y-2">
              {institutions.map((inst) => (
                <li key={inst.label} className="flex items-center gap-2.5">
                  <a
                    href={inst.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-gray-400 transition-colors hover:text-green-light"
                  >
                    {inst.label}
                  </a>
                  <span
                    className="inline-block h-4 w-px shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Our Location */}
          <div>
            <h4 className="mb-5 flex items-center gap-2.5 text-sm font-bold tracking-wider">
              <span
                className="inline-block h-[2px] w-6 rounded-full"
                style={{ background: "#0f8f56" }}
              />
              Our Location
            </h4>
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123!2d77.73060452273064!3d11.445400813968119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e0a0a0a0a0a%3A0x0!2sJKKN+Educational+Institutions!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="170"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JKKN Institutions Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=11.445400813968119,77.73060452273064"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-3 w-3"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <p>&copy; 2026 JKKN Institutions. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Admin
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                style={{ background: "rgba(255,255,255,0.07)" }}
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
