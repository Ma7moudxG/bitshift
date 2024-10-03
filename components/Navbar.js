import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const navItems = { "HomePage": "/", "Services": "/services", "Products":"/products", "Careers": "/careers", "About us": "/about_us", "Contact us": "/contact_us"}
const Navbar = () => {
  return (
    <div className="p-4 sm:p-8 flex items-center justify-between gap-4">
        <div className="flex">
            <Link href="/">
                <Image 
                    src="/bitshift-logo.svg"
                    alt="bitshift logo"
                    height={120}
                    width={120}
                />
            </Link>
        </div>
        <ul className="items-center gap-8 md:flex hidden">
            {Object.entries(navItems).map(([label, url], index) => (
                <li key={index}
                    className="text-[#02033B] hover:font-bold hover:text-[#35BCDC]"
                >
                  <Link href={url}>{label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar