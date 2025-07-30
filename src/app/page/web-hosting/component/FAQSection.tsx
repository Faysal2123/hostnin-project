"use client";
import React, { useState, useRef } from "react";
import { faqData } from "../data/faqData";
import { IconType } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0].id);
  const [openIndexes, setOpenIndexes] = useState<{ [key: string]: number | null }>({
    [faqData[0].id]: 0,
  });
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
    setOpenIndexes((prev) => ({ ...prev, [id]: 0 }));
  };

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory] === index ? null : index,
    }));
    setTimeout(() => {
      const ref = questionRefs.current[index];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          ref.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 300); // transition duration এর চেয়ে একটু বেশি
  };

  const category = faqData.find((cat) => cat.id === selectedCategory);

  return (
    <section className="w-full pb-40 flex flex-col items-center bg-[#f8f8f8] py-8 px-4 sm:px-6"
      style={{ overflowAnchor: 'none' }}
    >
      <div className="pb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d3ecb] mb-2">
          FAQs: Your questions, our answers
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Here you will find answers to the most frequently asked questions. If you still need assistance, feel free to contact our live support team.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-10 w-full max-w-7xl justify-center items-start">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 w-full md:w-[280px]">
          {faqData.map((cat) => {
            const Icon = cat.icon as IconType;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-5 text-sm sm:text-base font-semibold transition-all duration-200 rounded-md
                  ${isActive ? "bg-[#2250F4] text-white" : "bg-white text-black hover:bg-[#f0f4ff]"}
                `}
                style={{
                  boxShadow: "0 4px 16px 0 rgba(45,62,203,0.05)",
                }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full
                    ${isActive ? "bg-white" : "bg-[#e6edff]"}
                  `}
                >
                  <Icon className={`text-xl ${isActive ? "text-[#2250F4]" : "text-[#2250F4]"}`} />
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 sm:p-8 min-h-[500px] w-full"
          style={{ overflowAnchor: 'auto' }}
        >
          {category && (
            <>
              {category.faqs.map((faq, idx) => {
                const isOpen = openIndexes[selectedCategory] === idx;
                return (
                  <div
                    key={faq.question}
                    ref={el => { questionRefs.current[idx] = el; }}
                    className="border-b border-[#e6e6e6] last:border-b-0"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer py-4"
                      onClick={() => handleToggle(idx)}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-[#222]">
                        {faq.question}
                      </h4>
                      <span className="text-xl sm:text-2xl text-[#2250F4]">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </div>
                    {isOpen && (
                      <div
                        className="transition-all duration-300 ease-in-out overflow-hidden"
                        style={{ maxHeight: isOpen ? 500 : 0 }}
                      >
                        <p className="mb-4 text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
