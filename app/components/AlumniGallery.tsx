"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const alumniImages = Array.from({ length: 23 }, (_, i) =>
  `/alumni/${i + 1}.jpg`
);

export default function AlumniGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".al-item") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!paused && lightbox === null) {
      intervalRef.current = setInterval(scrollNext, 2500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, lightbox, scrollNext]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

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

  return (
    <section ref={sectionRef} id="alumni" className="al-section">
      <div className="al-header-wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="al-title-label">Our Pride</div>
          <h2 className="al-title">
            <span>Alumni</span>
          </h2>
        </div>
      </div>

      <div
        className="al-slider-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="al-slider-track" ref={trackRef}>
          {alumniImages.map((src, i) => (
            <div key={i} className="al-item" onClick={() => setLightbox(i)}>
              <div className="al-item-inner">
                <img src={src} alt={`Alumni ${i + 1}`} loading="lazy" />
                <div className="al-overlay">
                  <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="al-lightbox" onClick={() => setLightbox(null)}>
          <button className="al-lb-close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button className="al-lb-nav al-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + alumniImages.length) % alumniImages.length); }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src={alumniImages[lightbox]} alt={`Alumni ${lightbox + 1}`} className="al-lb-img" onClick={(e) => e.stopPropagation()} />
          <button className="al-lb-nav al-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % alumniImages.length); }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        .al-section { position: relative; padding: 70px 0 60px; background: var(--green-dark); overflow: hidden; }
        .al-header-wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
        .al-title-label {
          font-size: 0.85rem; font-weight: 600; color: var(--green-light);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
        }
        .al-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800;
          color: #fff; line-height: 1.2; letter-spacing: -0.02em;
        }
        .al-title span { color: var(--green-light); }

        .al-slider-wrap { overflow: hidden; padding: 0 24px; }
        .al-slider-track {
          display: flex; gap: 16px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth;
        }
        .al-slider-track::-webkit-scrollbar { display: none; }

        .al-item {
          flex: 0 0 calc(20% - 13px); min-width: 160px; scroll-snap-align: start;
          cursor: pointer;
        }
        .al-item-inner {
          position: relative; overflow: hidden; border-radius: var(--radius-md);
          border: 2px solid transparent; transition: all 500ms ease;
        }
        .al-item-inner img {
          width: 100%; display: block; aspect-ratio: 3/4; object-fit: cover; transition: all 500ms ease;
        }
        .al-overlay {
          position: absolute; inset: 0;
          background: rgba(11,109,65,0); display: flex; align-items: center; justify-content: center;
          transition: all 400ms ease; opacity: 0;
        }
        .al-item-inner:hover {
          border-color: var(--green-light);
          box-shadow: 0 8px 30px rgba(11,109,65,0.35);
          transform: translateY(-4px);
        }
        .al-item-inner:hover img { transform: scale(1.06); }
        .al-item-inner:hover .al-overlay { background: rgba(11,109,65,0.55); opacity: 1; }

        /* Lightbox */
        .al-lightbox {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.92); display: flex; align-items: center; justify-content: center;
          animation: alFadeIn 0.3s ease;
        }
        @keyframes alFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .al-lb-img { max-width: 85vw; max-height: 85vh; border-radius: var(--radius-lg); object-fit: contain; }
        .al-lb-close {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255,255,255,0.1); border: none; border-radius: 50%;
          width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .al-lb-close:hover { background: rgba(255,255,255,0.25); }
        .al-lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.1); border: none; border-radius: 50%;
          width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .al-lb-nav:hover { background: var(--green); }
        .al-lb-prev { left: 20px; }
        .al-lb-next { right: 20px; }

        @media (max-width: 1024px) { .al-item { flex: 0 0 calc(25% - 12px); } }
        @media (max-width: 768px) {
          .al-item { flex: 0 0 calc(33.333% - 11px); min-width: 130px; }
          .al-section { padding: 50px 0 40px; }
        }
      `}</style>
    </section>
  );
}
