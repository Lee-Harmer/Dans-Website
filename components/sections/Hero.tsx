'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance after a single frame so CSS transition fires
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        backgroundColor: 'oklch(27% 0.112 140)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* "EST. 1967", large typographic background element, uniquely theirs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          right: '-2%',
          transform: 'translateY(-54%)',
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(10rem, 28vw, 32rem)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          color: 'oklch(33% 0.118 140)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
        }}
      >
        1967
      </div>

      {/* Subtle radial gradient for depth */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 20% 60%, oklch(22% 0.1 140) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, oklch(27% 0.112 140) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1320px',
          margin: '0 auto',
          padding: 'clamp(6rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 6vw, 6rem)',
          width: '100%',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700,
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'oklch(62% 0.1 140)',
            marginBottom: '1.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          Electronic &amp; Electrical Manufacturers Representative · Since 1967
        </p>

        {/* Animated rule */}
        <div
          aria-hidden
          style={{
            width: '64px',
            height: '2px',
            backgroundColor: 'oklch(47% 0.112 140)',
            marginBottom: '1.75rem',
            transformOrigin: 'left',
            transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        />

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 10vw, 10.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            color: 'oklch(99.5% 0.003 140)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '16ch',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          INDUSTRY
          <br />
          <span style={{ color: 'oklch(72% 0.085 140)' }}>LEADING</span>
          <br />
          SOLUTIONS
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
            lineHeight: 1.7,
            color: 'oklch(62% 0.1 140)',
            maxWidth: '52ch',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          For over 57 years, Electric Component Sales has represented premier manufacturers
          across the Electronic, Electrical, and Networking markets, serving Medical,
          Military, Industrial, and Commercial customers throughout the Upper Midwest.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
          }}
        >
          <a
            href="/manufacturers"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(22% 0.095 140)',
              backgroundColor: 'oklch(72% 0.085 140)',
              padding: '0.875rem 2rem',
              borderRadius: '3px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 20px oklch(22% 0.095 140 / 0.4)',
              transition: 'background-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'oklch(84% 0.05 140)';
              el.style.boxShadow = '0 6px 28px oklch(22% 0.095 140 / 0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'oklch(72% 0.085 140)';
              el.style.boxShadow = '0 4px 20px oklch(22% 0.095 140 / 0.4)';
            }}
          >
            Our Line Card
          </a>

          <a
            href="/team"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(84% 0.05 140)',
              border: '1px solid oklch(39% 0.115 140)',
              padding: '0.875rem 2rem',
              borderRadius: '3px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'oklch(62% 0.1 140)';
              el.style.color = 'oklch(99.5% 0.003 140)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'oklch(39% 0.115 140)';
              el.style.color = 'oklch(84% 0.05 140)';
            }}
          >
            Meet the Team
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: 'clamp(3rem, 5vw, 5rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'oklch(39% 0.115 140)',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.7s ease 0.8s',
          }}
        >
          <div style={{ width: '1px', height: '44px', backgroundColor: 'oklch(39% 0.115 140)' }} />
          <span
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.625rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
