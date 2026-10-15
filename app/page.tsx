import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReportHero from "./components/home/ReportHero";
import ReportLedger from "./components/home/ReportLedger";
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
      </main>
      <Footer />
    </>
  );
}
