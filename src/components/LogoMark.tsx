type Props = {
  size?: number;
  animated?: boolean;
  className?: string;
  title?: string;
};

// 원본 로고(public/brand/implude-logo.webp)를 1250 그리드 위에 다시 그린 벡터 버전.
// 두 고리가 맞물리도록, 파랑이 위로 지나가는 교차점 두 곳은 마지막에 덧그립니다.
export default function LogoMark({ size = 40, animated = false, className, title = "IMPLUDE" }: Props) {
  return (
    <svg
      viewBox="90 100 1075 1050"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={[animated ? "logo-anim" : "", className].filter(Boolean).join(" ")}
    >
      <rect
        className="ring-blue"
        x="177.5" y="470.5" width="899" height="312.5" rx="156.25"
        fill="none" stroke="var(--blue)" strokeWidth="147" pathLength={1}
      />
      <g className="ring-black">
        <rect
          x="439" y="192" width="376" height="866" rx="188"
          fill="none" stroke="var(--bg)" strokeWidth="194" pathLength={1}
        />
        <rect
          x="439" y="192" width="376" height="866" rx="188"
          fill="none" stroke="var(--ink)" strokeWidth="158" pathLength={1}
        />
      </g>
      <g className="ring-over">
        <rect x="360" y="380" width="158" height="181" fill="var(--bg)" />
        <rect x="340" y="397" width="198" height="147" fill="var(--blue)" />
        <rect x="736" y="691" width="158" height="184" fill="var(--bg)" />
        <rect x="716" y="709.5" width="198" height="147" fill="var(--blue)" />
      </g>
    </svg>
  );
}
