import Footer from "@/app/layout/Footer";
import Navbar from "@/app/layout/Navbar";
import HeroSection from "./component/HeroSection";
import DomainSearchSection from "./component/DomainSearchSection";
import DomainFeaturesSection from "./component/DomainFeaturesSection";
import SupportTeamSection from "./component/SupportTeamSection";
import FAQSection from "./component/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DomainSearchSection />
      <DomainFeaturesSection />
      <SupportTeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
