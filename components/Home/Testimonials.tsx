"use client";

import React from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/types";
import TestimonialCard from "../shared/TestimonialCard";
import { InfiniteMovingCards } from "../shared/InfiniteMovingCards";

const testimonial: Testimonial[] = [
  {
    id: 1,
    text: "MixRank supercharges Optimizely’s",
    highlight: "mobile launch",
    source:
      "Not having MixRank would be a lot like walking with your eyes closed",
    position: "Optimizely",
    logoUrl: "/assets/Images/test1.webp",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="bg-black px-5 sm:px-10 xl:px-20 mx-auto py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-white text-[42px] xl:[54px] mb-14 ">
        Listen to what our customers think about MixRank
      </h3>
      <div>
        <InfiniteMovingCards items={testimonial} />
      </div>
    </motion.div>
  );
};

export default Testimonials;
