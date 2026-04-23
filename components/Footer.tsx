'use client';

import Image from 'next/image';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Manufacturers', href: '/manufacturers' },
  { label: 'Territory', href: '/territory' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'oklch(15% 0.022 140)',
        padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2.5rem)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid oklch(27% 0.112 140)',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Electric Component Sales"
              width={160}
              height={44}
              style={{ height: '40px', width: 'auto', objectFit: 'contain', marginBottom: '1rem' }}
            />
            <p
              style={{
                fontFamily: "'Chivo', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'oklch(44% 0.038 140)',
                maxWidth: '36ch',
                marginTop: '1rem',
              }}
            >
              Professional manufacturers representatives offering industry-leading
              solutions for the Electronic, Electrical, and Networking markets since 1967.
            </p>

            {/* NEMRA badge */}
            <div
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.75rem',
                border: '1px solid oklch(27% 0.112 140)',
                borderRadius: '2px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.625rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'oklch(44% 0.038 140)',
                }}
              >
                ERA · NEMRA · BICSI
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'oklch(47% 0.112 140)',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: '0.9375rem',
                    color: 'oklch(60% 0.022 140)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(60% 0.022 140)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact quick info */}
          <div>
            <p
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'oklch(47% 0.112 140)',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { label: 'Email', value: 'info@ecs-sales.com', href: 'mailto:info@ecs-sales.com' },
                { label: 'Phone', value: '(952) 946-9510', href: 'tel:9529469510' },
                { label: 'Office', value: '12301 Whitewater Dr, Ste 130\nMinnetonka, MN 55343', href: '/contact' },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'oklch(39% 0.115 140)',
                      marginBottom: '0.125rem',
                    }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "'Chivo', sans-serif",
                      fontSize: '0.9375rem',
                      color: 'oklch(60% 0.022 140)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(60% 0.022 140)'}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/electric-component-sales"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'oklch(47% 0.112 140)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(72% 0.085 140)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(47% 0.112 140)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: '0.8125rem',
              color: 'oklch(39% 0.115 140)',
            }}
          >
            © {new Date().getFullYear()} Electric Component Sales. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.625rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'oklch(33% 0.118 140)',
            }}
          >
            Serving the Upper Midwest
          </p>
        </div>
      </div>
    </footer>
  );
}
