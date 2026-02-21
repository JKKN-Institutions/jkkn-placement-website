"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Faculty", href: "/about#faculty" },
    ],
  },
  {
    label: "Colleges",
    href: "/colleges",
  },
  {
    label: "Placements",
    href: "/placements",
    dropdown: [
      { label: "JKKN Dental College & Hospital", href: "/placements/dental" },
      { label: "JKKN College of Pharmacy", href: "/placements/pharmacy" },
      { label: "JKKN College of Nursing", href: "/placements/nursing" },
      { label: "JKKN College of Allied Health Sciences", href: "/placements/allied-health" },
      { label: "JKKN College of Engineering", href: "/placements/engineering" },
      { label: "JKKN College of Arts and Science", href: "/placements/arts-science" },
    ],
  },
  { label: "On-Campus Drives", href: "/on-campus-drives" },
  { label: "Internships", href: "/internships" },
  { label: "Our Recruiters", href: "/recruiters" },
  { label: "AI Workshop", href: "/ai-workshop" },
  {
    label: "More",
    href: "#",
    dropdown: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-green-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-white/80 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> +91-9865910003
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Mail className="h-3 w-3" /> cdc@jkkn.ac.in
            </span>
          </div>
          <div className="hidden text-xs sm:block">
            Mon - Sat: 8am - 5pm | Sunday: CLOSED
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1400 }}>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden translate-y-2">
                <Image
                  src="https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/d3d124dc-fd80-4d7d-939b-2139a9d7de93.svg"
                  alt="JKKN Logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-0.5 whitespace-nowrap px-2.5 py-2 text-[13px] font-medium text-heading transition-colors hover:text-green"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full min-w-[200px] rounded-md border border-gray-100 bg-white py-1 shadow-xl">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-body transition-colors hover:bg-green/5 hover:text-green"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA + Mobile */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden rounded-md bg-green px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-light sm:block"
              >
                Contact Us
              </Link>
              <button
                className="rounded-md p-2 text-heading lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-heading hover:bg-green/5 hover:text-green"
                  onClick={() => !link.dropdown && setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown?.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-7 py-2 text-sm text-body hover:text-green"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-3 block rounded-md bg-green py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
