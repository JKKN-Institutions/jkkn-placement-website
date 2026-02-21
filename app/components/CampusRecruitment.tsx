"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const companies = [
  {
    name: "Rinex Technologies Private Limited",
    date: "07",
    month: "Mar 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-1.png",
  },
  {
    name: "Pronoia Insurance Marketing Pvt Ltd",
    date: "25",
    month: "Feb 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-2.png",
  },
  {
    name: "Omega Healthcare",
    date: "29",
    month: "Dec 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-3.png",
  },
  {
    name: "Sakthi Auto Component Limited",
    date: "14",
    month: "Feb 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-4.png",
  },
  {
    name: "Foxconn India Private Limited",
    date: "14",
    month: "Feb 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-5.png",
  },
  {
    name: "Premier Fine Linens Private Limited",
    date: "14",
    month: "Apr 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/blog/company-6.png",
  },
  {
    name: "Infronex IT Product and Services",
    date: "19",
    month: "Aug 2025",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/about/7-scaled.jpg",
  },
];

export default function CampusRecruitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".cr-card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 28;
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
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="campus-recruitment" className="cr-section">
      <div className="cr-header-wrap">
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="cr-title-label">JKKN CDC</div>
          <h2 className="cr-title">
            Campus <span>Recruitment</span>
          </h2>
        </div>
      </div>

      <div
        className="cr-slider-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="cr-slider-track" ref={trackRef}>
          {companies.map((company, i) => (
            <article key={i} className="cr-card">
              <div className="cr-card-inner">
                <div className="cr-card-image">
                  <img src={company.image} alt={company.name} loading="lazy" />
                  <div className="cr-date">
                    {company.date}
                    <span>{company.month}</span>
                  </div>
                </div>
                <div className="cr-card-content">
                  <h5>{company.name}</h5>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .cr-section { position: relative; padding: 70px 0 60px; background: var(--surface-0); overflow: hidden; }
        .cr-header-wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
        .cr-title-label {
          font-size: 0.85rem; font-weight: 600; color: var(--green);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
        }
        .cr-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800;
          color: var(--text-primary); line-height: 1.2; letter-spacing: -0.02em;
        }
        .cr-title span { color: var(--green); }

        .cr-slider-wrap { overflow: hidden; padding: 0 24px; }
        .cr-slider-track {
          display: flex; gap: 28px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth;
        }
        .cr-slider-track::-webkit-scrollbar { display: none; }

        .cr-card {
          flex: 0 0 calc(25% - 21px); min-width: 240px; scroll-snap-align: start;
        }
        .cr-card-inner {
          position: relative; background: #fff; border-radius: var(--radius-lg);
          overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: all 500ms ease;
        }
        .cr-card-inner:hover {
          box-shadow: 0 15px 40px rgba(11,109,65,0.18); transform: translateY(-6px);
        }
        .cr-card-image { position: relative; overflow: hidden; }
        .cr-card-image img {
          width: 100%; display: block; aspect-ratio: 16/10; object-fit: cover; transition: all 600ms ease;
        }
        .cr-card-inner:hover .cr-card-image img { opacity: 0.85; transform: scale(1.05); }
        .cr-date {
          position: absolute; right: 0; bottom: 0; width: 60px; height: 54px;
          font-size: 18px; font-weight: 700; color: #fff; text-align: center;
          padding-top: 6px; background: var(--green); line-height: 1.1;
          border-radius: var(--radius-sm) 0 0 0;
        }
        .cr-date span { display: block; font-weight: 400; font-size: 11px; text-transform: capitalize; margin-top: 2px; }
        .cr-card-content { padding: 14px 18px 18px; }
        .cr-card-content h5 {
          font-weight: 600; font-size: 0.92rem; color: var(--text-primary);
          line-height: 1.4; margin: 0; transition: color 300ms ease;
        }
        .cr-card-inner:hover .cr-card-content h5 { color: var(--green); }

        @media (max-width: 1024px) { .cr-card { flex: 0 0 calc(50% - 14px); } }
        @media (max-width: 768px) {
          .cr-card { flex: 0 0 80%; min-width: 220px; }
          .cr-section { padding: 50px 0 40px; }
        }
      `}</style>
    </section>
  );
}
