import React from "react";
import Image from "next/image";
import manAttendingOnlineMeeting from '../../../assets/man-attending-online-meeting.png';
const ContactSalesSection = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-[#fcfcfc] w-full flex justify-center px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl shadow-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 max-w-7xl w-full min-h-[250px] sm:min-h-[300px] gap-6 sm:gap-8 lg:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start lg:pr-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Do You Have Questions?<br />
            <span className="block">Feel free to ask anything!</span>
          </h2>
          <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base md:text-base max-w-md mx-auto lg:mx-0">
            Feel free to contact our friendly technical advisors at any time. Our team of professionals is available 24/7 via live chat, ticket, and WhatsApp to assist you.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base md:text-base w-full sm:w-auto">
            Live Chat With Sales
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full h-full order-first lg:order-last">
          <div className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px]">
            <Image
              src={manAttendingOnlineMeeting}
              alt="Live Chat Illustration"
              width={360}
              height={360}
              className="w-full h-auto max-w-[360px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesSection; 