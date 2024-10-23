"use client"
// export const metadata = {
//   title: "Bitshift ⋅ Services",
//   description: "",
// };

import Main from "../../components/Main";
import ServiceCardDetailed from "../../components/ServiceCardDetailed";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    title: "Cybersecurity Services",
    url: "/icons/services/cybersecurity.svg",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. We provide thorough assessments, ongoing monitoring, and proactive measures to safeguard your business against emerging threats.",
  },
  {
    title: "Data Analytics, AI & Automation",
    url: "/icons/services/data-analytics.svg",
    description:
      "Leverage the power of advanced analytics and artificial intelligence to gain actionable insights. Our services help you make informed decisions, optimize operations, and automate repetitive tasks for increased productivity.",
  },
  {
    title: "IT & Cloud Services",
    url: "/icons/services/it-cloud-services.svg",
    description:
      "Ensure a robust IT infrastructure with our full management and support services. We specialize in seamless cloud integration, enabling you to leverage the benefits of cloud technology while maintaining operational efficiency.",
  },
  {
    title: "Consultation & Training Services",
    url: "/icons/services/consultation-training.svg",
    description:
      "Elevate your team’s skills with our targeted training programs. We offer consultation services that foster continuous improvement and empower your workforce to adapt to evolving technologies",
  },
  {
    title: "Custom Software Solutions",
    url: "/icons/services/custom-software-solutions.svg",
    description:
      "We develop bespoke software tailored to your specific business needs. Our solutions enhance efficiency, improve user experience, and are designed to scale as your business grows.",
  },
  {
    title: "IT Service Management Systems",
    url: "/icons/services/it-service-management.svg",
    description:
      "Streamline your IT processes with effective IT Service Management (ITSM) solutions. We help you improve service delivery, enhance user satisfaction, and align IT services with your business goals",
  },
];

const whys = [
  {
    title: "Quality Assurance",
    url: "/icons/whyus/quality.svg",
    description:
      "We uphold high standards in every project, ensuring client satisfaction.",
  },
  {
    title: "Expertise",
    url: "/icons/whyus/experience.svg",
    description:
      "Our seasoned professionals bring deep industry knowledge and technical expertise.",
  },
  {
    title: "Innovation Focus",
    url: "/icons/whyus/innovation.svg",
    description:
      "We leverage emerging technologies to deliver adaptive solutions that meet your needs.",
  },
];

const Services = () => {
  const router = useRouter()
  return (
    <Main>
      <div className="relative bg-[url('/services-banner.jpg')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left">
            SERVICES
          </h1>
        </div>
      </div>

      <div className="relative bg-[#02033B] md:py-14 py-8">
        <div className="relative smax-w-[1200px] mx-auto">
          <div className="flex flex-col p-8 xl:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl md:pr-8 text-center">
              Bitshift Your Business with Tailored IT Solutions
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl text-center md:max-w-[70%] lg:max-w-[80%]">
              At Bitshift, we understand that every business is unique. That is
              why we offer a comprehensive suite of services designed to enhance
              your operations, streamline processes, and drive innovation.
              Explore our key offerings below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 max-w-[1200px] gap-8">
              {services.map((service, index) => (
                <ServiceCardDetailed
                  key={index}
                  title={service.title}
                  url={service.url}
                  description={service.description}
                />
              ))}
            </div>

            <button className="flex  items-center gap-4 bg-[#B6E89E] px-16 py-3 text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white "  onClick={() => router.push('/contact_us')}>
               Book a discovery call
              <BsArrowRight className="text-xl font-semibold" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F7FE] p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
            Why Choose Bitshift?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] mx-auto place-items-center gap-x-20 gap-y-12">
          {whys.map((why, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-[305px] rounded-2xl items-center"
            >
              <Image
                src={why.url}
                alt={why.url}
                height={75}
                width={56}
                className="size-16"
              />
              <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                {why.title}
              </h1>
              <p className="text-[#2E2F35] text-sm md:text-base text-center">
                {why.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[url('/call-to-action-elevate.jpg')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-8 justify-center items-center p-8 xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-center">
            READY TO ELEVATE YOUR BUSINESS?
          </h1>
          <p className="text-white md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
            Contact us today to schedule a consultation and discover how
            Bitshift can help you optimize your processes for better
            performance.
          </p>
          <button className="flex  items-center gap-4 bg-[#B6E89E] px-16 py-3 text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white "  onClick={() => router.push('/contact_us')}>
            Get Started
            <BsArrowRight className="text-xl font-semibold" />
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Services;
