type Props = {
  size?: number;
  animated?: boolean;
  className?: string;
  title?: string;
};

const BLUE_RING = { x: 177.5, y: 470.5, width: 899, height: 312.5, rx: 156.25 };
const BLACK_RING = { x: 439, y: 192, width: 376, height: 866, rx: 188 };

// 원본 로고(public/brand/implude-logo.webp)를 1250 그리드 위에 다시 그린 벡터 버전.
// 파랑이 위로 지나가는 교차점 두 곳은 파란 고리를 한 번 더 그리되 그 구역만 잘라 보여 줍니다.
// 덧그린 고리도 같은 속도로 그려지므로, 그리는 도중에도 두 고리가 맞물린 채로 이어집니다.
// title이 없으면 장식용으로 보고 스크린 리더에서 숨깁니다.
export default function LogoMark({ size = 40, animated = false, className, title }: Props) {
  const clipId = `logo-over-${size}`;

  return (
    <svg
      viewBox="90 100 1075 1050"
      width={size}
      height={size}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={[animated ? "logo-anim" : "", className].filter(Boolean).join(" ")}
    >
      <defs>
        {/* 틈(흰 테두리)은 검정 고리 폭만큼만, 파랑은 그보다 넓게 잘라야 경계에 이음새가 생기지 않습니다 */}
        <clipPath id={`${clipId}-gap`}>
          <rect x="342" y="375" width="194" height="192" />
          <rect x="718" y="686" width="194" height="194" />
        </clipPath>
        <clipPath id={`${clipId}-blue`}>
          <rect x="328" y="375" width="222" height="192" />
          <rect x="704" y="686" width="222" height="194" />
        </clipPath>
      </defs>
      <rect className="ring-blue" {...BLUE_RING} fill="none" stroke="var(--blue)" strokeWidth="147" pathLength={1} />
      <g className="ring-black">
        <rect {...BLACK_RING} fill="none" stroke="var(--bg)" strokeWidth="194" pathLength={1} />
        <rect {...BLACK_RING} fill="none" stroke="var(--ink)" strokeWidth="158" pathLength={1} />
      </g>
      <g className="ring-over">
        <rect
          {...BLUE_RING}
          clipPath={`url(#${clipId}-gap)`}
          fill="none"
          stroke="var(--bg)"
          strokeWidth="183"
          pathLength={1}
        />
        <rect
          {...BLUE_RING}
          clipPath={`url(#${clipId}-blue)`}
          fill="none"
          stroke="var(--blue)"
          strokeWidth="147"
          pathLength={1}
        />
      </g>
    </svg>
  );
}
