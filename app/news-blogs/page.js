'use client'

import { useRouter } from 'next/navigation'

import Main from '../../components/Main';
import React from 'react'
import { blogs } from '../../components/blogs'
import { news } from '../../components/news'
import Image from 'next/image';

export default function NewsBlogs() {
    const router = useRouter()
    return (
      <Main >
        <div className="relative bg-[url('/blogs-news2-bg.avif')] bg-center bg-cover h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
            <div className='relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 lg:justify-start lg:p-0 z-0'>
                <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-left">
                NEWS & 
                <br className="hidden lg:block"/>
                {' '} BLOGS
                </h1>
            </div>
        </div>
  
        <div className='max-w-[1200px] mx-auto md:py-14 py-8'>
          <div className="flex flex-col p-8 lg:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl md:pr-8 text-centers">
              NEWS
            </h1>
            
            {/* Flex container for left and right sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left section: First news item */}
                <div className="flex flex-col gap-8 h-full">
                    <Image 
                        src={news[0].url}
                        alt={news[0].title}
                        height={800}
                        width={600}
                        layout="intrinsic"
                        objectFit='cover'
                    />
                    <div className="flex flex-col gap-4">
                        <p className="text-[#35BCDC] text-sm">{news[0].author} • {news[0].date}</p>
                        <div className="flex justify-between">
                            <h1 className="font-bold text-lg hover:text-[#35BCDC] cursor-pointer" onClick={() => router.push(`/news/${news[0].id}`)}>{news[0].title}</h1>
                            <Image 
                                src='/news/news-link.svg'
                                alt="news link"
                                width={24}
                                height={24}
                                onClick={() => router.push(`/news/${news[0].id}`)}
                                className='cursor-pointer'
                            />
                        </div>
                        <p className="text-[#667085] text-base">{news[0].description}</p>
                    </div>
                </div>

                <hr className="block md:hidden my-8" />

                {/* Right section: Grid with the next 6 news items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                    {news.slice(1, 7).map((blog, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            {/* Fixed height for mobile, adjustable on larger screens */}
                            <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[140px]">
                                <Image 
                                src={blog.url}
                                alt={blog.title}
                                layout="fill"       
                                objectFit="cover"  
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-[#35BCDC] text-xs">{blog.author} • {blog.date}</p>

                                {/* Truncate title after two lines */}
                                <h1 className="font-bold text-base line-clamp-2 overflow-ellipsis hover:text-[#35BCDC] cursor-pointer" onClick={() => router.push(`/news/${blog.id}`)}>
                                {blog.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>

        <div className="relative bg-[#F1F7FE] md:py-14 py-8">
          <div className="relative smax-w-[1200px] mx-auto">
            <div className="flex flex-col p-8 lg:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
                <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl md:pr-8 text-centers">
                BLOGS
                </h1>
                
                {/* Flex container for left and right sections */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex flex-col gap-2">
                            {/* Fixed height for mobile, adjustable on larger screens */}
                            <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[200px]">
                                <Image 
                                src={blog.url}
                                alt={blog.title}
                                layout="fill"       
                                objectFit="cover"  
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-[#35BCDC] text-xs">{blog.author} • {blog.date}</p>

                                {/* Truncate title after two lines */}
                                <h1 className="font-bold text-base line-clamp-2 overflow-ellipsis hover:text-[#35BCDC] cursor-pointer" 
                                    onClick={() => router.push(`/blogs/${blog.id}`)}> 
                                    {blog.title}
                                </h1>
                                <p className="text-[#667085] text-sm">{blog.description}</p>
                            </div>
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
