'use client';

import { useEffect, useRef, useState } from 'react';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/*
 * Simplified but geographically accurate SVG paths for Upper Midwest states.
 * ViewBox is roughly 700×420 covering the relevant portion of the US.
 * Each path is a simplified polygon, not census-precise, but recognisably shaped.
 */

// Non-territory states shown as context (light gray)
const CONTEXT_STATES: { id: string; d: string; label: string; lx: number; ly: number }[] = [
  {
    id: 'MT',
    d: 'M 40 20 L 240 20 L 240 80 L 180 82 L 160 120 L 40 118 Z',
    label: 'MT', lx: 130, ly: 70,
  },
  {
    id: 'WY',
    d: 'M 160 120 L 260 118 L 262 185 L 158 185 Z',
    label: 'WY', lx: 210, ly: 152,
  },
  {
    id: 'CO',
    d: 'M 158 185 L 262 185 L 264 255 L 156 253 Z',
    label: 'CO', lx: 210, ly: 220,
  },
  {
    id: 'KS',
    d: 'M 310 255 L 440 257 L 438 305 L 308 302 Z',
    label: 'KS', lx: 373, ly: 278,
  },
  {
    id: 'MO',
    d: 'M 440 215 L 520 217 L 524 260 L 510 285 L 490 295 L 438 305 L 440 257 Z',
    label: 'MO', lx: 480, ly: 260,
  },
  {
    id: 'IL',
    d: 'M 520 155 L 560 157 L 562 240 L 548 280 L 524 260 L 520 217 Z',
    label: 'IL', lx: 541, ly: 210,
  },
  {
    id: 'MI',
    d: 'M 560 75 L 620 72 L 625 130 L 580 145 L 562 155 L 560 157 L 560 75 Z',
    label: 'MI', lx: 590, ly: 110,
  },
];

// ECS territory states (filled with brand green)
const TERRITORY_STATES: { id: string; d: string; label: string; name: string; lx: number; ly: number }[] = [
  {
    id: 'ND',
    d: 'M 240 20 L 370 18 L 372 90 L 240 88 Z',
    label: 'ND', name: 'North Dakota', lx: 305, ly: 54,
  },
  {
    id: 'MN',
    d: 'M 370 18 L 470 20 L 475 50 L 510 55 L 512 100 L 500 120 L 490 145 L 488 165 L 475 165 L 470 175 L 460 178 L 450 170 L 372 168 L 372 90 Z',
    label: 'MN', name: 'Minnesota', lx: 430, ly: 95,
  },
  {
    id: 'WI',
    d: 'M 490 145 L 500 120 L 512 100 L 520 105 L 540 100 L 560 120 L 562 155 L 560 157 L 520 155 L 510 165 L 498 172 L 488 165 L 490 145 Z',
    label: 'WI', name: 'Wisconsin', lx: 528, ly: 135,
  },
  {
    id: 'SD',
    d: 'M 240 88 L 372 90 L 372 168 L 238 165 Z',
    label: 'SD', name: 'South Dakota', lx: 305, ly: 128,
  },
  {
    id: 'NE',
    d: 'M 238 165 L 372 168 L 370 240 L 310 240 L 308 255 L 236 253 Z',
    label: 'NE', name: 'Nebraska', lx: 300, ly: 207,
  },
  {
    id: 'IA',
    d: 'M 372 168 L 450 170 L 460 178 L 475 175 L 480 200 L 475 215 L 460 220 L 440 215 L 440 240 L 370 240 Z',
    label: 'IA', name: 'Iowa', lx: 420, ly: 202,
  },
];

const TERRITORY_LIST = [
  { abbr: 'MN', name: 'Minnesota' },
  { abbr: 'WI', name: 'Wisconsin' },
  { abbr: 'IA', name: 'Iowa' },
  { abbr: 'ND', name: 'North Dakota' },
  { abbr: 'SD', name: 'South Dakota' },
  { abbr: 'NE', name: 'Nebraska' },
];

export default function Territory() {
  const { ref, visible } = useFadeIn();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="territory"
      style={{
        backgroundColor: 'oklch(95% 0.010 140)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          alignItems: 'center',
        }}
      >
        {/* Left: Text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'oklch(47% 0.112 140)',
              marginBottom: '1rem',
            }}
          >
            Our Territory
          </p>

          <h2
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.02em',
              color: 'oklch(15% 0.022 140)',
              marginBottom: '1.5rem',
            }}
          >
            THE UPPER
            <br />
            MIDWEST
          </h2>

          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'oklch(44% 0.038 140)',
              maxWidth: '52ch',
              marginBottom: '2.5rem',
            }}
          >
            ECS provides dedicated coverage across six states. Our team lives and
            works in this territory, we know the distributors, the contractors,
            and the specifying engineers by name.
          </p>

          {/* State list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {TERRITORY_LIST.map((state, i) => (
              <div
                key={state.abbr}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 0',
                  borderTop: i === 0 ? '1px solid oklch(85% 0.014 140)' : 'none',
                  borderBottom: '1px solid oklch(85% 0.014 140)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                  transition: `opacity 0.45s ease ${0.1 + i * 0.07}s, transform 0.45s ease ${0.1 + i * 0.07}s`,
                  cursor: 'default',
                }}
                onMouseEnter={() => setHovered(state.abbr)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: hovered === state.abbr ? 'oklch(47% 0.112 140)' : 'oklch(39% 0.115 140)',
                    width: '2.5rem',
                    flexShrink: 0,
                    transition: 'color 0.15s',
                  }}
                >
                  {state.abbr}
                </span>
                <span
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.9375rem',
                    color: 'oklch(44% 0.038 140)',
                  }}
                >
                  {state.name}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: hovered === state.abbr ? 'oklch(47% 0.112 140)' : 'oklch(85% 0.014 140)',
                    transition: 'background-color 0.15s',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: SVG Map */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(32px)',
            transition: 'opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s',
          }}
        >
          <div
            style={{
              backgroundColor: 'oklch(98% 0.005 140)',
              borderRadius: '4px',
              padding: '2rem',
              border: '1px solid oklch(88% 0.012 140)',
            }}
          >
            <svg
              viewBox="30 10 610 310"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="Map of ECS territory, Upper Midwest coverage"
            >
              {/* Context states */}
              {CONTEXT_STATES.map((s) => (
                <g key={s.id}>
                  <path
                    d={s.d}
                    fill="oklch(92% 0.012 140)"
                    stroke="oklch(98% 0.005 140)"
                    strokeWidth="2"
                  />
                  <text
                    x={s.lx}
                    y={s.ly}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 700,
                      fontSize: '10px',
                      fill: 'oklch(70% 0.025 140)',
                      userSelect: 'none',
                    }}
                  >
                    {s.label}
                  </text>
                </g>
              ))}

              {/* Territory states */}
              {TERRITORY_STATES.map((s) => (
                <g key={s.id}>
                  <path
                    d={s.d}
                    fill={hovered === s.id ? 'oklch(40% 0.115 140)' : 'oklch(33% 0.118 140)'}
                    stroke="oklch(98% 0.005 140)"
                    strokeWidth="2"
                    style={{ transition: 'fill 0.2s', cursor: 'default' }}
                    onMouseEnter={() => setHovered(s.id)}
                    onMouseLeave={() => setHovered(null)}
                  />
                  <text
                    x={s.lx}
                    y={s.ly - 6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 900,
                      fontSize: '11px',
                      fill: 'oklch(84% 0.05 140)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {s.label}
                  </text>
                  <text
                    x={s.lx}
                    y={s.ly + 8}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily: "'Chivo', sans-serif",
                      fontWeight: 400,
                      fontSize: '7px',
                      fill: 'oklch(62% 0.1 140)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {s.name}
                  </text>
                </g>
              ))}
            </svg>

            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: '0.75rem',
                color: 'oklch(60% 0.022 140)',
                textAlign: 'center',
                marginTop: '1rem',
                fontStyle: 'italic',
              }}
            >
              Tap or hover to highlight coverage areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
