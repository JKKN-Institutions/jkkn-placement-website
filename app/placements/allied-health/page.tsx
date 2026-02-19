import { Metadata } from "next";
import AlliedHealthContent from "./AlliedHealthContent";

export const metadata: Metadata = {
  title:
    "JKKN College of Allied Health Sciences Placements \u2014 Campus Recruitment, Training & Career Support",
  description:
    "JKKN College of Allied Health Sciences placement cell offers 88% placement support for B.Sc. and M.Sc. allied health graduates. Top hospital and diagnostic centre recruiters across India. Explore healthcare career opportunities.",
  keywords: [
    "JKKN Allied Health Sciences placements",
    "JKKN AHS placement cell",
    "B.Sc. Medical Lab Technology placements",
    "B.Sc. Radiology placements Tamil Nadu",
    "cardiac technology placements Namakkal",
    "allied health careers India",
    "best allied health sciences college placements Tamil Nadu",
    "diagnostic centre placements",
    "hospital placements allied health",
  ],
  openGraph: {
    title:
      "JKKN College of Allied Health Sciences \u2014 Placements & Career Support",
    description:
      "88% placement rate for allied health graduates. Top recruiters: Apollo, Fortis, MIOT, Kauvery, SRL Diagnostics. Dedicated placement cell with clinical training support.",
    type: "website",
    url: "https://ahs.jkkn.ac.in/placements/",
  },
};

export default function AlliedHealthPlacementsPage() {
  return <AlliedHealthContent />;
}
