import Image from 'next/image';
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

const productGrid = [
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

export default function Hero() {
  return (
    <section className="hero-v2" id="hero">
      {/* Left panel */}
      <div className="hero-left">
        <p
  className="hero-eyebrow"
  style={{
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    letterSpacing: "0.08em",
    lineHeight: 1.4,
    textTransform: "uppercase",
  }}
>
  TIMELESS CRAFT,
  <br />
  Global Living.
</p>
        <h1 className="hero-h1">
          Mavero
          <br />
          Global
        </h1>
        <div className="hero-rule" />
        <p
  className="hero-sub"
  style={{
    fontFamily: "var(--font-body)",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    color: "#5b5b5b",
    fontWeight: 400,
  }}
>
  We source and supply premium home, garden and lifestyle
  <br />
  products from India. Handcrafted with care,
  <br />
  Delivered worldwide.
</p>
        <a href="#products" className="hero-cta">
          Explore Collection
        </a>

        {/* Icon grid */}
        {/* <div className="hero-icon-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="hero-icon-item">
              <div className="hero-icon">{cat.icon}</div>
              <span className="hero-icon-label">{cat.name}</span>
            </div>
          ))}
        </div> */}
      </div>

      {/* Right panel — 3×4 product image grid */}
      <div className="hero-right">
        {productGrid.map((img) => (
          <div key={img.name} className="hero-product-cell">
            <div className="hero-product-image">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                fetchPriority="high"
                quality={85}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="hero-product-label">{img.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
