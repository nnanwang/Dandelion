import { t } from '../../data/siteContent';

export default function SectionTitle({ eyebrow, title, intro, lang, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow">{t(eyebrow, lang)}</p>}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {t(title, lang)}
      </h2>
      {intro && <p className="body-copy mt-4">{t(intro, lang)}</p>}
    </div>
  );
}
