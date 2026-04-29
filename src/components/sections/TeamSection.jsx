import { siteContent } from '../../data/siteContent';
import SectionTitle from '../ui/SectionTitle';
import TeamCard from '../ui/TeamCard';

export default function TeamSection({ lang }) {
  const { team } = siteContent;

  return (
    <section id="team" className="bg-paper">
      <div className="section-shell">
        <SectionTitle eyebrow={team.eyebrow} title={team.title} lang={lang} centered />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {team.members.map((member) => (
            <TeamCard key={member.name} member={member} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
