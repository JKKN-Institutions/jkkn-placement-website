"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "About",
    href: "#about",
    dropdown: [
      { label: "CDC", href: "#about" },
      { label: "Managing Director", href: "#team" },
    ],
  },
  {
    label: "CDC Process",
    href: "#training",
    dropdown: [
      { label: "Placement Process", href: "#training" },
      { label: "Golden Hours Training", href: "#training" },
      { label: "Training Highlights", href: "#training" },
      { label: "Statistics", href: "#recruitment" },
    ],
  },
  { label: "Our Recruiters", href: "#recruitment" },
  {
    label: "Others",
    href: "#",
    dropdown: [
      { label: "Events", href: "#gallery" },
      { label: "Gallery", href: "#gallery" },
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
      <div className="bg-white/95 shadow-md backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image
                src="https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/d3d124dc-fd80-4d7d-939b-2139a9d7de93.svg"
                alt="JKKN Logo"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-heading">JKKN</p>
                <p className="text-[11px] text-body">
                  Career Development Center
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-heading transition-colors hover:text-green"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                  </a>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full min-w-[200px] rounded-md border border-gray-100 bg-white py-1 shadow-xl">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-body transition-colors hover:bg-green/5 hover:text-green"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href="#footer"
                className="hidden rounded-md bg-green px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-light sm:block"
              >
                Contact Us
              </a>
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
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-heading hover:bg-green/5 hover:text-green"
                  onClick={() => !link.dropdown && setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.dropdown?.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-7 py-2 text-sm text-body hover:text-green"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#footer"
              className="mt-3 block rounded-md bg-green py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
