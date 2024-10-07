import Image from 'next/image'
import React from 'react'

const news = [
    {
        id: 1,
        title: 'Maximizing Efficiency with AI Solutions',
        author: 'Olivia Rhye',
        date: '20 Jan 2024',
        description: 'How do you Maximize Efficiency that wow your colleagues and impress your managers?',
        url: '/news/maximizing-effeciency-with-ai.png'
    }
]

const blogs = [
    {
        id: 1,
        title: "The Importance of Cybersecurity in Today's Business",
        author: 'Phoenix Baker',
        date: '19 Jan 2024',
        description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
        url: '/news/importance-of-cybersecurity.png'
    },
    {
        id: 2,
        title: 'Navigating Your Cloud Migration Journey',
        author: 'Olivia Rhye',
        date: '18 Jan 2024',
        description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
        url: '/news/importance-of-cybersecurity.png'
    }
]

export default function NewsBlogs() {
  return (
        <div className="flex flex-col p-8 sm:p-10 md:py-14 py-12 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl md:pr-8 text-centers">
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
                        <p className="text-[#35BCDC] text-xs">{news[0].author} • {news[0].date}</p>
                        <div className="flex justify-between">
                            <h1 className="font-bold text-base">{news[0].title}</h1>
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
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6">
                            <Image 
                                src={blog.url}
                                alt={blog.title}
                                height={200}
                                width={320}
                                layout="responsive"
                            />
                            <div className="flex flex-col gap-4">
                                <p className="text-[#35BCDC] text-xs">{blog.author} • {blog.date}</p>
                                <h1 className="font-bold text-base">{blog.title}</h1>
                                <p className="text-[#667085] text-sm">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
