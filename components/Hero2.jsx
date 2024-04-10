"use client"
import React from 'react';
import Card from './Card';
import cardJson from '@/jsonfile/card-json.json';
import { motion } from "framer-motion";

function Hero2() {
  return (
    <div className="mt-24">
      <h1 className="text-center text-[#993B00] font-bold text-[36px]">Explore Top Destination in Bali</h1>
      <p className="text-center mt-5">
        Embark on an Enriching Expedition: Delve into Bali&apos;s Premier Destinations, Unraveling the Rich Tapestry of Culture, Nature, and History
      </p>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 justify-items-center'>
        {cardJson.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card img={image.src} alt={image.alt} title={image.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
