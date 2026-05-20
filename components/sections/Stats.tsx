'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '57+', label: 'Years in Business',       sub: 'Founded 1967' },
  { value: '3',   label: 'Specialised Divisions',   sub: 'Electronic · Electrical · Networking' },
  { value: '20+', label: 'Premier Manufacturers',   sub: 'World-class partners' },
  { value: '5',   label: 'Key End Markets',          sub: 'Medical · Military · Industrial · OEM · Commercial' },
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
    <section ref={ref} style={{
      backgroundColor: 'oklch(10% 0.02 252)',
      padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
    }}>
      <div style={{
        maxWidth: '1320px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{
            display: 'flex', flexDirection: 'column', gap: '0',
            padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
            borderRight: i < STATS.length - 1 ? '1px solid oklch(18% 0.05 252)' : 'none',
          }}>
            <span style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1, letterSpacing: '-0.03em',
              color: 'oklch(72% 0.085 252)',
              marginBottom: '0.5rem',
            }}>
              {stat.value}
            </span>
            <span style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700, fontSize: '0.9375rem',
              color: 'oklch(80% 0.018 252)',
              marginBottom: '0.375rem', lineHeight: 1.2,
            }}>
              {stat.label}
            </span>
            <span style={{
              fontFamily: "'Chivo', sans-serif",
              fontWeight: 400, fontSize: '0.75rem',
              color: 'oklch(38% 0.06 252)', lineHeight: 1.4,
            }}>
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
