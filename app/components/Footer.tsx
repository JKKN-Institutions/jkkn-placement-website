import Link from "next/link";
import { contact } from "@/app/components/home/data";

const placementLinks = [
  { label: "Dental", href: "/placements/dental" },
  { label: "Pharmacy", href: "/placements/pharmacy" },
  { label: "Nursing", href: "/placements/nursing" },
  { label: "Allied Health Sciences", href: "/placements/allied-health" },
  { label: "Engineering and Technology", href: "/placements/engineering" },
  { label: "Arts and Science", href: "/placements/arts-science" },
];

const socials = [
  { label: "YouTube", href: "https://youtube.com/@JKKNINSTITUTIONS" },
  { label: "Instagram", href: "https://instagram.com/jkkninstitutions/" },
  { label: "LinkedIn", href: "https://linkedin.com/school/jkkninstitutions/" },
  { label: "Facebook", href: "https://facebook.com/myjkkn" },
  { label: "X", href: "https://x.com/jkkninstitution" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="grid min-h-[100svh] grid-rows-[auto_1fr_auto] bg-field-deep px-[var(--report-margin)] pb-5 pt-10 text-paper [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-offset-[3px] [&_a:focus-visible]:outline-paper [&_a:focus-visible]:outline-solid"
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-[16px] leading-relaxed sm:text-[17px] lg:grid-cols-4">
        <div>
          <p className="font-semibold">JKKN Institutions</p>
          <address className="not-italic text-paper/75">{contact.address}</address>
        </div>
        <nav aria-label="Placements by college">
          <p className="font-semibold">Placements</p>
          <ul className="text-paper/75">
            {placementLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-paper">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold">Follow</p>
          <ul className="text-paper/75">
            {socials.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{s.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Placement Cell</p>
          <ul className="text-paper/75">
            <li><a href={`mailto:${contact.email}`} className="hover:text-paper">{contact.email}</a></li>
            <li><a href={contact.phoneHref} className="hover:text-paper">{contact.phone}</a></li>
            <li>{contact.hours}</li>
            <li><Link href="/contact" className="hover:text-paper">Contact page</Link></li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="min-h-[20svh]" />

      <div>
        <svg viewBox="0 0 1000 250" className="block w-full" role="img" aria-label="JKKN">
          <text
            x="0"
            y="238"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 700, fontSize: 300 }}
          >
            JKKN
          </text>
        </svg>
        <p className="mt-5 text-[13px] text-paper/75">© 2026 JKKN Institutions · Excellence in Education</p>
      </div>
    </footer>
  );
}
