import { figures, formatFigure } from "./data";
import { LedgerNumber } from "./motion";

export default function ReportLedger() {
  return (
    <section aria-labelledby="ledger-title" className="report-x report-section">
      <div className="report-grid items-center gap-y-12">
        <h2 id="ledger-title" className="t-title col-span-12 lg:col-span-5">
          <span className="block text-ink-soft">JKKN placements,</span>
          <span className="block">in figures.</span>
        </h2>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          {figures.map((f) => (
            <div key={f.id} className="ledger-row t-display tabular">
              <span className="ledger-whole" aria-hidden="true">
                <LedgerNumber to={f.whole} separator={f.separator ? "," : undefined} />
              </span>
              <span className="ledger-frac" aria-hidden="true">{f.fraction ?? ""}{f.suffix ?? ""}</span>
              <p className="ledger-cap t-body">
                <span className="sr-only">{formatFigure(f)} </span>
                {f.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
