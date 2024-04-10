import React, { useState } from "react";

function PriceDropDown({style, price1, price2, price3, desc1, desc2, desc3}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`relative ${style}`}>
      <button
        data-dropdown-toggle="dropdownRadioHelper"
        className=" border-2 border-[#993B00] rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center font-semibold text-[#993B00]"
        type="button"
        onClick={toggleDropdown}
      >
        
        <h1 className="font-semibold text-[#993B00] text-[15px] lg:text-[24px]">Start From $80</h1>
        <svg
          className={`w-2.5 h-2.5 ms-3 ${showDropdown ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {showDropdown && (
        <div
          id="dropdownRadioHelper"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 absolute border-2 border-[#993B00] text-[#993B00]"
        >
          <ul
            className="p-3 space-y-1 text-sm "
            aria-labelledby="dropdownRadioHelperButton"
          >
            {price1 && (
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="ms-2 text-lg">
                    <label
                      htmlFor="helper-radio-4"
                      className="font-medium text-black"
                    >
                      <div>{price1}</div>
                      <p
                        id="helper-radio-text-4"
                        className="text-sm font-normal text-black"
                      >
                        {desc1}
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            )}
            {price2 && (
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="ms-2 text-lg">
                    <label
                      htmlFor="helper-radio-5"
                      className="font-medium text-black"
                    >
                      <div>{price2}</div>
                      <p
                        id="helper-radio-text-5"
                        className="text-sm font-normal text-black"
                      >
                        {desc2}
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            )}
            {price3 && (
              <li>
                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="ms-2 text-lg">
                    <label
                      htmlFor="helper-radio-6"
                      className="font-medium text-black"
                    >
                      <div>{price3}</div>
                      <p
                        id="helper-radio-text-6"
                        className="text-sm font-normal text-black"
                      >
                        {desc3}
                      </p>
                    </label>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PriceDropDown;
