import { processSteps } from "./data";
import { Reveal } from "./motion";

// Literal class names so Tailwind generates them.
const STAIR = [
  "pl-0 lg:col-start-1 lg:col-span-12",
  "pl-[6vw] lg:pl-0 lg:col-start-3 lg:col-span-10",
  "pl-[12vw] lg:pl-0 lg:col-start-5 lg:col-span-8",
  "pl-[18vw] lg:pl-0 lg:col-start-7 lg:col-span-6",
];

export default function ProcessStair() {
  const last = processSteps.length - 1;
  return (
    <section aria-labelledby="process-title" className="report-section bg-field text-paper">
      <h2 id="process-title" className="sr-only">How campus placement works</h2>
      <ol className="report-x report-grid gap-y-14">
        {processSteps.map((s, i) => (
          <li key={s.line} className={`col-span-12 ${STAIR[i]}`}>
            <Reveal distance={24} duration={0.7} delay={i * 0.08} initialOpacity={0}>
              <h3 className={`t-title ${i === last ? "text-accent-yellow" : ""}`}>{s.line}</h3>
              <p className="t-body mt-3 max-w-[34ch]">{s.detail}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
