import ConceptMap from './ConceptMap';

export default function DecisionFramework({ framework, lang }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
      <div className="flex min-h-[430px] items-center justify-center sm:min-h-[470px]">
        <img
          src="/images/decision-framework.png"
          alt="Dandelion decision framework showing trust, perception, access, belief, urgency, action, and chosen prevention."
          className="mx-auto w-full max-w-[560px] object-contain"
        />
      </div>

      <ConceptMap map={framework.conceptMap} lang={lang} />
    </div>
  );
}
