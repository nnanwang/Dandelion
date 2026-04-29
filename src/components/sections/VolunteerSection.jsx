import { siteContent, t } from '../../data/siteContent';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

function VolunteerRole({ role, lang }) {
  return (
    <article className="border-t border-border/80 py-5 first:border-t-0">
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-semibold leading-tight text-ink">{t(role.title, lang)}</h3>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">{t(role.meta, lang)}</p>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-inkLight">{t(role.description, lang)}</p>
    </article>
  );
}

export default function VolunteerSection({ lang }) {
  const { volunteer } = siteContent;

  return (
    <section id="volunteer" className="bg-cream">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)] lg:items-start">
          <div>
            <SectionTitle eyebrow={volunteer.eyebrow} title={volunteer.title} intro={volunteer.intro} lang={lang} />

            <div className="mt-9 border-y border-border/80">
              {volunteer.roles.map((role) => (
                <VolunteerRole key={t(role.title, 'en')} role={role} lang={lang} />
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-[#F9F6EF] p-7 lg:sticky lg:top-28">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-gold">
              {lang === 'en' ? 'Join the Mission' : '加入行动'}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">{t(volunteer.cta.title, lang)}</h3>
            <p className="mt-4 text-sm leading-7 text-inkLight">{t(volunteer.cta.body, lang)}</p>
            <div className="mt-7">
              <Button href={`mailto:${volunteer.cta.email}?subject=Volunteer%20Interest%20-%20Dandelion%20Project`} variant="primary">
                {t(volunteer.cta.button, lang)}
              </Button>
              <p className="mt-4 font-mono text-[0.68rem] tracking-[0.08em] text-inkFaint">{volunteer.cta.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
