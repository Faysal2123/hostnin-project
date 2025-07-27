'use client';

import React from 'react';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Purchase the perfect plan',
    description: 'Depending on your budget and needs, purchasing the plan is half the battle. Choose what you need and place your order. You may also contact us for custom quotation.',
    bg: '#ec4899', // Tailwind pink-500
    glow: 'rgba(236, 72, 153, 0.18)'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: 'Get your credentials to enter',
    description: 'After a successful transaction, you will get the login details in your email. By doing this, you can start your email management journey with us.',
    bg: '#facc15', // Tailwind yellow-400
    glow: 'rgba(250, 204, 21, 0.18)'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Send and Recieve emails',
    description: 'There you go; all the processes are ready for you now. You can send and recieve mails directly to your mailbox. You can also forward the emails to your favorite Gmail interface.',
    bg: '#22d3ee', // Tailwind cyan-400
    glow: 'rgba(34, 211, 238, 0.18)'
  },
];

const OrderingProcessSection = () => {
  return (
    <div className="bg-[#fafbfc] py-10">
      <section className="py-10 xs:py-12 px-2 xs:px-2 md:px-8 max-w-7xl mx-auto ">
        <div className="text-center mb-8 xs:mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-4">Ordering a turbo hosting is easier than ever!</h2>
          <p className="text-gray-600 text-sm xs:text-base">
            Choose your plan based on features and the detailes offering. Choosing a perfect plan is key to Build good website.
          </p>
        </div>
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between z-10 gap-8 md:gap-x-16" style={{minHeight: 220}}>
          {/* Curved dashed line */}
          <svg
            className="hidden md:block absolute left-0 right-0 mx-auto"
            style={{ top: 92, left: 0, right: 0, width: '100%', height: 120, zIndex: 0 }}
            viewBox="0 0 1000 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M166 100 Q500 10 834 100"
              stroke="#e2e8f0"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,12"
            />
          </svg>
          <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 md:gap-x-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center mx-0 md:mx-8 mb-12 md:mb-0 flex-1"
                style={{ position: 'relative', zIndex: 2 }}
              >
                {/* Glow + white outline + icon */}
                <div className="relative flex items-center justify-center" style={{ height: 90 }}>
                  {/* Glow */}
                  <span
                    className="absolute"
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      top: 10,
                      left: 0,
                      right: 0,
                      margin: 'auto',
                      background: step.glow,
                      filter: `blur(8px)`,
                      zIndex: 0,
                    }}
                  />
                  {/* White outline */}
                  <span
                    className="absolute"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      top: 9,
                      left: 0,
                      right: 0,
                      margin: 'auto',
                      background: '#fff',
                      zIndex: 1,
                    }}
                  />
                  {/* Main icon */}
                  <div
                    className="flex items-center justify-center rounded-full shadow-xl relative z-10"
                    style={{
                      width: 64,
                      height: 64,
                      background: step.bg,
                      border: '4px solid #fff',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black mt-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs text-base md:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderingProcessSection; 