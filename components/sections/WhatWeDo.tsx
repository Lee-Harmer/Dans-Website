'use client';

import { useEffect, useRef, useState } from 'react';

const DIVISIONS = [
  {
    num: '01',
    id: 'electronic',
    name: 'ECS Electronic Group',
    tagline: 'Design solutions for high-stakes markets',
    markets: ['Medical', 'Industrial', 'Military', 'Off-Road Vehicle'],
    description: 'The Electronic Group provides design solutions and support for the most demanding applications. Our team is fluent in the technical language of the engineers and procurement professionals we serve, and so are our manufacturers.',
    whyItMatters: 'When your product needs to perform in a hospital OR or a military vehicle, you need a rep who understands the certification requirements, the qualification process, and the supply chain. ECS Electronic has been doing this for decades.',
    accentColor: 'oklch(47% 0.112 252)',
  },
  {
    num: '02',
    id: 'electrical',
    name: 'ECS Electrical Group',
    tagline: 'Powering the built environment',
    markets: ['Consulting Engineers', 'Integrators', 'Industrial OEM', 'Contractors', 'End Users'],
    description: 'The Electrical Group focuses on the full commercial and industrial supply chain, from the consulting engineer who specs a product, to the contractor who installs it, to the end user who depends on it.',
    whyItMatters: 'Electrical products live and die on relationships. Distributors, contractors, and specifying engineers all need different conversations. ECS Electrical has the contacts and the credibility to navigate every step of the sales cycle.',
    accentColor: 'oklch(39% 0.115 252)',
  },
  {
    num: '03',
    id: 'networking',
    name: 'ECS Networking Group',
    tagline: 'Connected infrastructure expertise',
    markets: ['Data Centers', 'Commercial Buildings', 'Enterprise', 'Infrastructure'],
    description: 'Launched in 1992 when structured cabling was in its infancy, the Networking Group recognized a transforming market before most. Today we serve the full spectrum of connected infrastructure with the same technical depth as our other divisions.',
    whyItMatters: 'ECS was building networking relationships when Cat5 was brand new. That institutional knowledge, of the products, the certifications, and the customer base, is not something you can replicate in a year.',
    accentColor: 'oklch(33% 0.118 252)',
  },
];

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function DivisionBlock({ div, index }: { div: typeof DIVISIONS[0], index: number }) {
  const { ref, visible } = useFadeIn();
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        borderTop: `3px solid ${div.accentColor}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          alignItems: 'start',
        }}
      >
        {/* Number */}
        <div
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(4rem, 9vw, 8rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'oklch(82% 0.02 252)',
            userSelect: 'none',
            width: 'clamp(70px, 10vw, 130px)',
            paddingTop: '0.05em',
          }}
        >
          {div.num}
        </div>

        {/* Content */}
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <h3
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 2.8vw, 2.375rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                color: 'oklch(15% 0.022 252)',
              }}
            >
              {div.name}
            </h3>
          </div>

          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.8125rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: div.accentColor,
              marginBottom: '1.25rem',
            }}
          >
            {div.tagline}
          </p>

          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'oklch(44% 0.038 252)',
              maxWidth: '60ch',
              marginBottom: '1.5rem',
            }}
          >
            {div.description}
          </p>

          {/* Markets served */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.625rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'oklch(60% 0.022 252)',
                alignSelf: 'center',
                marginRight: '0.25rem',
              }}
            >
              Serves:
            </span>
            {div.markets.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: "'Chivo', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'oklch(27% 0.112 252)',
                  backgroundColor: 'oklch(93% 0.025 252)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '2px',
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Expandable "why it matters" */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: div.accentColor,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'opacity 0.15s',
            }}
          >
            {open ? 'Show Less' : 'Why This Matters'}
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
            aria-hidden
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </button>

          {open && (
            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontStyle: 'italic',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'oklch(44% 0.038 252)',
                maxWidth: '58ch',
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid oklch(91% 0.009 252)',
              }}
            >
              {div.whyItMatters}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn();

  return (
    <section
      id="what-we-do"
      style={{
        backgroundColor: 'oklch(98% 0.005 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '0.5rem',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.6875rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: 'oklch(47% 0.112 252)',
                marginBottom: '1rem',
              }}
            >
              Three Divisions · One Company
            </p>
            <h2
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 0.97,
                letterSpacing: '-0.02em',
                color: 'oklch(15% 0.022 252)',
              }}
            >
              SPECIALIZED
              <br />
              FOR YOUR MARKET
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.7,
                color: 'oklch(44% 0.038 252)',
                maxWidth: '50ch',
              }}
            >
              Most reps cover one market and call it done. ECS built three separate
              specialized groups, each with its own focus, relationships, and expertise.
              Our principals get the coverage of a dedicated team. Not a generalist.
            </p>
          </div>
        </div>

        {/* Division blocks */}
        {DIVISIONS.map((div, i) => (
          <DivisionBlock key={div.id} div={div} index={i} />
        ))}
      </div>
    </section>
  );
}
