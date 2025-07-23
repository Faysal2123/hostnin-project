
import Navbar from "@/app/components/Navbar";
import React from "react";

import Footer from "@/app/components/Footer";
import PlanCarouselSection from "../BDIX-Hosting/component/PlanCarouselSection";

import ReviewSection from "@/app/components/ReviewSection";
import PerformanceAndSupportSection from "./component/PerformanceAndSupportSection";
import WebAppHostingSection from "./component/WebAppHostingSection";
import ResellerBenefitsSection from "./component/ResellerBenefitsSection";
import HeroSection from "./component/HeroSection";




export default function ResellerHosting() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ResellerBenefitsSection></ResellerBenefitsSection>
      <PerformanceAndSupportSection></PerformanceAndSupportSection>
       <ReviewSection></ReviewSection>
       <WebAppHostingSection></WebAppHostingSection>
       <PlanCarouselSection></PlanCarouselSection>
      <Footer></Footer>
    </>
  );
} 