import Image from "next/image";
import React from "react";

function Card({img, alt, title,}) {
  return (
      <div className="group relative m-0 flex w-[300px] xl:w-[350px] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <Image
            width={200}
            height={200}
            src={img}
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt={alt}
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
          {title}
          </h1>
        </div>
      </div>
  );
}

export default Card;
