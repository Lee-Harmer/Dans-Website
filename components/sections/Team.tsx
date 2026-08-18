'use client';

import { useEffect, useRef, useState } from 'react';

const TEAM = [
  {
    name: 'David Gartner',
    title: 'President',
    email: 'dgartner@ecs-sales.com',
    phone: '612.991.9900',
    linkedin: 'https://www.linkedin.com/in/david-gartner-6093932bb/',
    photo: '/Dans-Website/team-4.jpg',
    territory: ['All Territories'],
    bio: `David Gartner is President of ECS, a technical manufacturers' representative firm focused on electrical and electronic components and systems. He leads the organization while remaining actively involved in employee coaching, manufacturer line management and growth, new principal recruitment, and direct sales to key accounts.

A University of Minnesota Electrical Engineering graduate (1988), David joined ECS immediately after graduation. He has since gained broad experience across all territories and industry segments, building deep knowledge of the products and manufacturers ECS represents.

David excels at translating customer requirements into effective solutions — from cable management and wire harnesses to complex custom user interfaces and power systems. His strong technical expertise, problem-solving skills, and collaborative approach make him a trusted partner who helps customers achieve their design and project goals.

He is most fulfilled when quarterbacking successful engagements that deliver real results for both customers and ECS principals. Outside work, David enjoys alpine ski race coaching, mountain bike racing, extreme skiing, fly fishing, golf, and fast-paced outdoor adventures.`,
  },
  {
    name: 'Dani Gish',
    title: 'Account Representative',
    email: 'dgish@ecs-sales.com',
    phone: '651.324.0369',
    linkedin: 'https://www.linkedin.com/in/danielle-gish-4b896a184/',
    photo: '/Dans-Website/team-2.jpg',
    territory: ['N. Minnesota', 'North Dakota'],
    bio: `Dani has been part of the ECS team for over eight years and proudly serves customers throughout Minnesota and North Dakota. She enjoys building relationships, solving problems, and helping customers find the right solutions. The people are her favorite part of the job, and she believes the strongest partnerships are built on trust, communication, and genuine connections.

Before joining ECS, Dani spent 10 years living in Colorado before returning to Northern Minnesota, where she now calls home. Outside of work, she enjoys hiking with her dogs, spending time on the lake, caring for her chickens, and planning her next mountain adventure. Her dogs, however, remain her biggest priority — they run the household, appear in most of her photos, and have even attended a few trade shows over the years.`,
  },
  {
    name: 'Bryon George',
    title: 'Account Representative',
    email: 'bgeorge@ecs-sales.com',
    phone: '507.810.0173',
    linkedin: 'https://www.linkedin.com/in/bryon-george-761124216/',
    photo: '/Dans-Website/team-3.jpg',
    territory: ['S. Minnesota', 'W. Wisconsin', 'Metro Area'],
    bio: `Bryon George joined ECS in early 2025, bringing more than 20 years of experience in the electrical and electronics industry. Throughout his career, he has developed a strong reputation for building lasting relationships and helping customers identify the right solutions to meet their unique needs. His industry knowledge, customer-focused approach, and commitment to service make him a valuable resource for customers.

Bryon resides in Southern Minnesota with his wife and children, where family is at the center of everything he does. Outside of work, he enjoys spending time with his family and pursuing outdoor activities, particularly hunting and fishing. His dedication to family, community, and the outdoors reflects the same integrity, work ethic, and commitment he brings to serving customers every day.`,
  },
  {
    name: 'Drew Benko',
    title: 'Account Representative',
    email: 'dbenko@ecs-sales.com',
    phone: '612.600.9464',
    linkedin: 'https://www.linkedin.com/in/drew-benko-859b9360/',
    photo: '/Dans-Website/team-1.jpg',
    territory: ['Metro Area', 'South Dakota', 'Fargo ND (Electronic)'],
    bio: `Drew has been an important part of the ECS team for 12 years, known for his strong work ethic, dependable nature, and ability to bring a little humor to any situation. After attending the University of Minnesota Duluth, he built a career focused on building relationships and delivering exceptional support to customers and partners.

Outside of work, Drew enjoys spending time with his wife, Angie, and their two sons. Much of his free time revolves around baseball games, basketball courts, and family adventures. When he gets the chance, he enjoys fishing and spending time in Ely, Minnesota. Drew also proudly serves his community through the Bloomington Fire Department, reflecting his commitment to helping others both professionally and personally. Whether he's helping a customer, supporting a teammate, or sharing a laugh, Drew is someone people enjoy working with.`,
  },
  {
    name: 'Cindy Amundsen',
    title: 'Inside Sales',
    email: null,
    phone: '651.325.8594',
    linkedin: 'https://www.linkedin.com/in/cindy-amundsen-4117711b/',
    photo: '/Dans-Website/team-cindy.png',
    territory: [],
    bio: `For over 30 years, Cindy has been a valued member of the ECS family. Her dedication, experience, and genuine care for customers and coworkers have made her an important part of the team and the relationships that ECS is built on.

Outside of work, Cindy loves spending time in her garden, especially when it's filled with colorful flowers. She also enjoys being outdoors with her two dogs and cherishes time spent with her son, Sam. Whether she's helping customers or tending to her garden, Cindy brings warmth, kindness, and care to everything she does.`,
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

function PlaceholderAvatar() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="120" fill="oklch(88% 0.020 252)" />
      <circle cx="60" cy="46" r="22" fill="oklch(72% 0.040 252)" />
      <ellipse cx="60" cy="102" rx="34" ry="24" fill="oklch(72% 0.040 252)" />
    </svg>
  );
}

function TeamCard({ member, index, visible }: { member: typeof TEAM[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = member.bio.split('\n\n').filter(Boolean);
  const previewParagraphs = paragraphs.slice(0, 1);
  const extraParagraphs = paragraphs.slice(1);
  const hasMore = extraParagraphs.length > 0;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${0.08 + index * 0.09}s, transform 0.55s ease ${0.08 + index * 0.09}s`,
        backgroundColor: 'oklch(100% 0 0)',
        borderRadius: '16px',
        border: '1px solid oklch(88% 0.015 252)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar with photo + identity */}
      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          alignItems: 'flex-start',
          padding: '1.75rem 1.75rem 1.25rem',
          borderBottom: '1px solid oklch(92% 0.012 252)',
        }}
      >
        {/* Circular photo */}
        <div
          style={{
            flexShrink: 0,
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 2px 12px oklch(22% 0.10 252 / 0.15)',
          }}
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          ) : (
            <PlaceholderAvatar />
          )}
        </div>

        {/* Name, title, territory, contact */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800,
              fontSize: '1.35rem',
              letterSpacing: '-0.01em',
              color: 'oklch(15% 0.022 252)',
              lineHeight: 1.1,
              marginBottom: '0.2rem',
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'oklch(47% 0.075 252)',
              marginBottom: '0.625rem',
            }}
          >
            {member.title}
          </p>

          {/* Territory pills */}
          {member.territory.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.875rem' }}>
              {member.territory.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.6rem',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: 'oklch(30% 0.10 252)',
                    backgroundColor: 'oklch(91% 0.025 252)',
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Contact row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: '0.8rem',
                color: 'oklch(35% 0.040 252)',
                fontWeight: 500,
              }}
            >
              {member.phone}
            </span>
            <span style={{ color: 'oklch(75% 0.015 252)', fontSize: '0.75rem' }}>·</span>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
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
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            )}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
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
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ padding: '1.25rem 1.75rem 1.5rem', flex: 1 }}>
        {previewParagraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.875rem',
              lineHeight: 1.72,
              color: 'oklch(38% 0.028 252)',
              marginBottom: expanded && extraParagraphs.length > 0 ? '0.875rem' : 0,
            }}
          >
            {p}
          </p>
        ))}

        {expanded && extraParagraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.875rem',
              lineHeight: 1.72,
              color: 'oklch(38% 0.028 252)',
              marginBottom: i < extraParagraphs.length - 1 ? '0.875rem' : 0,
            }}
          >
            {p}
          </p>
        ))}

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              marginTop: '0.875rem',
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: 'oklch(47% 0.075 252)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            {expanded ? 'Show less' : 'Read more'}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
            >
              <path d="M2 4l4 4 4-4" />
            </svg>
          </button>
        )}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
