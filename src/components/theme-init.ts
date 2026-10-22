export const THEME_STORAGE_KEY = "implude-theme";

// 첫 화면이 그려지기 전에 저장된 테마를 적용해 깜빡임을 막습니다 (layout.tsx의 <head>에서 실행)
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
