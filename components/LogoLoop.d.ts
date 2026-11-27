import type { CSSProperties, ReactNode } from "react";

export type LogoItem =
  | { src: string; alt?: string; title?: string; href?: string; width?: number; height?: number }
  | { node: ReactNode; title?: string; ariaLabel?: string; href?: string };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutWidth?: number;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: string) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const LogoLoop: (props: LogoLoopProps) => ReactNode;
export default LogoLoop;
