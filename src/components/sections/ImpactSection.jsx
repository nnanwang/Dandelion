import { siteContent } from '../../data/siteContent';
import StatCard from '../ui/StatCard';

export default function ImpactSection({ lang }) {
  return (
    <section id="field-notes" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-y-3 sm:grid-cols-2 lg:grid-cols-6">
          {siteContent.stats.map((stat) => (
            <StatCard key={stat.value} stat={stat} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
