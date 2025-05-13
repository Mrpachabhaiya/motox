"use client";
import Image from "next/image";

export const ScreenOne = () => {
  return (
    <div className="z-50 screen-one absolute w-full h-full bg-black flex flex-col items-center justify-center">
      {/* Logo centered */}
      <Image alt="logo" src={"/cyclelogo1.png"} height={100} width={100} />

      {/* Loading dots */}
      <div className="flex space-x-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 bg-[#FF6F00] opacity-60"
            style={{
              animation: `pulse 1.5s infinite ${i * 0.2}s`,
              transformOrigin: "center",
            }}
          />
        ))}
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};
