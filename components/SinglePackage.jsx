"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import axios from "axios";
import TourDetail from "./TourDetail";
import TourDescription from "./TourDescription";
import TourPlan from "./TourPlan";
import IncludList from "./IncludList";
import NotIncludedList from "./NotIncludedList";
import Cancellation from "./Cancellation";
import RightSide from "./RightSide";
import TourHighligh from "./TourHighligh";
import PriceDropDown from "./PriceDropDown";
import baseURL from "@/apiConfig";
import Courosel from "@/components/Courosel";
import Link from "next/link";
import LoadingSpinner from "./Loading";
import MapView from "./MapView";



function SinglePackage(slug) {

  const MapWithNoSSR = dynamic(() => import('./MapView'), {
    ssr: false,
})
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${baseURL}/toursslug/${slug.slug}`);
      setTours(response.data);
      setLoading(false); // Data fetched, loading is complete
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  let data = tours.tour;

  if (loading) {
    return (
      <div className="h-[100vh]">
        <div className="flex justify-center items-center top-0 bottom-0">
          <LoadingSpinner />
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      {/* left */}
      <div className="w-full lg:w-[75%]">
        <div className="w-full lg:w-[98%] overflow-hidden">
          <Courosel
            imageUrl1={data?.image.imageUrl1}
            imageUrl2={data?.image.imageUrl2}
            imageUrl3={data?.image.imageUrl3}
          />
        </div>
        <h1 className="text-[24px] font-bold">{data?.title}</h1>
        <PriceDropDown
          style="lg:hidden"
          price1={data?.price1}
          price2={data?.price2}
          price3={data?.price3}
          desc1={data?.pricenote1}
          desc2={data?.pricenote2}
          desc3={data?.pricenote3}
        />
        <div className="mt-5">
          <Link
            href={`/booking/${data?.slug}`}
            className="bg-[#00008B] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-20"
          >
            Book Now
          </Link>
        </div>
        <TourDetail
          d1={data?.tour_detail.detail1}
          d2={data?.tour_detail.detail2}
          d3={data?.tour_detail.detail3}
          d4={data?.tour_detail.detail4}
          d5={data?.tour_detail.detail5}
          d6={data?.tour_detail.detail6}
          d7={data?.tour_detail.detail7}
          d8={data?.tour_detail.detail8}
          d9={data?.tour_detail.detail9}
        />
        <TourHighligh
          t1={data?.tour_plan?.title1}
          t2={data?.tour_plan?.title2}
          t3={data?.tour_plan?.title3}
          t4={data?.tour_plan?.title4}
          t5={data?.tour_plan?.title5}
          t6={data?.tour_plan?.title6}
          t7={data?.tour_plan?.title7}
          t8={data?.tour_plan?.title8}
          t9={data?.tour_plan?.title9}
        />
        <TourDescription
          img1={data?.image.imageUrl1}
          img2={data?.image.imageUrl2}
          img3={data?.image.imageUrl3}
          p1={data?.tour_description?.paragraf1}
          p2={data?.tour_description?.paragraf2}
          p3={data?.tour_description?.paragraf3}
        />
        <TourPlan
          title1={data?.tour_plan?.title1}
          title2={data?.tour_plan?.title2}
          title3={data?.tour_plan?.title3}
          title4={data?.tour_plan?.title4}
          title5={data?.tour_plan?.title5}
          title6={data?.tour_plan?.title6}
          title7={data?.tour_plan?.title7}
          title8={data?.tour_plan?.title8}
          title9={data?.tour_plan?.title9}
          d1={data?.tour_plan?.description1}
          d2={data?.tour_plan?.description2}
          d3={data?.tour_plan?.description3}
          d4={data?.tour_plan?.description4}
          d5={data?.tour_plan?.description5}
          d6={data?.tour_plan?.description6}
          d7={data?.tour_plan?.description7}
          d8={data?.tour_plan?.description8}
          d9={data?.tour_plan?.description9}
          link1={data?.tour_plan?.link1}
          link2={data?.tour_plan?.link2}
          link3={data?.tour_plan?.link3}
          link4={data?.tour_plan?.link4}
          link5={data?.tour_plan?.link5}
          link6={data?.tour_plan?.link6}
          link7={data?.tour_plan?.link7}
          link8={data?.tour_plan?.link8}
          link9={data?.tour_plan?.link9}
        />
        <MapWithNoSSR
        t1={data?.tour_plan?.title1}
        t2={data?.tour_plan?.title2}
        t3={data?.tour_plan?.title3}
        t4={data?.tour_plan?.title4}
        t5={data?.tour_plan?.title5}
        t6={data?.tour_plan?.title6}
        t7={data?.tour_plan?.title7}
        t8={data?.tour_plan?.title8}
        t9={data?.tour_plan?.title9}
        d1={data?.tour_plan?.description1}
        d2={data?.tour_plan?.description2}
        d3={data?.tour_plan?.description3}
        d4={data?.tour_plan?.description4}
        d5={data?.tour_plan?.description5}
        d6={data?.tour_plan?.description6}
        d7={data?.tour_plan?.description7}
        d8={data?.tour_plan?.description8}
        d9={data?.tour_plan?.description9}
        pl1={data?.tour_plan?.coordinatesleft1}
        pr1={data?.tour_plan?.coordinatesright1}
        pl2={data?.tour_plan?.coordinatesleft2}
        pr2={data?.tour_plan?.coordinatesright2}
        pl3={data?.tour_plan?.coordinatesleft3}
        pr3={data?.tour_plan?.coordinatesright3}
        pl4={data?.tour_plan?.coordinatesleft4}
        pr4={data?.tour_plan?.coordinatesright4}
        pl5={data?.tour_plan?.coordinatesleft5}
        pr5={data?.tour_plan?.coordinatesright5}
        pl6={data?.tour_plan?.coordinatesleft6}
        pr6={data?.tour_plan?.coordinatesright6}
        pl7={data?.tour_plan?.coordinatesleft7}
        pr7={data?.tour_plan?.coordinatesright7}
        pl8={data?.tour_plan?.coordinatesleft8}
        pr8={data?.tour_plan?.coordinatesright8}
        pl9={data?.tour_plan?.coordinatesleft9}
        pr9={data?.tour_plan?.coordinatesright9}
        link1={data?.tour_plan?.link1}
        link2={data?.tour_plan?.link2}
        link3={data?.tour_plan?.link3}
        link4={data?.tour_plan?.link4}
        link5={data?.tour_plan?.link5}
        link6={data?.tour_plan?.link6}
        link7={data?.tour_plan?.link7}
        link8={data?.tour_plan?.link8}
        link9={data?.tour_plan?.link9}
        />
        <h3 className="mt-10 text-[20px] font-bold">Included</h3>
        <IncludList
          include1={data?.included?.include1}
          include2={data?.included?.include2}
          include3={data?.included?.include3}
        />
        <h3 className="mt-10 text-[20px] font-bold">Not Included</h3>
        <NotIncludedList
          notinclude1={data?.not_included?.notinclude1}
          notinclude2={data?.not_included?.notinclude2}
        />
        <h3 className="mt-10 text-[20px] font-bold">Cancellation</h3>
        <Cancellation
          cancel1={data?.cancellation?.cancel1}
          cancel2={data?.cancellation?.cancel2}
        />

      
      </div>

      {/* right */}
      <RightSide
      title={data?.title}
        price1={data?.price1}
        price2={data?.price2}
        price3={data?.price3}
        desc1={data?.pricenote1}
        desc2={data?.pricenote2}
        desc3={data?.pricenote3}
        t1={data?.tour_plan?.title1}
        t2={data?.tour_plan?.title2}
        t3={data?.tour_plan?.title3}
        t4={data?.tour_plan?.title4}
        t5={data?.tour_plan?.title5}
        t6={data?.tour_plan?.title6}
        t7={data?.tour_plan?.title7}
        t8={data?.tour_plan?.title8}
        t9={data?.tour_plan?.title9}
        d1={data?.tour_detail.detail1}
        d2={data?.tour_detail.detail2}
        d3={data?.tour_detail.detail3}
        d4={data?.tour_detail.detail4}
        d5={data?.tour_detail.detail5}
        d6={data?.tour_detail.detail6}
        d7={data?.tour_detail.detail7}
        d8={data?.tour_detail.detail8}
        d9={data?.tour_detail.detail9}
      />
    </div>
  );
}

export default SinglePackage;
