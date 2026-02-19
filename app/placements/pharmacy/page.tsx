import { Metadata } from "next";
import PharmacyContent from "./PharmacyContent";

export const metadata: Metadata = {
  title:
    "JKKN College of Pharmacy Placements \u2014 Campus Recruitment, Training & Career Support",
  description:
    "JKKN College of Pharmacy placement cell offers 91% placement support for B.Pharm, M.Pharm, and Pharm.D graduates. Top pharmaceutical recruiters including Cipla, Sun Pharma, Dr. Reddy's. Explore pharmacy career opportunities.",
  keywords: [
    "JKKN Pharmacy placements",
    "JKKN College of Pharmacy placement cell",
    "B.Pharm placements Tamil Nadu",
    "M.Pharm placements Namakkal",
    "Pharm.D placements",
    "pharmaceutical campus recruitment",
    "pharma jobs JKKN",
    "best pharmacy college placements Tamil Nadu",
  ],
  openGraph: {
    title:
      "JKKN College of Pharmacy \u2014 Placements & Career Support",
    description:
      "91% placement rate for pharmacy graduates. Top recruiters: Cipla, Sun Pharma, Dr. Reddy's, Hetero, Lupin. Dedicated placement cell with industry-ready training.",
    type: "website",
    url: "https://pharmacy.jkkn.ac.in/placements/",
  },
};

export default function PharmacyPlacementsPage() {
  return <PharmacyContent />;
}
