'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const STAGES = [
  {
    stage: '01',
    title: 'Pre-Production Check',
    desc: 'Materials, components and production methods reviewed before manufacturing begins. Issues caught before they become costly.',
  },
  {
    stage: '02',
    title: 'Inline Inspection',
    desc: 'Quality checks during production. Issues caught on the factory floor, not at the warehouse.',
  },
  {
    stage: '03',
    title: 'Pre-Shipment Inspection',
    desc: 'Full product inspection against your approved sample before goods leave India. We only sign off when everything meets standard.',
  },
];

const CHECKLIST = [
  'Dimensions and measurements vs approved specification',
  'Material quality and finish vs approved sample',
  'Colour matching and surface treatment accuracy',
  'Structural integrity and product safety',
  'Quantity count vs purchase order',
  'Labelling accuracy and correct placement',
  'Packaging quality and export carton strength',
  'Barcode and retail compliance where applicable',
];

export default function Quality() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal();
  const checklistRef = useScrollReveal();

  return (
    <section
      id="quality"
      style={{
        background: 'var(--warm)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            Quality Control
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem' }}
          >
            3-Stage QC Process
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--mist)', maxWidth: 520, lineHeight: 1.7 }}
          >
            Every order is subject to a structured quality control process before leaving India. No surprises at your warehouse.
          </p>
        </div>

        {/* Stage cards */}
        <div
          ref={cardsRef}
          className="reveal grid md:grid-cols-3"
          style={{ gap: '1.5rem', marginBottom: '3.5rem' }}
        >
          {STAGES.map(({ stage, title, desc }, i) => (
            <div
              key={stage}
              className={`reveal-delay-${i + 1}`}
              style={{
                background: '#fff',
                border: '1px solid rgba(184,148,74,0.15)',
                borderRadius: 4,
                padding: '2.5rem 2rem',
                position: 'relative',
              }}
            >
              <span
                className="font-mono text-gold absolute"
                style={{ fontSize: '3.5rem', fontWeight: 300, top: '1.5rem', right: '1.75rem', lineHeight: 1, opacity: 0.12 }}
              >
                {stage}
              </span>
              <div style={{ width: 28, height: 2, background: 'var(--gold)', marginBottom: '1.5rem' }} />
              <h3
                className="font-display text-ink"
                style={{ fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.875rem', lineHeight: 1.2 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.65 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* QC checklist sub-section */}
        <div
          ref={checklistRef}
          className="reveal"
          style={{
            background: 'var(--gold-pale)',
            borderRadius: 4,
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            border: '1px solid rgba(184,148,74,0.2)',
          }}
        >
          <h3
            className="font-display text-ink"
            style={{ fontSize: '1.4rem', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.2 }}
          >
            What Our QC Inspections Cover
          </h3>
          <div
            className="grid sm:grid-cols-2"
            style={{ gap: '0.75rem' }}
          >
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-start" style={{ gap: '0.625rem' }}>
                <span
                  className="font-mono text-gold flex-shrink-0"
                  style={{ fontSize: '0.8rem', lineHeight: 1.65 }}
                >
                  ✓
                </span>
                <p
                  className="font-body"
                  style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.65 }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
