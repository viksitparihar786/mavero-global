'use client';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import img1 from '@/assets/img01.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img02.jpg';
import img4 from '@/assets/img04b.png';
import img5 from '@/assets/img05a.png';
import img6 from '@/assets/fire.jpg';
import img7 from '@/assets/fire-tool.jpg';
import img8 from '@/assets/img08.jpg';
import img9 from '@/assets/img09.jpg';
import img10 from '@/assets/tableware.jpg';
import img11 from '@/assets/img011.jpg';
import img12 from '@/assets/img012.jpg';

const CATEGORIES = [
  { name: 'LANTERNS', src: img1, alt: 'Decorative lanterns' },
  { name: 'CANDLE HOLDERS', src: img2, alt: 'Candle holders' },
  { name: 'PLANTERS', src: img3, alt: 'Metal and wooden planters' },
  { name: 'WALL DÉCOR & MIRRORS', src: img4, alt: 'Wall décor and mirrors' },
  { name: 'ACCENT TABLES', src: img5, alt: 'Accent tables' },
  { name: 'FIREPITS', src: img6, alt: 'Firepits' },
  { name: 'FIREPLACE TOOLS', src: img7, alt: 'Fireplace tools' },
  { name: 'WINE CHILLERS & BEER BUCKETS', src: img8, alt: 'Wine chillers and beer buckets' },
  { name: 'GARDEN ACCESSORIES', src: img9, alt: 'Garden accessories' },
  { name: 'TABLEWARE', src: img10, alt: 'Wooden tableware' },
  { name: 'SERVEWARE', src: img11, alt: 'Wooden serveware' },
  { name: 'AND MANY MORE', src: img12, alt: 'Decorative trays and centerpieces' },
];

const BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUHCP/EACIQAAEEAgIDAQAAAAAAAAAAAAEAAgMEESExBRJBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCt0q7HXhsWHuD3SNLi0HkBVWnuJsmdYkke85c4kn86IiAHFnJJJ5JJJJJJJJJJNf/Z';

export default function Products() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="products"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div ref={headingRef} className="reveal" style={{ marginBottom: '3rem' }}>
          <p
            className="font-mono text-gold uppercase"
            style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginBottom: '0.75rem' }}
          >
            What We Source
          </p>
          <h2
            className="font-display text-ivory"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            Product Categories
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ gap: '1rem' }}
        >
          {CATEGORIES.map(({ name, src, alt }, i) => (
            <div
              key={name}
              className={`reveal-delay-${Math.min(i + 1, 4)} group relative overflow-hidden cursor-pointer`}
              style={{
                borderRadius: 4,
                aspectRatio: '4/3',
                border: '1px solid transparent',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
            >
              <Image
                src={src}
                alt={alt}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="group-hover:scale-[1.04]"
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, transparent 72%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Category label */}
              <span
                className="absolute bottom-4 left-4 font-display text-ivory"
                style={{ fontSize: '1.25rem', fontWeight: 400, lineHeight: 1, zIndex: 1 }}
              >
                {name}
              </span>

              {/* Arrow */}
              <span
                className="absolute bottom-4 right-4 text-gold"
                style={{ fontSize: '1.1rem', zIndex: 1, transition: 'transform 0.2s' }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}