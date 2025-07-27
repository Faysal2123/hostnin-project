"use client";
import Image from "next/image";

import SupportedScriptsCarousel from "./SupportedScriptsCarousel";

const ContactSupportSection = () => {
  return (
    <section className="bg-[#03206B]   px-2  sm:px-6 pt-8  lg:px-10 relative overflow-visible">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Left Side */}
        <div className="flex-1 text-white md:pr-12 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4 md:mb-6">
            Have a question?<br className="hidden sm:block" />We&apos;re here to help!
          </h1>
          <p className="mb-2 my-2 sm:mb-3 text-sm sm:text-base md:text-lg text-white/90">
            We&apos;re always standing by to help you in any way we can. From sales to navigating your service, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-8 justify-center md:justify-start items-center mt-6 sm:mt-8">
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold">
              <span className="text-lg md:text-xl">📞</span>
              <span>+880 1839 629477</span>
            </div>
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold">
              <span className="text-lg md:text-xl">💬</span>
              <span>Chat Now</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-48 xs:h-64 sm:h-80 md:h-96 lg:h-[600px]">
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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[19rem] z-20 px-2 sm:px-0">
        <SupportedScriptsCarousel />
      </div>
    </section>
  );
};

export default ContactSupportSection;
