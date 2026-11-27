"use client";

import { useEffect, useRef } from "react";
import { Building2, GraduationCap, Trophy, TrendingUp, Users, type LucideIcon } from "lucide-react";

const stats: { value?: string; suffix?: string; display?: string; label: string; icon: LucideIcon; gold?: boolean }[] = [
  { value: "1200", suffix: "+", label: "Students Placed", icon: Users },
  { value: "500", suffix: "+", label: "Recruiters", icon: Building2 },
  { display: "₹12 LPA", label: "Highest Package", icon: Trophy, gold: true },
  { display: "₹4.5 LPA", label: "Average Package", icon: TrendingUp },
  { value: "6", suffix: "", label: "Colleges Covered", icon: GraduationCap },
];

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.counter!, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(eased * target).toLocaleString("en-IN") + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// White figures card that sits over the bottom edge of the hero photo.
export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.counted) return;
          el.dataset.counted = "true";
          animateCounter(el);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll("[data-counter]").forEach((el) => counterObserver.observe(el));
    }

    return () => counterObserver.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:-mt-16 lg:px-8"
    >
      <dl className="grid grid-cols-2 gap-y-7 rounded-2xl bg-white px-3 py-7 shadow-[0_18px_44px_-20px_rgba(3,40,22,0.35)] ring-1 ring-black/5 sm:grid-cols-3 lg:grid-cols-5 lg:px-2 lg:py-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 px-3 last:col-span-2 sm:last:col-span-1 lg:border-l lg:border-gray-200 lg:first:border-l-0 xl:gap-4"
            >
              <Icon
                className="h-8 w-8 shrink-0 xl:h-10 xl:w-10"
                style={{ color: stat.gold ? "#d9a400" : "var(--green)" }}
                strokeWidth={2}
                aria-hidden="true"
              />
              <div className="flex flex-col-reverse">
                <dt className="mt-1 text-xs font-medium text-slate-600 xl:text-sm">{stat.label}</dt>
                <dd
                  className="font-bold tabular-nums"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    color: "var(--green-dark)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                  {...(stat.value
                    ? { "data-counter": stat.value, "data-suffix": stat.suffix }
                    : {})}
                >
                  {stat.value ? "0" : stat.display}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
