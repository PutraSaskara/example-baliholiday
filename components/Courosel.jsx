import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Carousel = ({ imageUrl1, imageUrl2, imageUrl3 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [imageUrl1, imageUrl2, imageUrl3].filter((url) => url); // Remove null or empty URLs
  const [loadedImages, setLoadedImages] = useState(Array(images.length).fill(false));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => {
      const newLoadedImages = [...prevLoadedImages];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <div className="relative w-full lg:w-[98%]">
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          width={1000}
          height={1000}
          src={imageUrl}
          alt={`Slide ${index + 1}`}
          className={`w-full ${index === currentImageIndex ? "block" : "hidden"}`}
          loading={loadedImages[index] ? "lazy" : "eager"}
          onLoad={() => handleImageLoad(index)}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
          <button
            onClick={prevImage}
            className="absolute top-0 left-0 bottom-0 flex items-center justify-center w-10 h-full bg-black bg-opacity-25 text-white"
            aria-label="Previous Slide"
          >
            <GrCaretPrevious />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-0 right-0 bottom-0 flex items-center justify-center w-10 h-full bg-black bg-opacity-25 text-white"
            aria-label="Next Slide"
          >
            <GrCaretNext />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
