import { Fragment } from "react";
import { faqs } from "./data";

export default function FaqTable() {
  return (
    <section aria-labelledby="faq-title" className="report-x report-section">
      <div className="report-grid gap-y-[80px] lg:items-baseline">
        <h2 id="faq-title" className="t-lead col-span-12 text-ink-soft lg:col-span-6">Questions Learners ask</h2>
        <div aria-hidden="true" className="hidden lg:col-span-5 lg:col-start-8 lg:block" />
        {faqs.map((f) => (
          <Fragment key={f.q}>
            <h3 className="t-lead col-span-12 lg:col-span-6">{f.q}</h3>
            <p className="t-body col-span-12 -mt-[68px] max-w-[40ch] lg:col-span-5 lg:col-start-8 lg:mt-0">{f.a}</p>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
