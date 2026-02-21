"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const institutions = [
  {
    name: "JKKN Dental College & Hospital",
    shortLabel: "Dental & Hospital",
    slug: "dental",
    description:
      "At JKKN Dental College & Hospital, we are dedicated to providing our students with the highest quality education in dental surgery.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-5.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-1.png",
    href: "/placements/dental",
  },
  {
    name: "JKKN College of Pharmacy",
    shortLabel: "Pharmacy",
    slug: "pharmacy",
    description:
      "J.K.K.Nattraja College of Pharmacy has been ranked among India's TOP 50 Pharmacy Colleges with cutting-edge labs and industry-driven curriculum.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-9.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-3.png",
    href: "/placements/pharmacy",
  },
  {
    name: "JKKN College of Nursing",
    shortLabel: "Nursing",
    slug: "nursing",
    description:
      "Join JKKN College of Nursing to receive comprehensive nursing education and contribute to the healthcare field.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-8.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-4.png",
    href: "/placements/nursing",
  },
  {
    name: "JKKN College of Allied Health Sciences",
    shortLabel: "Allied Health Science",
    slug: "allied-health",
    description:
      "At JKKN Allied Health Science College, we strive to provide exceptional education and training in allied health sciences.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-10.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-2.png",
    href: "/placements/allied-health",
  },
  {
    name: "JKKN College of Engineering",
    shortLabel: "Engineering",
    slug: "engineering",
    description:
      "JKKN College of Engineering is a leading educational institution with a practical learning approach and highly qualified faculty.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-6.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-2.png",
    href: "/placements/engineering",
  },
  {
    name: "JKKN College of Arts and Science",
    shortLabel: "Arts & Science",
    slug: "arts-science",
    description:
      "JKKN College of Arts and Science is an outstanding institution with exceptional faculty, diverse academic programs, and extracurricular activities.",
    image:
      "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-7.png",
    icon: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/services/service-icon-1.png",
    href: "/placements/arts-science",
  },
];

export default function InstitutionsList() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".svc-block") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(scrollNext, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, scrollNext]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="institutions" className="inst-section">
      <div className="inst-header-wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="inst-title-label">About our JKKN</div>
          <h2 className="inst-title">
            List of <span>Institutions</span>
          </h2>
        </div>
      </div>

      <div
        className="inst-slider-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="inst-slider-track" ref={trackRef}>
          {institutions.map((inst) => (
            <a key={inst.slug} href={inst.href} className="svc-block">
              <div className="svc-block-inner">
                <div className="svc-block-image">
                  <img src={inst.image} alt={inst.name} loading="lazy" />
                  <div className="svc-block-content">
                    <span className="svc-icon">
                      <img src={inst.icon} alt="" />
                    </span>
                    {inst.shortLabel}
                    <span className="svc-arrow">
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="svc-block-overlay">
                    <span className="svc-overlay-icon">
                      <img src={inst.icon} alt="" />
                    </span>
                    <h5>{inst.name}</h5>
                    <div className="svc-text">{inst.description}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .inst-section {
          position: relative;
          overflow: hidden;
          padding: 70px 0 60px;
          background: var(--surface-1);
        }
        .inst-header-wrap {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 24px;
        }
        .inst-title-label {
          font-size: 0.85rem; font-weight: 600; color: var(--green);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
        }
        .inst-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800;
          color: var(--text-primary); line-height: 1.2; letter-spacing: -0.02em;
        }
        .inst-title span { color: var(--green); }

        .inst-slider-wrap {
          overflow: hidden;
          padding: 0 24px;
        }
        .inst-slider-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        .inst-slider-track::-webkit-scrollbar { display: none; }

        .svc-block {
          flex: 0 0 calc(25% - 18px);
          min-width: 240px;
          text-decoration: none;
          display: block;
          scroll-snap-align: start;
        }
        .svc-block-inner {
          position: relative; overflow: hidden; border-radius: var(--radius-lg);
        }
        .svc-block-image { position: relative; }
        .svc-block-image > img {
          width: 100%; display: block; aspect-ratio: 4/3; object-fit: cover;
        }
        .svc-block-content {
          position: absolute; left: 0; right: 0; bottom: 0;
          font-size: 13px; color: #fff; font-weight: 600;
          padding: 12px 60px 12px 60px;
          background-color: rgba(3, 49, 28, 0.75);
          transition: all 500ms ease;
          display: flex; align-items: center;
        }
        .svc-block-inner:hover .svc-block-content { bottom: -100px; }
        .svc-icon {
          position: absolute; left: 0; top: 0;
          width: 44px; height: 100%; padding: 10px;
          display: flex; align-items: center; justify-content: center;
          background: var(--green);
        }
        .svc-icon img { width: 22px; height: 22px; filter: brightness(0) invert(1); }
        .svc-arrow {
          position: absolute; right: 18px; top: 50%; transform: translateY(-50%);
        }
        .svc-block-overlay {
          position: absolute; left: 16px; top: 16px; right: 16px; bottom: 16px;
          padding: 16px; display: flex; flex-direction: column; justify-content: center;
          background: var(--green); border-radius: var(--radius-md);
          transition: transform 0.4s ease;
          transform: scale(0, 1); transform-origin: right center;
        }
        .svc-block-inner:hover .svc-block-overlay {
          transform: scale(1, 1); transform-origin: left center; transition-delay: 200ms;
        }
        .svc-overlay-icon {
          width: 42px; height: 42px; padding: 10px;
          display: inline-flex; align-items: center; justify-content: center;
          background-color: rgba(0,0,0,0.13); border-radius: var(--radius-sm); margin-bottom: 12px;
        }
        .svc-overlay-icon img { width: 20px; height: 20px; filter: brightness(0) invert(1); }
        .svc-block-overlay h5 {
          font-weight: 600; font-size: 0.95rem; color: #fff;
          margin-bottom: 6px; line-height: 1.3;
        }
        .svc-text { color: rgba(255,255,255,0.85); font-size: 0.78rem; line-height: 1.6; }

        @media (max-width: 1024px) {
          .svc-block { flex: 0 0 calc(50% - 12px); }
        }
        @media (max-width: 768px) {
          .svc-block { flex: 0 0 85%; min-width: 240px; }
          .inst-section { padding: 50px 0 40px; }
        }
      `}</style>
    </section>
  );
}
