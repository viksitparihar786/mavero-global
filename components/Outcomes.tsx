'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const OUTCOMES = [
  {
    title: 'From Brief to Production-Ready',
    desc: 'Share your idea, mood board, or reference product. We take it from there — supplier matching, sampling, revision rounds, and pre-production approval. You receive a product that\'s ready to sell.',
    label: '01',
  },
  {
    title: 'Consistent Quality, Every Order',
    desc: 'Our 3-stage QC process means every shipment is inspected against your approved sample before it leaves India. No surprises. No costly returns.',
    label: '02',
  },
  {
    title: 'One Contact. Full Visibility.',
    desc: 'One account manager. One email thread. You always know where your order is, who\'s making it, and when it ships. No chasing factories across time zones.',
    label: '03',
  },
];

export default function Outcomes() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            The Mavero Experience
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            What Buyers Experience.
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="reveal grid md:grid-cols-3"
          style={{ gap: '1.5rem' }}
        >
          {OUTCOMES.map(({ title, desc, label }, i) => (
            <div
              key={label}
              className={`reveal-delay-${i + 1}`}
              style={{
                background: 'var(--warm)',
                border: '1px solid rgba(184,148,74,0.12)',
                borderRadius: 4,
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                className="font-display text-ink absolute"
                style={{
                  fontSize: '6rem',
                  fontWeight: 300,
                  top: '-1rem',
                  right: '1rem',
                  lineHeight: 1,
                  opacity: 0.04,
                  userSelect: 'none',
                }}
              >
                {label}
              </span>
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: 'var(--gold)',
                  marginBottom: '1.5rem',
                }}
              />
              <h3
                className="font-display text-ink"
                style={{ fontSize: '1.35rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.875rem', color: 'var(--mist)', lineHeight: 1.7 }}
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
