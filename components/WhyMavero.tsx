'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const REASONS = [
  {
    title: 'We Are Your India Office',
    desc: "Not an agent, not a middleman. We act as your permanent, accountable buying office in India. One team. One point of contact. Full ownership of your order from brief to delivery.",
  },
  {
    title: '500+ Verified Manufacturers',
    desc: "Our network is centered in Moradabad — India's largest home décor and lifestyle export hub — with access to specialist suppliers across the wider region. Every factory visited and verified.",
  },
  {
    title: 'No Surprises on Quality',
    desc: "Our 3-stage QC process — pre-production, inline, and pre-shipment — means quality issues are caught inside the factory, not at your warehouse.",
  },
  {
    title: 'Product Development Capability',
    desc: "We don't just source existing products. We develop new ones — from brief and mood board through to production-ready samples built to your specification.",
  },
  {
    title: 'Private Label & OEM Ready',
    desc: "Custom designs, your branding, your packaging. We manage the full private label process from concept approval to labelled, shelf-ready product.",
  },
  {
    title: 'Transparent Communication',
    desc: "Weekly order updates. Photo and video documentation at every production stage. You always know exactly where your order stands — no chasing required.",
  },
  {
    title: 'Export Documentation Handled',
    desc: "Commercial invoice, packing list, certificate of origin, bill of lading, phytosanitary certificates — we handle all export paperwork end to end.",
  },
  {
    title: 'Proven Track Record',
    desc: "Serving international buyers across UK, EU, US, Canada, Australia and the Middle East since 2012. 12+ years of active sourcing experience.",
  },
];

export default function WhyMavero() {
  const introRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="why-mavero"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section label + title */}
        <div ref={introRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Why Choose Us
          </p>
          <h2
            className="font-display text-ivory"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            Why Global Buyers Work With Mavero Global
          </h2>

          {/* Intro quote */}
          <p
            className="font-display"
            style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'rgba(245,242,236,0.8)',
              lineHeight: 1.7,
              maxWidth: 680,
              margin: '0 auto',
              marginBottom: '3.75rem',
            }}
          >
            Most sourcing problems don&apos;t come from bad products — they come from no one being
            accountable on the ground. Mavero Global is your India office. We are accountable for
            everything.
          </p>
        </div>

        {/* 8 cards — 4×2 grid */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px', background: 'rgba(184,148,74,0.08)' }}
        >
          {REASONS.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: '#161614',
                borderTop: '2px solid var(--gold)',
                padding: '2.25rem 1.75rem',
                transition: 'background 0.25s ease, border-top-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1c1a16';
                e.currentTarget.style.borderTopColor = 'var(--gold-lt)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#161614';
                e.currentTarget.style.borderTopColor = 'var(--gold)';
              }}
            >
              <h3
                className="font-body text-ivory"
                style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.875rem', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(245,242,236,0.72)',
                  lineHeight: 1.75,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
