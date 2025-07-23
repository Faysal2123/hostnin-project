import { FaRegHandshake } from 'react-icons/fa';
import { FaEnvelope, FaChartBar, FaLock, FaServer, FaTerminal } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegHandshake className="text-2xl text-blue-600" />,
    title: 'OneClick Install',
    desc: `It only takes one click to generate a copy of your entire website, which can then be used for testing, updating, or adding new content or code. As soon as you are satisfied with the results, you may deploy those changes to the live site in an effortless manner.`,
  },
  {
    icon: <FaChartBar className="text-2xl text-blue-600" />,
    title: 'Built-in Analytics',
    desc: `Monitor critical metrics for all of your WordPress sites, including load average, disk I/O, and bandwidth utilization, among other things. Get all the report right from your control panel, data can filtered by country, regions.`,
  },
  {
    icon: <FaLock className="text-2xl text-blue-600" />,
    title: 'Secured Login',
    desc: `Two-factor authentication, FTP security lock, brute-force login protection with StackProtect, and blocking by IP address or country all help keep people from getting into your control panel and files without your permission.`,
  },
  {
    icon: <FaEnvelope className="text-2xl text-blue-600" />,
    title: 'Email Management',
    desc: `For protection and privacy, TLS encrypts all email while it’s being sent. We use network-level scans, virus scans, and content-based scans to look for spam and viruses that come in.`,
  },
  {
    icon: <FaServer className="text-2xl text-blue-600" />,
    title: 'Powerful multisite hosting',
    desc: `Manage hosting, security, and domains in one location. No of your site count, advanced multi-site administration capabilities and filters give you control.`,
  },
  {
    icon: <FaTerminal className="text-2xl text-blue-600" />,
    title: 'Built in SSH Terminal',
    desc: `There are more than 80 1-click tools, including WordPress. phpMyAdmin, Git Version Control, domain names and DNS manager, SSH access, email manager, 2FA, and a lot more.`,
  },
];

const FeatureCards = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center bg-[#f8f8f9]"
      style={{
        backgroundImage: 'url("https://hostnin.com/wp-content/uploads/2022/09/bg-curve.png")',
      }}
    >
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
          What are Specials?
        </h1>
        <p className='text-gray-500 w-[800px] text-center mx-auto mb-8'>You’ll get more resources for less money with our plans, so you can count on their reliability. It’s easier than you think to start your own website with Hostnin!  </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4 pb-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 flex flex-col hover:shadow-md transition"
            >
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-base text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
