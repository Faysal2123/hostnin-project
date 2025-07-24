"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const DiscountBanner: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(26);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft((prevDays) => {
        if (prevDays <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevDays - 1;
      });
    }, 86400000); // 1 day in milliseconds

    return () => clearInterval(timer);
  }, []);

  return (
   <div className="bg-blue-800 text-white">
     <div className="max-w-7xl mx-auto py-4  ">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm md:text-base mb-2 md:mb-0">
          Get <span className="font-semibold text-red-600">50% Discount</span> Offer —{" "}
          <mark className="bg-yellow-200 px-1 rounded">{daysLeft} Days</mark> left!
        </p>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
          
          <Link href="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default DiscountBanner;
