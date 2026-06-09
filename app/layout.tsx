import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap', 
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});


const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mavero Global',
    url: 'https://www.maveroglobal.com',
    description:
      'Mavero Global is a product sourcing and development company based in Moradabad, India. We source home décor, lighting, furniture, tableware and lifestyle products for international buyers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moradabad',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'director@maveroglobal.com',
      availableLanguage: 'English',
    },
    areaServed: [
      'United Kingdom',
      'United States',
      'European Union',
      'Canada',
      'Australia',
      'United Arab Emirates',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mavero Global',
    description:
      'Home décor and lifestyle product sourcing and development partner for international buyers. Based in Moradabad, India.',
    url: 'https://www.maveroglobal.com',
    email: 'director@maveroglobal.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moradabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '244001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.8386',
      longitude: '78.7733',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Product Sourcing and Development',
    provider: { '@type': 'Organization', name: 'Mavero Global' },
    description:
      'End-to-end product sourcing, development, quality control and export coordination for home décor and lifestyle brands sourcing from India.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sourcing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Sourcing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quality Control & Inspection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Label & OEM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Export Documentation & Logistics' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity to work with Mavero Global?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MOQs vary by product. For sampling there is no minimum. For production, typical MOQs range from 50–200 units per design.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does sampling take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sampling typically takes 2–4 weeks. Simple products 10–14 days, complex products up to 6 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What product categories do you source?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home Décor, Lighting, Furniture, Tableware, Serveware, Garden & Outdoor, Lifestyle & Gifting and Seasonal Collections from Moradabad, India.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer private label services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — custom design, branding applied in-factory, custom packaging, and retail-ready presentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What markets do you export to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UK, EU, US, Canada, Australia, UAE and broader Middle East markets.',
        },
      },
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maveroglobal.com'),
  title: {
    default: 'Mavero Global — Home & Lifestyle Product Sourcing from India',
    template: '%s | Mavero Global',
  },
  description:
    'Mavero Global is a product sourcing and development company based in Moradabad, India. We source home décor, lighting, furniture, tableware and lifestyle products for international buyers in UK, EU, US, Australia and Middle East.',
  keywords: [
    'home decor sourcing India',
    'lifestyle product sourcing India',
    'India buying office',
    'furniture sourcing India',
    'tableware manufacturer India',
    'Moradabad sourcing',
    'home decor export India',
    'product development India',
    'private label home decor India',
    'sourcing agent India home décor',
    'handicraft export Moradabad',
    'home lifestyle B2B sourcing',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://www.maveroglobal.com' },
  openGraph: {
    title: 'Mavero Global — Home & Lifestyle Product Sourcing from India',
    description:
      'Product development and sourcing for international home and lifestyle buyers. Based in Moradabad, India.',
    url: 'https://www.maveroglobal.com',
    siteName: 'Mavero Global',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mavero Global Sourcing',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavero Global — Home & Lifestyle Product Sourcing from India',
    description: 'Product development and sourcing for international home and lifestyle buyers.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
