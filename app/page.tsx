import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReportHero from "./components/home/ReportHero";
import ReportLedger from "./components/home/ReportLedger";
import CollegeBand from "./components/home/CollegeBand";
import RecruiterSheet from "./components/home/RecruiterSheet";
import ProcessStair from "./components/home/ProcessStair";
import OffersTable from "./components/home/OffersTable";
import PosterWall from "./components/home/PosterWall";
import "./components/home/report.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="report" style={{ paddingTop: 112 }}>
        <noscript>
          <style>{".report .invisible{visibility:visible!important;opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <ReportHero />
        <ReportLedger />
        <CollegeBand />
        <RecruiterSheet />
        <ProcessStair />
        <OffersTable />
        <PosterWall />
      </main>
      <Footer />
    </>
  );
}
