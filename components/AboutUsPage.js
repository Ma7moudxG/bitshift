"use client";
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

const experties = [
  "Software Development",
  "Cybersecurity",
  "Agile Project Management",
  "Cloud Solutions",
  "DevOps",
  "FinOps",
];

export default function AboutUs() {
  const router = useRouter();
  return (
    <Main>
      <div className="relative bg-[url('/about-us-banner1.avif')] bg-center bg-cover h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            ABOUT
            <br className="hidden xl:block" /> US
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-16">
        <div className="flex flex-col max-w-[1200px] mx-auto items-center px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col text-left gap-6 md:gap-8 lg:gap-10 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl">
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
                src="/bitshift-purpose-image.avif"
                alt="bitshift purpose image"
                width={600}
                height={432}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F7FE] py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 md:gap-8 lg:gap-10 px-8 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
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

      <div className="px-8 py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-cent er justify-between gap-6 md:gap-8 lg:gap-10 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
            OUR EXPERTIES
          </h1>
          <div className="text-[#667085] md:text-base lg:text-lg text-center md:text-center md:max-w-[90%] mx-auto">
            With over 20 years in IT and financial strategy, we specialize in
            digital transformation, focusing on:
            <br />
            <div className="flex flex-wrap gap-2 items-center justify-center py-4 mx-auto lg:max-w-[80%]">
              {experties.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-2 rounded-xl text-[#02033B] text-xs md:text-sm font-semibold border-[#35BCDC]"
                >
                  {item}
                </div>
              ))}
            </div>
            <br />
            <h2 className="text-[#02033B] font-semibold text-base">
              Our Vision
            </h2>
            <p className="max-w-[80%] mx-auto">
              To lead in digital transformation by merging technology with
              financial strategy to drive growth and innovation.
            </p>
            <br />
            <h2 className="text-[#02033B] font-semibold text-base">
              Our Mission
            </h2>
            <p className="max-w-[80%] mx-auto">
              To empower businesses with advanced technology solutions for
              sustainable growth. 
              </p>
              <br />
              <p className="max-w-[80%] mx-auto text-[#02033B] font-medium">
              Partnering with us enables confident navigation through the
              digital landscape for measurable success.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-[url('/call-to-action-elevate.avif')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-10 md:gap-14 justify-center items-center px-8 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-center">
            READY TO ELEVATE YOUR BUSINESS?
          </h1>
          <p className="text-white md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
            Contact us today to schedule a consultation and discover how
            Bitshift can help you optimize your processes for better
            performance.
          </p>
          <button
            className="flex  items-center gap-4 bg-[#B6E89E] px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white "
            onClick={() => router.push("/contact_us")}
          >
            Get Started
            <BsArrowRight className="text-xl font-semibold" />
          </button>
        </div>
      </div>
    </Main>
  );
}
