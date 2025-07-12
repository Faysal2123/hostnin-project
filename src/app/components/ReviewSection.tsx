"use client";
import React from "react";
import { reviews } from "../data/reviews";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ReviewSection: React.FC = () => {
  return (
    <section className="bg-[#f8f8f9] py-12">
      <div className="max-w-7xl mx-auto ">
        <Slider {...sliderSettings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between min-h-[340px] h-full">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 aspect-square rounded-full overflow-hidden mr-4 border-4 border-white shadow flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={72}
              height={72}
              className="rounded-full  object-cover aspect-square"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2343]">
                      {review.name}
                    </h3>
                    <div className="flex text-[#f7b500] mt-1 ">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6b6b6b] text-base mb-8">{review.review}</p>
                <FaQuoteLeft className="text-4xl text-[#f3f3f3]" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
