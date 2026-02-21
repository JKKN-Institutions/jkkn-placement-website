import { Metadata } from "next";
import InternshipsContent from "./InternshipsContent";

export const metadata: Metadata = {
  title:
    "Internship Opportunities | JKKN Placement Cell",
  description:
    "Explore internship opportunities across 7 JKKN colleges. 500+ partner companies, industry & clinical internships, PPO pathways. Register now for internship placements.",
  keywords: [
    "JKKN internship",
    "college internship Tamil Nadu",
    "engineering internship Namakkal",
    "pharmacy internship",
    "nursing clinical rotation",
    "JKKN placement cell",
  ],
};

export default function InternshipsPage() {
  return <InternshipsContent />;
}
