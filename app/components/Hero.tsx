import { ArrowRight, Building2 } from "lucide-react";

const logos = ["TCS", "Infosys", "Wipro", "CTS", "HCL", "Zoho", "Accenture", "L&T"];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-28">
      {/* Background decoration */}
      <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-green/5 blur-3xl" />
      <div className="absolute left-0 bottom-32 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <p className="mb-3 animate-fade-in text-sm font-medium tracking-widest text-green uppercase">
            experienced Placement Trainer&apos;s
          </p>
          <h1 className="animate-slide-up text-4xl font-bold leading-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl">
            Career Development
            <br />
            <span className="text-green">Center</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-base text-body sm:text-lg">
            Empowering students with the skills, knowledge, and connections to
            launch successful careers across industries.
          </p>

          <div className="mt-10 flex animate-slide-up flex-col items-center gap-4 sm:flex-row">
            <a
              href="#about"
              className="group flex items-center gap-2 rounded-md bg-green px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-light hover:shadow-lg"
            >
              Discover More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#recruitment"
              className="flex items-center gap-2 rounded-md border-2 border-green/30 px-8 py-3 text-sm font-semibold text-green transition-all hover:border-green hover:bg-green/5"
            >
              Our Recruiters
            </a>
          </div>

          {/* Recruiter count */}
          <div className="mt-16 animate-fade-in">
            <p className="mb-3 text-sm font-medium text-body">
              Join over{" "}
              <span className="text-2xl font-bold text-gold">+15,000</span>{" "}
              placement Companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {logos.map((name) => (
                <div
                  key={name}
                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-xs font-bold text-body shadow-sm"
                >
                  <Building2 className="mr-1.5 h-3.5 w-3.5 text-green" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
