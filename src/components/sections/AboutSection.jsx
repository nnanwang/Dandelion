import { siteContent, t } from '../../data/siteContent';
import DecisionFramework from '../ui/DecisionFramework';

const explanationIcons = ['community', 'awareness', 'access'];
const aboutSubnav = [
  { href: '#origin', label: { en: 'Project Origin', zh: '项目缘起' } },
  { href: '#framework', label: { en: 'Decision Framework', zh: '决策框架' } },
  { href: '#visual-identity', label: { en: 'Visual Identity', zh: '视觉识别' } },
];

function ExplanationIcon({ type }) {
  if (type === 'community') {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <circle cx="24" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="12" cy="20" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="36" cy="20" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M13 37c1.2-8 5.5-13 11-13s9.8 5 11 13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M4 36c1-6 4.5-10 9-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M44 36c-1-6-4.5-10-9-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'awareness') {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M24 5v4M24 39v4M7 10l3 3M38 35l3 3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
      <path d="M17 8h20v32H17z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M17 8l-7 4v32l7-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M28 24h.01" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M8 40h32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutSection({ lang }) {
  const { about, images } = siteContent;
  const [origin] = about.sections;

  return (
    <section id="about" className="bg-[#F7F3EC]">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#7B7064]">
            {t(about.eyebrow, lang)}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#1A1714] sm:text-5xl">
            {t(about.title, lang)}
          </h2>
          <p className="mt-4 font-display text-2xl italic leading-snug text-[#4A443D]">{t(about.intro, lang)}</p>
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3" aria-label={lang === 'en' ? 'About section navigation' : '项目介绍分区导航'}>
          {aboutSubnav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-[#7B7064] transition hover:text-[#C9A84C]"
            >
              {t(item.label, lang)}
            </a>
          ))}
        </nav>

        <div id="origin" className="mt-12 grid scroll-mt-[calc(var(--header-height)+24px)] gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#C9A84C]">
              {t(origin.label, lang)}
            </p>
            <div className="mt-5 max-w-3xl space-y-4">
              {origin.paragraphs.map((paragraph) => (
                <p key={t(paragraph, 'en')} className="text-[0.98rem] leading-8 text-[#4A443D]">
                  {t(paragraph, lang)}
                </p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-[#D8D0C4] bg-[#FEFCF9] shadow-[0_12px_40px_rgba(26,23,20,0.08)]">
            <img
              src={images.about}
              alt=""
              className="h-72 w-full object-cover object-center sm:h-80 lg:h-[390px]"
            />
            <div className="grid border-t border-[#D8D0C4] sm:grid-cols-[1.18fr_0.82fr]">
              <aside className="border-b border-[#D8D0C4] bg-[#FEFCF9] p-5 sm:border-b-0 sm:border-r">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#7B7064]">
                  {t(about.originCards[0].label, lang)}
                </p>
                <h4 className="mt-2 font-display text-base font-semibold leading-snug text-[#1A1714]">
                  {t(about.originCards[0].title, lang)}
                </h4>
                <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#C9A84C]">
                  {t(about.originCards[0].meta, lang)}
                </p>
              </aside>

              <aside className="bg-[#1A1714] p-5 text-[#F7F3EC]">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#C9A84C]">
                  {t(about.originCards[1].label, lang)}
                </p>
                <h4 className="mt-3 font-display text-xl font-semibold leading-tight text-[#F7F3EC]">
                  {t(about.originCards[1].title, lang)}
                </h4>
              </aside>
            </div>
          </div>
        </div>

        <div id="framework" className="mt-16 scroll-mt-[calc(var(--header-height)+24px)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#5E8B65]">
              {t(about.whatWeDoTitle, lang)}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {about.whatWeDo.map((item) => (
              <article
                key={t(item.title, 'en')}
                className="rounded-[18px] border border-[#D8D0C4] bg-[#FEFCF9] p-6 text-center shadow-[0_10px_35px_rgba(26,23,20,0.045)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/40 bg-[#F5EDD8] font-display text-xl text-[#5E8B65]">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#1A1714]">{t(item.title, lang)}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#4A443D]">{t(item.text, lang)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#5E8B65]">
              {t(about.howItWorks.eyebrow, lang)}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#1A1714] sm:text-4xl">
              {t(about.decisionFramework.title, lang)}
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4A443D]">{t(about.decisionFramework.subtitle, lang)}</p>
          </div>
          <div className="mt-14">
            <DecisionFramework framework={about.decisionFramework} lang={lang} />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {about.decisionFramework.explanations.map((item, index) => (
              <article key={t(item.title, 'en')} className="mx-auto flex h-full max-w-sm flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDD8]/70 text-[#315E31]">
                  <ExplanationIcon type={explanationIcons[index]} />
                </div>
                <h4 className="mt-5 font-display text-3xl font-semibold text-[#1A1714]">{t(item.title, lang)}</h4>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#C9A84C]">
                  {t(item.subtitle, lang)}
                </p>
                <p className="mt-5 text-[0.95rem] leading-7 text-[#4A443D]">{t(item.body, lang)}</p>
                <div className="mt-6 h-px w-12 bg-[#C9A84C]/70" />
                <p className="mt-5 max-w-xs font-display text-[1.02rem] italic leading-7 text-[#1A1714]/75">
                  {t(item.quote, lang)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[14px] bg-[#1A1714] p-7 text-[#F7F3EC] sm:p-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#C9A84C]">
              {t(about.decisionFramework.interaction.label, lang)}
            </p>
            <h4 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#F7F3EC]">
              {t(about.decisionFramework.interaction.title, lang)}
            </h4>
            <p className="mt-4 max-w-3xl text-[0.98rem] leading-8 text-[#F7F3EC]/70">
              {t(about.decisionFramework.interaction.body, lang)}
            </p>
            <p className="mt-5 font-display text-2xl italic leading-tight text-[#E8D4A0]">
              {t(about.decisionFramework.interaction.quote, lang)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
