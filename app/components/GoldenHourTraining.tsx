import {
  Clock,
  CheckCircle,
  Briefcase,
  MessageSquare,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    desc: "Practice sessions with industry-style interview formats.",
  },
  {
    icon: Briefcase,
    title: "Aptitude Tests",
    desc: "Industry-specific aptitude tests and logical reasoning.",
  },
  {
    icon: Users,
    title: "Group Discussions",
    desc: "Structured group discussion practice with expert feedback.",
  },
  {
    icon: FileText,
    title: "Personality Enhancement",
    desc: "Sessions focused on confidence building and presentation skills.",
  },
];

export default function GoldenHourTraining() {
  return (
    <section id="training" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold" />
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Training Program
              </p>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-heading sm:text-4xl">
              Golden Hour <span className="text-green">Training</span>
            </h2>
            <p className="mb-6 leading-relaxed text-body">
              Before each placement drive, students undergo specialized
              company-specific training. Our signature &quot;Golden Hour
              Training&quot; program is designed to transform students into
              industry-ready professionals through intensive, targeted
              preparation.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                "Mock interviews with real-world scenarios",
                "Industry-specific aptitude tests",
                "Group discussions and team activities",
                "Personality enhancement sessions",
                "Company-specific preparation modules",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                  <span className="text-sm text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-green/20"
              >
                <feat.icon className="mb-3 h-8 w-8 text-green" />
                <h4 className="mb-1 font-bold text-heading">{feat.title}</h4>
                <p className="text-sm text-body">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
