"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  Camera,
  Clock,
} from "lucide-react";

const quickLinks = [
  { label: "About us", href: "#about" },
  { label: "Institutions", href: "#institutions" },
  { label: "Golden Hour Training", href: "#training" },
  { label: "Our Recruiters", href: "#recruitment" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

const galleryThumbs = [
  "bg-green/15",
  "bg-gold/15",
  "bg-green-light/15",
  "bg-green/10",
  "bg-gold/10",
  "bg-green-light/10",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="footer" className="bg-dark text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About column */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/d3d124dc-fd80-4d7d-939b-2139a9d7de93.svg"
                alt="JKKN Logo"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div>
                <p className="text-sm font-bold">JKKN CDC</p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-green"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Newsletter */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <span className="text-sm text-gray-400">
                  JKKN Educational Institutions, Natarajapuram, NH-544,
                  Kumarapalayam (TK), Namakkal (DT), Tamil Nadu 638183
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-green" />
                <span className="text-sm text-gray-400">+91-9865910003</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-green" />
                <span className="text-sm text-gray-400">cdc@jkkn.ac.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-green" />
                <span className="text-sm text-gray-400">
                  Mon - Sat: 8am - 5pm
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter + Gallery */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gold">
              Newsletter
            </h4>
            <p className="mb-3 text-sm text-gray-400">
              Subscribe our newsletter to get our latest update &amp; news.
            </p>
            <form
              className="mb-6 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none ring-1 ring-white/10 focus:ring-green"
              />
              <button
                type="submit"
                className="rounded-md bg-green px-3 py-2 transition-colors hover:bg-green-light"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <h5 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
              Gallery
            </h5>
            <div className="grid grid-cols-3 gap-1.5">
              {galleryThumbs.map((color, idx) => (
                <div
                  key={idx}
                  className={`flex h-14 items-center justify-center rounded-md ${color} cursor-pointer transition-opacity hover:opacity-80`}
                >
                  <Camera className="h-3.5 w-3.5 text-white opacity-40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2025 jicate Solutions. All rights reserved.</p>
          <p>JKKN Career Development Center</p>
        </div>
      </div>
    </footer>
  );
}
