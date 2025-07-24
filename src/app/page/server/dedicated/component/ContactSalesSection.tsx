import Image from 'next/image';
import { HiPhone } from 'react-icons/hi'; // Using react-icons

const ContactSalesSection = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <section className="w-full flex justify-center items-center py-12 px-4 bg-transparent">
        <div className="w-full max-w-7xl rounded-lg bg-[#001B8A] flex flex-col md:flex-row items-center justify-between p-5 px-10 shadow-lg">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center text-white mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Need Some Help?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Contact one of our friendly technical advisors now. Our team is available 24×7 via live chat and is ready to answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:scale-105 transition-transform">
                Live Chat With Sales
              </button>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#001B8A] text-2xl shadow-md">
                  <HiPhone className="w-7 h-7" />
                </span>
                <span className="text-xl md:text-xl font-bold text-white select-all">+880 1325-875955</span>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/07/building.png"
              alt="Contact Sales Illustration"
              height={350}
              width={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSalesSection;
