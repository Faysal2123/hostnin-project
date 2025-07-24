import React from 'react';
import { featureCards } from '../data/featureCards';
import { FeatureCard } from '../types/FeatureCard';

const FeatureCardsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">Core Features Available!</h2>
        <p className="text-gray-500 mb-10 max-w-2xl">Efficiently redefine high-quality potentialities rather than innovative ideas. accurate infomediaries with high-payoff technology.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featureCards.map((card: FeatureCard, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start hover:shadow-md transition-shadow min-h-[220px]"
            >
              <img src={card.icon} alt={card.title} className="w-10 h-10 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection; 