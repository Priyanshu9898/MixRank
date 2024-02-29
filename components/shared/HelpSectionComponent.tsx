import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HelpSection } from "@/types";

interface HelpSectionProps {
  section: HelpSection;
}

const HelpSectionComponent: React.FC<HelpSectionProps> = ({ section }) => {
  return (
    <div className="relative flex flex-col-reverse w-fit max-w-[900px]">
      <div className="flex flex-col px-5 py-6 space-y-5 border-l-3 border-[#F44033] w-full max-w-[621px]">
        <h5 className="text-white hover:text-[#EA3022] hover:translate-x-6 transition-transform duration-200 text-2xl cursor-pointer">
          {section.title}
        </h5>
        <div>
          <p className="sm:text-2xl text-lg text-[#706D6A]">
            {section.description}
          </p>
          <Link
            href={section.linkUrl}
            className="text-white underline decoration-[#f44033] underline-offset-8 flex items-center space-x-2 mt-4"
          >
            {section.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpSectionComponent;
