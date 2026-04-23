'use client';

import { useState, useEffect, useRef } from 'react';

const CATEGORIES = ['All', 'Electronic', 'Electrical'];

const MANUFACTURERS = [
  /* ── ELECTRONIC GROUP ─────────────────────── */
  {
    name: 'ArkX Labs',
    category: 'Electronic',
    desc: 'Advanced far-field voice capture and control technology. Production-ready voice processing modules and custom integration.',
    markets: ['Industrial', 'Medical'],
  },
  {
    name: 'Cirrus Logic',
    category: 'Electronic',
    desc: 'Low-power ICs for audio and voice signal processing, spanning the entire audio signal chain from capture to playback. Powers the world\'s top smartphones, wearables, and smart-home devices.',
    markets: ['Consumer', 'Industrial', 'Medical'],
  },
  {
    name: 'HellermannTyton',
    category: 'Electronic',
    desc: 'Global leader in systems and solutions that help world-class customers manage and identify wires, cables, and components.',
    markets: ['Industrial', 'Medical', 'Military', 'Off-Road'],
  },
  {
    name: 'Japan Display Inc.',
    category: 'Electronic',
    desc: 'World leader in small- and medium-size LCD manufacturing. Formed from Hitachi, Sony, and Toshiba LCD businesses. Produces displays for mobile, automotive, industrial, and medical equipment.',
    markets: ['Medical', 'Automotive', 'Industrial'],
  },
  {
    name: 'Marquardt',
    category: 'Electronic',
    desc: 'One of the world\'s leading manufacturers of electromechanical and electronic switches and switching systems. Global market leader in power tool switches. Products span automotive, appliances, and e-bikes.',
    markets: ['Automotive', 'Industrial', 'Off-Road'],
  },
  {
    name: 'MSSL Wiring Systems',
    category: 'Electronic',
    desc: 'Complete wiring harness solutions: design, development, prototyping, validation, and manufacturing for passenger cars, commercial vehicles, off-road, and medical diagnostic equipment.',
    markets: ['Automotive', 'Medical', 'Off-Road'],
  },
  {
    name: 'IRC / TT Electronics',
    category: 'Electronic',
    desc: 'Designs and manufactures resistors and precision resistor networks. Trusted by designers for critical applications from space flight controllers to medical defibrillators.',
    markets: ['Medical', 'Military', 'Industrial'],
  },
  {
    name: 'Optek / TT Electronics',
    category: 'Electronic',
    desc: 'Innovative optoelectronic solutions for sensing and illumination. Standard and application-specific lighting components for signage, automotive, entertainment, and high-reliability applications.',
    markets: ['Automotive', 'Industrial', 'Medical'],
  },
  {
    name: 'BI Technologies / TT Electronics',
    category: 'Electronic',
    desc: 'Sensors and assemblies for the world\'s leading businesses. Extensive lines of precision potentiometers, panel pots, tactile switches, and magnetic components for transportation and industrial markets.',
    markets: ['Industrial', 'Automotive'],
  },
  {
    name: 'Viking Technology',
    category: 'Electronic',
    desc: 'Global leader in DRAM memory and Flash storage solutions, from high-performance computing SSDs to industrial, telecom, military/defense, and enterprise markets.',
    markets: ['Military', 'Industrial', 'Enterprise'],
  },
  {
    name: 'OmniOn Power',
    category: 'Electronic',
    desc: 'Complete power solution portfolio: Front End AC/DC Rectifiers, DC/DC Converters, board-mounted isolated and non-isolated solutions. Serving industrial, medical, military, computing, and telecom markets.',
    markets: ['Industrial', 'Medical', 'Military', 'Telecom'],
  },
  /* ── ELECTRICAL GROUP ──────────────────────── */
  {
    name: 'American Electrical',
    category: 'Electrical',
    desc: 'Complete line of DIN Rail mounted components, terminal blocks, power supplies, fuse holders, circuit breakers, interface modules, disconnect switches, PCB terminals, wire ferrules, and tools.',
    markets: ['Industrial', 'OEM', 'Commercial'],
  },
  {
    name: 'HellermannTyton',
    category: 'Electrical',
    desc: 'Leading global manufacturer of wire and cable management systems. Helps contractors and integrators manage, protect, and identify wiring for maximum reliability.',
    markets: ['Commercial', 'Industrial', 'Contractor'],
  },
  {
    name: 'Klein Tools',
    category: 'Electrical',
    desc: 'Committed to American manufacturing since 1857. For over 160 years, Klein Tools has remained dedicated to professional tradesmen with the world\'s finest hand tools, made in America.',
    markets: ['Contractor', 'Industrial', 'Commercial'],
  },
  {
    name: 'Industrial Power Cable',
    category: 'Electrical',
    desc: 'Industrial portable power cables, flexible cordage, welding cable, stage lighting, underground service entrance, submersible pump, mining, and high-voltage cables.',
    markets: ['Industrial', 'Mining', 'Commercial'],
  },
];

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
  const [active, setActive] = useState('All');
  const { ref, visible } = useFadeIn();

  const filtered = active === 'All'
    ? MANUFACTURERS
    : MANUFACTURERS.filter(m => m.category === active);

  // Group by category for editorial rendering
  const groups = active === 'All'
    ? ['Electronic', 'Electrical'].map(cat => ({
        category: cat,
        items: filtered.filter(m => m.category === cat),
      }))
    : [{ category: active, items: filtered }];

  return (
    <section
      id="manufacturers"
      style={{
        backgroundColor: 'oklch(15% 0.022 140)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
        position: 'relative',
      }}
    >
      <div ref={ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
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
                color: 'oklch(47% 0.112 140)',
                marginBottom: '1rem',
              }}
            >
              Our Line Card
            </p>
            <h2
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 0.97,
                letterSpacing: '-0.02em',
                color: 'oklch(92% 0.025 140)',
              }}
            >
              MANUFACTURERS
              <br />
              WE REPRESENT
            </h2>
          </div>

          <a
            href="/line-card.pdf"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(15% 0.022 140)',
              backgroundColor: 'oklch(72% 0.085 140)',
              padding: '0.75rem 1.5rem',
              borderRadius: '3px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(62% 0.1 140)'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(72% 0.085 140)'}
          >
            Download Line Card
          </a>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.375rem',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.15s',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.125rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'background-color 0.15s, color 0.15s, border-color 0.15s',
                border: active === cat
                  ? '1px solid oklch(72% 0.085 140)'
                  : '1px solid oklch(27% 0.112 140)',
                backgroundColor: active === cat
                  ? 'oklch(72% 0.085 140)'
                  : 'transparent',
                color: active === cat
                  ? 'oklch(15% 0.022 140)'
                  : 'oklch(47% 0.112 140)',
              }}
            >
              {cat === 'All' ? `All (${MANUFACTURERS.length})` : `${cat} (${MANUFACTURERS.filter(m => m.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Editorial rows, grouped by category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {groups.map((group, gi) => (
            <div key={group.category}>
              {/* Category divider */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${gi * 0.1}s`,
                }}
              >
                <div style={{ flex: 1, height: '1px', backgroundColor: 'oklch(27% 0.112 140)' }} />
                <span
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.625rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'oklch(39% 0.115 140)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {group.category} Division, {group.items.length} {group.items.length === 1 ? 'Manufacturer' : 'Manufacturers'}
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'oklch(27% 0.112 140)' }} />
              </div>

              {/* Manufacturer rows */}
              <div>
                {group.items.map((mfr, i) => (
                  <ManufacturerRow
                    key={`${mfr.name}-${mfr.category}`}
                    mfr={mfr}
                    index={i}
                    visible={visible}
                    isLast={i === group.items.length - 1}
                    groupOffset={gi * 0.15}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Chivo', sans-serif",
            fontSize: '0.8125rem',
            color: 'oklch(33% 0.118 140)',
            marginTop: '2.5rem',
            fontStyle: 'italic',
          }}
        >
          Contact us for our complete manufacturer portfolio and current line card.
        </p>
      </div>
    </section>
  );
}

function ManufacturerRow({
  mfr,
  index,
  visible,
  isLast,
  groupOffset,
}: {
  mfr: typeof MANUFACTURERS[0];
  index: number;
  visible: boolean;
  isLast: boolean;
  groupOffset: number;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = Math.min(index * 0.05 + groupOffset, 0.6);

  return (
    <div
      className="mfr-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: isLast ? 'none' : undefined,
        backgroundColor: hovered ? 'oklch(20% 0.08 140)' : 'transparent',
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s, background-color 0.15s ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {/* Name */}
      <div>
        <p
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            letterSpacing: '-0.01em',
            color: hovered ? 'oklch(84% 0.05 140)' : 'oklch(92% 0.025 140)',
            lineHeight: 1.1,
            transition: 'color 0.15s',
          }}
        >
          {mfr.name}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Chivo', sans-serif",
          fontSize: 'clamp(0.8125rem, 1.1vw, 0.9375rem)',
          lineHeight: 1.6,
          color: 'oklch(55% 0.07 140)',
        }}
      >
        {mfr.desc}
      </p>

      {/* Markets */}
      <div className="mfr-markets">
        {mfr.markets.map((m) => (
          <span
            key={m}
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.625rem',
              letterSpacing: '0.04em',
              color: 'oklch(44% 0.038 140)',
              padding: '0.2rem 0.5rem',
              border: '1px solid oklch(27% 0.112 140)',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
