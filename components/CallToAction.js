import React from 'react'

export default function CallToAction() {
  return (
    <div className="relative bg-[url('/call-to-action.png')] bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative flex flex-col p-8 sm:p-10 md:py-14 py-12 gap-10 md:gap-14 max-w-[1200px] mx-auto place-items-center z-0">
            <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl md:pr-8 text-center max-w-[1020px]">
                Ready to elevate your business? Contact us today to schedule a consultation and discover how we can help you Bitshift your processes for better performance.
            </h1>
            <button className="bg-[#B6E89E] px-20 py-4 text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white ">
                Learn More
            </button>
        </div>
    </div>
  )
}
