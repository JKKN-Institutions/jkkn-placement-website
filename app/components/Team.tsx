"use client";

import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Dr. Krishna Veni A",
    designation: "CAILF - Coordinator for Academic Excellence and Innovation in Learning Facilitation",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-4.png",
  },
  {
    name: "Ravishankar S",
    designation: "TNPSC Trainer",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-2.png",
  },
  {
    name: "D. Muthazhahan",
    designation: "Aptitude Trainer",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-7.png",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="team" className="team-section">
      <div className="team-header-wrap">
        <div className="reveal" style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="team-title-label">Our Team</div>
          <h2 className="team-title">
            Our Awesome <br /> <span>Team Members</span>
          </h2>
        </div>
      </div>

      <div className="tm-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="tm-block">
            <div className="tm-block-inner">
              <div className="tm-block-image">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="tm-block-content">
                  <h4>{member.name}</h4>
                  <div className="tm-designation">{member.designation}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .team-section {
          position: relative; padding: 70px 0 60px; background: var(--surface-0); overflow: hidden;
        }
        .team-header-wrap { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
        .team-title-label {
          font-size: 0.85rem; font-weight: 600; color: var(--green);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
        }
        .team-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800;
          color: var(--text-primary); line-height: 1.2; letter-spacing: -0.02em;
        }
        .team-title span { color: var(--green); }

        .tm-grid {
          display: flex; gap: 28px; justify-content: center;
          max-width: var(--max-w); margin: 0 auto; padding: 0 24px; flex-wrap: wrap;
        }

        .tm-block {
          flex: 0 0 calc(25% - 21px); min-width: 240px; max-width: 300px;
        }
        .tm-block-inner {
          position: relative; overflow: hidden; border-radius: var(--radius-lg);
        }
        .tm-block-image { position: relative; }
        .tm-block-image > img {
          width: 100%; display: block; transition: all 500ms ease;
        }
        .tm-block-inner:hover .tm-block-image > img { transform: scale(1.06); }
        .tm-block-content {
          position: absolute; left: 16px; right: 16px; bottom: -40px;
          color: #111827; text-align: center; padding: 14px 16px 10px;
          transition: all 500ms ease; background-color: rgba(255,255,255,0.85);
          border-radius: var(--radius-md);
        }
        .tm-block-inner:hover .tm-block-content { bottom: 16px; background: var(--green); }
        .tm-block-inner:hover .tm-block-content h4,
        .tm-block-inner:hover .tm-block-content .tm-designation { color: #fff; }
        .tm-block-content h4 {
          font-weight: 600; font-size: 1rem; color: #111827;
          margin: 0 0 4px; transition: color 500ms ease; line-height: 1.3;
        }
        .tm-designation {
          color: #4B5563; font-size: 0.75rem; font-weight: 400;
          line-height: 1.5; transition: color 500ms ease;
        }

        @media (max-width: 1024px) { .tm-block { flex: 0 0 calc(50% - 14px); } }
        @media (max-width: 768px) {
          .tm-block { flex: 0 0 100%; max-width: 280px; }
          .team-section { padding: 50px 0 40px; }
        }
      `}</style>
    </section>
  );
}
