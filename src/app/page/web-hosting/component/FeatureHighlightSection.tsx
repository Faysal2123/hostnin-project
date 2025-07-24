import React from 'react';
import { featureHighlights } from '../data/featureHighlights';
import Image from 'next/image';

const FeatureHighlightSection = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 px-4">
        {featureHighlights.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:justify-between lg:gap-32 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={300}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col items-start max-w-xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-left lg:px-20" style={{ fontFamily: 'inherit' }}>
                {feature.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg font-normal whitespace-pre-line text-left lg:px-20">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlightSection; 