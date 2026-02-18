import { Calendar, ArrowRight, Building2 } from "lucide-react";

const recruitments = [
  {
    company: "Rinex Technologies Private Limited",
    date: "07 Mar 2025",
  },
  {
    company: "Pronoia Insurance Marketing Pvt Ltd",
    date: "25 Feb 2025",
  },
  {
    company: "Omega Healthcare",
    date: "29 Dec 2025",
  },
  {
    company: "Sakthi Auto Component Limited",
    date: "14 Feb 2025",
  },
  {
    company: "Foxconn India Private Limited",
    date: "14 Feb 2025",
  },
  {
    company: "Premier Fine Linens Private Limited",
    date: "14 April 2025",
  },
  {
    company: "Infronex IT Product and Services",
    date: "19 August 2025",
  },
];

export default function CampusRecruitment() {
  return (
    <section id="recruitment" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Recruitment Drives
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Campus <span className="text-green">Recruitment</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recruitments.map((r) => (
            <div
              key={r.company}
              className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-green/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                <Building2 className="h-7 w-7" />
              </div>
              <h4 className="mb-3 font-bold leading-snug text-heading">
                {r.company}
              </h4>
              <div className="flex items-center gap-2 rounded-lg bg-green/5 px-3 py-2">
                <Calendar className="h-4 w-4 text-green" />
                <span className="text-xs font-medium text-green">
                  {r.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-light"
          >
            View All Blog
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
