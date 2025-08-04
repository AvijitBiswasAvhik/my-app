"use client";
import React, { useEffect, useState } from "react";

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // Page already loaded
      setLoading(false);
    } else {
      // Wait for load event
      window.addEventListener("load", handleLoad);
    }

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div
        id="main-loading"
        style={{
          
          

         
        }}
        className="bg-black h-screen flex justify-center items-center"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin text-center icon"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      </div>
    );
  }

  return <>{children}</>;
}
