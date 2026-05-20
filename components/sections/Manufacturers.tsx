'use client';

import { useState, useEffect, useRef } from 'react';

// TODO: Replace logo/productImage paths with real assets when client provides them
const MANUFACTURERS = [
  {
    name: 'ArkX Labs',
    category: 'Electronic',
    desc: 'Advanced far-field voice capture and control technology. Production-ready voice processing modules and custom integration for demanding industrial and medical environments.',
    markets: ['Industrial', 'Medical'],
    website: 'https://placeholder.com',
    logo: '/Dans-Website/manufacturers/arkx-logo.png',
    productImage: '/Dans-Website/manufacturers/arkx-product.png',
  },
  {
    name: 'Cirrus Logic',
    category: 'Electronic',
    desc: 'Low-power ICs for audio and voice signal processing, spanning the entire audio signal chain from capture to playback. Powers the world\'s top smartphones, wearables, and smart-home devices.',
    markets: ['Consumer', 'Industrial', 'Medical'],
    website: 'https://cirrus.com',
    logo: '/Dans-Website/manufacturers/cirrus-logo.png',
    productImage: '/Dans-Website/manufacturers/cirrus-product.png',
  },
  {
    name: 'HellermannTyton',
    category: 'Electronic',
    desc: 'Global leader in systems and solutions that help world-class customers manage and identify wires, cables, and components across industrial, medical, military, and off-road applications.',
    markets: ['Industrial', 'Medical', 'Military', 'Off-Road'],
    website: 'https://www.hellermanntyton.com',
    logo: '/Dans-Website/manufacturers/hellermann-logo-v2.png',
    productImage: '/Dans-Website/manufacturers/hellermann-product.png',
  },
  {
    name: 'Japan Display Inc.',
    category: 'Electronic',
    desc: 'World leader in small- and medium-size LCD manufacturing. Formed from Hitachi, Sony, and Toshiba LCD businesses. Produces displays for mobile, automotive, industrial, and medical equipment.',
    markets: ['Medical', 'Automotive', 'Industrial'],
    website: 'https://www.j-display.com',
    logo: '/Dans-Website/manufacturers/jdi-logo.png',
    productImage: '/Dans-Website/manufacturers/jdi-product.png',
  },
  {
    name: 'Marquardt',
    category: 'Electronic',
    desc: 'One of the world\'s leading manufacturers of electromechanical and electronic switches and switching systems. Global market leader in power tool switches spanning automotive, appliances, and e-bikes.',
    markets: ['Automotive', 'Industrial', 'Off-Road'],
    website: 'https://www.marquardt.com',
    logo: '/Dans-Website/manufacturers/marquardt-logo.png',
    productImage: '/Dans-Website/manufacturers/marquardt-product.png',
  },
  {
    name: 'MSSL Wiring Systems',
    category: 'Electronic',
    desc: 'Complete wiring harness solutions: design, development, prototyping, validation, and manufacturing for passenger cars, commercial vehicles, off-road, and medical diagnostic equipment.',
    markets: ['Automotive', 'Medical', 'Off-Road'],
    website: 'https://placeholder.com',
    logo: '/Dans-Website/manufacturers/mssl-logo.png',
    productImage: '/Dans-Website/manufacturers/mssl-product.png',
  },
  {
    name: 'IRC / TT Electronics',
    category: 'Electronic',
    desc: 'Designs and manufactures resistors and precision resistor networks. Trusted by designers for critical applications from space flight controllers to medical defibrillators.',
    markets: ['Medical', 'Military', 'Industrial'],
    website: 'https://www.ttelectronics.com',
    logo: '/Dans-Website/manufacturers/irc-logo.png',
    productImage: '/Dans-Website/manufacturers/irc-product.png',
  },
  {
    name: 'Optek / TT Electronics',
    category: 'Electronic',
    desc: 'Innovative optoelectronic solutions for sensing and illumination. Standard and application-specific lighting components for signage, automotive, entertainment, and high-reliability applications.',
    markets: ['Automotive', 'Industrial', 'Medical'],
    website: 'https://www.ttelectronics.com',
    logo: '/Dans-Website/manufacturers/optek-logo.png',
    productImage: '/Dans-Website/manufacturers/optek-product.png',
  },
  {
    name: 'BI Technologies / TT Electronics',
    category: 'Electronic',
    desc: 'Sensors and assemblies for the world\'s leading businesses. Precision potentiometers, panel pots, tactile switches, and magnetic components for transportation and industrial markets.',
    markets: ['Industrial', 'Automotive'],
    website: 'https://www.ttelectronics.com',
    logo: '/Dans-Website/manufacturers/bi-logo.png',
    productImage: '/Dans-Website/manufacturers/bi-product.png',
  },
  {
    name: 'Viking Technology',
    category: 'Electronic',
    desc: 'Global leader in DRAM memory and Flash storage solutions, from high-performance computing SSDs to industrial, telecom, military/defense, and enterprise markets.',
    markets: ['Military', 'Industrial', 'Enterprise'],
    website: 'https://placeholder.com',
    logo: '/Dans-Website/manufacturers/viking-logo.png',
    productImage: '/Dans-Website/manufacturers/viking-product.png',
  },
  {
    name: 'OmniOn Power',
    category: 'Electronic',
    desc: 'Complete power solution portfolio: Front End AC/DC Rectifiers, DC/DC Converters, board-mounted isolated and non-isolated solutions for industrial, medical, military, computing, and telecom markets.',
    markets: ['Industrial', 'Medical', 'Military', 'Telecom'],
    website: 'https://placeholder.com',
    logo: '/Dans-Website/manufacturers/omnion-logo.png',
    productImage: '/Dans-Website/manufacturers/omnion-product.png',
  },
  {
    name: 'American Electrical',
    category: 'Electrical',
    desc: 'Complete line of DIN Rail mounted components, terminal blocks, power supplies, fuse holders, circuit breakers, interface modules, disconnect switches, PCB terminals, wire ferrules, and tools.',
    markets: ['Industrial', 'OEM', 'Commercial'],
    website: 'https://placeholder.com',
    logo: '/Dans-Website/manufacturers/american-electrical-logo.png',
    productImage: '/Dans-Website/manufacturers/american-electrical-product.png',
  },
  {
    name: 'Klein Tools',
    category: 'Electrical',
    desc: 'Committed to American manufacturing since 1857. For over 160 years, Klein Tools has remained dedicated to professional tradesmen with the world\'s finest hand tools, made in America.',
    markets: ['Contractor', 'Industrial', 'Commercial'],
    website: 'https://www.kleintools.com',
    logo: '/Dans-Website/manufacturers/klein-logo.png',
    productImage: '/Dans-Website/manufacturers/klein-product.png',
  },
  {
    name: 'Industrial Power Cable',
    category: 'Electrical',
    desc: 'Industrial portable power cables, flexible cordage, welding cable, stage lighting, underground service entrance, submersible pump, mining, and high-voltage cables.',
    markets: ['Industrial', 'Mining', 'Commercial'],
    website: 'https://placeholder.com',
    logo: null,
    productImage: null,
  },
];

const CATEGORIES = ['All', 'Electronic', 'Electrical'];

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function Manufacturers() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, visible } = useFadeIn();

  const filtered = activeCategory === 'All'
    ? MANUFACTURERS
    : MANUFACTURERS.filter(m => m.category === activeCategory);

  return (
    <section
      id="manufacturers"
      style={{
        backgroundColor: 'oklch(97% 0.003 252)',
        position: 'relative',
      }}
    >
      <div ref={ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>

        {/* ── Header ───────────────────────────────────── */}
        <div style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem) 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '2rem',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.13em',
              textTransform: 'uppercase', color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
            }}>Our Line Card</p>
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97, letterSpacing: '-0.02em', color: 'oklch(15% 0.022 252)',
            }}>
              MANUFACTURERS<br />WE REPRESENT
            </h2>
          </div>
          <a
            href="/line-card.pdf"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
              fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'oklch(15% 0.022 252)', backgroundColor: 'oklch(72% 0.085 252)',
              padding: '0.75rem 1.5rem', borderRadius: '3px', textDecoration: 'none',
              whiteSpace: 'nowrap', transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(62% 0.1 252)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(72% 0.085 252)'}
          >
            Download Line Card
          </a>
        </div>

        {/* ── Logo wall ────────────────────────────────── */}
        <div style={{
          padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.1s',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1px',
            backgroundColor: 'oklch(88% 0.006 252)',
            border: '1px solid oklch(88% 0.006 252)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {MANUFACTURERS.map((mfr, i) => (
              <div
                key={`${mfr.name}-${mfr.category}-${i}`}
                style={{
                  flex: '1 1 130px',
                  backgroundColor: 'oklch(99% 0.002 252)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  minHeight: '80px',
                }}
              >
                {mfr.logo ? (
                  <img src={mfr.logo} alt={mfr.name} style={{ maxHeight: '36px', maxWidth: '110px', objectFit: 'contain', opacity: 0.85 }} />
                ) : (
                  <span style={{
                    fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
                    fontSize: '0.8125rem', letterSpacing: '-0.01em', textTransform: 'uppercase',
                    color: 'oklch(62% 0.07 252)', textAlign: 'center', lineHeight: 1.2,
                  }}>
                    {mfr.name}
                  </span>
                )}
                <span style={{
                  fontFamily: "'Chivo', sans-serif", fontSize: '0.5rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.04 252)',
                }}>
                  {mfr.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter tabs ───────────────────────────────── */}
        <div style={{
          padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
          display: 'flex', gap: '0.375rem', flexWrap: 'wrap',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s',
        }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
              fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0.5rem 1.125rem', borderRadius: '2px', cursor: 'pointer',
              transition: 'background-color 0.15s, color 0.15s, border-color 0.15s',
              border: activeCategory === cat ? '1px solid oklch(72% 0.085 252)' : '1px solid oklch(82% 0.01 252)',
              backgroundColor: activeCategory === cat ? 'oklch(72% 0.085 252)' : 'transparent',
              color: activeCategory === cat ? 'oklch(15% 0.022 252)' : 'oklch(47% 0.075 252)',
            }}>
              {cat === 'All' ? `All (${MANUFACTURERS.length})` : `${cat} (${MANUFACTURERS.filter(m => m.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* ── Detail cards ─────────────────────────────── */}
        <div>
          {filtered.map((mfr) => {
            const i = MANUFACTURERS.indexOf(mfr);
            return <MfrCard key={`${mfr.name}-${mfr.category}`} mfr={mfr} index={i} visible={visible} />;
          })}
        </div>

        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.8125rem',
          color: 'oklch(55% 0.025 252)', padding: '2rem clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 6vw, 5rem)',
          fontStyle: 'italic',
        }}>
          Contact us for our complete manufacturer portfolio and current line card.
        </p>
      </div>
    </section>
  );
}

function MfrCard({ mfr, index, visible }: { mfr: typeof MANUFACTURERS[0]; index: number; visible: boolean }) {
  const odd = index % 2 !== 0;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      borderTop: '1px solid oklch(88% 0.006 252)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.5s ease ${Math.min(index * 0.04, 0.4)}s, transform 0.5s ease ${Math.min(index * 0.04, 0.4)}s`,
    }}>

      {/* Text side */}
      <div style={{
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2.5rem)',
        order: odd ? 2 : 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* Logo box */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.25rem',
          border: '1px solid oklch(88% 0.006 252)',
          borderRadius: '3px',
          marginBottom: '1.25rem',
          alignSelf: 'flex-start',
          minWidth: '100px',
          minHeight: '48px',
          backgroundColor: 'oklch(97% 0.003 252)',
        }}>
          {mfr.logo ? (
            <img src={mfr.logo} alt={mfr.name} style={{ maxHeight: '36px', maxWidth: '120px', objectFit: 'contain' }} />
          ) : (
            <span style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: '0.875rem', letterSpacing: '-0.01em', textTransform: 'uppercase',
              color: 'oklch(72% 0.085 252)', lineHeight: 1,
            }}>
              {mfr.name}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.02em',
          color: 'oklch(15% 0.022 252)', lineHeight: 1, marginBottom: '0.5rem',
        }}>
          {mfr.name.toUpperCase()}
        </h3>

        <p style={{
          fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700,
          fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'oklch(47% 0.075 252)', marginBottom: '1rem',
        }}>
          {mfr.category} Division
        </p>

        <p style={{
          fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem',
          lineHeight: 1.7, color: 'oklch(38% 0.02 252)', marginBottom: '1.25rem', maxWidth: '52ch',
        }}>
          {mfr.desc}
        </p>

        {/* Market tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
          {mfr.markets.map(m => (
            <span key={m} style={{
              fontFamily: "'Chivo', sans-serif", fontSize: '0.625rem', letterSpacing: '0.06em',
              textTransform: 'uppercase', color: 'oklch(45% 0.025 252)',
              padding: '0.2rem 0.5rem', border: '1px solid oklch(85% 0.01 252)', borderRadius: '2px',
            }}>
              {m}
            </span>
          ))}
        </div>

        <a
          href={mfr.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800,
            fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'oklch(96% 0.006 252)', backgroundColor: 'oklch(22% 0.08 252)',
            padding: '0.75rem 1.5rem', borderRadius: '3px', textDecoration: 'none',
            display: 'inline-block', border: '1px solid oklch(22% 0.08 252)',
            transition: 'background-color 0.2s, border-color 0.2s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'oklch(32% 0.1 252)';
            el.style.borderColor = 'oklch(32% 0.1 252)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = 'oklch(22% 0.08 252)';
            el.style.borderColor = 'oklch(22% 0.08 252)';
          }}
        >
          Visit Website →
        </a>
      </div>

      {/* Product image side */}
      <div style={{
        order: odd ? 1 : 2,
        minHeight: '280px',
        backgroundColor: 'oklch(95% 0.003 252)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {mfr.productImage ? (
          <img src={mfr.productImage} alt={`${mfr.name} products`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{
              fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900,
              fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'oklch(65% 0.04 252)',
            }}>
              Product Image
            </p>
            <p style={{
              fontFamily: "'Chivo', sans-serif", fontSize: '0.6875rem',
              color: 'oklch(60% 0.03 252)', marginTop: '0.25rem',
            }}>
              {mfr.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
