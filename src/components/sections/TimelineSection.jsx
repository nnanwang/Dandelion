import { siteContent, t } from '../../data/siteContent';

export default function TimelineSection({ lang }) {
  const { timelineMeta, timeline } = siteContent;

  return (
    <section id="timeline" className="bg-[#EFE8DC]">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#7B7064]">
            {t(timelineMeta.eyebrow, lang)}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-[#1A1714] sm:text-5xl">
            {t(timelineMeta.title, lang)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-8 text-[#4A443D]">{t(timelineMeta.intro, lang)}</p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-[#B8AFA2] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-8">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={`${t(item.date, 'en')}-${t(item.title, 'en')}`}
                  className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] md:min-h-[170px] md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:items-start"
                >
                  <div
                    className={`col-start-2 row-start-1 pl-5 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-1 md:pr-9 md:text-left'
                        : 'md:col-start-3 md:pl-9 md:text-left'
                    }`}
                  >
                    <div className={`max-w-[18rem] ${isLeft ? 'md:ml-auto' : ''}`}>
                      <p className="font-display text-3xl font-semibold leading-none text-[#C9A84C]">
                        {t(item.date, lang)}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <p
                          className={`font-mono text-[0.58rem] uppercase tracking-[0.15em] ${
                            item.complete ? 'text-[#C9A84C]' : 'text-[#7B7064]'
                          }`}
                        >
                          {item.complete ? t({ en: 'Completed', zh: '已完成' }, lang) : t({ en: 'Planned', zh: '计划中' }, lang)}
                        </p>
                        {item.badge && (
                          <span className="rounded-full bg-[#E8F4EA] px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-[#5E8B65]">
                            {t(item.badge, lang)}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-[#1A1714]">
                        {t(item.title, lang)}
                      </h3>
                      <p className="mt-2 text-[0.82rem] leading-6 text-[#4A443D]">{t(item.text, lang)}</p>
                    </div>
                  </div>

                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                    <span
                      className="relative z-10 mt-3 h-2 w-2 rounded-full border border-[#B8AFA2] bg-[#EFE8DC]"
                    />
                    <span
                      className={`absolute top-[15px] hidden h-px w-7 bg-[#B8AFA2] md:block ${
                        isLeft ? 'right-7' : 'left-7'
                      }`}
                    />
                  </div>

                  <div
                    className={`hidden md:row-start-1 md:block ${
                      isLeft ? 'md:col-start-3' : 'md:col-start-1'
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
