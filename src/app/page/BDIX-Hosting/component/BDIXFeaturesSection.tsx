import React from 'react';

const features = [
  {
    title: '24x7 Pro Support',
    description: 'Having support is crucial for bdix, so we make sure to provide you with the quick support you need.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.64.44 3.18 1.21 4.5L3 21l4.5-1.21A8.96 8.96 0 0012 22z" stroke="#1a40c6" strokeWidth="2"/><circle cx="9" cy="10" r="1" fill="#1a40c6"/><circle cx="15" cy="10" r="1" fill="#1a40c6"/></svg>
    ),
  },
  {
    title: 'All Managed Includes',
    description: 'More options means more control of your hosting, we provides almost every option to manage.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1a40c6" strokeWidth="2"/><path d="M8 2v4M16 2v4" stroke="#1a40c6" strokeWidth="2"/><rect x="9" y="10" width="6" height="6" rx="1" fill="#1a40c6"/></svg>
    ),
  },
  {
    title: 'Awstats & Webalizer',
    description: 'AWStats is a powerful and feature-rich tool that generates advanced web statistics graphically.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#1a40c6" strokeWidth="2"/><path d="M7 13v-2m4 2V9m4 6v-4" stroke="#1a40c6" strokeWidth="2"/><circle cx="7" cy="15" r="1" fill="#1a40c6"/><circle cx="11" cy="11" r="1" fill="#1a40c6"/><circle cx="15" cy="15" r="1" fill="#1a40c6"/></svg>
    ),
  },
  {
    title: 'Anti-Virus Protection',
    description: 'To protect the websites you host, we use advanced antivirus protection, which prevents all kinds of malware.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#1a40c6" strokeWidth="2"/><path d="M8 8l8 8M16 8l-8 8" stroke="#1a40c6" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Lightning-Fast Storage',
    description: 'Website speed is an important ranking signal for both Google and the user experience.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" stroke="#1a40c6" strokeWidth="2"/><rect x="7" y="11" width="2" height="2" rx="1" fill="#1a40c6"/><rect x="15" y="11" width="2" height="2" rx="1" fill="#1a40c6"/></svg>
    ),
  },
  {
    title: 'Next-gen Firewalls',
    description: 'The ability to manage and filter traffic by country is one of the most-requested features of cPanel servers.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1a40c6" strokeWidth="2"/><path d="M8 8h8v8H8z" fill="#1a40c6"/></svg>
    ),
  },
  {
    title: 'Ruby, Python, NodeJS',
    description: 'We provide Ruby, Python, and Node.js features with our bdix plans so users can use them.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1a40c6" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#1a40c6" strokeWidth="2"/></svg>
    ),
  },
  {
    title: '99.9% Server Uptime',
    description: 'With our enterprise grade datacenter, we ensures almost 100% uptime to keep your websites always online.',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" stroke="#1a40c6" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#1a40c6" strokeWidth="2"/></svg>
    ),
  },
];

const BDIXFeaturesSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-20 lg:py-14 bg-[#f8f8f8] px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a40c6] mb-4 text-start">BDIX Hosting Features</h2>
        <p className="text-[#232946] text-base mb-5 text-start max-w-2xl">
          Our BDIX hosting offers essential features for easier use and faster response times for your website.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition-shadow min-h-[200px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-[#232946]">{feature.title}</h3>
              <p className="text-[#6b7280] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDIXFeaturesSection; 