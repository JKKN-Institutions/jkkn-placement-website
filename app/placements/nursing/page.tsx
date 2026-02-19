import { Metadata } from "next";
import NursingContent from "./NursingContent";

export const metadata: Metadata = {
  title:
    "Sresakthimayeil Institute of Nursing and Research Placements \u2014 Campus Recruitment, Training & Career Support",
  description:
    "Sresakthimayeil Institute of Nursing and Research placement cell offers 93% placement support for B.Sc. Nursing, M.Sc. Nursing, and GNM graduates. Top hospital recruiters including Apollo, Fortis, Manipal. Explore nursing career opportunities.",
  keywords: [
    "JKKN Nursing placements",
    "Sresakthimayeil Institute of Nursing placement cell",
    "B.Sc Nursing placements Tamil Nadu",
    "M.Sc Nursing placements Namakkal",
    "GNM placements",
    "nursing campus recruitment",
    "hospital nursing jobs",
    "best nursing college placements Tamil Nadu",
    "staff nurse placements",
    "ICU nurse placements",
  ],
  openGraph: {
    title:
      "Sresakthimayeil Institute of Nursing and Research \u2014 Placements & Career Support",
    description:
      "93% placement rate for nursing graduates. Top recruiters: Apollo Hospitals, Fortis Healthcare, Manipal Hospitals. Dedicated placement cell with clinical training.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/placements/",
  },
};

export default function NursingPlacementsPage() {
  return <NursingContent />;
}
