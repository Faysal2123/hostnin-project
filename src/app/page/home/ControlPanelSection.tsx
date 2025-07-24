"use client";

import Image from "next/image";
import cpanelImg from "../../assets/cpanel.png";

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="#2B3990" fillRule="evenodd"/>
      </svg>
    ),
    title: "Easy of Used",
    description:
      "Easy to navigate control panel, everything is super smooth. Create your website in a minute. Thanks to our advanced web builder software that comes with Cpanel as built in feature.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#2B3990"/>
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath>
        </defs>
      </svg>
    ),
    title: "Powerful Hosting",
    description:
      "Based on High config server, Imunify360 features an excellent anti malware that includes a comprehensive collection of “deny” policy rules that block all attacks. Stay safe and secure with our security tools.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#2B3990"/>
        <path d="M20 7.5c-6.9 0-12.5 5.6-12.5 12.5S13.1 32.5 20 32.5 32.5 26.9 32.5 20 26.9 7.5 20 7.5zm0 1.7c2.2 0 4.2.7 5.8 1.9-.2 0-.4-.1-.6-.1-1 0-1.7.6-1.7 1.3 0 .6.4 1.1.9 1.7.4.5.9 1.1.9 2.1 0 .7-.3 1.4-.7 2.4l-1.1 3.6-3.2-9.6c.2 0 .4-.1.6-.1zm-2.2.3c.2 0 .4 0 .6.1l4.2 12.6-1.2 3.6-5.6-16.3c.6-.1 1.2-.2 1.8-.2zm-2.7.7l5.7 16.5c-1.2.3-2.5.5-3.8.5-2.2 0-4.2-.7-5.8-1.9.2 0 .4.1.6.1 1 0 1.7-.6 1.7-1.3 0-.6-.4-1.1-.9-1.7-.4-.5-.9-1.1-.9-2.1 0-.7.3-1.4.7-2.4l1.1-3.6zm-6.1 7.8c0-1.7.4-3.3 1.1-4.7l4.7 13.6c-3.3-2-5.5-5.6-5.5-9.6zm7.8 10.6c.7 0 1.4-.1 2-.2l2.1 6.1c-1.2.1-2.4.2-3.7.2-.7 0-1.3 0-2-.1l2.1-6zm7.2-1c.7-1.2 1.3-2.5 1.6-3.9.5-1.7.7-3.2.7-4.7 0-1.7-.4-3.3-1.1-4.7l-4.7 13.6c1.3-.2 2.6-.6 3.7-1.2zm-2.2 1.2l-2.1-6.1c.7-.1 1.4-.2 2-.2.7 0 1.3 0 2 .1l-2.1 6.2z" fill="#fff"/>
      </svg>
    ),
    title: "WordPress Optimized",
    description:
      "Get ahead with out wordpress optimized hosting panel. There are 380+ prebuilt apps. with our softaculous system, you can install any CMS with few clicks including wordpress, prestashop and more. By Softaculous, you can also manage your websites from one place.",
  },
];

const ControlPanelSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-2">
        User-Friendly Control Panel
      </h2>
      <p className="text-center text-[#222] mb-12">
        Purchase web hosting from the best web hosting company in Bangladesh.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        {/* Left: Features */}
        <div className="flex-1 flex flex-col gap-10 max-w-xl">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-5">
              <div className="shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-[#13205A] mb-1">{feature.title}</h3>
                <p className="text-[#444] leading-relaxed text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right: Laptop Image */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-lg">
            <Image
              src={cpanelImg}
              alt="Cpanel Control Panel"
              className="rounded-xl border border-gray-200 shadow-lg object-contain w-full h-auto"
            />
          </div>
          <span className="block text-center text-[#222] mt-4 text-base">Cpanel Control Panel</span>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelSection;
