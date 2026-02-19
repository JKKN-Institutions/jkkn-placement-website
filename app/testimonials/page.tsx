import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | JKKN Placement Cell",
  description:
    "Read success stories from JKKN students placed at top companies like TCS, Apollo Hospitals, Sun Pharma, and Amazon.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
