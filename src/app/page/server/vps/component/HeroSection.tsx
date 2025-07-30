"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { MdDone } from "react-icons/md";
import FeatureCardsSection from "./FeatureCardsSection";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-32 px-2 sm:pt-12 sm:pb-36 sm:px-6 lg:pt-28 lg:pb-44 lg:px-10 relative overflow-visible"
      style={{
        backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)',
        backgroundPosition: "left center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, cover"
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-white font-semibold mb-2 text-base sm:text-xl">
            Lightning-fast with 100% NVMe storage
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-urbanist)' }}>
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
          <button className="bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold px-6 py-3 rounded-full transition text-base sm:text-lg shadow w-full xs:w-3/4 sm:w-1/2 md:w-auto mb-6 sm:mb-10">
            Buy VPS Hosting
          </button>
        </div>
        {/* Right Side */}
        <motion.div 
          className="flex-1 flex justify-center items-center w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-48 xs:h-64 sm:h-80 md:h-96 lg:h-[600px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/07/vps-header-1.png"
            alt="Server Illustration" 
            width={800} 
            height={600} 
            className="object-contain w-full h-full" 
          />
        </motion.div>
      </div>
      {/* Overlapping Feature Cards Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[36rem] lg:-bottom-[22rem] z-20 px-2 sm:px-0">
        <FeatureCardsSection />
      </div>
    </section>
  );
};

export default HeroSection;
