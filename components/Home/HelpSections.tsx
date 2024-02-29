// HelpSections.tsx
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { HelpSection } from '@/types';
import HelpSectionComponent from '../shared/HelpSectionComponent';

const helpSections: HelpSection[] = [
  {
    id: 1,
    title: "Investment Intelligence",
    description: "Get never-before-seen insights into private companies, with dimensions such as tech installs and usage, user metrics, employee trends, and tracking key personnel movements.",
    linkUrl: "https://mixrank.com/solutions/investment-intelligence/",
    linkText: "Learn more about Investment Intelligence",
  },
  // Add other sections here...
];

const HelpSections: React.FC = () => {
  return (
    <div className="flex flex-col col-span-1">
      <h3 className="text-[28px] sm:text-[42px] xl:text-[48px] leading-[30px] sm:leading-[46px] xl:leading-[54px] py-10 text-white font-normal">How we help</h3>
      {helpSections.map((section) => (
        <HelpSectionComponent key={section.id} section={section} />
      ))}
      
      
    </div>
  );
};

export default HelpSections;
