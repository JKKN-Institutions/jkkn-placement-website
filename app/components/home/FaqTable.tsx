import { faqs } from "./data";
import { Reveal } from "./motion";

export default function FaqTable() {
  return (
    <section aria-labelledby="faq-title" className="report-x report-section">
      <div className="report-grid gap-y-[80px] lg:items-baseline">
        <h2 id="faq-title" className="t-lead col-span-12">Questions Learners ask</h2>
        {faqs.map((f) => (
          <Reveal
            key={f.q}
            className="col-span-12 grid grid-cols-subgrid gap-y-3 lg:items-baseline"
            distance={24}
            duration={0.6}
            initialOpacity={0}
          >
            <h3 className="t-lead col-span-12 lg:col-span-6">{f.q}</h3>
            <p className="t-body col-span-12 max-w-[40ch] lg:col-span-5 lg:col-start-8">{f.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
