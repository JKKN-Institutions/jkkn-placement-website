import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Colleges from "../components/Colleges";

export const metadata: Metadata = {
  title: "Our Colleges | JKKN Placement Cell",
  description:
    "Explore placement statistics across 6 JKKN colleges \u2014 Dental, Engineering, Pharmacy, Nursing, Arts & Science, Allied Health Sciences.",
};

export default function CollegesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <Colleges />
      </main>
      <Footer />
    </>
  );
}
