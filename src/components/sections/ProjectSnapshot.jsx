import { siteContent, t } from '../../data/siteContent';

export default function ProjectSnapshot({ lang }) {
  return (
    <section className="border-y border-[#D8D0C4] bg-[#F7F5F2]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {siteContent.projectSnapshot.map((metric, index) => (
            <article
              key={`${metric.value}-${t(metric.label, 'en')}`}
              className={`px-4 py-4 lg:px-5 ${
                index === 0 ? '' : 'lg:border-l lg:border-[#D8D0C4]'
              }`}
            >
              <p className="font-display text-3xl font-semibold leading-none text-[#2F5D3A] sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#7B7064]">
                {t(metric.label, lang)}
              </p>
              <p className="mt-2 text-sm leading-5 text-[#4A443D]/75">{t(metric.detail, lang)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
