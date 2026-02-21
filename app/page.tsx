import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AboutPlacement from "./components/AboutPlacement";
import InstitutionsList from "./components/InstitutionsList";
import Colleges from "./components/Colleges";
import Recruiters from "./components/Recruiters";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Sectors from "./components/Sectors";
import Training from "./components/Training";
import Team from "./components/Team";
import PlacementDayGallery from "./components/PlacementDayGallery";
import AlumniGallery from "./components/AlumniGallery";
import Faculty from "./components/Faculty";
import CampusRecruitment from "./components/CampusRecruitment";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <AboutPlacement />
        <InstitutionsList />
        <Colleges />
        <Recruiters />
        <Process />
        <Testimonials />
        <Sectors />
        <Training />
        <Team />
        <PlacementDayGallery />
        <AlumniGallery />
        <Faculty />
        <CampusRecruitment />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
