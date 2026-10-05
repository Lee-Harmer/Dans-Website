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
    id: 'dani',
    name: 'Dani Gish',
    title: 'Account Representative',
    phone: '651.324.0369',
    email: 'dgish@ecs-sales.com',
    photo: '/team-2.jpg',
    states: ['ND'],
    coverage: 'N. Minnesota & North Dakota',
    fill: '#2A7D4F',
    fillActive: '#38A869',
    accentCss: 'oklch(46% 0.13 155)',
  },
  {
    id: 'bryon',
    name: 'Bryon George',
    title: 'Account Representative',
    phone: '507.810.0173',
    email: 'bgeorge@ecs-sales.com',
    photo: '/team-3.jpg',
    states: ['MN', 'WI'],
    coverage: 'S. Minnesota, Wisconsin & Metro',
    fill: '#2B5EA7',
    fillActive: '#3D78D4',
    accentCss: 'oklch(46% 0.14 245)',
  },
  {
    id: 'drew',
    name: 'Drew Benko',
    title: 'Account Representative',
    phone: '612.600.9464',
    email: 'dbenko@ecs-sales.com',
    photo: '/team-1.jpg',
    states: ['SD'],
    coverage: 'Metro, South Dakota & Fargo',
    fill: '#8A3E1C',
    fillActive: '#B5532A',
    accentCss: 'oklch(46% 0.14 40)',
  },
];

const HQ_TEAM = [
  {
    id: 'david',
    name: 'David Gartner',
    title: 'President',
    phone: '612.991.9900',
    email: 'dgartner@ecs-sales.com',
    photo: '/team-4.jpg',
    note: 'All Territories',
  },
  {
    id: 'cindy',
    name: 'Cindy Amundsen',
    title: 'Inside Sales',
    phone: '651.325.8594',
    email: null as string | null,
    photo: '/team-cindy.png',
    note: 'HQ Support',
  },
];

const CONTEXT_STATES = [
  { id: 'MT', d: 'M 20 28 L 230 22 L 235 90 L 188 92 L 168 132 L 20 128 Z', lx: 120, ly: 76 },
  { id: 'WY', d: 'M 168 132 L 280 128 L 284 208 L 166 210 Z', lx: 224, ly: 168 },
  { id: 'CO', d: 'M 166 210 L 284 208 L 288 284 L 168 282 Z', lx: 226, ly: 246 },
  { id: 'KS', d: 'M 330 284 L 472 286 L 470 344 L 328 342 Z', lx: 400, ly: 314 },
  { id: 'MO', d: 'M 472 232 L 560 234 L 564 296 L 548 318 L 524 332 L 470 344 L 472 286 Z', lx: 518, ly: 288 },
  { id: 'IL', d: 'M 556 168 L 600 170 L 602 258 L 588 296 L 564 296 L 560 234 L 556 168 Z', lx: 578, ly: 228 },
  { id: 'MI', d: 'M 598 82 L 660 78 L 666 148 L 618 162 L 600 170 L 598 82 Z', lx: 630, ly: 122 },
];

const TERRITORY_STATES = [
  { id: 'ND', d: 'M 230 22 L 390 18 L 394 98 L 232 100 Z', lx: 312, ly: 58 },
  { id: 'MN', d: 'M 390 18 L 486 20 L 488 48 L 524 52 L 528 108 L 516 132 L 508 158 L 504 188 L 492 188 L 488 198 L 476 202 L 464 194 L 394 192 L 394 98 Z', lx: 444, ly: 108 },
  { id: 'WI', d: 'M 508 158 L 516 132 L 528 108 L 540 112 L 564 106 L 600 128 L 602 170 L 600 170 L 556 168 L 542 180 L 528 188 L 516 192 L 504 188 Z', lx: 556, ly: 148 },
  { id: 'SD', d: 'M 232 100 L 394 98 L 394 192 L 464 194 L 462 210 L 234 208 Z', lx: 314, ly: 152 },
  { id: 'NE', d: 'M 168 210 L 234 208 L 462 210 L 464 194 L 476 202 L 480 226 L 472 244 L 472 286 L 328 284 L 326 268 L 166 266 Z', lx: 322, ly: 248 },
  { id: 'IA', d: 'M 394 192 L 464 194 L 476 202 L 492 200 L 504 188 L 516 192 L 528 188 L 542 180 L 556 168 L 560 234 L 560 240 L 472 232 L 472 244 L 480 226 L 476 202 L 464 194 Z', lx: 510, ly: 210 },
];

// IA and NE are ECS service territory but don't have a dedicated field rep listed
const ECS_ONLY_STATES = new Set(['IA', 'NE']);

function getRepForState(stateId: string) {
  if (ECS_ONLY_STATES.has(stateId)) return null;
  return REPS.find(r => r.states.includes(stateId));
}

function RepCard({ rep, active, onClick }: { rep: typeof REPS[0]; active: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.875rem',
        padding: '1rem 1.125rem 1rem 1.375rem',
        borderRadius: '8px',
        border: `1.5px solid ${active ? rep.fill : 'oklch(88% 0.010 252)'}`,
        backgroundColor: active ? 'oklch(99.5% 0.002 252)' : 'oklch(99.5% 0.002 252)',
        cursor: 'pointer',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: active
          ? `0 0 0 3px ${rep.fill}28, 0 4px 20px ${rep.fill}18`
          : '0 1px 4px oklch(0% 0 0 / 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Colour accent strip */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
        backgroundColor: rep.fill,
      }} />

      {/* Photo */}
      <div style={{
        flexShrink: 0,
        width: '56px', height: '56px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: `2px solid ${active ? rep.fill : 'oklch(86% 0.012 252)'}`,
        transition: 'border-color 0.2s',
      }}>
        <img
          src={rep.photo}
          alt={rep.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
          {rep.states.map(s => (
            <span key={s} style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: '0.5625rem', letterSpacing: '0.1em',
              color: '#fff',
              backgroundColor: rep.fill, padding: '0.1rem 0.45rem', borderRadius: '2px',
            }}>
              {s}
            </span>
          ))}
        </div>
        <h3 style={{
          fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
          fontSize: '1.0rem', letterSpacing: '-0.01em',
          color: 'oklch(15% 0.022 252)',
          marginBottom: '0.1rem', lineHeight: 1.1,
        }}>
          {rep.name}
        </h3>
        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', fontWeight: 500,
          color: rep.accentCss, marginBottom: '0.5rem', lineHeight: 1.3,
        }}>
          {rep.coverage}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
          <a
            href={`tel:${rep.phone.replace(/\D/g, '')}`}
            onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', color: 'oklch(42% 0.025 252)', textDecoration: 'none' }}
          >
            {rep.phone}
          </a>
          <a
            href={`mailto:${rep.email}`}
            onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', color: 'oklch(42% 0.025 252)', textDecoration: 'none' }}
          >
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

  function handleStateClick(stateId: string) {
    const rep = getRepForState(stateId);
    if (!rep) return;
    setActiveRep(activeRep === rep.id ? null : rep.id);
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

        {/* Map + Field Rep Cards */}
        <div
          className="territory-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 2fr) minmax(260px, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
            marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
          }}
        >
          {/* SVG Map */}
          <div style={{
            backgroundColor: 'oklch(99.5% 0.002 252)',
            borderRadius: '10px',
            padding: 'clamp(1rem, 2vw, 1.75rem)',
            border: '1px solid oklch(88% 0.010 252)',
            boxShadow: '0 2px 20px oklch(60% 0.04 252 / 0.08)',
          }}>
            <svg
              viewBox="0 0 700 380"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="ECS territory coverage map showing the Upper Midwest"
            >
              <defs>
                <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="oklch(99.5% 0.002 252)" />
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(93% 0.006 252)" strokeWidth="0.5" />
                </pattern>
                <filter id="stateglow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <rect width="700" height="380" fill="url(#mapgrid)" rx="6" />

              {/* Context states — background grey */}
              {CONTEXT_STATES.map(s => (
                <g key={s.id}>
                  <path d={s.d} fill="oklch(91% 0.008 252)" stroke="oklch(83% 0.010 252)" strokeWidth="1" strokeLinejoin="round" />
                  <text x={s.lx} y={s.ly} textAnchor="middle" dominantBaseline="middle"
                    style={{ fontFamily: 'system-ui, sans-serif', fontSize: '7px', fontWeight: 600, fill: 'oklch(64% 0.016 252)', userSelect: 'none' }}>
                    {s.id}
                  </text>
                </g>
              ))}

              {/* Territory states — coloured + interactive */}
              {TERRITORY_STATES.map(s => {
                const rep = getRepForState(s.id);
                const isEcsOnly = ECS_ONLY_STATES.has(s.id);
                const isRepActive = activeRep === rep?.id;
                const isHovered = hoveredState === s.id;
                const fillColor = rep
                  ? (isRepActive || isHovered ? rep.fillActive : rep.fill)
                  : 'oklch(80% 0.016 252)'; // IA, NE — ECS territory, no dedicated rep
                return (
                  <g
                    key={s.id}
                    style={{ cursor: rep ? 'pointer' : 'default' }}
                    onClick={() => !isEcsOnly && handleStateClick(s.id)}
                    onMouseEnter={() => !isEcsOnly && setHoveredState(s.id)}
                    onMouseLeave={() => setHoveredState(null)}
                    filter={isRepActive ? 'url(#stateglow)' : undefined}
                  >
                    <path
                      d={s.d}
                      fill={fillColor}
                      stroke="oklch(99.5% 0.002 252)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      style={{ transition: 'fill 0.18s ease' }}
                    />
                    {/* State abbreviation */}
                    <text
                      x={s.lx} y={rep ? s.ly - 7 : s.ly}
                      textAnchor="middle" dominantBaseline="middle"
                      style={{
                        fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: 800,
                        fill: rep ? 'rgba(255,255,255,0.96)' : 'oklch(50% 0.018 252)',
                        userSelect: 'none', pointerEvents: 'none',
                      }}
                    >
                      {s.id}
                    </text>
                    {/* Rep first name on state */}
                    {rep && (
                      <text
                        x={s.lx} y={s.ly + 7}
                        textAnchor="middle" dominantBaseline="middle"
                        style={{
                          fontFamily: 'system-ui, sans-serif', fontSize: '8px', fontWeight: 500,
                          fill: 'rgba(255,255,255,0.82)',
                          userSelect: 'none', pointerEvents: 'none',
                        }}
                      >
                        {rep.name.split(' ')[0]}
                      </text>
                    )}
                  </g>
                );
              })}

            </svg>

            {/* Legend */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem',
              marginTop: '1rem', paddingTop: '0.875rem',
              borderTop: '1px solid oklch(90% 0.008 252)',
            }}>
              {REPS.map(rep => (
                <button
                  key={rep.id}
                  onClick={() => setActiveRep(activeRep === rep.id ? null : rep.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  }}
                >
                  <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: rep.fill, flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Chivo', sans-serif", fontSize: '0.6875rem',
                    color: activeRep === rep.id ? 'oklch(18% 0.022 252)' : 'oklch(44% 0.025 252)',
                    fontWeight: activeRep === rep.id ? 600 : 400,
                  }}>
                    {rep.name.split(' ')[0]}: {rep.states.join(', ')}
                  </span>
                </button>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: 'oklch(80% 0.016 252)', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.6875rem', color: 'oklch(54% 0.020 252)' }}>
                  IA, NE: ECS Coverage
                </span>
              </div>
            </div>
          </div>

          {/* Field Rep Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(40% 0.04 252)', marginBottom: '0.375rem',
            }}>
              Field Representatives
            </p>
            {REPS.map(rep => (
              <RepCard
                key={rep.id}
                rep={rep}
                active={activeRep === rep.id}
                onClick={() => setActiveRep(activeRep === rep.id ? null : rep.id)}
              />
            ))}
          </div>
        </div>

        {/* Leadership & Inside Sales strip */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s',
          }}
        >
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
            fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
            color: 'oklch(40% 0.04 252)', marginBottom: '0.625rem',
          }}>
            Leadership &amp; Inside Sales
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0.625rem',
          }}>
            {HQ_TEAM.map(member => (
              <div
                key={member.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  border: '1.5px solid oklch(85% 0.012 252)',
                  backgroundColor: 'oklch(99.5% 0.002 252)',
                  boxShadow: '0 1px 4px oklch(0% 0 0 / 0.04)',
                }}
              >
                <div style={{
                  flexShrink: 0, width: '56px', height: '56px',
                  borderRadius: '50%', overflow: 'hidden',
                  border: '2px solid oklch(86% 0.012 252)',
                }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
                      fontSize: '1rem', letterSpacing: '-0.01em',
                      color: 'oklch(15% 0.022 252)', lineHeight: 1.1,
                    }}>
                      {member.name}
                    </h3>
                    <span style={{
                      fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
                      fontSize: '0.5625rem', letterSpacing: '0.09em', textTransform: 'uppercase',
                      color: 'oklch(40% 0.075 252)',
                      backgroundColor: 'oklch(91% 0.020 252)',
                      padding: '0.125rem 0.45rem', borderRadius: '3px',
                    }}>
                      {member.note}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', fontWeight: 500,
                    color: 'oklch(47% 0.075 252)', marginBottom: '0.375rem',
                  }}>
                    {member.title}
                  </p>
                  <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                    <a
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', color: 'oklch(42% 0.025 252)', textDecoration: 'none' }}
                    >
                      {member.phone}
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.75rem', color: 'oklch(42% 0.025 252)', textDecoration: 'none' }}
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
