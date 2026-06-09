'use client';

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Step = {
  num: string;
  title: string;
  body: string;
  subTitle: string;
  items: string[];
};

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Product Brief & Requirements',
    body: 'You share your product requirements — category, design references, target price, quantity, and market destination. We ask the right questions to build a complete sourcing brief. No guesswork, no assumptions — just a clear brief both sides agree on.',
    subTitle: 'What we need from you:',
    items: [
      'Design reference, image, or mood board',
      'Target FOB price range',
      'Estimated order quantity',
      'Destination market',
    ],
  },
  {
    num: '02',
    title: 'Supplier Identification & Shortlisting',
    body: 'We search our network of 500+ verified manufacturers to identify the best-fit suppliers for your brief. We evaluate production capability, export experience, capacity, quality standards, and price competitiveness — and shortlist 2–3 options for your review.',
    subTitle: 'What we evaluate:',
    items: [
      'Factory capability vs your product brief',
      'Production capacity and lead time',
      'Export documentation experience',
      'Historical quality performance',
      'Price competitiveness',
    ],
  },
  {
    num: '03',
    title: 'Sampling & Approval',
    body: 'Selected suppliers produce samples to your specification. We inspect every sample before it leaves India — checking dimensions, finish, material quality, and compliance with your brief. Only approved samples proceed to production quote.',
    subTitle: 'Typical timeline:',
    items: [
      'Simple products (tableware, décor): 10–14 days',
      'Medium complexity (lighting, furniture): 2–3 weeks',
      'Custom development with tooling: 4–6 weeks',
    ],
  },
  {
    num: '04',
    title: 'Production & Follow-Up',
    body: 'Once you confirm your purchase order, production begins. We conduct weekly factory visits, track production against your agreed timeline, and send you photo and video updates throughout the process. No black holes, no chasing.',
    subTitle: 'We track throughout:',
    items: [
      'Weekly production milestones',
      'Raw material and component quality',
      'Workmanship against approved sample',
      'Packing and labelling compliance',
    ],
  },
  {
    num: '05',
    title: 'Pre-Shipment Quality Inspection',
    body: 'Before goods are packed for shipment, our QC team conducts a full pre-shipment inspection. We check quantity, quality, labelling, and packing against your approved sample and purchase order — and send you a full inspection report.',
    subTitle: 'Inspection covers:',
    items: [
      'Product quality vs approved sample',
      'Quantity count vs purchase order',
      'Labelling and packaging accuracy',
      'Carton strength and export marking',
    ],
  },
  {
    num: '06',
    title: 'Shipment Coordination & Documentation',
    body: 'We coordinate with freight forwarders, prepare all export documentation, and ensure your goods are dispatched on schedule. You receive full tracking details and a complete documentation package for customs clearance at destination.',
    subTitle: 'Documents we prepare:',
    items: [
      'Commercial invoice',
      'Packing list',
      'Certificate of origin',
      'Bill of lading / airway bill',
      'Phytosanitary certificate (where required)',
    ],
  },
];

const STEP_BG = ['var(--warm)', 'var(--cream)', 'var(--warm)', 'var(--cream)', 'var(--warm)', 'var(--cream)'];

export default function SourcingProcess() {
  const headerRef = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    section.querySelectorAll('.step-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="sourcing-process">
      {/* Header — on first step's background */}
      <div style={{ background: 'var(--warm)', padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem) 0' }}>
        <div ref={headerRef} className="reveal" style={{ maxWidth: 1200, margin: '0 auto', paddingBottom: '3rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            How It Works
          </p>
          <h2
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '0.875rem' }}
          >
            Our Sourcing Process — End to End
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.7 }}
          >
            From your first enquiry to goods delivered at your door.
          </p>
        </div>
      </div>

      {/* Steps */}
      {STEPS.map((step, i) => (
        <div key={step.num} style={{ background: STEP_BG[i] }}>
          <div
            className="step-item reveal"
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 4rem)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Large background number */}
            <span className="step-bg-number">{step.num}</span>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
              <p className="step-label">{step.num}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-body">{step.body}</p>
              <div className="step-subbox">
                <p className="step-subbox-title">{step.subTitle}</p>
                {step.items.map((item) => (
                  <p key={item} className="step-subbox-item">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
