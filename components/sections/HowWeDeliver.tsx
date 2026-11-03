'use client';

import { useEffect, useRef, useState } from 'react';

function useFadeIn(delay = 0) {
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
  return { ref, visible, delay };
}

const CAPABILITIES = [
  {
    label: 'Electronic Capabilities',
    body: 'Targeting critical components and custom systems for high-reliability OEM, Medical, and Military applications.',
  },
  {
    label: 'Electrical Capabilities',
    body: 'Driving specifications and commodity products through established industrial and commercial distributor networks.',
  },
];

export default function HowWeDeliver() {
  const left = useFadeIn(0);
  const right = useFadeIn(0.15);

  return (
    <section
      id="how-we-deliver"
      style={{
        backgroundColor: 'oklch(16% 0.07 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          alignItems: 'start',
        }}
      >
        {/* Left — heading + intro */}
        <div
          ref={left.ref}
          style={{
            opacity: left.visible ? 1 : 0,
            transform: left.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.65s ease ${left.delay}s, transform 0.65s ease ${left.delay}s`,
          }}
        >
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'oklch(54% 0.09 252)',
              marginBottom: '1.25rem',
            }}
          >
            How We Deliver
          </p>

          <h2
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.02em',
              color: 'oklch(96% 0.006 252)',
              marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
            }}
          >
            UNIFIED
            <br />
            <span style={{ color: 'oklch(68% 0.09 252)' }}>EXPERTISE</span>
          </h2>

          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.75,
              color: 'oklch(74% 0.04 252)',
              maxWidth: '52ch',
              marginBottom: '1.5rem',
            }}
          >
            Most agencies hand your line to a generalist or segment their staff into rigid silos.
            ECS takes a different approach: every member of our sales force is fluent and an expert
            in both the electrical and electronic portions of the principles we represent.
          </p>

          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.75,
              color: 'oklch(58% 0.04 252)',
              maxWidth: '52ch',
            }}
          >
            This unified expertise allows a single point of contact to seamlessly navigate all
            technical aspects of your line, leveraging relationships with engineers, specifiers,
            and distributors alike.
          </p>
        </div>

        {/* Right — capability cards */}
        <div
          ref={right.ref}
          style={{
            opacity: right.visible ? 1 : 0,
            transform: right.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.65s ease ${right.delay}s, transform 0.65s ease ${right.delay}s`,
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            backgroundColor: 'oklch(28% 0.09 252)',
            border: '1px solid oklch(28% 0.09 252)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.label}
              style={{
                backgroundColor: 'oklch(20% 0.085 252)',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                opacity: right.visible ? 1 : 0,
                transform: right.visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.55s ease ${0.2 + i * 0.1}s, transform 0.55s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'oklch(68% 0.09 252)',
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 800,
                    fontSize: '1rem',
                    letterSpacing: '0.02em',
                    color: 'oklch(93% 0.008 252)',
                    margin: 0,
                  }}
                >
                  {cap.label}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Chivo', sans-serif",
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  color: 'oklch(62% 0.045 252)',
                  margin: 0,
                  paddingLeft: '1.5rem',
                }}
              >
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
