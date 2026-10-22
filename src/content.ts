// 사이트에 들어가는 문구와 링크는 여기서 한 번에 고칩니다.
// 출처: github.com/implude 의 이전 공식 사이트(implude-main-page 2024, ImpludePage2025) 자료와
// 2025년 지원서(Google Forms) 내용

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const sections = [
  { id: "projects", label: "프로젝트" },
  { id: "process", label: "활동 방식" },
  { id: "recruit", label: "모집 안내" },
  { id: "history", label: "연혁" },
  { id: "contact", label: "문의" },
] as const;

export type Shot = { src: string; width: number; height: number; alt: string; bg: string };

export type Project = {
  name: string;
  year: number;
  shot: Shot;
  summary: string;
  award?: string;
  link?: { label: string; href: string };
};

// 이미지: 공식 홍보 이미지에서 앱 화면 부분만 잘라 낸 것 (public/projects)
export const featured = {
  name: "ASD",
  year: 2022,
  shot: {
    src: `${BASE}/projects/asd.webp`,
    width: 1140,
    height: 1020,
    alt: "ASD 앱의 달력, 할 일 목록, 조명 관리 화면",
    bg: "#ffffff",
  },
  audience: "공부할 때 휴대폰 때문에 집중이 끊기는 학생",
  problem: "공부 중에 휴대폰을 만지거나 알림을 확인하느라 집중이 자주 끊깁니다.",
  features: [
    "직접 만든 AI 스피커 위에 휴대폰을 올리면 공부 시간이 시작되고 방해 금지 모드가 켜집니다.",
    "스피커에 말로 명령해 휴대폰을 만지지 않고 조작합니다.",
    "앱에서 할 일 목록과 공부방 조명을 관리합니다.",
  ],
  results: ["STA+C 2022 미래산업 부문 대상", "게임동아 보도 (2022.11)"],
  link: { label: "GitHub 저장소", href: "https://github.com/implude/asd_front" },
};

export const projects: Project[] = [
  {
    name: "야미",
    year: 2023,
    shot: {
      src: `${BASE}/projects/yammy.webp`,
      width: 600,
      height: 1050,
      alt: "손에 든 휴대폰에 표시된 야미 앱의 쿠킹 클래스 목록",
      bg: "#000000",
    },
    summary:
      "요리를 배우고 싶은 사람이 쿠킹 클래스를 찾아 듣는 플랫폼입니다. 온라인 영상과 현장 강의를 모두 지원하고, 클래스를 연 사람에게 1:1로 질문할 수 있습니다.",
    award: "2023 벤처창업아이템 경진대회 동상",
  },
  {
    name: "VOAH",
    year: 2023,
    shot: {
      src: `${BASE}/projects/voah.webp`,
      width: 820,
      height: 840,
      alt: "태블릿에 표시된 VOAH의 채팅과 문서 화면",
      bg: "#000000",
    },
    summary:
      "여러 협업 도구를 오가며 일하는 소규모 팀을 위한 업무 관리 플랫폼입니다. 문서, 채팅, 일정을 한 창에서 다룹니다.",
    award: "2023 공개SW 개발자대회 특별상",
  },
  {
    name: "잇는",
    year: 2022,
    shot: {
      src: `${BASE}/projects/itnun.webp`,
      width: 960,
      height: 1080,
      alt: "잇는 앱의 청년 채용 공고 목록과 상세 화면",
      bg: "#000000",
    },
    summary: "정부와 지자체의 지원 정책을 한곳에서 찾는 앱입니다. 착한가게와 채용 정보도 함께 보여 줍니다.",
    award: "2022 공개SW 개발자대회 특별상",
    link: {
      label: "GitHub 저장소",
      href: "https://github.com/implude/ITNun-Flutter-EXPLUDE-Archived",
    },
  },
  {
    name: "MOLA",
    year: 2020,
    shot: {
      src: `${BASE}/projects/mola.webp`,
      width: 940,
      height: 1080,
      alt: "영어 책 위에서 MOLA 앱으로 문장을 촬영하는 화면",
      bg: "#d8d9dd",
    },
    summary:
      "영어 책을 읽다 모르는 단어를 만났을 때 쓰는 단어장 앱입니다. 카메라로 찍은 글자를 AI로 인식해 단어장에 담습니다.",
  },
  {
    name: "디넌",
    year: 2020,
    shot: {
      src: `${BASE}/projects/dineon.webp`,
      width: 1200,
      height: 675,
      alt: "디넌 앱의 로그인, 급식 시간, 공지 화면",
      bg: "#b0e5df",
    },
    summary: "디미고 학생이 그날의 급식 시간과 변경 사항을 확인하는 앱입니다. 디넌 공지사항도 함께 볼 수 있습니다.",
  },
];

export const steps = [
  { title: "아이디어·팀 구성", body: "아이디어를 공유하고 함께할 팀을 정합니다." },
  { title: "기획·디자인", body: "화면 흐름을 정리하고 Figma로 프로토타입을 만듭니다." },
  { title: "개발", body: "앱·웹 화면과 서버 개발로 역할을 나눠 구현합니다." },
  { title: "대회 참가", body: "완성한 서비스로 공모전과 해커톤에 참가합니다." },
];

// 공개 저장소에서 확인한 언어·도구
export const stack = ["Kotlin", "Swift", "Flutter", "React", "Figma"];

// ----- 모집 -----

// 2025년 공식 사이트(ImpludePage2025)의 지원서. 열려 있지만 올해 모집용인지는 확인되지 않았습니다.
export const PAST_FORM = { year: 2025, href: "https://forms.gle/NG9rhGAD53xnREQq8" };
export const PORTFOLIO_EMAIL = "biz.implude@dimigo.hs.kr";
export const KAKAO_URL = "https://open.kakao.com/o/sdNUzv0c";

export const recruitFields = ["프론트엔드", "백엔드", "디자인", "기획"];
export const recruitSteps = ["지원서 접수", "서류 검토", "서류 결과 발표", "면접", "최종 발표"];

// ----- 연혁 -----

export const historyRange = "2015–2024";

// 먼저 보여 줄 대표 실적. 명칭은 아래 전체 연혁과 같게 둡니다.
export const highlights = [
  { year: "2024", title: "한국코드페어 SW 공모전 대상" },
  { year: "2023·2024", title: "비즈쿨 우수창업동아리 1위" },
  { year: "2022", title: "STA+C 2022 미래산업 부문 대상" },
  { year: "2019", title: "삼성 SDS-JA 스마트 해커톤 대상" },
];

export const history: { year: string; items: string[] }[] = [
  {
    year: "2024",
    items: [
      "비즈쿨 우수창업동아리 1위",
      "Junction Asia, Apple Developer Academy@POSTECH 트랙 2위",
      "레드브릭 게임개발대회 대상",
      "한국코드페어 SW 공모전 대상",
      "2024 데이터 크리에이터 캠프 대상",
      "전국 고등학교 동아리 소프트웨어 경진대회 동상",
      "경기 상업교육페스티벌 취업설계 PT 동상",
      "2024 스마틴 앱 챌린지(STA+C) 우수상",
      "한양대 ERICA 2024 고교창업경진대회 우수상",
      "대구 데이터분석 경진대회 데이터 시각화 부문 장려상",
    ],
  },
  {
    year: "2023",
    items: [
      "비즈쿨 우수창업동아리 1위",
      "세종특별자치시 공공데이터 활용 창업경진대회 우수상",
      "벤처창업아이템 경진대회 동상",
      "공개SW 개발자대회 특별상",
      "매크로 키보드 MK1 판매, 첫 생산분 72대 1주 만에 판매",
    ],
  },
  {
    year: "2022",
    items: ["STA+C 2022 미래산업 부문 대상", "공개SW 개발자대회 특별상"],
  },
  { year: "2021", items: ["‘Discoding’, ‘Meat in’ 개발"] },
  { year: "2020", items: ["JA KOREA 창업놀이터 최우수상"] },
  {
    year: "2019",
    items: ["삼성 SDS-JA 스마트 해커톤 대상", "STAC(SK Smarteen App Challenge) 미래산업부문 대상"],
  },
  {
    year: "2018",
    items: [
      "안산시 청소년 Software-UP Programming Contest 우수상",
      "디지털 헬스케어 해커톤 2018 장려상",
      "세상을 변화시키는 ICT 임팩터톤 2등 · 디캠프상",
    ],
  },
  { year: "2017", items: ["ICT 어워드 코리아 알고리즘 프로그래밍 종목 장려상"] },
  { year: "2016", items: ["STAC(SK Smarteen App Challenge) 우수상"] },
  { year: "2015", items: ["임플루드 창업동아리 설립"] },
];

// ----- 문의 -----

export type Contact = { label: string; detail: string; href: string; kind: "external" | "email" };

// 카카오톡: 예전 공식 사이트 연락처 페이지의 1:1 문의 채널
// 이메일: 2025년 공식 사이트 연락처, 지원서의 포트폴리오 제출 주소
export const inquiryChannels: Contact[] = [
  { label: "카카오톡 1:1 문의", detail: "#IMPLUDE 오픈프로필", href: KAKAO_URL, kind: "external" },
  { label: "이메일", detail: PORTFOLIO_EMAIL, href: `mailto:${PORTFOLIO_EMAIL}`, kind: "email" },
];

// 게시물과 영상이 올라오는 채널
export const contentChannels: Contact[] = [
  {
    label: "Instagram",
    detail: "@implude_official",
    href: "https://www.instagram.com/implude_official/",
    kind: "external",
  },
  {
    label: "YouTube",
    detail: "@implude_official",
    href: "https://www.youtube.com/@implude_official",
    kind: "external",
  },
];
