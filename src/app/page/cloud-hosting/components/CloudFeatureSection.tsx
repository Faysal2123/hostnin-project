import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';

const CloudFeatureSection = () => {
  return (
    <div className='bg-[#f8f8f8]'>
        <section className=" rounded-2xl shadow-lg px-12 py-16 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto ">
      {/* Left Side - Text Content */}
      <div className="flex-1 lg:pr-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our cloud plan includes
        </h2>
        <h3 className="text-4xl font-bold text-blue-600 mb-6">
          16+ CDN Locations Worldwide
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
          Go beyond a basic one-click app and deliver lightning-fast load times packed full of features like WordPress staging, cloning, cache, backups, unlimited CDN, image/code optimisation and more built-in (no expensive plug-ins required).
        </p>
        
        {/* Feature List */}
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3 text-gray-700">
            <MdCheckCircle className="text-blue-500 w-5 h-5 mt-1" />
            <span className="text-sm">PHP-FPM Advanced Process Management with Dedicated Opcache Performance</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <MdCheckCircle className="text-blue-500 w-5 h-5 mt-1" />
            <span className="text-sm">One-Click Gmail and Office 365 DNS Setup</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <MdCheckCircle className="text-blue-500 w-5 h-5 mt-1" />
            <span className="text-sm">Load Balanced & Redundant Platform</span>
          </li>
        </ul>
        
        {/* Buttons */}
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Sign Up
          </button>
          <button className="text-gray-700 hover:text-blue-500 font-medium px-8 py-3 transition-colors">
            Compare Pricing
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 w-[500px]">
        <Image
          src="https://hostnin.com/wp-content/uploads/2023/05/hotim-bg.png"
          alt="Cloud Security Illustration"
          width={600}
          height={320}
          className="object-contain"
          priority
        />
      </div>
    </section>
    </div>
  );
};

export default CloudFeatureSection; 