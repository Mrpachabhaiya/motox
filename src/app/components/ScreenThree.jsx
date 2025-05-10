"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoPowerSharp } from "react-icons/io5";
import { IoMdBatteryCharging } from "react-icons/io";
export const ScreenThree = () => {
	// const currentTime = new Date().toLocaleTimeString([], {
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// });
	// Sidhai yesari date use garda kheri next js ma yo page jaba prerender hunca server ma,it will take server time and client ma aauda tmro computer ko local time which will be different
	// so useEffect vitra matra date initialization garnu parxa
	const [currentTime, setCurrentTime] = useState("00:00");

	useEffect(() => {
		const now = new Date();
		const formatted = now.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		setCurrentTime(formatted);
	}, []);
	return (
		<div className="absolute top-0 left-0 z-2 screen-three h-full w-full bg-gradient-to-b from-[#272626] to-[#0f0f0f] flex flex-col  py-3">
			<div className=" w-full h-full relative z-20">
				<div className="flex justify-between items-center px-4  pt-0 pb-6">
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
							<div className="w-5 h-3 border border-gray-300 rounded-sm flex items-center justify-start">
								<div className="h-2 w-3/4 bg-gray-300 mx-px"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <div
					className=" bike-image absolute top-[-20%] w-full z-100 h-full scale-y-90   "
					style={{
						backgroundImage: "url('./moto-bike1.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div> */}

				<div className="icon-power absolute z-10 left-[50%] bottom-[36%] bg-[#6beb38] rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
					<span className="text-black font-bold text-sm">
						<IoPowerSharp className="h-6 w-6 font-bold" />
					</span>
				</div>
				<div className="timerbox absolute bottom-[25%] w-full   ">
					<div className="flex justify-between items-center px-9 ">
						<div className=" text-white">
							<p className="text-xs opacity-80 tracking-wide">Driving Time</p>
							<p className="text-5xl font-bold ">24:24</p>
							<p className="text-xs opacity-80 tracking-wide">minutes</p>
						</div>

						{/* Clock icon box (GSAP Target: clockBox) */}
						<div className=" timerboxa bg-[#FF6F00] bg-opacity-70 w-14 h-14 rounded-xl flex items-center justify-center">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className="absolute z-10 bottom-0 w-full  px-3">
					<div className="grid grid-cols-2 grid-rows-2 gap-4">
						<div className="charginbox bg-[#FF6F00] bg-opacity-70 p-3 rounded-3xl row-span-2 flex items-center justify-center flex-col ">
							<div className="mb-2 p-2 rounded-full bg-[#ffff]">
								<IoMdBatteryCharging className="h-5 w-5" color="#FF6F00" />
							</div>
							<p className="text-white text-4xl font-bold">89%</p>
							<p className="text-[#fff] opacity-80 text-xs tracking-wide">
								Battery
							</p>
						</div>

						<div className=" members bg-[#ffff] bg-opacity-70 p-3 rounded-2xl flex gap-4 items-center">
							<div className="mb-2 p-2 rounded-full bg-[#000]">
								<IoMdBatteryCharging className="h-4 w-4" color="#fff" />
							</div>
							<div>
								<p className="text-black text-xl font-bold tracking-wide">
									70KM
								</p>
								<p className="text-gray-500 text-xs tracking-wide">Covered</p>
							</div>
						</div>

						<div className="temperaturebox bg-[#3a3939] bg-opacity-30 p-3 rounded-2xl">
							<p className="text-white text-xl tracking-wide font-bold">21°C</p>
							<p className="text-gray-300 text-xs tracking-wide">Climate</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
