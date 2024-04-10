import Image from "next/image";
import React from "react";
import { FaInstagramSquare, FaFacebook  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-16 mx-auto mt-28 px-2 lg:px-10 bg-slate-200" id="footer">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image src="/logo-baliguide.png" width={200} height={100} alt="Baliholiday Logo" className="w-auto"/>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-black">
            Immerse yourself in the authentic beauty of Bali by experiencing it through the eyes of its local inhabitants, unveiling the genuine essence of the island&apos;s culture, traditions, and way of life.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-black">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-black">Phone:</p>
            <a
              href="tel:+62859106863008"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +62859106863008
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-black">Email:</p>
            <a
              href="mailto:baliholidayxyz@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              baliholidayxyz@gmail.com
            </a>
          </div>
          {/* <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div> */}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/baliholidayxyz/"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagramSquare size={25}/>
            </a>
           
            <a
              href="https://www.facebook.com/profile.php?id=61557429707183&mibextid=ZbWKwL"
              className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebook size={25}/>
            </a>
          </div>
          <p className="mt-4 text-sm text-black">
          Discover the beauty of Bali through our eyes. Follow us for travel inspiration!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-black lg:flex-row">
        <p className="text-sm text-black">
          © Copyright 2024 Baliholiday. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
