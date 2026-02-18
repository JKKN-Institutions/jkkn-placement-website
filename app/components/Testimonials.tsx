import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CDC excellent guidance and support. Training sessions and interview preparation helped secure Rinex Technologies position. Grateful for career shaping efforts.",
    name: "Jae Divya S",
    degree: "B.Tech - IT",
    company: "Rinex Technologies",
  },
  {
    quote:
      "Extremely grateful to CDC for continuous support, guidance, training sessions, interview preparation, and career counseling. Received four job offers. Thank you for shaping career.",
    name: "Janani V",
    degree: "B.Com",
    company: "Multiple Offers",
  },
  {
    quote:
      "CDC provided guidance and placement journey support. Received job offer from Sakthi Auto Components Ltd through their training and assistance.",
    name: "Bharani dharan M",
    degree: "B.Com CA",
    company: "Sakthi Auto Components Ltd",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-green-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Smiles Behind <span className="text-gold">Success</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Quote className="mb-4 h-8 w-8 text-gold opacity-60" />
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold/40 bg-green text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.degree}</p>
                  <p className="text-xs font-medium text-gold">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
