"use client";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "@/apiConfig";
import Link from "next/link";
import Loading from './Loading'

function ListBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseURL}/single-blog`);
      const shuffledBlogs = shuffle(response.data); // Shuffle the blogs array
      setBlogs(shuffledBlogs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  // Function to shuffle an array
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div className="mt-24">
      <h1 className="text-center text-[#993B00] font-bold text-[36px]">
        Travel Tips and Insights
      </h1>
      <p className="text-center mt-5">
        Ready for your next adventure? Get expert advice and insider
        recommendations to make the most of your journey. From hidden gems to
        off-the-beaten-path destinations, we&apos;re here to inspire and empower your
        wanderlust.
      </p>
      <p className="text-right mt-10 mb-5">
        <Link
          href={"/blogs"}
          className="hover:bg-blue-500 bg-[#993B00] px-2 py-1 rounded-xl text-white "
        >
          See More Articles
        </Link>
      </p>
      
        {loading ? ( // Show loading message if data is loading
          <div className="text-center"><Loading/></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {blogs.slice(0, 4).map((blog) => (
                    <BlogCard key={blog?.id} link={`/blog/${blog.slug}`} title={blog?.title} desc={blog.blog_paragraf?.paragraf1} author={blog?.author} date={blog?.createdAt} img={blog.blogimage?.imageUrl1}/>
                ))}
          </div>
        )}
    </div>
  );
}

export default ListBlog;
