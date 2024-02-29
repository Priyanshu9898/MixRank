"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full xl:h-[75px] z-[1000] px-5 sm:px-16 xl:px-[100px] flex justify-center bg-black">
      <div className="flex justify-between items-center w-full max-w-[1598px] py-5">
        <Link href="https://mixrank.com" className="flex items-center">
          <Image
            src="/assets/Images/logo.png"
            alt="mixrank"
            width={139}
            height={34}
            className="hidden sm:flex"
          />
        </Link>

        <div className="xl:hidden" id="nav-button" onClick={toggleMobileMenu}>
          <Image
            src={
              isMobileMenuOpen
                ? "https://mixrank.com/wp-content/themes/mixrank/images/close.svg"
                : "https://mixrank.com/wp-content/themes/mixrank/images/equals.svg"
            }
            alt="menu"
            width={40}
            height={40}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } xl:hidden fixed inset-0 bg-[#101010] z-50 flex-col py-20`}
        >
          {/* Mobile menu content */}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-6">
          <Link
            href="/solutions"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Solutions
          </Link>
          <Link
            href="/datasets"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Datasets
          </Link>
          <Link
            href="/top-sdks"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Top SDKs
          </Link>
          <Link
            href="/pricing"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/company"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Company
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-[#EA3022] transition duration-300"
          >
            Login
          </Link>
          <Link
            href="https://mixrank.com/get-started"
            className="text-white bg-[#EA3022] hover:bg-[#ef1e2fb3] px-4 py-3 rounded transition duration-300"
          >
            
            Talk To Sales
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
