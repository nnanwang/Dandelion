import { t } from '../../data/siteContent';

const nodePositions = [
  'left-[4%] top-[8%]',
  'right-[4%] top-[8%]',
  'left-1/2 bottom-[4%] -translate-x-1/2',
];

function ConceptNode({ item, className = '', lang }) {
  return (
    <article
      className={`absolute z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#D8D0C4] bg-[#FEFCF9]/70 p-5 text-center sm:h-40 sm:w-40 ${className}`}
    >
      <div>
        <h4 className="font-display text-2xl font-semibold leading-tight text-[#1A3D25]">{t(item.title, lang)}</h4>
        <p className="mt-2 text-xs leading-5 text-[#4A443D] sm:text-sm">{t(item.text, lang)}</p>
      </div>
    </article>
  );
}

export default function ConceptMap({ map, lang }) {
  return (
    <div className="relative mx-auto min-h-[430px] w-full max-w-[560px] sm:min-h-[470px]">
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 560 470"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="172" y1="142" x2="220" y2="206" stroke="#B8A978" strokeWidth="1.4" strokeDasharray="5 7" opacity="0.62" />
        <line x1="388" y1="142" x2="340" y2="206" stroke="#B8A978" strokeWidth="1.4" strokeDasharray="5 7" opacity="0.62" />
        <line x1="280" y1="344" x2="280" y2="312" stroke="#B8A978" strokeWidth="1.4" strokeDasharray="5 7" opacity="0.62" />
      </svg>

      <div className="absolute left-1/2 top-[48%] z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#24572D] p-6 text-center text-[#F7F3EC] sm:h-44 sm:w-44">
        <h3 className="font-display text-2xl font-semibold leading-tight text-[#F7F3EC]">{t(map.center, lang)}</h3>
      </div>

      {map.nodes.map((item, index) => (
        <ConceptNode key={t(item.title, 'en')} item={item} className={nodePositions[index]} lang={lang} />
      ))}
    </div>
  );
}
