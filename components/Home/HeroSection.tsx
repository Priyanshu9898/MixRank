import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex sm:flex-row flex-col col-span-2 px-4 lg:px-[7.5rem]">
      <span className="2xl:text-[85px] 2xl:leading-[80px] xl:text-[68px] xl:leading-[50px] sm:text-[53px] sm:leading-[50px] text-[33px] leading-[30px] text-red-700 sml:w-full pr-3">
        &gt;
      </span>

      <div className="w-fit">
        <h1 className="2xl:text-[75px] 2xl:leading-[80px] xl:text-[62px] xl:leading-[60px] sm:text-[43px] sm:leading-[47px] text-[23px] leading-[30px] text-white font-normal max-w-[1350px]">
          Ultra-high-frequency technographic and people data for your data
          teams.
        </h1>

        <h2 className="text-[18px] leading-[25px] sm:text-[24px] sm:leading-[29px] md:text-[28px] md:leading-[35px] xl:text-[30px] xl:leading-[33px] 2xl:text-[35px] 2xl:leading-[40px] text-[#B4B4B4] font-normal max-w-[1350px] sm:my-3 xl:my-4 my-2 shadow">
          MixRank curates the world’s most updated feed of people, company, and
          technographic datasets. Receive updates at hourly intervals and be the
          first to know when the data you care about changes.
        </h2>

        <form
          className="flex gap-3 xl:flex-row flex-col flex-wrap xl:items-center"
        >
          <div className="flex relative sm:w-[500px] w-full my-1">
            <input
              type="email"
              name="email"
              className="h-[62px] bg-[#252525] rounded-[5px] border-none w-full px-5"
              placeholder="Enter your business email"
              required
            />
           
            <Image
              src="/assets/Images/email.svg"
              alt=""
              width={24}
              height={24}
              className="absolute right-0 top-[17px] mr-[17px] "
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center bg-[#EA3022] h-[60px] px-6 py-3 rounded hover:bg-[#ef1e2fb3] backdrop-blur-3xl sm:max-w-[278px] w-full"
          >
            TALK TO SALES
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
