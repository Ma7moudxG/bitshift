'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated hook

const navItems = { 
  "Home": "/", 
  "About us": "/about_us",
  "Services": "/services",
  "Products": "/products", 
  "Training": "/training", 
  "Blogs & News": "/blogs_news", 
  "Contact us": "/contact_us"
};

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isNavOpen, setIsNavOpen] = useState(false);
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
        <ul className="items-center gap-8 lg:flex hidden">
            {Object.entries(navItems).map(([label, url], index) => (
                <li key={index}
                    className={`text-[#02033B] hover:text-[#35BCDC] 
                      ${pathname === url ? 'font-bold text-[#35BCDC]' : ''}`}
                >
                  <Link href={url}>{label}</Link>
                </li>
            ))}
        </ul>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] gap-12">
              {Object.entries(navItems).map(([label, url], index) => (
                  <li key={index}
                      className='text-[#02033B] hover:text-[#35BCDC] text-xl'
                  >
                    <Link href={url}>{label}</Link>
                  </li>
              ))}
            </ul>
          </div>
        </section>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Navbar;
