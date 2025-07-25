import React from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Low Number of Clients per Server",
    description:
      "We believe in quality, not quantity. Maintaining low numbers of clients per server makes a website more powerful and fastest. All the sites can get a better share of resources, bandwidth and more advanced features. For this, your websites are fully loaded with cutting-edge resources.",
  },
  {
    title: "24x7 Technical Support",
    description:
      "Developing a business is hard, but with our always-on support system, it's getting easier than you think. Working at midnight or dawn and worried about proper support? You shouldn't be. Our expert support members are always available for your need.",
  },
  {
    title: "Most Advanced SSD/NVMe Servers",
    description:
      "We use the latest server hardware with the most advanced technology to run websites without hassle. For this reason, we're the only one providing the best quality hosting at affordable prices. Get your website online with our advanced technology and run your business like a pro.",
  },
];

const ResellerBenefitsSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 pt-[400px]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Heading and left card */}
        <div>
          <h2 className="text-4xl md:text-3xl font-semibold text-[#001858] mb-4 leading-tight">
            We Offers massive benefits with<br />our reseller hosting plans!
          </h2>
          <p className="text-[#6b7280] text-lg mb-6 max-w-xl">
            Let your dreams become a reality with the most advanced tailored hosting. Traditional shared hosting is buggy, slow, and way more, but we&apos;re not. Our advanced technology makes your website fast and secure with no downtime.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6 w-full">
            <div>
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/07/happy-client.svg"
                alt="Low Number of Clients per Server"
                width={40}
                height={40}
               
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#001858] mb-2">{benefits[0].title}</h3>
              <p className="text-[#6b7280] text-base">{benefits[0].description}</p>
            </div>
          </div>
        </div>
        {/* Right: Two stacked cards */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6">
            <div>
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/07/support.svg"
                alt="24x7 Technical Support"
                width={40}
                height={40}
               
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#001858] mb-2">{benefits[1].title}</h3>
              <p className="text-[#6b7280] text-base">{benefits[1].description}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6">
            <div>
              <Image
                src="https://hostnin.com/wp-content/uploads/2022/07/ssd-storage.svg"
                alt="Most Advanced SSD/NVMe Servers"
                width={40}
                height={40}
              
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#001858] mb-2">{benefits[2].title}</h3>
              <p className="text-[#6b7280] text-base">{benefits[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerBenefitsSection; 