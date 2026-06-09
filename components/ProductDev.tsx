'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const STEPS = [
  {
    num: '01',
    title: 'Brief & Briefing',
    desc: 'Share your product vision, mood boards, and target price. We align on specifications before sourcing begins.',
  },
  {
    num: '02',
    title: 'Supplier Matching',
    desc: 'We identify the right workshop from our vetted network — matched by material, technique, and capacity.',
  },
  {
    num: '03',
    title: 'Sampling & Approval',
    desc: 'Prototypes developed and reviewed against your brief. Revision rounds until you approve.',
  },
  {
    num: '04',
    title: 'Production & Oversight',
    desc: 'Production begins after your sign-off. We monitor progress and communicate milestones.',
  },
  {
    num: '05',
    title: 'QC & Shipment',
    desc: 'Pre-shipment inspection against your approved sample. Export documentation managed and goods dispatched.',
  },
];

export default function ProductDev() {
  const headingRef = useScrollReveal();
  const stepsRef = useScrollReveal();

  return (
    <section
      id="product-dev"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headingRef} className="reveal" style={{ marginBottom: '4rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            Product Development
          </p>
          <h2
            className="font-display text-ivory"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            From Brief to Shipment
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="reveal">
          {/* Desktop — horizontal */}
          <div className="hidden md:flex relative" style={{ gap: 0 }}>
            {/* Connecting line */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                left: '10%',
                right: '10%',
                height: 1,
                background: 'rgba(184,148,74,0.5)',
                zIndex: 0,
              }}
            />
            {STEPS.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`reveal-delay-${i + 1} flex-1 flex flex-col items-center text-center`}
                style={{ padding: '0 1rem', position: 'relative', zIndex: 1 }}
              >
                {/* Number bubble */}
                <div
                  className="font-mono text-gold"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    background: 'var(--ink)',
                    border: '1px solid rgba(184,148,74,0.4)',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  {num}
                </div>
                <h3
                  className="font-display text-ivory"
                  style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem', lineHeight: 1.2 }}
                >
                  {title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.65)', lineHeight: 1.6 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile — vertical */}
          <div className="flex flex-col md:hidden" style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 17,
                top: 36,
                bottom: 36,
                width: 1,
                background: 'rgba(184,148,74,0.5)',
              }}
            />
            {STEPS.map(({ num, title, desc }) => (
              <div
                key={num}
                className="flex"
                style={{ gap: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}
              >
                <div
                  className="font-mono text-gold flex-shrink-0"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    background: 'var(--ink)',
                    border: '1px solid rgba(184,148,74,0.4)',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                >
                  {num}
                </div>
                <div style={{ paddingTop: '0.4rem' }}>
                  <h3
                    className="font-display text-ivory"
                    style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem', lineHeight: 1.2 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.65)', lineHeight: 1.6 }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
