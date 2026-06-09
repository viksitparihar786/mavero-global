'use client';

const PRODUCT_LINKS = [
  'Home Décor',
  'Metal & Brass Handicrafts',
  'Lighting',
  'Furniture',
  'Tableware & Serveware',
  'Garden & Outdoor',
  'Lifestyle & Gifting',
];

const SERVICES_LINKS = [
  { label: 'Sourcing Process', id: 'sourcing-process' },
  { label: 'Product Development', id: 'product-dev' },
  { label: 'Private Label & OEM', id: 'private-label' },
  { label: 'Quality Control', id: 'quality' },
  { label: 'Export Documentation', id: 'export-logistics' },
];

const COMPANY_LINKS = [
  { label: 'Why Source From India', id: 'why-india' },
  { label: 'Why Moradabad', id: 'moradabad' },
  { label: 'About Mavero Global', id: 'about' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Request Catalogue', id: 'catalogue' },
];

const MARKET_PILLS = ['UK', 'EU', 'US', 'AU', 'ME'];

const linkStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'rgba(245,242,236,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'block',
};

export default function Footer() {
  return (
    <footer style={{ background: '#070706', borderTop: '1px solid rgba(184,148,74,0.1)' }}>
      {/* Main columns */}
      <div
        className="grid md:grid-cols-4"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
          gap: 'clamp(2rem, 3vw, 3rem)',
        }}
      >
        {/* Col 1 — Brand */}
        <div>
          <p className="font-display text-ivory" style={{ fontSize: '1.1rem', letterSpacing: '0.08em', fontWeight: 400, marginBottom: '0.5rem' }}>
            MAVERO GLOBAL
          </p>
          <p className="font-mono text-gold" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.7 }}>
            India&apos;s Home &amp; Lifestyle Sourcing Partner
          </p>
          <p className="font-body" style={{ fontSize: '0.85rem', color: 'rgba(245,242,236,0.4)', lineHeight: 1.7, maxWidth: 260 }}>
            Product development and sourcing for international home and lifestyle buyers. Based in Moradabad, India.
          </p>
        </div>

        {/* Col 2 — Products */}
        <div>
          <p className="font-mono text-gold uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>
            Products
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {PRODUCT_LINKS.map((name) => (
              <li key={name}>
                <a
                  href="#products"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.45)')}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Our Services */}
        <div>
          <p className="font-mono text-gold uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>
            Our Services
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {SERVICES_LINKS.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={`#${id}`}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.45)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div>
          <p className="font-mono text-gold uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>
            Company
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {COMPANY_LINKS.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={`#${id}`}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.45)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(184,148,74,0.08)',
          padding: '1.5rem clamp(1.5rem, 4vw, 4rem)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <div
          className="flex flex-wrap items-center justify-between"
          style={{ gap: '0.75rem', marginBottom: '0.875rem' }}
        >
          <p className="font-body" style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.3)' }}>
            © 2025 Mavero Global · Moradabad, India ·{' '}
          <a href="mailto:director@maveroglobal.com" style={{ color: 'inherit', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(184,148,74,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}>
            Get In Touch
          </a>
          </p>
          <div className="flex flex-wrap" style={{ gap: '0.5rem' }}>
            {MARKET_PILLS.map((m) => (
              <span
                key={m}
                className="font-mono"
                style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(184,148,74,0.5)', background: 'rgba(184,148,74,0.06)', border: '1px solid rgba(184,148,74,0.12)', borderRadius: 100, padding: '0.2rem 0.6rem' }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <p className="font-body" style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.25)', marginBottom: '0.5rem' }}>
          Serving: UK · EU · US · Canada · Australia · Middle East
        </p>
        <p className="font-mono text-center" style={{ fontSize: '0.5rem', color: 'var(--mist)', letterSpacing: '0.08em', opacity: 0.7 }}>
          Specialising in Home Décor · Lighting · Furniture · Tableware · Garden &amp; Outdoor · Lifestyle
        </p>
      </div>
    </footer>
  );
}
