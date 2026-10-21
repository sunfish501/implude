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
