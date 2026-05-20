import Link from 'next/link';

const LOGOS = [
  { name: 'ArkX Labs',          src: '/Dans-Website/manufacturers/arkx-logo.png' },
  { name: 'Cirrus Logic',       src: '/Dans-Website/manufacturers/cirrus-logo.png' },
  { name: 'HellermannTyton',    src: '/Dans-Website/manufacturers/hellermann-logo-v2.png' },
  { name: 'Japan Display Inc.', src: '/Dans-Website/manufacturers/jdi-logo.png' },
  { name: 'Marquardt',          src: '/Dans-Website/manufacturers/marquardt-logo.png' },
  { name: 'IRC / TT Electronics', src: '/Dans-Website/manufacturers/irc-logo.png' },
  { name: 'Viking Technology',  src: '/Dans-Website/manufacturers/viking-logo.png' },
  { name: 'OmniOn Power',       src: '/Dans-Website/manufacturers/omnion-logo.png' },
];

export default function MfrStrip() {
  return (
    <section style={{
      backgroundColor: 'oklch(97% 0.003 252)',
      padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
      borderTop: '1px solid oklch(91% 0.006 252)',
      borderBottom: '1px solid oklch(91% 0.006 252)',
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1.5rem', marginBottom: '2rem',
        }}>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700, fontSize: '0.6875rem',
            letterSpacing: '0.13em', textTransform: 'uppercase',
            color: 'oklch(50% 0.08 252)',
          }}>
            Manufacturers We Represent
          </p>
          <Link href="/manufacturers" style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700, fontSize: '0.75rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'oklch(35% 0.14 252)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.375rem',
          }}>
            View Full Line Card →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1px',
          backgroundColor: 'oklch(88% 0.006 252)',
          border: '1px solid oklch(88% 0.006 252)',
        }}>
          {LOGOS.map(logo => (
            <div key={logo.name} style={{
              backgroundColor: 'oklch(99% 0.002 252)',
              padding: '1.25rem 1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: '72px',
            }}>
              <img
                src={logo.src}
                alt={logo.name}
                style={{ maxHeight: '32px', maxWidth: '100px', objectFit: 'contain', opacity: 0.75 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
