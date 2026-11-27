"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

// Batch 2025 selection posters. Rows scroll small copies from /alumni/thumbs;
// the lightbox opens the full-size poster.
const POSTER_COUNT = 23;
const posters = Array.from({ length: POSTER_COUNT }, (_, i) => ({
  src: `/alumni/thumbs/${i + 1}.jpg`,
  full: `/alumni/${i + 1}.jpg`,
  alt: `Batch 2025 selection poster ${i + 1}`,
}));

const half = Math.ceil(POSTER_COUNT / 2);
const posterRows = [posters.slice(0, half), posters.slice(half)];

// Defined once at module level: LogoLoop memoises on this function.
// Clicks are handled by the wrapper (event delegation via data-poster).
function renderPoster(item: LogoItem) {
  if (!("src" in item)) return null;
  return (
    <button type="button" className="al-poster" data-poster={item.src} aria-label={`Open ${item.alt}`}>
      <img src={item.src} alt={item.alt} loading="lazy" draggable={false} />
    </button>
  );
}

export default function AlumniGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) => setLightbox((i) => (i === null ? i : (i + delta + POSTER_COUNT) % POSTER_COUNT)),
    []
  );

  const openFromClick = (e: MouseEvent<HTMLDivElement>) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-poster]");
    if (!btn) return;
    const index = posters.findIndex((p) => p.src === btn.dataset.poster);
    if (index >= 0) setLightbox(index);
  };

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

  const current = lightbox === null ? null : posters[lightbox];

  return (
    <section ref={sectionRef} id="alumni" className="al-section">
      <div className="al-header reveal">
        <div className="al-label">
          <Award size={16} aria-hidden="true" />
          Our Pride
        </div>
        <div className="al-title-row">
          <span className="al-rule" aria-hidden="true" />
          <h2 className="al-title">Alumni</h2>
          <span className="al-rule" aria-hidden="true" />
        </div>
        <p className="al-sub">Batch 2025 learners selected by leading recruiters. Select a poster to view it in full.</p>
      </div>

      {/* minmax(0, 1fr): the loop sizes itself to this column, so the column must not grow with its content */}
      <div className="reveal al-rows" onClick={openFromClick}>
        {posterRows.map((logos, i) => (
          <LogoLoop
            key={i}
            logos={logos}
            direction={i === 0 ? "left" : "right"}
            speed={45}
            logoHeight={200}
            gap={20}
            renderItem={renderPoster}
            pauseOnHover
            fadeOut
            ariaLabel={i === 0 ? "Selection posters" : "More selection posters"}
          />
        ))}
      </div>

      {current && lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
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
            src={current.full}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "min(90vw, 1200px)", maxHeight: "80vh", width: "auto", height: "auto", borderRadius: 12, objectFit: "contain" }}
          />
          <p className="text-white/60" onClick={(e) => e.stopPropagation()}>
            {lightbox + 1} / {POSTER_COUNT}
          </p>
          <button
            type="button"
            aria-label="Previous poster"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--green)] md:left-6"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            aria-label="Next poster"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--green)] md:right-6"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}

      <style>{`
        .al-section {
          position: relative; padding: 80px 0; overflow: hidden;
          background:
            radial-gradient(ellipse 60% 55% at 85% 0%, rgba(255, 222, 89, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 55% 50% at 10% 100%, rgba(15, 143, 86, 0.35) 0%, transparent 70%),
            var(--green-darker);
        }
        .al-header { max-width: 1400px; margin: 0 auto 48px; padding: 0 16px; text-align: center; }
        .al-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; margin-bottom: 20px; border-radius: 999px;
          background: rgba(255, 255, 255, 0.1); color: var(--gold);
          font-size: 0.875rem; font-weight: 600;
        }
        .al-title-row { display: flex; align-items: center; justify-content: center; gap: 24px; }
        .al-rule { width: 80px; height: 2px; border-radius: 2px; background: var(--gold); flex-shrink: 0; }
        .al-title {
          font-size: clamp(1.75rem, 3.4vw, 2.6rem); font-weight: 700;
          color: #fff; line-height: 1.15; letter-spacing: -0.025em;
        }
        .al-sub { max-width: 600px; margin: 16px auto 0; font-size: 1.1rem; line-height: 1.6; color: rgba(255, 255, 255, 0.8); }

        .al-rows { display: grid; grid-template-columns: minmax(0, 1fr); gap: 20px; }
        .al-poster {
          display: block; width: 325px; height: 200px; padding: 0; overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.14); border-radius: 18px;
          background: #fff; cursor: pointer;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .al-poster img { width: 100%; height: 100%; max-width: none; object-fit: cover; }
        .al-poster:hover { border-color: var(--gold); box-shadow: 0 16px 34px -14px rgba(0, 0, 0, 0.6); }
        .al-poster:focus-visible { outline: 3px solid var(--gold); outline-offset: 3px; }

        @media (max-width: 640px) {
          .al-section { padding: 56px 0; }
          .al-rule { width: 40px; }
          .al-title-row { gap: 14px; }
          .al-poster { width: 260px; height: 160px; }
        }
      `}</style>
    </section>
  );
}
