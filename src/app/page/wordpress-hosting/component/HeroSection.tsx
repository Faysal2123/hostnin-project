"use client";
import cardData from "@/app/page/web-hosting/data/cardData";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import FeatureCards from "./card/FeatureCards";


const HeroSection = () => {
  
 


  
  return (
    <section className="bg-[#03206B] pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative"
    style={{
      background: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 20, 120, 0.9) 16%, rgba(0, 8, 50, 0.9) 98%)',
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "30% 100%, cover"
    }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
          2X Fast & Secure<br className="hidden sm:block" />WordPress Hosting
          </h1>
          <p className="font-semibold mb-2 text-base sm:text-xl text-white">
            WordPress Starter Plan - Starts from only for <span className="text-yellow-400">৳1799/year</span>
          </p>
          <ul className="mb-6 my-5 sm:mb-8 space-y-2 text-sm sm:text-lg grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Super Fast SSD Storage</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Advanced Cache Management</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Managed WordPress</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Lifetime Free SSL Certificate</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">WordPress Acceleration</span>
            </li>
          </ul>
        
          <button className="bg-yellow-400 hover:bg-blue-500 hover:text-white text-[#03206B] font-semibold px-4 sm:px-8 lg:px-10 py-2 sm:py-3 rounded transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10">
            Claim Offer
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/hero-img-1.png"
            alt="Server Illustration" 
            width={400} 
            height={400} 
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>

      <div>
        <FeatureCards cards={cardData} bottom="-80px sm:-120px lg:-180px" />
      </div>
    </section>
  );
};

export default HeroSection;
