"use client"
import React, { useState } from "react";
import Image from "next/image";
import { featureTabs } from "../data/featureTabs";
import { FeatureTab } from "../types/FeatureTab";
import { MdDone } from "react-icons/md";
const FeatureTabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(featureTabs[0].key);
  const currentTab: FeatureTab = featureTabs.find(tab => tab.key === activeTab)!;

  return (
    <section className="py-16 w-full flex justify-center bg-[#fcfcfc]">
      <div className="flex flex-col md:flex-row items-center max-w-7xl w-full gap-8 md:gap-0">
        {/* Left: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full h-full">
          <div className="w-[260px] md:w-[320px] lg:w-[500px]">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/09/laptop-man.png"
              alt={currentTab.title}
              width={400}
              height={400}
              className="w-full h-auto max-w-[400px]"
              priority
            />
          </div>
        </div>
        {/* Right: Tab Content */}
        <div className="flex-[1.5] flex flex-col justify-center items-start md:pl-10 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#06113C] mb-3 leading-tight px-2">
            Advance features for the <br /> advanced user
          </h2>
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-4 border-b border-gray-200 w-full ">
            {featureTabs.map(tab => (
              <button
                key={tab.key}
                className={`px-2 md:px-4 py-2 text-base font-semibold border-b-2 transition-colors duration-200 focus:outline-none ${
                  activeTab === tab.key
                    ? "border-blue-800 text-blue-900"
                    : "border-transparent text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <p className="text-gray-600 mb-6 text-base md:text-base max-w-xl px-2">
            {currentTab.description}
          </p>
          <ul className="mb-6 space-y-3 px-2">
            {currentTab.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-lg text-[#1DBF73] font-medium">
                <span className="w-6 h-6 mr-2 rounded-full bg-green-500 flex items-center justify-center">
                  <MdDone className="text-white" size={20} />
                </span>
                <span className="text-gray-800 font-normal">{feature}</span>
              </li>
            ))}
          </ul>
         <div className="px-2">
         <button className="btn bg-gradient-to-r from-blue-500 to-blue-800 text-white px-5 py-3 font-semibold  rounded-sm shadow cursor-pointer hover:bg-blue-900 transition-all duration-300">Explore More</button>
         </div>
        </div>
      
      </div>
    </section>
  );
};

export default FeatureTabSection; 