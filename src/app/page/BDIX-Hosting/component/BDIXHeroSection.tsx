import Image from 'next/image';
import React from 'react';


const BDIXHeroSection = () => {
  return (
    <section className="bg-[#f8f8f8]  pt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative">
        {/* Left Side */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a40c6] mb-4">
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
        <div className="flex-1 flex items-center justify-center relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
          {/* Blue Percentage Icon */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-12 lg:top-8 lg:translate-x-0 z-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" fill="#eaf3ff" />
              <path d="M50 10 a40 40 0 1 1 0 80" stroke="#1a90ff" strokeWidth="8" fill="none" strokeLinecap="round" />
              <text x="50%" y="54%" textAnchor="middle" fill="#1769ff" fontSize="28" fontWeight="bold" dy=".3em">%96</text>
            </svg>
          </span>
          {/* Fire Icon */}
          <span className="absolute top-2 right-8 lg:top-0 lg:right-0 z-10">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" fill="#fff" />
              <g>
                <path d="M30 16c2.5 6 7 8.5 7 14.5 0 4.5-3.1 8.5-7 8.5s-7-4-7-8.5c0-6 4.5-8.5 7-14.5z" fill="#ff6a00"/>
                <path d="M30 22c1.2 2.8 3.5 4 3.5 6.8 0 2.1-1.6 4-3.5 4s-3.5-1.9-3.5-4c0-2.8 2.3-4 3.5-6.8z" fill="#ffb300"/>
              </g>
            </svg>
          </span>
          {/* Man with Laptop Image */}
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