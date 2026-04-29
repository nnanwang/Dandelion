import { siteContent, t } from '../../data/siteContent';
import ImageCollageSection from './ImageCollageSection';

export default function ObservedSection({ lang }) {
  const { observed } = siteContent;

  return (
    <section id="field-notes" className="bg-[#F7F3EC]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#7B7064]">
            {t(observed.eyebrow, lang)}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#1A1714] sm:text-5xl">
            {t(observed.title, lang)}
          </h2>
        </div>

        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
          <ImageCollageSection lang={lang} />
        </div>

        <div className="mt-12 space-y-5">
          {observed.items.map((item) => (
            <article
              key={t(item.label, 'en')}
              className="grid gap-5 border-t border-[#D8D0C4] pt-5 lg:grid-cols-[0.9fr_1.7fr_0.9fr] lg:items-start"
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#7B7064]">
                  {t(item.label, lang)}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-[#1A1714]">
                  {t(item.title, lang)}
                </h3>
              </div>
              <p className="text-[0.95rem] leading-7 text-[#4A443D]">{t(item.body, lang)}</p>
              <aside className="bg-[#F5EDD8] px-5 py-4">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#A77C20]">
                  {t(item.insightLabel, lang)}
                </p>
                <p className="mt-2 text-[0.88rem] font-medium leading-6 text-[#1A1714]">{t(item.insight, lang)}</p>
              </aside>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-[#D8D0C4] bg-[#FEFCF9]/60 px-6 py-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#7B7064]">
            {t(observed.closing.label, lang)}
          </p>
          <p className="mt-4 max-w-4xl text-[1rem] leading-8 text-[#4A443D]">{t(observed.closing.body, lang)}</p>
          <p className="mt-5 font-display text-2xl italic leading-tight text-[#1A1714]">
            {t(observed.closing.quote, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
