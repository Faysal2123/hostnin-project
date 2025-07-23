"use client";

import Image from "next/image";


import { IoIosChatbubbles } from "react-icons/io";
import FeatureCards from "./FeatureCards";
import cardData from "./data/cardData";



function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HeroSection = () => {
  



  return (
    <section className="bg-[#03206B] pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
         
Get in touch,<br className="hidden sm:block" />Feel free to contact
          </h1>
          <p>We provide 24/7 Support through Messenger, webchat and also WhatsApp. If you need any additional features or request management support, please contact using the details.</p>
         
         <div className="mt-5">
         <button className="bg-blue-700 hover:bg-blue-500 hover:text-white text-white font-semibold px-4 sm:px-8 lg:px-6 py-2 sm:py-3 rounded transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10 flex items-center gap-2">
           <div><IoIosChatbubbles /></div>
           live chat
          </button>
         </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2023/03/feature-image.png"
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
