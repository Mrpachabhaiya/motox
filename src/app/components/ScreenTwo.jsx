// components/ScreenOne.js
import Image from "next/image";
import React from "react";

export const ScreenTwo = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#272626] to-[#0f0f0f] flex flex-col px-4 py-3 ">
      <div className="h-full w-full">
        <div className="flex justify-between items-center  pt-1 pb-6">
          <div className="text-sm font-medium text-gray-300">{currentTime}</div>
          <div className="flex items-center space-x-2">
            {/* Signal strength indicator */}
            <div className="flex items-end space-x-px">
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
            </div>

            {/* WiFi icon */}
            <svg
              className="w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>

            {/* Battery icon */}
            <div className="flex items-center">
              {/* <div className="text-xs font-medium text-gray-300 mr-1">84%</div> */}
              <div className="w-5 h-3 border border-gray-300 rounded-sm flex items-center justify-start">
                <div className="h-2 w-3/4 bg-gray-300 mx-px"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="text-base font-bold text-black flex justify-center items-center">
            <Image
              height={50}
              width={50}
              src={"/cyclelogo1.png"}
              alt="cycle-logo"
            />
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full flex flex-col items-start ">
          <h1 className="text-sm font-thin text-[#FF6F00] mb-4">
            GOOD MORNING!
          </h1>
          <h2 className="text-6xl font-bold text-[#ffff] mb-2 w-full">
            Enjoy Your <br /> Motorcycle
          </h2>
          <p className="text-sm tracking-wide text-gray-400 ">
            Let's go for a Motorcycle ride?
          </p>

          {/* Motorcycle image placeholder - replace with actual image */}
          <div
            className=" absolute left-0 w-full h-full   "
            style={{
              backgroundImage: "url('./moto-bike1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Get Started button */}
          <button className="absolute bottom-2 bg-[#FF6F00] text-black border-none py-2 px-4 rounded-xl text-lg font-bold flex items-center justify-center mt-auto mb-8 self-center cursor-pointer">
            Get Started
            <span className="ml-3 text-xl ">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
