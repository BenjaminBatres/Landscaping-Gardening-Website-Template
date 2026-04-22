import AbouSection from "./components/AbouSection";
import ChooseUsSection from "./components/ChooseUsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AbouSection />
      <ValuesSection />
      <ServicesSection />
      <ChooseUsSection />
      <GallerySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
