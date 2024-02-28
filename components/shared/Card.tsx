import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DataSection } from "@/types";

interface CardProps {
  section: DataSection;
}

const Card: React.FC<CardProps> = ({ section }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#161616] rounded-lg p-6 flex flex-col justify-between space-y-5"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      variants={itemVariants}
    >
      <figcaption className="flex items-center space-x-4">
        <div className="bg-[#1F1E21] w-[74px] h-[74px] flex items-center justify-center rounded-sm">
          <Image
            src={section.imageUrl}
            alt=""
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-[#F44033] font-semibold">
            {section.subTitle}
          </p>
          <h2 className="text-2xl text-white mt-0.5">{section.title}</h2>
        </div>
      </figcaption>
      <div>
        <blockquote className="text-[#706D6A] mt-2">
          {section.description}
        </blockquote>
        <Link
          href={section.linkUrl}
          className="text-white hover:underline flex items-center space-x-2 mt-4"
        >
          <span>{section.linkText}</span>
          <svg
            className="h-5 w-5 fill-white transition-transform transform group-hover:translate-x-1 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
