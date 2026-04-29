import { t } from '../../data/siteContent';

export default function StatCard({ stat, lang }) {
  return (
    <article className="border-l border-white/10 px-5 py-5 first:border-l-0">
      <div className="font-display text-3xl font-bold leading-none text-gold">{stat.value}</div>
      <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold/75">
        {t(stat.label, lang)}
      </div>
      <p className="mt-1 text-sm leading-5 text-cream/45">{t(stat.detail, lang)}</p>
    </article>
  );
}
