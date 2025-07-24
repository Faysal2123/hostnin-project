import React from 'react';

const cards = [
  {
    title: 'Scalability Guranteed',
    description:
      'You can build a reliable technical platform for your business applications with Hostnin dedicated servers. By interconnecting your servers with other Hostnin solutions, like Hosted Private Cloud and Public Cloud, you’re able to scale your infrastructure even further.',
    icon: '/window.svg', // Placeholder icon
  },
  {
    title: 'One Click Deploy',
    description:
      'Your servers will be set up in one of our 11 datacenters around the world in less than one minute. Your customers’ services will continue to run smoothly as a result of the security and high-resilience of your network. The one-click deployment option makes it easier for you to operate the server.',
    icon: '/window.svg', // Placeholder icon
  },
  {
    title: 'Make it last',
    description:
      'With a Hostnin dedicated server, you are able to take advantage of a wide variety of innovative and unique solutions across our entire infrastructure, such as water-cooling for energy efficiency, and Hostnin Link Aggregation (OLA) technology, which has been designed and developed by our experts.',
    icon: '/window.svg', // Placeholder icon
  },
  {
    title: 'Security Optimized',
    description:
      'It is our goal to provide you with clear information about our pricing, services, and options. As part of every one of our solutions, you will receive features included by default at no extra charge, such as unlimited ingress and egress traffic, anti-DDoS protection, and even 500 GB of external storage space.',
    icon: '/window.svg', // Placeholder icon
  },
];

const WhyChooseDedicatedSection: React.FC = () => {
  return (
    <div className='bg-[#f8f8f8] py-10'>
        <section
      className="w-full py-10 px-2 md:px-0 relative" 
      style={{
        backgroundImage:
          'url(https://hostnin.com/wp-content/uploads/2022/09/ds-about-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '350px', 
        height: '100%',
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why choose Hostnin for Dedicated Servers?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          You should choose a dedicated server based on the applications you use for your business
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-start min-h-[150px] text-left hover:shadow-2xl transition-shadow" 
          >
            <img src={card.icon} alt={card.title} className="w-10 h-10 mb-3" />
            <h3 className="font-bold text-xl mb-1 text-black">{card.title}</h3> 
            <p className="text-gray-700 text-sm">{card.description}</p> 
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default WhyChooseDedicatedSection; 