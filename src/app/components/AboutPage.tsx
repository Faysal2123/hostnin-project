// components/DiscountBanner.tsx
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const DiscountBanner: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(26);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(prevDays => {
        if (prevDays <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevDays - 1;
      });
    }, 86400000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-md-6">
            <div className="topbar-left">
              <p className="mb-0">
                Get 50% Discount Offer <mark>{daysLeft} Days</mark>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="topbar-right text-end">
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;