"use client";
import FeatureCards from "@/app/components/card/FeatureCards";
import cardData from "@/app/page/web-hosting/data/cardData";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";
import FeatureCardsSection from "./FeatureCardsSection";

const HeroSection = () => {
  return (
    <section className="bg-[#03206B] pt-8 pb-32 px-2 sm:pt-12 sm:pb-36 sm:px-6 lg:pt-28 lg:pb-44 lg:px-10 relative overflow-visible">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-white font-semibold mb-2 text-base sm:text-xl">
            Lightning-fast with 100% NVMe storage
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
            We Provide High<br className="hidden sm:block" /> Performance VPS
          </h1>
          <p className="mb-2 my-2 sm:mb-3 text-base sm:text-xl text-white/90">
            VPS Starter plan - Starting at <span className="text-yellow-400">৳1999/mo</span>
          </p>
          <ul className="flex flex-col gap-y-2 justify-center lg:justify-start mb-6 sm:mb-8 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span>Unbeatable Performance, Security, & Updates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span>Deploy standard distro, 1-click app or custom image</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl"><MdDone /></span>
              <span>Spin up your VPS in 50s</span>
            </li>
          </ul>
          <button className="bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold px-8 py-3 rounded-full transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10">
            Buy VPS Hosting
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] lg:w-[800px] lg:h-[600px]">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/vps-header-1.png"
            alt="Server Illustration" 
            width={800} 
            height={600} 
            className="object-contain w-full h-full" 
          />
        </div>
      </div>
      {/* Overlapping Feature Cards Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[22rem] z-20">
        <FeatureCardsSection />
      </div>
    </section>
  );
};

export default HeroSection;
