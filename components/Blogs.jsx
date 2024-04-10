"use client"
import Image from "next/image";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import baseURL from "@/apiConfig";
import Loading from "./Loading";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseURL}/single-blog`);
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Image
          src={"/blog-benner.webp"}
          width={2000}
          height={1000}
          alt="Banner"
          className="w-full hidden md:block"
          priority={true}
        />
        <Image
          src={"/blog-benner.webp"}
          width={1000}
          height={450}
          alt="Banner"
          className="md:hidden"
          priority={true}
        />

        <h1 className="text-center text-[#993B00] font-bold text-[36px] mt-10">
          Unveiling Our Travel Blog
        </h1>
        <p className="text-center mt-5">
          Embark on a voyage of discovery through our travel blog, where each post
          is a window into the world&apos;s wonders. From hidden gems to bucket-list
          adventures, let our stories inspire your next expedition.
        </p>

        <div className='flex justify-center'>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-screen-xl mx-auto p-4 mt-5 mb-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md"
        />
        </div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          {loading ? (
            <div className="text-center mt-10">
              <Loading />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <BlogCard
                    key={blog?.id}
                    link={`/blog/${blog?.slug}`}
                    title={blog?.title}
                    desc={blog.blog_paragraf?.paragraf1}
                    author={blog?.author}
                    date={blog?.createdAt}
                    img={blog.blogimage?.imageUrl1}
                  />
                ))
              ) : (
                <p className="text-center">No blogs found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Blogs;
