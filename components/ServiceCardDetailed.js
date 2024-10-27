import Image from 'next/image';
import React from 'react'

export default function ServiceCardDetailed(props) {
    const { title, url, description } = props;
  return (
    <div className="bg-white flex flex-col gap-4 sm:gap-6 md:gap-8 p-8 w-[305px] sm:w-[330px] md:w-[350px] lg:w-[380px] rounded-2xl">
        <Image 
            src={url}
            alt={url}
            height={44}
            width={44}
            className='w-[50px] h-[50px]'
        />
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[#02033B]">{title}</h1>
        <p className="text-[#2E2F35] text-sm lg:text-base">{description}</p>
    </div>
  )
}

