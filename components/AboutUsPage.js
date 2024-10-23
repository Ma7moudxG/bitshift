"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Main from "./Main";

const whys = [
  {
    title: "Quality",
    url: "/icons/whyus/quality.svg",
    description:
      "We uphold high standards in every project, ensuring client satisfaction through meticulous attention to detail.",
  },
  {
    title: "Integrity",
    url: "/icons/whyus/experience.svg",
    description:
      "Trust is paramount; we conduct our business with transparency and ethical practices.",
  },
  {
    title: "Innovation",
    url: "/icons/whyus/innovation.svg",
    description:
      "We embrace emerging technologies to deliver adaptive solutions that meet the evolving needs of our clients.",
  },
];

const profiles = [
  {
    title: "Essam",
    url: "/essam.jpg",
    description:
      "A seasoned IT professional with 17 years of experience, specializing in agile project management, cloud platforms, and team leadership. Skilled in fostering collaboration and mentoring IT staff.",
  },
  {
    title: "Tamer",
    url: "/essam.jpg",
    description:
      "Experienced IT and cloud leader with over 20 years in digital transformation, cloud adoption, and team leadership. Expert in aligning IT strategies with business goals and enhancing agility. Skilled in cybersecurity, innovation, and driving high-performance teams.",
  },
  {
    title: "Ahmed",
    url: "/essam.jpg",
    description:
      "A seasoned IT professional with 17 years of experience, specializing in agile project management, cloud platforms, and team leadership. Skilled in fostering collaboration and mentoring IT staff.",
  },
];

export default function AboutUs() {
    const router = useRouter()
    return (
      <Main>
        <div className="relative bg-[url('/about-us-banner1.jpg')] bg-center bg-cover h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
          <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
            <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
              ABOUT
              <br className="hidden xl:block" /> US
            </h1>
          </div>
        </div>
  
        <div className="max-w-[1200px] mx-auto md:py-14 py-8">
          <div className="flex flex-col p-8 xl:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col text-left gap-8 justify-center">
                <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl">
                  BITSHIFT&apos;S PURPOSE
                </h1>
                <p className="text-[#667085] sm:text-sm md:text-base lg:text-lg md:max-w-[400px] lg:max-w-[500px]">
                  At Bitshift, we empower businesses to thrive in the digital age.
                  With a commitment to innovation and excellence, we specialize in
                  IT consulting, software development, and cybersecurity.
                  <br />
                  <br />
                  Our mission is to simplify technology and provide tailored
                  solutions that meet your unique business needs.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <Image
                  src="/bitshift-purpose-image.jpg"
                  alt="bitshift purpose image"
                  width={600}
                  height={432}
                />
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-[#F1F7FE] p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
          <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
            <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
              CORE VALUES
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
  
        <div className="p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
          <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
            <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
              MEET OUR TEAM
            </h1>
            <p className="text-[#667085] md:text-base lg:text-lg text-center md:text-center md:max-w-[70%] mx-auto">
              Our team comprises seasoned professionals with diverse backgrounds
              in technology and business. Each member brings unique expertise and
              a passion for helping clients succeed. Together, we work
              collaboratively to deliver exceptional results tailored to your
              specific requirements.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] mx-auto gap-x-20 gap-y-12">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 w-[320px] items-center"
              >
                {/* <Image src={profile.url} alt={profile.url} height={200} width={200} className="grayscale hover:filter-none transition-all size-44 hover:size-56" /> */}
                <h1 className="text-2xl lg:text-3xl font-extrabold text-[#02033B]">
                  {profile.title}
                </h1>
                <p className="text-[#667085] text-sm md:text-base text-center">
                  {profile.description}
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
  }