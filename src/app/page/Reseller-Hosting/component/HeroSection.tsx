"use client";
import FeatureCards from "./FeatureCards";


import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";
import resellerPricingPlans from "../data/cardData";



const HeroSection = () => {
  

  

  return (
    <section
      className="pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://hostnin.com/wp-content/uploads/2022/09/hero-bg-scaled-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" aria-hidden="true"></div>
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Side */}
        <div className=" text-center flex  mb-8 lg:mb-0 justify-center">
         
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
          KickStart Your Business
            <br className="hidden sm:block" />
            with Our Hosting Plans!
          </h1>

          <ul className="mb-6 my-5 sm:mb-8 space-y-2 text-sm sm:text-base flex">
            <li className="flex items-center gap-2 justify-center ">
              <span className="text-lg sm:text-xl">
                <MdDone />
              </span>
              <span>Free .COM Domain on Trinnially</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl">
                <MdDone />
              </span>
              <span>Genuine & Latest Control Panel</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl">
                <MdDone />
              </span>
              <span>Free WildCard SSL for Lifetime</span>
            </li>
          </ul>

         
          

          <button className="bg-yellow-400 hover:bg-blue-500 hover:text-white text-[#03206B] font-semibold px-4 sm:px-8 lg:px-10 py-2 sm:py-3 rounded transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10">
            Claim Offer
          </button>
        </div>

        
        
      </div>

      {/* Feature Cards at Bottom */}
      <div className="relative z-10">
        <FeatureCards cards={resellerPricingPlans}  bottom="-80px sm:-120px lg:-180px" />
      </div>
    </section>
  );
};

export default HeroSection;
