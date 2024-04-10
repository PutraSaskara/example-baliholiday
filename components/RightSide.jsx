"use client";
import { useEffect, useState } from "react";
import TourDetailRight from './TourDetailRight'
import TourHighlighRigh from './TourHighlighRigh'
import PriceDropDown from './PriceDropDown'

function RightSide({style, price1, price2, price3, desc1, desc2, desc3, t1, t2, t3, t4, t5, t6, t7, t8, t9, d1, d2, d3, d4, d5, d6, d7, d8, d9, title}) {
  const [rightDivTop, setRightDivTop] = useState(75); // Initial top position for the right div

  useEffect(() => {
    // Function to update top position of right div based on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get current scroll position
      const navbarHeight = 75; // Height of the navbar
      const minimumTop = 10; // Minimum distance from top
      const newTop =
        navbarHeight - scrollTop < minimumTop
          ? minimumTop
          : navbarHeight - scrollTop; // Adjust top position
      setRightDivTop(newTop);
    };

    window.addEventListener("scroll", handleScroll); // Listen to scroll event

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove event listener on unmount
    };
  }, []);

  console.log('data t1', t1)
  return (
    <div
      className="w-[25%] h-[100vh] hidden lg:block sticky right-4 overflow-y-auto px-2 py-5 z-50"
      style={{ top: `${rightDivTop}px` }}
    >
      {/* <h1 className="font-semibold text-[#993B00] text-[24px]">start from $80</h1> */}
      <PriceDropDown
      price1={price1}
      price2={price2}
      price3={price3}
      desc1={desc1}
      desc2={desc2}
      desc3={desc3}/>
      <h1 className="font-semibold mt-2">{title}</h1>
      <TourDetailRight
      d1={d1}
      d2={d2}
      d3={d3}
      d4={d4}
      d5={d5}
      d6={d6}
      d7={d7}
      d8={d8}
      d9={d9}
      />
      <TourHighlighRigh
      t1={t1}
      t2={t2}
      t3={t3}
      t4={t4}
      t5={t5}
      t6={t6}
      t7={t7}
      t8={t8}
      t9={t9}
      />

    </div>
  );
}

export default RightSide;
