import { Metadata } from "next";
import OnCampusDrivesContent from "./OnCampusDrivesContent";

export const metadata: Metadata = {
  title:
    "On-Campus Drives 2025-2026 — JKKN Career Development Centre | Komarapalayam, Tamil Nadu",
  description:
    "Explore on-campus recruitment drives at JKKN Institutions. View upcoming and past campus placement drives with company details, eligibility, packages, and selection process.",
  keywords: [
    "JKKN on-campus drives",
    "JKKN campus recruitment",
    "JKKN placement drives",
    "campus recruitment 2025",
    "JKKN career development centre",
  ],
};

export default function OnCampusDrivesPage() {
  return <OnCampusDrivesContent />;
}
