import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import StatsBar from "./StatsBar";

const MINT = "#d4f1e4"; // jkkn.ac.in --brand-primary-lighter

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="pb-10 lg:pb-12"
      style={{ background: "var(--background)" }}
    >
      {/* Intro: runs to the top of the page behind the header; copy left, photo bleeding off the right edge on desktop */}
      <div className="relative isolate overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-[1400px] items-center px-4 pt-[calc(var(--nav-h)+2rem)] pb-8 sm:px-6 lg:min-h-[clamp(580px,calc(100svh-76px),920px)] lg:px-8 lg:pb-26">
          <div className="lg:max-w-[46%]">
            <p
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-green"
              style={{ background: MINT }}
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              JKKN Training &amp; Placement Cell
            </p>
            <h1
              id="hero-title"
              className="mb-6 font-bold"
              style={{
                color: "var(--green-dark)",
                fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block">Empowering </span>
              <span className="block">Careers Across </span>
              <span className="block text-green">6 Colleges</span>
            </h1>
            <p
              className="mb-8 text-slate-700"
              style={{ fontSize: "clamp(1rem, 1.25vw, 1.125rem)", lineHeight: 1.7, maxWidth: "34rem" }}
            >
              JKKN Institutions connects over 1,200 students annually with 500+ leading recruiters
              across healthcare, technology, pharmaceutical, and core engineering sectors.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#colleges"
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-green px-7 text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(11,109,65,0.6)] transition-colors duration-200 hover:bg-[#085032] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                Explore Placements
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-green bg-white px-7 text-[15px] font-semibold text-green transition-colors duration-200 hover:bg-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                Contact Placement Cell
              </Link>
            </div>
          </div>
        </div>

        {/* Photo (AI-generated, cropped from the design mockup): a rounded card under the copy on small screens, a full-height bleed on desktop */}
        <figure className="relative mx-4 mb-10 aspect-[1184/704] overflow-hidden rounded-2xl bg-slate-200 sm:mx-6 lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:m-0 lg:aspect-auto lg:w-[60%] lg:rounded-none">
          <Image
            src="/hero-students.jpg"
            alt="Four students gathered around a laptop on a college campus (illustrative image)"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          {/* Left edge dissolves into the page so the copy stays readable */}
          <div
            className="absolute inset-0 hidden lg:block"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, #fbfbee 0%, rgba(251,251,238,0.9) 10%, rgba(251,251,238,0.45) 24%, rgba(251,251,238,0) 40%), linear-gradient(180deg, rgba(251,251,238,0.8) 0%, rgba(251,251,238,0.35) 12%, rgba(251,251,238,0) 24%)",
            }}
          />
          {/* Brand curve in the bottom-right corner */}
          <svg
            className="absolute bottom-0 right-0 hidden h-[58%] w-auto lg:block"
            viewBox="0 0 200 300"
            aria-hidden="true"
          >
            <path d="M200 0 C 192 140 122 250 0 300 L 200 300 Z" fill="var(--gold)" />
            <path d="M200 44 C 196 164 142 262 44 300 L 200 300 Z" fill="var(--green)" />
          </svg>
        </figure>
      </div>

      {/* Figures card, overlapping the bottom of the photo on desktop */}
      <StatsBar />
    </section>
  );
}
