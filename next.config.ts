import type { NextConfig } from "next";

// GitHub Pages(sunfish501.github.io/implude)용 빌드에서만 하위 경로를 붙입니다.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // 정적 사이트라 PPR(cacheComponents, partialPrefetching)은 끕니다. export 모드와 함께 쓸 수 없습니다.
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
