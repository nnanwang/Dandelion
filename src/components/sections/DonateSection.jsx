import { siteContent, t } from '../../data/siteContent';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

export default function DonateSection({ lang }) {
  const { donation } = siteContent;

  return (
    <section id="donate" className="bg-paper text-ink">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <SectionTitle eyebrow={donation.eyebrow} title={donation.title} intro={donation.intro} lang={lang} />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={donation.externalUrl} variant="primary" target="_blank" rel="noreferrer">
                {t(donation.primaryCta, lang)}
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </Button>
              <Button href={`mailto:${donation.email}`} variant="secondary">
                {lang === 'en' ? 'Contact Foundation' : '联系基金会'}
              </Button>
            </div>

            <div className="mt-8 grid gap-7 sm:grid-cols-[220px_1fr] sm:items-end">
              <div className="flex max-w-[220px] flex-col items-center">
                <p className="mb-4 text-center font-mono text-xs uppercase tracking-wide text-inkFaint">{t(donation.qrLabel, lang)}</p>
                {donation.qrImage ? (
                  <img src={donation.qrImage} alt={t(donation.qrLabel, lang)} className="h-auto w-44 object-contain sm:w-48" />
                ) : (
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-inkFaint">{t(donation.qrPlaceholder, lang)}</p>
                )}
              </div>

              <dl className="space-y-4 border-l border-border pl-5 text-sm leading-6">
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold">
                    {lang === 'en' ? 'Website' : '网站'}
                  </dt>
                  <dd className="mt-1 text-inkLight">{donation.website}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold">
                    {lang === 'en' ? 'Contact' : '联系'}
                  </dt>
                  <dd className="mt-1 text-inkLight">{donation.email}</dd>
                </div>
              </dl>
            </div>
          </div>

          <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">
              {lang === 'en' ? 'Institutional Partner' : '机构合作方'}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">{t(donation.partner.name, lang)}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-inkLight">{t(donation.partner.description, lang)}</p>

            <dl className="mt-7 grid gap-4 border-y border-border py-5 sm:grid-cols-3">
              {donation.facts.map((fact) => (
                <div key={t(fact.label, 'en')}>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold">{t(fact.label, lang)}</dt>
                  <dd className="mt-2 text-sm leading-6 text-inkLight">{t(fact.value, lang)}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-display text-2xl font-semibold text-ink">{t(donation.budgetTitle, lang)}</h4>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-sage">{t(donation.transparency, lang)}</p>
              </div>

              <div className="mt-5 divide-y divide-border">
                {donation.budget.map((line) => (
                  <div key={t(line.item, 'en')} className="flex items-baseline justify-between gap-5 py-3 text-sm">
                    <span className="text-inkLight">{t(line.item, lang)}</span>
                    <span className="font-mono text-ink">{line.amount}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-5 border-t border-gold/35 pt-5">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{t(donation.total.label, lang)}</span>
                <span className="font-display text-4xl font-semibold text-gold">{donation.total.amount}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
