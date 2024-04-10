"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GoogleAnalytics = () => {
  const router = useRouter();
  const trackingId = process.env.NEXT_PUBLIC_YOUR_GOOGLE;

  useEffect(() => {
    if (typeof window.gtag === 'undefined') {
      return;
    }

    const handleRouteChange = (url) => {
      window.gtag('config', trackingId, {
        page_path: url,
      });
    };

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', trackingId);

    // Listen for route changes and send page view events to Google Analytics
    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, trackingId]);

  return null; // Google Analytics doesn't need to render anything
};

export default GoogleAnalytics;
