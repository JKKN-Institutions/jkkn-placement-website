import Image from "next/image";
import { collegeShortName, posters } from "./data";
import { Reveal } from "./motion";

export default function PosterWall() {
  return (
    <section aria-labelledby="wall-title" className="pb-3">
      <h2 id="wall-title" className="sr-only">Placement posters, batch 2025</h2>
      {/* The statement takes the first two cells, so 2 + 22 posters fill whole rows at 4, 3 and 2 columns. */}
      <div className="poster-wall px-3">
        <Reveal className="poster-statement" distance={24} duration={0.6} initialOpacity={0}>
          <p className="t-lead max-w-[40ch]">
            Each poster marks Learners from one college chosen by one company. Twenty-two of them, from the batch of 2025.
          </p>
        </Reveal>
        {posters.map((p) => {
          const college = collegeShortName(p.college);
          return (
            <figure key={p.n}>
              <a href={`/alumni/${p.n}.jpg`} target="_blank" rel="noopener" className="press block">
                <span className="sr-only"> (opens in a new tab)</span>
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
