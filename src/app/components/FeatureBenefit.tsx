import React from 'react';
import { featureBenefits } from '../data/featureBenefits';

const FeatureBenefitSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center bg-[#000F3D] pb-24 pt-0 overflow-hidden">
      {/* Wide, shallow white arc at the top */}
      <div className="absolute top-0 left-0 w-full z-0" style={{height: '340px'}}>
       
      </div>
      <div className="relative z-10 flex flex-col items-center w-full pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white ">Why Choose Web Hosting?</h2>
        <p className="text-center text-white max-w-2xl mb-10">
          With our Web Hosting plans, you&apos;ll receive more resources for less money, ensuring the reliability you can count on. Starting your own business with Hostnin is easier than you think!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {featureBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0a1747] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow min-h-[260px]"
              >
                <div className='flex items-center mb-2 gap-2'>
                <div className="text-3xl text-blue-700 dark:text-blue-400 ">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg  text-black dark:text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitSection;
