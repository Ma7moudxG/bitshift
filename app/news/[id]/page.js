
import React from 'react';
import { news } from '../../../components/news';
import Image from 'next/image';

export default function NewsPage({ params }) {
    const foundNews = news.find(item => item.id.toString() === params.id);

    if (!foundNews) {
        return <p>News not found</p>;
    }

    return (
        <div className="flex flex-col p-8 sm:p-10 md:py-14 py-12 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <h1 className="text-[#02033B] font-bold text-2xl md:text-3xl lg:text-4xl md:pr-8 text-center">
                {foundNews.title}
            </h1>
            <div className="w-full">
                <div className="flex flex-col gap-6 w-full">
                    <Image 
                        src={foundNews.url}
                        alt={foundNews.title}
                        height={432}
                        width={592}
                        layout="responsive"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="text-[#35BCDC] text-xs">{foundNews.author} • {foundNews.date}</p>
                        <p className="text-[#667085] text-sm">{foundNews.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
