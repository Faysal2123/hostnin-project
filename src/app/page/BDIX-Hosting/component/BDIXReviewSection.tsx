"use client";

import { IoIosStar } from "react-icons/io";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";

const reviewData = [
  {
    name: "Mostafizur Rahman Santo",
    role: "Businessman",
    text: "One of the best hosting services I've ever used, super-fast hosting at a reasonable price. fast customer service, and the service agents are very professional. I'm fully satisfied with their service. I wish hostnin best of luck!",
    rating: 5
  },
  {
    name: "Al Amin Robin",
    role: "Web Developer",
    text: "Hostnin is an awesome hosting company and service provider. They are always there when I need them. They helped me a lot of times, and I love their support. I am a user of their premium hosting, and the server is too fast.",
    rating: 5
  },
  {
    name: "Aqib Javed",
    role: "Freelancer",
    text: "Their Quality, affordability, and responsiveness dependable, high-quality maintenance services and assistance Highly Recommended. In Hostnin, i never gets any slower support which is very much appriciated.",
    rating: 5
  }
];

const reviewImages = [
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-4.png",
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-2.png",
  "https://hostnin.com/wp-content/uploads/2022/07/unnamed-3.png"
];

const BDIXReviewSection = () => {
  return (
    <section className="relative pt-52 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8f8f8] ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://hostnin.com/wp-content/uploads/2022/09/bg-shape.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Read our customer reviews
          </h2>
          <p className="text-white/80 text-base sm:text-base max-w-3xl mx-auto">
            We are consistently rated 5 stars by our customers. With over 100 reviews on Trustpilot and Facebook, see for yourself why you can trust us to power your website.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviewData.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 py-10 px-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 overflow-hidden">
                  <img src={reviewImages[index]} alt={review.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <IoIosStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 flex items-center">
            <FaGoogle className="text-4xl text-[#4285F4] mr-4" />
            <div>
              <p className="text-sm text-gray-600">Hostnin is rated &ldquo;Excellent&rdquo; with 5/5 on</p>
              <p className="font-semibold">Google Business Review</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center">
            <FaCheckCircle className="text-4xl text-[#00B67A] mr-4" />
            <div>
              <p className="text-sm text-gray-600">Hostnin is rated &ldquo;Excellent&rdquo; with 4.9/5 on</p>
              <p className="font-semibold">Trustpilot Business Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDIXReviewSection; 