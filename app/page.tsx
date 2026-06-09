import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhyIndia from '@/components/WhyIndia';

const About = dynamic(() => import('@/components/About'));
const WhyMavero = dynamic(() => import('@/components/WhyMavero'));
const WhyMoradabad = dynamic(() => import('@/components/WhyMoradabad'));
const Products = dynamic(() => import('@/components/Products'));
const SourcingProcess = dynamic(() => import('@/components/SourcingProcess'));
const ProductDev = dynamic(() => import('@/components/ProductDev'));
const PrivateLabel = dynamic(() => import('@/components/PrivateLabel'));
const Quality = dynamic(() => import('@/components/Quality'));
const SupplierVerification = dynamic(() => import('@/components/SupplierVerification'));
const PackagingLabelling = dynamic(() => import('@/components/PackagingLabelling'));
const ExportLogistics = dynamic(() => import('@/components/ExportLogistics'));
const Buyers = dynamic(() => import('@/components/Buyers'));
const Outcomes = dynamic(() => import('@/components/Outcomes'));
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });
const CatalogueRequest = dynamic(() => import('@/components/CatalogueRequest'), { ssr: false });
const TrustSection = dynamic(() => import('@/components/TrustSection'));
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyIndia />
      <About />
      <WhyMavero />
      <WhyMoradabad />
      <Products />
      <SourcingProcess />
      <ProductDev />
      <PrivateLabel />
      <Quality />
      <SupplierVerification />
      <PackagingLabelling />
      <ExportLogistics />
      <Buyers />
      <Outcomes />
      <FAQ />
      <CatalogueRequest />
      <TrustSection />
      <Contact />
      <Footer />
    </main>
  );
}
