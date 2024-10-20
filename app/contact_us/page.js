export const metadata = {
  title: "Bitshift ⋅ Contact Us",
  description: "",
};

import ContactForm from "../../components/ContactForm";
import ContactFormT from "../../components/ContactFormT";
import Main from "../../components/Main";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ContactUS() {
  return (
    <Main>
      <div className="relative bg-[url('/blogs-news2-bg.avif')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 lg:justify-start lg:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-left">
            CONTACT
            <br className="hidden lg:block" /> US
          </h1>
        </div>
      </div>

      <div className="bg-[#F1F7FE] p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
            Get in Touch with Us
          </h1>
          <p className="text-[#667085] md:text-base lg:text-lg text-center md:text-center md:max-w-[70%] mx-auto">
            We’re here to help you transform your business processes and achieve
            your goals. Whether you have questions about our services, need
            assistance, or want to schedule a consultation, we’d love to hear
            from you!
          </p>
        </div>

        <ContactFormT />
      </div>

      <div className="bg-white p-8 sm:p-10 md:py-14 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-rowitems-center justify-between gap-6 max-w-[1200px] mx-auto">
          <h1 className="text-[#35BCDC] font-extrabold text-3xl lg:text-4xl text-center">
            Why Choose Bitshift?
          </h1>
          <p className="text-[#2E2F35] md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
            At Bitshift, we value every interaction. Our dedicated team is
            committed to providing prompt responses and personalized support to
            ensure your inquiries are addressed effectively.
          </p>
        </div>
      </div>

      <div className="relative bg-[url('/call-to-action-elevate.jpg')] bg-center bg-cover h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02033B] z-0"></div>
        <div className="relative max-w-[1200px] mx-auto h-full flex flex-col gap-8 justify-center items-center p-8 lg:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl text-center">
            Get Started Today!
          </h1>
          <p className="text-white md:text-lg lg:text-xl text-center md:text-center md:max-w-[80%] mx-auto">
            Invest in your team’s future by partnering with Bitshift for your
            training needs. Contact us today to discuss how we can create a
            tailored training program that meets your organization’s objectives.
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
