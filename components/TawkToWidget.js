"use client"
// components/TawkToWidget.js

import React, { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const tawkToScript = document.createElement('script');
    tawkToScript.async = true;
    tawkToScript.src = 'https://embed.tawk.to/66019add1ec1082f04daef6a/1hpr49t1i'; // Replace this URL with your widget code
    tawkToScript.charset = 'UTF-8';
    tawkToScript.setAttribute('crossorigin', '*');
    document.head.appendChild(tawkToScript);

    return () => {
      document.head.removeChild(tawkToScript);
    };
  }, []);

  return null; // This component doesn't render anything, it just adds the script tag to the DOM
};

export default TawkToWidget;
