'use client'
import { useState } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Installing apps is easy with this!',
    description: 'Over 86+ of the very best applications, including WordPress, all ready to install with just a click of the mouse or the tap of the finger.',
  },
  {
    title: 'Autoscaling cloud hosting',
    description:
      'The resources of our fast hosting platform, not just one server. Our proprietary autoscaling SSD hosting technology delivers resource boosts exactly when you need them.',
  },
  {
    title: 'Free Global CDN',
    description:
      "Our purpose built Content Delivery Network caches your content at data centres around the world. Best of all it's totally free and there are no bandwidth limits.",
  },
];

const ControlPanelSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#03206B] overflow-hidden py-10 px-2 sm:py-24 sm:px-6 lg:py-10 lg:px-10 flex flex-col items-center ">
      {/* Heading */}
      <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-10 pt-10 z-10">
        Most Secured & Advanced<br />
        Control Panel around
      </h2>

      {/* Main Content (Tabs + Image) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-[500px]">
        {/* Left: Timeline and Features */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-xl h-full">
          <div className="flex flex-row items-start w-full">
            {/* Timeline */}
            <div className="flex flex-col items-center mr-4 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-[#03206B] shadow-lg" />
              <div className="flex-1 w-1 bg-blue-400 my-1" style={{ minHeight: '60px', maxHeight: '80px' }} />
              <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-[#03206B] shadow-lg" />
              <div className="flex-1 w-1 bg-blue-400 my-1" style={{ minHeight: '60px', maxHeight: '80px' }} />
              <div className="w-4 h-4 rounded-full bg-blue-400 border-4 border-[#03206B] shadow-lg" />
            </div>
            {/* Feature Cards */}
            <div className="flex flex-col gap-6 w-full">
              {features.map((feature, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-[#061B5B] border border-blue-400 rounded-lg px-6 py-5 text-white transition shadow-lg flex flex-col justify-center cursor-pointer select-none ${isOpen ? 'ring-2 ring-blue-300' : 'hover:bg-[#0a256b]/80'} min-h-[60px]`}
                    onClick={() => setOpenIdx(idx)}
                  >
                    <div className="font-semibold text-lg mb-1">
                      {feature.title}
                    </div>
                    {isOpen && feature.description && (
                      <div className="text-sm text-blue-100 leading-relaxed animate-fade-in">
                        {feature.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Laptop Image */}
        <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0 w-full max-w-md xl:max-w-xl">
          <Image
            src="https://hostnin.com/wp-content/uploads/2022/09/security-machine.png"
            alt="Control Panel Laptop"
            width={600}
            height={400}
            className="object-contain w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Decorative blob bottom right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 opacity-30 rounded-full blur-2xl z-0" />
    </section>
  );
};

export default ControlPanelSection;
