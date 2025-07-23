
import Navbar from "@/app/components/Navbar";
import React from "react";

import Footer from "@/app/components/Footer";
import HeroSection from "./component/HeroSection";
import PricingSection from "./component/PricingSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import WordpressHighlightsSection from "./component/WordpressHighlightsSection";
import FAQSection from "@/app/components/FAQSection";
import StatsSection from "./component/StatsSection";
import PlanIncludesSection from "./component/PlanIncludesSection";
import SignupHeroSection from "./component/SignupHeroSection";
import WordpressReview from "./component/WordpressReview";



export default function WordpressHosting() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <WordpressHighlightsSection></WordpressHighlightsSection>
      <StatsSection></StatsSection>
      <PlanIncludesSection />
      <SignupHeroSection></SignupHeroSection>
      <WordpressReview></WordpressReview>
      <FAQSection></FAQSection>
  
      <Footer></Footer>
    </>
  );
} 