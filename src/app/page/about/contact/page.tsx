
import Navbar from "@/app/components/Navbar";
import React from "react";

import Footer from "@/app/components/Footer";
import HeroSection from "./HeroSection";
import ContactSalesBanner from "./ContactSalesBanner";


export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
       <HeroSection></HeroSection>
      <ContactSalesBanner />
      <Footer></Footer>
    </>
  );
} 