'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const CAPABILITIES = [
  {
    title: 'Manufacturer Access',
    desc: 'Direct relationships with 500+ vetted workshops and manufacturers across Moradabad and the surrounding export region — matched to your product category and quality standard.',
    icon: '◎',
  },
  {
    title: 'Material Sourcing',
    desc: 'Brass, iron, wood, glass, marble, natural fibres, rattan, cane, stonework — sourced from specialist clusters and matched to your product brief.',
    icon: '◈',
  },
  {
    title: 'Custom Development',
    desc: 'Full product development from concept to production — briefs, CAD references, material selection, prototyping, revision rounds, and pre-production approval.',
    icon: '◇',
  },
  {
    title: 'Export Handling',
    desc: 'Commercial invoice, packing list, certificate of origin, shipping bill — we manage full export documentation and freight coordination.',
    icon: '◰',
  },
];

export default function Capability() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="capability"
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
            Sourcing Capability
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            What We Handle For You
          </h2>
        </div>

        {/* 2×2 grid */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2"
          style={{ gap: '1.5px', background: 'rgba(184,148,74,0.15)' }}
        >
          {CAPABILITIES.map(({ title, desc, icon }, i) => (
            <div
              key={title}
              className={`reveal-delay-${i + 1}`}
              style={{
                background: 'var(--cream)',
                padding: '2.25rem 2rem',
              }}
            >
              <div
                className="font-mono text-gold"
                style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.7 }}
              >
                {icon}
              </div>
              <h3
                className="font-display text-ink"
                style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.7 }}
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
