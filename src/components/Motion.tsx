"use client";

// React Bits 컴포넌트(src/components/reactbits)를 이 사이트 색과 속도에 맞춘 프리셋입니다.

import type { ComponentProps, ReactNode } from "react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import DotGrid from "@/components/reactbits/DotGrid";

type RevealProps = Omit<ComponentProps<typeof AnimatedContent>, "children"> & { children: ReactNode };

/** 스크롤해서 화면에 들어올 때 아래에서 살짝 떠오르는 블록. stagger를 주면 자식이 차례로 등장합니다. */
export function Reveal({ children, ...props }: RevealProps) {
  return (
    <AnimatedContent distance={24} duration={0.6} threshold={0.1} ease="power2.out" {...props}>
      {children}
    </AnimatedContent>
  );
}

/** 첫 화면 오른쪽(로고 주변)에만 옅게 깔리는 점 격자. 좁은 화면에서는 CSS로 숨깁니다. */
export function HeroDots() {
  return (
    <div className="hero-dots" aria-hidden>
      <DotGrid
        dotSize={3}
        gap={24}
        baseColor="#e3e9fa"
        activeColor="#4876ff"
        proximity={110}
        strength={0.7}
        clickShock={false}
        glow={0.3}
        fade={0.6}
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
