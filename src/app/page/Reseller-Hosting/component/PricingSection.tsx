import React from "react";
import PricingCards from "./card/PricingCards";
import resellerPricingPlans from "../data/cardData";

const PricingSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Reseller Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your hosting business with our powerful reseller hosting plans. 
            Get more resources for less money and build your own hosting empire.
          </p>
        </div>
        
        <div className="mt-8">
          <PricingCards cards={resellerPricingPlans} />
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 