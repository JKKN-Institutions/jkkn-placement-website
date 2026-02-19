import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPlacement from "../components/AboutPlacement";
import Faculty from "../components/Faculty";

export const metadata: Metadata = {
  title: "About Us | JKKN Placement Cell",
  description:
    "Learn about the JKKN Training and Placement Cell, our mission, and our dedicated faculty coordinators across 6 colleges.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <AboutPlacement />
        <Faculty />
      </main>
      <Footer />
    </>
  );
}
