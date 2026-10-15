"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { colleges, type CollegeSlug } from "./data";
import { Reveal } from "./motion";

export default function CollegeBand() {
  const [active, setActive] = useState<CollegeSlug>(colleges[0].slug);
  const college = colleges.find((c) => c.slug === active) ?? colleges[0];

  return (
    <section aria-labelledby="colleges-title" className="pt-[clamp(96px,12vw,200px)]">
      <div className="report-x report-grid mb-16">
        <h2 id="colleges-title" className="t-title col-span-12 lg:col-span-9 lg:col-start-3">
          Six colleges, one cell
        </h2>
      </div>

      <div className="college-band" role="group" aria-label="Choose a college">
        {colleges.map((c) => (
          <button
            key={c.slug}
            type="button"
            aria-pressed={c.slug === active}
            aria-controls="college-detail"
            aria-label={c.name}
            onClick={() => setActive(c.slug)}
            className="band-panel"
            style={{ "--grow": c.grow } as CSSProperties}
          >
            <Image src={c.image} alt="" fill sizes="(min-width: 768px) 40vw, 64vw" className="object-cover" />
            <span className="band-label t-body">{c.short}</span>
          </button>
        ))}
      </div>

      <div id="college-detail" aria-live="polite" className="report-x report-grid gap-y-10 pb-[clamp(96px,12vw,200px)] pt-16">
        <div className="col-span-12 lg:col-span-5">
          <h3 className="t-lead">{college.name}</h3>
          <Link href={`/placements/${college.slug}`} className="link-bar t-body mt-6 inline-block font-semibold text-field hover:text-ink">
            Read the {college.short} placement page
          </Link>
        </div>
        <Reveal
          key={college.slug}
          className="col-span-12 lg:col-span-6 lg:col-start-7"
          distance={24}
          duration={0.5}
          initialOpacity={0}
          threshold={0}
        >
          <dl className="t-body grid gap-8">
            <div>
              <dt className="text-ink-soft">Programmes</dt>
              <dd className="mt-2">{college.programmes.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Recruiters</dt>
              <dd className="mt-2">{college.recruiters.join(", ")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
