import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-10 sm:px-16 xl:px-[100px] py-8 bg-black flex justify-center items-start">
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-6 gap-8 w-full max-w-[1598px] border-t-[0.5px] border-[#706D6A] pt-8">
        <Link href="https://mixrank.com"className="col-span-2 sm:col-span-1 xl:col-span-1 justify-self-center sm:justify-self-start">
            <Image src="/assets/Images/logo.png" alt="MixRank" width={139} height={34} layout="fixed" />
         
        </Link>
        
        {/* Solutions Section */}
        <div className="col-span-2 sm:col-span-4 xl:col-span-2 flex flex-col">
          <p className="font-semibold text-white">Solutions</p>
          <Link href="https://mixrank.com/solutions/b2b-data-enrichment/" className="text-[#B4B4B4] hover:text-white">B2B Data Enrichment</Link>
          <Link href="https://mixrank.com/solutions/candidate-enrichment/" className="text-[#B4B4B4] hover:text-white">Candidate Enrichment</Link>
          {/* Add more solutions links as needed */}
        </div>

        {/* Datasets Section */}
        <div className="col-span-2 sm:col-span-4 xl:col-span-2 flex flex-col">
          <p className="font-semibold text-white">Datasets</p>
          <Link href="https://mixrank.com/datasets/mobile-apps-and-sdks/" className="text-[#B4B4B4] hover:text-white">Mobile Apps and SDKs</Link>
          <Link href="https://mixrank.com/datasets/people-data/" className="text-[#B4B4B4] hover:text-white">People Data</Link>
          {/* Add more datasets links as needed */}
        </div>

        {/* Additional Links Section */}
        <div className="col-span-2 sm:col-span-2 xl:col-span-1 flex flex-col">
          <Link href="https://mixrank.com/about/" className="text-[#B4B4B4] hover:text-white">About</Link>
          <Link href="https://mixrank.com/careers/" className="text-[#B4B4B4] hover:text-white">Careers</Link>
          {/* Add more additional links as needed */}
        </div>

        {/* CopyRight Section */}
        <div className="col-span-2 sm:col-span-2 xl:col-span-1 flex items-end justify-end">
          <p className="text-[#706D6A] text-base">&copy; 2024 MixRank</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
