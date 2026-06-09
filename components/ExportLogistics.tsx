'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const DOCS = [
  {
    title: 'Commercial Invoice',
    body: 'Prepared accurately to your purchase order, with correct HS codes, unit prices, currency, and agreed terms of trade. Ready for customs clearance at destination.',
  },
  {
    title: 'Packing List',
    body: 'Detailed carton-level packing list with gross and net weights, carton dimensions, piece counts per carton, and total shipment summary.',
  },
  {
    title: 'Certificate of Origin',
    body: "Sourced from the relevant Indian Chamber of Commerce or export authority, as required by your country's import and preferential duty requirements.",
  },
  {
    title: 'Bill of Lading / Airway Bill',
    body: 'Coordinated with your nominated freight forwarder or our established freight partners — covering FCL, LCL, and air freight options to all major markets.',
  },
  {
    title: 'Phytosanitary Certificate',
    body: 'Required for wood products, natural fibre items, and organic materials. We coordinate this with the relevant Indian Plant Quarantine authority in advance of shipment.',
  },
  {
    title: 'Freight Coordination',
    body: 'We work with trusted freight forwarders on established India–UK, India–EU, India–US, India–Australia, and India–Middle East routes. Sea and air options available.',
  },
];

export default function ExportLogistics() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="export-logistics"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Export &amp; Shipping
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Export Documentation &amp; Logistics Coordination
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8, maxWidth: 680 }}
          >
            Getting goods out of India and into your warehouse requires precise documentation and
            logistics coordination. We handle the complete India-side export process — so you can
            focus on your business, not Indian customs paperwork.
          </p>
        </div>

        {/* 3×2 card grid */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.25rem', marginBottom: '2.5rem' }}
        >
          {DOCS.map(({ title, body }, i) => (
            <div
              key={title}
              className={`el-card reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <h3
                className="font-body text-ink"
                style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.625rem', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.7 }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="font-mono text-mist text-center"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            lineHeight: 1.7,
            maxWidth: 680,
            margin: '0 auto',
          }}
        >
          We work with your nominated freight forwarder or can recommend established partners.
          Freight costs are quoted separately and paid by the buyer.
        </p>
      </div>
    </section>
  );
}
