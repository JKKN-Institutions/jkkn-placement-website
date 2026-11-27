"use client";

import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Dr. Krishna Veni A",
    designation: "CAILF - Coordinator for Academic Excellence and Innovation in Learning Facilitation",
    initials: "KV",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-4.png",
  },
  {
    name: "Ravishankar S",
    designation: "TNPSC Trainer",
    initials: "RS",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-2.png",
  },
  {
    name: "D. Muthazhahan",
    designation: "Aptitude Trainer",
    initials: "DM",
    image: "https://placements.jkkn.ac.in/wp-content/themes/placements/assets/img/team/team-7.png",
  },
];

type Member = (typeof teamMembers)[number];

// The photo frame keeps its size whether or not the image loads; initials show until it does.
function MemberCard({ member }: { member: Member }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");

  return (
    <article className="tm-card">
      <div className="tm-photo">
        <span className="tm-initials" aria-hidden="true">{member.initials}</span>
        {status !== "failed" && (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className={status === "loaded" ? "is-loaded" : undefined}
            ref={(img) => {
              // Catch images that settled before hydration attached the handlers
              if (img?.complete) setStatus(img.naturalWidth > 0 ? "loaded" : "failed");
            }}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
          />
        )}
      </div>
      <div className="tm-body">
        <h3 className="tm-name">{member.name}</h3>
        <p className="tm-designation">{member.designation}</p>
      </div>
    </article>
  );
}

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
          <MemberCard key={member.name} member={member} />
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
          display: grid; gap: 28px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
          justify-content: center;
          max-width: var(--max-w); margin: 0 auto; padding: 0 24px;
        }

        .tm-card {
          display: flex; flex-direction: column; overflow: hidden;
          background: #fff; border: 1px solid #e5e7eb; border-radius: var(--radius-lg);
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .tm-card:hover { border-color: var(--green); box-shadow: 0 12px 28px -16px rgba(3,40,22,0.35); }

        .tm-photo {
          position: relative; aspect-ratio: 4 / 5; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          background: #ecf6f0;
        }
        .tm-initials {
          display: flex; align-items: center; justify-content: center;
          width: 96px; height: 96px; border-radius: 9999px;
          background: #fff; border: 4px solid var(--gold);
          color: var(--green); font-size: 1.75rem; font-weight: 700; letter-spacing: 0.02em;
        }
        .tm-photo > img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          opacity: 0; transition: opacity 300ms ease;
        }
        .tm-photo > img.is-loaded { opacity: 1; }

        .tm-body { padding: 18px 20px 22px; text-align: center; }
        .tm-name {
          font-weight: 600; font-size: 1.05rem; color: var(--text-primary);
          margin: 0 0 6px; line-height: 1.3;
        }
        .tm-designation { color: #4B5563; font-size: 0.85rem; line-height: 1.5; margin: 0; }

        @media (max-width: 768px) {
          .team-section { padding: 50px 0 40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tm-card, .tm-photo > img { transition: none; }
        }
      `}</style>
    </section>
  );
}
