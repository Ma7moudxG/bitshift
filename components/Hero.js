'use client';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
  const words = ["FASTER", "BETTER", "SAFER"];

  return (
    <div className="relative flex w-full max-h-screen bg-[url('/home-slider-laptop.jpg')] bg-center bg-cover items-center justify-center text-center text-white mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>

      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
          DO IT <span className="text-[#35BCDC]">
            <ReactTypingEffect
              text={words}
              speed={100} // typing speed
              eraseSpeed={50} // erasing speed
              eraseDelay={1000} // delay before erasing
              cursorRenderer={cursor => <span className="text-[#35BCDC]">{cursor}</span>}
              displayTextRenderer={(text, i) => {
                return (
                  <span>
                    {text.split('').map((char, index) => {
                      const key = `${index}`;
                      return (
                        <span
                          key={key}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              }}
            />
          </span>
        </h1>
        <p className="max-w-[600px] mx-auto sm:p-6 md:p-8 p-12">
          We are Zeno Technology, a team of talented and passionate IT experts who have a wealth of experience and knowledge in various domains and technologies.
        </p>
        <button className="bg-[#B6E89E] px-8 py-4 rounded-full text-[#02033B] font-bold">
          Setup a quick call with us!
        </button>
      </div>
    </div>
  );
}
