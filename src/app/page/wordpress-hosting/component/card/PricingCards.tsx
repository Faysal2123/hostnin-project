"use client";
import { useState } from "react";
import pricingPlans from "../../data/pricingPlans";
import { MdDescription, MdStars, MdRocketLaunch, MdSecurity } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const tabClass = (active: boolean) =>
  `px-4 sm:px-6 py-1 font-semibold text-sm sm:text-base focus:outline-none transition-colors duration-200 rounded-full ${
    active ? "bg-[#0070f3] text-white" : "bg-transparent text-white"
  }`;

const iconMap: Record<string, React.ReactNode> = {
  basic: (
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100">
      <MdDescription size={20} className="text-blue-600 sm:text-2xl" />
    </span>
  ),
  starter: (
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-100">
      <MdStars size={20} className="text-yellow-500 sm:text-2xl" />
    </span>
  ),
  pro: (
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50">
      <MdRocketLaunch size={20} className="text-blue-500 sm:text-2xl" />
    </span>
  ),
  ultimate: (
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100">
      <MdSecurity size={20} className="text-purple-600 sm:text-2xl" />
    </span>
  ),
};

const PricingCards = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const plans = pricingPlans.filter((plan) => plan.billingPeriod === billing);

  return (
    <section id="pricing-section" className="pricing-scroll w-full flex flex-col items-center justify-center py-10 sm:py-14 lg:py-20 bg-[#f8f8f8]   lg:pt-44 px-4">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#232946] mb-6 sm:mb-10 text-center">
          Choose Your Perfect Plan
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 justify-center">
          <div className="flex bg-[#2a3553] rounded-full p-1">
            <button className={tabClass(billing === "monthly")} onClick={() => setBilling("monthly")}>
              Monthly
            </button>
            <button className={tabClass(billing === "yearly")} onClick={() => setBilling("yearly")}>
              Yearly
            </button>
          </div>

          {/* Updated: SVG Arrow + Text – visible on all devices */}
          <div className="relative flex items-center -ml-3 mt-3 sm:mt-0" style={{ minWidth: 120 }}>
            <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              className="absolute -top-6 left-0 sm:-top-6 lg:-top-8 lg:left-0"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M10 30 C40 0, 70 0, 80 20"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#2563eb" />
                </marker>
              </defs>
            </svg>
            <span className="text-blue-400 font-medium text-sm inline ml-10">Upto 76% save</span>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-stretch mt-10">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 transition-all duration-300 border-2 ${
                plan.highlight ? "border-blue-500 scale-[1.02] z-10 shadow-2xl" : "border-transparent"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-col items-center mb-4 mt-2">
                <div className="flex items-center gap-2 mb-1">
                  {iconMap[plan.icon as string]}
                  <span className="text-[#232946] font-bold text-base sm:text-lg">{plan.title}</span>
                </div>
                {plan.description && (
                  <div className="text-gray-500 text-xs sm:text-sm text-center mb-1 min-h-[38px]">
                    {plan.description}
                  </div>
                )}
                {plan.savingsText && (
                  <span className="inline-block bg-blue-50 text-gray-700 text-sm font-semibold px-4 py-1 rounded-full mb-2 mt-4 shadow-sm border border-blue-100">
                    {plan.savingsText}
                  </span>
                )}
                <div className="flex items-start justify-center gap-1 mb-2 mt-5">
                  <span className="text-xs sm:text-sm font-bold text-[#232946] relative -mt-1">
                    {plan.currency}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#232946]">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 ml-1">
                    /Per {billing === "monthly" ? "Month" : "Year"}
                  </span>
                </div>
              </div>

              <button
                className={`w-full mt-2 mb-2 py-2 sm:py-3 rounded font-semibold text-base sm:text-lg transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-black text-white hover:bg-blue-600"
                }`}
              >
                {plan.buttonText || "Add to Cart"}
              </button>

              {plan.infoText && (
                <div className="text-xs text-gray-500 text-center mb-4">{plan.infoText}</div>
              )}

              <ul className="w-full flex-1 mb-4 space-y-2 text-xs sm:text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500 text-base sm:text-lg">&#10003;</span>
                    <span className="text-slate-700">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="text-slate-700 font-medium text-xs sm:text-sm cursor-pointer select-none">
                  See More Features
                </span>
                <IoMdArrowDropdown size={20} className="text-slate-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
