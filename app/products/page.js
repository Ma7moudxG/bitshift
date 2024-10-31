"use client";

// export const metadata = {
//     title: "Bitshift ⋅ Products",
//     description: "",
//   };

import Image from "next/image";
import Main from "../../components/Main";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const benefits = [
  {
    title: "Comprehensive Management",
    description:
      "Simplifies administrative tasks, allowing coaches and staff to focus on training and development.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Provides athletes with detailed analytics to track their performance and progress over time.",
  },
  {
    title: "Communication Tools",
    description:
      "Facilitate seamless communication between coaches, athletes, and parents through integrated messaging systems.",
  },
];

const features = [
  {
    title: "Automated Scheduling",
    description:
      "Streamline practice schedules, games, and events with our intuitive calendar system.",
  },
  {
    title: "Performance Analytics",
    description:
      "Access real-time data on athlete performance, including metrics like speed, endurance, and skill development.",
  },
  {
    title: "Communication Tools",
    description:
      "Facilitate seamless communication between coaches, athletes, and parents through integrated messaging systems.",
  },
];
const cases = [
  {
    title: "Team Management",
    description:
      "Coaches can easily manage team rosters, schedules, and communication from one platform.",
  },
  {
    title: "Athlete Development",
    description:
      "Athletes receive personalized training plans based on performance data and analytics.",
  },
  {
    title: "Event Coordination",
    description:
      "Organize tournaments and events efficiently with automated scheduling tools.",
  },
];

export default function Products() {
  const router = useRouter();
  return (
    <Main>
      <header className="relative bg-[url('/products-bg.avif')] bg-center bg-cover h-[200px] md:h-[300px] lg:h-[400px] ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            PRODUCTS
          </h1>
        </div>
      </header>

      <div className="relative">
        <div className="relative mx-auto">
          <div className="flex flex-col px-8 py-12 gap-8 mx-auto items-center relative bg-[#02033B]">
            {/* Split background */}
            <div className="absolute inset-0 bg-[#F1F7FE] h-1/2 w-full top-0"></div>
            <div className="absolute inset-0 bg-[#F1F7FE] h-1/2 w-full "></div>

            <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl text-center z-0">
              CHAMPS
            </h1>

            <Image
              src="/website-and-mobile-app-mockup.png"
              alt="website and mobile app mockup"
              width={800}
              height={800}
              className="z-0"
            />

            <p className="z-0 text-white md:text-base lg:text-lg text-center max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] mx-auto">
              The All-in-One Sports Platform for Coaches, Administrators, and
              Athletes
            </p>

            <button
              className="z-0 flex items-center gap-4 bg-[#B6E89E] px-12 md:px-14 py-2 md:py-3 text-base md:text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white"
              onClick={() => router.push("/contact_us")}
            >
              Get Started
              <BsArrowRight className="text-xl font-semibold" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto py-16">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Product Overview
              </h1>
              <p className="text-[#667085] sm:text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[80%] mx-auto">
                Champs is an end-to-end sports platform designed to automate and
                streamline the daily operations of coaches, administration, and
                athletes. <br />
                <br />
                Our comprehensive solution enhances the global sports industry
                by providing powerful tools that cover all aspects necessary for
                any sports organization. <br />
                <br /> With Champs, athletes gain maximum analytics and insights
                into their progress, empowering them to reach their full
                potential.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-14">
              <h3 className="text-lg font-semibold text-[#02033B] px-8">
                Key Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((offering, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-2xl items-start bg-[#F1F7FE] p-8"
                  >
                    <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                      {offering.title}
                    </h1>
                    <p className="text-[#2E2F35] text-sm md:text-base">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F7FE] flex flex-col gap-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Features
              </h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-14">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-4 lg:w-[50%]">
                {features.map((offering, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-2xl items-start bg-white p-8 lg:justify-between"
                  >
                    <h1 className="text-lg md:text-xl font-extrabold text-[#02033B]">
                      {offering.title}
                    </h1>
                    <p className="text-[#2E2F35] text-sm md:text-base">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <Image
                  src="/laptop-dashboard-champ.png"
                  alt="Laptop Dashboard Champ"
                  width={600}
                  height={432}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Specifications
              </h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-start gap-10 md:gap-14">
              <div className="flex flex-col gap-4 w-full lg:w-[60%]">
                <div className="flex gap-4">
                  <h1 className="w-[25%] text-md lg:text-base font-bold text-[#02033B]">
                    User Roles
                  </h1>
                  <p className="w-[75%] text-xs lg:text-sm text-[#2E2F35]">
                    Coaches, Athletes, Administrators
                  </p>
                </div>
                <div className="flex gap-4">
                  <h1 className="w-[25%] text-md lg:text-base font-bold text-[#02033B]">
                    Supported <br />
                    Sports
                  </h1>
                  <p className="w-[75%] text-xs lg:text-sm text-[#2E2F35]">
                    Football, Basketball, Soccer, Track & Field, and more
                  </p>
                </div>
                <div className="flex gap-4">
                  <h1 className="w-[25%] text-md lg:text-base font-bold text-[#02033B]">
                    Analytics <br />
                    Type
                  </h1>
                  <p className="w-[75%] text-xs lg:text-sm text-[#2E2F35]">
                    Performance Tracking, Progress Reports
                  </p>
                </div>
                <div className="flex gap-4">
                  <h1 className="w-[25%] text-md lg:text-base font-bold text-[#02033B]">
                    Integration
                  </h1>
                  <p className="w-[75%] text-xs lg:text-sm text-[#2E2F35]">
                    Compatible with various fitness trackers and wearables
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[40%]">
                <Image
                  src="/mobile-mockup-champ.png"
                  alt="Mobile Mockup Champ"
                  width={600}
                  height={432}
                  className="w-[60%] md:w-[80%]   mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Use Cases
              </h1>
              <h3 className="text-[#02033B] font-bold text-lg md:text-xl mx-auto">
                Champs is perfect for
              </h3>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-14">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((offering, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-2xl items-start bg-white p-8"
                  >
                    <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                      {offering.title}
                    </h1>
                    <p className="text-[#2E2F35] text-sm md:text-base">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                Customer Testimonials
              </h1>
            </div>
            <div className="relative flex gap-10 md:gap-14 max-w-[565px] items-start rounded-2xl p-8 bg-[#F1F7FE]">
              {/* Quote Icon */}
              <Image
                src="/icons/quote.svg"
                alt="quote"
                width={90}
                height={60}
                className="absolute top-[-30px] right-[-1px]"
              />
              {/* Testimonial Content */}
              <div className="flex flex-col gap-4 items-start">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                  Sarah T.
                </h1>
                <h3 className="text-base md:text-lg font-semibold text-[#2E2F35]">
                  Head Coach
                </h3>
                <p className="text-[#2E2F35] text-sm md:text-base">
                  Champs has transformed how we manage our team. The insights we
                  get help our athletes improve every day!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#02033B] flex flex-col gap-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col px-8 gap-12 max-w-[1200px] mx-auto items-center">
            <div className="flex flex-col text-center gap-8 justify-center">
              <h1 className="text-[#35BCDC] font-extrabold text-2xl md:text-3xl lg:text-4xl mx-auto">
                FAQs
              </h1>
            </div>
            <div className="flex flex-col gap-10 md:gap-14  items-start  ">
              <div className="flex flex-col gap-4 items-start p-8 bg-white max-w-[1010px] rounded-2xl w-full">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                  What is Champs?
                </h1>
                <p className="text-[#2E2F35] text-sm md:text-base">
                  Champs is a comprehensive sports platform that automates daily
                  operations for coaches, administrators, and athletes while
                  providing in-depth analytics for performance tracking.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start p-8 bg-white max-w-[1010px] rounded-2xl w-full">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                  Which sports does Champs support?
                </h1>
                <p className="text-[#2E2F35] text-sm md:text-base">
                  Champs supports a wide range of sports including football,
                  basketball, soccer, track & field, and more.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start p-8 bg-white max-w-[1010px] rounded-2xl w-full">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B]">
                  Is there a free trial available?
                </h1>
                <p className="text-[#2E2F35] text-sm md:text-base">
                  Yes! We offer a 30-day free trial so you can explore all
                  features of Champs before committing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[url('/call-to-action-elevate.avif')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-6 md:gap-8 justify-center items-center px-8 z-0">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl text-center">
            CONTACT INFORMATION
          </h1>
          <div className="flex flex-col gap-4 items-center text-center font-semibold text-xl lg:text-2xl text-white">
            <p className=" md:max-w-[75%] mx-auto">
              For support inquiries, please reach out to our customer service
              team at
            </p>
            <Link
              href="mailto:support@bitshift.com"
              className="underline hover:text-[#bbcadb] text-2xl lg:text-3xl"
            >
              support@bitshift.com
            </Link>
            <p className=" md:max-w-[80%] mx-auto">or call us at</p>
            <p className=" md:max-w-[80%] mx-auto text-2xl lg:text-3xl">
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
}
