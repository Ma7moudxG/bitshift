"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  Home: "/",
  "About us": "/about_us",
  Services: "/services",
  Products: "/products",
  Training: "/training",
  "News & Blogs": "/news-blogs",
  "Contact us": "/contact_us",
};

const Navbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 220) setHeader(true);
    else setHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  return (
    <>
      <nav
        className={`${
          header ? "fixed top-0 left-0 w-full z-10 bg-white shadow-md" : ""
        }`}
      >
        <div
          className={`${
            header ? "p-3" : "p-4 sm:p-8"
          } transition-all duration-300`}
        >
          <div className="flex items-center justify-between gap-4 max-w-[1200px] mx-auto">
            <Link href="/">
              <Image
                src="/bitshift-logo.svg"
                alt="bitshift logo"
                height={160}
                width={160}
                className="w-[120px] md:w-[160px]"
              />
            </Link>
            <ul className="items-center gap-8 lg:flex hidden">
              {Object.entries(navItems).map(([label, url], index) => (
                <li
                  key={index}
                  className={`text-[#02033B] hover:text-[#35BCDC] 
                    ${pathname === url ? "font-bold text-[#35BCDC]" : ""}`}
                >
                  <Link href={url}>{label}</Link>
                </li>
              ))}
            </ul>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2 cursor-pointer"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 bg-gray-600"></span>
                <span className="block h-0.5 w-8 bg-gray-600"></span>
                <span className="block h-0.5 w-8 bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer"
                  onClick={() => setIsNavOpen(false)}
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
                    <li
                      key={index}
                      className="text-[#02033B] hover:text-[#35BCDC] text-xl"
                      onClick={() => setIsNavOpen(false)}
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
        </div>
      </nav>
      {/* Add a margin-top to main content only when the navbar is fixed */}
      <main className={`${header ? "mt-[64px]" : ""}`}>
        {/* Main content goes here */}
      </main>
    </>
  );
};

export default Navbar;
