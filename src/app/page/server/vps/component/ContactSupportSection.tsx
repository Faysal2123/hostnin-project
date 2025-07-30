"use client";
import Image from "next/image";
import { FiPhone, FiMessageCircle } from "react-icons/fi";

import SupportedScriptsCarousel from "./SupportedScriptsCarousel";

const ContactSupportSection = () => {
  return (
    <div className="pb-72 bg-[#f8f8f8]">
<section className="bg-[#03206B] px-4 sm:px-6 lg:px-10 pt-8 pb-32 relative overflow-visible">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 md:mb-6">
            Have a question?<br className="hidden sm:block" />We&apos;re here to help!
          </h1>
          <p className="mb-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            We&apos;re always standing by to help you in any way we can. From sales to navigating your service, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start items-center">
            <a 
              href="tel:+8801839629477" 
              className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-blue-500/30 hover:border-blue-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FiPhone className="text-xl md:text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 text-base sm:text-lg md:text-xl">+880 1839 629477</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6" 
              className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-green-500/30 hover:border-green-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FiMessageCircle className="text-xl md:text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 text-base sm:text-lg md:text-xl">Chat Now</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2022/08/support-team.png"
            alt="Support Banner" 
            width={800} 
            height={600} 
            className="object-contain w-full h-auto max-h-[500px]" 
          />
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-68 z-20 px-4 sm:px-6 lg:px-10 ">
        <SupportedScriptsCarousel />
      </div>
    </section>
    </div>


  );
};

export default ContactSupportSection;
