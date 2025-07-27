import React from "react";
import Image from "next/image"; // ✅ Import next/image
import { vpsPlans } from "../data/vpsPlans";

const FeatureCardsSection = () => {
  const plan = vpsPlans[0];

  return (
    <section className="w-full bg-white pt-20 sm:pt-32 md:pt-12 pb-12 flex flex-col items-center relative overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#03206B]">
        Your High Speed Cloud VPS!
      </h2>

      {/* Slider */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-8 relative">
        <div className="w-full h-4 bg-[#f3f5f7] rounded-full relative flex items-center">
          <div className="absolute left-0 top-0 h-4 bg-[#189bfa] rounded-full" style={{ width: '50%' }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <span className="relative bg-[#189bfa] text-white text-xs font-semibold px-4 py-1 rounded-t-lg mb-1 shadow">
              {plan.name}
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#189bfa]" />
            </span>
            <span className="w-14 h-14 bg-[#189bfa] flex items-center justify-center rounded-full border-4 border-white shadow-lg text-white text-3xl relative">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M16 10L20 14L16 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18L8 14L12 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {plan.features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow p-4 sm:p-5 flex flex-row items-center border border-gray-100 hover:shadow-lg transition-shadow min-h-[80px] sm:min-h-[100px]"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#f1f6ff] mr-3 sm:mr-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-sm sm:text-base text-[#03206B] mb-0.5">
                {feature.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-[#158aff]">{word}</span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium">
                {feature.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Price and CTA */}
      <div className="flex flex-row items-center gap-6 mt-2">
        <span className="text-3xl font-bold text-[#03206B]">
          {plan.price}৳<span className="text-lg font-medium text-gray-500">/mo</span>
        </span>
        <button className="bg-gradient-to-r from-[#158aff] to-[#005bea] hover:from-[#005bea] hover:to-[#158aff] text-white font-semibold px-10 py-3 rounded-full transition text-base shadow">
          Purchase Plan
        </button>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
