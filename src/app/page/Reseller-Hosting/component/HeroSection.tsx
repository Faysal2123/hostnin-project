"use client";
import FeatureCards from "./FeatureCards";

import { MdDone } from "react-icons/md";
import resellerPricingPlans from "../data/cardData";



const HeroSection = () => {
  

  

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[750px] md:min-h-[850px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://hostnin.com/wp-content/uploads/2022/09/hero-bg-scaled-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" aria-hidden="true"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          KickStart Your Business
          <br className="hidden sm:block" />
          with Our Hosting Plans!
        </h1>
        <ul className="flex flex-row items-center justify-center gap-8 mb-8 text-base sm:text-lg font-semibold">
          <li className="flex items-center gap-2">
            <span className="text-xl text-blue-400"><MdDone /></span>
            <span>Blazing Performance</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl text-blue-400"><MdDone /></span>
            <span>24/7 Support</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl text-blue-400"><MdDone /></span>
            <span>Unlimited Features</span>
          </li>
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition text-base sm:text-lg shadow mb-6 flex items-center justify-center">
          View Pricing <span className="ml-2">→</span>
        </button>
      </div>
      {/* Feature Cards at Bottom */}
      <div className="absolute left-0 right-0 bottom-[-180px] md:bottom-[-240px] lg:bottom-[-300px] z-10 flex justify-center ">
        <div className="w-full max-w-7xl mx-auto ">
          <FeatureCards cards={resellerPricingPlans} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
