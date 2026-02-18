import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section id="vision" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            About Our Vision
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Our <span className="text-green">Institution</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg border border-gray-100">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-heading">
              Our Vision
            </h3>
            <p className="leading-relaxed text-body">
              Leading enabler of student success by leveraging Academic and
              Employment Development Programs (AEDP) and cutting-edge AI tools
              for industry-ready professionals.
            </p>
          </div>

          {/* Mission */}
          <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg border border-gray-100">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-heading">
              Our Mission
            </h3>
            <p className="leading-relaxed text-body">
              Bridge academic learning with industry expectations through AEDP
              integration, ensuring technical and soft skills development. We
              are committed to fostering industry-academia partnerships,
              conducting regular training sessions, and organizing campus
              recruitment drives to ensure maximum employability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
