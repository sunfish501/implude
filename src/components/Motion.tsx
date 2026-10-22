"use client";

// React Bits 컴포넌트(src/components/reactbits)를 이 사이트 색과 속도에 맞춘 프리셋입니다.

import type { ComponentProps, ReactNode } from "react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import DotGrid from "@/components/reactbits/DotGrid";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { useTheme } from "@/components/theme";

type RevealProps = Omit<ComponentProps<typeof AnimatedContent>, "children"> & { children: ReactNode };

/** 스크롤해서 화면에 들어올 때 아래에서 떠오르는 블록. stagger를 주면 자식이 차례로 등장합니다. */
export function Reveal({ children, ...props }: RevealProps) {
  return (
    <AnimatedContent distance={40} duration={0.7} blur={6} threshold={0.12} ease="power3.out" {...props}>
      {children}
    </AnimatedContent>
  );
}

export function HeroDots() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <div className="hero-dots" aria-hidden>
      <DotGrid
        dotSize={4}
        gap={22}
        baseColor={dark ? "#283049" : "#dbe3f8"}
        activeColor={dark ? "#6d8fff" : "#4876ff"}
        proximity={130}
        shockRadius={260}
        shockStrength={4}
        glow={0.4}
        fade={0.5}
      />
    </div>
  );
}

export function HeroTitle() {
  return (
    <h1 id="hero-title" className="headline">
      <BlurText text="상상한 대로" animateBy="letters" trigger="load" delay={60} className="imagine" />{" "}
      <BlurText text="만들어라." animateBy="letters" trigger="load" delay={60} className="make" />
    </h1>
  );
}

export function BrandBand() {
  return (
    <div className="brand-band">
      <ScrollVelocity
        texts={["상상한 대로 만들어라", "IMPLUDE"]}
        velocity={40}
        numCopies={6}
        separator="·"
        gap={28}
        fadeEdges
        className="band-text"
        scrollerClassName="band-scroller"
        parallaxClassName="band-row"
      />
    </div>
  );
}

export function ProjectCard({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <SpotlightCard
      theme={theme}
      spotlightColor={theme === "dark" ? "#6d8fff" : "#4876ff"}
      intensity={0.5}
      borderGlow={0.9}
      spotlightSize={260}
      className="project"
    >
      {children}
    </SpotlightCard>
  );
}
