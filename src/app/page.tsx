import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureTabSection from "./components/FeatureTabSection";
import FeatureBenefitSection from "./components/FeatureBenefit";
import DomainSearchSection from "./components/DomainSearchSection";
import PricingCards from "./components/card/PricingCards";
import TestimonialSection from "./components/TestimonialSection";
import PartnersSection from "./components/PartnersSection";
import GuaranteeSection from "./components/GuaranteeSection";
import FeatureDifferenceSection from "./components/FeatureDifferenceSection";
import FeatureHighlightSection from "./components/FeatureHighlightSection";
import ContactSalesSection from "./components/ContactSalesSection";
import ReviewSection from "./components/ReviewSection";
import FAQSection from "./components/FAQSection";
import MigrationPromoSection from "./components/MigrationPromoSection";
import Footer from "./components/Footer";
import DiscountBanner from "./components/DiscountBanner";



export default function Home() {
  return (
    <div className="min-h-screen">
      <DiscountBanner></DiscountBanner>
      <Navbar />
      <HeroSection />
      
      <PricingCards />
      <TestimonialSection />
      <DomainSearchSection />
      <PartnersSection />
      <FeatureBenefitSection />
      <GuaranteeSection />
      <FeatureDifferenceSection />
      <FeatureHighlightSection />
      <ContactSalesSection />
      <FeatureTabSection />
      <ReviewSection />
      <MigrationPromoSection />
      <FAQSection />
      <Footer></Footer>
    </div>
  );
}
