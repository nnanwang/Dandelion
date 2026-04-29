import { Link } from 'react-router-dom';
import { siteContent, t } from '../../data/siteContent';
import LanguageToggle from './LanguageToggle';

function Mark() {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="5" fill="#2F5D3A" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 40 40)`}>
          <line x1="40" y1="13" x2="40" y2="33" stroke="#2F5D3A" strokeWidth="1.2" opacity=".75" />
          <circle cx="40" cy="11" r="2.5" fill="#2F5D3A" opacity=".95" />
        </g>
      ))}
    </svg>
  );
}

export default function Header({ lang, onLanguageChange }) {
  const navClassName = (item) =>
    item.id === 'donate'
      ? 'whitespace-nowrap rounded-full bg-[#2F5D3A] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#274E31]'
      : 'whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.14em] text-inkLight transition hover:text-ink';

  const mobileNavClassName = (item) =>
    item.id === 'donate'
      ? 'whitespace-nowrap rounded-full bg-[#2F5D3A] px-4 py-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-white'
      : 'whitespace-nowrap font-mono text-[0.66rem] uppercase tracking-[0.13em] text-inkLight';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[var(--header-height)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3 text-ink no-underline">
          <Mark />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate font-mono text-[0.68rem] uppercase tracking-[0.18em] text-inkLight">
              {t(siteContent.brand.name, lang)}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 overflow-x-auto lg:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={navClassName(item)}
            >
              {t(item.label, lang)}
            </Link>
          ))}
        </nav>
        <LanguageToggle lang={lang} onChange={onLanguageChange} />
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-border px-5 py-3 lg:hidden">
        {siteContent.nav.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className={mobileNavClassName(item)}
          >
            {t(item.label, lang)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
