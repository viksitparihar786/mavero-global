'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import packageImg from '@/assets/packaging.png'

const ITEMS = [
  {
    num: '01',
    title: 'Retail-Ready Packaging',
    body: 'We coordinate all retail packaging — individual product boxes, display packaging, gift packaging, and export cartons. Your product arrives at the destination warehouse shelf-ready, not in bulk bags.',
  },
  {
    num: '02',
    title: 'Custom Labelling & Tags',
    body: 'Country of origin labels, barcode labels, care labels, product specification tags, and brand hang tags — all applied in-factory to your specification before shipment.',
  },
  {
    num: '03',
    title: 'Buyer-Specific Compliance',
    body: 'We follow your specific packaging and labelling requirements — whether for Amazon FBA inbound, UK retail chain compliance, EU packaging directives, or your own warehouse intake process.',
  },
  {
    num: '04',
    title: 'Sustainable Packaging Options',
    body: 'Recycled cardboard, FSC-certified paper, minimal plastic, biodegradable void fill — we source sustainable packaging materials and options on request.',
  },
];

export default function PackagingLabelling() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="packaging" style={{ background: 'var(--ink)' }}>
      <div
        className="grid md:grid-cols-[55%_45%]"
        style={{ maxWidth: '100%' }}
      >
        {/* Left — content */}
        <div style={{ padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 5vw, 4rem)' }}>
          {/* Header */}
          <div ref={headerRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p
              className="font-mono text-gold uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
            >
              Packaging &amp; Presentation
            </p>
            <h2
              className="font-display text-ivory"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
            >
              Packaging, Labelling &amp; Retail Presentation
            </h2>
          </div>

          {/* Items */}
          <div ref={contentRef} className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            {ITEMS.map(({ num, title, body }, i) => (
              <div
                key={num}
                className={`reveal-delay-${i + 1} flex`}
                style={{
                  gap: '1.5rem',
                  paddingTop: i === 0 ? 0 : '2rem',
                  paddingBottom: '2rem',
                  borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(184,148,74,0.15)' : 'none',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number */}
                <span
                  className="font-display text-gold flex-shrink-0"
                  style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1, opacity: 0.8 }}
                >
                  {num}
                </span>
                {/* Text */}
                <div>
                  <h3
                    className="font-body text-ivory"
                    style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1.3 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: '0.9rem', color: 'rgba(245,242,236,0.65)', lineHeight: 1.8 }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden" style={{ minHeight: 'clamp(320px, 60vw, 100%)' }}>
          <Image
            src={packageImg}
            alt="Retail packaging and product labelling for export"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Subtle dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(13,13,11,0.2)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
