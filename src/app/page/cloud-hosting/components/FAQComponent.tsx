"use client";
import React, { useState } from "react";
import { FaDashcube, FaHeadphonesAlt, FaServer } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

// FAQ data structure with category icons
const faqData = [
  {
    category: "General Questions",
    icon: <FaArtstation className="text-xl " />,
    faqs: [
      {
        question: "What is Web Hosting?",
        answer:
          "Web hosting is the service of storing data that keeps websites up and running for users...",
      },
      {
        question: "What is shared web hosting?",
        answer:
          "Shared web hosting is a type of web hosting where multiple websites share the resources of a single server.",
      },
      {
        question: "What is a domain name?",
        answer:
          "A domain name is the address of your website that people type in the browser URL bar to visit your site.",
      },
      {
        question: "How can I trust you?",
        answer:
          "We have a proven track record and positive customer reviews. Your trust is our priority.",
      },
      {
        question: "What's hostnin history?",
        answer:
          "Hostnin has been providing reliable hosting services for years, supporting thousands of customers.",
      },
    ],
  },
  {
    category: "Ordering & Billing",
    icon: <RiShoppingCart2Fill className="text-xl " />,
    faqs: [
      {
        question: "How can I order a plan?",
        answer:
          'To order a plan from hostnin, you have to select the plan you want to book and click on the "Order Now" button...',
      },
      {
        question: "How to Pay?",
        answer:
          "You can pay using various payment methods available on our platform.",
      },
      {
        question: "Which payment method you accept?",
        answer:
          "We accept credit cards, PayPal, and other major payment methods.",
      },
      {
        question: "What billing cycles do you offer?",
        answer: "We offer monthly, quarterly, and yearly billing cycles.",
      },
      {
        question: "What is the refund policy?",
        answer: "We offer a 30-day money-back guarantee on all our plans.",
      },
    ],
  },
  {
    category: "Hosting Server",
    icon: <FaServer className="text-xl " />,
    faqs: [
      {
        question: "What is disk space and how much do I need?",
        answer:
          "Disk space is an empty space that you can arrange however you like...",
      },
      {
        question: "Is disk space matter for website speed?",
        answer:
          "Disk space does not directly affect website speed, but having enough space is important.",
      },
      {
        question: "What is SSL security?",
        answer:
          "SSL security encrypts data transferred between your website and its visitors.",
      },
      {
        question: "How can I activate the SSL?",
        answer:
          "You can activate SSL from your control panel or by contacting support.",
      },
      {
        question: "What is bandwidth and how much do you need?",
        answer:
          "Bandwidth is the amount of data transferred to and from your website.",
      },
      {
        question: "What servers do you run?",
        answer:
          "We run high-performance servers with the latest hardware and security updates.",
      },
      {
        question: "How secure are your servers?",
        answer:
          "Our servers are protected with advanced security measures and regular monitoring.",
      },
      {
        question: "Do you offer Shell Access?",
        answer:
          "Shell access is available on select plans. Please contact support.",
      },
      {
        question: "Can I get root access?",
        answer: "Root access is available on dedicated server plans only.",
      },
    ],
  },
  {
    category: "Control Panel",
    icon: <FaDashcube className="text-xl " />,
    faqs: [
      {
        question: "What control panel do you offer?",
        answer:
          "Depending on the packages you purchase from us, we provide Cpanel, PokoPanel, etc.",
      },
      {
        question: "Is the control panel latest?",
        answer:
          "We always provide the latest stable versions of control panels.",
      },
      {
        question: "Can I get any demo of control panel?",
        answer: "Demo access is available upon request.",
      },
      {
        question: "Can I change the control panel by my own?",
        answer:
          "Control panel changes can be made depending on your plan.",
      },
    ],
  },
  {
    category: "Support System",
    icon: <FaHeadphonesAlt className="text-xl " />,
    faqs: [
      {
        question: "What is the support method?",
        answer:
          "We provide assistance via Messenger, WhatsApp, and hotline. Tickets also available.",
      },
      {
        question: "When will I get the support?",
        answer: "Our support team is available 24/7 to assist you.",
      },
      {
        question: "How much I need to pay for the support?",
        answer: "Support is included with all plans at no extra cost.",
      },
      {
        question: "Do you have a team or are you one man?",
        answer: "We have a dedicated team of professionals to support you.",
      },
    ],
  },
];

const FAQComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndexes, setOpenIndexes] = useState<number[]>(faqData.map(() => 0));

  const handleTabClick = (idx: number) => {
    setSelectedTab(idx);
  };

  const handleAccordionClick = (faqIdx: number) => {
    setOpenIndexes((prev) =>
      prev.map((openIdx, tabIdx) =>
        tabIdx === selectedTab ? (openIdx === faqIdx ? -1 : faqIdx) : openIdx
      )
    );
  };

  const currentFaqs = faqData[selectedTab].faqs;

  return (
    <div className="bg-[#f8f8f9]">
      <div className="w-full max-w-7xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-2 text-blue-700">
          FAQs: Your questions, our answers
        </h2>
        <p className="text-center text-gray-500 mb-8 w-[800px] mx-auto">
        Here you will find answers to the most frequently asked questions. If you still need assistance, feel free to ask our live support team. 
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {faqData.map((tab, idx) => (
            <button
              key={tab.category}
              className={`flex items-center gap-2 px-6 py-5 rounded-sm font-semibold transition-colors duration-200 focus:outline-none ${
                selectedTab === idx
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-black "
              }`}
              onClick={() => handleTabClick(idx)}
            >
              <span>{tab.icon}</span>
              {tab.category}
            </button>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="bg-white shadow-lg p-8">
          {currentFaqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="border-b last:border-b-0 border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
                onClick={() => handleAccordionClick(idx)}
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-700">
                  {openIndexes[selectedTab] === idx ? "−" : "+"}
                </span>
              </button>
              {openIndexes[selectedTab] === idx && (
                <div className="pb-5 text-gray-700 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
