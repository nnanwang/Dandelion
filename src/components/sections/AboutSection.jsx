import { siteContent, t } from '../../data/siteContent';
import DecisionFramework from '../ui/DecisionFramework';

const aboutSubnav = [
  { href: '#origin', label: { en: 'Project Origin', zh: '项目缘起' } },
  { href: '#framework', label: { en: 'Decision Framework', zh: '决策框架' } },
];

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

        <div className="mt-16">
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

        <div id="framework" className="mt-20 scroll-mt-[calc(var(--header-height)+24px)]">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {t(about.decisionFramework.title, lang)}
            </h3>
            <p className="mt-4 text-base leading-7 text-inkLight">{t(about.decisionFramework.subtitle, lang)}</p>
          </div>
          <DecisionFramework framework={about.decisionFramework} lang={lang} />
        </div>
      </div>
    </section>
  );
}
