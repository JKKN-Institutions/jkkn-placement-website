"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const galleryImages = [
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g7.png",
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g8.png",
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g9.png",
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g10.png",
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g12.png",
  "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/gallery/g11.png",
];

export default function PlacementDayGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".pg-item") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 20;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!paused && lightbox === null) {
      intervalRef.current = setInterval(scrollNext, 3000);
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
    <section ref={sectionRef} id="gallery" className="pg-section">
      <div className="pg-header-wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="pg-title-label">Gallery</div>
          <h2 className="pg-title">
            Placement Day Celebration <span>2025</span>
          </h2>
        </div>
      </div>

      <div
        className="pg-slider-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pg-slider-track" ref={trackRef}>
          {galleryImages.map((src, i) => (
            <div key={i} className="pg-item" onClick={() => setLightbox(i)}>
              <div className="pg-item-inner">
                <img src={src} alt={`Placement Day 2025 - ${i + 1}`} loading="lazy" />
                <div className="pg-overlay">
                  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
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
        <div className="pg-lightbox" onClick={() => setLightbox(null)}>
          <button className="pg-lb-close" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button className="pg-lb-nav pg-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src={galleryImages[lightbox]} alt={`Placement Day 2025 - ${lightbox + 1}`} className="pg-lb-img" onClick={(e) => e.stopPropagation()} />
          <button className="pg-lb-nav pg-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        .pg-section { position: relative; padding: 70px 0 60px; background: var(--surface-1); overflow: hidden; }
        .pg-header-wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
        .pg-title-label {
          font-size: 0.85rem; font-weight: 600; color: var(--green);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
        }
        .pg-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800;
          color: var(--text-primary); line-height: 1.2; letter-spacing: -0.02em;
        }
        .pg-title span { color: var(--green); }

        .pg-slider-wrap { overflow: hidden; padding: 0 24px; }
        .pg-slider-track {
          display: flex; gap: 20px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth;
        }
        .pg-slider-track::-webkit-scrollbar { display: none; }

        .pg-item {
          flex: 0 0 calc(25% - 15px); min-width: 240px;
          cursor: pointer; scroll-snap-align: start;
        }
        .pg-item-inner {
          position: relative; overflow: hidden; border-radius: var(--radius-lg);
        }
        .pg-item-inner img {
          width: 100%; display: block; aspect-ratio: 4/3; object-fit: cover; transition: all 600ms ease;
        }
        .pg-overlay {
          position: absolute; inset: 0;
          background: rgba(11,109,65,0); display: flex; align-items: center; justify-content: center;
          transition: all 400ms ease; opacity: 0;
        }
        .pg-item-inner:hover img { transform: scale(1.08); }
        .pg-item-inner:hover .pg-overlay { background: rgba(11,109,65,0.55); opacity: 1; }

        .pg-lightbox {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.92); display: flex; align-items: center; justify-content: center;
          animation: pgFadeIn 0.3s ease;
        }
        @keyframes pgFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .pg-lb-img { max-width: 85vw; max-height: 85vh; border-radius: var(--radius-lg); object-fit: contain; }
        .pg-lb-close {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255,255,255,0.1); border: none; border-radius: 50%;
          width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .pg-lb-close:hover { background: rgba(255,255,255,0.25); }
        .pg-lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.1); border: none; border-radius: 50%;
          width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .pg-lb-nav:hover { background: var(--green); }
        .pg-lb-prev { left: 20px; }
        .pg-lb-next { right: 20px; }

        @media (max-width: 1024px) { .pg-item { flex: 0 0 calc(50% - 10px); } }
        @media (max-width: 768px) {
          .pg-item { flex: 0 0 80%; min-width: 220px; }
          .pg-section { padding: 50px 0 40px; }
        }
      `}</style>
    </section>
  );
}
