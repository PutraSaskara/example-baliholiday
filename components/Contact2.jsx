"use client"
import React, { useState } from 'react';
import { sendEmail } from '../utils/email';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from 'next/link';

function Contact2() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false); // State to manage loading indicator

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendEmail = async () => {
        setLoading(true); // Set loading to true when sending email
        try {
            await sendEmail(formData);
            console.log('Email sent successfully!');
            alert('Email sent successfully!');
            // Clear form fields after sending email
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email: ' + error.message); // Display error message
        } finally {
            setLoading(false); // Set loading back to false after sending email
        }
    };

    return (
        <div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Let&apos;s Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">Get in touch with us! Whether you have questions, feedback, or just want to say hello, we&apos;d love to hear from you. Reach out and let&apos;s start the conversation today!</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" data-original="#000000"/>
                                    </svg>
                                </div>
                                <a target="blank" href="mailto:baliholidayxyz@gmail.com" className="text-[#007bff] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>baliholidayxyz@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            {/* Social icons */}
                            <Link href={'https://www.instagram.com/baliholidayxyz/'} target='_blank' aria-label="Instagram">
                                <FaInstagram size={30} className='text-blue-500'/>
                            </Link>
                            <Link href={'https://www.facebook.com/profile.php?id=61557429707183&mibextid=ZbWKwL'} target='_blank' aria-label="Facebook">
                                <FaFacebook size={30} className='text-blue-500'/>
                            </Link>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4">
                    <input type='text' placeholder='Name'
                           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                           value={formData.name} onChange={handleChange} id='name' name='name'/>
                    <input type='email' placeholder='Email'
                           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" value={formData.email} onChange={handleChange} id='email' name='email'/>
                    <input type='text' placeholder='Subject'
                           className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" value={formData.subject} onChange={handleChange} id='subject' name='subject'/>
                    <textarea placeholder='Message' rows="6"
                              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]" value={formData.message} onChange={handleChange} id='message' name='message'></textarea>
                    <button type='button' onClick={handleSendEmail}
                            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact2;
