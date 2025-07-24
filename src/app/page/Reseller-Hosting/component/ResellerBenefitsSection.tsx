import React from "react";

const benefits = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#E6EEFF"/><g><path d="M20 13l-4 7h8l-4-7z" fill="#1A237E"/></g></svg>
    ),
    title: "Low Number of Clients per Server",
    description:
      "We believe in quality, not quantity. Maintaining low numbers of clients per server makes a website more powerful and fastest. All the sites can get a better share of resources, bandwidth and more advanced features. For this, your websites are fully loaded with cutting-edge resources.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#E6EEFF"/><g><path d="M28 18v-2a8 8 0 10-16 0v2a4 4 0 00-2 3.464V26a2 2 0 002 2h16a2 2 0 002-2v-4.536A4 4 0 0028 18zm-8 8a2 2 0 110-4 2 2 0 010 4zm6-8H14v-2a6 6 0 1112 0v2z" fill="#1A237E"/></g></svg>
    ),
    title: "24x7 Technical Support",
    description:
      "Developing a business is hard, but with our always-on support system, it's getting easier than you think. Working at midnight or dawn and worried about proper support? You shouldn't be. Our expert support members are always available for your need.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#E6EEFF"/><g><rect x="13" y="15" width="14" height="10" rx="2" fill="#1A237E"/><rect x="16" y="18" width="8" height="2" rx="1" fill="#E6EEFF"/></g></svg>
    ),
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
            <div>{benefits[0].icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#001858] mb-2">{benefits[0].title}</h3>
              <p className="text-[#6b7280] text-base">{benefits[0].description}</p>
            </div>
          </div>
        </div>
        {/* Right: Two stacked cards */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6">
            <div>{benefits[1].icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#001858] mb-2">{benefits[1].title}</h3>
              <p className="text-[#6b7280] text-base">{benefits[1].description}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6">
            <div>{benefits[2].icon}</div>
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