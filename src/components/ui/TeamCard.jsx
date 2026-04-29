import { t } from '../../data/siteContent';

export default function TeamCard({ member, lang }) {
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="soft-card soft-card-hover">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-goldPale font-display text-lg font-semibold text-ink">
          {initials}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">{member.name}</h3>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">
            {t(member.role, lang)}
          </p>
        </div>
      </div>
      <p className="body-copy mt-5 text-[0.95rem]">{t(member.bio, lang)}</p>
    </article>
  );
}
