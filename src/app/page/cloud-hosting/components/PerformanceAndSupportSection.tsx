import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';

const performanceFeatures = [
  '16+ CDN Included (Worthy as CloudFlare Premium Plan)',
  '100% Secure & safe Shell (SSH) Access',
  'Web Optimization feature for SEO',
  'Unlimited Download and Upload Speed through FTP',
];

const supportFeatures = [
  { text: '24/7 Chat Support through messenger' },
  { text: 'Live Call Support through What’s App' },
  { text: 'Max. 1 Hours Email Support' },
  { text: 'Max. 30 Minute ticket reply'},
  { text: 'Anydesk/TeamViewer Support'},
];

const PerformanceAndSupportSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20 px-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Performance Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a174e] mb-4">
              We Offers Lighting Fast<br />
              Loading Speed
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              Speed is one of the most basic but powerful features that you will get instantly with your Shared hosting package. A fast loading website ensures that your competitor are not able to snatch your potential customers.
            </p>
            <ul className="mb-8 space-y-3">
              {performanceFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[#0a174e]">
                  <MdCheckCircle className="text-blue-600 " size={20} />
                  <span className='font-semibold'>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-[500px]">
            <Image
              src="https://hostnin.com/wp-content/uploads/2023/03/features.png"
              alt="Lighting Fast Speed"
              width={500}
              height={350}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a174e] mb-4">
              Let us take worries away & put<br />
              time back in your day
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              We offer expert 24/7/365 problem-solving for everyone. For a closer partnership, choose the Advanced Support add-on that enhances your support experience or the Premium Support add-on where our Senior Support Engineers work as an extension of your in-house team.
            </p>
            <ul className="mb-8 space-y-3">
              {supportFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[#0a174e]">
                  <MdCheckCircle className="text-blue-600" size={20} />
                  <span className='font-semibold'>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              See Pricing
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center w-[500px]">
            <Image
              src="https://i.ibb.co/FbGFz0zH/customer-support-3-2048x1745.webp"
              alt="Support Illustration"
              width={600}
              height={350}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAndSupportSection; 