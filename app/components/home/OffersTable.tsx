import Link from "next/link";
import { collegeShortName, offerRows, posterTotal } from "./data";
import { Reveal } from "./motion";

export default function OffersTable() {
  return (
    <section aria-labelledby="offers-title" className="report-x report-section">
      <h2 id="offers-title" className="t-title">
        <span className="block">Batch 2025,</span>
        <span className="block lg:pl-[16.66%]">offer by offer</span>
      </h2>

      <Reveal className="mt-[72px]" distance={24} duration={0.6} initialOpacity={0}>
        <table className="t-body w-full border-collapse">
          <caption className="sr-only">Campus offers to the 2025 batch, by company</caption>
          <thead>
            <tr className="text-left text-ink-soft">
              <th scope="col" className="px-3 py-[14px] font-normal">Company</th>
              <th scope="col" className="px-3 py-[14px] font-normal max-md:hidden">Colleges</th>
              <th scope="col" className="px-3 py-[14px] text-right font-normal">Offers</th>
              <th scope="col" className="px-3 py-[14px] text-right font-normal">Package</th>
            </tr>
          </thead>
          <tbody>
            {offerRows.map((r, i) => (
              <tr key={r.company} className={i % 2 === 0 ? "bg-tint" : ""}>
                <th scope="row" className="px-3 py-[14px] text-left font-semibold">{r.company}</th>
                <td className="px-3 py-[14px] max-md:hidden">{r.colleges.map(collegeShortName).join(", ")}</td>
                <td className="tabular px-3 py-[14px] text-right">{r.offers}</td>
                <td className="tabular whitespace-nowrap px-3 py-[14px] text-right">₹{r.packageLpa} LPA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <p className="t-small mt-6 max-w-[60ch] text-ink-soft">
        Counted from the batch-2025 placement posters: {posterTotal} offers. A Learner selected by two companies counts once for each offer.
      </p>
      <Link href="/on-campus-drives" className="link-bar t-body mt-10 inline-block font-semibold text-field hover:text-ink">
        See every campus drive
      </Link>
    </section>
  );
}
