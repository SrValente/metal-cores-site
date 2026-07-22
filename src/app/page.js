import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection id="hero" />
        <ClientsSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
