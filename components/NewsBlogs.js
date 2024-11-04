'use client'
import Image from 'next/image'
import React from 'react'
import { blogs } from './blogs'
import { news } from './news'
import { useRouter } from 'next/navigation'

export default function NewsBlogs() {
    const router = useRouter()
  return (
        <div className="flex flex-col p-8 sm:p-10 md:py-14 py-12 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl md:pr-8 text-centers">
                NEWS & BLOGS
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    <Image 
                        src={news[0].url}
                        alt={news[0].title}
                        height={432}
                        width={592}
                        layout="responsive"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="text-[#35BCDC] text-xs">{news[0].date}</p>
                        <div className="flex justify-between">
                            <h1 
                                className="font-bold text-base hover:text-[#35BCDC] cursor-pointer" 
                                onClick={() => router.push(`/news/${news[0].id}`)}>
                                {news[0].title}
                            </h1>
                            <Image 
                                src='/news/news-link.svg'
                                alt="news link"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-[#667085] text-sm">{news[0].description}</p>
                    </div>
                </div>

                <hr className="block md:hidden my-8" />
                
                <div className="flex flex-col gap-6">
                    {blogs.slice(0, 2).map((blog, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[200px]">
                                <Image 
                                src={blog.url}
                                alt={blog.title}
                                layout="fill"       
                                objectFit="cover"  
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-[#35BCDC] text-xs">{blog.date}</p>
                                <h1 
                                    className="font-bold text-base hover:text-[#35BCDC] cursor-pointer" 
                                    onClick={() => router.push(`/blogs/${blog.id}`)}> 
                                    {blog.title}
                                </h1>

                                <div className='line-clamp-4 text-[#667085] text-sm' dangerouslySetInnerHTML={{ __html: blog.description }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
