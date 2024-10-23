"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function CallToAction() {
  const router = useRouter()
  return (
    <div className="relative bg-[url('/call-to-action.avif')] bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
      <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-8 justify-center items-center p-12 z-0">
        <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-center">
          Ready to elevate your business?
        </h1>
        <p className="text-white md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
          Contact us today to schedule a consultation and discover how we can
          help you Bitshift your processes for better performance.
        </p>
        <button className="flex  items-center gap-4 bg-[#B6E89E] px-16 py-3 text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white "  onClick={() => router.push('/contact_us')}>
          Get Started
          <BsArrowRight className="text-xl font-semibold" />
        </button>
      </div>
    </div>
  );
}
