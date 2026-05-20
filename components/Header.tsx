'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Values', href: '/values' },
  { label: 'Industries', href: '/industries' },
  { label: 'Manufacturers', href: '/manufacturers' },
  { label: 'Our Territory', href: '/team' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // On non-home pages, header is always opaque (sections have light/varied backgrounds)
  const opaque = scrolled || !isHome;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: 'oklch(22% 0.10 252)',
          boxShadow: '0 1px 0 oklch(30% 0.10 252)',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <Image
              src="/Dans-Website/logo-white.png"
              alt="Electric Component Sales"
              width={180}
              height={50}
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: active ? 'oklch(84% 0.05 252)' : 'oklch(72% 0.085 252)',
                    padding: '0.5rem 0.875rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '0.875rem',
                        right: '0.875rem',
                        height: '2px',
                        backgroundColor: 'oklch(84% 0.05 252)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'oklch(99.5% 0.003 252)',
                backgroundColor: pathname === '/contact' ? 'oklch(50% 0.12 252)' : 'oklch(42% 0.12 252)',
                padding: '0.625rem 1.25rem',
                borderRadius: '4px',
                textDecoration: 'none',
                marginLeft: '0.5rem',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(50% 0.12 252)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  pathname === '/contact' ? 'oklch(50% 0.12 252)' : 'oklch(42% 0.12 252)';
              }}
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            className="flex md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'oklch(84% 0.05 252)',
                  borderRadius: '1px',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            backgroundColor: 'oklch(27% 0.112 252)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem clamp(1.25rem, 4vw, 2.5rem)',
            gap: '0.25rem',
            overflowY: 'auto',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: '2rem',
                letterSpacing: '-0.01em',
                color: pathname === link.href ? 'oklch(72% 0.085 252)' : 'oklch(92% 0.025 252)',
                textDecoration: 'none',
                padding: '0.75rem 0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: '2rem',
              color: 'oklch(72% 0.085 252)',
              textDecoration: 'none',
              padding: '0.75rem 0',
              marginTop: '1rem',
            }}
          >
            Get In Touch →
          </Link>
        </div>
      )}
    </>
  );
}
