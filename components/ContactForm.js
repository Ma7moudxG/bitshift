"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };
  

  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className=" bg-white grid grid-cols-1 md:grid-cols-3 h-[667px] rounded-xl">
        <div className="bg-[#02033B] flex flex-col justify-between rounded-xl text-white p-8 items-start text-left">
          <h1 className="text-2xl font-bold">Contact Information</h1>
          <div>
            <div className="flex flex-col items-start gap-8 text-white">
              <Link href="#" className="text-sm flex items-center gap-3">
                <MdEmail className="text-lg" />
                info@bitshift-tech.com
              </Link>
              {/* <Link href="#" className="text-sm flex items-center gap-3">
                <FaPhoneAlt className="text-lg " />
                +20 (0)123456789
              </Link> */}
              <Link href="#" className="text-sm  flex items-center gap-3">
                <IoLocationSharp className="text-lg" />
                Ras Alkhaima, UAE
              </Link>
            </div>
          </div>
          <div>
            <p className="text-left text-sm">Follow us on Social Media</p>
            <div className="flex items-start space-x-4 mt-4">
              <Link href="#">
                <FaLinkedin  className="text-3xl hover:text-[#4371c7] cursor-pointer" />
              </Link>
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

        <div className="bg-white md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="p-8 flex flex-col gap-5 text-left"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="fullname">Full Name</label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text"
                id="fullname"
                placeholder="John Doe"
              />
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="phone">Phone Number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  id="email"
                  placeholder="0123456789"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              className="bg-[#02033B] rounded p-3 text-white font-bold"
              type="submit"
            >
              Send Message
            </button>
          </form>

          <div className="bg-slate-100 flex flex-col">
            {error && (
              <div
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-2`}
              >
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
