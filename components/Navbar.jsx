"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavWithDelay = () => {
    setTimeout(() => {
      setIsNavOpen(false);
    }, 300); // Adjust the delay time (in milliseconds) as per your preference
  };

  return (
    <nav className="bg-white px-2 lg:px-10" id='navbar'>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo-baliguide.png" width={100} height={100} alt="Baliholiday Logo" className='w-auto' />
        </a>
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#FF914D] dark:hover:bg-[#008199] dark:focus:ring-[#008199]"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className={`w-full md:w-auto ${isNavOpen ? 'block' : 'hidden'} absolute -bottom-[230px] md:bottom-0 left-0 mt-2 md:relative md:flex md:mt-0 bg-white md:border border-gray-100 rounded-lg shadow-md p-0 md:border-none md:shadow-none z-50`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link href="/" onClick={closeNavWithDelay} className="block py-2 px-3 text-[#008199] rounded md:bg-transparent md:p-0 hover:bg-[#FF914D]" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={closeNavWithDelay} className="block py-2 px-3 text-[#008199] rounded md:bg-transparent md:p-0 hover:bg-[#FF914D]">About</Link>
            </li>
            <li>
              <Link href="/packages" onClick={closeNavWithDelay} className="block py-2 px-3 text-[#008199] rounded md:bg-transparent md:p-0 hover:bg-[#FF914D]">Packages</Link>
            </li>
            <li>
              <Link href="/blogs" onClick={closeNavWithDelay} className="block py-2 px-3 text-[#008199] rounded md:bg-transparent md:p-0 hover:bg-[#FF914D]">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeNavWithDelay} className="block py-2 px-3 text-[#008199] rounded md:bg-transparent md:p-0 hover:bg-[#FF914D]">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
