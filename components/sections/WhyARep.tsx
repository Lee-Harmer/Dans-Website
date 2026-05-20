'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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

const REASONS = [
  {
    num: '01',
    heading: 'Commission-based. Zero overhead.',
    body: 'A manufacturers rep costs you nothing until they make you money. No salary, no benefits, no office space, no HR. You get a full sales force operating at your risk, not yours.',
  },
  {
    num: '02',
    heading: 'Relationships built over decades.',
    body: 'ECS has spent 57 years building relationships with the distributors, engineers, contractors, and buyers in this territory. You can\'t buy that. You can only partner with it.',
  },
  {
    num: '03',
    heading: 'Your product in every call.',
    body: 'When our rep visits a distributor, they bring your product into the conversation, alongside complementary lines. That multiplies your face-time with buyers without multiplying your headcount.',
  },
  {
    num: '04',
    heading: 'Local intelligence, applied.',
    body: 'We know the regional specifiers, the key contractors, the decision-makers by name. We know which markets are growing and which distributors are winning. That knowledge makes your launch faster.',
  },
];

export default function WhyARep() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="why-a-rep" style={{ position: 'relative' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: '580px',
        }}
      >
        {/* Left — the argument, dark */}
        <div style={{
          backgroundColor: 'oklch(22% 0.10 252)',
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700, fontSize: '0.6875rem',
            letterSpacing: '0.13em', textTransform: 'uppercase',
            color: 'oklch(48% 0.14 252)', marginBottom: '1rem',
          }}>
            For Manufacturers
          </p>
          <h2 style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            lineHeight: 0.97, letterSpacing: '-0.02em',
            color: 'oklch(96% 0.006 252)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}>
            WHY A
            <br />MANUFACTURERS
            <br /><span style={{ color: 'oklch(68% 0.09 252)' }}>REP?</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {REASONS.map((r, i) => (
              <div key={r.num} style={{
                paddingTop: '1.5rem', paddingBottom: '1.5rem',
                borderTop: '1px solid oklch(30% 0.08 252)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1rem', alignItems: 'start',
              }}>
                <span style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.06em',
                  color: 'oklch(38% 0.10 252)', paddingTop: '0.2rem',
                }}>
                  {r.num}
                </span>
                <div>
                  <p style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.005em',
                    color: 'oklch(93% 0.008 252)', marginBottom: '0.375rem',
                  }}>
                    {r.heading}
                  </p>
                  <p style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.875rem', lineHeight: 1.65,
                    color: 'oklch(58% 0.05 252)',
                  }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — ECS proof, light */}
        <div style={{
          backgroundColor: 'oklch(98% 0.003 252)',
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', gap: '3rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}>
          <div>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700, fontSize: '0.6875rem',
              letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(48% 0.14 252)', marginBottom: '1.5rem',
            }}>
              Why ECS Specifically
            </p>
            <p style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.75, color: 'oklch(20% 0.02 252)',
              maxWidth: '46ch', marginBottom: '1.5rem',
            }}>
              Any rep can make the case above. What separates ECS is the depth of
              specialisation across three distinct groups — Electronic, Electrical,
              and Networking — each with its own dedicated team and established
              customer base.
            </p>
            <p style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.75, color: 'oklch(42% 0.015 252)',
              maxWidth: '46ch',
            }}>
              Your product doesn&apos;t get handed to a generalist. It gets placed with
              the group that has the right relationships for your market — Medical,
              Military, Industrial, Commercial, or Networking infrastructure.
            </p>
          </div>

          {/* Proof stats — 2×2 grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1px', backgroundColor: 'oklch(90% 0.008 252)',
            border: '1px solid oklch(90% 0.008 252)',
          }}>
            {[
              { stat: '57+', label: 'Years in the Upper Midwest' },
              { stat: '3',   label: 'Specialised divisions' },
              { stat: '20+', label: 'Premier manufacturer partners' },
              { stat: '5',   label: 'End markets served' },
            ].map((item, i) => (
              <div key={item.label} style={{
                backgroundColor: 'oklch(97% 0.004 252)',
                padding: '1.5rem',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${0.3 + i * 0.08}s`,
              }}>
                <div style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'oklch(30% 0.14 252)',
                  letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem',
                }}>
                  {item.stat}
                </div>
                <div style={{
                  fontFamily: "'Chivo', sans-serif",
                  fontSize: '0.8125rem', color: 'oklch(44% 0.02 252)', lineHeight: 1.4,
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800, fontSize: '0.875rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'oklch(97% 0.006 252)',
              backgroundColor: 'oklch(28% 0.12 252)',
              padding: '0.875rem 2rem', borderRadius: '3px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background-color 0.2s', alignSelf: 'flex-start',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(35% 0.14 252)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(28% 0.12 252)'}
          >
            Inquire About Representation →
          </Link>
        </div>
      </div>
    </section>
  );
}
