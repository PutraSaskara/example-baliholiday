import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import Ai from '@/components/ai'
// import GoogleAnalytics from '../components/GoogleAnalytics';
import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BaliHoliday",
  description: "Immerse yourself in the authentic beauty of Bali by experiencing it through the eyes of its local inhabitants. Unveil the genuine essence of the islands rich culture, age-old traditions, and unique way of life. Discover serene landscapes, from the majestic Mount Agung to the tranquil waters of the Bali Sea. Explore the vibrant ceremonies, sacred temples, and warm hospitality that define the Balinese community. Indulge in the culinary delights, the intricate dance performances, and the artisanal crafts that are woven into the fabric of daily life. With our expertly curated tours, youll not only visit Bali, but youll feel its heartbeat, understand its spirit, and create memories that will last a lifetime. Join us for an unparalleled journey into the heart of Bali, where every moment is a step closer to the soul of the island.",
  keywords: "Bali Vacation Packages, Affordable Bali Tours, Bali Travel Guide, Exclusive Bali Holiday Deals, Bali Adventure Itineraries, Cultural Tours in Bali, Bali Honeymoon Specials, Bali Eco-Tourism, Best Time to Visit Bali, Bali Culinary Experiences, Bali Holiday, Bali Best Tour Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-31VTMP2MPD"/>
        <div>
          <Navbar/>
          <div className='px-2 lg:px-10'> 
          {children}
          </div>
          <Ai/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
