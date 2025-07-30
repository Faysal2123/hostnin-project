"use client";
import React from "react";
import Image from "next/image";
import { vpsFeaturesData } from "../data/vpsFeaturesData";

const VpsFeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-5 pb-10 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#03206B] mb-4 text-center">
          Hostnin Virtual Private Servers Include
        </h2>
        <div className="flex justify-center mb-10">
          <button className="bg-[#2563eb] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md">
            VPS Feature
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {vpsFeaturesData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 flex flex-col items-start border border-gray-100 min-h-[140px] sm:min-h-[180px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#f1f6ff] mb-3 sm:mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={36}
                  height={36}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority={true}
                />
              </div>
              <span className="font-bold text-base sm:text-lg text-[#03206B] mb-1 sm:mb-2">
                {feature.title}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium text-left">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default VpsFeaturesSection;
