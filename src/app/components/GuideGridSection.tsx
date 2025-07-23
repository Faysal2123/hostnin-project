import React from "react";

const guides = [
  {
    image: "/assets/temp-link.webp", // Placeholder, update with real path
    category: "Cloud Hosting Guide",
    title: "কিভাবে টেম্পোরারি লিংক থেকে লাইভ করবেন?",
    link: "#",
  },
  {
    image: "/assets/cloud-panel-login.webp",
    category: "Cloud Hosting Guide",
    title: "কিভাবে ক্লাউড প্যানেলে লগিন করবেন?",
    link: "#",
  },
  {
    image: "/assets/addon-domain.webp",
    category: "Cloud Hosting Guide",
    title: "কিভাবে এডঅন ডোমেইন সেটআপ করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-package.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড প্যাকেজে কোটেশন: কিভাবে আপগ্রেড করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-mail-outlook.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড মেইলবক্স Outlook এ কানেক্ট করবেন",
    link: "#",
  },
  {
    image: "/assets/cloud-subdomain.webp",
    category: "Cloud Hosting Guide",
    title: "ক্লাউড হোস্টিংয়ে সাবডোমেইন তৈরি করবেন যেভাবে",
    link: "#",
  },
];

const GuideGridSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Comprehensive Guides: a Full Roadmap
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Our detailed guides are ready with your journey, whenever you need them: just search.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="h-40 w-full object-cover object-center rounded-t-xl"
              />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-orange-500 font-medium mb-2">
                  ● {guide.category}
                </span>
                <h3 className="text-lg font-bold mb-3 leading-snug">
                  {guide.title}
                </h3>
                <a
                  href={guide.link}
                  className="mt-auto text-sm text-gray-700 font-medium hover:underline flex items-center gap-1"
                >
                  বিস্তারিত পড়ুন <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideGridSection; 