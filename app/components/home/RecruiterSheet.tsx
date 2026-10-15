import LogoLoop from "@/components/react-bits/LogoLoop";
import { recruiterLogos, sectors } from "./data";

export default function RecruiterSheet() {
  return (
    <section aria-labelledby="recruiters-title" className="bg-tint pt-[clamp(96px,12vw,200px)]">
      <div className="report-x report-grid gap-y-12 lg:items-start">
        <h2 id="recruiters-title" className="t-title col-span-12 lg:col-span-5">
          <span className="block">500+ recruiters,</span>
          <span className="block">six fields of work</span>
        </h2>
        <table className="t-body col-span-12 border-collapse lg:col-span-6 lg:col-start-7">
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

      <div className="mt-[clamp(96px,10vw,160px)] bg-white py-8">
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
    </section>
  );
}
