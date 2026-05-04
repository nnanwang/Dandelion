import { useState } from 'react';
import { t } from '../../data/siteContent';

const inputPositions = [
  { left: '0%', top: '10%' },
  { left: '0%', top: '50%', transform: 'translateY(-50%)' },
  { left: '0%', bottom: '10%' },
];

const outputPositions = [
  { left: '56%', top: '10%' },
  { left: '56%', top: '50%', transform: 'translateY(-50%)' },
  { left: '56%', bottom: '10%' },
];

const relatedNodes = {
  trust: ['trust', 'core', 'belief'],
  perception: ['perception', 'core', 'urgency'],
  access: ['access', 'core', 'action'],
  belief: ['belief', 'core', 'outcome'],
  urgency: ['urgency', 'core', 'outcome'],
  action: ['action', 'core', 'outcome'],
  core: ['trust', 'perception', 'access', 'core', 'belief', 'urgency', 'action'],
  outcome: ['belief', 'urgency', 'action', 'outcome'],
};

const relatedLines = {
  trust: ['trust-core', 'core-output', 'belief-outcome'],
  perception: ['perception-core', 'core-output', 'urgency-outcome'],
  access: ['access-core', 'core-output', 'action-outcome'],
  belief: ['core-output', 'belief-outcome'],
  urgency: ['core-output', 'urgency-outcome'],
  action: ['core-output', 'action-outcome'],
  core: ['trust-core', 'perception-core', 'access-core', 'core-output'],
  outcome: ['belief-outcome', 'urgency-outcome', 'action-outcome'],
};

function getHighlightClass(activeKey, nodeKey) {
  if (!activeKey) return 'opacity-100';
  if (relatedNodes[activeKey]?.includes(nodeKey)) return 'opacity-100';
  return 'opacity-45';
}

function getLineOpacity(activeKey, lineKey, baseOpacity = 0.72) {
  if (!activeKey) return baseOpacity;
  return relatedLines[activeKey]?.includes(lineKey) ? 0.95 : 0.18;
}

function Node({
  title,
  subtitle,
  terms = [],
  style,
  variant = 'light',
  nodeKey,
  activeKey,
  onEnter,
  onMove,
  onLeave,
}) {
  const isDark = variant === 'dark';
  const hasCjk = /[\u3400-\u9FFF]/.test(title);
  const highlightClass = getHighlightClass(activeKey, nodeKey);

  return (
    <article
      className={`absolute z-10 flex flex-col items-center justify-center rounded-full border px-5 text-center transition duration-300 ${highlightClass} ${
        isDark
          ? `h-64 w-64 border-sage bg-sage text-white ring-1 ring-gold/30 ${activeKey === nodeKey ? 'scale-[1.03] shadow-[0_20px_58px_rgba(47,93,58,0.32)]' : 'shadow-[0_18px_50px_rgba(47,93,58,0.22)]'}`
          : 'h-40 w-40 border-border bg-white text-ink shadow-[0_10px_24px_rgba(26,23,20,0.035)]'
      }`}
      style={style}
      onMouseEnter={(event) => onEnter?.(nodeKey, event)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <p
        className={`${hasCjk ? 'font-sans text-base font-semibold tracking-[0.05em]' : isDark ? 'font-mono text-base font-semibold uppercase tracking-[0.14em]' : 'font-mono text-sm font-semibold uppercase tracking-[0.16em]'} ${
          isDark ? 'text-cream' : 'text-sage'
        }`}
      >
        {title}
      </p>
      {subtitle ? (
        <p className={`mt-3 text-xs font-normal leading-relaxed ${isDark ? 'text-white/78' : 'text-inkFaint'}`}>{subtitle}</p>
      ) : null}
      {terms.length ? (
        <div className={`mt-3 space-y-1 text-xs font-normal leading-tight ${isDark ? 'text-white/78' : 'text-inkFaint'}`}>
          {terms.map((term) => (
            <p key={term}>{term}</p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function MobileItem({ title, subtitle, terms = [], final = false }) {
  const hasCjk = /[\u3400-\u9FFF]/.test(title);

  return (
    <article className={`rounded-[16px] border p-5 ${final ? 'border-sage bg-sage text-white' : 'border-border bg-[rgba(120,100,80,0.04)] text-ink'}`}>
      <p
        className={`${hasCjk ? 'font-sans text-base font-semibold tracking-[0.05em]' : final ? 'font-mono text-base font-semibold uppercase tracking-[0.14em]' : 'font-mono text-sm font-semibold uppercase tracking-[0.16em]'} ${
          final ? 'text-cream' : 'text-sage'
        }`}
      >
        {title}
      </p>
      {subtitle ? <p className={`mt-3 text-xs font-normal leading-relaxed ${final ? 'text-white/78' : 'text-inkFaint'}`}>{subtitle}</p> : null}
      {terms.length ? (
        <div className={`mt-4 space-y-1 text-sm leading-6 ${final ? 'text-white/80' : 'text-inkLight'}`}>
          {terms.map((term) => (
            <p key={term}>{term}</p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function PillarIcon({ type }) {
  if (type === 0) {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
        <circle cx="24" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="22" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="22" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M13 38c1.2-7.5 5.2-12 11-12s9.8 4.5 11 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 37c1-5.5 4-9 8.5-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 37c-1-5.5-4-9-8.5-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
        <path d="M5 24s7.5-11 19-11 19 11 19 11-7.5 11-19 11S5 24 5 24z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M37 37l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <path d="M15 8h20v32H15z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 8l-6 4v32l6-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M27 24h.01" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M7 40h34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ExplanationBlock({ item, lang, index }) {
  const iconStyles = [
    { color: '#2F5D3A', background: 'rgba(47,93,58,0.08)' },
    { color: '#C8A96A', background: 'rgba(200,169,106,0.14)' },
    { color: '#5E6F7A', background: 'rgba(94,111,122,0.10)' },
  ];
  const iconStyle = iconStyles[index] || iconStyles[0];

  return (
    <article className="space-y-4 text-center">
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
        style={{ color: iconStyle.color, backgroundColor: iconStyle.background }}
      >
        <PillarIcon type={index} />
      </div>
      <h4 className="font-display text-xl font-semibold leading-tight text-ink">{t(item.title, lang)}</h4>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-gold">
        {t(item.subtitle, lang)}
      </p>
      <p className="text-left text-sm leading-relaxed text-inkLight md:text-center">{t(item.body, lang)}</p>
      <p className="border-l-2 border-gold/60 pl-4 text-left text-sm italic leading-relaxed text-inkFaint">
        {t(item.quote, lang)}
      </p>
    </article>
  );
}

export default function DecisionFramework({ framework, lang }) {
  const [activeKey, setActiveKey] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const inputs = framework?.inputs || [];
  const outputs = framework?.flow?.slice(0, 3) || [];
  const outcome = framework?.flow?.[3];
  const outputSubtitles = [
    { en: 'What people hold to be true', zh: '人们认为真实的事' },
    { en: 'Why now matters', zh: '为什么现在重要' },
    { en: 'What people are ready to do', zh: '人们准备采取的行动' },
  ];
  const inputKeys = ['trust', 'perception', 'access'];
  const outputKeys = ['belief', 'urgency', 'action'];
  const getTooltipText = (key) => {
    const inputIndex = inputKeys.indexOf(key);
    if (inputIndex >= 0) return t(framework.explanations?.[inputIndex]?.subtitle, lang);
    const outputIndex = outputKeys.indexOf(key);
    if (outputIndex >= 0) return t(outputs[outputIndex], lang);
    if (key === 'outcome') return t(outcome, lang);
    if (key === 'core') return lang === 'en' ? 'DECISION CORE' : '决策核心';
    return '';
  };
  const showTooltip = (key, event) => {
    setActiveKey(key);
    setTooltip({
      text: getTooltipText(key),
      x: event.clientX + 14,
      y: event.clientY + 14,
    });
  };
  const moveTooltip = (event) => {
    setTooltip((current) => (current ? { ...current, x: event.clientX + 14, y: event.clientY + 14 } : current));
  };
  const hideTooltip = () => {
    setActiveKey(null);
    setTooltip(null);
  };

  return (
    <div className="mx-auto mt-12 max-w-6xl">
      <div className="relative mx-auto hidden min-h-[620px] max-w-6xl lg:block">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1100 620" aria-hidden="true">
          <defs>
            <marker id="framework-arrow-gold" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 Z" fill="#C8A96A" />
            </marker>
            <marker id="framework-arrow-green" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
              <path d="M0,0 L9,4.5 L0,9 Z" fill="#2F5D3A" />
            </marker>
          </defs>

          <path d="M170 125 C255 150 305 220 330 263" fill="none" stroke="#8BAA8A" strokeWidth="1.55" markerEnd="url(#framework-arrow-gold)" opacity={getLineOpacity(activeKey, 'trust-core', 0.82)} />
          <path d="M170 310 C240 310 290 310 315 310" fill="none" stroke="#C8A96A" strokeWidth="1.55" markerEnd="url(#framework-arrow-gold)" opacity={getLineOpacity(activeKey, 'perception-core', 0.82)} />
          <path d="M170 495 C255 470 305 400 330 357" fill="none" stroke="#2F5D3A" strokeWidth="1.55" markerEnd="url(#framework-arrow-green)" opacity={getLineOpacity(activeKey, 'access-core', 0.82)} />

          <path d="M500 310 C575 310 625 310 690 310" fill="none" stroke="#D8D0C4" strokeWidth="1.45" strokeDasharray="5 8" markerEnd="url(#framework-arrow-gold)" opacity={getLineOpacity(activeKey, 'core-output', 0.9)} />

          <path d="M725 125 C810 170 850 240 855 285" fill="none" stroke="#2F5D3A" strokeWidth="1.5" strokeDasharray="5 8" markerEnd="url(#framework-arrow-green)" opacity={getLineOpacity(activeKey, 'belief-outcome')} />
          <path d="M725 310 C785 310 815 310 845 310" fill="none" stroke="#C8A96A" strokeWidth="1.5" strokeDasharray="5 8" markerEnd="url(#framework-arrow-gold)" opacity={getLineOpacity(activeKey, 'urgency-outcome')} />
          <path d="M725 495 C810 450 850 380 855 335" fill="none" stroke="#2F5D3A" strokeWidth="1.5" strokeDasharray="5 8" markerEnd="url(#framework-arrow-green)" opacity={getLineOpacity(activeKey, 'action-outcome')} />
        </svg>

        <div className={`absolute left-0 top-0 text-inkFaint ${lang === 'en' ? 'font-mono text-[0.58rem] uppercase tracking-[0.16em]' : 'font-sans text-xs tracking-[0.05em]'}`}>
          {lang === 'en' ? 'Inputs' : '输入因素'}
        </div>
        <div className={`absolute left-[34%] top-0 text-inkFaint ${lang === 'en' ? 'font-mono text-[0.58rem] uppercase tracking-[0.16em]' : 'font-sans text-xs tracking-[0.05em]'}`}>
          {lang === 'en' ? 'Decision Core' : '决策核心'}
        </div>
        <div className={`absolute left-[58%] top-0 text-inkFaint ${lang === 'en' ? 'font-mono text-[0.58rem] uppercase tracking-[0.16em]' : 'font-sans text-xs tracking-[0.05em]'}`}>
          {lang === 'en' ? 'Decision Readiness' : '决策准备'}
        </div>
        <div className={`absolute right-[5%] top-0 text-inkFaint ${lang === 'en' ? 'font-mono text-[0.58rem] uppercase tracking-[0.16em]' : 'font-sans text-xs tracking-[0.05em]'}`}>
          {lang === 'en' ? 'Outcome' : '结果'}
        </div>

        <div
          className={`absolute left-[28%] top-1/2 z-20 flex h-60 w-60 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/20 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.10)_0%,rgba(255,255,255,0.9)_58%,rgba(247,243,236,0)_100%)] px-9 text-center shadow-[0_18px_58px_rgba(200,169,106,0.12)] transition duration-300 ${getHighlightClass(activeKey, 'core')}`}
          onMouseEnter={(event) => showTooltip('core', event)}
          onMouseMove={moveTooltip}
          onMouseLeave={hideTooltip}
        >
          <p className={`${lang === 'en' ? 'font-mono text-[0.7rem] uppercase tracking-[0.16em]' : 'font-sans text-sm tracking-[0.05em]'} text-ink`}>
            {lang === 'en' ? 'Decision Core' : '决策核心'}
          </p>
          <p className={`${lang === 'en' ? 'uppercase tracking-[0.12em]' : 'tracking-[0.04em]'} mt-3 text-xs text-inkFaint`}>
            {lang === 'en' ? 'COMBINED INFLUENCE' : '共同作用'}
          </p>
        </div>

        {inputs.map((input, index) => (
          <Node
            key={t(input.title, 'en')}
            nodeKey={inputKeys[index]}
            activeKey={activeKey}
            title={t(input.title, lang)}
            terms={input.terms.map((term) => t(term, lang))}
            style={inputPositions[index]}
            onEnter={showTooltip}
            onMove={moveTooltip}
            onLeave={hideTooltip}
          />
        ))}

        {outputs.map((step, index) => (
          <Node
            key={t(step, 'en')}
            nodeKey={outputKeys[index]}
            activeKey={activeKey}
            title={t(step, lang)}
            subtitle={t(outputSubtitles[index], lang)}
            style={outputPositions[index]}
            onEnter={showTooltip}
            onMove={moveTooltip}
            onLeave={hideTooltip}
          />
        ))}

        {outcome ? (
          <Node
            nodeKey="outcome"
            activeKey={activeKey}
            title={t(outcome, lang)}
            subtitle={t(framework.footer, lang)}
            style={{ right: '-2%', top: '50%', transform: 'translateY(-50%)' }}
            variant="dark"
            onEnter={showTooltip}
            onMove={moveTooltip}
            onLeave={hideTooltip}
          />
        ) : null}

        {tooltip ? (
          <div
            className="pointer-events-none fixed z-50 max-w-[220px] rounded-xl bg-white/90 px-3 py-2 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-inkLight shadow-[0_12px_34px_rgba(26,23,20,0.12)] backdrop-blur"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.text}
          </div>
        ) : null}
      </div>

      <div className="mt-10 space-y-4 lg:hidden">
        {inputs.map((input, index) => (
          <MobileItem
            key={t(input.title, 'en')}
            title={t(input.title, lang)}
            terms={input.terms.map((term) => t(term, lang))}
          />
        ))}
        {outputs.map((step, index) => (
          <MobileItem
            key={t(step, 'en')}
            title={t(step, lang)}
            subtitle={t(outputSubtitles[index], lang)}
          />
        ))}
        {outcome ? <MobileItem title={t(outcome, lang)} subtitle={t(framework.footer, lang)} final /> : null}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {framework.explanations.map((item, index) => (
          <ExplanationBlock key={t(item.title, 'en')} item={item} lang={lang} index={index} />
        ))}
      </div>

      <div className="mt-12 rounded-[18px] bg-sage p-7 text-cream shadow-[0_18px_60px_rgba(47,93,58,0.16)] sm:p-8">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-goldLight">
          {t(framework.interaction.label, lang)}
        </p>
        <h4 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream">
          {t(framework.interaction.title, lang)}
        </h4>
        <p className="mt-5 max-w-4xl text-sm leading-7 text-white/78">
          {t(framework.interaction.body, lang)}
        </p>
        <p className="mt-6 max-w-3xl font-display text-xl italic leading-8 text-goldLight">
          {t(framework.interaction.quote, lang)}
        </p>
      </div>
    </div>
  );
}
