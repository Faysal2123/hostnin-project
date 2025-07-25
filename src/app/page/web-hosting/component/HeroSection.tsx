"use client";
import Image from "next/image";


import { useEffect, useState, useMemo } from "react";
import { MdDone } from "react-icons/md";

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
    <section className="bg-[#03206B] pt-8 pb-12 px-2 sm:pt-12 sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative"
      style={{
        backgroundImage: "url('https://hostnin.com/wp-content/uploads/2022/08/sh-hero-bg.png')",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
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
          <div className="flex gap-1 sm:gap-3 mb-8 sm:mb-14 justify-center lg:justify-start flex-wrap">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
              <div key={index} className="bg-white text-[#03206B] rounded p-2 sm:p-3 text-center w-14 sm:w-16 md:w-20 mb-2">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                </div>
                <div className="text-xs font-medium">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
          <button className="bg-yellow-400 hover:bg-blue-500 hover:text-white text-[#03206B] font-semibold px-4 sm:px-8 lg:px-10 py-2 sm:py-3 rounded transition text-base sm:text-lg shadow w-full sm:w-auto mb-6 sm:mb-10">
            Claim Offer
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
