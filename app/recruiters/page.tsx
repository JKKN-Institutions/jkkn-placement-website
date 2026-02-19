import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recruiters from "../components/Recruiters";

export const metadata: Metadata = {
  title: "Our Recruiters | JKKN Placement Cell",
  description:
    "500+ companies recruit from JKKN \u2014 TCS, Infosys, Wipro, Apollo Hospitals, Cipla, Sun Pharma, and many more.",
};

export default function RecruitersPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <Recruiters />
      </main>
      <Footer />
    </>
  );
}
