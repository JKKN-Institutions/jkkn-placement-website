import LogoLoop from "@/components/react-bits/LogoLoop";
import { recruiterLogos, sectors } from "./data";

export default function RecruiterSheet() {
  return (
    <section aria-labelledby="recruiters-title" className="report-section bg-tint">
      <h2 id="recruiters-title" className="t-title report-x">
        <span className="block lg:pl-[3vw]">500+ recruiters,</span>
        <span className="block">six fields of work</span>
      </h2>

      <div className="mt-16 bg-white py-8">
        <LogoLoop
          logos={recruiterLogos.map((l) => ({ src: l.src, alt: l.name, title: l.name }))}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={64}
          pauseOnHover
          fadeOut={false}
          scaleOnHover={false}
          ariaLabel="Companies that recruit JKKN Learners"
        />
      </div>

      <div className="report-x report-grid mt-24">
        <p className="t-small col-span-12 mb-4 text-ink-soft lg:col-span-1 lg:col-start-7 lg:mb-0">Sectors</p>
        <table className="t-body col-span-12 border-collapse lg:col-span-5 lg:col-start-8">
          <caption className="sr-only">Recruiters by sector</caption>
          <tbody>
            {sectors.map((s) => (
              <tr key={s.title} className="align-baseline">
                <th scope="row" className="w-[36%] py-[13px] pr-4 text-left font-normal text-ink-soft">{s.title}</th>
                <td className="py-[13px]">{s.companies.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
