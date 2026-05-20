'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    name: 'Solar',
    desc: 'Supplying the components that power renewable energy infrastructure.',
    points: ['Inverter & power electronics', 'Cable management systems', 'Control & automation components'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75',
  },
  {
    name: 'OEM',
    desc: 'Partnering with manufacturers to spec the right components at the design stage.',
    points: ['Early design-in support', 'Technical sales expertise', 'Long-term supply partnerships'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75',
  },
  {
    name: 'Construction',
    desc: 'Serving electrical contractors and integrators from spec to installation.',
    points: ['Project-based pricing support', 'Contractor relationships', 'Code-compliant product lines'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75',
  },
  {
    name: 'Data Center',
    desc: 'Connected infrastructure solutions for mission-critical environments.',
    points: ['Structured cabling systems', 'Power distribution components', 'Network infrastructure'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=75',
  },
  {
    name: 'End User',
    desc: 'Direct support for facility managers and operations teams.',
    points: ['MRO supply relationships', 'On-site product support', 'Multi-site account management'],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=800&q=75',
  },
  {
    name: 'Industrial Automation',
    desc: 'Components for the machines that drive modern manufacturing.',
    points: ['Switches & sensors', 'Control panel components', 'Motion & drive solutions'],
    image: 'https://images.unsplash.com/photo-1565515636309-78e5e9e726de?w=800&q=75',
  },
  {
    name: 'Medical',
    desc: 'Precision components for life-critical medical devices and equipment.',
    points: ['ISO-compliant supply chain', 'Low-noise audio & power ICs', 'High-reliability passive components'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=75',
  },
  {
    name: 'Military / Aerospace',
    desc: 'MIL-spec qualified components for demanding defence and aerospace programs.',
    points: ['MIL-SPEC qualified products', 'Traceability & documentation', 'High-reliability sourcing'],
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=75',
  },
];

const VALUES = [
  {
    num: '01',
    title: 'Relationships First',
    desc: 'We build lasting partnerships with manufacturers, distributors, and end users — not just transactions. When you call ECS, you reach someone who knows your business personally.',
  },
  {
    num: '02',
    title: 'Deep Market Knowledge',
    desc: 'Decades of specialised focus across Electronic, Electrical, and Networking markets means we understand the certification requirements, supply chains, and customer base of every industry we serve.',
  },
  {
    num: '03',
    title: 'Three Divisions. One Region.',
    desc: 'ECS offers manufacturers a unique advantage: three specialised sales channels within a single trade area. More coverage, more expertise, more results — all coordinated under one roof.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'ECS has been an invaluable partner in growing our presence in the Upper Midwest. Their knowledge of the medical and industrial markets is second to none.',
    author: 'Director of Sales',
    company: 'Electronic Components Manufacturer',
  },
  {
    quote: 'What sets ECS apart is the personal attention. They know our customers as well as we do — and that kind of relationship drives real results.',
    author: 'VP of Marketing',
    company: 'Electrical Equipment Supplier',
  },
  {
    quote: 'From design-in support to production ramp, the ECS team has been there every step of the way. Highly recommended for any manufacturer entering this territory.',
    author: 'National Sales Manager',
    company: 'Networking Infrastructure Brand',
  },
];

const STATS = [
  { value: '57+', label: 'Years in Business' },
  { value: '3', label: 'Specialised Divisions' },
  { value: '8', label: 'Industries Served' },
  { value: '7', label: 'States Covered' },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

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

// ─── Sub-components ──────────────────────────────────────────────────────────

function IndustryCard({ industry, index, visible }: { industry: typeof INDUSTRIES[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '3px',
        minHeight: '340px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        cursor: 'default',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${0.05 + index * 0.07}s, transform 0.55s ease ${0.05 + index * 0.07}s`,
      }}
    >
      <img
        src={industry.image}
        alt={industry.name}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
        loading="lazy"
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, oklch(10% 0.05 252) 0%, oklch(10% 0.05 252 / 0.88) 55%, oklch(10% 0.05 252 / 0.45) 100%)'
          : 'linear-gradient(to top, oklch(10% 0.05 252) 0%, oklch(10% 0.05 252 / 0.55) 50%, oklch(10% 0.05 252 / 0.05) 100%)',
        transition: 'background 0.4s ease',
      }} />
      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
        <h3 style={{
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1.6rem, 2.2vw, 2.1rem)',
          letterSpacing: '-0.02em', lineHeight: 1,
          color: 'oklch(97% 0.008 252)', marginBottom: '0.5rem',
        }}>
          {industry.name.toUpperCase()}
        </h3>
        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.875rem',
          lineHeight: 1.5, color: 'oklch(75% 0.04 252)',
          marginBottom: hovered ? '1.25rem' : '0',
          maxHeight: hovered ? '80px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, margin-bottom 0.4s ease',
        }}>
          {industry.desc}
        </p>
        <ul style={{
          listStyle: 'none', padding: 0, margin: 0,
          display: 'flex', flexDirection: 'column', gap: '0.4rem',
          maxHeight: hovered ? '120px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}>
          {industry.points.map(point => (
            <li key={point} style={{
              fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
              color: 'oklch(82% 0.025 252)',
              display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
            }}>
              <span style={{ color: 'oklch(62% 0.1 252)', flexShrink: 0, marginTop: '2px' }}>—</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function IndustriesServed() {
  const hero = useFadeIn(0.05);
  const statsSection = useFadeIn();
  const valuesSection = useFadeIn();
  const cardsSection = useFadeIn();
  const testimonialsSection = useFadeIn();
  const ctaSection = useFadeIn();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(22% 0.10 252)',
        padding: 'clamp(8rem, 14vw, 12rem) clamp(1.25rem, 4vw, 2.5rem) clamp(5rem, 8vw, 7rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: '50%', right: '-2%',
          transform: 'translateY(-50%)',
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 900, fontSize: 'clamp(8rem, 22vw, 26rem)',
          lineHeight: 1, color: 'oklch(28% 0.11 252)',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          ECS
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
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '14ch',
          }}>
            INDUSTRIES
            <br />
            <span style={{ color: 'oklch(72% 0.085 252)' }}>WE SERVE</span>
          </h1>
          <p style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7, color: 'oklch(62% 0.1 252)',
            maxWidth: '52ch',
          }}>
            For over 57 years, ECS has built deep roots across the markets that matter most
            in the Upper Midwest — delivering expert manufacturer representation to every
            industry we serve.
          </p>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'oklch(27% 0.112 252)' }}>
        <div
          ref={statsSection.ref}
          style={{
            maxWidth: '1320px', margin: '0 auto',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                opacity: statsSection.visible ? 1 : 0,
                transform: statsSection.visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <p style={{
                fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em',
                lineHeight: 1, color: 'oklch(84% 0.05 252)', marginBottom: '0.25rem',
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
                fontWeight: 500, color: 'oklch(55% 0.07 252)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(97% 0.008 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div ref={valuesSection.ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{
            opacity: valuesSection.visible ? 1 : 0,
            transform: valuesSection.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
            }}>
              Why ECS
            </p>
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97, letterSpacing: '-0.02em', color: 'oklch(15% 0.022 252)',
            }}>
              WHAT SETS US
              <br />
              APART
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
          }}>
            {VALUES.map((val, i) => (
              <div
                key={val.num}
                style={{
                  opacity: valuesSection.visible ? 1 : 0,
                  transform: valuesSection.visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
                  borderTop: '3px solid oklch(47% 0.075 252)',
                  paddingTop: '1.75rem',
                }}
              >
                <p style={{
                  fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
                  fontSize: '3.5rem', letterSpacing: '-0.04em', lineHeight: 1,
                  color: 'oklch(90% 0.012 252)', marginBottom: '1rem',
                }}>
                  {val.num}
                </p>
                <h3 style={{
                  fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', letterSpacing: '-0.01em',
                  color: 'oklch(15% 0.022 252)', marginBottom: '0.875rem', lineHeight: 1.1,
                }}>
                  {val.title}
                </h3>
                <p style={{
                  fontFamily: "'Chivo', sans-serif",
                  fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
                  lineHeight: 1.7, color: 'oklch(44% 0.038 252)',
                }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry cards ───────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(12% 0.018 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div ref={cardsSection.ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            opacity: cardsSection.visible ? 1 : 0,
            transform: cardsSection.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}>
            <div>
              <p style={{
                fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
                fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
                color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
              }}>
                Markets We Serve
              </p>
              <h2 style={{
                fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 0.97, letterSpacing: '-0.02em', color: 'oklch(92% 0.025 252)',
              }}>
                INDUSTRIES
                <br />
                SERVED
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <p style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.0625rem)',
                lineHeight: 1.7, color: 'oklch(55% 0.05 252)', maxWidth: '48ch',
              }}>
                Hover over an industry to see how ECS adds value in that market.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard key={industry.name} industry={industry} index={i} visible={cardsSection.visible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: 'oklch(97% 0.008 252)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}>
        <div ref={testimonialsSection.ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            opacity: testimonialsSection.visible ? 1 : 0,
            transform: testimonialsSection.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.6875rem', letterSpacing: '0.13em', textTransform: 'uppercase',
              color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
            }}>
              Client Feedback
            </p>
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97, letterSpacing: '-0.02em', color: 'oklch(15% 0.022 252)',
            }}>
              WHAT OUR
              <br />
              PARTNERS SAY
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'oklch(94% 0.012 252)',
                  borderRadius: '4px',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderTop: '3px solid oklch(72% 0.085 252)',
                  opacity: testimonialsSection.visible ? 1 : 0,
                  transform: testimonialsSection.visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                {/* Quote mark */}
                <div style={{
                  fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
                  fontSize: '4rem', lineHeight: 1, color: 'oklch(82% 0.03 252)',
                  marginBottom: '-1rem',
                }}>
                  "
                </div>
                <blockquote style={{
                  fontFamily: "'Chivo', sans-serif",
                  fontSize: 'clamp(1rem, 1.3vw, 1.0625rem)',
                  lineHeight: 1.7, color: 'oklch(27% 0.08 252)',
                  margin: 0, fontStyle: 'italic',
                }}>
                  {t.quote}
                </blockquote>
                <div style={{ borderTop: '1px solid oklch(87% 0.014 252)', paddingTop: '1.25rem' }}>
                  <p style={{
                    fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
                    fontSize: '0.9375rem', letterSpacing: '-0.01em',
                    color: 'oklch(27% 0.112 252)', marginBottom: '0.2rem',
                  }}>
                    {t.author}
                  </p>
                  <p style={{
                    fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
                    color: 'oklch(55% 0.05 252)',
                  }}>
                    {t.company}
                  </p>
                </div>
              </div>
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
          ref={ctaSection.ref}
          style={{
            maxWidth: '1320px', margin: '0 auto', textAlign: 'center',
            opacity: ctaSection.visible ? 1 : 0,
            transform: ctaSection.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
            fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'oklch(62% 0.1 252)', marginBottom: '1.5rem',
          }}>
            Ready to Work Together?
          </p>
          <h2 style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.95,
            letterSpacing: '-0.025em', color: 'oklch(97% 0.008 252)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '20ch', margin: '0 auto clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            LET&apos;S START A CONVERSATION
          </h2>
          <p style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7, color: 'oklch(62% 0.1 252)',
            maxWidth: '52ch', margin: '0 auto clamp(2rem, 4vw, 3rem)',
          }}>
            Whether you&apos;re a manufacturer looking to expand your Upper Midwest presence,
            or a customer searching for the right product — ECS is on your side.
          </p>
          <Link
            href="/contact"
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
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
