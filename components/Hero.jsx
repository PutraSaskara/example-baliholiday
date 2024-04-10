"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <div>
      <div className="relative">
        <Image
          src={"/bali-hero1.webp"}
          width={2000}
          height={1000}
          alt="bali"
          className="w-full hidden md:block"
          priority={true}
        />
        <Image
          src={"/bali-hero4.jpg"}
          width={1000}
          height={450}
          alt="bali"
          className="md:hidden"
          priority={true}
        />
        <div className="absolute -bottom-[200px] ml-2">
          <motion.div
            className="hidden lg:block lg:w-[35%] border-4 border-[#008199] rounded-[30px] px-5 relative bg-white"
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
          >
            <h5 className="text-[18px] text-[#008199] font-bold ml-3 mt-5">
              Explore the Real Bali
            </h5>
            <h3 className="text-[24px] text-[#993B00] font-bold ml-3">
              Time for See the Real of Bali with Local People
            </h3>
            <p className="text-[12px] ml-3">
              Immerse yourself in the authentic beauty of Bali by experiencing
              it through the eyes of its local inhabitants, unveiling the
              genuine essence of the island&apos;s culture, traditions, and way
              of life.
            </p>
            <Link href={"/packages"}>
              <button className="bg-[#008199] px-2 py-1 rounded-md text-white my-5">
                Explore Now
              </button>
            </Link>
            <Image
              src={"/tourist.png"}
              alt="tourist-image"
              width={100}
              height={100}
              className="absolute right-0 bottom-0"
            />
          </motion.div>
        </div>
        <div className="block lg:hidden px-1 bg-white">
          <h5 className="text-[13px]  md:text-[18px] text-[#008199] font-bold mt-2">
            Explore the Real Bali
          </h5>
          <h3 className="text-[13px] md:text-[24px] text-[#993B00] font-bold">
            Time for See the Real of Bali with Local People
          </h3>
          <p className="text-[12px] md:text-[12px] z-10">
            Immerse yourself in the authentic beauty of Bali by experiencing it
            through the eyes of its local inhabitants, unveiling the genuine
            essence of the island&apos;s culture, traditions, and way of life.
          </p>
          <Link href={"/packages"}>
            <button className="bg-[#008199] px-2 py-1 rounded-md text-white my-1 text-[8px]">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-3 gap-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={"/foto1.webp"}
            alt="image-bali-swings"
            width={200}
            height={200}
            className="w-[100px] md:w-[200px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={"/foto2.webp"}
            alt="image-ceremony"
            width={200}
            height={200}
            className="w-[100px] md:w-[200px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={"/foto3.webp"}
            alt="image-nature"
            width={200}
            height={200}
            className="w-[100px] md:w-[200px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
