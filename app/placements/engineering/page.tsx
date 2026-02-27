import { Metadata } from "next";
import EngineeringContent from "./EngineeringContent";

export const metadata: Metadata = {
  title:
    "JKKN College of Engineering Placements \u2014 Campus Recruitment, Training & Career Support",
  description:
    "JKKN College of Engineering placement cell offers 90% placement support for B.E./B.Tech and M.E./M.Tech graduates. 200+ IT and core recruiters including TCS, Infosys, Wipro, L&T. Explore engineering career opportunities.",
  keywords: [
    "JKKN Engineering placements",
    "JKKNCET placement cell",
    "B.E. placements Tamil Nadu",
    "B.Tech placements Namakkal",
    "engineering campus recruitment",
    "IT jobs JKKN",
    "core engineering placements",
    "JKKN College of Engineering careers",
    "best engineering college placements Tamil Nadu",
    "CSE placements",
    "ECE placements",
    "mechanical placements",
  ],
  openGraph: {
    title:
      "JKKN College of Engineering \u2014 Placements & Career Support",
    description:
      "90% placement rate for engineering graduates. Top recruiters: TCS, Infosys, Wipro, Cognizant, L&T. Dedicated placement cell with industry-ready training.",
    type: "website",
    url: "https://engg.jkkn.ac.in/placements/",
  },
};

export default function EngineeringPlacementsPage() {
  return <EngineeringContent />;
}
