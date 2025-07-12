import Image from 'next/image';
import lock from '../assets/lock.webp';

const MigrationPromoSection = () => {
  return (
    <section className="flex justify-center items-center bg-[#f8f8f8] pb-8 md:py-16">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl w-full max-w-[1300px] px-6 sm:px-10 md:px-16 py-10 gap-10 md:gap-20 items-center">
        {/* Illustration */}
        <div className="flex justify-center md:justify-start w-full md:w-[340px]">
          <Image
            src={lock}
            alt="Migration Illustration"
            width={300}
            height={240}
            className="w-[260px] sm:w-[300px] h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071952] mb-4 leading-snug">
            Migrate Your Site Instantly without any<br className="hidden sm:inline" /> single hour downtime
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            Migrating a website can be daunting, which is why we have team of experts who are always ready to migrate your website smoothly.
          </p>
          <button className="bg-[#0057ff] hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base shadow-md transition-colors duration-200">
            Request free Migration
          </button>
        </div>
      </div>
    </section>
  );
};

export default MigrationPromoSection;
