"use client";

import { useState, type ReactNode } from "react";

type Props = {
  id: string;
  openLabel: string;
  closeLabel: string;
  /** hide: 닫혀 있으면 영역 전체를 숨김. mobile: 모바일에서만 일부 항목을 숨김(CSS의 data-expanded로 처리) */
  collapse: "hide" | "mobile";
  className?: string;
  children: ReactNode;
};

export default function Expandable({ id, openLabel, closeLabel, collapse, className, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id={id} className={className} data-expanded={open} hidden={collapse === "hide" && !open}>
        {children}
      </div>
      <button
        type="button"
        className={collapse === "mobile" ? "expand-btn expand-btn--mobile" : "expand-btn"}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? closeLabel : openLabel}
        <span className="expand-icon" aria-hidden />
      </button>
    </>
  );
}
