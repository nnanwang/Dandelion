import { useState } from 'react';
import { t } from '../../data/siteContent';

export default function TeamMemberCard({ member, lang }) {
  const [expanded, setExpanded] = useState(false);
  const bio = t(member.about, lang);
  const showToggle = bio.length > 120 || member.responsibilities.length > 2;
  const initials = member.name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="flex h-full flex-col rounded-[12px] border border-border bg-paper p-5 transition duration-200 hover:-translate-y-0.5 hover:border-gold/40">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-sage/20 bg-cream sm:h-20 sm:w-20">
        {member.image ? (
          <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-cover" />
        ) : (
          <span className="font-display text-2xl font-semibold text-sage sm:text-3xl">{initials}</span>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight text-ink">{member.name}</h3>
          <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-gold">{t(member.role, lang)}</p>
        </div>
        {member.badge ? (
          <span className="rounded-full border border-sage/30 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-inkLight">
            {t(member.badge, lang)}
          </span>
        ) : null}
      </div>

      <div className={`mt-4 text-sm leading-7 text-inkLight ${expanded ? '' : 'line-clamp-3'}`}>
        <p>{bio}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {member.responsibilities.map((item) => (
            <li key={t(item, 'en')}>{t(item, lang)}</li>
          ))}
        </ul>
      </div>

      {showToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 w-fit font-mono text-[0.64rem] uppercase tracking-[0.13em] text-gold transition hover:text-sage"
        >
          {expanded ? (lang === 'en' ? 'Show less' : '收起') : lang === 'en' ? 'Read more' : '展开'}
        </button>
      ) : null}

      {member.cta ? (
        <a
          href={member.cta.href}
          className="mt-5 inline-flex w-fit font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gold transition hover:text-ink"
        >
          {t(member.cta.label, lang)}
        </a>
      ) : null}
    </article>
  );
}
