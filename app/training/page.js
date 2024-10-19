export const metadata = {
  title: "Bitshift ⋅ Training",
  description: "",
};

import Main from "../../components/Main";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const offerings = [
  {
    title: "Customized Training Programs",
    description:
      "We understand that every organization has unique needs. Our customized training programs are tailored to address specific challenges and goals, ensuring your team receives relevant and impactful learning experiences.",
  },
  {
    title: "Technology Workshops",
    description:
      "Stay ahead of the curve with our hands-on workshops focused on the latest technologies. From software development to cybersecurity practices, our expert-led sessions provide practical insights and skills that can be immediately applied in your work environment.",
  },
  {
    title: " IT Certification Preparation",
    description:
      "Prepare your team for industry-recognized certifications with our comprehensive training courses. We offer guidance and resources for various certifications in IT, cybersecurity, and project management, helping you build a skilled workforce.",
  },
  {
    title: "Leadership Development",
    description:
      "Foster a culture of leadership within your organization. Our leadership development programs focus on enhancing management skills, strategic thinking, and effective communication, empowering your leaders to drive success.",
  },
  {
    title: " Ongoing Support and Resources",
    description:
      "Learning doesn’t stop after training sessions. We provide ongoing support and access to resources to ensure your team continues to grow and adapt to new challenges.",
  },
];

const whys = [
  {
    title: "Expert Instructors",
    description:
      "Our trainers are seasoned professionals with extensive industry experience, ensuring high-quality education.",
  },
  {
    title: "Flexible Learning",
    description:
      "We offer both in-person and online training sessions to accommodate your team’s schedule.",
  },
  {
    title: "Proven Results",
    description:
      "Our training programs have helped numerous organizations enhance their capabilities and achieve their strategic goals.",
  },
];

export default function Training() {
  return (
    <Main>
      <div className="relative bg-[url('/training-bg.jpg')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center p-8 lg:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-left">
            TRAINING
          </h1>
        </div>
      </div>

      <div className="bg-[#F1F7FE]">
        <div className="max-w-[1200px] mx-auto md:py-14 py-8">
          <div className="flex flex-col p-8 lg:p-0 md:py-14 py-8 gap-10 md:gap-14 max-w-[1200px] mx-auto items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col text-left gap-8 justify-center">
                <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl xl:max-w-[80%]">
                  Empower Your Team with Expert Training
                </h1>
                <p className="text-[#667085] sm:text-sm md:text-base lg:text-lg md:max-w-[400px] lg:max-w-[500px]">
                  At Bitshift, we believe that continuous learning is key to
                  staying competitive in today’s fast-paced digital landscape.
                  Our training programs are designed to equip your team with the
                  skills and knowledge necessary to leverage technology
                  effectively and drive innovation within your organization.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <Image
                  src="/empower-your-team-with-expert-training.jpg"
                  alt="Empower Your Team with Expert Training image"
                  width={600}
                  height={432}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
            Our Training Offerings
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto place-items-center gap-x-8 gap-y-8">
          {offerings.slice(0, 4).map((offering, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl items-start bg-[#F1F7FE] p-8"
            >
              <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B] text-left">
                {index + 1}. {offering.title}
              </h1>
              <p className="text-[#2E2F35] text-sm md:text-base text-left">
                {offering.description}
              </p>
            </div>
          ))}

          {/* Fifth item centered and spanning both columns */}
          <div className="flex flex-col gap-4 rounded-2xl items-start bg-[#F1F7FE] p-8 max-w-[50%] col-span-1 lg:col-span-2 mx-auto">
            <h1 className="text-xl md:text-2xl font-extrabold text-[#02033B] text-left">
              5. {offerings[4].title}
            </h1>
            <p className="text-[#2E2F35] text-sm md:text-base text-left">
              {offerings[4].description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F7FE] p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
            Why Choose Bitshift for Training?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] mx-auto place-items-center gap-x-20 gap-y-12">
          {whys.map((why, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-[305px] rounded-2xl items-start"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#02033B] max-w-[70%]">
                {why.title}
              </h1>
              <p className="text-[#2E2F35] text-sm md:text-base text-left">
                {why.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-[url('/call-to-action-elevate.jpg')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-8 justify-center items-center p-8 lg:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-center">
            READY TO ELEVATE YOUR BUSINESS?
          </h1>
          <p className="text-white md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
            Contact us today to schedule a consultation and discover how
            Bitshift can help you optimize your processes for better
            performance.
          </p>
          <button className="flex  items-center gap-4 bg-[#B6E89E] px-16 py-3 text-lg rounded-full text-[#02033B] font-bold hover:bg-[#35BCDC] hover:text-white ">
            Get Started
            <BsArrowRight className="text-xl font-semibold" />
          </button>
        </div>
      </div>
    </Main>
  );
}
