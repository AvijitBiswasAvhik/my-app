"use client";
import React, { useState, useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Header() {
  let [showMeenu, setShowMenu] = useState();
  let [pathname, setPathname] = useState({ path: usePathname() });
  const pathnames = usePathname();
  const boxRef = useRef();
  let menu = ["/", "/reviews", "/categories", "/contact", "/chat", "/about"];
  useEffect(() => {
    setPathname({ name: pathnames });
    const postData = {
      text: "Explain how AI works in a few words",
    };
    
  }, []);
  //AIzaSyCysboseeTzjvMGXVVeKTMg2-yh3WmNV3A
  console.log(pathname);
  return (
    <header id="header-main" className="sticky top-0 shadow-md">
      <div className="grid grid-cols-10 lg:grid-cols-2 header-container-row items-center box-border">
        <div className="px-2 h-[56px] bg-[grey] header-logo-container-col col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className={`${geistSans.variable} ${geistMono.variable} header-logo`}
            aria-label="GadgetReview Home"
          >
            <span className="header-logo-text">
              <span style={{ color: "#DC143C" }}>L</span>
              <span style={{ color: "#4169E1" }}>I</span>
              <span style={{ color: "#DAA520" }}>P</span>
              <span style={{ color: "#3CB371" }}>I</span>
              <span style={{ color: "#DA70D6" }}>K</span>
              <span style={{ color: "#FF6347" }}>A</span>
            </span>
          </Link>
        </div>
        <div className="px-2 h-[56px] sm:hidden h-full flex items-center justify-end col-span-7 h-100 bg-[grey]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.9}
            stroke="currentColor"
            className="size-9 cursor-pointer hover:color-[#a8a8a8]"
            id="toogle-menu"
            onClick={(e) => {
              e.stopPropagation();
              const menu = document.getElementById("navigation-menu");
              menu.classList.toggle("hidden");
              //menu.classList.toggle("h-[35px]");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="px-2 flex items-center justify-end col-span-full sm:h-full bg-[#dbdbdb] sm:bg-[grey] sm:col-span-7 md:col-span-7 md:col-span-8 lg:col-span-1">
          <nav
            aria-label="Main navigation"
            className="header-nav hidden sm:block"
            id="navigation-menu"
          >
            
            <ul className="header-menu">
              {menu.map((item) => {
                let color = item == pathnames ? "header-active-link" : "";
                return (
                  <li key={item + "header-menu"}>
                    <Link
                      href={item}
                      ref={boxRef}
                      onClick={(e) => {
                        e.stopPropagation();
                        
                        setPathname({ name: item });
                      }}
                      className={color + " capitalize"}
                    >
                      {item == "/" ? "home" : item.substring(1)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
