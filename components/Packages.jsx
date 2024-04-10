"use client"
import Image from 'next/image';
import CardPackage from '../components/CardPackage';
import { useEffect, useState } from 'react';
import axios from "axios";
import { motion } from "framer-motion";
import baseURL from '@/apiConfig';
import Loading from './Loading';

function Packages() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${baseURL}/tours`);
      setTours(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setLoading(false);
    }
  };

  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Image src={'/package-hero.webp'} width={2000} height={1000} alt='bali' className='w-full hidden md:block' priority={true}/>
        <Image src={'/package-hero.webp'} width={1000} height={450} alt='bali' className='md:hidden' priority={true}/>
        <h1 className="text-center text-[#993B00] font-bold text-[36px] mt-5">Explore Your Adventure: Discover Our Tailored Tour Packages</h1>
        <p className="text-center mt-5">Embark on an unforgettable journey with our meticulously crafted tour packages, designed to immerse you in the wonders of each destination. Whether you seek cultural immersion, thrilling adventures, or serene escapes, our diverse selection promises to fulfill your wanderlust dreams. Join us and let every moment become a cherished memory.
        </p>
        <div className='flex justify-center'>
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-screen-xl mx-auto p-4 mt-5 mb-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md"
        />
        </div>
        {loading ? ( // Show loading message if data is loading
          <div className="text-center mt-10"><Loading/></div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <CardPackage key={tour?.id} img={tour?.image.imageUrl1} title={tour?.title} desc={tour?.tour_description?.paragraf1} id={tour?.slug}/>
              ))
            ) : (
              <p className="text-center">No packages found.</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Packages;
