"use client"
import React from 'react'
import ServiceCard from './ServiceCard'
import { useRouter } from 'next/navigation'

const services = [
  {
    title: 'Cybersecurity Services',
    url: '/icons/services/cybersecurity.svg',
    description: 'Comprehensive assessments and ongoing monitoring to protect your digital assets.'
  },{
    title: 'Data Analytics, AI & Automation',
    url: '/icons/services/data-analytics.svg',
    description: 'Leverage advanced analytics and AI for actionable insights and informed decisions.'
  },{
    title: 'IT & Cloud Services',
    url: '/icons/services/it-cloud-services.svg',
    description: 'Full management and support for a robust IT infrastructure and seamless cloud integration.'
  },{
    title: 'Consultation & Training Services',
    url: '/icons/services/consultation-training.svg',
    description: 'Targeted training programs to elevate team skills and foster continuous improvement..'
  },{
    title: 'Custom Software Solutions',
    url: '/icons/services/custom-software-solutions.svg',
    description: 'Bespoke software tailored to your business needs, enhancing efficiency and user experience.'
  },{
    title: 'IT Service Management Systems',
    url: '/icons/services/it-service-management.svg',
    description: 'Streamline IT processes with effective ITSM solutions for improved service delivery.'
  },
]
export default function Services() {
  const router = useRouter()
  return (
    <div className="bg-[#02033B]">
      <div className="bg-[#02033B] flex flex-col p-8 sm:p-10 md:py-14 py-12 items-center justify-between gap-14 md:gap-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl md:pr-4">
                WHAT <br className="hidden md:block"/>
                <span>WE DO</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center md:text-left"  >
            Bitshift offers a comprehensive range of services designed to enhance your business operations:
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 max-w-[1200px] gap-8">
          {services.map((service, index) => (
                  <ServiceCard key={index}
                    title={service.title} 
                    url={service.url}
                    description={service.description}
                  />
          ))}
        </div>
        <div>
          <button className="bg-[#B6E89E] px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white "  onClick={() => router.push('/services')}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
