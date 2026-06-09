'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutImg from '@/assets/about-banner.png';

const STATS = [
  { value: '500+', line1: 'Verified', line2: 'Manufacturers' },
  { value: '7', line1: 'Product', line2: 'Categories' },
  // { value: '200+', line1: 'International', line2: 'Buyers' },
  { value: '12+', line1: 'Years of', line2: 'Experience' },
];

export default function About() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section
      id="about"
      style={{
        background: 'var(--warm)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            Who We Are
          </p>
          <h2
            className="font-display text-ink"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            About Mavero Global
          </h2>
        </div>

        {/* Two-column: text left, image right */}
        <div
          ref={contentRef}
          className="reveal grid md:grid-cols-[55%_45%]"
          style={{ marginBottom: '4rem', minHeight: 420 }}
        >
          {/* Left — story text */}
          <div
            style={{
              paddingRight: 'clamp(0px, 4vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.25rem',
              paddingBottom: 'clamp(2rem, 0px, 0px)',
            }}
          >
            <p className="font-body" style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8 }}>
              Mavero Global is a product sourcing and development company based in Moradabad, India —
              the country&apos;s leading home décor and lifestyle product export hub.
            </p>
            <p className="font-body" style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8 }}>
              We work as the India buying office for international home and lifestyle brands,
              retailers, importers, and wholesalers — handling everything from product development
              and supplier selection through to quality inspection and export coordination.
            </p>
            <p className="font-body" style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.8 }}>
              Our team has spent over 12 years building direct relationships with the workshops,
              artisans, and factories that produce India&apos;s finest home décor, lighting, furniture,
              tableware, and lifestyle products. We know which factories deliver — and we use that
              knowledge every day on behalf of our buyers.
            </p>
          </div>

          {/* Right — image */}
          <div
            className="relative overflow-hidden mt-8 md:mt-0"
            style={{ minHeight: 360, borderRadius: 4 }}
          >
            <Image
              src={aboutImg}
              alt="Mavero Global sourcing team meeting in Moradabad office"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Slight warm overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(250,245,236,0.07)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="reveal flex flex-wrap"
          style={{
            borderTop: '1px solid rgba(184,148,74,0.25)',
            paddingTop: '2.5rem',
          }}
        >
          {STATS.map(({ value, line1, line2 }, i) => (
            <div
              key={value}
              className={`reveal-delay-${i + 1} flex-1 text-center`}
              style={{
                padding: '1.5rem 1rem',
                borderRight:
                  i < STATS.length - 1 ? '1px solid rgba(184,148,74,0.25)' : 'none',
                minWidth: 120,
              }}
            >
              <p
                className="font-display text-gold"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1 }}
              >
                {value}
              </p>
              <p
                className="font-mono text-mist uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.12em', marginTop: '0.6rem', lineHeight: 1.6 }}
              >
                {line1}
                <br />
                {line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
