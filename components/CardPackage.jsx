"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


function CardPackage({ img, title, desc, id }) {
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

  const showLink = img && title && desc && id;

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <Image
          width={400}
          height={400}
          src={img}
          alt={title}
          className="h-[200px] w-full"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <h1 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h1>
        <p
          ref={descRef}
          className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased"
        >
          {desc}
        </p>
      </div>
      {showLink && (
        <div className="p-6 pt-3">
          <Link
            href={`/package/${id}`}
            className="block w-full select-none rounded-lg bg-[#008199] hover:bg-[#045968] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            See Detail
          </Link>
        </div>
      )}
    </div>
  );
}


export default CardPackage;
