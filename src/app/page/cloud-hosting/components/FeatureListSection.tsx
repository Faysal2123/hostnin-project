import React from "react";
import { MdCheckCircle } from "react-icons/md";

const features = [
  [
    "Easy Control Panel",
    "100% Server Uptime",
    "1 Hour Response Time",
    "24/7 Technical Support",
    "Clustered Failover DNS",
    "1TB+ DDOS Protection",
  ],
  [
    "CMS Script Installer",
    "Malware & Exploit Scanning",
    "Advanced CDN FREE",
    "Edge Caching System",
    "ASP.NET Access Hosting",
    "Unlimited Auto Responders",
  ],
  [
    "Spam Protection",
    "SSH Access Available",
    "Latest PHP Extensions",
    "ionCube PHP Loader",
    "Temporary Domain",
    "Junk Mail Filters",
  ],
  [
    "Git Version Control",
    "Cloud Based Server",
    "Latest Configuration",
    "10GB Mailbox Storage",
    "Unlimited SFTP Users",
    "45+ Web Optimization Tools",
  ],
];

const FeatureListSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-5 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-black mb-3 sm:mb-4">
          Cloud Hosting all Plans
          <br />
          <span className="block">Include Features</span>
        </h2>
        <div className="mt-8  lg:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {features.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-3 sm:space-y-4 lg:space-y-5">
              {column.map((feature, idx) => (
                <li key={idx} className="flex text-sm sm:text-base text-black items-center">
                  <span className="text-blue-900 mr-2 flex-shrink-0"><MdCheckCircle size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" /></span>
                  <span className="font-semibold text-xs sm:text-sm lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection; 