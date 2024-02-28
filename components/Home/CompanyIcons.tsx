"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Logo = {
  src: string;
  alt: string;
  priority?: boolean;
};

const logos: Logo[] = [
  { src: '/assets/Images/orcl.svg', alt: 'Oracle', priority: true },
  { src: '/assets/Images/optmz.svg', alt: 'Optimize' },
  { src: '/assets/Images/meta.svg', alt: 'Meta' },
  { src: '/assets/Images/intl.svg', alt: 'Intel', priority: true },
  { src: '/assets/Images/amzn.svg', alt: 'Amazon' },
  { src: '/assets/Images/adb.svg', alt: 'Adobe' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DataTeamsSection: React.FC = () => {
  return (
    <div className="w-full sm:px-16 xl:px-[100px] bg-black flex justify-center">
      <div className="w-full py-10 bg-black flex flex-col justify-center items-center space-y-4 max-w-[1598px]">
        <h4 className="text-white text-xl">Powering the world’s best data teams</h4>
        <motion.div
          className="border-t border-b py-3 flex flex-row flex-wrap items-center justify-evenly gap-x-5 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={195}
                height={85}
                className="max-w-[195px] max-h-[85px]"
                priority={logo.priority}
                loading={logo.priority ? 'eager' : 'lazy'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DataTeamsSection;
