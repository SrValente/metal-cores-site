import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ClientsSection from '../components/ClientsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import PdfViewerSection from '../components/PdfViewerSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <PortfolioSection />
        <PdfViewerSection />
      </main>
      <Footer />
    </>
  );
}
