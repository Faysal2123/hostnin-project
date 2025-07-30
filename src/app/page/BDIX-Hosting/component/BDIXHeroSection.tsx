import Image from 'next/image';
import React from 'react';


const BDIXHeroSection = () => {
  return (
    <section className="bg-[#f8f8f8]  pt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative">
        {/* Left Side */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a40c6] mb-4" style={{ fontFamily: 'var(--font-urbanist)' }}>
            Affordable BDIX Hosting plan?
          </h1>
          <p className="text-[#232946] text-base  mb-4">
            We offer the fastest speeds for your BDIX hosting by providing servers located right here in Bangladesh. This proximity ensures that your website runs as smoothly and quickly as if it were hosted on your local computer.
          </p>
          <p className="text-[#232946] text-base  mb-8">
            With our BDIX hosting, you can expect lightning-fast response times, minimal latency, and seamless connectivity, giving your visitors an exceptional browsing experience. Our local servers guarantee top-notch performance, making your website more efficient and reliable. Choose our BDIX hosting for unmatched speed and superior service.
          </p>
          <button className="bg-[#1769ff] hover:bg-[#0a3ec9] text-white font-semibold px-8 py-3 rounded-sm transition text-base shadow mb-4">
            Order Now
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-md lg:max-w-xl">
        
          <Image
            src="https://hostnin.com/wp-content/uploads/2022/09/laptop-man.png"
            alt="Man holding laptop"
            width={420}
            height={420}
            className="object-contain w-full h-auto z-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BDIXHeroSection; 