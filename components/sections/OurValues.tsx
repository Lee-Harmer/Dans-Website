'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const VALUES = [
  {
    title: 'Integrity',
    desc: 'We build human-centred relationships with honesty, transparency, and ethics at every step — with our manufacturers, our customers, and each other.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: 'Accountability',
    desc: 'We own our results. When we make a commitment to a manufacturer or a customer, we see it through — no excuses, no deflection.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Expertise',
    desc: 'We invest in deep product and market knowledge so we can deliver real value — not just a brochure. Our reps are technical resources, not order takers.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: 'Teamwork',
    desc: 'We support, encourage, and communicate — inside ECS and across our entire network of manufacturers and customers. Your success is our success.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Continuous Growth',
    desc: 'We continuously innovate better strategies, invest in our people, and evolve with the markets we serve. Standing still is not an option.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

const CULTURE = [
  {
    label: 'Our Culture',
    heading: 'A TEAM THAT SHOWS UP',
    body: "ECS is a small, focused team — which means every person counts. We don't have layers of management between you and a decision. We have experienced people who know their markets, respect their relationships, and take pride in doing the job right.",
  },
  {
    label: 'Our Commitment',
    heading: 'BUILT FOR THE LONG TERM',
    body: "We're not chasing short-term wins. The manufacturers and customers we've served for decades come back because we're consistent, reliable, and honest. That's the only way to build a 57-year reputation in a market where everyone knows everyone.",
  },
  {
    label: 'Our Standard',
    heading: 'BEYOND EXPECTATIONS',
    body: "Good enough isn't good enough for ECS. We set the bar at exceeding expectations — whether that's product knowledge, responsiveness, or follow-through. Our manufacturers get a partner. Our customers get an advocate.",
  },
];

function useFadeIn(threshold = 0.08) {
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

function ValueCard({ value, index, visible }: { value: typeof VALUES[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? 'oklch(22% 0.08 252)' : 'oklch(18% 0.06 252)',
        borderRadius: '6px',
        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        border: `1px solid ${hovered ? 'oklch(47% 0.075 252)' : 'oklch(22% 0.07 252)'}`,
        display: 'flex', flexDirection: 'column', gap: '1.25rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `background-color 0.25s, border-color 0.25s, opacity 0.55s ease ${0.05 + index * 0.08}s, transform 0.55s ease ${0.05 + index * 0.08}s`,
      }}
    >
      <div style={{ color: hovered ? 'oklch(72% 0.085 252)' : 'oklch(47% 0.075 252)', transition: 'color 0.25s' }}>
        {value.icon}
      </div>
      <div>
        <h3 style={{
          fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
          fontSize: 'clamp(1.375rem, 2vw, 1.625rem)', letterSpacing: '-0.01em',
          color: 'oklch(92% 0.025 252)', lineHeight: 1, marginBottom: '0.75rem',
        }}>
          {value.title}
        </h3>
        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem',
          lineHeight: 1.7, color: 'oklch(58% 0.05 252)',
        }}>
          {value.desc}
        </p>
      </div>
    </div>
  );
}

function CultureItem({ item, index }: { item: typeof CULTURE[0]; index: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        borderTop: '3px solid oklch(47% 0.075 252)',
        paddingTop: '1.75rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <p style={{
        fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
        fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
        color: 'oklch(47% 0.075 252)', marginBottom: '0.75rem',
      }}>
        {item.label}
      </p>
      <h3 style={{
        fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
        fontSize: 'clamp(1.25rem, 2.2vw, 1.875rem)', letterSpacing: '-0.015em',
        lineHeight: 1, color: 'oklch(15% 0.022 252)', marginBottom: '1rem',
      }}>
        {item.heading}
      </h3>
      <p style={{
        fontFamily: "'Chivo', sans-serif",
        fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
        lineHeight: 1.75, color: 'oklch(44% 0.038 252)',
      }}>
        {item.body}
      </p>
    </div>
  );
}

export default function OurValues() {
  const hero = useFadeIn(0.05);
  const mission = useFadeIn();
  const valuesGrid = useFadeIn();
  const cta = useFadeIn();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(22% 0.10 252)',
        padding: 'clamp(8rem, 14vw, 12rem) clamp(1.25rem, 4vw, 2.5rem) clamp(5rem, 8vw, 7rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: '50%', right: '-2%',
          transform: 'translateY(-50%)',
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 900, fontSize: 'clamp(8rem, 22vw, 26rem)',
          lineHeight: 1, color: 'oklch(28% 0.11 252)',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          1967
        </div>
        <div
          ref={hero.ref}
          style={{
            maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 1,
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
            fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'oklch(62% 0.1 252)', marginBottom: '1.5rem',
          }}>
            Electric Component Sales · Est. 1967
          </p>
          <h1 style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.93,
            letterSpacing: '-0.025em', color: 'oklch(97% 0.008 252)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '14ch',
          }}>
            OUR
            <br />
            <span style={{ color: 'oklch(72% 0.085 252)' }}>VALUES</span>
          </h1>
          <p style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7, color: 'oklch(62% 0.1 252)', maxWidth: '52ch',
          }}>
            The principles that have guided every relationship, every decision,
            and every sale since Electric Component Sales was founded in 1967.
          </p>
        </div>
      </section>

      {/* ── Mission statement ────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(97% 0.008 252)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div
          ref={mission.ref}
          style={{
            maxWidth: '1320px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(3rem, 6vw, 7rem)',
            alignItems: 'center',
            opacity: mission.visible ? 1 : 0,
            transform: mission.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(47% 0.075 252)', marginBottom: '1.5rem',
            }}>
              Our Mission
            </p>
            <blockquote style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              lineHeight: 1.05, letterSpacing: '-0.018em',
              color: 'oklch(27% 0.112 252)', margin: 0,
            }}>
              "To satisfy customers beyond their expectations, earning their respect, trust, and ultimately their business."
            </blockquote>
            <div style={{ width: '48px', height: '3px', backgroundColor: 'oklch(47% 0.075 252)', marginTop: '2rem' }} />
          </div>
          <div>
            <p style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.75, color: 'oklch(27% 0.08 252)',
              marginBottom: '1.25rem',
            }}>
              This mission isn&apos;t a tagline — it&apos;s the standard we hold ourselves to
              in every manufacturer relationship and every customer interaction. After
              57 years, it remains the measure of everything we do.
            </p>
            <p style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              lineHeight: 1.75, color: 'oklch(44% 0.038 252)',
            }}>
              The five values below aren&apos;t aspirational — they describe how the ECS
              team actually operates, day in and day out, across every division and
              every market we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values grid ──────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(15% 0.022 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div ref={valuesGrid.ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{
            opacity: valuesGrid.visible ? 1 : 0,
            transform: valuesGrid.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
            }}>
              What We Stand For
            </p>
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97, letterSpacing: '-0.02em', color: 'oklch(92% 0.025 252)',
            }}>
              FIVE PRINCIPLES.
              <br />
              ONE COMPANY.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
          }}>
            {VALUES.map((val, i) => (
              <ValueCard key={val.title} value={val} index={i} visible={valuesGrid.visible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ──────────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(97% 0.008 252)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 5rem)',
          }}>
            {CULTURE.map((item, i) => (
              <CultureItem key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(27% 0.112 252)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div
          ref={cta.ref}
          style={{
            maxWidth: '1320px', margin: '0 auto', textAlign: 'center',
            opacity: cta.visible ? 1 : 0,
            transform: cta.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <h2 style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.95,
            letterSpacing: '-0.025em', color: 'oklch(97% 0.008 252)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
          }}>
            WORK WITH A TEAM
            <br />
            <span style={{ color: 'oklch(72% 0.085 252)' }}>YOU CAN TRUST</span>
          </h2>
          <p style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7, color: 'oklch(62% 0.1 252)',
            maxWidth: '48ch', margin: '0 auto clamp(2rem, 4vw, 3rem)',
          }}>
            These values aren&apos;t just words on a page. Meet the people who live them every day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/team"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
                fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'oklch(22% 0.095 252)', backgroundColor: 'oklch(72% 0.085 252)',
                padding: '1rem 2.5rem', borderRadius: '3px', textDecoration: 'none',
                display: 'inline-block', transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(84% 0.05 252)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(72% 0.085 252)'}
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
                fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'oklch(84% 0.05 252)', border: '1px solid oklch(39% 0.06 252)',
                padding: '1rem 2.5rem', borderRadius: '3px', textDecoration: 'none',
                display: 'inline-block', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 252)';
                (e.currentTarget as HTMLElement).style.color = 'oklch(97% 0.008 252)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.06 252)';
                (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 252)';
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
