import React from "react";
import Image from "next/image";
import { featureCardsData } from "../data/featureCardsData";

const FeatureCards: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#03206B] mb-2 leading-tight">
              When You Expect Performance<br />Get Hostnin Managed VPS
            </h2>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0 flex items-center">
            <p className="text-gray-500 text-base md:text-sm font-medium md:text-right">
              Avoid all the hassles of VPS management and focus on your business. Our managed hosting guarantees unmatched performance, reliability, and an extended team.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-8 flex flex-row items-center border border-gray-100 min-h-[160px]"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-[#f1f6ff] mr-8">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-bold text-xl text-[#03206B] mb-2">
                  {card.title}
                </span>
                <span className="text-gray-500 text-base font-medium text-left">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
