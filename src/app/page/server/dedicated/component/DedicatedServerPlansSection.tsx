import React from 'react';
import { dedicatedServerPlans } from '../data/dedicatedServerPlans';
import { FaNetworkWired, FaMicrochip, FaHdd, FaTachometerAlt, FaExchangeAlt, FaCogs, FaGlobe, FaWindows } from 'react-icons/fa';

const featureHighlights = [
  {
    text: '24/7 Expert Support',
  },
  {
    text: 'Full Root Access',
  },
  {
    text: 'Unlimited Traffic with 36.47 TBit',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  network: <FaNetworkWired className="text-blue-600 text-lg" />, // RAM
  cpu: <FaMicrochip className="text-blue-600 text-lg" />, // CPU
  storage: <FaHdd className="text-blue-600 text-lg" />, // Storage
  performance: <FaTachometerAlt className="text-blue-600 text-lg" />, // Performance
  bandwidth: <FaExchangeAlt className="text-blue-600 text-lg" />, // Bandwidth
  manage: <FaCogs className="text-blue-600 text-lg" />, // Fully Managed
  ip: <FaGlobe className="text-blue-600 text-lg" />, // IP
  os: <FaWindows className="text-blue-600 text-lg" />, // OS
};

const DedicatedServerPlansSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-[#f8f8f8] px-4 ">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black">Dedicated CPU Hosting plans<br />and Pricing</h2>
        <div className="mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {dedicatedServerPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="font-bold text-2xl md:text-3xl mb-3 text-black">{plan.title}</h3>
                <p className="text-gray-500 text-base mb-8 min-h-[40px]">{plan.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.specs.slice(0, 4).map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 text-base">
                        <span>{iconMap[spec.icon]}</span>
                        <span>{spec.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block w-px bg-gray-200 mx-2"></div>
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.specs.slice(4).map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 text-base">
                        <span>{iconMap[spec.icon]}</span>
                        <span>{spec.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
                <button className="bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform text-lg">
                  {plan.buttonText || 'Purchase Now'}
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 font-bold text-3xl md:text-3xl">৳{plan.price.toLocaleString()}</span>
                  <span className="text-slate-900 text-lg">/monthly</span>
                  {plan.priceNote && <span className="text-gray-400 text-base">{plan.priceNote}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Feature highlights row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {featureHighlights.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl shadow p-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-lg font-bold shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#2563eb" />
                  <path d="M6 10.5L9 13.5L14 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-gray-800 font-medium text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedServerPlansSection; 