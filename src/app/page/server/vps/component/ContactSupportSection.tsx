"use client";
import FeatureCards from "@/app/components/card/FeatureCards";
import cardData from "@/app/page/web-hosting/data/cardData";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";
import FeatureCardsSection from "./FeatureCardsSection";
import SupportedScriptsCarousel from "./SupportedScriptsCarousel";

const ContactSupportSection = () => {
  return (
    <section className="bg-[#03206B]   px-2  sm:px-6 pt-8  lg:px-10 relative overflow-visible">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6">
            Have a question?<br className="hidden sm:block" />We're here to help!
          </h1>
          <p className="mb-2 my-2 sm:mb-3 text-base sm:text-lgs text-white/90">
            We're always standing by to help you in any way we can. From sales to navigating your service, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start items-center mt-8">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="text-xl">📞</span>
              <span>+880 1839 629477</span>
            </div>
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="text-xl">💬</span>
              <span>Chat Now</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] lg:w-[800px] lg:h-[600px]">
          {/* Placeholder image link as requested */}
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/08/support-team.png"
            alt="Support Banner" 
            width={800} 
            height={600} 
            className="object-contain w-full h-full" 
          />
        </div>
      </div>
      {/* Overlapping Feature Cards Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[19rem] z-20">
        <SupportedScriptsCarousel />
      </div>
    </section>
  );
};

export default ContactSupportSection;
