import Image from "next/image";
import Expandable from "@/components/Expandable";
import LogoMark from "@/components/LogoMark";
import { HeroDots, HeroTitle, Reveal } from "@/components/Motion";
import SiteHeader from "@/components/SiteHeader";
import {
  contentChannels,
  featured,
  highlights,
  history,
  historyRange,
  inquiryChannels,
  KAKAO_URL,
  PAST_FORM,
  PORTFOLIO_EMAIL,
  projects,
  recruitFields,
  recruitSteps,
  stack,
  steps,
  type Contact,
  type Shot,
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

function ShotFrame({ shot, sizes }: { shot: Shot; sizes: string }) {
  return (
    <div className="shot" style={{ backgroundColor: shot.bg }}>
      <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} />
    </div>
  );
}

function ContactLink({ c }: { c: Contact }) {
  const external = c.kind === "external";
  return (
    <a href={c.href} className="contact" {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      <span className="contact-label">{c.label}</span>
      <span className="contact-detail">{c.detail}</span>
      {external ? <NewTab /> : <span className="contact-hint">메일 앱 열기</span>}
    </a>
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
                한국디지털미디어고등학교 앱 개발 동아리 임플루드입니다. 팀을 이뤄 서비스를 기획하고 디자인하며
                개발합니다.
              </p>
              <div className="actions">
                <a href="#projects" className="btn">
                  프로젝트 보기
                </a>
                <a href="#recruit" className="btn btn-ghost">
                  모집 안내
                </a>
              </div>
            </div>
            <LogoMark animated size={280} className="hero-logo" />
          </div>
        </section>

        {/* ---------- 프로젝트 ---------- */}
        <section id="projects" className="section wrap" aria-labelledby="projects-title">
          <Reveal className="section-head">
            <h2 id="projects-title">프로젝트</h2>
            <p className="section-lead">2020–2023년에 부원들이 팀을 이뤄 만든 서비스입니다.</p>
          </Reveal>

          <Reveal>
            <article className="featured" aria-labelledby="featured-title">
              <ShotFrame shot={featured.shot} sizes="(max-width: 860px) 100vw, 540px" />
              <div className="featured-body">
                <p className="eyebrow">대표 프로젝트</p>
                <h3 id="featured-title" className="featured-name">
                  {featured.name}
                </h3>
                <p className="meta">{featured.year}년</p>
                <dl className="featured-facts">
                  <div>
                    <dt>대상 사용자</dt>
                    <dd>{featured.audience}</dd>
                  </div>
                  <div>
                    <dt>해결하는 문제</dt>
                    <dd>{featured.problem}</dd>
                  </div>
                  <div>
                    <dt>핵심 기능</dt>
                    <dd>
                      <ul className="dash-list">
                        {featured.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>성과</dt>
                    <dd>
                      <ul className="dash-list">
                        {featured.results.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <a href={featured.link.href} target="_blank" rel="noreferrer" className="text-link">
                  {featured.link.label}
                  <NewTab />
                </a>
              </div>
            </article>
          </Reveal>

          <Expandable
            id="more-projects"
            className="project-list-wrap"
            collapse="mobile"
            openLabel="프로젝트 전체 보기"
            closeLabel="프로젝트 접기"
          >
            <ul className="project-list">
              {projects.map((p) => (
                <li key={p.name} className="project">
                  <ShotFrame shot={p.shot} sizes="(max-width: 600px) 112px, 168px" />
                  <div className="project-body">
                    <h3>{p.name}</h3>
                    <p className="meta">{p.year}년</p>
                    <p className="project-summary">{p.summary}</p>
                    {p.award && <p className="project-award">{p.award}</p>}
                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noreferrer" className="text-link">
                        {p.link.label}
                        <NewTab />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Expandable>
        </section>

        {/* ---------- 활동 방식 ---------- */}
        <section id="process" className="section section-tint" aria-labelledby="process-title">
          <div className="wrap">
            <Reveal className="section-head">
              <h2 id="process-title">활동 방식</h2>
              <p className="section-lead">
                프론트엔드, 백엔드, 디자인, 기획 분야별로 배우고 팀 프로젝트를 진행합니다.
              </p>
            </Reveal>

            <Reveal className="steps" role="list" stagger={0.08}>
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

        {/* ---------- 모집 안내 ---------- */}
        <section id="recruit" className="recruit" aria-labelledby="recruit-title">
          <div className="wrap recruit-inner">
            <div className="recruit-main">
              <h2 id="recruit-title">모집 안내</h2>
              <p className="recruit-status">
                <strong>올해 모집 일정은 아직 이 사이트에 없습니다.</strong> 일정과 지원 방법은 카카오톡으로
                문의해 주세요.
              </p>
              <div className="actions">
                <a href={KAKAO_URL} target="_blank" rel="noreferrer" className="btn btn-invert">
                  모집 일정 문의
                  <NewTab />
                </a>
              </div>
              <p className="recruit-past">
                2015–2023년에는 매년 3월(일반동아리)과 4월(창업동아리)에 신입 부원을 모집했습니다.
              </p>
            </div>

            <div className="recruit-facts">
              <p className="recruit-basis">{PAST_FORM.year}년 모집 기준</p>
              <dl>
                <div>
                  <dt>모집 분야</dt>
                  <dd>{recruitFields.join(" · ")} (1·2지망 선택)</dd>
                </div>
                <div>
                  <dt>제출</dt>
                  <dd>
                    Google Forms 지원서. 포트폴리오는{" "}
                    <a href={`mailto:${PORTFOLIO_EMAIL}`} className="inline-link">
                      {PORTFOLIO_EMAIL}
                    </a>
                    로 보냅니다.
                  </dd>
                </div>
                <div>
                  <dt>선발 절차</dt>
                  <dd>
                    <ol className="recruit-steps">
                      {recruitSteps.map((s, i) => (
                        <li key={s}>
                          <span className="recruit-step-num">{String(i + 1).padStart(2, "0")}</span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </dd>
                </div>
              </dl>
              <p className="recruit-form">
                <a href={PAST_FORM.href} target="_blank" rel="noreferrer" className="inline-link">
                  {PAST_FORM.year}년 지원서 양식 보기
                  <NewTab />
                </a>
                <span className="recruit-form-note">
                  Google 로그인 필요. 올해 모집에 쓰이는지는 문의로 확인해 주세요.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ---------- 연혁 ---------- */}
        <section id="history" className="section wrap" aria-labelledby="history-title">
          <Reveal className="section-head">
            <h2 id="history-title">주요 연혁</h2>
            <p className="section-lead">{historyRange} 주요 기록</p>
          </Reveal>

          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h.title}>
                <span className="hl-year">{h.year}</span>
                <span className="hl-title">{h.title}</span>
              </li>
            ))}
          </ul>

          <Expandable
            id="full-history"
            className="timeline"
            collapse="hide"
            openLabel="전체 연혁 보기"
            closeLabel="전체 연혁 접기"
          >
            {history.map((h) => (
              <div key={h.year} className="tl-row">
                <span className="tl-year">{h.year}</span>
                <ul>
                  {h.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Expandable>
        </section>

        {/* ---------- 문의 ---------- */}
        <section id="contact" className="section section-tint" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <h2 id="contact-title">문의</h2>
            <div className="contact-group">
              <h3>문의하기</h3>
              <ul className="contacts">
                {inquiryChannels.map((c) => (
                  <li key={c.label}>
                    <ContactLink c={c} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-group">
              <h3>활동 소식</h3>
              <ul className="contacts">
                {contentChannels.map((c) => (
                  <li key={c.label}>
                    <ContactLink c={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
