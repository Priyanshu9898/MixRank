import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection2 = () => {
  return (
    <>
      <div className="relative bg-black px-4 lg:px-24 ">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/assets/Images/bg2.webp"}
            layout={"fill"}
            objectFit={"contain"}
            quality={100}
            alt="Background"
            className="w-full h-full px-4 lg:px-28"
          />
        </div>

        <div className=" relative z-10 min-h-screen flex justify-center items-start py-2 lg:py-28 text-white px-4 mx-auto">
          <div className="z-10 relative grid xl:grid-cols-2 grid-cols-1 gap-8">
         
            <div className="col-span-1 flex flex-col justify-center">
              <h3 className="text-[28px] leading-[30px] sm:text-[42px] sm:leading-[46px] xl:text-[48px] xl:leading-[54px] py-4 font-normal">
                Out-of-the-box and bespoke integrations with leading customer
                data platforms
              </h3>
              <p className="text-[#706D6A] pb-5 text-lg sm:text-[22px]">
                Ingest our data into your platform of choice. We can either
                provide raw data feeds, or help you build custom integrations to
                applications of your preference.
              </p>
            </div>

        
            <div className="col-span-1 flex justify-center items-center">
              <Image
                src="/assets/Images/bg2.png"
                width={800}
                height={600}
                alt=""
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
