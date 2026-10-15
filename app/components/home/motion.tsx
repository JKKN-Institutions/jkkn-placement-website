"use client";

import { useSyncExternalStore, type ComponentProps } from "react";
import SplitText from "@/components/react-bits/SplitText";
import CountUp from "@/components/react-bits/CountUp";
import AnimatedContent from "@/components/react-bits/AnimatedContent";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

// Server snapshot is false so hydration matches; the real value applies right after.
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}

export function HeroName({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <SplitText
      text={text}
      tag="span"
      splitType="chars"
      delay={70}
      duration={0.9}
      from={{ opacity: 0, y: 60 }}
      to={{ opacity: 1, y: 0 }}
      textAlign="left"
      className={className}
    />
  );
}

export function LedgerNumber({ to, separator }: { to: number; separator?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{separator ? to.toLocaleString("en-US") : String(to)}</>;
  return <CountUp to={to} separator={separator ?? ""} duration={1.6} />;
}

export function Reveal({ children, className, ...rest }: ComponentProps<typeof AnimatedContent>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <AnimatedContent className={className} {...rest}>
      {children}
    </AnimatedContent>
  );
}
