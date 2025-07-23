import React from "react";
import Image from "next/image";

const webApps = [
  {
    name: "WordPress Hosting",
    img: "/public/wordpress.svg",
    alt: "WordPress Logo",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "Drupal Hosting",
    img: "/public/drupal.svg",
    alt: "Drupal Logo",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
  },
  {
    name: "Magento Hosting",
    img: "/public/magento.svg",
    alt: "Magento Logo",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  },
  {
    name: "Joomla Hosting",
    img: "/public/joomla.svg",
    alt: "Joomla Logo",
    fallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
  },
];

const WebAppHostingSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-12 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-2 text-[#111827]">
        Web Application with <br />
        <span className="text-[#2563eb] underline decoration-2 decoration-[#2563eb] underline-offset-4">Reseller Hosting</span>
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-10 mt-2">
        Market-driven content Dynamically cultivate front-end schemas parallel infrastructures without market-driven
      </p>
      <div className="w-full flex flex-wrap justify-center gap-6 px-4">
        {webApps.map((app) => (
          <div
            key={app.name}
            className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center w-64 h-56 p-6 transition-transform hover:scale-105"
          >
            <div className="mb-4 flex items-center justify-center h-16">
              <Image
                src={app.fallback}
                alt={app.alt}
                width={64}
                height={64}
                unoptimized
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg text-center text-black mt-2">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebAppHostingSection; 