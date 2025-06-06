import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DemoSection from "./components/DemoSection";
import GallerySection from "./components/GallerySection";
import DomainSection from "./components/DomainSection";
import MilestonesSection from "./components/MilestonesSection";
import DocumentsSection from "./components/DocumentsSection";
import PresentationsSection from "./components/PresentationsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ContributionsSection from "./components/ContributionsSection";
import ReferencesSection from "./components/ReferencesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <GallerySection />
        <DomainSection />
        <MilestonesSection />
        <DocumentsSection />
        <PresentationsSection />
        <ContributionsSection />
        <AboutSection />
        <ContactSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}
