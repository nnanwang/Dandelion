import { siteContent, t } from '../../data/siteContent';

const tileClasses = [
  'col-span-2 h-64 md:col-span-3 md:row-span-2 md:h-auto',
  'h-40 md:col-span-1 md:row-span-1 md:h-auto',
  'h-40 md:col-span-2 md:row-span-1 md:h-auto',
  'h-40 md:col-span-2 md:row-span-1 md:h-auto',
  'h-40 md:col-span-1 md:row-span-1 md:h-auto',
];

export default function ImageCollageSection({ lang }) {
  const images = siteContent.observed.collage;

  return (
    <div
      aria-label={t(siteContent.observed.title, lang)}
      className="grid w-full grid-cols-2 gap-1 md:grid-cols-6 md:grid-rows-[220px_220px]"
    >
      {images.map((image, index) => (
        <figure key={image.src} className={`overflow-hidden ${tileClasses[index] || 'h-40 md:h-auto'}`}>
          <img
            src={image.src}
            alt={t(image.alt, lang)}
            className="h-full w-full object-cover object-center"
          />
        </figure>
      ))}
    </div>
  );
}
