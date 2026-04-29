import { siteContent, t } from '../data/siteContent';
import TeamMemberCard from '../components/ui/TeamMemberCard';

function LeadershipCard({ card, lang }) {
  return (
    <article className="border-t border-border pt-5">
      <h3 className="font-display text-xl font-semibold text-ink">{t(card.title, lang)}</h3>
      <p className="mt-3 text-sm leading-7 text-inkLight">{t(card.body, lang)}</p>
    </article>
  );
}

export default function TeamPage({ lang }) {
  const { hero, leadership, team, organization } = siteContent.teamPage;

  return (
    <div className="bg-cream">
      <section className="border-b border-border bg-cream">
        <div className="section-shell pt-24">
          <p className="eyebrow">{t(hero.eyebrow, lang)}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl">
            {t(hero.title, lang)}
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t(leadership.eyebrow, lang)}</p>
            <h2 className="mx-auto mt-4 max-w-2xl break-words font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:whitespace-nowrap lg:text-5xl">
              {t(leadership.title, lang)}
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-sm pb-14">
              <div className="relative overflow-visible p-5">
                <div className="relative z-10 aspect-square overflow-hidden rounded-full bg-cream ring-2 ring-[#D8D0C4] shadow-[0_12px_30px_rgba(16,32,51,0.08)]">
                  <img
                    src={leadership.image.src}
                    alt={t(leadership.image.alt, lang)}
                    className="h-full w-full object-cover object-[0%_center]"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 z-20 w-[82%] -translate-x-1/2 translate-y-1/2 rounded-2xl border border-border bg-paper px-6 py-4 text-center shadow-[0_12px_30px_rgba(16,32,51,0.1)]">
                  <p className="font-display text-2xl font-semibold leading-tight text-ink">{leadership.founderName}</p>
                  <p className="mt-1 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-gold">
                    {t(leadership.founderRole, lang)}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{t(leadership.founderTitle, lang)}</p>
              <p className="mt-5 text-lg leading-9 text-inkLight">{t(leadership.intro, lang)}</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 text-sm leading-7 text-inkLight sm:grid-cols-2">
                {leadership.bullets.map((item) => (
                  <li key={t(item, 'en')} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span>{t(item, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
            {leadership.cards.map((card) => (
              <LeadershipCard key={t(card.title, 'en')} card={card} lang={lang} />
            ))}
            </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t(team.eyebrow, lang)}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {t(team.title, lang)}
            </h2>
            <p className="mt-5 text-base leading-8 text-inkLight">{t(team.intro, lang)}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {team.members.map((member) => (
              <TeamMemberCard key={member.name} member={member} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t(organization.eyebrow, lang)}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {t(organization.title, lang)}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-[10px] border border-border bg-white p-4 sm:p-6">
            <img
              src={organization.image.src}
              alt={t(organization.image.alt, lang)}
              className="mx-auto h-auto min-w-[720px] max-w-full object-contain sm:min-w-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
