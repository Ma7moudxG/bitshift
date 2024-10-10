'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = ["BETTER", "FASTER", "SAFER"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [index, words]);

  return (
    <div className="relative h-dvh flex w-full max-h-screen bg-[url('/software-team-wrok.jpg')] bg-center bg-cover items-center justify-center text-center text-white mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>

      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
          DO IT{" "}
          <span className="text-[#35BCDC]">
            <motion.span
              key={currentWord}
              initial={{ y: 50, opacity: 0 }}  // Animation start
              animate={{ y: 0, opacity: 1 }}   // Animation end
              exit={{ y: -50, opacity: 0 }}    // Animation on exit
              transition={{ duration: 0.5 }}    // Speed of the animation
            >
              {currentWord}
            </motion.span>
          </span>
        </h1>

        <h3 className="text-2xl sm:text-3xl md:text-4xl max-w-[500px] mx-auto sm:px-6 md:px-8 px-12 py-8 sm:py-4 md:py-6">
          Transform your business processes with Bitshift.
        </h3>

        {/* Centered buttons container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-[600px] mx-auto mt-6 ">
          <button className="bg-white px-12 py-4 rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white">
            Get Started
          </button>
          <button className="bg-[#B6E89E] px-12 py-4 rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
