'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '57+', label: 'Years in Business', sub: 'Founded 1967' },
  { value: '3',   label: 'Specialized Divisions', sub: 'Electronic · Electrical · Networking' },
  { value: '20+', label: 'Premier Manufacturers', sub: 'World-class partners' },
  { value: '5',   label: 'Key End Markets', sub: 'Medical · Military · Industrial · OEM · Commercial' },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'oklch(15% 0.022 140)',
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div
        className="stats-grid"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              borderRight: i < STATS.length - 1 ? '1px solid oklch(22% 0.095 140)' : 'none',
              position: 'relative',
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 'clamp(1.25rem, 3vw, 2rem)',
                width: '28px',
                height: '2px',
                backgroundColor: 'oklch(47% 0.112 140)',
                transformOrigin: 'left',
                transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.12}s`,
              }}
            />

            <span
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'oklch(72% 0.085 140)',
                marginBottom: '0.5rem',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.9375rem',
                color: 'oklch(84% 0.05 140)',
                marginBottom: '0.375rem',
                lineHeight: 1.2,
              }}
            >
              {stat.label}
            </span>
            <span
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontWeight: 400,
                fontSize: '0.75rem',
                color: 'oklch(39% 0.115 140)',
                lineHeight: 1.4,
              }}
            >
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
