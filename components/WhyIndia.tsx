'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const REASONS = [
  {
    title: 'Cost Advantage',
    desc: 'Labour and material costs significantly lower than China, Vietnam and Europe — without compromising on craftsmanship or finish quality.',
  },
  {
    title: 'Artisan Expertise',
    desc: "Generations of craft tradition in metal, wood, natural materials and hand finishing — skills and techniques that simply don't exist at scale elsewhere.",
  },
  {
    title: 'Diverse Materials',
    desc: 'Brass, iron, reclaimed wood, mango wood, glass, natural fibres, rattan, cane, marble — one country, every material your range needs.',
  },
  {
    title: 'Scalable Production',
    desc: "From 50-unit samples to 50,000-unit production runs — India's manufacturing base scales to your business size and growth.",
  },
];

export default function WhyIndia() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section
      id="why-india"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      <div
        className="grid md:grid-cols-[40%_1fr]"
        style={{ maxWidth: 1200, margin: '0 auto', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start' }}
      >
        {/* Left — text */}
        <div ref={leftRef} className="reveal">
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            The Opportunity
          </p>
          <h2
            className="font-display text-ink"
            style={{
              fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}
          >
            Why Source Home &amp; Lifestyle Products From India?
          </h2>

          <p
            className="font-display text-ink"
            style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              lineHeight: 1.4,
              fontStyle: 'italic',
              color: 'var(--slate)',
              borderLeft: '2px solid var(--gold)',
              paddingLeft: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            India is the world&apos;s most diverse sourcing destination for home and lifestyle products.
          </p>

          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8, marginBottom: '1.25rem' }}
          >
            India&apos;s artisan manufacturing clusters produce product quality and variety that no other
            market can match at competitive cost — sourced direct from Moradabad and the wider
            export region.
          </p>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8 }}
          >
            For international buyers, India represents the single best opportunity to build a
            differentiated, quality product range — if you have the right partner on the ground.
          </p>
        </div>

        {/* Right — 6 reason cards in 2×3 grid */}
        <div
          ref={rightRef}
          className="reveal grid sm:grid-cols-2"
          style={{ gap: '1rem' }}
        >
          {REASONS.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`reveal-delay-${Math.min(i + 1, 4)}`}
              style={{
                background: '#ffffff',
                borderLeft: '3px solid var(--gold)',
                padding: '1.5rem',
                borderRadius: '0 2px 2px 0',
                transition: 'box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 4px 20px rgba(184,148,74,0.12)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <h3
                className="font-body text-ink"
                style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.7 }}
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
