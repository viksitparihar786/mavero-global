'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const BUYER_TYPES = [
  {
    title: 'Retail Chains & Department Stores',
    desc: 'Large-format retailers and department store buyers sourcing seasonal home and lifestyle ranges. Need reliable volume production, consistent quality across large orders, and a partner who understands retail-grade compliance and documentation.',
  },
  {
    title: 'Private Label Brand Builders',
    desc: 'Growing brands developing their own product ranges under their own label. Need product development capability, sampling support, OEM manufacturing, and a sourcing partner who can take a concept to branded, shelf-ready production.',
  },
  {
    title: 'E-commerce & DTC Brands',
    desc: 'Online retailers scaling their home décor and lifestyle product catalogues. Need fast sampling turnaround, photography-ready product quality, FBA-compliant packaging, and reliable lead times.',
  },
  {
    title: 'Importers & Wholesalers',
    desc: 'Import and wholesale businesses sourcing home décor and lifestyle products from India. Need a reliable India-side partner for quality assurance, documentation, and multi-order management across multiple SKUs.',
  },
  {
    title: 'Hospitality & Contract Buyers',
    desc: 'Hotels, resorts, serviced apartments, and interior designers specifying custom home décor and furniture for commercial interiors. Need custom product development and consistent batch quality across repeat orders.',
  },
  {
    title: 'Home Décor & Lifestyle Brands',
    desc: 'Established and emerging lifestyle brands building curated, design-led collections. Need a sourcing partner who understands design intent, premium material standards, and the quality expectations of their end customer.',
  },
];

const MARKETS = [
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇪🇺', name: 'European Union' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇦🇪', name: 'Middle East' },
  { flag: '🌍', name: '20+ Markets' },
];

export default function Buyers() {
  const headingRef = useScrollReveal();
  const introRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const marketsRef = useScrollReveal();

  return (
    <section
      id="buyers"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headingRef} className="reveal" style={{ marginBottom: '2rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            Who We Work With
          </p>
          <h2
            className="font-display text-ivory"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            Built For International Buyers
          </h2>
        </div>

        {/* Intro paragraph */}
        <div ref={introRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'rgba(245,242,236,0.7)', lineHeight: 1.8, maxWidth: 640 }}
          >
            We work with international buyers across multiple business models. Whatever your
            structure — retail, wholesale, brand, or online — we have experience supporting buyers
            like you.
          </p>
        </div>

        {/* Buyer cards */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.5px', marginBottom: '4rem', background: 'rgba(184,148,74,0.1)' }}
        >
          {BUYER_TYPES.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: 'var(--ink)',
                padding: '2rem 1.75rem',
                borderTop: '2px solid transparent',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = 'transparent')}
            >
              <h3
                className="font-display text-ivory"
                style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.875rem', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.7)', lineHeight: 1.7 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Markets row */}
        <div
          ref={marketsRef}
          className="reveal"
          style={{ borderTop: '1px solid rgba(184,148,74,0.15)', paddingTop: '2.5rem' }}
        >
          <p
            className="font-mono text-mist uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.14em', marginBottom: '1.25rem' }}
          >
            Markets Served
          </p>
          <div className="flex flex-wrap" style={{ gap: '0.75rem', marginBottom: '1.25rem' }}>
            {MARKETS.map(({ flag, name }) => (
              <span
                key={name}
                className="font-body"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(184,148,74,0.08)',
                  border: '1px solid rgba(184,148,74,0.2)',
                  borderRadius: 100,
                  padding: '0.35rem 0.875rem',
                  fontSize: '0.8rem',
                  color: 'rgba(245,242,236,0.7)',
                }}
              >
                {flag} {name}
              </span>
            ))}
          </div>
          <p
            className="font-body"
            style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.45)', fontStyle: 'italic' }}
          >
            If your market isn&apos;t listed above, get in touch — we export to buyers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
