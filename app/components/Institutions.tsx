import {
  Stethoscope,
  Cpu,
  Palette,
  Heart,
  Pill,
  Activity,
} from "lucide-react";

const institutions = [
  {
    name: "JKKN Dental & Hospital",
    icon: Stethoscope,
    description:
      "Dedicated to providing highest quality education in dental surgery.",
    color: "bg-green/10",
    iconColor: "text-green",
  },
  {
    name: "JKKN Engineering & Technology",
    icon: Cpu,
    description:
      "Leading educational institution with practical learning approach.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "JKKN Arts & Science",
    icon: Palette,
    description:
      "Outstanding institution with exceptional faculty and diverse programs.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    name: "JKKN Nursing & Research",
    icon: Heart,
    description:
      "Comprehensive nursing education for healthcare field contribution.",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    name: "JKKN Pharmacy",
    icon: Pill,
    description:
      "Ranked among INDIA's TOP 50 Pharmacy Colleges by NIRF.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    name: "JKKN Allied Health Science",
    icon: Activity,
    description:
      "Exceptional education in dentistry and allied health sciences.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

export default function Institutions() {
  return (
    <section id="institutions" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Our Institutions
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            List of <span className="text-green">Institutions</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-green/20"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${inst.color} ${inst.iconColor} transition-transform group-hover:scale-110`}
              >
                <inst.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-heading">
                {inst.name}
              </h3>
              <p className="text-sm leading-relaxed text-body">
                {inst.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
