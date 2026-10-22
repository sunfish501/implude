"use client";

import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/LogoMark";
import { APPLY_FORM_URL, sections } from "@/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // 화면 위쪽 1/3 지점을 지난 마지막 섹션을 현재 위치로 표시
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(atBottom ? targets[targets.length - 1].id : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 페이지 안 링크(#…)는 고정 헤더 아래까지 부드럽게 스크롤합니다.
  // 모바일 메뉴가 닫히며 레이아웃이 바뀌므로 목표 위치는 매 프레임 다시 계산합니다.
  useEffect(() => {
    let frame = 0;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();

      const header = document.querySelector<HTMLElement>(".nav-inner");
      const destination = () =>
        Math.max(0, target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0) - 16);
      const finish = () => {
        history.pushState(null, "", `#${id}`);
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };

      cancelAnimationFrame(frame);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        requestAnimationFrame(() => {
          window.scrollTo(0, destination());
          finish();
        });
        return;
      }

      const start = window.scrollY;
      const duration = Math.min(1000, 450 + Math.abs(destination() - start) / 6);
      const startTime = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        window.scrollTo(0, start + (destination() - start) * ease(t));
        if (t < 1) frame = requestAnimationFrame(step);
        else finish();
      };
      frame = requestAnimationFrame(step);
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function closeMenu(returnFocus: boolean) {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }

  const links = sections.map((s) => (
    <li key={s.id}>
      <a
        href={`#${s.id}`}
        aria-current={active === s.id ? "location" : undefined}
        onClick={() => closeMenu(false)}
      >
        {s.label}
      </a>
    </li>
  ));

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#main" className="brand">
          <LogoMark size={28} />
          <span className="wordmark">IMPLUDE</span>
        </a>

        <nav className="nav-links" aria-label="주요 메뉴">
          <ul>{links}</ul>
        </nav>

        <a href={APPLY_FORM_URL} target="_blank" rel="noreferrer" className="btn btn-sm nav-cta">
          지원서 작성<span className="ext" aria-hidden>↗</span>
          <span className="sr-only">(새 창)</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => (open ? closeMenu(false) : setOpen(true))}
        >
          <span className="menu-icon" aria-hidden data-open={open} />
          <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
        </button>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label="모바일 메뉴" hidden={!open}>
        <ul className="wrap">
          {links}
          <li>
            <a href={APPLY_FORM_URL} target="_blank" rel="noreferrer" className="btn mobile-cta">
              지원서 작성<span className="ext" aria-hidden>↗</span>
              <span className="sr-only">(새 창)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
