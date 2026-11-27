import type { CSSProperties } from "react";
import "./PartnerOrbit.css";

type Logo = { src: string; alt: string };

// Three rings of recruiter logos orbiting the JKKN mark.
// Radii are fractions of the orbit's width (--orbit); durations in seconds.
const RINGS: { radius: number; duration: number; reverse?: boolean }[] = [
  { radius: 0.2, duration: 26 },
  { radius: 0.32, duration: 38, reverse: true },
  { radius: 0.43, duration: 50 },
];

export default function PartnerOrbit({ rows, label }: { rows: Logo[][]; label: string }) {
  return (
    <div className="partner-orbit" role="img" aria-label={label}>
      {rows.slice(0, RINGS.length).map((logos, ringIndex) => {
        const ring = RINGS[ringIndex];
        return (
          <div
            key={ringIndex}
            className={`partner-orbit-ring${ring.reverse ? " is-reverse" : ""}`}
            style={{ "--r": ring.radius, "--spin": `${ring.duration}s` } as CSSProperties}
          >
            {logos.map((logo, i) => (
              <span
                key={logo.src}
                className="partner-orbit-item"
                // Spread evenly; offset each ring so logos don't line up radially.
                style={{ "--a": `${(360 / logos.length) * i + ringIndex * 24}deg` } as CSSProperties}
              >
                <span className="partner-orbit-logo">
                  <img src={logo.src} alt="" loading="lazy" draggable={false} />
                </span>
              </span>
            ))}
          </div>
        );
      })}
      <span className="partner-orbit-center">
        <img src="/jkkn-logo.svg" alt="" draggable={false} />
      </span>
    </div>
  );
}
