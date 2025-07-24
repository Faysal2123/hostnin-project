// app/components/card/FeatureCards.tsx
import React from "react";
import { PricingPlan } from "../../web-hosting/types/PricingPlan";

interface FeatureCardsProps {
  cards: PricingPlan[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ cards }) => (
  <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-stretch">
    {cards.map((plan) => (
      <div
        key={plan.title}
        className="relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 border border-gray-200"
        
      >
        <div className="flex flex-col items-center mb-4 mt-2 w-full">
          <span className="text-[#232946] font-bold text-lg sm:text-xl mb-2 text-center w-full">{plan.title}</span>
          <div className="flex items-end justify-center mb-4 w-full">
            <span className="text-pink-500 text-3xl sm:text-4xl font-bold">{plan.currency}{plan.price}</span>
            <span className="text-gray-500 text-base font-medium ml-1 mb-1">/mo</span>
          </div>
          <button className="w-full bg-[#0a1747] text-white font-semibold rounded py-2 mb-4 hover:bg-[#03206B] transition">
            {plan.buttonText}
          </button>
        </div>
        <ul className="w-full flex-1 mb-4 space-y-2 text-sm">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-blue-500 text-base">&#10003;</span>
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-1 mt-2 mb-1 w-full">
          <span className="text-slate-700 font-medium text-xs sm:text-sm cursor-pointer select-none flex items-center">
            <svg width="16" height="16" fill="currentColor" className="inline-block mr-1 mb-0.5"><circle cx="8" cy="8" r="7" stroke="#222" strokeWidth="1.5" fill="none"/><path d="M5 8l2 2 4-4" stroke="#222" strokeWidth="1.5" fill="none"/></svg>
            Expand Feature
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureCards;
