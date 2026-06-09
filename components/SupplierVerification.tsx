'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

type Card = {
  title: string;
  body: string;
  checks: string[];
};

const CARDS: Card[] = [
  {
    title: 'Physical Factory Visits',
    body: 'We personally visit every factory before adding them to our network. We assess production capacity, working conditions, equipment quality, and export readiness. No remote onboarding — ever.',
    checks: [
      'Production area walkthrough and capacity check',
      'Equipment and tooling assessment',
      'Worker skill level and workforce size',
      'Export documentation and compliance capability',
    ],
  },
  {
    title: 'Ongoing Performance Monitoring',
    body: 'Suppliers are continuously evaluated against delivery performance, quality consistency, and communication standards. Underperforming factories are removed from our active network.',
    checks: [
      'On-time delivery rate tracking',
      'Quality complaint and rejection history',
      'Communication responsiveness',
      'Pricing transparency and stability',
    ],
  },
  {
    title: 'Compliance & Ethics Standards',
    body: 'We verify that factories meet basic compliance requirements — including legal business registration, fair labour practices, safety standards, and product testing capability for your export market.',
    checks: [
      'Legal business registration verification',
      'Basic labour practice standards',
      'Fire safety and factory compliance',
      'Product testing and certification capability',
    ],
  },
];

export default function SupplierVerification() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section
      id="supplier-verification"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Factory Standards
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Supplier Verification &amp; Factory Coordination
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: '0.95rem',
              color: 'var(--slate)',
              lineHeight: 1.8,
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            Every manufacturer in the Mavero network has been personally visited, audited, and
            verified. We don&apos;t place your orders with unknown factories. We don&apos;t work with
            untested suppliers.
          </p>
        </div>

        {/* 3 cards */}
        <div
          ref={cardsRef}
          className="reveal grid md:grid-cols-3"
          style={{ gap: '1.5rem' }}
        >
          {CARDS.map(({ title, body, checks }, i) => (
            <div
              key={title}
              className={`reveal-delay-${i + 1}`}
              style={{
                background: 'var(--warm)',
                border: '1px solid rgba(184,148,74,0.2)',
                borderRadius: 4,
                padding: '2.5rem 2.25rem',
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(184,148,74,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(184,148,74,0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ width: 28, height: 2, background: 'var(--gold)', marginBottom: '1.25rem' }} />
              <h3
                className="font-display text-ink"
                style={{ fontSize: '1.4rem', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.2 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7, marginBottom: '1.5rem' }}
              >
                {body}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {checks.map((check) => (
                  <div key={check} className="flex items-start" style={{ gap: '0.625rem' }}>
                    <span
                      className="font-mono text-gold flex-shrink-0"
                      style={{ fontSize: '0.75rem', lineHeight: 1.6 }}
                    >
                      ✓
                    </span>
                    <p
                      className="font-body"
                      style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}
                    >
                      {check}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
