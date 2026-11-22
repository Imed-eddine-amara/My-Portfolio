import React from "react";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        {/* Rotating Circular Text */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-auto animate-spin-slow fill-dark dark:fill-light"
        >
          <path
            id="textPath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className="text-[12.5px] font-semibold tracking-widest">
            <textPath href="#textPath" startOffset="0%">
              EMBEDDED SYSTEMS • FIRMWARE • HARDWARE • IOT •
            </textPath>
          </text>
        </svg>

        {/* Center Circular Button */}
        <Link
          href="mailto:Imededdine.amara@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
