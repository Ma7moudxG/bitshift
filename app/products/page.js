"use client";

// export const metadata = {
//     title: "Bitshift ⋅ Products",
//     description: "",
//   };

import Image from "next/image";
import Main from "../../components/Main";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const benefits = [
  {
    title:"Comprehensive Management",
    description: "Simplifies administrative tasks, allowing coaches and staff to focus on training and development."
  },
  {
    title:"Data-Driven Insights",
    description: "Provides athletes with detailed analytics to track their performance and progress over time."
  },
  {
    title:"Communication Tools",
    description: "Facilitate seamless communication between coaches, athletes, and parents through integrated messaging systems."
  },
]

export default function Products() {
  return (
    <Main>
      <header className="relative bg-[url('/products-bg.png')] bg-center bg-cover h-[200px] md:h-[300px] lg:h-[400px] ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            PRODUCTS
          </h1>
        </div>
      </header>

      <div className="relative">
        <div className="relative mx-auto">
          <div className="flex flex-col px-8 py-12 gap-8 mx-auto items-center relative bg-[#F1F7FE]">
            {/* Split background */}
            <div className="absolute inset-0 bg-[#02033B] h-1/2 w-full top-0"></div>
            <div className="absolute inset-0 bg-[#02033B] h-1/2 w-full "></div>

            <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl text-center z-0">
              CHAMPS
            </h1>

            <Image
              src="/website-and-mobile-app-mockup.png"
              alt="website and mobile app mockup"
              width={600}
              height={600}
              className="z-0"
            />

            <p className="z-0 text-[#667085] md:text-base lg:text-lg text-center max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] mx-auto">
              The All-in-One Sports Platform for Coaches, Administrators, and
              Athletes
            </p>

            <button
              className="z-0 flex items-center gap-4 bg-[#B6E89E] px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white"
              onClick={() => router.push("/contact_us")}
            >
              Get Started
              <BsArrowRight className="text-xl font-semibold" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto py-12">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Product Overview
              </h1>
              <p className="text-[#667085] sm:text-sm md:text-base lg:text-lg sm:max-w-[70%] md:max-w-[60%] mx-auto">
                Champs is an end-to-end sports platform designed to automate and
                streamline the daily operations of coaches, administration, and
                athletes. <br />
                <br />
                Our comprehensive solution enhances the global sports industry
                by providing powerful tools that cover all aspects necessary for
                any sports organization. <br />
                <br /> With Champs, athletes gain maximum analytics and insights
                into their progress, empowering them to reach their full
                potential.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-14">
              <h3 className="text-lg font-semibold text-[#02033B] px-8">Key Benefits:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((offering, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-2xl items-start bg-[#F1F7FE] p-8"
                  >
                    <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                      {offering.title}
                    </h1>
                    <p className="text-[#2E2F35] text-sm md:text-base">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
