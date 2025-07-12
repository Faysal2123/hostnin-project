import React from 'react';
import { featureDifferenceData } from '../data/featureDifferenceData';
import Image from 'next/image';
import manAttendingOnlineMeeting from '../assets/cd-man.webp';

const FeatureDifferenceSection = () => {
  return (
    <section className="relative w-full bg-[#eaf4fd] overflow-hidden" style={{ minHeight: '750px' }}>
      {/* Decorative background shape (angled top) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10" style={{ background: '#eaf4fd', clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }} />
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center px-4 pt-12 pb-20" style={{ minHeight: '900px' }}>
        {/* Left: Image */}
        <div className="flex-[1.2] justify-center items-center h-full hidden lg:block">
          <Image
            src={manAttendingOnlineMeeting}
            alt="Man with tablet"
            width={610}
            height={720}
            className="object-contain rounded-xl drop-shadow-lg"
            priority
          />
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full md:pl-2 md:mt-10 ">
          <h2 className=" text-3xl md:text-[2.8rem] leading-[1.1] font-semibold text-black mb-4 text-left" style={{ fontFamily: 'inherit' }}>
            What makes Hostnin <br />
            different from others?
          </h2>
          <p className="mb-10 text-gray-700 max-w-2xl text-left md:text-lg font-normal">
            Using our incredible technology, we will help you improve your website’s accessibility. With LiteSpeed Server and CloudLinux OS, you can speed up loading times, enhance security, and make your site faster and more reliable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {featureDifferenceData.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-white rounded-2xl p-4 py-5 h-full min-h-[180px] border border-[#eaf4fd] shadow-xl"
                style={{ boxShadow: '0 8px 32px 0 rgba(80, 143, 255, 0.13)' }}
              >
                <span className="bg-[#eaf4fd] text-blue-700 rounded-full p-4 flex items-center justify-center text-2xl mb-5 shadow-sm">
                  {React.createElement(feature.icon, { size: 36 })}
                </span>
                <h3 className="font-bold text-lg text-black mb-2 text-left">{feature.title}</h3>
                <p className="text-gray-700 text-base text-left font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDifferenceSection; 