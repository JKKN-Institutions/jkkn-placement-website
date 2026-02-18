import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPlacement from "./components/AboutPlacement";
import VisionMission from "./components/VisionMission";
import Institutions from "./components/Institutions";
import TeamMembers from "./components/TeamMembers";
import GoldenHourTraining from "./components/GoldenHourTraining";
import PlacementGallery from "./components/PlacementGallery";
import Alumni from "./components/Alumni";
import Testimonials from "./components/Testimonials";
import CampusRecruitment from "./components/CampusRecruitment";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPlacement />
      <VisionMission />
      <Institutions />
      <TeamMembers />
      <GoldenHourTraining />
      <PlacementGallery />
      <Alumni />
      <Testimonials />
      <CampusRecruitment />
      <Footer />
    </>
  );
}
