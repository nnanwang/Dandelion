import { siteContent, t } from '../../data/siteContent';

export default function VisualIdentitySection({ lang }) {
  const { visualIdentity } = siteContent;

  return (
    <section id="visual-identity" className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div className="max-w-xl">
          <p className="eyebrow">{t(visualIdentity.eyebrow, lang)}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {t(visualIdentity.title, lang)}
          </h2>
          <p className="mt-6 text-base leading-8 text-inkLight">{t(visualIdentity.subtitle, lang)}</p>
        </div>

        <img
          src={visualIdentity.image.src}
          alt={t(visualIdentity.image.alt, lang)}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
