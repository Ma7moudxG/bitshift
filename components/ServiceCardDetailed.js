import Image from 'next/image';
import React from 'react'

export default function ServiceCardDetailed(props) {
    const { title, url, description } = props;
  return (
    <div className="bg-white flex flex-col gap-8 p-8 w-[305px] sm:w-[380px] rounded-2xl">
        <Image 
            src={url}
            alt={url}
            height={36}
            width={44}
        />
        <h1 className="text-3xl font-extrabold text-[#02033B]">{title}</h1>
        <p className="text-[#2E2F35] text-base">{description}</p>
    </div>
  )
}
