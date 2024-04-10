"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

function BlogCard({ link, title, desc, author, date, img }) {
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      clampDescription(descRef.current);
    }
  }, []);

  const clampDescription = (element) => {
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
    const maxLines = 4;
    element.style.maxHeight = lineHeight * maxLines + "px";
    element.style.overflow = "hidden";
  };

  const showLink = link && title && desc && author && date && img;

  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <Image
        width={200}
        height={200}
        src={img}
        alt={title}
        className="w-auto h-[200px] mb-3"
      />
      <div className="p-4 pt-2">
        <div className="mb-8">
          {showLink ? (
            <Link
              href={link}
              className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
            >
              {title}
            </Link>
          ) : (
            <h2 className="text-gray-900 font-bold text-lg mb-2">{title}</h2>
          )}
          <p className="text-gray-700 text-sm" ref={descRef}>
            {desc}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
              {author}
            </p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
