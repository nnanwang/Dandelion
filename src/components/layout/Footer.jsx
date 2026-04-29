import { Link } from 'react-router-dom';
import { siteContent, t } from '../../data/siteContent';

export default function Footer({ lang }) {
  return (
    <footer className="border-t border-border bg-ink px-5 py-10 text-cream sm:px-8 lg:px-10">
      <p className="mx-auto mb-10 mt-6 max-w-3xl text-center font-display text-lg italic leading-8 text-cream/60 md:text-xl">
        “The question is no longer whether prevention exists. The question is what makes it believable, urgent, and actionable.”
      </p>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">{t(siteContent.brand.name, lang)}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-cream/55">{t(siteContent.brand.subtitle, lang)}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {siteContent.nav.map((item) => (
            <Link key={item.id} to={item.href} className="font-mono text-[0.66rem] uppercase tracking-[0.13em] text-cream/45 hover:text-gold">
              {t(item.label, lang)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
