import React from 'react'

export default function Aboutus() {
  return (
    <div className="flex flex-col sm:flex-row p-4 sm:p-8 md:py-14 py-8 items-center justify-between gap-6 max-w-[1200px] mx-auto">
        <h1 className="text-[#35BCDC] font-extrabold text-3xl md:pr-8">
            ABOUT <br className="hidden md:block"/>
            <span>US</span>
        </h1>
        <p>
        At Bitshift, we empower businesses to thrive in the digital age. Our expert team specializes in IT consulting, software development, and cybersecurity, ensuring tailored solutions that meet your unique needs. We are dedicated to simplifying technology and driving innovation, helping you achieve your strategic goals.
        </p>
    </div>
  )
}