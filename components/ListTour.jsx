"use client"
import CardPackage from "../components/CardPackage";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "@/apiConfig";
import Link from "next/link";
import Loading from './Loading'

function ListTour() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${baseURL}/tours`);
      const shuffledTours = shuffle(response.data); // Shuffle the tours array
      setTours(shuffledTours);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
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
      Book Your Adventure Today
      </h1>
      <p className="text-center mt-5">Ready for your next journey? Explore our diverse range of tours, select your destination, and secure your experience today. Whether you`&apos;re a seasoned traveler or a first-time explorer, our tours guarantee unforgettable memories to cherish. Let`&apos;s start your adventure now!</p>
      <p className="text-right mt-10 mb-5"><Link href={'/packages'} className="hover:bg-blue-500 bg-[#993B00] px-2 py-1 rounded-xl text-white">See More Tour Package</Link></p>
      
      {loading ? ( // Show loading message if data is loading
          <div className="text-center"><Loading/></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {tours.slice(0, 4).map((tour ) => (
                    <CardPackage
                    key={tour?.id}
                    img={tour?.image?.imageUrl1}
                    title={tour?.title}
                    desc={tour?.tour_description?.paragraf1}
                    id={tour?.slug}
                  />
                ))}
          </div>
        )}
    </div>
  );
}

export default ListTour;
