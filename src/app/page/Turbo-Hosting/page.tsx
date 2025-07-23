
import Navbar from "@/app/components/Navbar";
import React from "react";

import Footer from "@/app/components/Footer";
import HeroSection from "./component/HeroSection";
import PlanIncludesSection from "./component/PlanIncludesSection";
import PricingSection from "./component/PricingSection";
import FAQComponent from "../cloud-hosting/components/FAQComponent";
import PerformanceAndSupportSection from "./component/PerformanceAndSupportSection";
import ContactSection from "./component/ContactSection";
import OrderingProcessSection from './component/OrderingProcessSection';



export default function TurboHosting() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <PricingSection></PricingSection>
      <PlanIncludesSection></PlanIncludesSection>
      <PerformanceAndSupportSection></PerformanceAndSupportSection>
      <OrderingProcessSection />
      <ContactSection></ContactSection>
      
      <FAQComponent></FAQComponent>
  
      <Footer></Footer>
    </>
  );
} 