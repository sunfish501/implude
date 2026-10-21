import LogoMark from "@/components/LogoMark";
import { APPLY_URL, contacts, history, stack, steps, wanted } from "@/content";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="IMPLUDE 홈">
            <LogoMark size={30} />
            <span className="wordmark">IMPLUDE</span>
          </a>
          <nav className="nav-links" aria-label="주요 메뉴">
            <a href="#about">소개</a>
            <a href="#history">연혁</a>
            <a href="#contact">연락</a>
          </nav>
          <a href="#recruit" className="btn btn-sm">지원하기</a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">한국디지털미디어고등학교 앱 개발 동아리</p>
            <h1 className="headline">
              <span className="imagine">상상한 대로</span>
              <span className="make">만들어라.</span>
            </h1>
            <p className="lead">
              임플루드는 2015년부터 머릿속 아이디어를 손에 쥘 수 있는 앱으로 옮겨 온 동아리입니다.
              기획부터 디자인, 개발, 출시까지 직접 해 봅니다.
            </p>
            <div className="actions">
              <a href="#recruit" className="btn">지원하기</a>
              <a href="#about" className="btn btn-ghost">어떻게 만드는지 보기</a>
            </div>
          </div>

          <figure className="hero-mark">
            <LogoMark animated size={440} className="hero-logo" />
            <figcaption className="legend">
              <span><i className="dot dot-blue" />상상</span>
              <span><i className="dot dot-ink" />만듦</span>
              <span className="legend-note">두 고리가 맞물리면 앱이 됩니다</span>
            </figcaption>
          </figure>
        </section>

        <section id="about" className="section wrap">
          <div className="section-head">
            <p className="tag">How we make</p>
            <h2>한 학기, 하나의 앱.</h2>
            <p className="section-lead">
              임플루드의 프로젝트는 늘 같은 순서로 흘러갑니다. 상상에서 시작해 실제 사용자 손에 닿을 때까지.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.verb} className="step">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <p className="step-verb">{s.verb}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="stack">
            <span className="stack-label">우리가 쓰는 도구</span>
            <ul>
              {stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="history" className="section section-tint">
          <div className="wrap history">
            <div className="section-head">
              <p className="tag">History</p>
              <h2>상상이 기록이 된 순간들.</h2>
            </div>

            <ol className="timeline">
              <li className="tl-row tl-next">
                <span className="tl-year">Next</span>
                <p>다음 줄은 여러분이 씁니다.</p>
              </li>
              {history.map((h) => (
                <li key={h.year} className="tl-row">
                  <span className="tl-year">{h.year}</span>
                  <ul>
                    {h.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="recruit" className="recruit">
          <div className="wrap recruit-inner">
            <div>
              <p className="tag tag-on-blue">Recruit</p>
              <h2>
                혹시 당신도
                <br />
                앱을 만들고 싶다면?
              </h2>
              <p className="recruit-lead">
                코딩 경험이 없어도 괜찮습니다. 만들고 싶은 게 하나 있으면 충분합니다.
              </p>
              <a href={APPLY_URL} className="btn btn-invert">지원하기</a>
            </div>
            <div className="wanted">
              <p className="wanted-label">이런 사람을 찾습니다</p>
              <ul>
                {wanted.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section wrap">
          <div className="section-head">
            <p className="tag">Contact</p>
            <h2>궁금한 게 있다면.</h2>
          </div>
          <ul className="contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noreferrer" className="contact">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-handle">{c.handle}</span>
                  <span className="contact-arrow" aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a href="#top" className="brand" aria-label="맨 위로">
            <LogoMark size={24} />
            <span className="wordmark">IMPLUDE</span>
          </a>
          <p>© 2015–2026 IMPLUDE · 한국디지털미디어고등학교</p>
        </div>
      </footer>
    </>
  );
}
