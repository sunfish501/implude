# IMPLUDE

> 상상한 대로 만들어라

한국디지털미디어고등학교 앱 개발 동아리 **임플루드**의 웹사이트입니다.

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 내용 고치기

- 문구, 연혁, 연락처, 지원 링크: `src/content.ts`
- 로고(벡터): `src/components/LogoMark.tsx`, 파비콘은 `src/app/icon.svg`
- 원본 로고 이미지: `public/brand/implude-logo.webp`
- 색상·타이포: `src/app/globals.css` 맨 위 `:root`

모집 기간에는 `src/content.ts`의 `APPLY_URL`을 지원 폼 주소로 바꿔 주세요.

## 배포

Vercel에 저장소를 연결하면 별도 설정 없이 배포됩니다.
