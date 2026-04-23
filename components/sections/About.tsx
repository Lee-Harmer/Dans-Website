'use client';

import { useEffect, useRef, useState } from 'react';

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible, delay };
}

const TIMELINE = [
  { year: '1967', event: 'Founded to serve the Electrical C&I and Electromechanical OEM markets.' },
  { year: '1980s', event: 'Expanded into Electronics as the industry gained momentum.' },
  { year: '1988', event: 'Sales force divided into Electronic and Electrical groups, focused expertise for each market.' },
  { year: '1992', event: 'Launched Networking group to capitalize on the emerging structured cabling industry.' },
  { year: 'Today', event: 'Recognized leader in all three groups: Electronic, Electrical, and Networking.' },
];

export default function About() {
  const left = useFadeIn(0);
  const right = useFadeIn(0.15);
  const timeline = useFadeIn(0.1);

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'oklch(98% 0.005 140)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        {/* Top grid: quote + content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 7rem)',
            alignItems: 'start',
            marginBottom: 'clamp(4rem, 8vw, 7rem)',
          }}
        >
          {/* Left */}
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
                color: 'oklch(47% 0.112 140)',
                marginBottom: '1.5rem',
              }}
            >
              About ECS · Est. 1967
            </p>

            <blockquote
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.018em',
                color: 'oklch(27% 0.112 140)',
                margin: 0,
                marginBottom: '1.75rem',
              }}
            >
              "To satisfy customers beyond their expectations, earning their respect, trust, and ultimately their business."
            </blockquote>

            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                color: 'oklch(47% 0.112 140)',
                textTransform: 'uppercase',
              }}
            >
              Our Mission
            </p>

            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: 'oklch(47% 0.112 140)',
                marginTop: '1.25rem',
                marginBottom: '1.5rem',
              }}
            />

            {/* Association badges */}
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
              {['ERA', 'NEMRA Member', 'BICSI'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'oklch(47% 0.112 140)',
                    border: '1px solid oklch(85% 0.014 140)',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '2px',
                    backgroundColor: 'oklch(97% 0.012 140)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            ref={right.ref}
            style={{
              opacity: right.visible ? 1 : 0,
              transform: right.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.65s ease ${right.delay}s, transform 0.65s ease ${right.delay}s`,
            }}
          >
            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.75,
                color: 'oklch(15% 0.022 140)',
                marginBottom: '1.5rem',
                maxWidth: '62ch',
              }}
            >
              Founded in 1967, ECS has spent over five decades building an unmatched
              presence in the Upper Midwest for electronic and electrical manufacturers.
              What began as a focus on Electrical C&amp;I and Electromechanical OEM evolved
              strategically, as markets grew, ECS grew with them.
            </p>

            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.75,
                color: 'oklch(44% 0.038 140)',
                marginBottom: '1.5rem',
                maxWidth: '62ch',
              }}
            >
              In 1988, ECS made a pivotal decision: divide the sales force into two specialized
              groups, Electronic and Electrical, to achieve the focus each market demands. That
              discipline paid off. In 1992, ECS launched a dedicated Networking group to capture
              the emerging structured cabling industry.
            </p>

            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.75,
                color: 'oklch(44% 0.038 140)',
                maxWidth: '62ch',
              }}
            >
              Today, ECS is a recognized leader in all three groups, and offers our principals
              a unique advantage: <strong style={{ color: 'oklch(27% 0.112 140)', fontWeight: 600 }}>multiple specialized sales channels within a single trade area</strong>.
              Something the typical single-market rep simply cannot provide.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timeline.ref}
          style={{
            opacity: timeline.visible ? 1 : 0,
            transform: timeline.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.65s ease ${timeline.delay}s, transform 0.65s ease ${timeline.delay}s`,
            borderTop: '1px solid oklch(85% 0.014 140)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'oklch(60% 0.022 140)',
              marginBottom: '2rem',
            }}
          >
            Our History
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0px',
            }}
          >
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                style={{
                  padding: '1.25rem 1.5rem 1.25rem 0',
                  paddingRight: i < TIMELINE.length - 1 ? '1.5rem' : '0',
                  marginRight: i < TIMELINE.length - 1 ? '1.5rem' : '0',
                  borderRight: i < TIMELINE.length - 1 ? '1px solid oklch(85% 0.014 140)' : 'none',
                  opacity: timeline.visible ? 1 : 0,
                  transform: timeline.visible ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 900,
                    fontSize: '1.75rem',
                    color: i === TIMELINE.length - 1 ? 'oklch(47% 0.112 140)' : 'oklch(27% 0.112 140)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.year}
                </p>
                <p
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    color: 'oklch(44% 0.038 140)',
                  }}
                >
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image strip */}
        <div
          className="about-images"
          style={{
            marginTop: 'clamp(4rem, 7vw, 7rem)',
            height: 'clamp(180px, 24vw, 340px)',
          }}
        >
          {[
            { src: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1200&q=75', alt: 'Electrical panel installation' },
            { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75', alt: 'Industrial facility' },
            { src: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=600&q=75', alt: 'Circuit board technology' },
          ].map((img, i) => (
            <div
              key={i}
              style={{
                overflow: 'hidden',
                borderRadius: '3px',
                backgroundColor: 'oklch(92% 0.025 140)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
