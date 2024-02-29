import { Testimonial } from "@/types";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="w-[350px] max-w-full relative group bg-[#161616] flex space-x-3 p-9 rounded-[15px] h-max">
      <div className="inline-flex">
        <div className="sm:h-2 sm:w-2 h-1.5 w-1.5 bg-white rounded-full mt-2"></div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="space-y-4 flex-grow">
          <p className="text-white md:text-xl sm:text-lg text-base">
            {testimonial.text}{" "}
            <mark
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              className="text-[#EA3022]"
            >
              {testimonial.highlight}
            </mark>
          </p>
          <p className="text-[#B4B4B4] md:text-lg sm:text-base text-sm mb-auto">
            {testimonial.source}
          </p>
        </div>
        <div className="flex mt-28 space-x-3 ">
          <Image
            src={testimonial.logoUrl}
            width={64}
            height={64}
            className="w-16 h-16 transition-[filter] ease-in-out duration-500 grayscale group-hover:grayscale-0"
            alt=""
          />
          <div className="flex flex-col flex-grow">
            <p className="text-white font-semibold sm:text-xl text-lg leading-normal">
              {testimonial.position}
            </p>
            <p className="text-[#B4B4B4] sm:text-base text-sm leading-normal">
              Business Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
