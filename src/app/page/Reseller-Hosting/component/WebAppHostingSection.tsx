import React from "react";
import Image from "next/image";

const webApps = [
  {
    name: "WordPress Hosting",
    img: "/public/wordpress.svg",
    alt: "WordPress Logo",
    fallback: "https://hostnin.com/wp-content/uploads/2023/03/wordpress.png",
  },
  {
    name: "Drupal Hosting",
    img: "/public/drupal.svg",
    alt: "Drupal Logo",
    fallback: "https://hostnin.com/wp-content/uploads/2023/03/drupal.png",
  },
  {
    name: "Magento Hosting",
    img: "/public/magento.svg",
    alt: "Magento Logo",
    fallback: "https://hostnin.com/wp-content/uploads/2023/03/magento.png",
  },
  {
    name: "Joomla Hosting",
    img: "/public/joomla.svg",
    alt: "Joomla Logo",
    fallback: "https://hostnin.com/wp-content/uploads/2023/03/joomla.png",
  },
];

const WebAppHostingSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 sm:py-10 md:py-12 flex flex-col items-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-2 text-[#111827]">
        Web Application with <br />
        <span className="text-[#2563eb] underline decoration-2 decoration-[#2563eb] underline-offset-4">Reseller Hosting</span>
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-6 sm:mb-8 md:mb-10 mt-2 text-sm sm:text-base">
        Market-driven content Dynamically cultivate front-end schemas parallel infrastructures without market-driven
      </p>
      <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
        {webApps.map((app) => (
          <div
            key={app.name}
            className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center w-full sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 p-4 sm:p-6 transition-transform hover:scale-105"
          >
            <div className="mb-3 sm:mb-4 flex items-center justify-center h-12 sm:h-16">
              <Image
                src={app.fallback}
                alt={app.alt}
                width={64}
                height={64}
                unoptimized
                className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </div>
            <span className="font-semibold text-sm sm:text-base md:text-lg text-center text-black mt-2">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebAppHostingSection; 