import DataTeamsSection from "@/components/Home/CompanyIcons";
import DataSections from "@/components/Home/DataSection";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
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
    </>
  );
};

export default page;
