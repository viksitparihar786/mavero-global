'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) to work with Mavero Global?',
    a: 'MOQs vary by product and factory. For sampling, there is no minimum — we work with single samples. For production orders, typical MOQs range from 50–200 units per design depending on the product category. We always negotiate the lowest realistic MOQ for new buyers.',
  },
  {
    q: 'How long does sampling take?',
    a: 'Sampling typically takes 2–4 weeks from brief confirmation. Simple products such as tableware or basic home décor can be sampled in 10–14 days. More complex products with custom tooling or multi-component construction may take 4–6 weeks.',
  },
  {
    q: 'Can I visit the factories in India?',
    a: 'Yes — we welcome and actively encourage buyer visits to Moradabad. We coordinate your factory tour, meetings with multiple suppliers, and can assist with local accommodation and logistics. Many of our buyers visit during development seasons each year.',
  },
  // {
  //   q: 'How do you handle quality issues if they arise?',
  //   a: 'If quality issues are identified during our pre-shipment QC inspection, we work with the factory to rectify before shipment at no additional cost to you. If an issue surfaces at destination, we investigate with the factory and resolve through rework, credit, or replacement depending on the nature and severity.',
  // },
  {
    q: 'What markets do you export to?',
    a: 'We currently serve buyers in the United Kingdom, European Union, United States, Canada, Australia, UAE, and broader Middle East markets. We are familiar with the import requirements, labelling standards, and compliance needs of each market.',
  },
  {
    q: 'Do you handle freight and shipping?',
    a: 'We coordinate with your nominated freight forwarder or can recommend our established freight partners. We prepare all India-side export documentation. Freight costs are typically paid by the buyer, but we manage all coordination from the India side.',
  },
  {
    q: 'Can you develop a completely new product from scratch?',
    a: 'Yes — product development is one of our core capabilities. You bring a mood board, a reference image, or a product concept. We turn it into a manufacturable brief, match it to the right factory, manage sample development rounds, and take it to production.',
  },
  {
    q: 'Do you offer private label and OEM services?',
    a: 'Yes. We manage the full private label process — custom design, your branding applied in-factory, custom packaging, and retail-ready presentation. We work with buyers from initial product concept through to labelled, shelf-ready goods.',
  },
  // {
  //   q: 'How do your fees work?',
  //   a: 'Our sourcing fee is agreed transparently upfront before any work begins. Payment terms with the factory are typically 30% advance and 70% before shipment or against the bill of lading — agreed directly between you and the manufacturer.',
  // },
  {
    q: 'How do I get started?',
    a: 'Fill in our enquiry form with your product category, design references, target price, and quantity. We will respond within 24 hours with initial thoughts and a proposed next step.',
  },
  {
    q: 'What product categories do you cover?',
    a: 'We specialise in Home Décor, Metal and Brass Handicrafts, Lighting, Furniture (wood and metal), Tableware, Serveware, Garden and Outdoor, Lifestyle and Gifting, and Seasonal Collections — all sourced from Moradabad and other major Indian craft clusters.',
  },
  // {
  //   q: 'Is there a fee to receive a quote or initial sourcing brief?',
  //   a: 'No. Initial consultation, sourcing brief preparation, and supplier shortlisting are provided at no charge. Our fees apply once active development or production sourcing work begins, and are always confirmed in writing before we start.',
  // },
];

export default function FAQ() {
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        background: 'var(--ivory)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Common Questions
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion container */}
        <div
          ref={listRef}
          className="reveal"
          style={{
            background: '#fff',
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            borderRadius: 4,
            border: '1px solid rgba(184,148,74,0.15)',
          }}
        >
          {FAQS.map((item, i) => (
            <div key={i} className={openIndex === i ? 'faq-item open' : 'faq-item'}>
              <button onClick={() => toggle(i)} className="faq-question">
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-text">{item.q}</span>
                <span className={`faq-chevron ${openIndex === i ? 'open' : ''}`}>›</span>
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
