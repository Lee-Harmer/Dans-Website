'use client';

import { useEffect, useRef, useState } from 'react';

/* TODO: Replace initials placeholders with actual headshots when client provides them */
const TEAM = [
  {
    name: 'David Gartner',
    title: 'Representation Inquiries',
    email: 'dgartner@ecs-sales.com',
    phone: '(952) 914-7201',
    initials: 'DG',
    note: 'Contact David for manufacturer representation inquiries',
  },
  {
    name: 'ECS Electronic Group',
    title: 'Electronic Division',
    email: 'info@ecs-sales.com',
    phone: '(952) 946-9510',
    initials: 'EE',
    note: 'Medical · Industrial · Military · Off-Road',
  },
  {
    name: 'ECS Electrical Group',
    title: 'Electrical Division',
    email: 'info@ecs-sales.com',
    phone: '(952) 946-9510',
    initials: 'EL',
    note: 'Consulting Engineers · Contractors · End Users',
  },
  {
    name: 'ECS Networking Group',
    title: 'Networking Division',
    email: 'info@ecs-sales.com',
    phone: '(952) 946-9510',
    initials: 'EN',
    note: 'Infrastructure · Data · Connected Buildings',
  },
];

function useFadeIn() {
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
  return { ref, visible };
}

export default function Team() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="team"
      style={{
        backgroundColor: 'oklch(95% 0.010 140)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div ref={ref} style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
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
              Our Team
            </p>
            <h2
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 0.97,
                letterSpacing: '-0.02em',
                color: 'oklch(15% 0.022 140)',
              }}
            >
              PEOPLE WHO
              <br />
              KNOW YOUR MARKET
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: 'clamp(1rem, 1.4vw, 1.0625rem)',
                lineHeight: 1.7,
                color: 'oklch(44% 0.038 140)',
                maxWidth: '48ch',
              }}
            >
              Our representatives are industry veterans with deep roots in the
              Upper Midwest electrical and electronic market. When you call ECS,
              you reach someone who knows your products and your customers, personally.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {TEAM.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s`,
                backgroundColor: 'oklch(98% 0.005 140)',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px oklch(85% 0.014 140), 0 4px 16px oklch(90% 0.01 140 / 0.6)',
              }}
            >
              {/* Photo area, diagonal stripe placeholder until headshots arrive */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  background: `repeating-linear-gradient(
                    -45deg,
                    oklch(27% 0.112 140) 0px,
                    oklch(27% 0.112 140) 12px,
                    oklch(29% 0.113 140) 12px,
                    oklch(29% 0.113 140) 24px
                  )`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Monogram circle */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    border: '2px solid oklch(39% 0.115 140)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                    backgroundColor: 'oklch(33% 0.118 140)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: 'oklch(62% 0.1 140)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      userSelect: 'none',
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.6875rem',
                    color: 'oklch(47% 0.112 140)',
                    textAlign: 'center',
                    padding: '0 1.25rem',
                    lineHeight: 1.4,
                    maxWidth: '22ch',
                  }}
                >
                  {member.note}
                </p>

                {/* Photo coming badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.5rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'oklch(47% 0.112 140)',
                    backgroundColor: 'oklch(22% 0.095 140)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '2px',
                  }}
                >
                  Photo Coming
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    letterSpacing: '-0.01em',
                    color: 'oklch(15% 0.022 140)',
                    lineHeight: 1.1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.8125rem',
                    color: 'oklch(47% 0.112 140)',
                    marginBottom: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  {member.title}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a
                    href={`mailto:${member.email}`}
                    style={{
                      fontFamily: "'Chivo', sans-serif",
                      fontSize: '0.8125rem',
                      color: 'oklch(44% 0.038 140)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(27% 0.112 140)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(44% 0.038 140)'}
                  >
                    {member.email}
                  </a>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      style={{
                        fontFamily: "'Chivo', sans-serif",
                        fontSize: '0.8125rem',
                        color: 'oklch(44% 0.038 140)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(27% 0.112 140)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(44% 0.038 140)'}
                    >
                      {member.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
