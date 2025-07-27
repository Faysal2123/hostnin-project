"use client";
import Image from "next/image";


import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";
import { FaBolt } from "react-icons/fa";

import cardData from "@/app/page/web-hosting/data/cardData";
import FeatureCards from "./card/FeatureCards";


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
  
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative"
      style={{
        background: 'url("https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png"), linear-gradient(278deg, rgba(0, 20, 120, 0.9) 16%, rgba(0, 8, 50, 0.9) 98%)',
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "30% 100%, cover"
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
        {/* Left Side */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-yellow-400 font-semibold mb-2 text-base sm:text-xl">Everything You Need to Create a Website</p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
            Get Fastest Hosting<br className="hidden sm:block" />Up to 90% Discount
          </h1>
          <ul className="mb-6 my-5 sm:mb-8 space-y-2 text-sm sm:text-lg">
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Free Domain on 3 Years Billing</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">24/7 Chat, Call and Ticket Support</span>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl"><MdDone /></span> 
              <span className="text-sm sm:text-lg">Lifetime Free Wildcard SSL Certificate</span>
            </li>
          </ul>
          {/* Countdown */}
          <div className="mb-8 sm:mb-14">
            
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
              {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-[#03206B] rounded-xl p-4 sm:p-5 text-center w-18 sm:w-22 md:w-24 shadow-xl border border-blue-100 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-1">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-[#03206B] via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                      {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-blue-600 mt-2 uppercase tracking-wider">
                      {unit}
                    </div>
                  </div>
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/20 to-red-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-110"></div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 animate-pulse"></div>
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500 delay-100"></div>
                </div>
              ))}
            </div>
          </div>
          <button className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-600 text-[#03206B] hover:text-white font-bold px-6 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl transition-all duration-500 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-6 sm:mb-10 transform hover:-translate-y-1 border-2 border-yellow-300 hover:border-blue-400 flex items-center justify-center gap-2">
            <FaBolt className="text-lg animate-pulse" />
            <span className="relative z-10">Claim Offer Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image 
            src="https://hostnin.com/wp-content/uploads/2023/05/services-img.png"
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
