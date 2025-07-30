"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const scripts = [
  {
    name: "WordPress",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/wordpress-logo.svg",
  },
  {
    name: "Joomla",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/joomla-logo.svg",
  },
  {
    name: "Drupal",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/drupal-logo.svg",
  },
  {
    name: "Moodle",
    icon: "https://hostim.themetags.com/wp-content/uploads/2022/07/moodle-logo.svg",
  },
];

const SupportedScriptsCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visible = [
    scripts[startIdx],
    scripts[(startIdx + 1) % scripts.length],
  ];

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + scripts.length) % scripts.length);
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % scripts.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % scripts.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f8f8] ">
      <div
        className="max-w-7xl mx-auto  bg-no-repeat bg-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://hostnin.com/wp-content/uploads/2022/09/rs-award-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-[#06125a] pt-10">
          Our Supported Scripts
        </h2>
        <p className="text-gray-700 font-medium mb-6 max-w-2xl mx-auto text-center">
          Our platform allows you to run almost any script you need to run,
          except for cryptocurrency mining scripts.
        </p>
        <div className="flex items-center justify-center gap-4 pb-16">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#06125a] text-white text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300 flex-shrink-0"
          >
            &#8592;
          </button>
          <div className="flex gap-8 w-full max-w-4xl justify-center">
            {visible.map((script) => (
              <div
                key={script.name}
                className="flex-1 bg-white rounded-xl py-10 px-40 flex flex-col items-center justify-center border border-gray-200 min-w-[300px]"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                  style={{ background: "#f1f6ff" }}
                >
                  <Image
                    src={script.icon}
                    alt={script.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="font-bold text-lg text-[#06125a] mt-2">
                  {script.name}
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#06125a] text-white text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300 flex-shrink-0"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedScriptsCarousel;
