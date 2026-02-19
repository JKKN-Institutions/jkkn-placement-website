import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | JKKN Placement Cell",
  description:
    "Answers to frequently asked questions about JKKN placements, eligibility, salary packages, process, and recruiter partnerships.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
