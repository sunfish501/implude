import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // React Bits(reactbits.dev)에서 가져온 원본 컴포넌트. 원본과 비교하기 쉽게 그대로 둡니다.
    "src/components/reactbits/**",
  ]),
]);

export default eslintConfig;
