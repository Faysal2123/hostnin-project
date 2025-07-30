import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { vpsPlans } from "../data/vpsPlans";

const FeatureCardsSection = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const plan = vpsPlans[selectedPlanIndex];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedPlanIndex(value);
  };

  const getSliderPosition = () => {
    return (selectedPlanIndex / (vpsPlans.length - 1)) * 100;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderClick(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleSliderClick(e);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const sliderWidth = rect.width;
    const percentage = Math.max(0, Math.min(100, (clickX / sliderWidth) * 100));
    
    // Calculate which plan to select based on percentage
    const planIndex = Math.round((percentage / 100) * (vpsPlans.length - 1));
    const clampedIndex = Math.max(0, Math.min(planIndex, vpsPlans.length - 1));
    
    if (clampedIndex !== selectedPlanIndex) {
      setSelectedPlanIndex(clampedIndex);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const sliderWidth = rect.width;
        const percentage = Math.max(0, Math.min(100, (clickX / sliderWidth) * 100));
        
        const planIndex = Math.round((percentage / 100) * (vpsPlans.length - 1));
        const clampedIndex = Math.max(0, Math.min(planIndex, vpsPlans.length - 1));
        
        if (clampedIndex !== selectedPlanIndex) {
          setSelectedPlanIndex(clampedIndex);
        }
      }
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mouseleave', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, selectedPlanIndex]);

  return (
    <section className="w-full bg-white pt-20 sm:pt-32 md:pt-12 pb-12 flex flex-col items-center relative overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#03206B]">
        Your High Speed Cloud VPS!
      </h2>

      {/* Slider */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-8 relative">
        <div 
          ref={sliderRef}
          className="w-full h-4 bg-[#f3f5f7] rounded-full relative flex items-center cursor-pointer select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div 
            className="absolute left-0 top-0 h-4 bg-[#189bfa] rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${getSliderPosition()}%` }} 
          />
          <div 
            className={`absolute top-1/2 -translate-y-1/2 z-10 flex flex-col items-center transition-all duration-300 ease-out ${
              isDragging ? 'scale-110' : 'hover:scale-105'
            }`}
            style={{ left: `${getSliderPosition()}%` }}
          >
            <span className="relative bg-[#189bfa] text-white text-xs font-semibold px-4 py-1 rounded-t-lg mb-1 shadow-lg">
              {plan.name}
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#189bfa]" />
            </span>
            <span className={`w-14 h-14 bg-[#189bfa] flex items-center justify-center rounded-full border-4 border-white shadow-lg text-white text-3xl relative transition-all duration-200 ${
              isDragging ? 'scale-110 shadow-xl' : 'hover:scale-110'
            }`}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M16 10L20 14L16 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18L8 14L12 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Hidden input for slider functionality */}
        <input
          type="range"
          min="0"
          max={vpsPlans.length - 1}
          value={selectedPlanIndex}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {/* Plan indicators */}
        <div className="w-full flex justify-between mt-6 px-2">
          {vpsPlans.map((planItem, index) => (
            <button
              key={planItem.name}
              onClick={() => setSelectedPlanIndex(index)}
              className={`text-xs font-medium transition-all duration-300 px-2 py-1 rounded ${
                index === selectedPlanIndex 
                  ? 'text-[#189bfa] bg-[#f1f6ff]' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {planItem.name}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {plan.features.map((feature, index) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow p-4 sm:p-5 flex flex-row items-center border border-gray-100 hover:shadow-lg transition-all duration-500 min-h-[80px] sm:min-h-[100px] transform hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#f1f6ff] mr-3 sm:mr-4 hover:bg-[#e1f0ff] transition-colors duration-300">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-sm sm:text-base text-[#03206B] mb-0.5">
                {feature.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-[#158aff]">{word}</span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium">
                {feature.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Price and CTA */}
      <div className="flex flex-row items-center gap-6 mt-2">
        <span className="text-3xl font-bold text-[#03206B] transition-all duration-500">
          {plan.price}৳<span className="text-lg font-medium text-gray-500">/mo</span>
        </span>
        <button className="bg-gradient-to-r from-[#158aff] to-[#005bea] hover:from-[#005bea] hover:to-[#158aff] text-white font-semibold px-10 py-3 rounded-full transition-all duration-300 text-base shadow hover:shadow-lg hover:scale-105 transform">
          Purchase Plan
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureCardsSection;
