'use client';

import { useState, useRef, useEffect } from 'react';

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

const inputStyle = {
  fontFamily: "'Chivo', sans-serif",
  fontSize: '0.9375rem',
  color: 'oklch(99.5% 0.003 140)',
  backgroundColor: 'oklch(33% 0.118 140)',
  border: '1px solid oklch(39% 0.115 140)',
  borderRadius: '3px',
  padding: '0.875rem 1rem',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
  display: 'block',
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Big Shoulders Display', sans-serif",
  fontWeight: 700,
  fontSize: '0.6875rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'oklch(62% 0.1 140)',
  marginBottom: '0.5rem',
  display: 'block',
};

export default function Contact() {
  const { ref, visible } = useFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'Manufacturer',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* TODO: Wire to Formspree, Netlify Forms, or server action */
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'oklch(27% 0.112 140)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 4vw, 2.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div
        ref={ref}
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          position: 'relative',
        }}
      >
        {/* Left: contact info */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          <p
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'oklch(62% 0.1 140)',
              marginBottom: '1rem',
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              lineHeight: 0.97,
              letterSpacing: '-0.02em',
              color: 'oklch(99.5% 0.003 140)',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            }}
          >
            LET'S WORK
            <br />
            TOGETHER
          </h2>

          <p
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontSize: 'clamp(1rem, 1.4vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'oklch(62% 0.1 140)',
              maxWidth: '44ch',
              marginBottom: '2.5rem',
            }}
          >
            Whether you're a manufacturer looking for representation, a distributor
            seeking product expertise, or an engineer with an application question,
            our team is ready to help.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(47% 0.112 140)', marginBottom: '0.25rem' }}>
                Technical &amp; Commercial
              </p>
              <a
                href="tel:9529469510"
                style={{ fontFamily: "'Chivo', sans-serif", fontSize: '1.125rem', fontWeight: 600, color: 'oklch(84% 0.05 140)', textDecoration: 'none', display: 'block', marginBottom: '0.125rem', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(99.5% 0.003 140)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
              >
                (952) 946-9510
              </a>
              <a
                href="mailto:info@ecs-sales.com"
                style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(62% 0.1 140)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(62% 0.1 140)'}
              >
                info@ecs-sales.com
              </a>
            </div>

            <div>
              <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(47% 0.112 140)', marginBottom: '0.25rem' }}>
                Representation Inquiries
              </p>
              <p style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(84% 0.05 140)', fontWeight: 500, marginBottom: '0.125rem' }}>
                David Gartner
              </p>
              <a
                href="tel:9529147201"
                style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(62% 0.1 140)', textDecoration: 'none', display: 'block', marginBottom: '0.125rem', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(62% 0.1 140)'}
              >
                (952) 914-7201
              </a>
              <a
                href="mailto:dgartner@ecs-sales.com"
                style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(62% 0.1 140)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(84% 0.05 140)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'oklch(62% 0.1 140)'}
              >
                dgartner@ecs-sales.com
              </a>
            </div>

            <div>
              <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(47% 0.112 140)', marginBottom: '0.25rem' }}>
                Office
              </p>
              <address
                style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(62% 0.1 140)', fontStyle: 'normal', lineHeight: 1.6 }}
              >
                12301 Whitewater Drive, Suite 130<br />
                Minnetonka, MN 55343
              </address>
            </div>

            <div>
              <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(47% 0.112 140)', marginBottom: '0.25rem' }}>
                Hours
              </p>
              <p style={{ fontFamily: "'Chivo', sans-serif", fontSize: '0.9375rem', color: 'oklch(62% 0.1 140)' }}>
                Monday – Friday: 8:00 AM – 5:00 PM CDT
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
          }}
        >
          {submitted ? (
            <div
              style={{
                padding: '3rem',
                backgroundColor: 'oklch(33% 0.118 140)',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: '4rem', color: 'oklch(72% 0.085 140)', lineHeight: 1, marginBottom: '1rem' }}>✓</div>
              <h3 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 800, fontSize: '1.75rem', color: 'oklch(99.5% 0.003 140)', marginBottom: '0.75rem' }}>Message Received</h3>
              <p style={{ fontFamily: "'Chivo', sans-serif", color: 'oklch(62% 0.1 140)', fontSize: '1rem' }}>
                We'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-grid-2">
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input id="name" type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Jane Smith" style={inputStyle}
                    onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 140)'}
                    onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.115 140)'} />
                </div>
                <div>
                  <label htmlFor="company" style={labelStyle}>Company</label>
                  <input id="company" type="text" value={form.company} onChange={(e) => setForm(p => ({ ...p, company: e.target.value }))} placeholder="Acme Corp" style={inputStyle}
                    onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 140)'}
                    onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.115 140)'} />
                </div>
              </div>

              <div className="form-grid-2">
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} placeholder="jane@company.com" style={inputStyle}
                    onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 140)'}
                    onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.115 140)'} />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="(555) 000-0000" style={inputStyle}
                    onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 140)'}
                    onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.115 140)'} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>I am a</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Manufacturer', 'Distributor', 'Contractor', 'Engineer', 'End User'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm(p => ({ ...p, type: opt }))}
                      style={{
                        fontFamily: "'Big Shoulders Display', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        padding: '0.5rem 1rem',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s, border-color 0.15s, color 0.15s',
                        border: form.type === opt ? '1px solid oklch(72% 0.085 140)' : '1px solid oklch(39% 0.115 140)',
                        backgroundColor: form.type === opt ? 'oklch(72% 0.085 140)' : 'transparent',
                        color: form.type === opt ? 'oklch(22% 0.095 140)' : 'oklch(62% 0.1 140)',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell us about your needs..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(62% 0.1 140)'}
                  onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'oklch(39% 0.115 140)'}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'oklch(27% 0.112 140)',
                  backgroundColor: 'oklch(72% 0.085 140)',
                  padding: '1rem 2rem',
                  borderRadius: '3px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(84% 0.05 140)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'oklch(72% 0.085 140)'}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
