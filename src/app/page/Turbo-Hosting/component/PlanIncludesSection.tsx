import React from "react";
import { FaLock,  FaCloudUploadAlt, FaDatabase, FaRocket, FaFingerprint, FaPhp, FaDumpsterFire, FaFolderOpen } from "react-icons/fa";
import { MdCloud } from "react-icons/md";

const features = [
  {
    icon: <FaFingerprint size={28} className="text-[#2250fc]" />,
    title: "Access Management",
  },
  {
    icon: <FaPhp size={28} className="text-[#2250fc]" />,
    title: "PHP Version Control",
  },
  {
    icon: <FaLock size={28} className="text-[#2250fc]" />, 
    title: "Free SSL Certificate",
  },
  {
    icon: <FaDumpsterFire size={28} className="text-[#2250fc]" />,
    title: "eCommerce Optimization",
  },
  {
    icon: <FaCloudUploadAlt size={28} className="text-[#2250fc]" />, 
    title: "Free Site Migration",
  },
  {
    icon: <FaFolderOpen size={28} className="text-[#2250fc]" />, 
    title: "Daily Regular Backups",
  },
  {
    icon: <FaDatabase size={28} className="text-[#2250fc]" />, 
    title:"DDoS Protection"
  },
  {
    icon: <FaRocket size={28} className="text-[#2250fc]" />,
    title:"Auto Stagging System," 
  },
  {
    icon: <MdCloud size={28} className="text-[#2250fc]" />, 
    title: "Autoscaling Cloud Technology",
  },
];

const PlanIncludesSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-5 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#03206B] mb-14 tracking-tight">
          All WordPress Hosting Plans Include
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-sm shadow-lg px-5 py-4 md:px-8 md:py-6 w-full max-w-xs sm:max-w-none mx-auto gap-3 xs:gap-4 hover:shadow-xl hover:scale-105 hover:shadow-blue-200 transition-all duration-200"
            >
              <span className="flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 rounded-full ">
                {feature.icon}
              </span>
              <span className="font-bold text-sm xs:text-base text-[#03206B] text-left">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanIncludesSection; 