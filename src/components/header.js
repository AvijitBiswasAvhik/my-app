"use client";
import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  return (
    <header id="header-main">
      <div className="header-container sm:mx-3 md:mx-8 lg:mx-15 xl:mx-18">
        <div className="grid grid-cols-10 lg:grid-cols-2 header-container-row px-2">
          <div className="header-logo-container-col col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-1">
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
          
        </div>
          <div className="flex items-center justify-end col-span-full sm:md:col-span-7 md:col-span-8 lg:col-span-1">
            <nav
              aria-label="Main navigation"
              className="header-nav hidden sm:block"
              id="navigation-menu"
            >
              <ul className="header-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          
      </div>
      <div className="sm:hidden flex items-center justify-end -col-end-1 sm:col-span-0 border border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.9}
              stroke="currentColor"
              className="size-9"
              id="toogle-menu"
              onClick={(e) => {
                e.stopPropagation();
                document
                  .getElementById("navigation-menu")
                  .classList.toggle("hidden");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
    </header>
  );
}
