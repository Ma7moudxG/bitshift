import React from 'react'

export default function Aboutus() {
  return (
    <div className="flex flex-col md:flex-row p-8 sm:p-10 md:py-14 py-12 items-center justify-between gap-6 max-w-[1200px] mx-auto">
        <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl md:pr-8">
            ABOUT <br className="hidden md:block"/>
            <span>US</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
        At Bitshift, we empower businesses to thrive in the digital age. Our expert team specializes in IT consulting, software development, and cybersecurity, ensuring tailored solutions that meet your unique needs. We are dedicated to simplifying technology and driving innovation, helping you achieve your strategic goals.
        </p>
    </div>
  )
}
