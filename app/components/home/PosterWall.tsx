import Image from "next/image";
import { collegeShortName, posters } from "./data";

export default function PosterWall() {
  return (
    <section aria-labelledby="wall-title" className="pb-3 pt-[clamp(96px,12vw,200px)]">
      <div className="report-x report-grid">
        <h2 id="wall-title" className="sr-only">Placement posters, batch 2025</h2>
        <p className="t-lead col-span-12 max-w-[30ch] lg:col-span-4 lg:col-start-8">
          Each poster marks Learners from one college chosen by one company. Twenty-two of them, from the batch of 2025.
        </p>
      </div>
      <div className="poster-wall mt-16 px-3">
        {posters.map((p) => {
          const college = collegeShortName(p.college);
          return (
            <figure key={p.n} className="mb-[14px] break-inside-avoid">
              <a href={`/alumni/${p.n}.jpg`} target="_blank" rel="noopener" className="press block">
                <Image
                  src={`/alumni/${p.n}.jpg`}
                  alt={`Placement poster: ${p.learners} ${p.learners === 1 ? "Learner" : "Learners"} from ${college} selected by ${p.company}`}
                  width={2000}
                  height={1231}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="t-small mt-[6px]">{college}, {p.company}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
