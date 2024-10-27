'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';



export default function Hero() {
  const words = ["BETTER", "FASTER", "SAFER"];
  const router = useRouter()
  return (
    <div className="relative h-screen flex w-full max-h-screen bg-[url('/software-team-wrok.avif')] bg-center bg-cover items-center justify-center text-center text-white mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>

      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          DO IT <span className="text-[#35BCDC]">
            <ReactTypingEffect
              text={words}
              speed={100} // typing speed
              eraseSpeed={50} // erasing speed
              eraseDelay={1000} // delay before erasing
              typingDelay={500}
              cursorRenderer={cursor => <span className="text-[#35BCDC]">{cursor}</span>}
              displayTextRenderer={(text, i) => {
                return (
                  <span>
                    {text.split('').map((char, index) => {
                      const key = index;
                      return <span key={key}>{char}</span>
                    })}
                  </span>
                )}}
            />
          </span>
        </h1>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl max-w-[500px] mx-auto sm:px-6 md:px-8 px-12 py-8 sm:py-4 md:py-6">
        Transform your business processes with Bitshift.
        </h3>

        {/* Centered buttons container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-[600px] mx-auto mt-6 ">
          <button className="bg-white px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white" onClick={() => router.push('/contact_us')}>
            Get Started
          </button>
          <button className="bg-[#B6E89E] px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white " onClick={() => router.push('/contact_us')} >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}