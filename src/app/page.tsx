import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ControlPanelSection from "./page/home/ControlPanelSection";
import DomainSearchSection from "./page/home/DomainSearchSection";

import FeatureShowcaseSection from "./page/home/FeatureShowcaseSection";
import HeroSection from "./page/home/HeroSection";
import HostingPlansSection from "./page/home/HostingPlansSection";
import MigrationPromoSection from "./page/home/MigrationPromoSection";
import NewsletterSection from "./page/home/NewsletterSection";
import ReviewSection from "./page/home/ReviewSection";






export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <HeroSection></HeroSection>
      <HostingPlansSection></HostingPlansSection>
      <FeatureShowcaseSection></FeatureShowcaseSection>
      
      <MigrationPromoSection></MigrationPromoSection>
      <DomainSearchSection></DomainSearchSection>
      <ControlPanelSection></ControlPanelSection>
      <ReviewSection></ReviewSection>
      
     <NewsletterSection></NewsletterSection>
      
      <Footer></Footer>
    </div>
  );
}
