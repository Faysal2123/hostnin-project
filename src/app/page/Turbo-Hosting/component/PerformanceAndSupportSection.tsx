"use client";
import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    const offset = 80; // Header height offset
    const elementPosition = pricingSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const performanceFeatures = [
  '16+ CDN Included (Worthy as CloudFlare Premium Plan)',
  '100% Secure & safe Shell (SSH) Access',
  'Web Optimization feature for SEO',
  'Unlimited Download and Upload Speed through FTP',
];

const supportFeatures = [
  { text: '24/7 Chat Support through messenger' },
  { text: 'Live Call Support through What\'s App' },
  { text: 'Max. 1 Hours Email Support' },
  { text: 'Max. 30 Minute ticket reply'},
  { text: 'Anydesk/TeamViewer Support'},
];



const PerformanceAndSupportSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-10 xs:py-14 px-2 xs:px-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 xs:gap-20">
        {/* Security Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 xs:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-[#0a174e] mb-2 xs:mb-4">
              Enterprise-Grade Security<br />
              For Your Website
            </h2>
            <p className="text-gray-600 mb-4  text-base">
            In addition to our web hosting solution, Hostnin&apos;s also offers advanced anti-virus and spam protections, along with up to unlimited storage mailboxes. For any business to be successful, email correspondence needs to remain uninterrupted at all times.
            <br />
            <span>
            In case you have any confusion regarding which Email Solution is best suited for your business, you can contact us for assistance. Live Chat is available 24 hours a day, 7 days a week.
            </span>
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2 md:py-4 rounded-full transition-colors text-sm xs:text-base">
              Contact Us
            </button>
           
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-[220px] xs:max-w-xs sm:max-w-md md:max-w-lg">
            <Image
              src="https://hostnin.com/wp-content/uploads/2022/09/man.png"
              alt="Security Features"
              width={300}
              height={200}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Performance Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 xs:gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-semibold text-[#0a174e] mb-2 xs:mb-4">
              We Offers Lighting Fast<br />
              Loading Speed
            </h2>
            <p className="text-gray-600 mb-4 xs:mb-6 text-[17px]">
              Speed is one of the most basic but powerful features that you will get instantly with your Shared hosting package. A fast loading website ensures that your competitor are not able to snatch your potential customers.
            </p>
            <ul className="mb-6 xs:mb-8 space-y-2 xs:space-y-3">
              {performanceFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs md:text-base text-[#0a174e]">
                  <MdCheckCircle className="text-blue-600 " size={18} />
                  <span className='font-semibold text-base'>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2 md:py-4 rounded-full transition-colors text-sm xs:text-base"
            >
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-[0.9] flex justify-center w-full max-w-[220px] xs:max-w-xs sm:max-w-md md:max-w-lg">
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/03/features.png"
              alt="Lighting Fast Speed"
              width={300}
              height={200}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Support Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 xs:gap-12">
          {/* Text */}
          <div className="flex-[1.2] max-w-3xl">
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-semibold text-[#0a174e] mb-2 xs:mb-4">
              Let us take worries away & put<br />
              time back in your day
            </h2>
            <p className="text-gray-600 mb-4 xs:mb-6 text-[17px]">
              We offer expert 24/7/365 problem-solving for everyone. For a closer partnership, choose the Advanced Support add-on that enhances your support experience or the Premium Support add-on where our Senior Support Engineers work as an extension of your in-house team.
            </p>
            <ul className="mb-6 xs:mb-8 space-y-2 xs:space-y-3">
              {supportFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs md:text-base text-[#0a174e]">
                  <MdCheckCircle className="text-blue-600" size={18} />
                  <span className='font-semibold text-base'>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2 md:py-4 rounded-full transition-colors text-sm xs:text-base"
            >
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-full max-w-[220px] xs:max-w-xs sm:max-w-md md:max-w-lg">
            <Image
              src="https://i.ibb.co/FbGFz0zH/customer-support-3-2048x1745.webp"
              alt="Support Illustration"
              width={300}
              height={200}
              className="object-contain drop-shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAndSupportSection; 