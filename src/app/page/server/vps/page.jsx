
import Navbar from "@/app/layout/Navbar";
import React from "react";

import Footer from "@/app/layout/Footer";
import HeroSection from "./component/HeroSection";

import FAQSection from "@/app/page/web-hosting/component/FAQSection";
import ComparisonTable from "./component/ComparisonTable";
import { vpsComparisonTableData } from "./data/vpsComparisonTableData";
import FeatureCards from "./component/FeatureCards";
import VpsFeaturesSection from "./component/VpsFeaturesSection";
import ContactSupportSection from "./component/ContactSupportSection";
import SupportedScriptsCarousel from "./component/SupportedScriptsCarousel";
import ReviewSection from "../../web-hosting/component/ReviewSection";

export default function Vps() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ComparisonTable data={vpsComparisonTableData} />
      <FeatureCards />
      <VpsFeaturesSection />
      <ContactSupportSection />
      <SupportedScriptsCarousel />
      <ReviewSection></ReviewSection>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </>
  );
} 