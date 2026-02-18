import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Students Placed" },
  { icon: Award, value: "200+", label: "Recruiters" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  { icon: BookOpen, value: "50+", label: "Training Programs" },
];

export default function AboutPlacement() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
              About Us
            </p>
            <h2 className="mb-6 text-3xl font-bold text-heading sm:text-4xl">
              About Our <span className="text-green">Placement</span>
            </h2>
            <p className="mb-4 leading-relaxed text-body">
              Dear Students and Recruiters, the Career Development Center (CDC)
              at JKKN Educational Institutions is dedicated to bridging the gap
              between academia and industry. We prepare students to meet the
              demands of the professional world through comprehensive training
              programs, industry interactions, and placement drives.
            </p>
            <p className="mb-8 leading-relaxed text-body">
              Our commitment extends to ensuring every student is equipped with
              the necessary skills, confidence, and opportunities to build a
              successful career. With strong industry partnerships and a proven
              track record, CDC has been instrumental in shaping the futures of
              thousands of graduates.
            </p>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-md bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-light"
            >
              Learn More
            </a>
          </div>

          {/* Image placeholder + stats */}
          <div className="space-y-6">
            <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-green/10 to-green/5 border border-green/10">
              <div className="text-center">
                <BookOpen className="mx-auto mb-3 h-16 w-16 text-green opacity-40" />
                <p className="text-sm font-medium text-body opacity-60">
                  CDC Campus Image
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-green" />
                  <p className="text-2xl font-bold text-heading">{stat.value}</p>
                  <p className="text-xs text-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
