export const metadata = {
    title: "Bitshift ⋅ Contact Us",
    description: "",
  };

import Main from '@/components/Main';
import React from 'react'

export default function ContactUS() {
  return (
    <Main >
        <div className="relative bg-[url('/blogs-news2-bg.avif')] bg-center bg-cover h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
            <div className='relative max-w-[1200px] mx-auto h-full flex items-center p-8 lg:p-0 z-0'>
                <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-left">
                CONTACT 
                <br className="hidden md:block"/>
                {' '} US
                </h1>
            </div>
        </div>


        <div className="relative bg-[#F1F7FE] md:py-14 py-8">
          <div className="relative smax-w-[1200px] mx-auto">
            <div className="flex flex-col p-8 lg:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
                <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl md:pr-8 text-centers">
                CONTACT US
                </h1>
                
            </div>
          </div>
        </div>
    </Main>
  )
}
