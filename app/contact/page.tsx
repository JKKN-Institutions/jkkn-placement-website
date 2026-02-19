import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Contact Us | JKKN Placement Cell",
  description:
    "Get in touch with the JKKN Training and Placement Cell for placement queries, recruiter partnerships, or registration assistance.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
