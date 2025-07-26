"use client";
import { useState } from "react";
import pricingPlans from "../../data/pricingPlans";
import { MdDescription, MdStars, MdRocketLaunch, MdSecurity } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const tabClass = (active: boolean) =>
  `px-3 sm:px-4 lg:px-6 py-1 font-semibold text-xs sm:text-sm lg:text-base focus:outline-none transition-colors duration-200 rounded-full ${
    active ? "bg-[#0070f3] text-white" : "bg-transparent text-white"
  }`;

const iconMap: Record<string, React.ReactNode> = {
  basic: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100">
      <MdDescription size={16} className="text-blue-600 sm:text-xl lg:text-2xl" />
    </span>
  ),
  starter: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-yellow-100">
      <MdStars size={16} className="text-yellow-500 sm:text-xl lg:text-2xl" />
    </span>
  ),
  pro: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-blue-50">
      <MdRocketLaunch size={16} className="text-blue-500 sm:text-xl lg:text-2xl" />
    </span>
  ),
  ultimate: (
    <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-purple-100">
      <MdSecurity size={16} className="text-purple-600 sm:text-xl lg:text-2xl" />
    </span>
  ),
};

const PricingCards = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const plans = pricingPlans.filter((plan) => plan.billingPeriod === billing);

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-10 lg:py-14 xl:py-20 bg-[#f8f8f8] lg:pt-32 xl:pt-44 px-3 sm:px-4">
      <div className="w-full max-w-7xl">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#232946] mb-4 sm:mb-6 lg:mb-10 text-center">
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
            <span className="text-blue-400 font-medium text-xs sm:text-sm inline ml-10">Upto 76% save</span>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-stretch mt-8 sm:mt-10">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 transition-all duration-300 border-2 ${
                plan.highlight ? "border-blue-500 scale-[1.02] z-10 shadow-2xl" : "border-transparent"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-col items-center mb-3 sm:mb-4 mt-2">
                <div className="flex items-center gap-2 mb-1">
                  {iconMap[plan.icon as string]}
                  <span className="text-[#232946] font-bold text-sm sm:text-base lg:text-lg">{plan.title}</span>
                </div>
                {plan.description && (
                  <div className="text-gray-500 text-xs sm:text-sm text-center mb-1 min-h-[30px] sm:min-h-[38px]">
                    {plan.description}
                  </div>
                )}
                {plan.savingsText && (
                  <span className="inline-block bg-blue-50 text-gray-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-2 mt-3 sm:mt-4 shadow-sm border border-blue-100">
                    {plan.savingsText}
                  </span>
                )}
                <div className="flex items-start justify-center gap-1 mb-2 mt-4 sm:mt-5">
                  <span className="text-xs sm:text-sm font-bold text-[#232946] relative -mt-1">
                    {plan.currency}
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#232946]">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 ml-1">
                    /Per {billing === "monthly" ? "Month" : "Year"}
                  </span>
                </div>
              </div>

              <button
                className={`w-full mt-2 mb-2 py-2 sm:py-3 rounded font-semibold text-sm sm:text-base lg:text-lg transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-black text-white hover:bg-blue-600"
                }`}
              >
                {plan.buttonText || "Add to Cart"}
              </button>

              {plan.infoText && (
                <div className="text-xs text-gray-500 text-center mb-3 sm:mb-4">{plan.infoText}</div>
              )}

              <ul className="w-full flex-1 mb-3 sm:mb-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500 text-sm sm:text-base lg:text-lg">&#10003;</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-1 mt-3 sm:mt-4">
                <span className="text-slate-700 font-medium text-xs sm:text-sm cursor-pointer select-none">
                  See More Features
                </span>
                <IoMdArrowDropdown size={16} className="text-slate-700 sm:w-5 sm:h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
