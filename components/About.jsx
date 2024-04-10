import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className="bg-white">
      <Image src={'/hero-about.webp'} width={5000} height={1000} alt='bali' className='w-full hidden md:block' priority/>
      <Image src={'/hero-about.webp'} width={1000} height={450} alt='bali' className='md:hidden' priority/>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Thank you for visit baliholiday website</h2>
          <p className="mb-4">Welcome to BaliHoliday! Thank you for choosing to explore our website. I&apos;m Saskara, but you can call me Sas. As a local Balinese, I&apos;ve crafted this platform to offer you alternative ways to navigate your Bali experience.</p>
          <p>Understanding the importance of having a local friend while traveling, I&apos;m here to assist you with any inquiries or assistance you may need during your visit. Feel free to browse through our tour packages and articles. Should you require more personalized information, don&apos;t hesitate to reach out to me directly. Your journey in Bali starts here!</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image width={200} height={200} className="w-full rounded-lg avatar1" src="/foto-sas.webp" alt="saskara putra"/>
          <Image width={200} height={200} className="mt-4 w-full lg:mt-10 rounded-lg avatar2" src="/foto-about.webp" alt="ulundanu tample"/>
        </div>
      </div>
    </section>
  )
}

export default About