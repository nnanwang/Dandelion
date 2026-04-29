import { siteContent, t } from '../../data/siteContent';

export default function HomeHero({ lang }) {
  const { hero, images } = siteContent;

  return (
    <section id="home" className="relative flex min-h-[82vh] items-center overflow-hidden bg-[#1A1714] sm:min-h-[90vh] lg:min-h-screen">
      <div className="absolute inset-0">
        <img src={images.hero} alt={t(hero.imageAlt, lang)} className="h-full w-full object-cover object-center brightness-105 contrast-95" />
        <div className="absolute inset-0 bg-[#1A1714]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/55 via-[#1A1714]/25 to-[#F7F3EC]/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 md:whitespace-nowrap">
            {t(hero.eyebrow, lang)}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] text-[#FEFCF9] sm:text-6xl lg:text-7xl">
            {t(hero.title, lang)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FEFCF9]/85 sm:text-xl">{t(hero.intro, lang)}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {hero.badges.map((badge) => (
              <span
                key={t(badge, 'en')}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/60 backdrop-blur-sm"
              >
                <span aria-hidden="true">{badge.icon}</span>
                <span>{t(badge, lang)}</span>
            </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#framework"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#C9A84C] px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#1A1714] transition hover:-translate-y-0.5 hover:bg-[#E8D4A0]"
            >
              {t(hero.primaryCta, lang)}
            </a>
            <a
              href="#timeline"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#FEFCF9]/55 bg-[#FEFCF9]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#FEFCF9] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#E8D4A0] hover:bg-[#FEFCF9]/18"
            >
              {t(hero.secondaryCta, lang)}
            </a>
          </div>

          <a
            href="#about"
            className="mt-7 inline-flex font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#B9D7BF] transition hover:text-[#FEFCF9]"
          >
            {t(hero.missionLink, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
