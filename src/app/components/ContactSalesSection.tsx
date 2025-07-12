import React from "react";
import Image from "next/image";
import manAttendingOnlineMeeting from '../assets/man-attending-online-meeting.png';
const ContactSalesSection = () => {
  return (
    <section className="py-10 bg-[#fcfcfc] w-full flex justify-center">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl shadow-2xl px-8 py-8 md:py-12 md:px-12 max-w-7xl w-full min-h-[300px] gap-8 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Do You Have Questions?<br />
            <span className="block">Feel free to ask anything!</span>
          </h2>
          <p className="text-gray-200 mb-6 text-base md:text-base max-w-md">
            Feel free to contact our friendly technical advisors at any time. Our team of professionals is available 24/7 via live chat, ticket, and WhatsApp to assist you.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 text-base md:text-base">
            Live Chat With Sales
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full h-full">
          <div className="w-[260px] md:w-[320px] lg:w-[400px]">
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