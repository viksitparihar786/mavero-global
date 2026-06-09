'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import labelImg from '@/assets/private-label.png';

const ITEMS = [
  {
    num: '01',
    title: 'Custom Design & Development',
    desc: 'Your design brief or reference image translated into a manufacturable product specification, with full factory coordination and revision rounds until it meets your standard.',
  },
  {
    num: '02',
    title: 'Sampling & Revision Rounds',
    desc: 'Multiple sample rounds managed end to end. We handle all factory communication — you simply review samples and give feedback. No direct factory negotiation required.',
  },
  {
    num: '03',
    title: 'Your Branding Applied In-Factory',
    desc: 'Labels, swing tags, embossing, printing, stickers, and brand packaging applied at the factory before shipment. Your product arrives branded and ready.',
  },
  {
    num: '04',
    title: 'Custom Packaging',
    desc: 'We work with packaging suppliers to create product boxes, gift packaging, display packaging, and retail-ready carton presentation to your specification.',
  },
  {
    num: '05',
    title: 'MOQ Negotiation',
    desc: 'We negotiate realistic minimum order quantities with factories for new private label ranges — balancing your cash flow with factory requirements.',
  },
  {
    num: '06',
    title: 'Compliance Coordination',
    desc: 'We coordinate product testing and compliance certification required for your target market — including CE marking, REACH compliance, and California Prop 65 where applicable.',
  },
];

export default function PrivateLabel() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section
      id="private-label"
      style={{ background: 'var(--ink)' }}
    >
      <div
        className="grid md:grid-cols-[55%_45%]"
        style={{ maxWidth: '100%' }}
      >
        {/* Left — content */}
        <div
          style={{
            padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          {/* Header */}
          <div ref={headerRef} className="reveal" style={{ marginBottom: '3rem' }}>
            <p
              className="font-mono text-gold uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
            >
              OEM &amp; Private Label
            </p>
            <h2
              className="font-display text-ivory"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}
            >
              Private Label &amp; Custom Product Development
            </h2>
            <p
              className="font-body"
              style={{ fontSize: '0.95rem', color: 'rgba(245,242,236,0.75)', lineHeight: 1.8, maxWidth: 560 }}
            >
              If you are building your own brand, Mavero Global provides complete private label and OEM
              capability — from product design through to branded, shelf-ready goods ready for your
              warehouse or retail floor.
            </p>
          </div>

          {/* Items list */}
          <div ref={contentRef} className="reveal">
            <p
              className="font-mono text-gold uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.14em', marginBottom: '1.75rem' }}
            >
              What We Handle:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {ITEMS.map(({ num, title, desc }, i) => (
                <div
                  key={num}
                  className={`reveal-delay-${Math.min(i + 1, 4)}`}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingTop: i === 0 ? 0 : '1.75rem',
                    paddingBottom: '1.75rem',
                    borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(184,148,74,0.12)' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    className="font-display text-gold flex-shrink-0"
                    style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.1, opacity: 0.8 }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      className="font-body text-ivory"
                      style={{ fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.375rem', lineHeight: 1.3 }}
                    >
                      {title}
                    </h3>
                    <p
                      className="font-body"
                      style={{ fontSize: '0.9rem', color: 'rgba(245,242,236,0.68)', lineHeight: 1.75 }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden" style={{ minHeight: 'clamp(320px, 60vw, 100%)' }}>
          <Image
            src={labelImg}
            alt="Custom branded home decor product packaging"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ objectFit: 'cover', objectPosition: 'top top' }}
          />
          {/* Gold tint overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(184,148,74,0.06)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
