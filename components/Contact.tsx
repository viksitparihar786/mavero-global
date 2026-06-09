'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type FormData = {
  name: string;
  company: string;
  email: string;
  country: string;
  category: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const COUNTRIES = ['United Kingdom', 'United States', 'Germany', 'France', 'Australia', 'UAE / Middle East', 'Canada', 'Other'];
const CATEGORIES = ['Home Décor', 'Home Furnishing', 'Lighting', 'Furniture', 'Tableware', 'Garden & Outdoor', 'Lifestyle & Gifting', 'Custom / Multiple'];

const EMPTY: FormData = { name: '', company: '', email: '', country: '', category: '', message: '' };

const label: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--ff-mono)',
  fontSize: '0.65rem',
  letterSpacing: '0.12em',
  color: 'var(--gold)',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};

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

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [successName, setSuccessName] = useState('');

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name || formData.name.trim().length < 2) e.name = 'Please enter your name';
    if (!formData.company.trim()) e.company = 'Please enter your company name';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email';
    if (!formData.message || formData.message.trim().length < 10) e.message = 'Please describe your project (min. 10 characters)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessName(formData.name);
        setStatus('success');
        setFormData(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fieldError = (key: keyof FormData) =>
    errors[key] ? (
      <p style={{ color: '#ef4444', fontSize: '0.73rem', marginTop: '0.25rem' }}>{errors[key]}</p>
    ) : null;

  return (
    <section
      id="contact"
      style={{ background: 'var(--ink)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 4rem)' }}
    >
      <div ref={sectionRef} className="reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            Get in Touch
          </p>
          <h2
            className="font-display text-ivory"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem' }}
          >
            Tell Us What You&apos;re
            <br />
            Looking For.
          </h2>
          <p
            className="font-body"
            style={{ fontSize: '0.95rem', color: 'rgba(245,242,236,0.45)', maxWidth: 480 }}
          >
            A short form. A conversation. That&apos;s all it takes. We&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2" style={{ gap: 'clamp(3rem, 6vw, 6rem)' }}>
          {/* Form */}
          <div>
            {status === 'success' ? (
              <div style={{ padding: '3rem 0' }}>
                <div style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '1.25rem' }}>✓ Enquiry Sent</div>
                <h3
                  className="font-display text-ivory"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, marginBottom: '0.75rem', lineHeight: 1.2 }}
                >
                  Thank you, {successName}.
                  <br />
                  We&apos;ll respond within 24 hours.
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={label}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={{ ...inputBase, borderBottomColor: errors.name ? '#ef4444' : 'rgba(184,148,74,0.35)' }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = errors.name ? '#ef4444' : 'rgba(184,148,74,0.35)')}
                  />
                  {fieldError('name')}
                </div>

                {/* Company */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={label}>Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    style={{ ...inputBase, borderBottomColor: errors.company ? '#ef4444' : 'rgba(184,148,74,0.35)' }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = errors.company ? '#ef4444' : 'rgba(184,148,74,0.35)')}
                  />
                  {fieldError('company')}
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{ ...inputBase, borderBottomColor: errors.email ? '#ef4444' : 'rgba(184,148,74,0.35)' }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = errors.email ? '#ef4444' : 'rgba(184,148,74,0.35)')}
                  />
                  {fieldError('email')}
                </div>

                {/* Country + Category */}
                <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.75rem' }}>
                  <div>
                    <label style={label}>Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{ ...inputBase }}
                      onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')}
                    >
                      <option value="">Select country</option>
                      {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={label}>Product Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      style={{ ...inputBase }}
                      onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(184,148,74,0.35)')}
                    >
                      <option value="">Select category</option>
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={label}>Project Description *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sourcing requirements, product ideas, or quantities..."
                    rows={4}
                    style={{
                      ...inputBase,
                      height: 'auto',
                      minHeight: 100,
                      resize: 'vertical',
                      paddingTop: '0.5rem',
                      borderBottomColor: errors.message ? '#ef4444' : 'rgba(184,148,74,0.35)',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = errors.message ? '#ef4444' : 'rgba(184,148,74,0.35)')}
                  />
                  {fieldError('message')}
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
                  }}
                  onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold-lt)'; }}
                  onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold)'; }}
                >
                  {status === 'loading' ? (
                    <>
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          border: '2px solid rgba(13,13,11,0.25)',
                          borderTopColor: 'var(--ink)',
                          borderRadius: '50%',
                          animation: 'spin 0.7s linear infinite',
                          display: 'inline-block',
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    'Send Enquiry →'
                  )}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: '0.82rem', marginTop: '1rem', textAlign: 'center' }}>
                    Something went wrong. Please{' '}
                    <a href="mailto:director@maveroglobal.com" style={{ color: 'var(--gold)' }}>
                      get in touch
                    </a>{' '}
                    directly.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ paddingTop: '0.5rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="font-mono text-gold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Headquarters
              </p>
              <p className="font-body text-ivory" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                Mavero Global
                <br />
                Moradabad, Uttar Pradesh
                <br />
                India
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <p className="font-mono text-gold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Email
              </p>
              <a
                href="mailto:director@maveroglobal.com"
                className="font-body"
                style={{ fontSize: '0.95rem', color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid rgba(184,148,74,0.4)', paddingBottom: 2 }}
              >
                Send Us a Message
              </a>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <p className="font-mono text-gold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Response Time
              </p>
              <p className="font-body text-ivory" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                Within 24 hours
                <br />
                <span style={{ color: 'rgba(245,242,236,0.45)', fontSize: '0.85rem' }}>Mon–Sat</span>
              </p>
            </div>

            <div>
              <p className="font-mono text-gold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Markets Served
              </p>
              <p className="font-body" style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.5)', lineHeight: 1.8 }}>
                UK · EU · US · Canada · Australia · Middle East
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
