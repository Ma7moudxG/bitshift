"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../app/utils/send-email";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactFormT: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  function onSubmit(data: FormData) {
    sendEmail({...data, subject});
    reset();
  }

  return (
    <div className=" container mx-auto">
      <div className=" max-w-[1200px] bg-white grid grid-cols-1 md:grid-cols-3 min-h-screen md:min-h-[667px] rounded-xl mx-auto">
        {/* First Column - Contact Information */}
        <div className="bg-[#02033B] flex flex-col justify-between rounded-xl text-white p-12 items-start text-left gap-5 md:gap-0 md:col-span-1">
          <h1 className="text-2xl font-bold">Contact Information</h1>
          <div>
            <div className="flex flex-col items-start gap-8 text-white">
              <Link href="#" className="text-sm flex items-center gap-3">
                <MdEmail className="text-lg" />
                info@bitshift.com
              </Link>
              <Link href="#" className="text-sm flex items-center gap-3">
                <FaPhoneAlt className="text-lg " />
                +20 (0)123456789
              </Link>
              <Link href="#" className="text-sm  flex items-center gap-3">
                <IoLocationSharp className="text-lg" />
                Maadi, Cairo, Egypt
              </Link>
            </div>
          </div>
          <div>
            <p className="text-left text-sm">Follow us on Social Media</p>
            <div className="flex items-start space-x-4 mt-4">
              <Link href="#">
                <FaSquareTwitter className="text-3xl hover:text-slate-700 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaSquareFacebook className="text-3xl hover:text-[#4371c7] cursor-pointer" />
              </Link>
              <Link href="#">
                <FaSquareYoutube className="text-3xl hover:text-red-600 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Second Column - Form */}
        <div className="bg-white md:col-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-12 flex flex-col gap-5 text-left"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-normal text-[#8D8D8D]"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 md:flex-row">
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-normal text-[#8D8D8D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-sm font-normal text-[#8D8D8D]"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  placeholder="0123456789"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  {...register("phone", { required: true })}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#02033B]">
                Subject
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:gap-3 text-sm lg:justify-between">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    value="Inquiry about Services"
                    checked={subject === "Inquiry about Services"}
                    onChange={handleChange}
                    className=" rounded-md border border-gray-300 bg-white text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  />{" "}
                  Inquiry about Services
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    value="Request for Consultation"
                    checked={subject === "Request for Consultation"}
                    onChange={handleChange}
                    className=" rounded-md border border-gray-300 bg-white text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  />{" "}
                  Request for Consultation
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    value="General Questions"
                    checked={subject === "General Questions"}
                    onChange={handleChange}
                    className=" rounded-md border border-gray-300 bg-white text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  />{" "}
                  General Questions
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    value="other"
                    checked={subject === "Other"}
                    onChange={handleChange}
                    className=" rounded-md border border-gray-300 bg-white text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                  />{" "}
                  Other
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-normal text-[#8D8D8D]"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-sm font-normal text-gray-700 outline-none focus:border-[#35BCDC] focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>

            <button className="hover:shadow-form rounded-md bg-[#02033B] hover:bg-[#35BCDC] p-3 text-base font-semibold text-white outline-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormT;
