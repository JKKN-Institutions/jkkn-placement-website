import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPlacement from "./components/AboutPlacement";
import Colleges from "./components/Colleges";
import Recruiters from "./components/Recruiters";
import Testimonials from "./components/Testimonials";
import Sectors from "./components/Sectors";
import Training from "./components/Training";
import PlacementDayGallery from "./components/PlacementDayGallery";
import AlumniGallery from "./components/AlumniGallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const title = "JKKN Placement Cell | Campus Placements, Namakkal";
const description =
  "JKKN Placement Cell trains learners from six colleges in Komarapalayam, Namakkal, and brings 500+ recruiters to campus. See placements and offers by college.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/placement-day-2023.jpg",
        width: 1280,
        height: 717,
        alt: "JKKN learners holding offer letters at Placement Day 2023",
      },
    ],
  },
};

// Address and contact details match the Footer.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "JKKN Institutions",
  alternateName: "J.K.K. Nattraja Educational Institutions",
  url: "https://jkkn.ac.in",
  email: "info@jkkn.ac.in",
  telephone: "+91-9345855001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Natarajapuram, NH-544 (Salem to Coimbatore National Highway)",
    addressLocality: "Komarapalayam",
    addressRegion: "Tamil Nadu",
    postalCode: "638183",
    addressCountry: "IN",
  },
  department: {
    "@type": "Organization",
    name: "JKKN Training and Placement Cell",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutPlacement />
        <Colleges />
        <Recruiters />
        <Testimonials />
        <Sectors />
        <Training />
        <PlacementDayGallery />
        <AlumniGallery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
