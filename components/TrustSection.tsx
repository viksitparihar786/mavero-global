'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATEMENTS = [
  {
    title: 'One person accountable for everything.',
    body: "When you place an order through Mavero, one account manager is accountable from the moment you confirm your purchase order to the moment goods arrive at your warehouse. Not a factory. Not a freight agent. Not a call centre. One person who knows your order, your standards, and your business.",
  },
  {
    title: 'We tell you everything — including the difficult things.',
    body: "If a sample doesn't meet your standard, we tell you before you see it. If production is behind schedule, we tell you before you chase us. If a factory is not the right fit, we tell you before you place the order. No false promises. No surprises at shipment.",
  },
  {
    title: 'We are not interested in one-order relationships.',
    body: "Our model works when your business grows. The more we understand your brand, your customers, and your quality standards — the better we source for you, and the more efficiently we can develop your next range. We invest time in understanding your business because that is how we add the most value.",
  },
];

const BADGES = [
  { icon: '🏭', title: 'Moradabad-Based', sub: 'Direct factory access' },
  { icon: '📋', title: 'Since 2012', sub: '12+ years experience' },
  // { icon: '🌍', title: '200+ Buyers', sub: 'UK · EU · US · ME' },
  { icon: '✅', title: '3-Stage QC', sub: 'Pre-prod · Inline · Pre-ship' },
];

export default function TrustSection() {
  const headerRef = useScrollReveal();
  const statementsRef = useScrollReveal();
  const badgesRef = useScrollReveal();

  return (
    <section
      id="trust"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Before You Reach Out
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            What Working With Mavero Actually Means
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '1rem', color: 'var(--slate)', lineHeight: 1.8, maxWidth: 680, margin: '0 auto' }}
          >
            We know you have options. Here is an honest summary of what working with Mavero Global
            actually means — in plain language.
          </p>
        </div>

        {/* Trust statements */}
        <div ref={statementsRef} className="reveal" style={{ marginBottom: '4rem' }}>
          {STATEMENTS.map(({ title, body }, i) => (
            <div key={title}>
              {i > 0 && (
                <div style={{ textAlign: 'center', margin: '3rem 0' }}>
                  <hr style={{ display: 'inline-block', width: 80, border: 'none', borderTop: '1px solid rgba(184,148,74,0.55)', margin: 0 }} />
                </div>
              )}
              <div className={`reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <h3
                  className="font-display text-ink"
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.7rem)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                  }}
                >
                  &ldquo;{title}&rdquo;
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: '0.975rem',
                    color: 'var(--slate)',
                    lineHeight: 1.9,
                    maxWidth: 740,
                    margin: '0 auto',
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Badges row */}
        <div
          ref={badgesRef}
          className="reveal flex flex-wrap justify-center"
          style={{
            borderTop: '1px solid rgba(184,148,74,0.2)',
            paddingTop: '3rem',
            gap: 0,
          }}
        >
          {BADGES.map(({ icon, title, sub }, i) => (
            <div
              key={title}
              className="flex flex-col items-center text-center flex-1"
              style={{
                padding: '1rem 1.25rem',
                borderRight: i < BADGES.length - 1 ? '1px solid rgba(184,148,74,0.2)' : 'none',
                minWidth: 120,
              }}
            >
              <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</span>
              <p
                className="font-mono text-gold uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.12em', marginBottom: '0.25rem' }}
              >
                {title}
              </p>
              <p
                className="font-mono text-mist"
                style={{ fontSize: '0.55rem', letterSpacing: '0.08em' }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
