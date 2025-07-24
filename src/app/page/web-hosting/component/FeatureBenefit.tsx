import React from 'react';
import { featureBenefits } from '../data/featureBenefits';

const FeatureBenefitSection: React.FC = () => {
  return (
    <section
      className="relative bg-[#f8f8f8] w-full flex flex-col items-center pb-24 pt-0 overflow-hidden bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: `url('https://hostnin.com/wp-content/uploads/2022/09/bg-curve.png')`,
      }}
    > 
         
      <div className="relative z-10 flex flex-col items-center w-full pt-16 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black">
          Why Choose Web Hosting?
        </h2>
        <p className="text-center text-black max-w-2xl mb-10">
          With our Web Hosting plans, you&apos;ll receive more resources for less money,
          ensuring the reliability you can count on. Starting your own business with Hostnin is easier than you think!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {featureBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0a1747] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow min-h-[260px]"
              >
                <div className="flex items-center mb-2 gap-2">
                  <div className="text-3xl text-blue-700 dark:text-blue-400">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitSection;
