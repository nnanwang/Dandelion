export default function LanguageToggle({ lang, onChange }) {
  return (
    <div className="flex shrink-0 gap-1 rounded-full border border-border bg-paper/80 p-1">
      {[
        ['en', 'EN'],
        ['zh', '中文'],
      ].map(([value, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`rounded-full px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition ${
            lang === value ? 'bg-gold text-white' : 'text-inkLight hover:text-ink'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
