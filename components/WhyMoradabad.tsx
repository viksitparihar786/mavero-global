'use client';

import Image from 'next/image';
import exportImg from '@/assets/export-banner.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FACTS = [
  '5,000+ manufacturing units in the Moradabad cluster',
  '$1B+ annual home décor and lifestyle export value',
  // 'Exports to 150+ countries worldwide',
  'Direct factory access — no intermediary layers',
];

export default function WhyMoradabad() {
  const contentRef = useScrollReveal();

  return (
    <section id="moradabad" style={{ background: 'var(--cream)' }}>
      <div className="grid md:grid-cols-2">
        {/* Left — image panel */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(300px, 50vw, 560px)' }}
        >
          <Image
            src={exportImg}
            alt="Brass handicraft artisan workshop in Moradabad India"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,13,11,0.6) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          {/* Bottom-left label */}
          <span
            className="absolute font-mono text-gold uppercase z-10"
            style={{
              bottom: '1.25rem',
              left: '1.25rem',
              fontSize: '0.5rem',
              letterSpacing: '0.2em',
            }}
          >
            Moradabad, Uttar Pradesh, India
          </span>
        </div>

        {/* Right — content */}
        <div
          ref={contentRef}
          className="reveal"
          style={{
            background: 'var(--warm)',
            padding: 'clamp(3rem, 7vw, 5rem) clamp(1.75rem, 5vw, 3.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            India&apos;s Export Hub
          </p>
          <h2
            className="font-display text-ink"
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            India&apos;s Home Décor
            <br />
            Export Capital
          </h2>

          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8, marginBottom: '1.25rem' }}
          >
            Moradabad is one of India&apos;s most important home décor and lifestyle export hubs — known
            for both its craft heritage and its modern manufacturing capability across metal, wood,
            and decorative products. The city and surrounding regions account for over $1 billion
            in annual home décor exports to global markets.
          </p>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8, marginBottom: '2.5rem' }}
          >
            Mavero Global is based in Moradabad, giving us direct, daily access to the manufacturers,
            workshops, and artisans who produce the products your customers love. No travel, no
            delays — we are already there.
          </p>

          {/* Fact bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {FACTS.map((fact) => (
              <div key={fact} className="flex items-start" style={{ gap: '0.875rem' }}>
                <span
                  className="font-body text-gold flex-shrink-0"
                  style={{ fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.05rem' }}
                >
                  →
                </span>
                <p
                  className="font-body"
                  style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.6 }}
                >
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
