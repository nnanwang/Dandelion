import { t } from '../../data/siteContent';

export default function TimelineItem({ item, lang }) {
  return (
    <article className="relative pb-10 last:pb-0">
      <div
        className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 ${
          item.complete ? 'border-gold bg-gold' : 'border-gold bg-cream'
        }`}
      />
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">
        {t(item.date, lang)}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">{t(item.title, lang)}</h3>
      <p className="body-copy mt-2 max-w-3xl text-[0.98rem]">{t(item.text, lang)}</p>
    </article>
  );
}
