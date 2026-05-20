'use client';

import { useEffect, useRef, useState } from 'react';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const REPS = [
  {
    id: 'rep1',
    name: 'David Gartner',
    title: 'Representation Inquiries',
    phone: '(952) 914-7201',
    email: 'dgartner@ecs-sales.com',
    states: ['MN', 'WI'],
    fill: '#3B6FBF',
    fillActive: '#5589E0',
    accent: 'oklch(62% 0.14 252)',
    accentDark: 'oklch(72% 0.10 252)',
  },
  {
    id: 'rep2',
    name: 'Dani Gish',
    title: 'Sales Representative',
    phone: '651-324-0369',
    email: 'dgish@ecs-sales.com',
    states: ['IA', 'NE'],
    fill: '#2E7D52',
    fillActive: '#43B077',
    accent: 'oklch(62% 0.13 155)',
    accentDark: 'oklch(72% 0.10 155)',
  },
  {
    id: 'rep3',
    name: 'Team Member',
    title: 'Sales Representative',
    phone: '(952) 946-9510',
    email: 'info@ecs-sales.com',
    states: ['ND'],
    fill: '#A06020',
    fillActive: '#D4873A',
    accent: 'oklch(70% 0.14 55)',
    accentDark: 'oklch(78% 0.10 55)',
  },
  {
    id: 'rep4',
    name: 'Team Member',
    title: 'Sales Representative',
    phone: '(952) 946-9510',
    email: 'info@ecs-sales.com',
    states: ['SD'],
    fill: '#8B2020',
    fillActive: '#C04040',
    accent: 'oklch(65% 0.15 0)',
    accentDark: 'oklch(75% 0.10 0)',
  },
];

// Improved, more geographically accurate simplified paths
// ViewBox: "0 0 760 480"
const CONTEXT_STATES = [
  // Montana
  { id: 'MT', d: 'M 20 28 L 230 22 L 235 90 L 188 92 L 168 132 L 20 128 Z', lx: 120, ly: 76 },
  // Wyoming
  { id: 'WY', d: 'M 168 132 L 280 128 L 284 208 L 166 210 Z', lx: 224, ly: 168 },
  // Colorado
  { id: 'CO', d: 'M 166 210 L 284 208 L 288 284 L 168 282 Z', lx: 226, ly: 246 },
  // Kansas
  { id: 'KS', d: 'M 330 284 L 472 286 L 470 344 L 328 342 Z', lx: 400, ly: 314 },
  // Missouri
  { id: 'MO', d: 'M 472 232 L 560 234 L 564 296 L 548 318 L 524 332 L 470 344 L 472 286 Z', lx: 518, ly: 288 },
  // Illinois
  { id: 'IL', d: 'M 556 168 L 600 170 L 602 258 L 588 296 L 564 296 L 560 234 L 556 168 Z', lx: 578, ly: 228 },
  // Michigan (upper portion)
  { id: 'MI', d: 'M 598 82 L 660 78 L 666 148 L 618 162 L 600 170 L 598 82 Z', lx: 630, ly: 122 },
];

const TERRITORY_STATES = [
  // North Dakota
  { id: 'ND', d: 'M 230 22 L 390 18 L 394 98 L 232 100 Z', lx: 312, ly: 58 },
  // Minnesota — distinctive shape with NW corner notch
  { id: 'MN', d: 'M 390 18 L 486 20 L 488 48 L 524 52 L 528 108 L 516 132 L 508 158 L 504 188 L 492 188 L 488 198 L 476 202 L 464 194 L 394 192 L 394 98 Z', lx: 452, ly: 108 },
  // Wisconsin
  { id: 'WI', d: 'M 508 158 L 516 132 L 528 108 L 540 112 L 564 106 L 600 128 L 602 170 L 600 170 L 556 168 L 542 180 L 528 188 L 516 192 L 504 188 Z', lx: 556, ly: 152 },
  // South Dakota
  { id: 'SD', d: 'M 232 100 L 394 98 L 394 192 L 464 194 L 462 210 L 234 208 Z', lx: 314, ly: 152 },
  // Nebraska — with panhandle
  { id: 'NE', d: 'M 168 210 L 234 208 L 462 210 L 464 194 L 476 202 L 480 226 L 472 244 L 472 286 L 328 284 L 326 268 L 166 266 Z', lx: 318, ly: 248 },
  // Iowa
  { id: 'IA', d: 'M 394 192 L 464 194 L 476 202 L 492 200 L 504 188 L 516 192 L 528 188 L 542 180 L 556 168 L 560 234 L 560 240 L 472 232 L 472 244 L 480 226 L 476 202 L 464 194 Z', lx: 470, ly: 216 },
];

function getRepForState(stateId: string) {
  return REPS.find(r => r.states.includes(stateId));
}

function RepCard({ rep, active, onClick }: { rep: typeof REPS[0]; active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: '6px',
        border: `1px solid ${active ? rep.fill : 'oklch(88% 0.006 252)'}`,
        backgroundColor: active ? 'oklch(97% 0.003 252)' : 'oklch(99% 0.002 252)',
        padding: '1.25rem 1.5rem',
        cursor: 'pointer',
        transition: 'border-color 0.2s, background-color 0.2s, box-shadow 0.2s',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: active ? `0 0 20px ${rep.fill}30` : '0 1px 3px oklch(0% 0 0 / 0.05)',
      }}
    >
      <div style={{ paddingLeft: '0' }}>
        <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.625rem', flexWrap: 'wrap' }}>
          {rep.states.map(s => (
            <span key={s} style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: '0.625rem', letterSpacing: '0.1em',
              color: 'oklch(95% 0.01 252)',
              backgroundColor: rep.fill, padding: '0.125rem 0.5rem', borderRadius: '2px',
            }}>
              {s}
            </span>
          ))}
        </div>
        <h3 style={{
          fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
          fontSize: '1.05rem', letterSpacing: '-0.01em',
          color: active ? 'oklch(12% 0.02 252)' : 'oklch(20% 0.02 252)',
          marginBottom: '0.125rem', lineHeight: 1.1,
        }}>
          {rep.name}
        </h3>
        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.8rem',
          color: active ? rep.accentDark : 'oklch(50% 0.03 252)',
          marginBottom: '0.75rem', fontWeight: 500,
        }}>
          {rep.title}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <a href={`tel:${rep.phone.replace(/\D/g, '')}`} onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
              color: active ? 'oklch(25% 0.04 252)' : 'oklch(45% 0.025 252)', textDecoration: 'none' }}>
            {rep.phone}
          </a>
          <a href={`mailto:${rep.email}`} onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
              color: active ? 'oklch(25% 0.04 252)' : 'oklch(45% 0.025 252)', textDecoration: 'none' }}>
            {rep.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Territory() {
  const { ref, visible } = useFadeIn();
  const [activeRep, setActiveRep] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function handleStateClick(stateId: string) {
    const rep = getRepForState(stateId);
    if (!rep) return;
    const newActive = activeRep === rep.id ? null : rep.id;
    setActiveRep(newActive);
    if (newActive && cardRefs.current[rep.id]) {
      cardRefs.current[rep.id]!.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  return (
    <section
      id="territory"
      style={{
        backgroundColor: 'oklch(97% 0.003 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div ref={ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.65s ease, transform 0.65s ease',
        }}>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
            fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
            color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
          }}>
            Our Coverage Area
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 0.97,
              letterSpacing: '-0.02em', color: 'oklch(15% 0.022 252)',
            }}>
              THE UPPER<br />MIDWEST
            </h2>
            <p style={{
              fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem',
              color: 'oklch(40% 0.02 252)', maxWidth: '48ch', lineHeight: 1.6,
            }}>
              Click any highlighted state to see who covers that territory, or select a rep card directly.
            </p>
          </div>
        </div>

        {/* Map + Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(260px, 1fr)',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'start',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
        }}
        className="territory-grid"
        >
          {/* SVG Map */}
          <div style={{
            backgroundColor: 'oklch(10% 0.015 252)',
            borderRadius: '8px',
            padding: 'clamp(1rem, 2vw, 2rem)',
            border: '1px solid oklch(20% 0.06 252)',
            boxShadow: '0 4px 32px oklch(5% 0.01 252 / 0.5)',
          }}>
            <svg
              viewBox="0 0 700 380"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="ECS territory coverage map"
            >
              {/* Subtle grid background */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(18% 0.04 252)" strokeWidth="0.5"/>
                </pattern>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="700" height="380" fill="url(#grid)" rx="4"/>

              {/* Context states — muted */}
              {CONTEXT_STATES.map(s => (
                <g key={s.id}>
                  <path d={s.d} fill="oklch(20% 0.04 252)" stroke="oklch(28% 0.06 252)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <text x={s.lx} y={s.ly} textAnchor="middle" dominantBaseline="middle"
                    style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '8px', fill: 'oklch(38% 0.05 252)', userSelect: 'none' }}>
                    {s.id}
                  </text>
                </g>
              ))}

              {/* Territory states — vivid + interactive */}
              {TERRITORY_STATES.map(s => {
                const rep = getRepForState(s.id);
                const isRepActive = activeRep === rep?.id;
                const isHovered = hoveredState === s.id;
                const fillColor = rep
                  ? (isRepActive || isHovered ? rep.fillActive : rep.fill)
                  : 'oklch(33% 0.10 252)';
                return (
                  <g
                    key={s.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStateClick(s.id)}
                    onMouseEnter={() => setHoveredState(s.id)}
                    onMouseLeave={() => setHoveredState(null)}
                    filter={isRepActive ? 'url(#glow)' : undefined}
                  >
                    <path
                      d={s.d}
                      fill={fillColor}
                      stroke="oklch(10% 0.015 252)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      style={{ transition: 'fill 0.2s' }}
                    />
                    <text x={s.lx} y={s.ly - 5} textAnchor="middle" dominantBaseline="middle"
                      style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: '12px', fill: 'oklch(95% 0.01 252)', userSelect: 'none', pointerEvents: 'none' }}>
                      {s.id}
                    </text>
                    {rep && (
                      <text x={s.lx} y={s.ly + 10} textAnchor="middle" dominantBaseline="middle"
                        style={{ fontFamily: "'Chivo', sans-serif", fontSize: '8px', fill: 'oklch(85% 0.05 252)', userSelect: 'none', pointerEvents: 'none', opacity: 0.85 }}>
                        {rep.name === 'Team Member' ? 'TBD' : rep.name.split(' ')[0]}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Legend */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem',
              marginTop: '1.25rem', paddingTop: '1rem',
              borderTop: '1px solid oklch(20% 0.06 252)',
              justifyContent: 'center',
            }}>
              {REPS.map(rep => (
                <div
                  key={rep.id}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                  onClick={() => setActiveRep(activeRep === rep.id ? null : rep.id)}
                >
                  <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: rep.fill, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.6875rem', color: 'oklch(45% 0.025 252)' }}>
                    {rep.name === 'Team Member' ? 'TBD' : rep.name.split(' ')[0]} — {rep.states.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Rep cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(40% 0.04 252)', marginBottom: '0.5rem',
            }}>
              Territory Contacts
            </p>
            {REPS.map(rep => (
              <div key={rep.id} ref={el => { cardRefs.current[rep.id] = el; }}>
                <RepCard rep={rep} active={activeRep === rep.id} onClick={() => setActiveRep(activeRep === rep.id ? null : rep.id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
