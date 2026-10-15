import Image from "next/image";
import Link from "next/link";
import { heroImages } from "./data";
import { HeroName } from "./motion";

export default function ReportHero() {
  const { gate, handover } = heroImages;
  return (
    <section aria-labelledby="hero-title" className="p-2">
      <div className="grid gap-2 lg:h-[calc(100svh-112px-16px)] lg:min-h-[640px] lg:grid-cols-2 lg:grid-rows-2">
        <div className="flex min-h-[18svh] flex-col justify-end bg-tint p-6 sm:min-h-[30svh]">
          <h1 id="hero-title">
            <HeroName text="JKKN" className="t-display block" />
            <span className="t-lead mt-3 block">Placement Cell</span>
          </h1>
        </div>

        <div className="shutter relative aspect-[16/9] overflow-hidden sm:aspect-[4/3] lg:aspect-auto">
          <Image src={gate.src} alt={gate.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="grey object-cover" />
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <Image src={handover.src} alt={handover.alt} fill sizes="50vw" className="grey scale-[1.03] object-cover object-[50%_45%]" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <p className="t-lead bg-field-deep p-6 text-paper">92% of our Learners placed across six colleges.</p>
          <div className="flex flex-col justify-between gap-8 bg-accent-yellow p-6 text-ink">
            <p className="t-lead">500+ recruiters come to Komarapalayam.</p>
            <Link href="/contact" className="press t-body inline-flex w-fit bg-ink px-5 py-3 font-semibold text-paper hover:bg-field">
              Register for placements
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-2 aspect-[4/3] overflow-hidden lg:hidden">
        <Image src={handover.src} alt={handover.alt} fill sizes="100vw" className="grey scale-[1.03] object-cover object-[50%_80%]" />
      </div>
    </section>
  );
}
