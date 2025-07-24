import React from "react";
import { vpsFeaturesData } from "../data/vpsFeaturesData";

const VpsFeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#03206B] mb-4 text-center">
          Hostnin Virtual Private Servers Include
        </h2>
        <div className="flex justify-center mb-10">
          <button className="bg-[#2563eb] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md">
            VPS Feature
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vpsFeaturesData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-8 flex flex-col items-start border border-gray-100 min-h-[180px] hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#f1f6ff] mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>
              <span className="font-bold text-lg text-[#03206B] mb-2">
                {feature.title}
              </span>
              <span className="text-gray-500 text-sm font-medium text-left">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <span className="text-sm text-[#03206B] font-medium">
            Looking for more Technical Specs?{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              See our VPS knowledge Base
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default VpsFeaturesSection; 