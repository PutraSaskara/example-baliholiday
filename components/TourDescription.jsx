"use client"
import { useState } from "react";
// import Image from "next/image";
import Carousel from "./Courosel";

function TourDescription({img1, img2, img3, p1, p2, p3}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle between full and short description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="mt-10">
      <h3 className="font-semibold text-[20px]">Tour Description</h3>
      <div className="w-full lg:w-[98%]">
      <Carousel imageUrl1={img1} imageUrl2={img2} imageUrl3={img3}/>
      </div>
      <div className="mt-5">
        {/* Render different descriptions based on state */}
        {showFullDescription ? (
          <>
            <p>
              {p1}
            </p>
            <p>
              {p2}
            </p>
            <p>
             {p3}
            </p>
            {/* Add a "Read Less" button */}
            <button
              onClick={toggleDescription}
              className="text-[#00008B] mt-3"
            >
              Read Less
            </button>
          </>
        ) : (
          <>
            {/* Render only the short description */}
            <p>
              {p1} .... <span><button
              onClick={toggleDescription}
              className="text-[#00008B] mt-3"
            >
              Read More
            </button></span>
            </p>
            {/* Add a "Read More" button */}
            
          </>
        )}
      </div>
    </div>
  );
}

export default TourDescription;
