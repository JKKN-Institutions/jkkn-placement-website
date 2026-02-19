import { Metadata } from "next";
import ArtsScienceContent from "./ArtsScienceContent";

export const metadata: Metadata = {
  title:
    "JKKN College of Arts and Science Placements \u2014 Campus Recruitment, Training & Career Support",
  description:
    "JKKN College of Arts and Science placement cell offers 85% placement support for B.Sc., B.Com., BBA, BCA, M.Sc., MBA, and MCA graduates. Top recruiters from IT, banking, FMCG, and corporate sectors. Explore career opportunities.",
  keywords: [
    "JKKN Arts and Science placements",
    "JKKN CAS placement cell",
    "B.Sc placements Tamil Nadu",
    "BBA placements Namakkal",
    "BCA placements",
    "MBA placements JKKN",
    "campus recruitment arts and science college",
    "best arts and science college placements Tamil Nadu",
    "B.Com placements",
    "MCA placements Komarapalayam",
  ],
  openGraph: {
    title:
      "JKKN College of Arts and Science \u2014 Placements & Career Support",
    description:
      "85% placement rate for arts, science, and management graduates. Top recruiters: TCS, Infosys, HDFC Bank, Amazon, Deloitte. Dedicated placement cell with industry-ready training.",
    type: "website",
    url: "https://cas.jkkn.ac.in/placements/",
  },
};

export default function ArtsSciencePlacementsPage() {
  return <ArtsScienceContent />;
}
