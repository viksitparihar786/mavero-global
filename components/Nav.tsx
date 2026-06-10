'use client';

import { useState, useEffect } from 'react';

const SIMPLE_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Products', id: 'products' },
];

const SERVICES_DROPDOWN = [
  { label: 'Sourcing Process', id: 'sourcing-process' },
  { label: 'Product Development', id: 'product-dev' },
  { label: 'Private Label & OEM', id: 'private-label' },
  { label: 'Quality Control', id: 'quality' },
  { label: 'Export & Logistics', id: 'export-logistics' },
];

const BUYERS_DROPDOWN = [
  { label: 'Retail Chains', id: 'buyers' },
  { label: 'Importers & Wholesalers', id: 'buyers' },
  { label: 'Home Décor Brands', id: 'buyers' },
  { label: 'Hospitality Buyers', id: 'buyers' },
];

const navLinkStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: 'rgba(245,242,236,0.7)',
  letterSpacing: '0.02em',
  transition: 'color 0.2s',
  padding: 0,
  fontFamily: 'var(--ff-body)',
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobile-drawer') && !target.closest('#hamburger')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setMobileSubmenu(null);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileSubmenu = (key: string) =>
    setMobileSubmenu((prev) => (prev === key ? null : key));

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          height: 64,
          background: scrolled ? 'rgba(13,13,11,0.96)' : '#0d0d0b',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(184,148,74,0.12)',
          padding: '0 clamp(1rem, 4vw, 3rem)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <div className="flex flex-col" style={{ gap: 3 }}>
          <span className="font-display" style={{ fontSize: '1.15rem', letterSpacing: '0.1em', color: 'var(--ivory)', fontWeight: 400 }}>
            MAVERO GLOBAL
          </span>
          <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(184,148,74,0.6)', textTransform: 'uppercase' }}>
            India&apos;s Sourcing Partner
          </span>
        </div>

{/* Desktop nav */}
<div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
  {/* Simple links */}
  {SIMPLE_LINKS.map(({ label, id }) => (
    <button
      key={id}
      onClick={() => scrollTo(id)}
      style={navLinkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.7)')}
    >
      {label}
    </button>
  ))}

  {/* Insights Link */}
  <a
    href="/insights"
    style={{
      ...navLinkStyle,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.color = 'var(--ivory)')
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.color = 'rgba(245,242,236,0.7)')
    }
   >
    Insights
  </a>

  {/* Services dropdown */}
  <div className="nav-item">

            <button
              onClick={() => scrollTo('sourcing-process')}
              style={navLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.7)')}
            >
              Services
            </button>
            <div className="nav-dropdown">
              {SERVICES_DROPDOWN.map(({ label, id }) => (
                <button key={id + label} onClick={() => scrollTo(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Who We Work With dropdown */}
          <div className="nav-item">
            <button
              onClick={() => scrollTo('buyers')}
              style={navLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.7)')}
            >
              Who We Work With
            </button>
            <div className="nav-dropdown">
              {BUYERS_DROPDOWN.map(({ label, id }, i) => (
                <button key={i} onClick={() => scrollTo(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--gold)',
              color: 'var(--ink)',
              fontWeight: 500,
              fontSize: '0.875rem',
              padding: '0.5rem 1.25rem',
              letterSpacing: '0.02em',
              borderRadius: 2,
              minHeight: 44,
              transition: 'background 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-lt)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Send Enquiry
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="hamburger"
          className="flex flex-col items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, gap: 5, minWidth: 44, minHeight: 44 }}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: 'var(--ivory)',
                borderRadius: 1,
                transition: 'transform 0.25s, opacity 0.25s',
                transformOrigin: 'center',
                transform: open ? (i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none') : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-drawer"
          className="fixed md:hidden z-40"
          style={{
            top: 64, left: 0, right: 0,
            background: 'rgba(13,13,11,0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(184,148,74,0.12)',
            padding: '1.5rem clamp(1rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
        >
          {/* Simple links */}
          {SIMPLE_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-body text-left"
              style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(184,148,74,0.08)', cursor: 'pointer', fontSize: '1rem', color: 'rgba(245,242,236,0.8)', padding: '1rem 0', letterSpacing: '0.02em', minHeight: 44 }}
            >
              {label}
            </button>
          ))}

          {/* Services accordion */}
          <div style={{ borderBottom: '1px solid rgba(184,148,74,0.08)' }}>
            <button
              onClick={() => toggleMobileSubmenu('services')}
              className="font-body text-left flex items-center justify-between"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'rgba(245,242,236,0.8)', padding: '1rem 0', letterSpacing: '0.02em', minHeight: 44, width: '100%' }}
            >
              <span>Services</span>
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem', transition: 'transform 0.2s', transform: mobileSubmenu === 'services' ? 'rotate(90deg)' : 'none', display: 'inline-block' }}>›</span>
            </button>
            {mobileSubmenu === 'services' && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {SERVICES_DROPDOWN.map(({ label, id }) => (
                  <button
                    key={id + label}
                    onClick={() => scrollTo(id)}
                    className="font-mono block text-left"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.5)', padding: '0.5rem 1.25rem', width: '100%', minHeight: 36 }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Who We Work With accordion */}
          <div style={{ borderBottom: '1px solid rgba(184,148,74,0.08)' }}>
            <button
              onClick={() => toggleMobileSubmenu('buyers')}
              className="font-body text-left flex items-center justify-between"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'rgba(245,242,236,0.8)', padding: '1rem 0', letterSpacing: '0.02em', minHeight: 44, width: '100%' }}
            >
              <span>Who We Work With</span>
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem', transition: 'transform 0.2s', transform: mobileSubmenu === 'buyers' ? 'rotate(90deg)' : 'none', display: 'inline-block' }}>›</span>
            </button>
            {mobileSubmenu === 'buyers' && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {BUYERS_DROPDOWN.map(({ label, id }, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(id)}
                    className="font-mono block text-left"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.5)', padding: '0.5rem 1.25rem', width: '100%', minHeight: 36 }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="font-body"
            style={{ display: 'block', textAlign: 'center', background: 'var(--gold)', color: 'var(--ink)', fontWeight: 500, fontSize: '1rem', padding: '0.875rem', marginTop: '1rem', width: '100%', borderRadius: 2, letterSpacing: '0.02em', minHeight: 44, textDecoration: 'none' }}
          >
            Send Enquiry →
          </a>
        </div>
      )}
    </>
  );
}
