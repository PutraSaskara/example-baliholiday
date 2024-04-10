"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import baseURL from "@/apiConfig";
import Link from "next/link";
import LoadingSpinner from "./Loading";

function SingleBlog(slug) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/single-blog-slug/${slug.slug}`
      );
      setBlogs(response.data);
      setLoading(false); // Data fetched, loading is complete
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // console.log('data singleblog', blogs.blog)
  const data = blogs.blog;

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[100vh] flex justify-center items-center"
      >
        <LoadingSpinner />
      </motion.div>
    ); // Render loading spinner while data is being fetched
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:px-[100px]"
    >
      <div>
        <h1 className="text-[30px] font-semibold lg:text-center">
          {data?.title}
        </h1>
        <div className="text-gray-500 text-[14px] mt-5">
          <p>{data?.author}</p>
          <div className="flex gap-10">
            <p>Published in Baliholiday Blog</p>
            <p>{data?.createdAt}</p>
          </div>
        </div>
        <div className="w-full lg:w-[98%] mt-10">
          <Image
            src={data?.blogimage.imageUrl1}
            width={2000}
            height={500}
            alt={data?.title}
            className="w-full hidden md:block"
            priority={true}
          />
          <Image
            src={data?.blogimage.imageUrl1}
            width={1000}
            height={450}
            alt={data?.title}
            className="md:hidden"
            priority={true}
          />
        </div>
        <p className="mt-5">{data?.blog_paragraf.paragraf1}</p>
        {data?.blog_paragraf.link2 ? (
          <Link href={data?.blog_paragraf.link2} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf2}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf2}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf2}</p>
        {data?.blog_paragraf.link3 ? (
          <Link href={data?.blog_paragraf.link3} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf3}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf3}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf3}</p>
        <div className="w-full lg:w-[98%] mt-10">
          <Image
            src={data?.blogimage.imageUrl2}
            width={2000}
            height={500}
            alt={data?.blog_paragraf.titleparagraf4}
            className="w-full hidden md:block"
            loading="lazy" // Add lazy loading attribute
          />

          <Image
            src={data?.blogimage.imageUrl2}
            width={1000}
            height={450}
            alt={data?.blog_paragraf.titleparagraf4}
            className="md:hidden"
            loading="lazy" // Add lazy loading attribute
          />
        </div>
        {data?.blog_paragraf.link4 ? (
          <Link href={data?.blog_paragraf.link4} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf4}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf4}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf4}</p>
        {data?.blog_paragraf.link5 ? (
          <Link href={data?.blog_paragraf.link5} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf5}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf5}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf5}</p>
        <div className="w-full lg:w-[98%] mt-10">
          <Image
            src={data?.blogimage.imageUrl3}
            width={2000}
            height={500}
            alt={data?.blog_paragraf.titleparagraf6}
            className="w-full hidden md:block"
            loading="lazy"
          />
          <Image
            src={data?.blogimage.imageUrl3}
            width={1000}
            height={450}
            alt={data?.blog_paragraf.titleparagraf6}
            className="md:hidden"
            loading="lazy"
          />
        </div>
        {data?.blog_paragraf.link6 ? (
          <Link href={data?.blog_paragraf.link6} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf6}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf6}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf6}</p>
        {data?.blog_paragraf.link7 ? (
          <Link href={data?.blog_paragraf.link7} target="_blank">
            <h4 className="mt-5 font-semibold text-[18px] hover:text-[#993B00]">
              {data?.blog_paragraf.titleparagraf7}
            </h4>
          </Link>
        ) : (
          <h4 className="mt-5 font-semibold text-[18px]">
            {data?.blog_paragraf.titleparagraf7}
          </h4>
        )}
        <p>{data?.blog_paragraf.paragraf7}</p>
        <p>{data?.blog_paragraf.Conclusion}</p>
      </div>
    </motion.div>
  );
}

export default SingleBlog;
