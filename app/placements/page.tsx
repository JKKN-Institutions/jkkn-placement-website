import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Training from "../components/Training";
import Sectors from "../components/Sectors";

export const metadata: Metadata = {
  title: "Placements | JKKN Placement Cell",
  description:
    "Discover the 6-step placement process, pre-placement training programs, and industry sectors at JKKN Institutions.",
};

export default function PlacementsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 112 }}>
        <Process />
        <Training />
        <Sectors />
      </main>
      <Footer />
    </>
  );
}
