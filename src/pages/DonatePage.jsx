import DonateSection from '../components/sections/DonateSection';

export default function DonatePage({ lang }) {
  return (
    <div className="bg-cream">
      <section
        className="relative h-[30vh] bg-cover bg-center bg-no-repeat md:h-[40vh]"
        style={{ backgroundImage: "url('/images/Image_20260422070239_60_1218.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              {lang === 'en' ? 'Support Field-Based Public Health Work' : '支持田野公共健康行动'}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">
              {lang === 'en'
                ? 'Your contribution helps make prevention accessible, trusted, and actionable in underserved communities.'
                : '你的支持将帮助资源相对不足的社区，让预防变得可获得、可信任、可行动。'}
            </p>
          </div>
        </div>
      </section>
      <DonateSection lang={lang} />
    </div>
  );
}
