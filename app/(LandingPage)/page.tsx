import DataTeamsSection from "@/components/Home/CompanyIcons";
import DataMetricsGrid from "@/components/Home/DataMetricsGrid";
import DataSections from "@/components/Home/DataSection";
import HelpSections from "@/components/Home/HelpSections";
import HeroSection from "@/components/Home/HeroSection";
import HeroSection2 from "@/components/Home/HeroSection2";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

import React from "react";

const page = () => {
  return (
    <>
      <div className="relative bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/assets/Images/bg1.png"}
            layout={"fill"}
            objectFit={"cover"}
            quality={100}
            alt="Background"
            className="w-full h-full"
          />
        </div>
        <Navbar />
        <div className="relative z-10 min-h-screen flex justify-center items-start text-white px-4 mx-auto">
          <HeroSection />
        </div>
      </div>
      
        
      <DataTeamsSection />
      <DataSections />
      <DataMetricsGrid />
      {/* <HelpSections /> */}
      <HeroSection2 />
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
