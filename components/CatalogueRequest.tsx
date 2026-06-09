'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CATEGORIES = [
  'Home Décor',
  'Metal & Brass Handicrafts',
  'Lighting',
  'Furniture',
  'Tableware & Serveware',
  'Garden & Outdoor',
  'Lifestyle & Gifting',
  'All Categories',
];

const BULLETS = [
  '500+ product references across 7 categories',
  'Indicative FOB pricing per category',
  'MOQ ranges per product type',
  'Material and finish options',
  'New arrival and seasonal collections',
];

type FormData = { name: string; company: string; email: string; country: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

const inputBase: React.CSSProperties = {
  width: '100%',
  height: 48,
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(184,148,74,0.35)',
  color: 'var(--ivory)',
  fontFamily: 'var(--ff-body)',
  fontSize: '0.95rem',
  outline: 'none',
  padding: '0 0 0.5rem',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--ff-mono)',
  fontSize: '0.6rem',
  letterSpacing: '0.12em',
  color: 'var(--gold)',
  textTransform: 'uppercase',
  marginBottom: '0.4rem',
};

export default function CatalogueRequest() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const [formData, setFormData] = useState<FormData>({ name: '', company: '', email: '', country: '' });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategoryChange = (cat: string, checked: boolean) => {
    if (cat === 'All Categories') {
      setSelectedCategories(checked ? CATEGORIES.filter((c) => c !== 'All Categories') : []);
      return;
    }
    setSelectedCategories((prev) => (checked ? [...prev, cat] : prev.filter((c) => c !== cat)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          category: selectedCategories.join(', ') || 'Not specified',
          formType: 'catalogue',
          message: `Catalogue Request. Categories: ${selectedCategories.join(', ') || 'Not specified'}`,
        }),
      });
      const data = await res.json();
      if (data.success) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="catalogue"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(3.75rem, 8vw, 6.25rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div
        className="grid md:grid-cols-2"
        style={{ maxWidth: 1200, margin: '0 auto', gap: 'clamp(3rem, 6vw, 6rem)' }}
      >
        {/* Left — content */}
        <div ref={leftRef} className="reveal">
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.875rem' }}
          >
            Product Catalogue
          </p>
          <h2
            className="font-display text-ivory"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Request Our Product Catalogue
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'rgba(245,242,236,0.75)', lineHeight: 1.8, marginBottom: '2rem' }}
          >
            We maintain a curated catalogue of available products across our sourcing categories —
            with product imagery, indicative FOB pricing, and MOQ information.
          </p>

          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.14em', marginBottom: '1.25rem' }}
          >
            What&apos;s included:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {BULLETS.map((b) => (
              <div key={b} className="flex items-start" style={{ gap: '0.875rem' }}>
                <span className="font-body text-gold flex-shrink-0" style={{ fontSize: '0.95rem' }}>→</span>
                <p className="font-body" style={{ fontSize: '0.9rem', color: 'rgba(245,242,236,0.7)', lineHeight: 1.6 }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div ref={rightRef} className="reveal">
          {status === 'success' ? (
            <div style={{ padding: '3rem 0' }}>
              <div style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '1rem' }}>✓&nbsp; Catalogue Request Received</div>
              <p className="font-body text-ivory" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                We will send your catalogue within 24 hours to{' '}
                <span style={{ color: 'var(--gold)' }}>{formData.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your Full Name" required style={inputBase}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')} />
              </div>
              {/* Company */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Company *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange}
                  placeholder="Company Name" required style={inputBase}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')} />
              </div>
              {/* Email */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="you@company.com" required style={inputBase}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')} />
              </div>
              {/* Country */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={labelStyle}>Country *</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange}
                  placeholder="Your Country" required style={inputBase}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')} />
              </div>

              {/* Categories */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ ...labelStyle, marginBottom: '1rem' }}>Categories of Interest</p>
                <div className="grid grid-cols-2" style={{ gap: '0.625rem' }}>
                  {CATEGORIES.map((cat) => (
                    <label
                      key={cat}
                      className="catalogue-checkbox-wrapper flex items-center font-body"
                      style={{ gap: '0.625rem', fontSize: '0.9rem', color: 'rgba(245,242,236,0.75)', cursor: 'pointer', padding: '5px 0' }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat) || (cat === 'All Categories' && selectedCategories.length === CATEGORIES.length - 1)}
                        onChange={(e) => handleCategoryChange(cat, e.target.checked)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-body"
                style={{
                  width: '100%',
                  height: 52,
                  background: status === 'loading' ? 'rgba(184,148,74,0.5)' : 'var(--gold)',
                  color: 'var(--ink)',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.2s',
                  marginBottom: '0.875rem',
                }}
                onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold-lt)'; }}
                onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold)'; }}
              >
                {status === 'loading' ? (
                  <>
                    <span style={{ width: 16, height: 16, border: '2px solid rgba(13,13,11,0.25)', borderTopColor: 'var(--ink)', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                    Sending…
                  </>
                ) : 'Request Catalogue →'}
              </button>

              <p className="font-mono text-mist text-center" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', lineHeight: 1.6 }}>
                We will respond within 24 hours · All enquiries are confidential
              </p>

              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '0.75rem', textAlign: 'center' }}>
                  Something went wrong. Please email{' '}
                  <a href="mailto:director@maveroglobal.com" style={{ color: 'var(--gold)' }}>get in touch</a>.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
