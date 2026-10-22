import Image from "next/image";
import LogoMark from "@/components/LogoMark";
import { BrandBand, HeroDots, HeroTitle, ProjectCard, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";
import {
  APPLY_FORM_URL,
  contacts,
  history,
  historyRange,
  projects,
  recruitFields,
  recruitSteps,
  stack,
  steps,
} from "@/content";

function NewTab() {
  return (
    <>
      <span className="ext" aria-hidden>
        ↗
      </span>
      <span className="sr-only">(새 창)</span>
    </>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        본문으로 건너뛰기
      </a>
      <SiteHeader />

      <main id="main">
        <section className="hero-wrap" aria-labelledby="hero-title">
          <HeroDots />
          <div className="hero wrap">
            <div className="hero-copy">
              <HeroTitle />
              <p className="lead">
                임플루드는 한국디지털미디어고등학교 앱 개발 동아리입니다. 팀을 이뤄 앱을 기획하고 디자인하며
                개발합니다.
              </p>
              <div className="actions">
                <a href="#recruit" className="btn">
                  모집 안내
                </a>
                <a href="#projects" className="btn btn-ghost">
                  프로젝트 보기
                </a>
              </div>
            </div>
            <LogoMark animated size={300} className="hero-logo" />
          </div>
        </section>

        <BrandBand />

        <section id="projects" className="section wrap" aria-labelledby="projects-title">
          <Reveal className="section-head">
            <h2 id="projects-title">프로젝트</h2>
            <p className="section-lead">부원들이 팀을 이뤄 만든 서비스입니다.</p>
          </Reveal>

          <Reveal className="projects" role="list" stagger={0.08} distance={56}>
            {projects.map((p) => (
              <div key={p.name} role="listitem">
                <ProjectCard>
                  <div className="project-shot">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={1280}
                      height={720}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                    />
                  </div>
                  <div className="project-body">
                    <h3>
                      {p.name}
                      <span className="project-year">{p.year}</span>
                    </h3>
                    <p>{p.summary}</p>
                    {p.award && <p className="project-award">{p.award}</p>}
                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noreferrer" className="text-link">
                        {p.link.label}
                        <NewTab />
                      </a>
                    )}
                  </div>
                </ProjectCard>
              </div>
            ))}
          </Reveal>
        </section>

        <section id="process" className="section section-tint" aria-labelledby="process-title">
          <div className="wrap">
            <Reveal className="section-head">
              <h2 id="process-title">활동 방식</h2>
              <p className="section-lead">
                프론트엔드, 백엔드, 디자인, 기획 분야별로 배우고 팀 프로젝트를 진행합니다.
              </p>
            </Reveal>

            <Reveal className="steps" role="list" stagger={0.1} distance={32}>
              {steps.map((s, i) => (
                <div key={s.title} className="step" role="listitem">
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </Reveal>

            <p className="stack">
              <span className="stack-label">프로젝트에서 사용한 기술</span>
              <span className="stack-list">{stack.join(" · ")}</span>
            </p>
          </div>
        </section>

        <section id="history" className="section wrap history" aria-labelledby="history-title">
          <Reveal className="section-head">
            <h2 id="history-title">주요 연혁</h2>
            <p className="section-lead">{historyRange} 주요 기록</p>
          </Reveal>

          <div className="timeline" role="list">
            {history.map((h) => (
              <Reveal key={h.year} className="tl-row" role="listitem" distance={24} blur={0}>
                <span className="tl-year">{h.year}</span>
                <ul>
                  {h.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="recruit" className="recruit" aria-labelledby="recruit-title">
          <Reveal className="wrap recruit-inner" stagger={0.12}>
            <div>
              <h2 id="recruit-title">모집 안내</h2>
              <p className="recruit-lead">
                신입 부원은 매년 3월(일반동아리)과 4월(창업동아리)에 모집해 왔습니다.
              </p>
              <div className="actions">
                <a href={APPLY_FORM_URL} target="_blank" rel="noreferrer" className="btn btn-invert">
                  지원서 작성
                  <NewTab />
                </a>
                <a href="#contact" className="btn btn-outline-light">
                  모집 문의
                </a>
              </div>
            </div>

            <div className="recruit-facts">
              <dl>
                <div>
                  <dt>모집 분야</dt>
                  <dd>{recruitFields.join(" · ")}</dd>
                </div>
                <div>
                  <dt>선발 절차</dt>
                  <dd>
                    <ol className="recruit-steps">
                      {recruitSteps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </dd>
                </div>
              </dl>
              <p className="recruit-note">2025년 모집 기준입니다. 올해 일정은 문의해 주세요.</p>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section wrap" aria-labelledby="contact-title">
          <Reveal className="section-head">
            <h2 id="contact-title">문의</h2>
          </Reveal>
          <Reveal className="contacts" role="list" stagger={0.07} distance={24} blur={0}>
            {contacts.map((c) => (
              <div key={c.label} role="listitem">
                <a
                  href={c.href}
                  className="contact"
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-detail">{c.detail}</span>
                  {c.external && <NewTab />}
                </a>
              </div>
            ))}
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>
            <span className="wordmark">IMPLUDE</span> · 한국디지털미디어고등학교
          </p>
          <a href="#main" className="to-top">
            맨 위로 <span aria-hidden>↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
