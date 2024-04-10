"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import baseURL from '../apiConfig'

const BookingForm = ({ slug }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    guests: "",
    note: "",
    tour: slug || "", // Initialize tour field with the provided slug or empty string
  });
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setLoading(true); // Set loading state to true before form submission

    try {
      const response = await axios.post(
        `${baseURL}/booking`,
        formData
      );

      if (response.status === 200) {
        alert("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          dates: "",
          guests: "",
          note: "",
          tour: slug || "",
        });
      } else {
        throw new Error("Failed to submit booking");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert(
        "An error occurred while submitting your booking. Please try again later."
      );
    } finally {
      setLoading(false); // Set loading state to false after form submission
    }
  };

  useEffect(() => {
    if (slug) {
      setFormData(prevFormData => ({ ...prevFormData, tour: slug }));
    }
  }, [slug]);

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Book an Appointment
        </div>
        <form className="py-4 px-6">
          {/* Form fields */}
          <label htmlFor="name">Your Tour</label>
          <input
            type="text"
            id="tour"
            name="tour"
            value={formData.tour}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <br/>
          <br/>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <br />
          <br />
          <label htmlFor="dates">Dates:</label>
          <input
            type="date"
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <br />
          <br />
          <label htmlFor="guests">Number of Guests:</label>
          <input type="text" id="guests" name="guests" value={formData.guests} onChange={handleChange} required  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/><br /><br />
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="note"
              name="note"
              type="text"
              rows="4"
              placeholder="Enter any additional information"
              value={formData.note} onChange={handleChange}
            ></textarea>
          </div>
          {/* Submit button with loading indicator */}
          <div className="flex items-center justify-center mb-4">
            {loading ? (
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded cursor-not-allowed"
                type="button"
                disabled
              >
                Loading...
              </button>
            ) : (
              <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
              >
                Book Appointment
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
