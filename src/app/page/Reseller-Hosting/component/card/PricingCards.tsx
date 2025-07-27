import React from "react";
import { PricingPlan } from "../../../web-hosting/types/PricingPlan";

interface PricingCardsProps {
  cards: PricingPlan[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ cards }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-6 justify-center items-stretch relative z-10 overflow-hidden">
      {cards.map((plan) => (
        <div
          key={plan.title}
          className="relative w-full max-w-[400px] sm:max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center px-3 sm:px-4 md:px-6 py-2.5 sm:py-6 md:py-8 border border-gray-200 mt-4 sm:mt-0 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center mb-2 sm:mb-4 mt-1 sm:mt-2 w-full">
            <span className="text-[#232946] font-bold text-xl mb-2 text-center w-full">
              {plan.title}
            </span>
            <div className="flex items-end justify-center mb-2 sm:mb-4 w-full">
              <span className="text-pink-600 text-3xl sm:text-3xl md:text-4xl font-bold">
                {plan.currency}{plan.price}
              </span>
              <span className="text-gray-500 text-sm sm:text-base font-medium ml-1 mb-1">
                /mo
              </span>
            </div>
            <button className="w-full bg-[#0a1747] text-white font-semibold rounded py-2 mb-2 sm:mb-4 hover:bg-[#03206B] transition text-xs sm:text-base">
              {plan.buttonText}
            </button>
          </div>
          <ul className="w-full flex-1 mb-2 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg 
                    width="8" 
                    height="8" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700">{feature.text}</span>
              </li>
            ))}
          </ul>
          <div className="items-start gap-1 mt-1 sm:mt-2 mb-1 w-full">
            <span className="text-slate-700 font-bold text-[15px] sm:text-sm cursor-pointer select-none flex items-center hover:text-blue-600 transition-colors">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
              Expand Feature
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
