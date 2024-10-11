import {
  Footer,
  FooterCopyright,
  FooterTitle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquareFacebook, FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FooterComponent() {
  return (
    <Footer className="bg-white flex flex-col">
      <div className=" w-full max-w-[1000px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start md:items-center gap-8">
          
          {/* Left section (Logo) */}
          <div className="text-center md:items-start">
            <Link href="/">
                <Image 
                    src="/bitshift-logo.svg"
                    alt="bitshift logo"
                    height={160}
                    width={160}
                />
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-center md:text-left pt-4">
              At Bitshift, we empower businesses to thrive in the digital age.
            </p>
          </div>

          <div className="text-center items-center">
            <FooterTitle title="DO IT BETTER" className="text-lg font-bold text-[#02033B]" />
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#"><FaSquareTwitter className="text-[#35BCDC] text-5xl hover:text-black cursor-pointer"/></Link>
              <Link href="#"><FaSquareFacebook className="text-[#35BCDC] text-5xl hover:text-[#4371c7] cursor-pointer"/></Link>
              <Link href="#"><FaSquareYoutube className="text-[#35BCDC] text-5xl hover:text-red-600 cursor-pointer"/></Link>
              
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-2 mt-4 md:items-end">
              <Link href="#" className="text-xs text-[#667085] hover:underline">Privacy Policy</Link>
              <Link href="#" className="text-xs text-[#667085] hover:underline">Terms of Service</Link>
            </div>
          </div>

          <div className="text-center items-center">
              <FooterTitle title="CONTACT" className="text-lg font-bold text-[#02033B]" />
              <div className="flex flex-col items-center gap-2 justify-center space-x-4 mt-4">
                <Link href="#" className="text-sm text-[#667085] flex items-center gap-2">
                  <MdEmail className="text-lg text-[#35BCDC]" />
                  info@bitshift.com
                </Link>
                <Link href="#" className="text-sm text-[#667085] flex items-center gap-2">
                  <FaPhoneAlt className="text-lg text-[#35BCDC]" />
                  +20 (0)123456789
                </Link>
                <Link href="#" className="text-sm text-[#667085] flex items-center gap-2">
                  <IoLocationSharp className="text-lg text-[#35BCDC]" />
                  Maadi, Cairo, Egypt
                </Link>
              </div>
            </div>
        </div>

      </div>
      {/* Copyright */}
      <div className="w-full text-center bg-[#02033B] py-2">
        <FooterCopyright
          by="Bitshift Software Limited"
          year={2024}
          className="text-sm text-white"
        />
      </div>
    </Footer>
  );
}
