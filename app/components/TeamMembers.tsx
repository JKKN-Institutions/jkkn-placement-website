import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Krishna Veni A",
    title: "CAILF Coordinator for Academic Excellence and Innovation in Learning Facilitation",
    initials: "KV",
    color: "bg-gradient-to-br from-green/20 to-green/10",
  },
  {
    name: "Ravishankar S",
    title: "TNPSC Trainer",
    initials: "RS",
    color: "bg-gradient-to-br from-gold/20 to-gold/10",
  },
  {
    name: "D. Muthazhahan",
    title: "Aptitude Trainer",
    initials: "DM",
    color: "bg-gradient-to-br from-green-light/20 to-green/10",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Our Awesome <span className="text-green">Team Members</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div
                className={`relative flex h-56 items-center justify-center ${member.color}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-gold/40 bg-white text-2xl font-bold text-green shadow-md">
                  {member.initials}
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green text-white shadow-md">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white shadow-md">
                      <Mail className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-heading">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-green font-medium">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
