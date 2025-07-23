import React from "react";
import { MdDone } from "react-icons/md";

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
    <section className="w-full bg-[#f8f8f8] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-black mb-4">
          Cloud Hosting all Plans
          <br />
          <span className="block">Include Features</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-5">
              {column.map((feature, idx) => (
                <li key={idx} className="flex  text-base text-black items-center">
                  <span className="text-blue-900 mr-2"><MdDone size={15} /></span>
                  <span className="font-semibold">{feature}</span>
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