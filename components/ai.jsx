"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiRobot2Line } from "react-icons/ri";
import baseURL from "@/apiConfig";

const GenerativeAIComponent = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (generatedText) {
      setIsExpanded(true); // Expand the chat bar when there's generated text
    }
  }, [generatedText]);

  useEffect(() => {
    // Fetch suggestions from an API or define them statically
    const fetchedSuggestions = [
      "bali travel guide",
      "things to do in bali",
      "best time to visit bali",
      "What About Credit Cards, Cash, Exchange Rates and Money Changers in Bali?",
      "where to stay in bali",
      "bali culture",
    ];
    setSuggestions(fetchedSuggestions);
  }, []);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
  };

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${baseURL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setGeneratedText(data.generatedText);
    } catch (error) {
      console.error("Error:", error);
      setGeneratedText("Failed to generate text. Please try again.");
    }

    setIsLoading(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 mx-4  border rounded-lg shadow-md bg-slate-200 ${
        isExpanded ? "w-80" : "max-w-fit"
      } h-auto z-50`}
    >
      <button
        onClick={toggleExpanded}
        className="relative flex items-center bg-[#00008B] text-white rounded-full p-2 mb-1"
      >
        {isExpanded ? (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
        <h1 className="px-2">Ask AI</h1>
        <RiRobot2Line />
      </button>

      {isExpanded && (
        <div className="flex flex-col px-2 bg-slate-300 z-50">
          <div className="relative">
            <textarea
              className="flex-1 w-full p-2 border border-gray-200 rounded"
              rows="2"
              placeholder="Enter your question here..."
              value={inputText}
              onChange={handleChange}
            ></textarea>
            {suggestions.length > 0 && (
              <div className="-top-[130px] lg:-top-[125px] absolute w-full bg-white border border-gray-300 rounded-b-md shadow-md">
                <h4 className="-top-[20px] text-sm lg:text-lg absolute z-50 bg-slate-700 px-5 text-white">
                  Suggestions
                </h4>
                <div className="gap-2 flex items-center px-2 h-[80px] overflow-x-auto whitespace-nowrap min-w-full">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="cursor-pointer text-[10px] lg:text-[14px] h-[40px] py-2 hover:bg-gray-100 inline-block bg-slate-300 px-2 rounded-lg"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-[12px]">*This AI will answer your general questions.</p>
          <p className="text-[12px]">*If you have specific questions about BaliHoliday, please visit our <span><Link href={'/contact'} className="text-blue-800">Contact page</Link></span>.</p>
          <button
            onClick={handleClick}
            disabled={isLoading || inputText.trim() === ""}
            className={`w-full px-4 py-2 rounded mt-2 ${
              isLoading || inputText.trim() === ""
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isLoading ? "Generating..." : "Generate Response"}
          </button>
          <div className="flex-1 overflow-y-auto mt-2">
            {generatedText && (
              <textarea
                rows={10}
                value={generatedText}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerativeAIComponent;
