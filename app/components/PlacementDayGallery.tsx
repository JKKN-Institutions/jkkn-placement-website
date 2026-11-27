"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

// Real Placement Cell event photos. Add more here; the grid lays out any count
// (first photo large, the rest beside and below it).
const galleryImages = [
  {
    src: "/placement-day-2023.jpg",
    caption: "Placement Day 2023",
    alt: "Learners holding offer letters with guests on stage at JKKN Placement Day 2023",
  },
  {
    src: "/placement-offer-letter.jpg",
    caption: "Premier Fine Linens offer letter",
    alt: "A learner receiving an offer letter from the Premier Fine Linens team at JKKN",
  },
];

export default function PlacementDayGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const count = galleryImages.length;

  const step = useCallback(
    (delta: number) => setLightbox((i) => (i === null ? i : (i + delta + count) % count)),
    [count]
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, step]);

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

  const current = lightbox === null ? null : galleryImages[lightbox];

  return (
    <section ref={sectionRef} id="gallery" style={{ background: "var(--surface-1)", padding: "80px 0" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 16px" }}>
        <div className="section-header reveal">
          <div className="section-label">Gallery</div>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Placement Day Moments
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Learners receiving their offer letters from recruiters on campus
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-5 md:auto-rows-[240px] md:grid-cols-12">
          {galleryImages.map((img, i) => {
            const span =
              i === 0
                ? "md:col-span-7 md:row-span-2"
                : count === 2
                  ? "md:col-span-5 md:row-span-2"
                  : "md:col-span-5";
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open photo: ${img.caption}`}
                className={`group relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-slate-200 text-left focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--green)] md:aspect-auto ${span}`}
                style={{ boxShadow: "0 18px 40px -22px rgba(3, 40, 22, 0.4)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 700px" : "(max-width: 768px) 100vw, 500px"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ height: "100%" }}
                />
                <span
                  className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5"
                  style={{ background: "linear-gradient(to top, rgba(3, 40, 22, 0.85), rgba(3, 40, 22, 0))", paddingTop: 64 }}
                >
                  <span className="font-semibold text-white" style={{ fontSize: i === 0 ? "1.1rem" : "1rem" }}>
                    {img.caption}
                  </span>
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 group-hover:bg-[var(--green)]"
                    aria-hidden="true"
                  >
                    <Expand size={18} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {current && lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 p-4"
          style={{ background: "rgba(3, 20, 12, 0.94)" }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X size={26} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "min(90vw, 1200px)", maxHeight: "78vh", width: "auto", height: "auto", borderRadius: 16, objectFit: "contain" }}
          />
          <p className="text-center text-white/85" onClick={(e) => e.stopPropagation()}>
            {current.caption}
            {count > 1 && <span className="text-white/55"> &nbsp;{lightbox + 1} / {count}</span>}
          </p>
          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--green)] md:left-6"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--green)] md:right-6"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
