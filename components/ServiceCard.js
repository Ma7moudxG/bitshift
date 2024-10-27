import Image from 'next/image';
import React from 'react'

export default function ServiceCard(props) {
    const { title, url, description } = props;
  return (
    <div className="bg-white flex flex-col gap-4 sm:gap-6 md:gap-8 p-8 w-[280px] md:w-[305px] lg:w-[330px] rounded-2xl">
        <Image 
            src={url}
            alt={url}
            height={36}
            width={36}
            className='w-[42px] h-[42px]'
        />
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#02033B]">{title}</h1>
        <p className="text-[#2E2F35] text-sm md:text-base">{description}</p>
    </div>
  )
}
