// 사이트에 들어가는 문구와 링크는 여기서 한 번에 고칩니다.

export const APPLY_URL = "#contact"; // TODO: 모집 기간에 지원 폼 링크로 교체

export const contacts = [
  {
    label: "Instagram",
    handle: "@dimigoimplude",
    href: "https://instagram.com/dimigoimplude",
  },
  {
    label: "카카오톡 오픈채팅",
    handle: "open.kakao.com/o/sdNUzv0c",
    href: "https://open.kakao.com/o/sdNUzv0c",
  },
  {
    label: "Facebook",
    handle: "fb.com/implude",
    href: "https://fb.com/implude",
  },
];

export const steps = [
  {
    verb: "상상하기",
    title: "아이디어 피칭",
    body: "모든 프로젝트는 ‘이런 앱 있으면 좋겠다’는 한 문장에서 시작합니다. 서로의 아이디어를 듣고 팀을 꾸립니다.",
  },
  {
    verb: "그리기",
    title: "기획과 디자인",
    body: "누가, 언제, 왜 쓰는지 정리하고 화면 흐름을 그립니다. Figma로 눌러 볼 수 있는 프로토타입을 만듭니다.",
  },
  {
    verb: "만들기",
    title: "개발",
    body: "Android, iOS, Flutter 등 프로젝트에 맞는 도구로 구현합니다. 코드 리뷰로 서로의 코드를 함께 다듬습니다.",
  },
  {
    verb: "내보내기",
    title: "출시와 대회",
    body: "스토어에 올리고, 해커톤과 공모전에 나갑니다. 실제 사용자의 반응이 다음 버전을 만듭니다.",
  },
];

export const stack = ["Kotlin", "Swift", "Flutter", "React Native", "Firebase", "Figma", "Git"];

export const history: { year: string; items: string[] }[] = [
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

export const wanted = [
  "불편한 걸 보면 고쳐 보고 싶은 사람",
  "머릿속에 만들고 싶은 앱이 하나쯤 있는 사람",
  "처음 해 보는 일이라도 끝까지 붙잡는 사람",
];
