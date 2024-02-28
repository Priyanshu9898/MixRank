"use client";

import { DataSection } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../shared/Card";

const dataSections: DataSection[] = [
  {
    id: 1,
    title: "Mobile App & SDK Data",
    description:
      "Hundreds of top mobile app technology companies, publishers, and agencies use MixRank to grow sales, react to competitors, plan market strategies, and retain customers.",
    imageUrl: "/assets/Images/device-mobile-speaker-1.svg",
    linkUrl: "https://mixrank.com/datasets/mobile-apps-and-sdks/",
    linkText: "Learn more about our mobile app dataset",
    subTitle: "20M+ iOS & Android apps",
  },
  {
    id: 2,
    title: "Website & Tech Install Data",
    description:
      "MixRank provides key insights into a company’s technology usage, by analyzing website performance and keeping track of every tech product that runs on the company web pages.",
    imageUrl: "/assets/Images/Websites-Icon.svg",
    linkUrl: "https://mixrank.com/datasets/web-technographics/",
    linkText: "Learn more about our web technographics dataset",
    subTitle: "80M+ websites",
  },
  {
    id: 3,
    title: "Company Firmographic Data",
    description:
      "From newly minted startups to public organizations, find and keep track of every company out there and get insights on location, size, industry, employee growth across years, industry classification, and more.",
    imageUrl: "/assets/Images/lightning-1.svg",
    linkUrl: "https://mixrank.com/datasets/company-data/",
    linkText: "Learn more about our company dataset",
    subTitle: "45M+ company profiles",
  },
  {
    id: 4,
    title: "Professional People Data",
    description:
      "Verify identities, build sales enablement tools, derive investment insights and build the world’s best talent platforms, using our best-in-class people dataset.",
    imageUrl: "/assets/Images/user-1.svg",
    linkUrl: "https://mixrank.com/datasets/people-data/",
    linkText: "Learn more about our people dataset",
    subTitle: "500M+ employee profiles",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const DataSections: React.FC = () => {
  return (
    <>
      <motion.div
        className="bg-black px-5 sm:px-10 xl:px-20 mx-auto py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-white text-[42px] xl:[54px] mb-14 ">
          Get to know our data
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-[1598px] mx-auto">
          {dataSections.map((section) => (
            <Card key={section.id} section={section} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default DataSections;
