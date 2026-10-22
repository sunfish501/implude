"use client";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/components/theme-init";
import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function current(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(DARK_QUERY);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

/** 지금 보이는 테마(직접 고른 값, 없으면 시스템 설정)와 전환 함수 */
export function useTheme() {
  const theme = useSyncExternalStore<Theme>(subscribe, current, () => "light");

  const toggle = useCallback(() => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장이 막힌 브라우저에서는 이번 방문 동안만 유지됩니다
    }
  }, []);

  return { theme, toggle };
}
