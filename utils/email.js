// utils/email.js

import emailjs from 'emailjs-com';

// Retrieve EmailJS user ID and template ID from environment variables
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID; 

export const sendEmail = (templateParams) => {
  if (!EMAILJS_USER_ID) {
    throw new Error('EmailJS user ID is not provided.');
  }
  if (!EMAILJS_TEMPLATE_ID) {
    throw new Error('EmailJS template ID is not provided.');
  }
  if (!SERVICE_ID) {
    throw new Error('Service ID is not provided.');
  }

  return emailjs.send(
    SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_USER_ID
  );
};
