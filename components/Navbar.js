'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated hook

const navItems = { 
  "HomePage": "/", 
  "About us": "/about_us",
  "Services": "/services", 
  "Training": "/training", 
  "Resources": "/resources", 
  "Contact us": "/contact_us"
};

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  
  return (
    <div className="p-4 sm:p-8 flex items-center justify-between gap-4 max-w-[1200px] mx-auto">
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
                    className={`text-[#02033B] hover:text-[#35BCDC] 
                      ${pathname === url ? 'font-bold text-[#35BCDC]' : ''}`}
                >
                  <Link href={url}>{label}</Link>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Navbar;
