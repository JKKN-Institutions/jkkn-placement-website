import { Metadata } from "next";
import DentalContent from "./DentalContent";

export const metadata: Metadata = {
  title:
    "JKKN Dental College & Hospital Placements \u2014 Campus Recruitment, Internships & Career Support",
  description:
    "JKKN Dental College & Hospital placement cell offers 92% placement support for BDS and MDS graduates. Top dental hospital recruiters including Apollo, Clove Dental, and MIOT. Explore dental career opportunities.",
  keywords: [
    "JKKN Dental placements",
    "JKKN Dental College placement cell",
    "BDS placements Tamil Nadu",
    "MDS placements Namakkal",
    "dental campus recruitment",
    "dental hospital jobs",
    "JKKN Dental College & Hospital careers",
    "best dental college placements Tamil Nadu",
  ],
  openGraph: {
    title:
      "JKKN Dental College & Hospital \u2014 Placements & Career Support",
    description:
      "92% placement rate for BDS & MDS graduates. Top recruiters: Apollo Hospitals, Clove Dental, MIOT Hospitals. Dedicated placement cell with industry-ready training.",
    type: "website",
    url: "https://dental.jkkn.ac.in/placements/",
  },
};

export default function DentalPlacementsPage() {
  return <DentalContent />;
}
