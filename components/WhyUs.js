import Image from 'next/image'
import React from 'react'

const whys = [
    {
      title: 'Quality',
      url: '/icons/whyus/quality.svg',
      description: 'We uphold high standards in every project, ensuring client satisfaction.'
    },{
      title: 'Experience',
      url: '/icons/whyus/experience.svg',
      description: 'Our seasoned professionals bring deep industry expertise.'
    },{
      title: 'Innovation',
      url: '/icons/whyus/innovation.svg',
      description: 'We leverage emerging technologies to deliver adaptive solutions.'
    }
  ]

export default function WhyUs() {
  return (
    <div className="bg-[#F1F7FE] py-16 px-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 max-w-[1200px] mx-auto">
            <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl">
                WHY <br className="hidden md:block"/>
                <span>CHOOSE</span> <br className="hidden md:block"/>
                <span>US</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center md:text-left">
                At Bitshift, we stand out through our commitment to quality, extensive experience, and focus on innovation.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:max-w-[1200px] mx-auto gap-10 place-items-center">
            {whys.map((why, index) => (
                <div key={index} className="flex flex-col gap-8 px-8 lg:px-0 w-[305px] rounded-2xl items-center">
                    <Image 
                        src={why.url}
                        alt={why.url}
                        height={75}
                        width={56}
                        className="size-16"
                    />
                    <h1 className="text-3xl font-extrabold text-[#02033B]">{why.title}</h1>
                    <p className="text-[#2E2F35] text-base text-center">{why.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
