'use client';

import { useEffect, useRef, useState } from 'react';

const TEAM = [
  {
    name: 'David Gartner',
    title: 'Representation Inquiries',
    email: 'dgartner@ecs-sales.com',
    phone: '(952) 914-7201',
    linkedin: 'https://www.linkedin.com/in/placeholder',
    photo: '/Dans-Website/team-4.jpg',
    bio: 'David brings decades of industry experience to ECS, specialising in manufacturer representation across the Upper Midwest. He is passionate about building lasting relationships between manufacturers and the markets they serve.',
    interests: 'Interests: Fishing, Golf, College Football',
  },
  {
    name: 'Dani Gish',
    title: 'Sales Representative',
    email: 'dgish@ecs-sales.com',
    phone: '651-324-0369',
    linkedin: 'https://www.linkedin.com/in/placeholder',
    photo: '/Dans-Website/team-2.jpg',
    bio: 'Dani is a driven sales professional focused on the Electronic division, serving Medical, Industrial, Military, and Off-Road markets. She excels at matching the right product to the right customer.',
    interests: 'Interests: Hiking, Travel, Live Music',
  },
  {
    name: 'Team Member',
    title: 'Sales Representative',
    email: 'info@ecs-sales.com',
    phone: '(952) 946-9510',
    linkedin: 'https://www.linkedin.com/in/placeholder',
    photo: '/Dans-Website/team-3.jpg',
    bio: 'A dedicated member of the ECS Electrical team, working closely with consulting engineers, contractors, and end users to deliver best-in-class electrical solutions throughout the region.',
    interests: 'Interests: Placeholder — update when info received',
  },
  {
    name: 'Team Member',
    title: 'Sales Representative',
    email: 'info@ecs-sales.com',
    phone: '(952) 946-9510',
    linkedin: 'https://www.linkedin.com/in/placeholder',
    photo: '/Dans-Website/team-1.jpg',
    bio: 'Part of the ECS Networking team, focused on infrastructure, data, and connected building solutions. Committed to helping clients navigate an ever-evolving technology landscape.',
    interests: 'Interests: Placeholder — update when info received',
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

function TeamCard({ member, index, visible }: { member: typeof TEAM[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${0.1 + index * 0.1}s, transform 0.55s ease ${0.1 + index * 0.1}s`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Circular photo with hover overlay */}
      <div
        style={{
          position: 'relative',
          width: '80%',
          maxWidth: '260px',
          aspectRatio: '1 / 1',
          height: 'auto',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          cursor: 'default',
          boxShadow: '0 4px 24px oklch(22% 0.10 252 / 0.25)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={member.photo}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Bio overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'oklch(22% 0.10 252 / 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.7rem',
              lineHeight: 1.5,
              color: 'oklch(90% 0.020 252)',
              marginBottom: '0.75rem',
            }}
          >
            {member.bio}
          </p>
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.625rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'oklch(72% 0.085 252)',
            }}
          >
            {member.interests}
          </p>
        </div>
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-0.01em',
          color: 'oklch(15% 0.022 252)',
          lineHeight: 1.1,
          marginBottom: '0.25rem',
        }}
      >
        {member.name}
      </h3>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Chivo', sans-serif",
          fontSize: '0.875rem',
          color: 'oklch(47% 0.075 252)',
          fontWeight: 500,
          marginBottom: '0.875rem',
        }}
      >
        {member.title}
      </p>

      {/* Icons: LinkedIn + Email */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'oklch(92% 0.020 252)',
            color: 'oklch(27% 0.112 252)',
            transition: 'background-color 0.2s, color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(27% 0.112 252)';
            (e.currentTarget as HTMLElement).style.color = 'oklch(97% 0.008 252)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(92% 0.020 252)';
            (e.currentTarget as HTMLElement).style.color = 'oklch(27% 0.112 252)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'oklch(92% 0.020 252)',
            color: 'oklch(27% 0.112 252)',
            transition: 'background-color 0.2s, color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(27% 0.112 252)';
            (e.currentTarget as HTMLElement).style.color = 'oklch(97% 0.008 252)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(92% 0.020 252)';
            (e.currentTarget as HTMLElement).style.color = 'oklch(27% 0.112 252)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="team"
      style={{
        backgroundColor: 'oklch(97% 0.008 252)',
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
                color: 'oklch(47% 0.075 252)',
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
                color: 'oklch(15% 0.022 252)',
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
                color: 'oklch(44% 0.038 252)',
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {TEAM.map((member, i) => (
            <TeamCard key={member.name + i} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
