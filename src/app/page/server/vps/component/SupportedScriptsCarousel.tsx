"use client";
import React, { useState } from "react";

const scripts = [
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wordpress.svg",
  },
  {
    name: "Joomla",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/joomla.svg",
  },
  {
    name: "Drupal",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/drupal.svg",
  },
  {
    name: "Moodle",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/moodle.svg",
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

  return (
    <section className=" bg-[#f8f8f8]">
      <div
        className="max-w-7xl mx-auto px-4 bg-no-repeat bg-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://hostnin.com/wp-content/uploads/2022/09/rs-award-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-[#06125a] pt-4">
          Our Supported Scripts
        </h2>
        <p className="text-gray-700 font-medium mb-6 max-w-2xl mx-auto text-center">
          Our platform allows you to run almost any script you need to run,
          except for cryptocurrency mining scripts.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#06125a] text-white text-2xl focus:outline-none hover:bg-[#0d47a1] transition"
          >
            &#8592;
          </button>
          <div className="flex gap-8 w-full max-w-4xl pb-8">
            {visible.map((script) => (
              <div
                key={script.name}
                className="flex-1 bg-white rounded-xl py-8 px-10 flex flex-col items-center justify-center  border border-gray-200"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                  style={{ background: "#f1f6ff" }}
                >
                  <img
                    src={script.icon}
                    alt={script.name}
                    className="w-12 h-12"
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
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#06125a] text-white text-2xl focus:outline-none hover:bg-[#0d47a1] transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedScriptsCarousel;
