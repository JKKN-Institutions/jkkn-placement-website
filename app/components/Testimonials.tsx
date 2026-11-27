"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "The placement cell at JKKN was incredibly supportive. From resume building to mock interviews, they prepared us for every stage. I secured a position at TCS during the campus drive, and the entire process was smooth and well-organised.",
    name: "Rahul K.",
    role: "B.E. CSE \u2014 Placed at TCS",
    initials: "RK",
  },
  {
    text: "I always wanted to work in a leading hospital, and JKKN made it possible. The nursing placement cell connected us with Apollo Hospitals, and I received my offer within two weeks of the interview. Grateful for the guidance!",
    name: "Priya S.",
    role: "B.Sc. Nursing \u2014 Placed at Apollo Hospitals",
    initials: "PS",
  },
  {
    text: "The pharmacy placement drive brought some of India\u2019s top pharmaceutical companies to our campus. Sun Pharma selected me after a thorough aptitude test and technical interview. The pre-placement training made all the difference.",
    name: "Arun V.",
    role: "B.Pharm \u2014 Placed at Sun Pharma",
    initials: "AV",
  },
  {
    text: "As a BCA graduate, I was uncertain about placement prospects. But the JKKN Arts and Science placement team organised excellent training sessions and brought companies like Concentrix and Amazon to campus. I\u2019m now working at Amazon!",
    name: "Deepika M.",
    role: "BCA \u2014 Placed at Amazon",
    initials: "DM",
  },
  {
    text: "The dental placement cell introduced us to some of the finest hospital chains in India. I completed my BDS and secured a position at Clove Dental. The clinical training at JKKN gave me the confidence to perform well in interviews.",
    name: "Suresh K.",
    role: "BDS \u2014 Placed at Clove Dental",
    initials: "SK",
  },
  {
    text: "My B.Sc. in Medical Lab Technology from JKKN Allied Health Sciences opened doors I never expected. The placement cell arranged campus interviews with SRL Diagnostics, and I was selected in the first round itself.",
    name: "Kavitha L.",
    role: "B.Sc. MLT \u2014 Placed at SRL Diagnostics",
    initials: "KL",
  },
];

const arrow =
  "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-green shadow-[0_10px_26px_-12px_rgba(3,40,22,0.5)] ring-1 ring-black/5 transition-colors duration-200 hover:bg-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-green";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the arrows in step with the scroll position (also covers swipe and keyboard scrolling).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const frame = requestAnimationFrame(update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  const slide = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-16 lg:py-20"
      style={{ scrollMarginTop: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          icon={MessageSquareQuote}
          title="What Our Placed Students Say"
          lead="Real experiences from students who launched their careers through JKKN placements"
        />

        {/* Carousel: three cards on desktop, two on tablets, one on phones */}
        <div className="reveal flex items-center gap-3 lg:gap-4">
          <button
            type="button"
            className={`${arrow} hidden sm:flex`}
            onClick={() => slide(-1)}
            disabled={atStart}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <ul
            ref={trackRef}
            tabIndex={0}
            aria-label="Testimonials"
            className="testimonial-track m-0 flex min-w-0 flex-1 list-none snap-x snap-mandatory gap-5 overflow-x-auto px-1 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green lg:gap-6"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex shrink-0 basis-full snap-start gap-4 rounded-2xl bg-white p-5 shadow-[0_14px_34px_-20px_rgba(3,40,22,0.4)] ring-1 ring-black/5 sm:gap-5 sm:p-6 md:basis-[calc((100%-1.25rem)/2)] xl:basis-[calc((100%-3rem)/3)]"
              >
                <span
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold text-green sm:h-20 sm:w-20 sm:text-xl"
                  style={{ background: "#d4f1e4", boxShadow: "0 0 0 4px #fff, 0 0 0 6px #d4f1e4" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <figure className="m-0 flex min-w-0 flex-1 flex-col">
                  <Quote className="mb-2 h-6 w-6 text-green" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  <blockquote className="mb-4 text-[14.5px] leading-relaxed text-slate-700">{t.text}</blockquote>
                  <figcaption className="mt-auto">
                    <span className="block text-[15px] font-bold" style={{ color: "var(--green-dark)" }}>
                      {t.name}
                    </span>
                    <span className="text-[13px] text-slate-600">{t.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`${arrow} hidden sm:flex`}
            onClick={() => slide(1)}
            disabled={atEnd}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* On phones the arrows sit under the cards */}
        <div className="mt-2 flex justify-center gap-3 sm:hidden">
          <button type="button" className={arrow} onClick={() => slide(-1)} disabled={atStart} aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" className={arrow} onClick={() => slide(1)} disabled={atEnd} aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`.testimonial-track::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
