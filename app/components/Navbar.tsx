"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Learning Facilitators", href: "/about#faculty" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    dropdown: [
      { label: "JKKN Dental College and Hospital", href: "/placements/dental" },
      { label: "JKKN College of Pharmacy", href: "/placements/pharmacy" },
      { label: "JKKN College of Nursing", href: "/placements/nursing" },
      { label: "JKKN College of Allied Health Sciences", href: "/placements/allied-health" },
      { label: "JKKN College of Engineering and Technology (Autonomous)", href: "/placements/engineering" },
      { label: "JKKN College of Arts and Science (Autonomous)", href: "/placements/arts-science" },
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
  { label: "Contact", href: "/contact" },
];

const LOGO =
  "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/d3d124dc-fd80-4d7d-939b-2139a9d7de93.svg";

function isActive(pathname: string, link: NavLink) {
  if (link.href === "/") return pathname === "/";
  if (link.href !== "#" && pathname.startsWith(link.href)) return true;
  return !!link.dropdown?.some((item) => pathname === item.href.split("#")[0]);
}

// Slim white bar: logo, pill links (active one filled green), Contact as the button.
const desktopLinks = navLinks.filter((link) => link.href !== "/contact");
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // On the homepage the bar sits inside the hero until the page is scrolled.
  const overlay = pathname === "/" && !scrolled && !mobileOpen;

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
        overlay
          ? "border-transparent bg-transparent"
          : "border-gray-200 bg-white shadow-[0_6px_20px_-14px_rgba(3,40,22,0.35)]"
      }`}
    >
      <div className="mx-auto px-4 lg:px-6" style={{ maxWidth: 1400 }}>
        <div className="flex h-[72px] items-center justify-between gap-3 lg:h-[88px]">
          <Link href="/" className="group relative z-10 flex shrink-0 items-center">
            <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-105 lg:h-20 lg:w-20">
              <Image src={LOGO} alt="JKKN Institutions" fill priority className="object-contain" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden min-w-0 items-center lg:flex xl:gap-x-1" aria-label="Main">
            {desktopLinks.map((link) => {
              const active = isActive(pathname, link);
              const itemClass = `flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[12px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green xl:px-3.5 xl:text-[14px] ${
                active
                  ? "bg-green text-white"
                  : "text-gray-800 hover:bg-green/10 hover:text-green"
              }`;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.dropdown ? (
                    <button
                      type="button"
                      className={itemClass}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="menu"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      onKeyDown={(e) => e.key === "Escape" && setOpenDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link href={link.href} className={itemClass}>
                      {link.label}
                    </Link>
                  )}
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full min-w-[300px] pt-2">
                      <div className="overflow-hidden rounded-xl bg-white py-2 shadow-[0_18px_44px_-18px_rgba(3,40,22,0.35)] ring-1 ring-black/5" role="menu">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-gray-800 transition-colors hover:bg-green/5 hover:text-green"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group hidden min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-green px-5 text-[13px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(11,109,65,0.6)] transition-colors duration-200 hover:bg-[#085032] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green lg:inline-flex xl:px-6 xl:text-[14px]"
          >
            Contact
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full bg-green transition-all duration-300 ${
                  mobileOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] h-0.5 w-6 rounded-full bg-green transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 rounded-full bg-green transition-all duration-300 ${
                  mobileOpen ? "top-[11px] -rotate-45" : "top-[21px]"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100svh-var(--nav-h))] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white lg:hidden">
          <nav className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.href === "#" ? (
                  <p className="px-3 py-2 text-sm font-bold uppercase tracking-wide text-gray-800">
                    {link.label}
                  </p>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-bold uppercase tracking-wide hover:bg-green/5 hover:text-green ${
                      isActive(pathname, link) ? "text-green" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.dropdown?.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-7 py-2 text-sm text-gray-700 hover:bg-green/5 hover:text-green"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
